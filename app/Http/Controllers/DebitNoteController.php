<?php

namespace App\Http\Controllers;

use App\Model\DebitNote;
use Illuminate\Http\Request;
use PDF;

class DebitNoteController extends Controller
{
    public function invoice($debit_note_id)
    {
        $debit_note    = DebitNote::with(['purchase', 'items', 'school'])->findOrFail($debit_note_id);
        $data           = compact('debit_note');
        
        // return view('invoice.debit_note', $data);

        $pdf        = PDF::loadView('invoice.debit_note', $data)->setPaper('A4');
        return $pdf->stream("debit_note_{$debit_note->number}.pdf");
    }
}
