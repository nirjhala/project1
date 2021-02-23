<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Model\Test;
use App\Model\TestResult;
use App\Model\School;
use App\Model\Student;
use App\Model\User;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function student(Request $request, School $school)
    {
        $section = $request->user();
        $student = Student::with(['sectionName'])->where('uid', $request->user()->id)->firstOrFail();
        $tests   = Test::where('user_id', $school->uid)
            ->where('class_id', $student->sectionName->class)
            ->whereRaw('DATE(date) >= ?', [date('Y-m-d')])
            ->get();

        if(!$tests->isEmpty())
        {
            foreach($tests as $key => $test)
            {
                $tests[$key]->attempted = TestResult::where('test_id', $test->id)->where('user_id', $request->user()->id)->count();
            }
        }
        
        return response()->json($tests);
    } 
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
                $q->where('name', 'LIKE', "%{$s}%")
                ->orWhere('duration', 'LIKE', "%{$s}%")
                ->orWhere('total_questions', 'LIKE', "%{$s}%");
            });
        }

        if(!empty($request->result) && $request->result === 'yes')
        {
            $query->whereHas('test_result');
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
    public function show(Request $request, $school, $test_id)
    {
        $data = [];
        
        $user_id      = $request->user()->id;
        $data['user'] = User::with(['studentData', 'media'])->find($user_id);
        $data['test'] = Test::with(['subject', 'instruction', 'test_questions', 'test_users'])->findOrFail($test_id);

        if (!empty($data['test']->test_users))
        {
            foreach($data['test']->test_users as $key => $user)
            {
                
            }
        }

        return response()->json($data);
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
