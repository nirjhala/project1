<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;

use App\Model\UserCertificate;
use Illuminate\Http\Request;

class UserCertificateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = [
            'user_id'           => $request->user_id,
            'certificate_id'    => $request->certificate_id,
            'file'              => 'no-files'
        ];
        $userCertificate = UserCertificate::updateOrCreate($data);

        if($request->hasFile('file')) {
            $file = $request->file('file');
            $userCertificate->file = $file->store('user-documents', 'public');
            $userCertificate->save();
        }

        return response()->json([
            'message' => 'File uploaded success.',
            'doc'     =>  $userCertificate
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\UserCertificate  $userCertificate
     * @return \Illuminate\Http\Response
     */
    public function show(UserCertificate $userCertificate)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\UserCertificate  $userCertificate
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserCertificate $userCertificate)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\UserCertificate  $userCertificate
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserCertificate $userCertificate)
    {
        //
    }
}
