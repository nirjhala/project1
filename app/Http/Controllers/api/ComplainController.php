<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
// Load Models
use App\Model\Complain;

class ComplainController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Complain::with(['teacher', 'user', 'user.roleName']);
        if(auth()->user()->id != auth()->user()->school) {
            $query->where('uid', auth()->user()->id);
        }
        if(!empty($request->s)) {
            $s = $request->s;
            $query->where('subject', 'LIKE', '%'.$s.'%');
            $query->orWhere('against', 'LIKE', $s);
            $query->orWhere('type', 'LIKE', '%'.$s.'%');
            $query->orWhere('remarks', 'LIKE', '%'.$s.'%');
            $query->orWhereHas('teacher', function ($q) use ($s) {
                $q->where('name', 'LIKE', '%'.$s.'%');
            });
        }
        $lists = $query->latest()->paginate(10);

        return response()->json($lists);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rules = [
            'record'            => 'required|array',
            'record.type'       => 'required|string',
            'record.against'    => 'required|string',
            'record.subject'    => 'required|string',
            'record.remarks'    => 'required'
        ];

        $input      = $request->all();

        $validator  = Validator::make($input, $rules);

        if ($validator->fails()) {
            $re = [
                'status'    => false,
                'message'   => 'Validation Error!',
                'errors'    => $validator->errors()->all(),
                'input'     => $input
            ];
        } else {
            $ins_record = $input['record'];
            $ins_record['uid'] = auth()->user()->id;
            Complain::create($ins_record);

            $re = [
                'status'    => true,
                'message'   => 'Data has been added successfully.'
            ];
        }

        return response()->json($re);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($subdomain, Complain $complain)
    {
        return response()->json($complain);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($subdomain, Request $request, Complain $complain)
    {
        $rules = [
            'record'            => 'required|array',
            'record.type'       => 'required|string',
            'record.against'    => 'required|string',
            'record.subject'    => 'required|string',
            'record.remarks'    => 'required'
        ];

        $input      = $request->all();

        $validator  = Validator::make($input, $rules);

        if ($validator->fails()) {
            $re = [
                'status'    => false,
                'message'   => 'Validation Error!',
                'errors'    => $validator->errors()->all(),
                'input'     => $input
            ];
        } else {
            $ins_record = $input['record'];
            $ins_record['uid'] = auth()->user()->id;
            $complain->update($ins_record);

            $re = [
                'status'    => true,
                'message'   => 'Data has been updated successfully.'
            ];
        }

        return response()->json($re);
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

    public function remove() {
        Complain::whereIn('id', request('check'))->delete();
        $re = [
            'status'    => true,
            'message'   => 'Selected record(s) has been deleted.'
        ];
        return response()->json($re, 200);
    }
}
