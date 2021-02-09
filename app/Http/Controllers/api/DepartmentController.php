<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use Route;
use App\Model\School;
use App\Model\Department;

class DepartmentController extends Controller
{
    public function getInfo($subdomain, $id = null)
    {
        $info = Department::findOrFail($id);

        $re = [
            'status'    => true,
            'data'      => $info
        ];

        return response()->json($re, 200);
    }
    public function add(Request $request, $schoolName)
    {
        $rules = [
            'dept_name' => 'required',
        ];

        $input      = $request->all();

        $validator  = Validator::make($input, $rules);

        if ($validator->fails()) {
            $re = [
                'status'    => false,
                'message'   => 'Validation Error!',
                'errors'    => $validator->errors()->all()
            ];
        } else {
            $is_exists = Department::where('dept_name', 'LIKE', $input['dept_name'])->where('dept_school', auth()->user()->school)->count();

            if(!$is_exists) :
                $obj = new Department;
                $obj->dept_name          = $input['dept_name'];
                $obj->dept_school        = auth()->user()->school;
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
                        'Deparment name already exists.'
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
            'dept_name'          => 'required',
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
            $is_exists = Department::where('dept_name', 'LIKE', $input['dept_name'])->where('dept_school', auth()->user()->school)->where('id','!=', $input['id'])->count();

            if(!$is_exists) :
                $obj                = Department::findOrFail($input['id']);
                $obj->dept_name     = $input['dept_name'];
                $obj->dept_school   = auth()->user()->school;
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
                        'Deparment name already exists.'
                    ],
                ];
            endif;
        }

        return response()->json($re, 200);
    }
    public function getData()
    {
        $data = Department::withCount(['classes'])
        ->where('dept_school', auth()->user()->school)
        ->latest()
        ->paginate(20);

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
    public function getList(Request $request)
    {
        $lists = Department::withCount(['classes'])->where('dept_school', auth()->user()->id)->get();

        $re = [
            'status'    => true,
            'message'   => $lists->count(),
            'data'      => $lists
        ];
        return response()->json($re, 200);
    }
    public function all(Request $request, School $school)
    {
        $departments = Department::where('dept_school', $school->uid)->pluck('dept_name', 'id');

        return response()->json($departments);
    }
    public function getAllList(Request $request)
    {
        $lists = Department::with(['classes' => function ($q) {
            $q->orderBy('sort', 'ASC');
        }])->has('classes')->where('dept_school', auth()->user()->school)->get()->toArray();
        return response()->json($lists, 200);
    }
    public function searchData(Request $request)
    {
        $query = Department::withCount(['classes'])->where('dept_school', auth()->user()->school);

        if (!empty($request->s)) {
            $query->where(function ($q) use ($request) {
                $q->where('dept_name', 'LIKE', '%'.$request->s.'%');
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
        Department::whereIn('id', $request->check)->delete();

        $re = [
            'status'    => true,
            'message'   => 'Selected record(s) has been deleted.'
        ];

        return response()->json($re, 200);
    }
}
