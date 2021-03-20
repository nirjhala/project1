<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebController extends Controller
{
    public function index(Request $request)
    {
        $domain     = $request->getHost();

        return view('pages/homepage');
    }

    public function request_demo()
    {
        return view('pages/request_demo');
    }

    public function pricing()
    {
        return view('pages/pricing');
    }

    public function about_us()
    {
        return view('pages/about_us');
    }
}