<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Model\AdmissionEnquiry;
use App\Model\School;

class AdmissionEnquiryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $query = AdmissionEnquiry::where('school_id', auth()->user()->school);
        if(!empty( request('s') )) {
            $s = trim( request('s') );
            $query->where('name', 'LIKE', '%'.$s.'%')
                ->orWhere('father_name', 'LIKE', '%'.$s.'%')
                ->orWhere('mother_name', 'LIKE', '%'.$s.'%')
                ->orWhere('mobile', 'LIKE', '%'.$s.'%')
                ->orWhere('phone', 'LIKE', '%'.$s.'%')
                ->orWhere('email', 'LIKE', '%'.$s.'%')
                ->orWhere('address', 'LIKE', '%'.$s.'%')
                ->orWhere('state', 'LIKE', '%'.$s.'%')
                ->orWhere('city', 'LIKE', '%'.$s.'%')
                ->orWhere('postcode', 'LIKE', '%'.$s.'%');
        }
        $lists = $query->latest()->paginate(50);

        return response()->json($lists, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, School $school)
    {
        $input = $request->record;
        $input['school_id'] = $school->uid;
        $ad_enq = AdmissionEnquiry::create($input);
        return response()->json( $ad_enq, 200 );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function remove(Request $request)
    {
        $ids = $request->check;
        if(!empty($ids) && is_array($ids)) {
            AdmissionEnquiry::whereIn('id', $ids)->delete();
            return response()->json(['status' => true], 200);
        } else {
            return response()->json(['errors' => ['Error! Empty ids received.']], 400);
        }
    }
}