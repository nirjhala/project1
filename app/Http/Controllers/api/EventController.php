<?php

namespace App\Http\Controllers\api;

use App\Model\Event;
use App\Model\Weekday;
use App\Model\Session;
use App\Model\School;
use Illuminate\Routing\Controller;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $query = Event::with(['media']);
        if(!empty($request->s)) {
            $s = trim($request->s);
            $query->where(function($q) use ($s) {
                $q->where('name', 'LIKE', '%'.$s.'%')
                  ->orWhere('slug', 'LIKE', '%'.$s.'%')
                  ->orWhere('dates_text', 'LIKE', '%'.$s.'%')
                  ->orWhere('classes', 'LIKE', '%'.$s.'%')
                  ->orWhere('short_description', 'LIKE', '%'.$s.'%');
            });
        }
        $lists = $query->where('school_id', $school->uid)->paginate(30);

        if(!$lists->isEmpty()) {
            foreach($lists as $key => $list) {
                if(!empty($list->media->image)) {
                    $lists[$key]->thumb_image = url("uploads/thumb/{$list->media->image}");
                }
            }
        }

        return response()->json($lists);
    }

    public function all(Request $request, School $school) {
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
            $events = Event::where('school_id', $school->uid)->select('name AS title', 'dates', 'type')->get();
            for( $j = 0; $j < $totalMonthDays; $j++ ) {
                $dateTime = strtotime($firstDate . " + {$j} days");
                $date = date("d", $dateTime);

                $status = "N";

                $eventArr = [];
                // if($weekday[date('l', $dateTime)] == 'N') {
                //     $eventArr[] = date('l', $dateTime);
                // }
                
                if(!$events->isEmpty()) {
                    foreach($events as $h) {
                        $dates = !empty($h->dates) && is_array($h->dates) ? $h->dates : [];
                        if($h->type == "date-range" && count($dates) == 2) {
                            $cdate = $dates[0];
                            $endDate = $dates[1];
                            $dates = [];
                            $datediff = strtotime($endDate) - strtotime($cdate);
                            $dayDiff = round($datediff / (60 * 60 * 24));
                            while ( $dayDiff >= 0 ) {
                                $dates[] = $cdate;
                                $cdate = date("Y-m-d", strtotime($cdate . " + 1 days"));
                                $datediff = strtotime($endDate) - strtotime($cdate);
                                $dayDiff = round($datediff / (60 * 60 * 24));
                            }
                        }
                        if(in_array(date('Y-m-d', $dateTime), $dates)) {
                            $eventArr[] = $h->title;
                        }
                    }
                }
                $status = implode(", ", $eventArr);

                $className = !empty($status) ? "bg-primary text-white" : "bg-success text-white";

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
        return response()->json( $dataArr );
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
            'name'     => 'required|string',
            'slug'     => [
                'required',
                'string',
                Rule::unique('events')->where(function($q) use ($user, $input) {
                    return $q->where('school_id', $user->school);
                })
            ],
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
            $event = new Event();
            $event->fill($data);
            $event->save();
            return response()->json(['status' => true, 'data' => $input]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(School $school, $event)
    {
        $query = Event::with('media')->where('school_id', $school->uid);
        if(is_numeric($event)) {
            $query->where('id', $event);
        } else {
            $query->where('slug', $event);
        }
        $event = $query->firstOrFail();
        return response()->json($event);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, School $school, Event $event)
    {
        $input      = $request->get('form');
        $rules = [
            'name'     => 'required|string',
            'slug'     => [
                'required',
                'string',
                Rule::unique('events')->where(function($q) use ($school, $event) {
                    return $q->where('school_id', $school->uid)->where('id', '!=', $event->id);
                })
            ],
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
            $event->fill($request->form);
            $event->save();

            return response()->json(['status' => true, 'message' => 'Data updated successfully.'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
        //
    }

    public function remove(Request $request)
    {
        Event::whereIn('id', $request->check)->delete();

        return response()->json(['status' => true]);
    }
}
