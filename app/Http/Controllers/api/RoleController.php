<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use Route;
use App\Model\Role;

class RoleController extends Controller {
    public function getAllList() {
        $data = Role::where('school', 0)->whereNotIn('name', ['Admin', 'School', 'Student'])->latest()->get();

        return response()->json( $data, 200 );
    }
}
