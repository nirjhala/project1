<?php

namespace App\Http\Controllers;

use App\Model\CreditNote;
use Illuminate\Http\Request;
use PDF;

class CreditNoteController extends Controller
{
    public function invoice($credit_note_id)
    {
        $credit_note    = CreditNote::with(['sale', 'items', 'school'])->findOrFail($credit_note_id);
        $data           = compact('credit_note');
        
        // return view('invoice.credit_note', $data);

        $pdf        = PDF::loadView('invoice.credit_note', $data)->setPaper('A4');
        return $pdf->stream("credit_note_{$credit_note->number}.pdf");
    }
}
