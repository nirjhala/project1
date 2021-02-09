<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Model\FeePayment;
use App\Model\FeeInstallment;
use App\Model\School;
use Illuminate\Http\Request;

class FeePaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
            // 'amount'    => 'required|numeric|min:1',
            'sid'       => 'required|numeric'
        ]);

        $feesInstallments = FeeInstallment::whereHas('structure', 
            function($q) use ($request) {
                $q->where('sid', $request->sid);
            })
            ->orderBy('month')
            ->get();
        
        $payAmount      = $request->amount;
        $penaltyAmount  = $request->penalty_amount;
        
        $installment_penalty = $request->installment_penalty;

        foreach($feesInstallments as $fi) {
            if(($payAmount > 0 || $penaltyAmount > 0) && ($fi->pay_status == 'due' || $fi->paid_penalty < $installment_penalty[$fi->id])) {
                $paid_amount = $payAmount >= ($fi->amount - $fi->paid_amount) 
                    ? $fi->amount - $fi->paid_amount 
                    : $payAmount;

                if($fi->pay_status == 'paid') {
                    $paid_amount = 0;
                }
                
                $penalty_amount = $penaltyAmount >= $installment_penalty[$fi->id]
                    ? $installment_penalty[$fi->id]
                    : $penaltyAmount;
                
                $feeInstallment = FeeInstallment::find($fi->id);
                $feeInstallment->penalty_amount = $installment_penalty[$fi->id] + $feeInstallment->paid_penalty;
                $feeInstallment->paid_amount  += $paid_amount;
                $feeInstallment->paid_penalty += $penalty_amount;
                
                if($paid_amount == ($fi->amount - $fi->paid_amount))
                {
                    $feeInstallment->pay_status = 'paid';
                }
                $feeInstallment->save();
                
                $fee_payment = new FeePayment();
                $fee_payment->amount    = $paid_amount;
                $fee_payment->penalty   = $penalty_amount;
                $fee_payment->sid = $request->sid;
                $fee_payment->installment_id = $fi->id;
                $fee_payment->save();
    
                $payAmount      -= $paid_amount;
                $penaltyAmount  -= $penalty_amount;
            }
        }

        return response()->json(['message' => 'Payment is done.']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\FeePayment  $feePayment
     * @return \Illuminate\Http\Response
     */
    public function show(FeePayment $feePayment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\FeePayment  $feePayment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FeePayment $feePayment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\FeePayment  $feePayment
     * @return \Illuminate\Http\Response
     */
    public function destroy(FeePayment $feePayment)
    {
        //
    }
}
