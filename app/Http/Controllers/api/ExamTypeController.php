<?php

namespace App\Http\Controllers\api;

use App\Model\ExamType;
use App\Model\School;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ExamTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $limit = !empty($request->limit) ? $request->limit : 10;
        $query = ExamType::where('user_id', $school->uid);
        if(!empty($request->search))
        {
            $s = trim($request->search);
            $query->where('name', 'LIKE', '%'.$s.'%');
        }
        if(empty($request->type) || $request->type != 'all')
        {
            $types = $query->paginate($limit);
        }
        else
        {
            $types = $query->pluck('name', 'id');
        }

        $re = compact('types');
        return response()->json($re);
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
            'name'  => [
                'required',
                Rule::unique('exam_types', 'name')->where(function ($q) use ($school) {
                    $q->where('user_id', $school->uid);
                })
            ]
        ]);

        $type = new ExamType;
        $type->name     = $request->name;
        $type->user_id  = $school->uid;
        $type->save();

        return response()->json([
            'message'   => 'Record has been added.',
            'data'      => $type
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ExamType  $examType
     * @return \Illuminate\Http\Response
     */
    public function show($school, ExamType $examType)
    {
        return response()->json($examType);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ExamType  $examType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, School $school, ExamType $examType)
    {
        $request->validate([
            'name'  => [
                'required',
                Rule::unique('exam_types', 'name')->where(function ($q) use ($school, $examType) {
                    $q->where('user_id', $school->uid)->where('id', '!=', $examType->id);
                })
            ]
        ]);
        
        $examType->name     = $request->name;
        $examType->user_id  = $school->uid;
        $examType->save();

        return response()->json([
            'message'   => 'Record has been added.',
            'data'      => $examType
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ExamType  $examType
     * @return \Illuminate\Http\Response
     */
    public function destroy(ExamType $examType)
    {
        $examType->delete();

        return response()->json([
            'message'   => 'Record has been deleted.'
        ]);
    }
}
