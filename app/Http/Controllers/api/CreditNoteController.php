<?php

namespace App\Http\Controllers\api;

use App\Model\CreditNote;
use App\Model\Stock;
use App\Model\School;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CreditNoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $limit = $request->limit ?: 10;
        $query = CreditNote::with(['sale', 'items'])->where('user_id', $school->uid);
        $credit_notes = $query->paginate($limit);

        return response()->json($credit_notes);
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
            'credit_note'               => 'required|array',
            'credit_note.sale_id'       => 'required|numeric',
            'credit_note.reason'        => 'required|string',
            'credit_note.total_amount'  => 'required',
            'credit_note.payment_mode'  => 'required|string',
            'items'                     => 'required|array'
        ]);

        $creditNote                 = new CreditNote($request->credit_note);
        $creditNote->paid_amount    = $request->credit_note['total_amount'];
        $creditNote->user_id        = $school->uid;

        // Get Max Number
        $max_number = CreditNote::where('user_id', $school->uid)
            ->where('sale_id', $request->credit_note['sale_id'])
            ->max('number');

        $creditNote->number         = $max_number + 1;
        $creditNote->save();

        $items = $request->items;
        foreach($items as $pid => $item) {
            unset($items[$pid]['name']);
        }

        $creditNote->items()->sync($items);

        foreach($request->items as $id => $item)
        {
            $stock          = new Stock();
            $stock->item_id = $id;
            $stock->qty_in  = $item['qty'];
            $stock->qty_out = 0;
            $stock->remarks = "Item returned! Ref. Credit Note " . sprintf('#%05d', $creditNote->number) ." for Sale " . $creditNote->sale->full_invoice_no;
            $stock->save();
        }

        return response([
            'message'   => 'Records has been saved',
            'data'      => $creditNote
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\CreditNote  $creditNote
     * @return \Illuminate\Http\Response
     */
    public function show(CreditNote $creditNote)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\CreditNote  $creditNote
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CreditNote $creditNote)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\CreditNote  $creditNote
     * @return \Illuminate\Http\Response
     */
    public function destroy(CreditNote $creditNote)
    {
        //
    }
}
