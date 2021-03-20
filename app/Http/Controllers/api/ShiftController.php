<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use Route;
use App\Model\Shift;
use App\Model\School;

class ShiftController extends Controller
{
    public function getInfo($subdomain, $id = null)
    {
        $info = Shift::findOrFail($id)->getOriginal();

        $re = [
            'status'    => true,
            'data'      => $info
        ];

        return response()->json($re, 200);
    }
    public function add(Request $request, $schoolName)
    {
        $rules = [
            'shift_name'           => 'required',
            'shift_opening_time'   => 'required',
            'shift_closing_time'   => 'required',
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
            $is_exists = Shift::where('shift_name', 'LIKE', $input['shift_name'])->where('shift_school', auth()->user()->school)->count();

            if(!$is_exists) :
                $obj = new Shift;
                $obj->shift_name          = $input['shift_name'];
                $obj->shift_opening_time  = $input['shift_opening_time'];
                $obj->shift_closing_time  = $input['shift_closing_time'];
                $obj->shift_school        = auth()->user()->school;
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
                        'Shift name already exists.'
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
            'shift_name'          => 'required',
            'shift_opening_time'  => 'required',
            'shift_closing_time'  => 'required',
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
            $is_exists = Shift::where('shift_name', 'LIKE', $input['shift_name'])->where('shift_school', auth()->user()->school)->where('id', '!=', $input['id'])->count();
            
            if(!$is_exists) :
                $obj                      = Shift::findOrFail($input['id']);
                $obj->shift_name          = $input['shift_name'];
                $obj->shift_opening_time  = $input['shift_opening_time'];
                $obj->shift_closing_time  = $input['shift_closing_time'];
                $obj->shift_school        = auth()->user()->school;
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
                        'Shift name already exists.'
                    ],
                ];
            endif;
        }

        return response()->json($re, 200);
    }
    public function getData(Request $request, School $school)
    {
        $limit = $request->limit ?: 10;
        $query = Shift::withCount(['timeslots'])->where('shift_school', $school->uid);
        if (!empty($request->s)) {
            $query->where(function ($q) use ($request) {
                $q->where('shift_name', 'LIKE', '%'.$request->s.'%')
                  ->orWhere('shift_opening_time', 'LIKE', '%'.$request->s.'%')
                  ->orWhere('shift_closing_time', 'LIKE', '%'.$request->s.'%');
            });
        }

        if($request->type && $request->type == 'all')
        {
            $re = $query->orderBy('shift_name')->get();
        }
        else
        {
            $data = $query->latest()->paginate($limit);
            if ($data->isEmpty()) {
                $re = [
                    'status'    => false,
                    'message'   => 'No record(s) found.'
                ];
            } else {
                foreach ($data as $i => $d) {
                    $data[$i]->shift_opening_time = date('h:i A', strtotime($d->shift_opening_time));
                    $data[$i]->shift_closing_time = date('h:i A', strtotime($d->shift_closing_time));
                }
                $re = [
                    'status'    => true,
                    'message'   => $data->count().' record(s) found.',
                    'data'      => $data,
                ];
            }
        }

        return response()->json($re, 200);
    }
    public function getAllList(School $school)
    {
        $data = Shift::where('shift_school', $school->uid)->latest()->get()->toArray();

        return $data;
    }
    public function searchData(Request $request)
    {
        $query = Shift::withCount(['timeslots']);

        if (!empty($request->s)) {
            $query->where(function ($q) use ($request) {
                $q->where('shift_name', 'LIKE', '%'.$request->s.'%')
                  ->orWhere('shift_opening_time', 'LIKE', '%'.$request->s.'%')
                  ->orWhere('shift_closing_time', 'LIKE', '%'.$request->s.'%');
            });
        }

        $data = $query->latest()->paginate(20);

        if ($data->isEmpty()) {
            $re = [
                'status'    => false,
                'message'   => 'No record(s) found.'
            ];
        } else {
            foreach ($data as $i => $d) {
                $data[$i]->shift_opening_time = date('h:i A', strtotime($d->shift_opening_time));
                $data[$i]->shift_closing_time = date('h:i A', strtotime($d->shift_closing_time));
            }
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
        Shift::whereIn('id', $request->check)->delete();

        $re = [
            'status'    => true,
            'message'   => 'Selected record(s) has been deleted.'
        ];

        return response()->json($re, 200);
    }
}
