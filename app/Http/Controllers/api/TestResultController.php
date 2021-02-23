<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Model\TestResult;
use App\Model\Test;
use App\Model\School;
use Illuminate\Http\Request;

class TestResultController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
            'test_id'           => 'required|numeric',
            'test_questions'    => 'required|array'
        ]);
        $test = Test::findOrFail($request->test_id);
        $insData = [];
        foreach($request->test_questions as $id => $que)
        {
            $insData[$id] = [
                'user_id'   => $request->user()->id,
                'answered'  => 'yes',
                'answer'    => $que
            ];
        }
        $test->test_result()->sync($insData);

        return response()->json([
            'message'   => 'Done! Result has been submitted successfully.'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\TestResult  $testResult
     * @return \Illuminate\Http\Response
     */
    public function show(TestResult $testResult)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\TestResult  $testResult
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TestResult $testResult)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\TestResult  $testResult
     * @return \Illuminate\Http\Response
     */
    public function destroy(TestResult $testResult)
    {
        //
    }
}
