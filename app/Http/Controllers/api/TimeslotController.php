<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use Route;
use App\Model\Timeslot;
use App\Model\SubjectClass;

class TimeslotController extends Controller
{
    public function getInfo($subdomain, $id = null)
    {
        $info = Timeslot::findOrFail($id)->getRawOriginal();

        $re = [
            'status'    => true,
            'data'      => $info
        ];

        return response()->json($re, 200);
    }
    public function add(Request $request, $schoolName)
    {
        $input      = $request->all();

        $rules = [
            'name'      => 'required',
            'time_start'=> 'required',
            'time_end'  => 'required',
            'shift'     => 'required|numeric',
        ];

        $validator  = Validator::make($input, $rules);

        if ($validator->fails()) {
            $re = [
                'status'    => false,
                'message'   => 'Validation Error!',
                'errors'    => $validator->errors()->all()
            ];
            $responseCode = 200;
        } else {
            $is_exists = Timeslot::where('name', 'LIKE', $input['name'])->where('shift', $input['shift'])->where('school', auth()->user()->school)->where('deleted', 'N')->count();

            if(!$is_exists):
                $obj                = new Timeslot;
                $obj->name          = $input['name'];
                $obj->time_start    = $input['time_start'];
                $obj->time_end      = $input['time_end'];
                $obj->shift         = $input['shift'];
                $obj->school        = auth()->user()->school;
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
                        'Timeslot name already exists.'
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
            'name'          => 'required',
            'time_start'    => 'required',
            'time_end'      => 'required',
            'shift'         => 'required|numeric',
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
            $is_exists = Timeslot::where('name', 'LIKE', $input['name'])->where('shift', $input['shift'])->where('school', auth()->user()->school)->where('id', '!=', $input['id'])->where('deleted', 'N')->count();

            if(!$is_exists):
                $obj                = Timeslot::findOrFail($input['id']);
                $obj->name          = $input['name'];
                $obj->time_start    = $input['time_start'];
                $obj->time_end      = $input['time_end'];
                $obj->shift         = $input['shift'];
                $obj->school        = auth()->user()->school;
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
                        'Timeslot name already exists.'
                    ],
                ];
            endif;
        }

        return response()->json($re, 200);
    }

    public function getData()
    {
        $data = Timeslot::with(['shift'])->where('deleted', 'N')->latest()->paginate(20);

        if ($data->isEmpty()) {
            foreach ($data as $i => $d) {
                $data[$i]->time_start   = date("F", mktime(0, 0, 0, $d->time_start, 10));
                $data[$i]->time_end     = date("F", mktime(0, 0, 0, $d->time_end, 10));
            }
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
        $query = Timeslot::with('shift')->where('deleted', 'N');

        if (!empty($request->s)) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'LIKE', '%'.$request->s.'%');
            });
        }

        $data = $query->latest()->paginate(20);


        if ($data->isEmpty()) {
            foreach ($data as $i => $d) {
                $data[$i]->time_start   = date("F", mktime(0, 0, 0, $d->time_start, 10));
                $data[$i]->time_end     = date("F", mktime(0, 0, 0, $d->time_end, 10));
            }
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
        Timeslot::whereIn('id', $request->check)->delete();

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

    public function getDataByShift($weburl, $shift_id)
    {
        $user = auth()->user();
        $lists = Timeslot::where('school', $user->school)->where('deleted', 'N')->where('shift', $shift_id)->get()->toArray();

        return response()->json($lists, 200);
    }
}
