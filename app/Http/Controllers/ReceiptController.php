<?php

namespace App\Http\Controllers;

use App\Model\Reciept;
use Illuminate\Http\Request;

use PDF;

class ReceiptController extends Controller
{
    public function invoice($sale)
    {
        $receipt    = Reciept::with(['sale', 'school'])->findOrFail($sale);
        $data       = compact('receipt');
        
        // return view('invoice.receipt', $data);

        $pdf        = PDF::loadView('invoice.receipt', $data)->setPaper('A4');
        return $pdf->stream("receipt_{$receipt->receipt_no}.pdf");
    }
}
