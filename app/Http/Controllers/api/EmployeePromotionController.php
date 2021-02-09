<?php

namespace App\Http\Controllers\api;

use App\Model\EmployeePromotion;
use App\Model\School;
use App\Model\User;
use App\Model\Attendence;
use App\Model\Weekday;
use App\Model\Holiday;
use App\Model\Allowance;
use App\Model\Deduction;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EmployeePromotionController extends Controller
{
    public function employee_info(Request $request, $school, $employee_id)
    {
        
        $last_record = EmployeePromotion::where('user_id', $employee_id)->latest()->first();
        
        if(!empty($request->type) && $request->type == 'all-details') {
            $user                   = User::find($employee_id);
            $user_field             = $user->custom_fields()->pluck('user_fields.value', 'name');
            $user_field['salary']   = $last_record->new_salary;
            $user_field['grade']    = $last_record->grade_name;
            $user_field['name']     = $user->name;

            $attd  = Attendence::where('attendee', $user->id)
                ->whereRaw('MONTH(attd_date) = ?', $request->month + 1)
                ->whereRaw('YEAR(attd_date) = ?', $request->year)
                ->count();

            $weekday = Weekday::where('school', $user->school)->firstOrFail();

            $include = [];
            if($weekday->Sunday == 'Y')
            {
                $include[] = 0;
            }
            if($weekday->Monday == 'Y')
            {
                $include[] = 1;
            }
            if($weekday->Tuesday == 'Y')
            {
                $include[] = 2;
            }
            if($weekday->Wednesday == 'Y')
            {
                $include[] = 3;
            }
            if($weekday->Thursday == 'Y')
            {
                $include[] = 4;
            }
            if($weekday->Friday == 'Y')
            {
                $include[] = 5;
            }
            if($weekday->Saturday == 'Y')
            {
                $include[] = 6;
            }
            
            $total_week_holiday = $this->countDays($request->year, $request->month + 1, $include);
            $total_days         = cal_days_in_month(CAL_GREGORIAN, $request->month + 1, $request->year);

            $total_holidays     = Holiday::query()
                ->whereRaw('MONTH(date) = ?', $request->month + 1)
                ->whereRaw('YEAR(date) = ?', $request->year)
                ->count();
            
            $total_holidays += $total_week_holiday;
            
            $user_field['paid_days']    = $total_holidays + $attd;
            $user_field['total_days']   = $total_days;
            $last_record                = $user_field;

            // print_r($user->toArray());

            $allowance = Allowance::query()
                ->where('gender', $user->gender)
                ->where('from_amount', '<=', $user->salary)
                ->where('to_amount', '>=', $user->salary)
                ->select('name', 'percent', 'amount', 'type')
                ->get()
                ->toArray();

            $deduction = Deduction::query()
                ->where('gender', $user->gender)
                ->where('from_amount', '<=', $user->salary)
                ->where('to_amount', '>=', $user->salary)
                ->select('name', 'percent', 'amount', 'type')
                ->get()
                ->toArray();

            $allowanceArr = $deductionArr = [];
            foreach ($allowance as $key => $allow) {
                $amount = $allow['amount'];
                if($allow['type'] == 'percent')
                {
                    $percentAmt = $user->salary * $allow['percent'] / 100;
                    if($percentAmt <= $amount)
                    {
                        $amount = $percentAmt;
                    }
                }
                $allowanceArr[] = [
                    'name'   => $allow['name'],
                    'amount' => $amount
                ];
            }
            foreach ($deduction as $key => $deduct) {
                $amount = $deduct['amount'];
                if($deduct['type'] == 'percent')
                {
                    $percentAmt = $user->salary * $deduct['percent'] / 100;
                    if($percentAmt <= $amount)
                    {
                        $amount = $percentAmt;
                    }
                }
                $deductionArr[] = [
                    'name'   => $deduct['name'],
                    'amount' => $amount
                ];
            }

            $last_record['allowance'] = $allowanceArr;
            $last_record['deduction'] = $deductionArr; 
        }

        return response()->json($last_record);
    }

    protected function countDays($year, $month, $include) {
        $count = 0;
        $counter = mktime(0, 0, 0, $month, 1, $year);
        while (date("n", $counter) == $month) {
            if (in_array(date("w", $counter), $include) == false) {
                $count++;
            }
            $counter = strtotime("+1 day", $counter);
        }
        return $count;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $limit = $request->limit ?: 10;
        $query = EmployeePromotion::with(['user'])->whereHas('user', function ($q) use ($school) {
            $q->where('school', $school->uid);
        });

        if(!empty($request->s))
        {
            $query->whereHas('user', function ($q) use ($school, $request) {
                $q->where('school', $school->uid)
                  ->where(function ($q1) use ($request) {
                    $q1->where('name', 'LIKE', "%{$request->s}%")
                    ->orWhere('mobile', 'LIKE', "%{$request->s}%");
                  });
            });
        }

        $promotions = $query->latest()->paginate($limit);

        return response()->json($promotions);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'promotion'                 => 'required|array',
            'promotion.employee_type'   => 'required|string',
            'promotion.user_id'         => 'required|numeric',
            'promotion.current_grade'   => 'required|string',
            'promotion.current_salary'  => 'required',
            'promotion.grade_id'        => 'required|numeric',
            'promotion.new_salary'      => 'required'
        ]);

        $employeePromotion = new EmployeePromotion($request->promotion);
        $employeePromotion->pay_grade_id = $request->promotion['grade_id'];
        $employeePromotion->save();

        return response()->json([
            'message'   => 'Records has been saved.',
            'data'      => $employeePromotion
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\EmployeePromotion  $employeePromotion
     * @return \Illuminate\Http\Response
     */
    public function show($school, EmployeePromotion $employeePromotion)
    {
        return response()->json($employeePromotion);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\EmployeePromotion  $employeePromotion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $school, EmployeePromotion $employeePromotion)
    {
        $request->validate([
            'promotion'                 => 'required|array',
            'promotion.employee_type'   => 'required|string',
            'promotion.user_id'         => 'required|numeric',
            'promotion.current_grade'   => 'required|string',
            'promotion.current_salary'  => 'required',
            'promotion.grade_id'        => 'required|numeric',
            'promotion.new_salary'      => 'required'
        ]);

        $employeePromotion->fill($request->promotion);
        $employeePromotion->pay_grade_id = $request->promotion['grade_id'];
        $employeePromotion->save();

        return response()->json([
            'message'   => 'Records has been saved.',
            'data'      => $employeePromotion
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\EmployeePromotion  $employeePromotion
     * @return \Illuminate\Http\Response
     */
    public function destroy(EmployeePromotion $employeePromotion)
    {
        //
    }

    public function remove(Request $request, $school)
    {
        $request->validate([
            'check' => 'required|array'
        ]);

        EmployeePromotion::whereIn('id', $request->check)->delete();

        return response()->json([
            'message'   => 'Selected Record(s) have been deleted.',
        ]);
    }
}
