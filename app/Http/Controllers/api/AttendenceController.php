<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

use App\Model\Attendence;
use App\Model\User;

class AttendenceController extends Controller
{
    public function save(Request $request, $schoolName)
    {
        $rules = [
            'attendence'  => 'required|array',
            'date'     	  => 'required|date',
        ];

        $input      = $request->all();

        $validator  = Validator::make($input, $rules);

        if ($validator->fails()) {
            $re = [
                'status'    => false,
                'message'   => 'Validation Error!',
                'errors'    => $validator->errors()->all(),
            ];
        } else {
            $attendees = $input['attendence'];
            $role = $request->role ?? "student";
            if ($role != "student") {
                Attendence::where('school', auth()->user()->school)->where('role', $role)->delete();
            }
            if (!empty($input['section'])) {
                Attendence::where('section_id', $input['section'])->delete();
            }
            foreach ($attendees as $uid) {
                $attd 				= new Attendence;
                $attd->attd_date 	= $input['date'];
                $attd->attendant 	= auth()->user()->id;
                $attd->attendee 	= $uid;
                $attd->section_id 	= @$input['section'];
                $attd->role 		= $role;
                $attd->school 		= auth()->user()->school;
                $attd->save();
            }

            $re = [
                'status'    => true,
                'message'   => 'Success! Record has been added.',
            ];
            $responseCode = 200;
        }

        return response()->json($re, 200);
    }

    public function getStudents(Request $request)
    {
        $data = User::with(['studentData', 'studentData.father_info'])->withCount(['attd' => function ($q) use ($request) {
            $q->where('attd_date', $request->date);
        }])
        ->orderBy('fname', 'ASC')
        ->orderBy('lname', 'ASC')
        ->whereHas('studentData', function ($q) use ($request) {
            $q->where('section', $request->section);
        })
        ->whereHas("roleName", function ($q) {
            $q->where('name', 'Student');
        })
        ->where('deleted', 'N')
        ->where("school", auth()->user()->school)
        ->get();
        
        $totalAttd = 0;
        if (!$data->isEmpty()) {
            foreach ($data as $d) {
                if ($d->attd_count) {
                    $attdArr[] = $d->id;
                }
            }
        }

        $re = [
            'status'    => true,
            'message'   => $data->count().' record(s) found.',
            'data'      => $data->toArray(),
            'attendees' => $attdArr
        ];

        return response()->json($re, 200);
    }

    public function getUsersByRole(Request $request, $subdomain, $role = "Teacher")
    {
        $data = User::withCount(['attd' => function ($q) use ($request) {
            $q->where('attd_date', $request->date);
        }])
        ->orderBy('fname', 'ASC')
        ->orderBy('lname', 'ASC')
        ->whereHas("roleName", function ($q) use ($role) {
            $q->where('name', $role);
        })
        ->where('deleted', 'N')
        ->where("school", auth()->user()->school)
        ->get();

        $attdArr = [];
        if (!$data->isEmpty()) {
            foreach ($data as $d) {
                if ($d->attd_count) {
                    $attdArr[] = $d->id;
                }
            }
        }

        $re = [
            'status'    => true,
            'message'   => $data->count().' record(s) found.',
            'data'      => $data->toArray(),
            'attendees' => $attdArr
        ];

        return response()->json($re, 200);
    }
}
