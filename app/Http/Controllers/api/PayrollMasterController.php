<?php

namespace App\Http\Controllers\api;

use App\Model\PayrollMaster;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PayrollMasterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $school, $type)
    {
        $payroll_masters = PayrollMaster::select(
            \DB::raw("CONCAT(name, ' (', short_name, ')') AS name"), 
            'id'
        )
        ->where('type', $type)
        ->pluck('name', 'id');

        return response()->json($payroll_masters);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\PayrollMaster  $payrollMaster
     * @return \Illuminate\Http\Response
     */
    public function show(PayrollMaster $payrollMaster)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\PayrollMaster  $payrollMaster
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PayrollMaster $payrollMaster)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\PayrollMaster  $payrollMaster
     * @return \Illuminate\Http\Response
     */
    public function destroy(PayrollMaster $payrollMaster)
    {
        //
    }
}
