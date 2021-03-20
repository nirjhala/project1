<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use Route;
use App\Model\School;
use App\Model\Subject;
use App\Model\SubjectClass;
use App\Model\Section;

class SubjectController extends Controller
{
    public function fetchBySection(School $school, $section_id) {
        $section = Section::findOrFail($section_id);
        $subjects = Subject::whereHas('classes', function($q) use($section) {
            $q->where('class', $section->class);
        })->pluck('name', 'id');

        return response()->json($subjects);
    }
    public function index (Request $request, School $school)
    {
        $limit = $request->limit ?: 10;
        $query = Subject::where('school', $school->uid);

        if(!empty($request->class_id))
        {
            $query->whereHas('classes', function ($q) use ($request) {
                $q->where('class', $request->class_id);
            });
        }

        if(!empty($request->type) && $request->type == 'all')
        {
            $subjects = $query->orderBy('name')->pluck('name', 'id');
        }
        else 
        {
            $subjects = $query->latest()->paginate($limit);
        }

        return response()->json($subjects);
    }

    public function getInfo($subdomain, $id = null)
    {
        $info = Subject::findOrFail($id);

        $re = [
            'status'    => true,
            'data'      => $info
        ];

        return response()->json($re, 200);
    }
    public function add(Request $request, $schoolName)
    {
        $rules = [
            'name'      => 'required',
        ];

        $input      = $request->all();

        $validator  = Validator::make($input, $rules);

        if ($validator->fails()) {
            $re = [
                'status'    => false,
                'message'   => 'Validation Error!',
                'errors'    => $validator->errors()->all(),
                'input'     => $input
            ];
        } else {
            $is_exists = Subject::where('name', 'LIKE', $input['name'])->where('school', auth()->user()->school)->count();

            if(!$is_exists) :
                $obj            = new Subject;
                $obj->name      = $input['name'];
                $obj->school    = auth()->user()->school;
                $obj->save();

                $re = [
                    'status'    => true,
                    'message'   => 'Success! Record has been added.',
                ];
            else:
                $re = [
                    'status'    => false,
                    'message'   => 'Validation Error!',
                    'errors'    => [
                        'Subject name already exists.'
                    ],
                ];
            endif;
        }

        return response()->json($re, 200);
    }
    public function updateData(Request $request)
    {
        $schoolName = Route::input('subdomain');
        $input      = $request->all();

        $rules = [
            'id'            => 'required|numeric',
            'name'          => 'required|unique:subjects,id,'.$input['id'],
        ];

        $validator  = Validator::make($input, $rules);

        if ($validator->fails()) {
            $re = [
                'status'    => false,
                'message'   => 'Validation Error!',
                'errors'    => $validator->errors()->all(),
                'input'     => $input
            ];
        } else {
            $is_exists = Subject::where('name', 'LIKE', $input['name'])->where('school', auth()->user()->school)->where('id', '!=', $input['id'])->count();

            if(!$is_exists) :
                $obj            = Subject::findOrFail($input['id']);
                $obj->name      = $input['name'];
                $obj->school    = auth()->user()->school;
                $obj->save();

                $re = [
                    'status'    => true,
                    'message'   => 'Success! Record has been updated.',
                ];
            else:
                $re = [
                    'status'    => false,
                    'message'   => 'Validation Error!',
                    'errors'    => [
                        'Subject name already exists.'
                    ],
                ];
            endif;
        }

        return response()->json($re, 200);
    }
    /**
     * getListByClass function used to fetch records by section id
     * 
     * @params
     * section_id
     * 
    **/
    public function getListByClass($subdomain, Section $section) {
        $data = Subject::whereHas('classes', function($q) use($section) {
            $q->where('class', $section->class);
        })->orderBy('name')->get();

        return response()->json( $data->toArray(), 200 );
    }
    public function getData(Request $request, School $school)
    {
        $limit = $request->limit ?: 10;
        $query = Subject::with(['classes', 'classes.cls', 'classes.cls.dept'])->where('school', $school->uid);

        if (!empty($request->s)) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'LIKE', '%'.$request->s.'%');
            });
        }

        $data = $query->latest()->paginate($limit);

        if ($data->isEmpty()) {
            $re = [
                'status'    => false,
                'message'   => 'No record(s) found.'
            ];
        } else {
            $re = [
                'status'    => true,
                'message'   => $data->count().' record(s) found.',
                'data'      => $data,
            ];
        }

        return response()->json($re);
    }
    public function searchData(Request $request)
    {
        $query = Subject::with(['classes', 'classes.cls', 'classes.cls.dept']);

        if (!empty($request->s)) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'LIKE', '%'.$request->s.'%');
            });
        }

        $data = $query->latest()->paginate(20);

        foreach ($data as $i => $d) {
            $data[$i]->session_start_month = date("F", mktime(0, 0, 0, $d->session_start_month, 10));
        }

        if ($data->isEmpty()) {
            $re = [
                'status'    => false,
                'message'   => 'No record(s) found.'
            ];
        } else {
            $re = [
                'status'    => true,
                'message'   => $data->count().' record(s) found.',
                'data'      => $data,
            ];
        }

        return response()->json($re, 200);
    }
    public function removeData(Request $request)
    {
        Subject::whereIn('id', $request->check)->delete();

        $re = [
            'status'    => true,
            'message'   => 'Selected record(s) has been deleted.'
        ];

        return response()->json($re, 200);
    }

    public function assignToClass(Request $request)
    {
        $input      = $request->all();
        $classes    = $input['classes'];
        $subjectId  = $input['subjectId'];

        SubjectClass::whereNotIn('class', $classes)->where('subject', $subjectId)->delete();
        foreach ($classes as $class) {
            $isExists = SubjectClass::where('class', $class)->where('subject', $subjectId)->count();
            if (!$isExists) {
                $obj = new SubjectClass;
                $obj->class     = $class;
                $obj->subject   = $subjectId;
                $obj->save();
            }
        }

        return response()->json(['status' => true]);
    }
}
