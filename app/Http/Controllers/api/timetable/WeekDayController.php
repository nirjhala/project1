<?php

namespace App\Http\Controllers\api\timetable;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use Route;
use App\Model\Weekday;

class WeekDayController extends Controller
{
    public function info(Request $request)
    {
        $data = Weekday::where('school', auth()->user()->school);
        $weekArr = [
            "Monday" => "N",
            "Tuesday" => "N",
            "Wednesday" => "N",
            "Thursday" => "N",
            "Friday" => "N",
            "Saturday" => "N",
            "Sunday" => "N",
        ];
        $data = $data->count() ? $data->first() : [];

        return response()->json($data, 200);
    }
    public function save(Request $request)
    {
        $input = $request->input;
        $conditionArr = $inputArr = [
            "school" => auth()->user()->school,
        ];
        foreach ($input as $key => $flag) {
            $inputArr[$key] = !empty($flag) ? "Y" : "N";
        }
        Weekday::updateOrCreate($conditionArr, $inputArr);
        return response()->json(['status' => true]);
    }
}
