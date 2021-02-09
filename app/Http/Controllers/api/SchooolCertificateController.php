<?php

namespace App\Http\Controllers\api;

use App\Model\SchooolCertificate;
use App\Model\School;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SchooolCertificateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $limit = !empty($request->limit) ? $request->limit : 10;
        $query = SchooolCertificate::where('type', $request->type)->where('user_id', $school->uid);
        if(!empty($request->search))
        {
            $s = trim($request->search);
            $query->where(function($q) use ($s) {
                $q->where('name', 'LIKE', '%'.$s.'%')
                ->orWhere('father_name', 'LIKE', '%'.$s.'%')
                ->orWhere('mother_name', 'LIKE', '%'.$s.'%')
                ->orWhere('class', 'LIKE', '%'.$s.'%')
                ->orWhere('sr_no', 'LIKE', '%'.$s.'%');
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
            'form'                  => 'required|array',
            'form.type'             => 'required|string',
            'form.name'             => 'required|string',
            'form.class'            => 'required|string',
            'form.father_name'      => 'required|string',
            'form.mother_name'      => 'required|string',
        ]);

        $schooolCertificate = new SchooolCertificate($request->form);
        $schooolCertificate->user_id = $school->uid;
        if(empty($request->form->sr_no))
        {
            $maxSrNo = SchooolCertificate::where('user_id', $school->uid)
                ->where('type', $request->form['type'])
                ->max('sr_no');
            $schooolCertificate->sr_no = $maxSrNo + 1;
        } else {
            $is_exists = SchooolCertificate::where('user_id', $school->uid)
                ->where('type', $request->form['type'])
                ->where('sr_no', $request->form['sr_no'])
                ->count();

            if($is_exists) {
                return response()->json([
                    'errors'    => [
                        'validation' => ['Serial number already exists.']
                    ]
                ], 401);
            }
        }
        $schooolCertificate->save();

        return response()->json([
            'message' => 'Data has been added successfully.', 
            'data' => $schooolCertificate
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SchooolCertificate  $schooolCertificate
     * @return \Illuminate\Http\Response
     */
    public function show(SchooolCertificate $schooolCertificate)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SchooolCertificate  $schooolCertificate
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SchooolCertificate $schooolCertificate)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SchooolCertificate  $schooolCertificate
     * @return \Illuminate\Http\Response
     */
    public function destroy(SchooolCertificate $schooolCertificate)
    {
        //
    }
}
