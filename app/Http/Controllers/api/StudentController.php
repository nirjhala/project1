<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

use DNS1D; // Barcode Library
use PDF; // Generate PDF
// use Codedge\Fpdf\Fpdf\Fpdf; // FPDF

use Auth;
use Route;
use Hash;
use App\Model\User;
use App\Model\School;
use App\Model\Student;
use App\Model\TransferCertificate;
use App\Model\Role;

class StudentController extends Controller
{
    /** 
     * Display a listing of the resource. 
     * @return \Illuminate\Http\Response 
     */  
    public function index()  
    {  
        //  
    }
    /** 
     * Store a newly created resource in storage. 
     * 
     * @param  \Illuminate\Http\Request   $request 
     * @return \Illuminate\Http\Response 
     */  
    public function store(Request $request)  
    {
        $rules = [
            'user'          => 'required|array',
            'user.login'    => 'required',
            'user.password'  => 'required',
            'user.fname'     => 'required|alpha',
            'user.title'     => 'required',
            'user.gender'    => 'required',
            'user.mobile'    => 'required|numeric',
        ];

        $input      = $request->all();

        $validator  = Validator::make($input, $rules);

        if ($validator->fails()) {
            $re = [
                'errors'    => $validator->errors()->all()
            ];
            $responseCode = 400;
        } else {
            // Save to User Table
            $user = new User;
            $user->fill($request->user);
            $user->save();

            // Save to User's relation Student Table
            $uid = $user->id;
            $user->studentData()->create(compact('uid'));

            $re = $user;
            $responseCode = 200;
        }

        return response()->json($re, $responseCode);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\UserCertificate  $userCertificate
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $school, Student $student)
    {
        $rules = [
            'student'           => 'required|array',
            // 'student.reg_no'    => 'required|string',
            // 'student.category'  => 'required',
            // 'student.section'   => 'required'
        ];
        $validator  = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            $re = [
                'errors'    => $validator->errors()->all()
            ];
            $responseCode = 400;
        } else {
            $student->fill($request->student);
            $student->save();
            $re = [
                'message'   => 'Student data has been updated.'
            ];
            $responseCode = 200;
        }

