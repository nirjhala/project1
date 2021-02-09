<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\GstRate;

class GstRateController extends Controller
{
    public function index()
    {
        $gst_rates = GstRate::orderBy('percent')->pluck('percent');

        return response()->json($gst_rates);
    }
}
