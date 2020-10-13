<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use Route;
use App\Model\Plan;

class PlanController extends Controller {
    public function getAllList() {
        $data = Plan::get();

        return response()->json( $data, 200 );
    }
}
