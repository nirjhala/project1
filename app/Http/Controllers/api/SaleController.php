<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Model\Sale;
use App\Model\Reciept;
use App\Model\School;
use App\Model\Stock;
use Illuminate\Http\Request;

class SaleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $limit = $request->limit ?: 10;
        $query = Sale::where('user_id', $school->uid);

        if(!empty($request->s))
        {
            $query->where(function ($q) use ($request) {
                $q->where('invoice_no', 'LIKE', "%{$request->s}%");
            });
        }

        if(!empty($request->type) && $request->type == 'all')
        {
            $sales = $query->get()->pluck('full_invoice_no', 'id');
        }
        else
        {
            $sales = $query->latest()->paginate($limit);
        }

        return response()->json($sales);
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
            'sale'              => 'required|array',
            'sale.customer_id'  => 'required|numeric',
            'sale.session_id'   => 'required|numeric',
            'sale.payment_mode' => 'required|string',
            'sale.total_amount' => 'required',
            'sale_items'        => 'required|array'
        ]);
        
        $max_invoice = Sale::where('user_id', $school->uid)
            ->where('session_id', $request->sale['session_id'])
            ->max('invoice_no');

        $sale = new Sale($request->sale);
        $sale->user_id = $school->uid;
        $sale->invoice_no = $max_invoice + 1;
        $sale->save();
        
        $items = $request->sale_items;
        foreach($items as $id => $item)
        {
            if(isset($items[$id]['name'])) 
            {
                unset($items[$id]['name']);
            }
        }

        $sale->items()->sync($items);

        foreach($items as $id => $item)
        {
            $stock = new Stock();
            $stock->item_id = $id;
            $stock->qty_in = 0;
            $stock->qty_out  = $item['qty'];
            $stock->remarks = "Sold item with invoice {$sale->full_invoice_no}";
            $stock->save();
        }

        return response()->json([
            'message'   => 'Record has been saved.',
            'data'      => $sale
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function show($school, $sale_id)
    {
        $sale = Sale::with('items')->findOrFail($sale_id);
        $total_gst = 0;
        if(!empty($sale->items)) {
            foreach($sale->items as $item)
            {
                $total_gst += round($item->pivot->price * $item->pivot->qty * $item->gst_rate / 100, 2);
            }
        }

        $due_amount = floor($sale->total_amount + $total_gst) - $sale->paid_amount;
        $receipt_amt = Reciept::where('sale_id', $sale_id)->sum('amount');
        $due_amount -= $receipt_amt;

        return response()->json([
            'due_amount'    => $due_amount,
            'sale'          => $sale
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sale $sale)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sale $sale)
    {
        //
    }

    public function remove(Request $request)
    {
        Sale::whereIn('id', $request->ids)->delete();

        return response()->json([
            'message'   => 'Selected record(s) have been deleted.'
        ]);
    }
}
