<?php

namespace App\Http\Controllers;

use App\Model\Sale;
use Illuminate\Http\Request;

use PDF;

class SaleController extends Controller
{
    public function invoice($sale)
    {
        $sale = Sale::with(['items', 'school'])->findOrFail($sale);
        $data   = compact('sale');
        
        $pdf    = PDF::loadView('invoice.sale', $data)->setPaper('A4');
        return $pdf->stream("sale_invoice_{$sale->full_invoice_no}.pdf");
    }
}
