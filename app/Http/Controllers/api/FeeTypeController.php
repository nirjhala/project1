<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use Illuminate\Validation\Rule;

use Route;
use App\Model\FeeType;

class FeeTypeController extends Controller
{
    public function index(Request $request)
    {
        $query = FeeType::where('school', auth()->user()->school);

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
    public function show($subdomain, FeeType $fees_type)
    {
        return response()->json($fees_type, 200);
    }
    public function store(Request $request, $schoolName)
    {
        $input      = $request->get('record');

        $rules = [
            'name'   => [
                'required',
                Rule::unique('fee_types')
                    ->where('name', $input['name'])
                    ->where('school', auth()->user()->school)
            ],
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
            $obj            = new FeeType;
            $obj->fill($input);
            $obj->school = auth()->user()->school;
            $obj->save();

            $re = [
                'status'    => true,
                'message'   => 'Success! Record has been added.',
            ];
            $responseCode = 200;
        }

        return response()->json($re, $responseCode);
    }
    public function update(Request $request, $subdomain, $id)
    {
        $input      = $request->get('record');

        $rules = [
            'name'      => 'required',
            Rule::unique('fee_types')
                    ->where('name', $input['name'])
                    ->where('id', $id)
                    ->where('school', auth()->user()->school)
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
            $obj            = FeeType::findOrFail($id);
            $obj->fill($input);
            $obj->school    = auth()->user()->school;
            $obj->save();

            $re = [
                'status'    => true,
                'message'   => 'Success! Record has been updated.',
            ];
            $responseCode = 200;
        }

        return response()->json($re, $responseCode);
    }
    public function getAllList(Request $request)
    {
        $lists = FeeType::where('school', auth()->user()->school)->get()->toArray();
        return response()->json($lists, 200);
    }
    public function remove(Request $request)
    {
        FeeType::whereIn('id', $request->check)->delete();

        $re = [
            'status'    => true,
            'message'   => 'Selected record(s) has been deleted.'
        ];

        return response()->json($re, 200);
    }
}
