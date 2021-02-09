<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Model\Payment;
use App\Model\School;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $limit = $request->limit ?: 10;
        $query = Payment::with('purchase')->where('user_id', $school->uid);
        
        $payments = $query->latest()->paginate($limit);

        return response()->json($payments);
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
            'payment'               => 'required|array',
            'payment.purchase_id'   => 'required|numeric',
            'payment.amount'        => 'required|numeric|min:1',
            'payment.payment_mode'  => 'required|string'
        ]);

        $payment                = new Payment($request->payment);
        $max_payment_no         = Payment::where('user_id', $school->uid)->max('payment_no');
        $payment->payment_no    = $max_payment_no + 1;
        $payment->user_id       = $school->uid;
        $payment->save();

        return response()->json([
            'message'   => 'Record has been saved.'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function show(Payment $payment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Payment $payment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Payment $payment)
    {
        //
    }
}
