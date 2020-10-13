<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

// use Hash;
use Auth;
use Route;

class UserController extends Controller
{
    public function register(Request $request)
    {
        return view('inc.register');
    }
    public function getStarted(Request $request)
    {
        return view('inc.get_started');
    }
    public function login(Request $request)
    {
        $user = Auth::user();
        return view('inc.login');
    }
    public function logout()
    {
        Auth::logout();
        $re = [
            'status' => true,
        ];
        return response()->json($re, 200);
    }
}
