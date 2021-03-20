<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Model\StudentPromote;
use Illuminate\Http\Request;

class StudentPromoteController extends Controller
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
            'students'      => 'required|array',
            'section_id'    => 'required|numeric',
            'to_section_id' => 'required|numeric'
        ]);

        foreach ($request->students as $user_id) {
            $studentPromote = new StudentPromote();
            $studentPromote->user_id = $user_id;
            $studentPromote->from_section = $request->section_id;
            $studentPromote->to_section = $request->to_section_id;
            $studentPromote->remarks = $request->remarks;
            $studentPromote->save();
        }

        return response()->json(['message' => 'Success!! Selected Student promoted done.']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\StudentPromote  $studentPromote
     * @return \Illuminate\Http\Response
     */
    public function show(StudentPromote $studentPromote)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\StudentPromote  $studentPromote
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, StudentPromote $studentPromote)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\StudentPromote  $studentPromote
     * @return \Illuminate\Http\Response
     */
    public function destroy(StudentPromote $studentPromote)
    {
        //
    }
}