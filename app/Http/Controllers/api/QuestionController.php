<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Model\Question;
use App\Model\Test;
use App\Model\School;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        if ($request->test_id && $request->que_type && $request->que_type == 'assigned') {
            $test = Test::with('test_questions')->findOrFail($request->test_id);
            return response()->json($test->test_questions);
        } else {
            $limit = $request->limit ?: 10;
            $query = Question::where('user_id', $school->uid);
    
            if (!empty($request->s)) {
                $s = $request->s;
                $query->where(function ($q) use ($s) {
                    $q->where('question', 'LIKE', "%{$s}%")
                    ->orWhere('suggestion', 'LIKE', "%{$s}%")
                    ->orWhere('option1', 'LIKE', "%{$s}%")
                    ->orWhere('option2', 'LIKE', "%{$s}%")
                    ->orWhere('option3', 'LIKE', "%{$s}%")
                    ->orWhere('option4', 'LIKE', "%{$s}%");
                });
            }
    
            if ($request->test_id && $request->que_type && $request->que_type == 'unassigned') {
                $testId = $request->test_id;
                $query->whereDoesntHave('test', function ($q) use ($testId) {
                    $q->where('test_id', $testId);
                });
            }
    
            // if ($request->test_id && $request->que_type && $request->que_type == 'assigned') {
            //     $testId = $request->test_id;
            //     $query->whereHas('test', function ($q) use ($testId) {
            //         $q->where('test_id', $testId);
            //     });
            // }
    
            if ($request->type && $request->type == 'all') {
                $questions = $query->orderBy('question')->pluck('question', 'id');
            } else {
                $questions = $query->paginate($limit);
            }
    
            return response()->json($questions);
        }
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
            'record'            => 'required|array',
            'record.question'   => 'required',
            'record.class_id'   => 'required|numeric',
            'record.subject_id' => 'required|numeric',
            'record.option1'    => 'required',
            'record.option2'    => 'required',
            'record.answer'     => 'required|numeric'
        ]);

        $question = new Question($request->record);
        $question->user_id = $school->uid;
        $question->save();

        return response()->json([
            'message'   => 'Success! Record has been saved.',
            'data'      => $question
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function show($school, Question $question)
    {
        return response()->json($question);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, School $school, $question_id)
    {
        $request->validate([
            'record'            => 'required|array',
            'record.question'   => 'required',
            'record.class_id'   => 'required|numeric',
            'record.subject_id' => 'required|numeric',
            'record.option1'    => 'required',
            'record.option2'    => 'required',
            'record.answer'     => 'required|numeric'
        ]);
        
        $question = Question::findOrFail($question_id);
        $question->fill($request->record);
        $question->user_id = $school->uid;
        $question->save();

        return response()->json([
            'message'   => 'Success! Record has been updated.',
            'data'      => $question
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function destroy(Question $question)
    {
        //
    }

    public function remove(Request $request)
    {
        Question::whereIn('id', $request->ids)->delete();

        return response()->json([
            'message'   => 'Selected record(s) have been deleted.'
        ]);
    }
}
