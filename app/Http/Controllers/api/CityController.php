<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use Route;
use App\Model\City;

class CityController extends Controller {
    public function getListByState( Request $request ) {
        $data = City::with('stateName')->where('state', $request->id)->orderBy('name', 'ASC')->get();

        return response()->json( $data, 200 );
    }
    public function index(Request $request)
    {
        $query = City::query();
        if(!empty($request->state_id))
        {
            $query->where('state', $request->state_id);
        }
        $cities = $query->orderBy('name', 'ASC')->pluck('name', 'id');

        return response()->json($cities);
    }
}
