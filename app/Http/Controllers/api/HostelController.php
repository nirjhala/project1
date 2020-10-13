<?php
namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Route;
use App\Model\Hostel;

class HostelController extends Controller
{
    public function getInfo($subdomain, $id = null)
    {
        $info = Hostel::with(['city_name', 'city_name.stateName'])->findOrFail($id);
        $re = [
            'status'    => true,
            'data'      => $info->toArray()
        ];
        return response()->json($re, 200);
    }
    public function add(Request $request, $schoolName)
    {
        $rules = [
            'name' => 'required|unique:hostels,name,NULL,id,school,'.auth()->user()->school,
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
            $obj                = new Hostel;
            $obj->name          = $input['name'];
            $obj->total_rooms   = $input['total_rooms'];
            $obj->cost          = $input['cost'];
            $obj->capacity      = $input['capacity'];
            $obj->description   = $input['description'];
            $obj->address       = $input['address'];
            $obj->city_id       = $input['city_id'];
            $obj->pincode       = $input['pincode'];
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
            'name' => 'required|unique:hostels,name,'.$input['id'].',id,school,'.auth()->user()->school,
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
            $obj = Hostel::findOrFail($input['id']);
            $obj->name          = $input['name'];
            $obj->total_rooms   = $input['total_rooms'];
            $obj->cost          = $input['cost'];
            $obj->capacity      = $input['capacity'];
            $obj->description   = $input['description'];
            $obj->address       = $input['address'];
            $obj->city_id       = $input['city_id'];
            $obj->pincode       = $input['pincode'];
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
    public function getData()
    {
        $data = Hostel::with(['city_name', 'city_name.stateName'])->latest()->paginate(20);
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
        $data = Hostel::where('shift_is_deleted', 'N')->latest()->get()->toArray();
        return $data;
    }
    public function searchData(Request $request)
    {
        $query = Hostel::with(['city_name', 'city_name.stateName']);
        if (!empty($request->s)) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'LIKE', '%'.$request->s.'%');
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
        Hostel::whereIn('id', $request->check)->delete();
        $re = [
            'status'    => true,
            'message'   => 'Selected record(s) has been deleted.'
        ];
        return response()->json($re, 200);
    }
}
