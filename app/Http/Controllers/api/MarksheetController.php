<?php

namespace App\Http\Controllers\api;

use App\Model\Marksheet;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MarksheetController extends Controller
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
            'exam_type_id'  => 'required|numeric',
            'subject_id'    => 'required|numeric',
            'min_marks'     => 'required|numeric|min:1',
            'max_marks'     => 'required|numeric|gt:min_marks',
            'marks'         => 'required|array'
        ]);

        foreach ($request->marks as $user_id => $mark) {
            Marksheet::updateOrCreate([
                'exam_type_id'  => $request->exam_type_id,
                'subject_id'    => $request->subject_id,
                'user_id'       => $user_id
            ],
            [
                'exam_type_id'  => $request->exam_type_id,
                'subject_id'    => $request->subject_id,
                'user_id'       => $user_id,
                'min_marks'     => $request->min_marks,
                'max_marks'     => $request->max_marks,
                'marks'         => $mark
            ]);
        }

        return response()->json([
            'message'   => 'Record(s) updated.'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Marksheet  $marksheet
     * @return \Illuminate\Http\Response
     */
    public function show(Marksheet $marksheet)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Marksheet  $marksheet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Marksheet $marksheet)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Marksheet  $marksheet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Marksheet $marksheet)
    {
        //
    }
}
