<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use Route;
use App\Model\Pincode;

class PincodeController extends Controller {
    public function getListByCity( Request $request ) {
        $data = Pincode::with('cityName')->where('city', $request->id)->orderBy('pincode', 'ASC')->get();

        return response()->json( $data, 200 );
    }
}
