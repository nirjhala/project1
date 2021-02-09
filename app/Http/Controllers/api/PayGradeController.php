<?php

namespace App\Http\Controllers\api;

use App\Model\PayGrade;
use App\Model\School;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class PayGradeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $limit      = !empty($request->limit) ? $request->limit : 10;
        $query      = PayGrade::where('user_id', $school->uid);

        if(!empty($request->s))
        {
            $query->where('name', 'LIKE', "%{$request->s}%");
        }

        if(empty($request->type) || $request->type != 'all')
        {
            $pay_grades = $query->latest()->paginate($limit);
        }
        else
        {
            $pay_grades = $query->pluck('name', 'id');
        }

        return response()->json($pay_grades);
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
            'pay_grade'         => 'required|array',
            'pay_grade.name'    => [
                    'required',
                    'string',
                    Rule::unique('pay_grades', 'name')->where(function ($q) use ($school) {
                        $q->where('user_id', $school->uid);
                    })
                ]
        ]);

        $payGrade = new PayGrade($request->pay_grade);
        $payGrade->user_id = $school->uid;
        $payGrade->save();

        return response()->json([
            'message' => 'New record has beed added successfully.'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\PayGrade  $payGrade
     * @return \Illuminate\Http\Response
     */
    public function show($school, PayGrade $payGrade)
    {
        return response()->json($payGrade);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\PayGrade  $payGrade
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, School $school, $id)
    {
        $request->validate([
            'pay_grade'         => 'required|array',
            'pay_grade.name'    => [
                    'required',
                    'string',
                    Rule::unique('pay_grades', 'name')->where(function ($q) use ($school, $id) {
                        $q->where('user_id', $school->uid)->where('id', '!=', $id);
                    })
                ]
        ]);

        $payGrade = PayGrade::findOrFail($id);
        $payGrade->fill($request->pay_grade);
        $payGrade->user_id = $school->uid;
        $payGrade->save();

        return response()->json([
            'message' => 'A record has beed updated successfully.'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\PayGrade  $payGrade
     * @return \Illuminate\Http\Response
     */
    public function destroy($school, PayGrade $payGrade)
    {
        $payGrade->delete();

        return response()->json([
            'message'   => 'Record has been deleted.',
        ]);
    }

    public function remove(Request $request, $school)
    {
        $request->validate([
            'check' => 'required|array'
        ]);

        PayGrade::whereIn('id', $request->check)->delete();

        return response()->json([
            'message'   => 'Selected Record(s) have been deleted.',
        ]);
    }
}
