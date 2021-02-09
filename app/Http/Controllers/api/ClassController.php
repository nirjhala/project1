<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use Route;
use App\Model\School;
use App\Model\ClassModel;

class ClassController extends Controller
{
    public function getInfo($subdomain, $id = null)
    {
        $info = ClassModel::findOrFail($id);

        $re = [
            'status'    => true,
            'data'      => $info
        ];

        return response()->json($re, 200);
    }
    public function add(Request $request, $schoolName)
    {
        $rules = [
            'name'        => 'required',
            'department'  => 'required',
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
            $is_exists = ClassModel::where('name', 'LIKE', $input['name'])
                ->where('department', $input['department'])
                ->where('school', auth()->user()->school)
                ->count();

            if(!$is_exists) :
                $obj              = new ClassModel;
                $obj->name        = $input['name'];
                $obj->department  = $input['department'];
                $obj->school      = auth()->user()->school;
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
                        'Class already exists.'
                    ],
                ];
            endif;
        }

        return response()->json($re, 200);
    }
    public function updateData(Request $request)
    {
        $schoolName = Route::input('subdomain');

        $rules = [
            'name'        => 'required',
            'department'  => 'required',
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
            $is_exists = ClassModel::where('name', 'LIKE', $input['name'])->where('department', $input['department'])->where('school', auth()->user()->school)->where('id', '!=', $input['id'])->count();

            if(!$is_exists) :
                $obj              = ClassModel::findOrFail($input['id']);
                $obj->name        = $input['name'];
                $obj->department  = $input['department'];
                $obj->school      = auth()->user()->school;
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
                        'Class already exists.'
                    ],
                ];
            endif;
        }

        return response()->json($re, 200);
    }
    public function getData()
    {
        $data = ClassModel::withCount(['sections' => function ($q) {
            $q;
        }])
        ->with('dept')
        ->where('school', auth()->user()->school)
        
        ->latest()->paginate(20);

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
    public function all(Request $request, School $school)
    {
        $query = ClassModel::with(['dept', 'sections'])->where('school', $school->uid);
        if(!empty($request->department_id))
        {
            $query->where('department', $request->department_id);
        }
        $classes = $query->pluck('name', 'id');
        return response()->json($classes);
    }
    public function getAllList(Request $request)
    {
        $data = ClassModel::with(['dept', 'sections'])->has('sections')->where('school', auth()->user()->school)->latest()->get();
        if($request->type && $request->type == 'all') {
            $data = $data->append('full_class')->pluck('full_class', 'id');
        }

        return response()->json($data, 200);
    }
    public function getListByDept($schoolName, $deptId)
    {
        $lists  = ClassModel::with(['sections' => function ($q) {
            $q;
        }])->where('department', $deptId)->where('school', auth()->user()->school)->get();
        $re     = $lists;
        return response()->json($re, 200);
    }
    public function view_by_dept( $subdomain, $dept_id ) {
        $lists  = ClassModel::with(['sections' => function ($q) {
            $q;
        }])->where('department', $dept_id)->where('school', auth()->user()->school)->get();
        $resArr = [];
        if(!$lists->isEmpty()) {
            foreach($lists as $key => $list) :
                $resArr[$key]['class']      = $list->name;
                foreach($list->sections as $key2 => $sec) {
                    $list->sections[$key2]->class_name = $list->name;
                }
                $resArr[$key]['sections']   = $list->sections;
            endforeach;
        }
        return response()->json($resArr, 200);
    }
    public function searchData(Request $request)
    {
        $query = ClassModel::with('dept')->withCount(['sections'])->where('school', auth()->user()->school);

        if (!empty($request->s)) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'LIKE', '%'.$request->s.'%');
                $q->orWhereHas('dept', function ($dq) use ($request) {
                    $dq->where('dept_name', 'LIKE', '%'.$request->s.'%');
                });
            });
        }

        if (!empty($request->department)) {
            $query->where(function ($q) use ($request) {
                $q->where('department', '=', $request->department);
            });
        }

        $data = $query->latest()->paginate(20);

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
        ClassModel::whereIn('id', $request->check)->delete();

        $re = [
            'status'    => true,
            'message'   => 'Selected record(s) has been deleted.'
        ];

        return response()->json($re, 200);
    }
}