        return response()->json($re, $responseCode);
    }
    // public function add(Request $request, $schoolName)
    // {
    //     $rules = [
    //         // Data for users table
    //         'user'           => 'required|array',
    //         'user.login'     => 'required|unique:users,login',
    //         'user.password'  => 'required',
    //         'user.fname'     => 'required|alpha',
    //         'user.title'     => 'required',
    //         'user.gender'    => 'required',
    //         'user.mobile'    => 'required|numeric',
    //         // Data for student table
    //         'student'        => 'required|array',
    //     ];

    //     $input      = $request->all();

    //     $validator  = Validator::make($input, $rules);

    //     if ($validator->fails()) {
    //         $re = [
    //             'status'    => false,
    //             'message'   => 'Validation Error!',
    //             'errors'    => $validator->errors()->all(),
    //             'input'     => $input
    //         ];
    //         $responseCode = 200;
    //     } else {
    //         /*
    //          * ==================================================
    //          * Make encrytpted string for password
    //          * ==================================================
    //          */
    //         $role = Role::where('name', 'LIKE', 'Student')->first();
    //         $input['user']['role']      = $role->id;
    //         $input['user']['password']  = Hash::make($input['user']['password']);
    //         $input['user']['school']    = auth()->user()->school;

    //         $user = User::create($input['user'])->studentData()->create($input['student']);

    //         $re = [
    //             'status'    => true,
    //             'message'   => 'Success! Record has been added.',
    //         ];
    //         $responseCode = 200;
    //     }

    //     return response()->json($re, $responseCode);
    // }
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
        $data = User::with(['media', 'cityData', 'cityData.stateName', 'roleName', 'studentData.sectionName', 'studentData.sectionName.cls'])->whereHas("roleName", function ($q) {
            $q->where('name', 'Student');
        })->where("school", auth()->user()->school)->latest()->paginate(20);

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

    public function all(Request $request)
    {
        $lists = Student::with(['user', 'father_info', 'mother_info', 'SectionName', 'SectionName.cls'])->has('user')->get();
        return response()->json( $lists );
    }

    public function getDataBySection(Request $request, $subdomain, $section)
    {
        $data = User::with(['media', 'cityData', 'cityData.stateName', 'roleName', 'studentData.sectionName', 'studentData.sectionName.cls', 'parent_school', 'parent_school.schoolData', 'studentData.father_info'])
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

    public function bySection(Request $request, $subdomain, $section)
    {
        $data = User::with(['media', 'roleName', 'studentData.father_info'])
            ->whereHas('studentData', function ($q) use ($section) {
                $q->where('section', $section);
            })
            ->whereHas("roleName", function ($q) {
                $q->where('name', 'Student');
            })->where("school", auth()->user()->school)
            ->latest()
            ->paginate(100);

        if (!$data->isEmpty()) {
            foreach ($data as $i => $d) {
                if (!empty($d->media->image)) {
                    $data[$i]->picture   = url('uploads/thumb/'.$d->media->image);
                } else {
                    $data[$i]->picture   = url('img/default.jpg');
                }
            }
        }

        return response()->json($data->toArray(), 200);
    }

    public function searchData(Request $request)
    {
        $query = User::with(['media', 'cityData', 'cityData.stateName', 'roleName', 'studentData.sectionName', 'studentData.sectionName.cls'])->whereHas("roleName", function ($q) {
            $q->where('name', 'Student');
        })->where("school", auth()->user()->school);

        if (!empty($request->s)) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'LIKE', '%'.$request->s.'%')
                  ->orWhere('mobile', 'LIKE', '%'.$request->s.'%')
                  ->orWhere('email', 'LIKE', '%'.$request->s.'%');
            });
        }
        if (!empty($request->cast)) {
            $query->whereHas('studentData', function ($q) use ($request) {
                $q->where('cast', 'LIKE', '%' . $request->cast . '%');
            });
        }
        if(!empty($request->department_id))
        {
            $query->whereHas('studentData.sectionName.cls', function ($q) use ($request) {
                $q->where('department', $request->department_id);
            });
        }
        if(!empty($request->class_id))
        {
            $query->whereHas('studentData.sectionName', function ($q) use ($request) {
                $q->where('class', $request->class_id);
            });
        }
        if(!empty($request->section_id))
        {
            $query->whereHas('studentData', function ($q) use ($request) {
                $q->where('section', $request->section_id);
            });
        }
        if(!empty($request->religion_id))
        {
            $query->whereHas('studentData', function ($q) use ($request) {
                $q->where('religion', $request->religion_id);
            });
        }
        if(!empty($request->state_id))
        {
            $query->whereHas('cityData', function ($q) use ($request) {
                $q->where('state', $request->state_id);
            });
        }
        if(!empty($request->city_id))
        {
            $query->where('city_id', $request->city_id);
        }
        if(!empty($request->gender))
        {
            $query->where('gender', $request->gender);
        }
        if(!empty($request->category))
        {
            $query->whereHas('studentData', function ($q) use ($request) {
                $q->where('category', $request->category);
            });
        }
        if(!empty($request->blood_group))
        {
            $query->whereHas('studentData', function ($q) use ($request) {
                $q->where('blood_group', $request->blood_group);
            });
        }

        $data = $query->latest()->paginate(20);


        if (!$data->isEmpty()) {
            foreach ($data as $i => $d) {
                $data[$i]->media->large_image   = !empty($d->media->image) ? url('uploads/large/'.$d->media->image) : url('img/default.jpg');
                $data[$i]->media->medium_image  = !empty($d->media->image) ? url('uploads/medium/'.$d->media->image) : url('img/default.jpg');
                $data[$i]->media->thumb_image   = !empty($d->media->image) ? url('uploads/thumb/'.$d->media->image) : url('img/default.jpg');
            }
        }
        $re = [
            'status'    => true,
            'message'   => $data->count().' record(s) found.',
            'data'      => $data,
        ];

        return response()->json($re, 200);
    }
    public function removeData(Request $request)
    {
        User::whereIn('id', $request->check)->delete();

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
    public function info(Request $request, $weburl)
    {
        $info = User::with(['cityData', 'cityData.stateName', 'studentData', 'studentData.sectionName', 'studentData.father_info', 'studentData.mother_info', 'studentData.guardian_info', 'studentData.SectionName', 'studentData.SectionName.cls', 'studentData.religion_info', 'media'])->findOrFail( auth()->user()->id );

        $info->picture = !empty($info->media->image) ? url('uploads/thumb/'.$info->media->image) : url('img/figure/admin.jpg');
        $info->dob     = date("d M Y", strtotime($info->dob));

        return response()->json($info, 200);
    }
    // API Resources
    /**
     * Students Details
     * @param $uid Int
     * 
     * @return $info Object
     */
    public function show(Request $request, $weburl, $uid = null)
    {
        $info = Student::with(['user', 'user.cityData', 'user.cityData.stateName', 'user.documents', 'sectionName', 'sectionName.cls', 'father_info', 'mother_info', 'guardian_info', 'religion_info', 'user.media', 'user.documents'])
        ->has('user')
        ->where('uid', $uid)
        ->firstOrFail();

        $info->picture = !empty($info->user->media->image) ? url('uploads/full/'.$info->user->media->image) : url('img/figure/admin.jpg');

        return response()->json($info, 200);
    }

    public function parent(Request $request, $weburl)
    {
        $data = User::with(['media', 'roleName', 'studentData.sectionName', 'studentData.sectionName.cls'])
            ->whereHas('studentData', function ($q) {
                $q->where('father', auth()->user()->id)
                  ->orWhere('mother', auth()->user()->id)
                  ->orWhere('guardian', auth()->user()->id);
            })
            ->whereHas("roleName", function ($q) {
                $q->where('name', 'Student');
            })
            ->where("school", auth()->user()->school)
            ->latest()
            ->get();

        if (!$data->isEmpty()) {
            foreach ($data as $i => $d) {
                if (!empty($d->media->image)) {
                    $data[$i]->picture   = url('uploads/thumb/'.$d->media->image);
                }
            }
        }

        return response()->json($data, 200);
    }

    public function marksheet(Request $request, $weburl, $uid = null) {
        $pdf = PDF::loadView('marksheet')->setPaper('A4', 'landscape');
        return $pdf->stream("Marksheet.pdf");
    }

    public function tc(Request $request, School $school, TransferCertificate $transferCertificate) {
        $data = compact('school', 'transferCertificate');
        $pdf  = PDF::loadView('tc', $data)->setPaper('A4');
        return $pdf->stream("transfer_certificate.pdf");
    }
}
