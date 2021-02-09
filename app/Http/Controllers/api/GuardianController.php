<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Hash;

use Illuminate\Validation\Rule;

/*
 * Load Dependency Eloquents
**/
use App\Model\User;
use App\Model\Role;
use App\Model\Guardian;

class GuardianController extends Controller
{
    /**
     * fetch guardian users
     * 
     * @params
     * type = mother | father | other
     */
    public function index($subdomain) {
        $query = User::with('guardian_info', 'roleName')->has('roleName')->has('guardian_info');

        $query->whereHas('roleName', function($q) {
            $q->where('name', 'LIKE', 'Parents');
        });
        
        $users = $query->get();

        $userArr = [];
        if(!$users->isEmpty()) {
            foreach ($users as $key => $u) {
                $userArr['all'][] = $u;
                if(!empty($u->guardian_info->relation)) {
                    $userArr[$u->guardian_info->relation][] = $u;
                }
            }
        }

        return response()->json( $userArr, 200 );
    }

    /**
     * insert guardian's user records
     * 
     * @relations
     * role
     * guardian
    **/
    public function add(Request $request) {
        $input = [
            'login'     => $request->mobile,
        ];
        $request->merge($input);
        $rules = [
            'id'            => 'required|numeric',
            // 'login'         => 'required|unique:users',
            'login'     => [
                'required',
                Rule::unique('users')
                    ->where('login', $input['login'])
                    ->where('deleted', 'N')
                    ->where('school', auth()->user()->school)
            ],
            'password'      => 'required|string',
            'mobile'        => 'required|string|regex:/\d{10}/',
            'name'          => 'required|regex:/[A-Za-z ]+/',
            'type'          => 'required|string'
        ];
        $validator  = Validator::make($input, $rules);
        $input      = $request->all();
        $roleInfo   = Role::where('name', 'LIKE', 'Parents')->select('id')->first();

        $obj = new User;
        $obj->login     = $input['login'];
        $obj->password  = Hash::make($input['password']);
        $obj->mobile    = $input['mobile'];
        $obj->name      = $input['name'];
        $obj->role      = $roleInfo->id;
        $obj->school    = auth()->user()->school;
        $obj->save();
        $obj->guardian_info()->updateOrCreate( ['relation' => $input['type']] );

        $query = User::has('roleName')->where('deleted', 'N');

        $query->whereHas('roleName', function($q) {
            $q->where('name', 'LIKE', 'Parents');
        });
        
        $users = $query->get();

        $userArr = [];
        if(!$users->isEmpty()) {
            foreach ($users as $key => $u) {
                $userArr['all'][] = $u;
                $userArr[$u->guardian_info->relation][] = $u;
            }
        }

        // $lists = User::where('role', $roleInfo->id)->get()->toArray();
        $re = [
            "id"   => $obj->id,
            "list" => $userArr
        ];
        return response()->json($re, 200);
    }
}
