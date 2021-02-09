<?php

namespace App\Http\Controllers\api;

use App\Model\Item;
use App\Model\School;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $limit = $request->limit ?: 10;
        $query = Item::where('user_id', $school->uid);

        if(!empty($request->s))
        {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'LIKE', "%{$request->s}%");
            });
        }

        $items = $query->paginate($limit);

        return response()->json($items);
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
            'item'                  => 'required|array',
            'item.name'             => 'required|string',
            'item.sale_price'       => 'required',
        ]);

        $item = new Item($request->item);
        $item->user_id = $school->uid;
        $item->save();

        return response()->json([
            'message'   => 'Record has been saved.',
            'data'      => $item
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function show($school, Item $item)
    {
        return response()->json($item);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, School $school, Item $item)
    {
        $request->validate([
            'item'                  => 'required|array',
            'item.name'             => 'required|string',
            'item.sale_price'       => 'required',
        ]);
        
        $item->user_id = $school->uid;
        $item->save();

        return response()->json([
            'message'   => 'Record has been saved.',
            'data'      => $item
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function destroy(Item $item)
    {
        //
    }

    public function remove(Request $request)
    {
        Item::whereIn('id', $request->ids)->delete();

        return response()->json([
            'message'   => 'Selected record(s) have been deleted.'
        ]);
    }
}
