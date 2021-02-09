<?php

namespace App\Http\Controllers\api;

use App\Model\Supplier;
use App\Model\School;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $limit = $request->limit ?: 10;
        $query = Supplier::where('user_id', $school->uid);

        if(!empty($request->s))
        {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'LIKE', "%{$request->s}%")
                ->orWhere('organization_name', 'LIKE', "%{$request->s}%")
                ->orWhere('email', 'LIKE', "%{$request->s}%")
                ->orWhere('phone', 'LIKE', "%{$request->s}%")
                ->orWhere('mobile', 'LIKE', "%{$request->s}%");
            });
        }

        if(!empty($request->type) && $request->type == 'all')
        {
            $suppliers = $query->selectRaw("id, CONCAT(organization_name, ' / ', name) AS name")->pluck('name', 'id');
        }
        else
        {
            $suppliers = $query->paginate($limit);
        }

        return response()->json($suppliers);
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
            'supplier'                      => 'required|array',
            'supplier.name'                 => 'required|string',
            'supplier.organization_name'    => 'required|string',
            'supplier.email'                => 'required|email',
            'supplier.address'              => 'required|string',
            'supplier.city_id'              => 'required|numeric',
            'supplier.pincode'              => 'required'
        ]);

        $supplier = new Supplier($request->supplier);
        $supplier->user_id = $school->uid;
        $supplier->save();

        return response()->json([
            'message'   => 'Record has been saved.',
            'data'      => $supplier
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function show($school, Supplier $supplier)
    {
        return response()->json($supplier);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, School $school, Supplier $supplier)
    {
        $request->validate([
            'supplier'                  => 'required|array',
            'supplier.name'             => 'required|string',
            'supplier.sale_price'       => 'required',
        ]);
        
        $supplier->user_id = $school->uid;
        $supplier->save();

        return response()->json([
            'message'   => 'Record has been saved.',
            'data'      => $supplier
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function destroy(Supplier $supplier)
    {
        //
    }

    public function remove(Request $request)
    {
        Supplier::whereIn('id', $request->ids)->delete();

        return response()->json([
            'message'   => 'Selected record(s) have been deleted.'
        ]);
    }
}
