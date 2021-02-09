<?php

namespace App\Http\Controllers\api;

use App\Model\TransferCertificate;
use App\Model\School;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TransferCertificateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $limit = !empty($request->limit) ? $request->limit : 10;
        $query = TransferCertificate::whereHas('user', function ($q) use ($school) {
            $q->where('school', $school->uid);
        });
        if(!empty($request->search))
        {
            $query->where(function ($q) use ($request) {
                $s = trim($request->search);
                $q->where('name', 'LIKE', '%'.$s.'%')
                ->orWhere('father_name', 'LIKE', '%'.$s.'%')
                ->orWhere('reason', 'LIKE', '%'.$s.'%')
                ->orWhere('class', 'LIKE', '%'.$s.'%')
                ->orWhere('section', 'LIKE', '%'.$s.'%');
            });
        }
        $certificates = $query->paginate($limit);

        return response()->json($certificates);
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
            'form'          => 'required|array',
            'form.user_id'  => 'required|numeric',
            'form.name'     => 'required|string'
        ]);

        $transferCertificate = new TransferCertificate($request->form);
        if(empty($request->form->tc_number))
        {
            $maxTcNumber = TransferCertificate::whereHas('user', function($q) use ($school) {
                $q->where('school', $school->uid);
            })->max('tc_number');
            $transferCertificate->tc_number = $maxTcNumber + 1;
        } else {
            $is_exists = TransferCertificate::whereHas('user', function($q) use ($school) {
                $q->where('school', $school->uid);
            })->where('tc_number', $request->form['tc_number'])->count();

            if($is_exists) {
                return response()->json([
                    'errors'    => [
                        'validation' => ['Tc number already exists.']
                    ]
                ], 401);
            }
        }
        $transferCertificate->save();

        return response()->json(['message' => 'Data has been added successfully.', 'data' => $transferCertificate]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\TransferCertificate  $transferCertificate
     * @return \Illuminate\Http\Response
     */
    public function show($school, $transfer_certificate)
    {
        $transferCertificate = TransferCertificate::findOrFail($transfer_certificate);
        return response()->json($transferCertificate);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\TransferCertificate  $transferCertificate
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, School $school, $transfer_certificate)
    {
        $request->validate([
            'form'          => 'required|array',
            'form.user_id'  => 'required|numeric',
            'form.name'     => 'required|string',
            'form.tc_number'=> 'required'
        ]);
        
        $transferCertificate = TransferCertificate::findOrFail($transfer_certificate);
        $transferCertificate->fill($request->form);
        $is_exists = TransferCertificate::whereHas('user', function($q) use ($school) {
            $q->where('school', $school->uid);
        })
        ->where('tc_number', $request->form['tc_number'])
        ->where('id', '!=', $transferCertificate->id)
        ->count();

        if($is_exists) {
            return response()->json([
                'errors'    => [
                    'validation' => ['Tc number already exists.']
                ]
            ], 401);
        }
            
        $transferCertificate->save();

        return response()->json(['message' => 'Data has been updated successfully.', 'data' => $transferCertificate]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\TransferCertificate  $transferCertificate
     * @return \Illuminate\Http\Response
     */
    public function destroy(TransferCertificate $transferCertificate)
    {
        //
    }

    public function remove(Request $request)
    {
        $request->validate([
            'check' => 'required|array'
        ]);

        TransferCertificate::whereIn($request->check)->delete();

        return response()->json(['message' => 'Deleted successfully.']);
    }
}
