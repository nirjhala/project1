<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use Route;
use App\Model\State;

class StateController extends Controller {
    public function getAllList() {
        $data = State::with('countryName')->orderBy('name', 'ASC')->get();

        return response()->json( $data, 200 );
    }
}
