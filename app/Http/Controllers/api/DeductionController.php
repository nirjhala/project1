<?php

namespace App\Http\Controllers\api;

use App\Model\Deduction;
use App\Model\School;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DeductionController extends Controller
{
    public function max_salary(School $school, $gender, $name)
    {
        $max_salary = Deduction::where('user_id', $school->uid)
            ->where('gender', $gender)
            ->where('name', $name)
            ->max('to_amount');
        return response()->json($max_salary + 1);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $query      = Deduction::where('user_id', $school->uid);
        $deductions = $query->orderBy('name')->orderBy('id')->get();

        $result = [];
        foreach($deductions as $deduction)
        {
            $max_amount[$deduction->gender][$deduction->name] =  $deduction->to_amount;
            $result[$deduction->gender][$deduction->name][] = $deduction;
        }
        foreach ($max_amount as $gender => $nameArr) {
            foreach ($nameArr as $name => $maxAmt) {
                $result[$gender][$name][] = [
                    'from_amount'   => $maxAmt + 1,
                    'to_amount'     => null,
                    'type'          => !empty($result[$gender][$name]) ? $result[$gender][$name][ count($result[$gender][$name]) - 1 ]->type : 'fixed',
                    'percent'       => !empty($result[$gender][$name]) ? $result[$gender][$name][ count($result[$gender][$name]) - 1 ]->percent : 0,
                    'amount'        => !empty($result[$gender][$name]) ? $result[$gender][$name][ count($result[$gender][$name]) - 1 ]->amount : 0
                ];
            }
        }

        return response()->json($result);
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
            'deduction'             => 'required|array',
            'deduction.from_amount' => 'required',
            'deduction.to_amount'   => 'required',
            'deduction.type'        => 'required',
            'deduction.name'        => 'required',
            'deduction.amount'      => 'required'
        ]);

        $deduction = new Deduction($request->deduction);
        $deduction->user_id = $school->uid;
        $deduction->save();

        return response()->json([
            'message'   => 'Record(s) has been saved.',
            'data'      => $deduction
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Deduction  $deduction
     * @return \Illuminate\Http\Response
     */
    public function show($school, Deduction $deduction)
    {
        return response()->json($deduction);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Deduction  $deduction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Deduction $deduction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Deduction  $deduction
     * @return \Illuminate\Http\Response
     */
    public function destroy($school, Deduction $deduction)
    {
        $deduction->delete();

        return response()->json([
            'message'   => 'Selected record has been deleted.'
        ]);
    }
}
