<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use Route;
use App\Model\State;

class StateController extends Controller {
    public function getAllList() {
        $data = State::with(['countryName', 'cities'])->whereHas('cities')->orderBy('name', 'ASC')->get();

        return response()->json( $data, 200 );
    }
    public function all(Request $request)
    {
        $query  = State::query();
        if(!empty($request->country_id))
        {
            $query->where('country', $request->country_id);
        }
        $states = $query->orderBy('name', 'ASC')->pluck('name', 'id');

        return response()->json($states);
    }
}
