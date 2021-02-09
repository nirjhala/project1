<?php

namespace App\Http\Controllers\api;

use App\Model\SalarySlip;
use App\Model\SalarySlipData;
use App\Model\School;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SalarySlipController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $limit = $request->limit ?: 10;
        $query = SalarySlip::where('user_id', $school->uid);
        if(!empty($request->year))
        {
            $query->where('year', $request->year);
        }
        if(!empty($request->month))
        {
            $query->where('month', $request->month + 1);
        }
        $salary_slips = $query->orderBy('name')->paginate($limit);
        return response()->json($salary_slips);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, School $school)
    {
        $request->validate([
            'salary'        => 'required|array',
            'salary.name'   => 'required|string',
            'salary.month'  => 'required|numeric',
            'salary.year'   => 'required|numeric'
        ]);
        
        $input = $request->salary;
        $check = SalarySlip::where('month', $input['month'] + 1)
            ->where('year', $input['year'])
            ->where('user_id', $school->uid)
            ->where('employee_id', $input['employee_id']);
        
        if($check->count())
        {
            $salarySlip = $check->firstOrFail();
        }
        else
        {
            $salarySlip = new SalarySlip();
            $max_number = SalarySlip::where('month', $input['month'])
                ->where('year', $input['year'])
                ->where('user_id', $school->uid)
                ->max('slip_number');
            $salarySlip->slip_number = $max_number + 1;
        }
        $salarySlip->fill($input);
        $salarySlip->month   = $input['month'] + 1;
        $salarySlip->user_id = $school->uid;
        $salarySlip->save();

        // Allowance / Deduction
        $salaryData = [];
        foreach($request->allowances as $data)
        {
            $data['type'] = 'allowance';
            $salaryData[] = new SalarySlipData($data);
        }
        foreach($request->deductions as $data)
        {
            $data['type'] = 'deduction';
            $salaryData[] = new SalarySlipData($data);
        }
        $salarySlip->salary_data()->delete();
        if(!empty($salaryData))
        {
            // dd($salaryData);
            $salarySlip->salary_data()->saveMany($salaryData);
        }

        return response()->json([
            'message'   => 'Salary Slip Generated.',
            'data'      => $salarySlip
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\SalarySlip  $salarySlip
     * @return \Illuminate\Http\Response
     */
    public function show(SalarySlip $salarySlip)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\SalarySlip  $salarySlip
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SalarySlip $salarySlip)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\SalarySlip  $salarySlip
     * @return \Illuminate\Http\Response
     */
    public function destroy(SalarySlip $salarySlip)
    {
        //
    }
}
