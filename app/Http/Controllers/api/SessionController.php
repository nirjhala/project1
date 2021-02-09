<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use Route;
use App\Model\Session;
use App\Model\School;

class SessionController extends Controller
{
    public function getInfo($subdomain, $id = null)
    {
        $info = Session::findOrFail($id);

        $re = [
            'status'    => true,
            'data'      => $info
        ];

        return response()->json($re, 200);
    }
    public function add(Request $request, $schoolName)
    {
        $rules = [
            'session_name'          => 'required',
            'session_start_year'    => 'required|min:1800|numeric',
            'session_start_month'   => 'required|min:1|max:12|numeric',
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
            $is_exists = Session::where('session_name', 'LIKE', $input['session_name'])->where('session_school', auth()->user()->school)->count();

            if(!$is_exists) {
                $arr = [
                    'session_name'          => $input['session_name'],
                    'session_start_year'    => $input['session_start_year'],
                    'session_start_month'   => $input['session_start_month'],
                    'session_school'        => auth()->user()->school
                ];
                Session::create($arr);
    
                $re = [
                    'status'    => true,
                    'message'   => 'Success! Record has been added.',
                ];
            } else {
                $re = [
                    'status'    => false,
                    'message'   => 'Validation Error!',
                    'errors'    => [
                        'Session name already exists.'
                    ],
                ];
            }
        }

        return response()->json($re, 200);
    }
    public function updateData(Request $request)
    {
        $rules = [
            'session_name'          => 'required',
            'session_start_year'    => 'required|min:1800|numeric',
            'session_start_month'   => 'required|min:1|max:12|numeric',
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
            $is_exists = Session::where('session_name', 'LIKE', $input['session_name'])->where('session_school', auth()->user()->school)->where('id', '!=', $input['id'])->count();

            if(!$is_exists) {
                $obj                        = Session::findOrFail($input['id']);
                $obj->session_name          = $input['session_name'];
                $obj->session_start_year    = $input['session_start_year'];
                $obj->session_start_month   = $input['session_start_month'];
                $obj->session_school        = auth()->user()->school;
                $obj->save();
                $re = [
                    'status'    => true,
                    'message'   => 'Success! Record has been updated.',
                ];
            } else {
                $re = [
                    'status'    => false,
                    'message'   => 'Validation Error!',
                    'errors'    => [
                        'Session name already exists.'
                    ],
                ];
            }
        }

        return response()->json($re, 200);
    }

    public function getData()
    {
        $user       = auth()->user();
        $school_id  = $user->school;

        $data = Session::where('session_school', $school_id)->latest()->paginate(20);

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
    public function all(Request $request) {
        $query = Session::where('session_school', auth()->user()->school);
        if(!empty($request->type) && $request->type == 'all')
        {
            $lists = $query->select('id', 'session_name AS name')->latest()->pluck('name', 'id');
        }
        else
        {
            $lists = $query->get()->toArray();
        }

        return response()->json( $lists );
    }
    public function searchData(Request $request, School $school)
    {
        $query = Session::where('session_school', $school->uid);

        if (!empty($request->s)) {
            $query->where(function ($q) use ($request) {
                $q->where('session_name', 'LIKE', '%'.$request->s.'%')
                  ->orWhere('session_start_year', 'LIKE', '%'.$request->s.'%')
                  ->orWhere('session_start_month', 'LIKE', '%'.$request->s.'%');
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
        Session::whereIn('id', $request->check)->delete();

        $re = [
            'status'    => true,
            'message'   => 'Selected record(s) has been deleted.'
        ];

        return response()->json($re, 200);
    }
}
