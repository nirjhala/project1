<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use Route;
use App\Model\Routes;
use App\Model\School;
use App\Model\RoutePoint;

class RouteController extends Controller
{
    public function getInfo($subdomain, $id = null)
    {
        $info = Routes::with(['points'])->findOrFail($id);

        $re = [
            'status'    => true,
            'data'      => $info
        ];

        return response()->json($re, 200);
    }
    public function add(Request $request, $schoolName)
    {
        $rules = [
            'name'          => 'required|unique:routes,name,NULL,id,school,'.auth()->user()->school,
            'vehicle'       => 'required',
            'start_point'   => 'required',
            'routes'        => 'required|array',
            'routes.*'      => 'required|distinct'
        ];

        $input      = $request->all();

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
            $obj = new Routes;
            $obj->name        = $input['name'];
            $obj->vehicle     = $input['vehicle'];
            $obj->start_point = $input['start_point'];
            $obj->school      = auth()->user()->school;
            $obj->save();

            foreach ($input['routes'] as $pt) {
                $ptObj = new RoutePoint;
                $ptObj->route = $obj->id;
                $ptObj->name  = $pt['name'];
                $ptObj->save();
            }

            $re = [
                'status'    => true,
                'message'   => 'Success! Record has been added.',
            ];
            $responseCode = 200;
        }

        return response()->json($re, $responseCode);
    }
    public function updateData(Request $request)
    {
        $schoolName = Route::input('subdomain');
        $input      = $request->all();

        $rules = [
            'name'          => 'required|unique:routes,name,'.$input['id'].',id,school,'.auth()->user()->school,
            'vehicle'       => 'required',
            'start_point'   => 'required',
            'routes'        => 'required|array',
            'routes.*'      => 'required|distinct'
        ];

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
            $obj = Routes::findOrFail($input['id']);
            $obj->name        = $input['name'];
            $obj->vehicle     = $input['vehicle'];
            $obj->start_point = $input['start_point'];
            $obj->school      = auth()->user()->school;
            $obj->save();

            RoutePoint::where('route', $obj->id)->delete();
            foreach ($input['routes'] as $pt) {
                $ptObj = new RoutePoint;
                $ptObj->route = $obj->id;
                $ptObj->name  = $pt['name'];
                $ptObj->save();
            }

            $re = [
                'status'    => true,
                'message'   => 'Success! Record has been updated.',
            ];
            $responseCode = 200;
        }

        return response()->json($re, $responseCode);
    }
    public function getData(Request $request)
    {
        $data = Routes::with(['points', 'vehicleInfo', 'vehicleInfo.driverName'])->where('school', auth()->user()->school)->latest()->paginate(20);

        if ($data->isEmpty()) {
            $re = [
                'status'    => false,
                'message'   => 'No record(s) found.'
            ];
        } else {
            $re = [
                'status'    => true,
                'message'   => $data->count().' record(s) found.',
                'data'      => $data,
            ];
        }

        return response()->json($re, 200);
    }
    public function getAllList()
    {
        $data = Routes::where('school', auth()->user()->school)->latest()->get()->toArray();

        return $data;
    }
    public function searchData(Request $request, $schoolName)
    {
        $query = Routes::with('driverName')->where('school', auth()->user()->school);

        if (!empty($request->s)) {
            $query->where(function ($q) use ($request) {
                $q->where('vehicle_no', 'LIKE', '%'.$request->s.'%')
                  ->orWhere('vehicle_rc', 'LIKE', '%'.$request->s.'%')
                  ->orWhere('vehicle_type', 'LIKE', '%'.$request->s.'%');
            });
        }

        $data = $query->latest()->paginate(20);

        if ($data->isEmpty()) {
            $re = [
                'status'    => false,
                'message'   => 'No record(s) found.'
            ];
        } else {
            $re = [
                'status'    => true,
                'message'   => $data->count().' record(s) found.',
                'data'      => $data,
            ];
        }

        return response()->json($re, 200);
    }
    public function driver (Request $request) {
        $data = Routes::with(['points', 'vehicleInfo', 'vehicleInfo.driverName'])->where('school', auth()->user()->school)->whereHas('vehicleInfo', function ($q) {
            $q->where('driver', auth()->user()->id);
        })->latest()->first();

        return response()->json($data, 200);
    }
    public function removeData(Request $request)
    {
        Routes::whereIn('id', $request->check)->delete();

        $re = [
            'status'    => true,
            'message'   => 'Selected record(s) has been deleted.'
        ];

        return response()->json($re, 200);
    }
}
