<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Model\Purchase;
use App\Model\Payment;
use App\Model\School;
use App\Model\Stock;
use Illuminate\Http\Request;

class PurchaseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $limit = $request->limit ?: 10;
        $query = Purchase::where('user_id', $school->uid);

        if(!empty($request->s))
        {
            $query->where(function ($q) use ($request) {
                $q->where('invoice_no', 'LIKE', "%{$request->s}%");
            });
        }

        if(!empty($request->type) && $request->type == 'all')
        {
            $purchases = $query->pluck('invoice_no', 'id');
        }
        else
        {
            $purchases = $query->latest()->paginate($limit);
        }

        return response()->json($purchases);
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
            'purchase'              => 'required|array',
            'purchase.supplier_id'  => 'required|numeric',
            'purchase.session_id'   => 'required|numeric',
            'purchase.invoice_no'   => 'required|string',
            'purchase.payment_mode' => 'required|string',
            'purchase.total_amount' => 'required',
            'purchase_items'        => 'required|array'
        ]);

        $purchase = new Purchase($request->purchase);
        $purchase->user_id = $school->uid;
        $purchase->save();
        
        $items = $request->purchase_items;
        foreach($items as $id => $item)
        {
            if(isset($items[$id]['name'])) 
            {
                unset($items[$id]['name']);
            }
        }

        $purchase->items()->sync($items);

        foreach($items as $id => $item)
        {
            $stock = new Stock();
            $stock->item_id = $id;
            $stock->qty_in  = $item['qty'];
            $stock->qty_out = 0;
            $stock->remarks = "Purchased item with invoice {$purchase->invoice_no}";
            $stock->save();
        }

        return response()->json([
            'message'   => 'Record has been saved.',
            'data'      => $purchase
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function show($school, $purchase_id)
    {
        $purchase = Purchase::with('items')->findOrFail($purchase_id);
        $total_gst = 0;
        if(!empty($purchase->items)) {
            foreach($purchase->items as $item)
            {
                $total_gst += round($item->pivot->price * $item->pivot->qty * $item->gst_rate / 100, 2);
            }
        }

        $due_amount = floor($purchase->total_amount + $total_gst) - $purchase->paid_amount;
        $payment_amt = Payment::where('purchase_id', $purchase_id)->sum('amount');
        $due_amount -= $payment_amt;

        return response()->json([
            'due_amount'    => $due_amount,
            'purchase'      => $purchase
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Purchase $purchase)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function destroy(Purchase $purchase)
    {
        //
    }

    public function remove(Request $request)
    {
        Purchase::whereIn('id', $request->ids)->delete();

        return response()->json([
            'message'   => 'Selected record(s) have been deleted.'
        ]);
    }
}
