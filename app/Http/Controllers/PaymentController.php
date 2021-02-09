<?php

namespace App\Http\Controllers;

use App\Model\Payment;
use App\Model\School;
use Illuminate\Http\Request;

use PDF;

class PaymentController extends Controller
{
    public function invoice($payment_id)
    {
        $payment    = Payment::with(['purchase', 'school'])->findOrFail($payment_id);
        $data       = compact('payment');
        
        // return view('invoice.receipt', $data);

        $pdf        = PDF::loadView('invoice.payment', $data)->setPaper('A4');
        return $pdf->stream("payment_{$payment->payment_no}.pdf");
    }
}
