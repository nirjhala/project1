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

        $data['students'] = [];
        // if (!empty($data['test']->test_users))
        // {
        //     foreach($data['test']->test_users as $key => $user)
        //     {
        //         $question = TestQuestion::find($user->pivot->question_id);

        //         $data['students'] = [
        //             'id'            => $user->id,
        //             'name'          => $user->name,
        //             'father_name'   => $user->studentData->father_name,
        //             'mother_name'   => $user->studentData->mother_name
        //         ];
        //     }
        // }
        $data['students'] = \DB::table('users AS u')
            ->join('students AS s', 'u.id', 's.uid')
            ->join('users AS f', 's.father', 'f.id')
            ->join('users AS m', 's.mother', 'm.id')
            ->whereRaw(
                'sch_u.id IN (SELECT user_id FROM sch_test_results WHERE test_id = ?)',
                [$test_id]
            )
            ->select(
                'u.id',
                'u.name',
                's.roll_no',
                'f.name AS father_name',
                'm.name AS mother_name',
                \DB::raw("(SELECT SUM(CASE WHEN tr.answer = q.answer THEN tq.marks ELSE -tq.negative_marks END) FROM sch_questions AS q INNER JOIN sch_test_questions AS tq ON q.id = tq.question_id INNER JOIN sch_test_results AS tr ON q.id = tr.question_id WHERE tr.test_id = {$test_id} AND tq.test_id = {$test_id}) AS total_marks"),
                \DB::raw("(SELECT SUM(CASE WHEN tr.answer = q.answer THEN 1 ELSE 0 END) FROM sch_questions AS q INNER JOIN sch_test_questions AS tq ON q.id = tq.question_id INNER JOIN sch_test_results AS tr ON q.id = tr.question_id WHERE tr.test_id = {$test_id} AND tq.test_id = {$test_id}) AS total_correct"),
                \DB::raw("(SELECT SUM(CASE WHEN tr.answer = q.answer THEN 0 ELSE 1 END) FROM sch_questions AS q INNER JOIN sch_test_questions AS tq ON q.id = tq.question_id INNER JOIN sch_test_results AS tr ON q.id = tr.question_id WHERE tr.test_id = {$test_id} AND tq.test_id = {$test_id}) AS total_incorrect"),
                \DB::raw("(SELECT COUNT(*) FROM sch_test_questions WHERE test_id = {$test_id}) AS total_questions")
            )
            ->orderBy('total_marks', 'DESC')
            ->orderBy('name')
            ->orderBy('father_name')
            ->orderBy('mother_name')
            ->get();

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
