<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Model\TestQuestion;
use App\Model\Test;
use Illuminate\Http\Request;

class TestQuestionController extends Controller
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
    public function store(Request $request)
    {
        $request->validate([
            'test_id'   => 'required|numeric',
            'ids'       => 'required|array'
        ]);

        $test = Test::findOrFail($request->test_id);
        $test->test_questions()->sync($request->ids, false);

        return response()->json([
            'message'   => 'Assigned to test '.$test->name,
            'data'      => $test
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\TestQuestion  $testQuestion
     * @return \Illuminate\Http\Response
     */
    public function show(TestQuestion $testQuestion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\TestQuestion  $testQuestion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TestQuestion $testQuestion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\TestQuestion  $testQuestion
     * @return \Illuminate\Http\Response
     */
    public function destroy(TestQuestion $testQuestion)
    {
        //
    }

    public function remove(Request $request)
    {
        $request->validate([
            'test_id'   => 'required|numeric',
            'ids'       => 'required|array'
        ]);
        
        TestQuestion::whereIn('question_id', $request->ids)->where('test_id', $request->test_id)->delete();

        return response()->json([
            'message'   => 'Selected record(s) have been deleted.'
        ]);
    }
}
