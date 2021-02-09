<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use Route;
use App\Model\Section;
use App\Model\School;
use App\Model\ClassModel;
use App\Model\Timetable;

class SectionController extends Controller
{
    public function all(Request $request, School $school) {
        if(empty($request->class_id)) {
            $classes = ClassModel::with(['dept'])
                ->has('sections')
                ->where('school', $school->uid)
                ->get()
                ->pluck('full_class', 'id');
            $resData = [];
            foreach($classes as $id => $name) {
                $sections = Section::where('class', $id)->get()->pluck('name', 'id');
                $resData[$name] = $sections;
            }
        } else {
            $resData = Section::where('school', $school->uid)->where('class', $request->class_id)->pluck('name', 'id');
        }
        return response()->json($resData);
    }
    public function getInfo($subdomain, $id = null)
    {
        $info = Section::with('cls')->findOrFail($id);

        $re = [
            'status'    => true,
            'data'      => $info
        ];

        return response()->json($re, 200);
    }
    public function add(Request $request, $schoolName)
    {
        $rules = [
            'names'         => 'required',
            'class'         => 'required|numeric',
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
            $responseCode = 200;
        } else {
            foreach ($input['names'] as $row) {
                $name = $row['name'];
                $conditionArr = [
                    'class' => $input['class'],
                    'name' => $name,
                    'school' => auth()->user()->school
                ];
                $dataArr      = [
                    'class' => $input['class'],
                    'name' => $name,
                    'school' => auth()->user()->school
                ];
                Section::updateOrCreate($conditionArr, $dataArr);
            }

            $re = [
                'status'    => true,
                'message'   => 'Success! Record has been added.',
            ];
            $responseCode = 200;
        }

        return response()->json($re, $responseCode);
    }
    public function updateData(Request $request)
    {
        $schoolName = Route::input('subdomain');

        $rules = [
            'id'            => 'required|numeric',
            'name'          => 'required',
            'class'         => 'required|numeric',
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
            $is_exists = Section::where('name', 'LIKE', $input['name'])->where('class', $input['class'])->where('school', auth()->user()->school)->where('id', '!=', $input['id'])->count();

            if(!$is_exists) :
                $obj = Section::findOrFail($input['id']);
                $obj->name      = $input['name'];
                $obj->class     = $input['class'];
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
                        'Section already exists.'
                    ],
                ];
            endif;
        }

        return response()->json($re, 200);
    }
    public function getListAll() {
        $data = Section::with(['cls', 'cls.dept'])->where('school', auth()->user()->school)->orderBy('name')->paginate(20);

        if ($data->isEmpty()) {
            $re = [
                'status'    => false,
                'message'   => 'No record(s) found.'
            ];
        } else {

            foreach($data as $i => $d) {
                $timetables = Timetable::with('teacher_info')->where('section', $d->id)->whereHas('teacher_info', function($q) {
                    $q->where('school', auth()->user()->school);
                })->get();
                $teachers = [];

                if(!$timetables->isEmpty()) {
                    foreach($timetables as $tt) {
                        $tt->name = sprintf("%05d", $tt->id)."-".$tt->name;
                        $teachers[] = $tt->teacher_info;
                    }
                    $teachers = array_unique($teachers);
                }

                $data[$i]->teachers = $teachers;
            }
            $re = [
                'status'    => true,
                'message'   => $data->count().' record(s) found.',
                'data'      => $data,
            ];
        }

        return response()->json($re, 200);
    }
    public function getData()
    {
        $data = Section::with(['cls', 'cls.dept'])->has('cls')->where('school', auth()->user()->school)->latest()->paginate(20);

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
    public function searchData(Request $request)
    {
        $query = Section::with(['cls', 'cls.dept'])->has('cls')->where('school', auth()->user()->school);

        if (!empty($request->s)) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'LIKE', '%'.$request->s.'%')
                  ->orWhereHas('cls', function ($cq) use ($request) {
                      $cq->where('name', 'LIKE', $request->s);
                  })
                  ->orWhereHas('cls.dept', function ($cq) use ($request) {
                      $cq->where('dept_name', 'LIKE', '%'.$request->s.'%');
                  });
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
        Section::whereIn('id', $request->check)->delete();

        $re = [
            'status'    => true,
            'message'   => 'Selected record(s) has been deleted.'
        ];

        return response()->json($re, 200);
    }
    public function getListByClass(Request $request, $weburl, $classId = null)
    {
        $lists  = Section::where('class', $classId)->get();
        $re     = $lists;
        return response()->json($re, 200);
    }
    public function assignClassTeacher(Request $request) {
        $teachers = $request->teachers;
        $teachers = !empty($teachers) ? array_filter($teachers) : [];
        
        if(!empty($teachers)) {
            foreach($teachers as $teacher_info) {
                foreach($teacher_info as $section_id => $teacher_id) {
                    $teacher_id = !empty($teacher_id) ? $teacher_id : NULL;
                    $section = Section::find($section_id);
                    $section->class_teacher = $teacher_id;
                    $section->save();
                }
            }
        }

        $re = ['status' => true];
        return response()->json( $re, 200 );
    }
}
