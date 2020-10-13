<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

use Auth;
use Route;

use App\Model\School;

class AuthController extends Controller
{
    public function userLogin(Request $request)
    {
        $schoolName = Route::input('subdomain');
        $schoolInfo = School::where('weburl', $schoolName)->select('uid')->firstOrFail();

        $rules = [
            'user_login'    => 'required',
            'password'      => 'required|min:5'
        ];

        $input      = $request->only('user_login', 'password');

        $validator  = Validator::make($input, $rules);

        if ($validator->fails()) {
            $re = [
                'status'    => false,
                'message'   => 'Validation Error!',
                'errors'    => $validator->errors()->all(),
                'input'     => $input
            ];
            $responseCode = 200;
        } else {
            $userdata = [
                'login'         => $input['user_login'],
                'password'      => $input['password'],
                'school'        => $input['school']
            ];
            if (Auth::guard('api')->attempt($userdata)) {
                $token = Str::random(80);
                Auth::guard('api')->user()->api_token = $token;
                Auth::guard('api')->user()->save();

                $re = [
                    'status'    => true,
                    'message'   => 'Login success! Redirecting please wait.',
                    'data'      => Auth::user(),
                    'token'     => $token
                ];
                $responseCode = 200;
            } else {
                $re = [
                    'status'    => false,
                    'errors'   => ['Login failed! Username or password is wrong.'],
                    'userData'  => $userdata,
                ];
                $responseCode = 200;
            }
        }

        return response()->json($re, $responseCode);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        if (! $request->expectsJson()) {
            return route('login');
            // return redirect( route('login') )->with('success', 'You\'ve logged out');
        }
    }

    public function auth(Request $request)
    {
        $rules = [
            'user_login'    => 'required',
            'password'      => 'required|min:6|max:20'
        ];
        $request->validate($rules);

        $userData = [
            'user_login'    => $request->user_login,
            'password'      => $request->password
        ];

        if (Auth::attempt($userData)) {
            return redirect(url('admin-control/dashboard'));
        } else {
            return redirect(url('admin-control'))->with('danger', 'Credentials is not matched.');
        }
    }
}
