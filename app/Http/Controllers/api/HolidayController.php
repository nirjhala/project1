<?php

namespace App\Http\Controllers\api;

use Illuminate\Routing\Controller;

use App\Model\Holiday;
use App\Model\Weekday;
use App\Model\Session;
use App\Model\School;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;

class HolidayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $query = Holiday::query();
        if (!empty($request->s)) {
            $s = trim($request->s);
            $query->where(function ($q) use ($s) {
                $q->where('title', 'LIKE', '%' . $s . '%')
                    ->orWhere('date', 'LIKE', '%' . $s . '%')
                    ->orWhere('description', 'LIKE', '%' . $s . '%');
            });
        }
        $lists = $query->where('school_id', $school->uid)->paginate(30);

        return response()->json($lists);
    }

    public function all(Request $request, School $school)
    {
        $data       = Weekday::where('school', $school->uid);
        $weekday    = $data->count() ? $data->first()->toArray() : [];

        $session    = date('n') > 3 ? date('Y') . '-' . (date('y') + 1) : (date('Y') - 1) . '-' . date('y');
        $startYear  = substr($session, 0, 4);
        $session_exists = Session::where('session_start_year', $startYear)->where('session_school', $school->uid)->where('session_is_deleted', 'N');
        if ($session_exists->count() == 0) {
            $sess = Session::create([
                'session_name'          => $session,
                'session_start_year'    => $startYear,
                'session_start_month'   => 4,
                'session_school'        => $school->uid
            ]);
        } else {
            $sess = $session_exists->first();
        }

        $year  = $sess->session_start_year;
        $month = $sess->session_start_month;
        $startDate = "{$year}-{$month}-01";

        $dataArr = [];
        for ($i = 0; $i < 12; $i++) {
            $firstDate = date("Y-m-d", strtotime("+{$i} months", strtotime($startDate)));
            $totalMonthDays = date('t', strtotime($firstDate)); // Returns total no. of days in month
            $firstWeek = date('w', strtotime($firstDate)); // Returns total no. of days in month

            $currentTime = strtotime(date("Y-m-d"));

            $daysArr = [];
            for ($j = 0; $j < $totalMonthDays; $j++) {
                $dateTime = strtotime($firstDate . " + {$j} days");
                $date = date("d", $dateTime);

                $status = "N";
                $holiday = "";

                $holidayArr = [];
                if ($weekday[date('l', $dateTime)] == 'N') {
                    $holidayArr[] = date('l', $dateTime);
                }

                $holidays = Holiday::where('school_id', $school->uid)->where('date', date('Y-m-d', $dateTime))->select('title', 'date')->get();
                if (!$holidays->isEmpty()) {
                    foreach ($holidays as $h) {
                        $holidayArr[] = $h->title;
                    }
                }
                $status = implode(", ", $holidayArr);

                $className = !empty($status) ? "bg-danger text-white" : "bg-success text-white";

                $daysArr[] = [
                    'date'          => $date,
                    'status'        => $status,
                    "class_name"    => $className
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
        return response()->json($dataArr);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = auth()->user();

        $input      = $request->get('form');
        $rules = [
            'title'     => [
                'required',
                'string',
                Rule::unique('holidays')->where(function ($q) use ($user, $input) {
                    return $q->where('school_id', $user->school);
                })
            ],
            'date'      => 'required|date'
        ];

        $validator  = Validator::make($input, $rules);

        if ($validator->fails()) {
            $re = [
                'status'    => false,
                'message'   => 'Validation Error!',
                'errors'    => $validator->errors()->all()
            ];
            return response()->json($re, 403);
        } else {
            $data = $request->form;
            $data['school_id'] = $user->school;
            $holiday = new Holiday();
            $holiday->fill($data);
            $holiday->save();
            return response()->json(['status' => true, 'data' => $input]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Holiday $holiday
     * @return \Illuminate\Http\Response
     */
    public function show(School $school, Holiday $holiday)
    {
        $holiday = $holiday->getOriginal();
        $holiday['date'] = date("Y-m-d", strtotime($holiday['date']));
        return response()->json($holiday);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Holiday $holiday
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, School $school, Holiday $holiday)
    {
        $input      = $request->get('form');
        $rules = [
            'title' => [
                'required',
                'string',
                Rule::unique('holidays')->where(function ($q) use ($school, $holiday) {
                    return $q->where('school_id', $school->uid)->where('id', '!=', $holiday->id);
                })
            ],
            'date'      => 'required|date'
        ];

        $validator  = Validator::make($input, $rules);

        if ($validator->fails()) {
            $re = [
                'status'    => false,
                'message'   => 'Validation Error!',
                'errors'    => $validator->errors()->all()
            ];
            return response()->json($re, 403);
        } else {
            $holiday->fill($request->form);
            $holiday->save();

            return response()->json(['status' => true, 'message' => 'Data updated successfully.'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Holiday $holiday
     * @return \Illuminate\Http\Response
     */
    public function destroy(Holiday $holiday)
    {
        //
    }

    public function remove(Request $request)
    {
        Holiday::whereIn('id', $request->check)->delete();

        return response()->json(['status' => true]);
    }
}