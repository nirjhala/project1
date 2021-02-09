<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

use App\Model\Attendence;
use App\Model\User;
use App\Model\Session;
use App\Model\Weekday;

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
                Attendence::where('school', auth()->user()->school)->where('attd_date', $input['date'])->where('role', $role)->delete();
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
    public function student() {
        $lists      = Attendence::where('attendee', auth()->user()->id)->get();
        $data       = Weekday::where('school', auth()->user()->school);
        $weekday    = $data->count() ? $data->first()->toArray() : [];

        $session    = date('n') > 3 ? date('Y').'-'.(date('y') + 1) : (date('Y') - 1).'-'.date('y');
        $startYear  = substr($session, 0, 4);
        $session_exists = Session::where('session_start_year', $startYear)->where('session_school', auth()->user()->school)->where('session_is_deleted', 'N');
        if($session_exists->count() == 0) {
            $sess = Session::create([
                'session_name'          => $session,
                'session_start_year'    => $startYear,
                'session_start_month'   => 4,
                'session_school'        => auth()->user()->school
            ]);
        } else {
            $sess = $session_exists->first();
        }

        $year  = $sess->session_start_year;
        $month = $sess->session_start_month;
        $startDate = "{$year}-{$month}-01";

        $dataArr = [];
        for( $i = 0; $i < 12; $i++ ) {
            $firstDate = date("Y-m-d", strtotime("+{$i} months", strtotime($startDate)));
            $totalMonthDays = date('t', strtotime($firstDate)); // Returns total no. of days in month
            $firstWeek = date('w', strtotime($firstDate)); // Returns total no. of days in month

            $currentTime = strtotime( date("Y-m-d") );

            $daysArr = [];
            for( $j = 0; $j < $totalMonthDays; $j++ ) {
                $dateTime = strtotime($firstDate . " + {$j} days");
                $date = date("d", $dateTime);

                $status = "-";
                $className = "";
                
                if($weekday[date('l', $dateTime)] == 'N') {
                    $status = "H";
                    $className = "bg-primary text-white";
                } elseif($currentTime > $dateTime) {
                    $attd = Attendence::where('attendee', auth()->user()->id)->where('attd_date', date('Y-m-d', $dateTime));

                    $status = $attd->count() ? "PP" : "AA";
                    $className = $attd->count() ? "bg-success text-white" : "bg-danger text-white";
                }

                if(date("Y-m-d") == date("Y-m-d", $dateTime)) {
                    $className  = "bg-secondary text-white";
                } 
                
                $daysArr[] = [
                    'date'      => $date,
                    'status'    => $status,
                    "class_name"    => $className,
                ];
            }
            $leftCount = intval(35 - count($daysArr) - $firstWeek) < 0 ? intval(42 - count($daysArr) - $firstWeek) : intval(35 - count($daysArr) - $firstWeek);
            $dataArr[] = [
                "month"         => date('F Y', strtotime($firstDate)),
                "start_week"    => intval($firstWeek),
                "left"          => $leftCount,
                "days"          => $daysArr,
                "weekdays"      => $weekday
            ];
        }

        return response()->json( $dataArr );
    }

    public function studentById (Request $request, $weburl, $uid = null) {
        $lists      = Attendence::where('attendee', $uid)->get();
        $data       = Weekday::where('school', auth()->user()->school);
        $weekday    = $data->count() ? $data->first()->toArray() : [];

        $session    = date('n') > 3 ? date('Y').'-'.(date('y') + 1) : (date('Y') - 1).'-'.date('y');
        $startYear  = substr($session, 0, 4);
        $session_exists = Session::where('session_start_year', $startYear)->where('session_school', auth()->user()->school)->where('session_is_deleted', 'N');
        if($session_exists->count() == 0) {
            $sess = Session::create([
                'session_name'          => $session,
                'session_start_year'    => $startYear,
                'session_start_month'   => 4,
                'session_school'        => auth()->user()->school
            ]);
        } else {
            $sess = $session_exists->first();
        }

        $year  = $sess->session_start_year;
        $month = $sess->session_start_month;
        $startDate = "{$year}-{$month}-01";

        $dataArr = [];
        for( $i = 0; $i < 12; $i++ ) {
            $firstDate = date("Y-m-d", strtotime("+{$i} months", strtotime($startDate)));
            $totalMonthDays = date('t', strtotime($firstDate)); // Returns total no. of days in month
            $firstWeek = date('w', strtotime($firstDate)); // Returns total no. of days in month

            $currentTime = strtotime( date("Y-m-d") );

            $daysArr = [];
            for( $j = 0; $j < $totalMonthDays; $j++ ) {
                $dateTime = strtotime($firstDate . " + {$j} days");
                $date = date("d", $dateTime);

                $status = "-";
                $className = "";
                
                if($weekday[date('l', $dateTime)] == 'N') {
                    $status = "H";
                    $className = "bg-primary text-white";
                } elseif($currentTime > $dateTime) {
                    $attd = Attendence::where('attendee', $uid)->where('attd_date', date('Y-m-d', $dateTime));

                    $status = $attd->count() ? "PP" : "AA";
                    $className = $attd->count() ? "bg-success text-white" : "bg-danger text-white";
                }

                if(date("Y-m-d") == date("Y-m-d", $dateTime)) {
                    $className  = "bg-secondary text-white";
                } 
                
                $daysArr[] = [
                    'date'      => $date,
                    'status'    => $status,
                    "class_name"    => $className,
                ];
            }
            $leftCount = intval(35 - count($daysArr) - $firstWeek) < 0 ? intval(42 - count($daysArr) - $firstWeek) : intval(35 - count($daysArr) - $firstWeek);
            $dataArr[] = [
                "month"         => date('F Y', strtotime($firstDate)),
                "start_week"    => intval($firstWeek),
                "left"          => $leftCount,
                "days"          => $daysArr,
                "weekdays"      => $weekday
            ];
        }

        return response()->json( $dataArr );
    }
}
