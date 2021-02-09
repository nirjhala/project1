<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use Route;
use App\Model\Vehicle;

class VehicleController extends Controller
{
    public function getInfo($subdomain, $id = null)
    {
        $info = Vehicle::findOrFail($id);

        $re = [
            'status'    => true,
            'data'      => $info
        ];

        return response()->json($re, 200);
    }
    public function add(Request $request, $schoolName)
    {
        $rules = [
            'driver'        => 'required|numeric',
            'type'          => 'required',
            'vehicle_no'    => 'required|unique:vehicles,vehicle_no,NULL,id,school,'.auth()->user()->school,
            'vehicle_rc'    => 'required'
        ];

        $input                  = $request->all();
        $input['vehicle_no']    = str_replace([" ","-","(",")"], "", $input['vehicle_no']);

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
            $obj = new Vehicle;
            $obj->driver        = $input['driver'];
            $obj->type          = $input['type'];
            $obj->vehicle_no    = $input['vehicle_no'];
            $obj->vehicle_rc    = $input['vehicle_rc'];
            $obj->school        = auth()->user()->school;
            $obj->save();

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
            'driver'        => 'required|numeric',
            'type'          => 'required',
            'vehicle_no'    => 'required|unique:vehicles,vehicle_no,'.$input['id'].',id,school,'.auth()->user()->school,
            'vehicle_rc'    => 'required'
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
            $obj = Vehicle::findOrFail($input['id']);
            $obj->driver        = $input['driver'];
            $obj->type          = $input['type'];
            $obj->vehicle_no    = $input['vehicle_no'];
            $obj->vehicle_rc    = $input['vehicle_rc'];
            $obj->school        = auth()->user()->school;
            $obj->save();

            $re = [
                'status'    => true,
                'message'   => 'Success! Record has been updated.',
            ];
            $responseCode = 200;
        }

        return response()->json($re, $responseCode);
    }
    public function getAllList(Request $request, $weburl)
    {
        $query = Vehicle::where('school', auth()->user()->school);
        if(!empty($request->type) && $request->type == 'exclude-routes') {
            $query->whereDoesntHave('routes');
        }
        $data = $query->latest()->get();

        return response()->json($data, 200);
    }
    public function getData(Request $request)
    {
        $data = Vehicle::with(['driverName'])
            ->withCount('routes')
            ->where('school', auth()->user()->school)
            ->latest()
            ->paginate(20);

        
        $re = [
            'status'    => true,
            'message'   => $data->count().' record(s) found.',
            'data'      => $data,
        ];

        return response()->json($re, 200);
    }
    public function searchData(Request $request, $schoolName)
    {
        $query = Vehicle::with('driverName')->withCount('routes')->where('school', auth()->user()->school);

        if (!empty($request->s)) {
            $query->where(function ($q) use ($request) {
                $q->where('vehicle_no', 'LIKE', '%'.$request->s.'%')
                  ->orWhere('vehicle_rc', 'LIKE', '%'.$request->s.'%');
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
    public function removeData(Request $request)
    {
        Vehicle::whereIn('id', $request->check)->delete();

        $re = [
            'status'    => true,
            'message'   => 'Selected record(s) has been deleted.'
        ];

        return response()->json($re, 200);
    }
}
