<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

use DNS1D; // Barcode Library

use Auth;
use Route;
use Hash;
use App\Model\User;
use App\Model\Student;
use App\Model\Role;

class StudentController extends Controller
{
    public function add(Request $request, $schoolName)
    {
        $rules = [
            // Data for users table
            'user'           => 'required|array',
            'user.login'     => 'required|unique:users,login',
            'user.password'  => 'required',
            'user.fname'     => 'required|alpha',
            'user.title'     => 'required',
            'user.gender'    => 'required',
            'user.mobile'    => 'required|numeric',
            // Data for student table
            'student'        => 'required|array',
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
            /*
             * ==================================================
             * Make encrytpted string for password
             * ==================================================
             */
            $role = Role::where('name', 'LIKE', 'Student')->first();
            $input['user']['role']      = $role->id;
            $input['user']['password']  = Hash::make($input['user']['password']);
            $input['user']['school']    = auth()->user()->school;

            $user = User::create($input['user'])->studentData()->create($input['student']);

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
            'id'             => 'required|numeric',
            // Data for users table
            'user'           => 'required|array',
            'user.login'     => 'required|unique:users,login,'.$input['id'],
            'user.fname'     => 'required|alpha',
            'user.title'     => 'required',
            'user.gender'    => 'required',
            'user.mobile'    => 'required|numeric',
            // Data for student table
            'student'        => 'required|array',
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
            /*
             * ==================================================
             * Make encrytpted string for password
             * ==================================================
             */
            $role = Role::where('name', 'LIKE', 'Student')->first();
            $input['user']['role']      = $role->id;
            $input['user']['school']    = auth()->user()->school;
            if (!empty($input['user']['password'])) {
                $input['user']['password']  =  Hash::make($input['user']['password']);
            }

            $user = User::find($input['id']);
            $user->update($input['user']);
            $user->studentData()->update($input['student']);

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
        $data = User::with(['media', 'cityData', 'cityData.stateName', 'roleName', 'studentData.sectionName', 'studentData.sectionName.cls'])->where('deleted', 'N')->whereHas("roleName", function ($q) {
            $q->where('name', 'Student');
        })->where("school", auth()->user()->school)->latest()->paginate(20);

        // dd($data);

        if ($data->isEmpty()) {
            $re = [
                'status'    => false,
                'message'   => 'No record(s) found.'
            ];
        } else {
            foreach ($data as $i => $d) {
                if (!empty($d->media->image)) {
                    $data[$i]->media->large_image   = url('uploads/large/'.$d->media->image);
                    $data[$i]->media->medium_image  = url('uploads/medium/'.$d->media->image);
                    $data[$i]->media->thumb_image   = url('uploads/thumb/'.$d->media->image);
                }
            }
            $re = [
                'status'    => true,
                'message'   => $data->count().' record(s) found.',
                'data'      => $data,
            ];
        }

        return response()->json($re, 200);
    }

    public function getDataBySection(Request $request, $subdomain, $section)
    {
        $data = User::with(['media', 'cityData', 'cityData.stateName', 'roleName', 'studentData.sectionName', 'studentData.sectionName.cls', 'parent_school', 'parent_school.schoolData', 'studentData.father_info'])
        ->where('deleted', 'N')
        ->whereHas('studentData', function ($q) use ($section) {
            $q->where('section', $section);
        })
        ->whereHas("roleName", function ($q) {
            $q->where('name', 'Student');
        })->where("school", auth()->user()->school)->latest()->get();

        if (!$data->isEmpty()) {
            foreach ($data as $i => $d) {
                if (!empty($d->media->image)) {
                    $data[$i]->picture   = url('uploads/thumb/'.$d->media->image);
                }

                if (!empty($d->parent_school->schoolData->student_id_instructions)) {
                    $data[$i]->parent_school->schoolData->student_id_instructions = explode("\n", $d->parent_school->schoolData->student_id_instructions);
                }
                if (!empty($d->parent_school->schoolData->teacher_id_instructions)) {
                    $data[$i]->parent_school->schoolData->teacher_id_instructions = explode("\n", $d->parent_school->schoolData->teacher_id_instructions);
                }
                if (!empty($d->parent_school->schoolData->staff_id_instructions)) {
                    $data[$i]->parent_school->schoolData->staff_id_instructions = explode("\n", $d->parent_school->schoolData->staff_id_instructions);
                }

                $fullAddress = $d->address1;
                if (!empty($d->address2)) {
                    $fullAddress .= ", {$d->address2}";
                }
                if (!empty($d->pin_code)) {
                    $fullAddress .= " {$d->pin_code}, {$d->cityData->name}, {$d->cityData->stateName->name}";
                }
                $data[$i]->full_address  = $fullAddress;

                $data[$i]->barcode 		 = strtoupper($d->studentData->reg_no);
                $data[$i]->barcode_image = 'data:image/png;base64,'.DNS1D::getBarcodePNG($data[$i]->barcode, 'C39', 1, 30);
            }
        }

        return response()->json($data, 200);
    }

    public function searchData(Request $request)
    {
        $query = User::with(['media', 'cityData', 'cityData.stateName', 'roleName', 'studentData.sectionName', 'studentData.sectionName.cls'])->where('deleted', 'N')->whereHas("roleName", function ($q) {
            $q->where('name', 'Student');
        })->where("school", auth()->user()->school)->where('deleted', 'N');

        if (!empty($request->s)) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'LIKE', '%'.$request->s.'%')
                  ->orWhere('mobile', 'LIKE', '%'.$request->s.'%')
                  ->orWhere('email', 'LIKE', '%'.$request->s.'%');
            });
        }

        $data = $query->latest()->paginate(20);


        if ($data->isEmpty()) {
            $re = [
                'status'    => false,
                'message'   => 'No record(s) found.'
            ];
        } else {
            foreach ($data as $i => $d) {
                $data[$i]->media->large_image   = !empty($d->media->image) ? url('uploads/large/'.$d->media->image) : url('img/default.jpg');
                $data[$i]->media->medium_image  = !empty($d->media->image) ? url('uploads/medium/'.$d->media->image) : url('img/default.jpg');
                $data[$i]->media->thumb_image   = !empty($d->media->image) ? url('uploads/thumb/'.$d->media->image) : url('img/default.jpg');
            }
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
        User::whereIn('id', $request->check)->update(['deleted' => 'Y']);

        $re = [
            'status'    => true,
            'message'   => 'Selected record(s) has been deleted.'
        ];

        return response()->json($re, 200);
    }
    public function getInfo(Request $request, $weburl, $id = null)
    {
        $info = User::with(['cityData', 'cityData.stateName', 'studentData', 'studentData.sectionName', 'studentData.father_info', 'studentData.mother_info', 'studentData.guardian_info', 'media'])->findOrFail($id);

        return response()->json($info, 200);
    }
}
