<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Model\Test;
use App\Model\School;
use Illuminate\Http\Request;

class TestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $limit = $request->limit ?: 10;
        $query = Test::where('user_id', $school->uid);

        if (!empty($request->s)) {
            $s = $request->s;
            $query->where(function ($q) use ($s) {
                $q->where('title', 'LIKE', "%{$s}%")
                ->orWhere('description', 'LIKE', "%{$s}%");
            });
        }

        $tests = $query->paginate($limit);

        return response()->json($tests);
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
            'record'                    => 'required|array',
            'record.name'               => 'required',
            'record.instruction_id'     => 'required|numeric',
            'record.class_id'           => 'required|numeric',
            'record.subject_id'         => 'required|numeric',
            'record.total_questions'    => 'required|numeric',
            'record.max_marks'          => 'required|numeric',
            'record.min_marks'          => 'required|numeric',
        ]);

        $test = new Test($request->record);
        $test->user_id = $school->uid;
        $test->save();

        return response()->json([
            'message'   => 'Success! Record has been saved.',
            'data'      => $test
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Test  $test
     * @return \Illuminate\Http\Response
     */
    public function show($school, Test $test)
    {
        return response()->json($test);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Test  $test
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, School $school, $test_id)
    {
        $request->validate([
            'record'                    => 'required|array',
            'record.name'               => 'required',
            'record.instruction_id'     => 'required|numeric',
            'record.class_id'           => 'required|numeric',
            'record.subject_id'         => 'required|numeric',
            'record.total_questions'    => 'required|numeric',
            'record.max_marks'          => 'required|numeric',
            'record.min_marks'          => 'required|numeric',
        ]);
        
        $test = Test::findOrFail($test_id);
        $test->fill($request->record);
        $test->user_id = $school->uid;
        $test->save();

        return response()->json([
            'message'   => 'Success! Record has been updated.',
            'data'      => $test
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Test  $test
     * @return \Illuminate\Http\Response
     */
    public function destroy(Test $test)
    {
        //
    }

    public function remove(Request $request)
    {
        Test::whereIn('id', $request->ids)->delete();

        return response()->json([
            'message'   => 'Selected record(s) have been deleted.'
        ]);
    }
}
