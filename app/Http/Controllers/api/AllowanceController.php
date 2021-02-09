<?php

namespace App\Http\Controllers\api;

use App\Model\Allowance;
use App\Model\School;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AllowanceController extends Controller
{
    public function max_salary(School $school, $gender, $name)
    {
        $max_salary = Allowance::where('user_id', $school->uid)
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
        // $limit = $request->limit ?: 50;
        $query      = Allowance::where('user_id', $school->uid);
        $allowances = $query->orderBy('name')->orderBy('id')->get();

        $result = $max_amount = [];
        foreach($allowances as $allowance)
        {
            $max_amount[$allowance->gender][$allowance->name] =  $allowance->to_amount;
            $result[$allowance->gender][$allowance->name][] = $allowance;
        }
        foreach ($max_amount as $gender => $nameArr) {
            foreach ($nameArr as $name => $maxAmt) {
                $result[$gender][$name][] = [
                    'from_amount'   => $maxAmt + 1,
                    'to_amount'     => null,
                    'type'          => !empty($result[$gender][$name]) ? $result[$gender][$name][ count($result[$gender][$name]) - 1 ]->type : 'fixed',
                    'percent'       => !empty($result[$gender][$name]) ? $result[$gender][$name][ count($result[$gender][$name]) - 1 ]->percent : 0,
                    'amount'        => !empty($result[$gender][$name]) ? $result[$gender][$name][ count($result[$gender][$name]) - 1 ]->amount : 0,
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
            'allowance'             => 'required|array',
            'allowance.from_amount' => 'required',
            'allowance.to_amount'   => 'required',
            'allowance.type'        => 'required',
            'allowance.name'        => 'required',
            'allowance.amount'      => 'required'
        ]);

        $allowance = new Allowance($request->allowance);
        $allowance->user_id = $school->uid;
        $allowance->save();

        return response()->json([
            'message'   => 'Record(s) has been saved.',
            'data'      => $allowance
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Allowance  $allowance
     * @return \Illuminate\Http\Response
     */
    public function show($school, Allowance $allowance)
    {
        return response()->json($allowance);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Allowance  $allowance
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $school, Allowance $allowance)
    {
        $request->validate([
            'allowance'             => 'required|array',
            'allowance.from_amount' => 'required',
            'allowance.to_amount'   => 'required',
            'allowance.type'        => 'required',
            'allowance.name'        => 'required',
            'allowance.amount'      => 'required'
        ]);

        $allowance->fill($request->allowance);
        $allowance->user_id = $school->uid;
        $allowance->save();

        return response()->json([
            'message'   => 'Record(s) has been saved.',
            'data'      => $allowance
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Allowance  $allowance
     * @return \Illuminate\Http\Response
     */
    public function destroy($school, Allowance $allowance)
    {
        $allowance->delete();

        return response()->json([
            'message'   => 'Selected record has been deleted.'
        ]);
    }
}
