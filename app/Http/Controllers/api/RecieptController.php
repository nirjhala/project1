<?php

namespace App\Http\Controllers\api;

use App\Model\Reciept;
use App\Model\School;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RecieptController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $limit = $request->limit ?: 10;
        $query = Reciept::with('sale')->where('user_id', $school->uid);
        
        $reciepts = $query->latest()->paginate($limit);

        return response()->json($reciepts);
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
            'receipt'               => 'required|array',
            'receipt.sale_id'       => 'required|numeric',
            'receipt.amount'        => 'required|numeric|min:1',
            'receipt.payment_mode'  => 'required|string'
        ]);

        $reciept = new Reciept($request->receipt);
        $max_receipt_no = Reciept::where('user_id', $school->uid)->max('receipt_no');
        $reciept->receipt_no = $max_receipt_no + 1;
        $reciept->user_id = $school->uid;
        $reciept->save();

        return response()->json([
            'message'   => 'Record has been saved.'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Reciept  $reciept
     * @return \Illuminate\Http\Response
     */
    public function show(Reciept $reciept)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Reciept  $reciept
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Reciept $reciept)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Reciept  $reciept
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reciept $reciept)
    {
        //
    }
}
