<?php

namespace App\Http\Controllers\api;

use App\Model\DebitNote;
use App\Model\Stock;
use App\Model\School;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DebitNoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $limit = $request->limit ?: 10;
        $query = DebitNote::with(['purchase', 'items'])->where('user_id', $school->uid);
        $debit_notes = $query->paginate($limit);

        return response()->json($debit_notes);
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
            'debit_note'               => 'required|array',
            'debit_note.purchase_id'       => 'required|numeric',
            'debit_note.reason'        => 'required|string',
            'debit_note.total_amount'  => 'required',
            'debit_note.payment_mode'  => 'required|string',
            'items'                     => 'required|array'
        ]);

        $debitNote                 = new DebitNote($request->debit_note);
        $debitNote->paid_amount    = $request->debit_note['total_amount'];
        $debitNote->user_id        = $school->uid;

        // Get Max Number
        $max_number = DebitNote::where('user_id', $school->uid)
            ->where('purchase_id', $request->debit_note['purchase_id'])
            ->max('number');

        $debitNote->number         = $max_number + 1;
        $debitNote->save();

        $items = $request->items;
        foreach($items as $pid => $item) {
            unset($items[$pid]['name']);
        }

        $debitNote->items()->sync($items);

        foreach($request->items as $id => $item)
        {
            $stock          = new Stock();
            $stock->item_id = $id;
            $stock->qty_in  = 0;
            $stock->qty_out = $item['qty'];
            $stock->remarks = "Item returned! Ref. Debit Note " . sprintf('#%05d', $debitNote->number) ." for Purchase " . $debitNote->purchase->full_invoice_no;
            $stock->save();
        }

        return response([
            'message'   => 'Records has been saved',
            'data'      => $debitNote
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\DebitNote  $debitNote
     * @return \Illuminate\Http\Response
     */
    public function show(DebitNote $debitNote)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\DebitNote  $debitNote
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DebitNote $debitNote)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\DebitNote  $debitNote
     * @return \Illuminate\Http\Response
     */
    public function destroy(DebitNote $debitNote)
    {
        //
    }
}
