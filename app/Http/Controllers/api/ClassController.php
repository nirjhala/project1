<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use Route;
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
            $is_exists = ClassModel::where('name', 'LIKE', $input['name'])->where('department', $input['department'])->where('school', auth()->user()->school)->where('deleted', 'N')->count();

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
            $is_exists = ClassModel::where('name', 'LIKE', $input['name'])->where('department', $input['department'])->where('school', auth()->user()->school)->where('id', '!=', $input['id'])->where('deleted', 'N')->count();

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
        $data = ClassModel::withCount(['sections'])->with('dept')->where('school', auth()->user()->school)->where('deleted', 'N')->latest()->paginate(20);

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
    public function getAllList()
    {
        $data = ClassModel::with('dept')->where('deleted', 'N')->where('school', auth()->user()->school)->latest()->get();

        return response()->json($data, 200);
    }
    public function getListByDept($schoolName, $deptId)
    {
        $lists  = ClassModel::with(['sections' => function ($q) {
            $q->where('deleted', 'N');
        }])->where('deleted', 'N')->where('department', $deptId)->where('school', auth()->user()->school)->get();
        $re     = $lists;
        return response()->json($re, 200);
    }
    public function searchData(Request $request)
    {
        $query = ClassModel::with('dept')->withCount(['sections'])->where('deleted', 'N')->where('school', auth()->user()->school);

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
        ClassModel::whereIn('id', $request->check)->update(['deleted' => 'Y']);

        $re = [
            'status'    => true,
            'message'   => 'Selected record(s) has been deleted.'
        ];

        return response()->json($re, 200);
    }
}
