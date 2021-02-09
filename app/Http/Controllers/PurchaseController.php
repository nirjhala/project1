<?php

namespace App\Http\Controllers;

use App\Model\Purchase;
use Illuminate\Http\Request;

use PDF;

class PurchaseController extends Controller
{
    public function invoice($purchase)
    {
        $purchase = Purchase::with(['items', 'school'])->findOrFail($purchase);
        $data   = compact('purchase');
        // return view('invoice.purchase', $data);
        $pdf    = PDF::loadView('invoice.purchase', $data)->setPaper('A4');
        return $pdf->stream("purchase_invoice_{$purchase->invoice_no}.pdf");
    }
}
