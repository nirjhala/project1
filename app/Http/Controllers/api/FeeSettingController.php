<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Model\School;
use App\Model\FeeSetting;
use Illuminate\Http\Request;

class FeeSettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $fee_setting = FeeSetting::firstOrCreate(
            [
                'user_id' => $school->uid
            ],
            [
                'fee_day' => 1,
                'penalty_type' => 'monthly'
            ]
        );
        return $fee_setting;
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
            'fee_day'           => 'required|numeric',
            'penalty_type'      => 'required|string',
            'penalty_amount'    => 'required'
        ]);

        $feeSetting = FeeSetting::where('user_id', $school->uid)->firstOrFail();
        $feeSetting->fee_day = $request->fee_day;
        $feeSetting->penalty_type = $request->penalty_type;
        $feeSetting->penalty_amount = $request->penalty_amount;
        $feeSetting->save();

        return response()->json(['message' => 'success']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\FeeSetting  $feeSetting
     * @return \Illuminate\Http\Response
     */
    public function show(FeeSetting $feeSetting)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\FeeSetting  $feeSetting
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $school, FeeSetting $feeSetting)
    {
        $request->validate([
            'fee_day'           => 'required|numeric',
            'penalty_type'      => 'required|string',
            'penalty_amount'    => 'required'
        ]);
        
        $feeSetting->fee_day        = $request->fee_day;
        $feeSetting->penalty_type   = $request->penalty_type;
        $feeSetting->penalty_amount = $request->penalty_amount;
        $feeSetting->save();

        return response()->json(['message' => 'success']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\FeeSetting  $feeSetting
     * @return \Illuminate\Http\Response
     */
    public function destroy(FeeSetting $feeSetting)
    {
        //
    }
}
