<?php
namespace App\Http\Controllers\api\timetable;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Route;
use App\Model\Department;
use App\Model\Shift;
use App\Model\Subject;
use App\Model\User;
use App\Model\Weekday;
use App\Model\Timeslot;
use App\Model\Timetable;
use App\Model\Section;
use App\Model\Student;

class TimetableController extends Controller
{
    public function add(Request $request, $schoolName)
    {
        $rules = [
            'department' => 'required',
            'section'    => 'required',
            'shift'      => 'required',
            'weekday'   => 'required|array',
            'subjects'  => 'required|array',
            'teachers'  => 'required|array'
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
            foreach ($request->subjects as $timeslot => $subject) {
                // code...
                foreach($request->weekday as $weekday) {
                    $arr = [
                        'department'    => $request->department,
                        'section'       => $request->section,
                        'shift'         => $request->shift,
                        'weekday'       => $weekday['name'],
                        'timeslot'      => $timeslot,
                        'subject'       => $subject,
                        'teacher'       => $input['teachers'][$timeslot],
                    ];
                    $condition = [
                        'department'    => $request->department,
                        'section'       => $request->section,
                        'weekday'       => $weekday['name'],
                        'timeslot'      => $timeslot,
                    ];
                    Timetable::updateOrCreate($condition, $arr);
                }
            }
            $re = [
                'status'    => true,
                'message'   => 'Success! Record has been added.',
            ];
            $responseCode = 200;
        }
        return response()->json($re, $responseCode);
    }
    public function edit(Request $request) {
        $input = $request->all();
        $rules = [
            'department' => 'required',
            'section'    => 'required',
            'teacher'    => 'required|array',
            'subject'    => 'required|array'
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
            foreach($input['teacher'] as $timeslot_id => $weeks) {
                if(!empty($weeks)) :
                    foreach($weeks as $w => $teacher) {
                        $arr = $input;
                        $arr['teacher'] = $teacher;
                        $arr['timeslot'] = $timeslot_id;
                        $arr['subject'] = $input['subject'][$timeslot_id][$w];
        
                        $conditionArr = [
                            'section' => $input['section'],
                            'weekday' => $w,
                            'timeslot'=> $timeslot_id
                        ];

                        Timetable::updateOrCreate($conditionArr, $arr);
                    }
                endif;
            }
            $re = [
                'status'    => true,
                'message'   => 'Timetable has been updated.'
            ];
        }
        return response()->json($re, 200);
    }
    public function getData(Request $request)
    {
        $sectionInfo = Section::with('cls')->find($request->section_id);
        $data = Timetable::where('department', $request->department_id)->where('section', $request->section_id)->get();
        $timeslots = Timeslot::where('shift', @$data[0]->shift)->where('school', auth()->user()->school)->get();
        $weekday = Weekday::where('school', auth()->user()->school)->first();
        $weekArr = [];
        if ($weekday->Monday == "Y") {
            $weekArr[] = "Monday";
        }
        if ($weekday->Tuesday == "Y") {
            $weekArr[] = "Tuesday";
        }
        if ($weekday->Wednesday == "Y") {
            $weekArr[] = "Wednesday";
        }
        if ($weekday->Thursday == "Y") {
            $weekArr[] = "Thursday";
        }
        if ($weekday->Friday == "Y") {
            $weekArr[] = "Friday";
        }
        if ($weekday->Saturday == "Y") {
            $weekArr[] = "Saturday";
        }
        if ($weekday->Sunday == "Y") {
            $weekArr[] = "Sunday";
        }
        $timetables = [];
        $i = 0;
        foreach ($timeslots as $key => $tslot) {
            $timetables[$key]['timeslot_id'] = $tslot->id;
            $timetables[$key]['timeslot'] = $tslot->name;
            $timetables[$key]['timeslot_time'] = date("h:i A", strtotime($tslot->time_start))." ".date("h:i A", strtotime($tslot->time_end));
            foreach ($weekArr as $wday) {
                $timetable_data = Timetable::with(['subject_info', 'teacher_info', 'timeslot_info'])->where('department', $request->department_id)->where('section', $request->section_id)->where('weekday', $wday)->where('timeslot', $tslot->id)->first();
                $timetables[$key][$wday] = $timetable_data;
                $i++;
            }
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
                'data'      => $timetables,
                'timeslots' => $timeslots,
                'weekdays'  => $weekArr,
                'class_full_name' => $sectionInfo->cls->name . ' - ' . $sectionInfo->name,
            ];
        }
        return response()->json($re, 200);
    }
    public function getTeacherData(Request $request)
    {
        $teacher = User::find($request->teacher_id);
        $data = Timetable::where('teacher', $request->teacher_id)->get();
        $timeslots = Timeslot::where('school', auth()->user()->school)->get();
        $weekday = Weekday::where('school', auth()->user()->school)->first();
        $weekArr = [];
        if ($weekday->Monday == "Y") {
            $weekArr[] = "Monday";
        }
        if ($weekday->Tuesday == "Y") {
            $weekArr[] = "Tuesday";
        }
        if ($weekday->Wednesday == "Y") {
            $weekArr[] = "Wednesday";
        }
        if ($weekday->Thursday == "Y") {
            $weekArr[] = "Thursday";
        }
        if ($weekday->Friday == "Y") {
            $weekArr[] = "Friday";
        }
        if ($weekday->Saturday == "Y") {
            $weekArr[] = "Saturday";
        }
        if ($weekday->Sunday == "Y") {
            $weekArr[] = "Sunday";
        }
        $timetables = [];
        $i = 0;
        foreach ($timeslots as $key => $tslot) {
            foreach ($weekArr as $wday) {
                $timetable_data = Timetable::with(['subject_info', 'section_info', 'section_info.cls'])->where('teacher', $request->teacher_id)->where('weekday', $wday)->where('timeslot', $tslot->id)->first();
                $timetables[$key]['timeslot_id'] = $tslot->id;
                $timetables[$key]['timeslot'] = $tslot->name;
                $timetables[$key]['timeslot_time'] = date("h:i A", strtotime($tslot->time_start))." ".date("h:i A", strtotime($tslot->time_end));
                $timetables[$key][$wday] = $timetable_data;
                $i++;
            }
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
                'data'      => $timetables,
                'timeslots' => $timeslots,
                'weekdays'  => $weekArr,
                'teacher_name' => $teacher->name
            ];
        }
        return response()->json($re, 200);
    }
    public function getDropdowns( Request $request )
    {
        $user = auth()->user();

        $departments    = Department::where('dept_school', $user->school)->get()->toArray();
        $shifts         = Shift::where('shift_school', $user->school)->get()->toArray();
        $subjects       = Subject::where('school', $user->school)->get()->toArray();

        $teachers       = User::where('school', $user->school)->whereHas('roleName', function ($q) {
            $q->where('name', 'Teacher');
        })->get()->toArray();

        $weekday        = Weekday::where('school', $user->school)->first();
        $allDays        = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        $weekdays       = [];
        foreach ($allDays as $day) {
            if ($weekday->{$day} == "Y") {
                $weekdays[] = ["name" => $day];
            }
        }

        $re = compact('departments', 'shifts', 'teachers', 'weekdays', 'subjects');
        return response()->json($re, 200);
    }

    public function student(Request $request)
    {
        $studentInfo = Student::where('uid', auth()->user()->id)->firstOrFail();
        $section_id = $studentInfo->section;
        
        $sectionInfo = Section::with('cls', 'cls.dept')->findOrFail($section_id);

        $data = Timetable::where('department', $sectionInfo->cls->dept->id)->where('section', $section_id)->get();
        $timeslots = Timeslot::where('shift', @$data[0]->shift)->where('school', auth()->user()->school)->get();
        $weekday = Weekday::where('school', auth()->user()->school)->first();

        $weekArr = [];
        if ($weekday->Monday == "Y") {
            $weekArr[] = "Monday";
        }
        if ($weekday->Tuesday == "Y") {
            $weekArr[] = "Tuesday";
        }
        if ($weekday->Wednesday == "Y") {
            $weekArr[] = "Wednesday";
        }
        if ($weekday->Thursday == "Y") {
            $weekArr[] = "Thursday";
        }
        if ($weekday->Friday == "Y") {
            $weekArr[] = "Friday";
        }
        if ($weekday->Saturday == "Y") {
            $weekArr[] = "Saturday";
        }
        if ($weekday->Sunday == "Y") {
            $weekArr[] = "Sunday";
        }
        $timetables = [];
        $i = 0;
        foreach ($timeslots as $key => $tslot) {
            $timetables[$key]['timeslot_id'] = $tslot->id;
            $timetables[$key]['timeslot'] = $tslot->name;
            $timetables[$key]['timeslot_time'] = date("h:i A", strtotime($tslot->time_start))." ".date("h:i A", strtotime($tslot->time_end));
            foreach ($weekArr as $wday) {
                $timetable_data = Timetable::with(['subject_info', 'teacher_info', 'timeslot_info'])->where('section', $section_id)->where('weekday', $wday)->where('timeslot', $tslot->id)->first();
                $timetables[$key][$wday] = $timetable_data;
                $i++;
            }
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
                'data'      => $timetables,
                'timeslots' => $timeslots,
                'weekdays'  => $weekArr,
                'class_full_name' => $sectionInfo->cls->name . ' - ' . $sectionInfo->name . ' (' . $sectionInfo->cls->dept->dept_name . ')',
            ];
        }
        return response()->json($re, 200);
    }
    public function teacher(Request $request)
    {
        $teacher = User::find(auth()->user()->id);
        $data = Timetable::where('teacher', auth()->user()->id)->get();
        $timeslots = Timeslot::where('school', auth()->user()->school)->get();
        $weekday = Weekday::where('school', auth()->user()->school)->first();
        $weekArr = [];
        if ($weekday->Monday == "Y") {
            $weekArr[] = "Monday";
        }
        if ($weekday->Tuesday == "Y") {
            $weekArr[] = "Tuesday";
        }
        if ($weekday->Wednesday == "Y") {
            $weekArr[] = "Wednesday";
        }
        if ($weekday->Thursday == "Y") {
            $weekArr[] = "Thursday";
        }
        if ($weekday->Friday == "Y") {
            $weekArr[] = "Friday";
        }
        if ($weekday->Saturday == "Y") {
            $weekArr[] = "Saturday";
        }
        if ($weekday->Sunday == "Y") {
            $weekArr[] = "Sunday";
        }
        $timetables = [];
        $i = 0;
        foreach ($timeslots as $key => $tslot) {
            foreach ($weekArr as $wday) {
                $timetable_data = Timetable::with(['subject_info', 'section_info', 'section_info.cls'])->where('teacher', auth()->user()->id)->where('weekday', $wday)->where('timeslot', $tslot->id)->first();
                $timetables[$key]['timeslot_id'] = $tslot->id;
                $timetables[$key]['timeslot'] = $tslot->name;
                $timetables[$key]['timeslot_time'] = date("h:i A", strtotime($tslot->time_start))." ".date("h:i A", strtotime($tslot->time_end));
                $timetables[$key][$wday] = $timetable_data;
                $i++;
            }
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
                'data'      => $timetables,
                'timeslots' => $timeslots,
                'weekdays'  => $weekArr,
                'teacher_name' => $teacher->name
            ];
        }
        return response()->json($re, 200);
    }
}
