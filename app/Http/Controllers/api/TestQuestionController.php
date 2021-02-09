<?php

namespace App\Http\Controllers;

use App\Model\TestQuestion;
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
        //
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
}
