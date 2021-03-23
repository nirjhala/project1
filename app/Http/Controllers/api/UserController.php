<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Route;
use Hash;

use DNS1D; // Barcode Library

use Illuminate\Validation\Rule;

// Load Models
use App\Model\User;
use App\User as AuthUser;
use App\Model\Student;
use App\Model\Role;
use App\Model\Setting;
use App\Model\School;

class UserController extends Controller
{
    public function login_as($school, AuthUser $user)
    {
        $teacher = User::findOrFail(auth()->user()->id);

        if ($teacher->user_role && $teacher->user_role == 'Parents') {
            $token  = $user->createToken('schoolApp')->accessToken;
            $user   = User::findOrFail($user->id);

            return response()->json(['token' => $token, 'user' => $user]);
        } else {
            return response()->json(["error" => 'Unauthenticated.', 'data' => $teacher], 401);
        }
    }
    public function profile(Request $request, $subdomain)
    {
        $info = User::with(['media', 'pincodeData', 'cityData', 'documents', 'custom_fields'])->findOrFail($request->user()->id);

        $info->picture = !empty($info->media->image) ? url('uploads/thumb/' . $info->media->image) : url('img/figure/admin.jpg');
        $info->dob     = date("d M Y", strtotime($info->dob));

        if (!empty($info->custom_fields)) {
            foreach ($info->custom_fields as $key => $cf) {
                if ($cf->type == 'relation') {
                    $relationInfo = \DB::table($cf->relative_table)->find($cf->pivot->value);
                    $info->custom_fields[$key]->valueText = !empty($relationInfo->name) ? $relationInfo->name : '';
                } else {
                    $info->custom_fields[$key]->valueText = $cf->pivot->value;
                }
            }
        }

        $re = [
            'status'    => true,
            'data'      => $info
        ];
        return response()->json($re);
    }
    public function teachers(Request $request, School $school)
    {
        $query = User::where('school', $school->uid)->whereHas('roleName', function ($q) {
            $q->where('name', 'Teacher');
        });

        if (!empty($request->class_id)) {
            $query->whereHas('teacher_timetable', function ($q) use ($request) {
                $q->whereHas('section_info', function ($q1) use ($request) {
                    $q1->where('class', $request->class_id);
                });
            });
        }
        if (!empty($request->subject_id)) {
            $query->whereHas('teacher_timetable', function ($q) use ($request) {
                $q->where('subject', $request->subject_id);
            });
        }

        $teachers = $query->selectRaw("CONCAT(name, ' (', mobile, ')' ) AS name, id")->pluck('name', 'id');

        return response()->json($teachers);
    }

    public function index(Request $request)
    {
        $withArr = ['media', 'cityData', 'cityData.stateName', 'roleName'];

        $query = User::with($withArr)->whereHas('roleName', function ($q) {
            $q->whereNotIn('name', ['Student', 'Admin', 'School']);
        })->where('school', auth()->user()->school);

        if (!empty($request->s)) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'LIKE', '%' . $request->s . '%')
                    ->orWhere('mobile', 'LIKE', '%' . $request->s . '%');
            });
        }
        if (!empty($request->role)) {
            $query->whereHas('roleName', function ($q) use ($request) {
                $q->where('name', $request->role);
            });
        }
        if (!empty($request->state_id)) {
            $query->whereHas('cityData', function ($q) use ($request) {
                $q->where('state', $request->state_id);
            });
        }
        if (!empty($request->city_id)) {
            $query->where('city_id', $request->city_id);
        }
        if (!empty($request->gender)) {
            $query->where('gender', $request->gender);
        }

        if (!empty($request->custom_field)) {
            // $request->custom_field = json_decode($request->custom_field);

            foreach ($request->custom_field as $cf_id => $cf) {
                if (!empty($cf)) {
                    $query->whereHas('direct_custom_fields', function ($q) use ($cf, $cf_id) {
                        $q->where('value', $cf)->where('custom_field_id', $cf_id);
                    });
                }
            }
        }

        if (empty($request->type) || $request->type != 'all') {
            $data = $query->latest()->paginate(20);

            if (!$data->isEmpty()) {
                foreach ($data as $i => $d) {
                    if (!empty($data[$i]->media)) {
                        $data[$i]->media->large_image   = !empty($d->media->image) ? url('uploads/large/' . $d->media->image) : url('img/default.jpg');
                        $data[$i]->media->medium_image  = !empty($d->media->image) ? url('uploads/medium/' . $d->media->image) : url('img/default.jpg');
                        $data[$i]->media->thumb_image   = !empty($d->media->image) ? url('uploads/thumb/' . $d->media->image) : url('img/default.jpg');
                    }
                    $data[$i]->children_count = 0;
                    if (!empty($request->role) && $request->role == 'Parents') {
                        $data[$i]->children_count = Student::where('father', $d->id)->orWhere('mother', $d->id)->orWhere('guardian', $d->id)->has('user')->count();
                    }
                }
            }
        } else {
            $query->select(
                \DB::raw("CONCAT(name, ' (', mobile, ')') AS name"),
                'id'
            );
            $data = $query->pluck('name', 'id');
        }

        return response()->json($data, 200);
    }
    public function show($subdomain, $id = null)
    {
        $info = User::with(['media', 'pincodeData', 'cityData', 'documents', 'custom_fields'])->findOrFail($id);

        if (!empty($info->custom_fields)) {
            foreach ($info->custom_fields as $key => $cf) {
                if ($cf->type == 'relation') {
                    $relationInfo = \DB::table($cf->relative_table)->find($cf->pivot->value);
                    $info->custom_fields[$key]->valueText = !empty($relationInfo->name) ? $relationInfo->name : '';
                } else {
                    $info->custom_fields[$key]->valueText = $cf->pivot->value;
                }
            }
        }

        $re = [
            'status'    => true,
            'data'      => $info
        ];
        return response()->json($re);
    }
    public function userLogin(Request $request, $schoolName)
    {
        $schoolInfo = User::whereHas('schoolData', function ($q) use ($schoolName) {
            $q->where('weburl', $schoolName);
        })->firstOrFail();
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
                'school'        => $schoolInfo->id,
            ];
            if (Auth::attempt($userdata)) {
                $user   = Auth::user();
                $token  = $user->createToken('schoolApp')->accessToken;
                $user   = User::with(['roleName', 'media', 'schoolData'])->findOrFail($user->id)->toArray();
                $user['picture'] = !empty($user['media']['image']) ? url('uploads/thumb/' . $user['media']['image']) : url('img/figure/admin.jpg');

                $re = [
                    'status'    => true,
                    'message'   => 'Login success! Redirecting please wait.',
                    'data'      => $user,
                    'token'     => $token
                ];
                $responseCode = 200;
            } else {
                $re = [
                    'status'    => false,
                    'message'   => 'Login failed! Username or password is wrong.',
                    'errors'    => [],
                    'userData'  => $userdata,
                ];
                $responseCode = 200;
            }
        }
        return response()->json($re, $responseCode);
    }
    public function recoverPassword(Request $request)
    {
        $rules = [
            'login'             => 'required',
            'new_password'      => 'required|string|same:new_password',
            'confirm_password'  => 'required|string|same:new_password'
        ];
        $input      = $request->all();
        $validator  = Validator::make($input, $rules);
        if ($validator->fails()) {
            $re = [
                'status'    => false,
                'message'   => 'Validation Error!',
                'errors'    => $validator->errors()->all()
            ];
        } else {
            $user = User::where('login', $input['login']);
            $password = Hash::make($input['new_password']);
            $user->update(['password' => $password]);
            $re = [
                'status'  => true,
                'message' => 'Password has been updated.'
            ];
        }
        return response()->json($re, 200);
    }
    public function forgotPassword(Request $request)
    {
        $checkUser = User::where('login', $request->user_login)->orWhere('mobile', $request->mobile);
        if ($checkUser->count()) {
            $user = $checkUser->first();
            $otp_code = rand(100000, 999999); // Generate 6 digit autogenerate
            $settings = Setting::find(1);
            // Send SMS
            $mobileNo   = str_replace(["+", " ", "(", ")"], "", $user->mobile);
            $mobileNo   = substr($mobileNo, -10);
            $senderId   = "SCHERP";
            $message    = urlencode("Your One Time Password is {$otp_code} for recover password from {$settings->name}");
            $smsApiUrl  = str_replace(["[SENDER]", "[MOBILE]", "[MESSAGE]"], [$senderId, $mobileNo, $message], $settings->sms_gateway);
            $sms        = file_get_contents($smsApiUrl);
            $re = [
                'status'    => true,
                'message'   => 'OTP sent to your mobile no. ' . $user->mobile,
                'otp'       => $otp_code,
                'login'     => $user->login,
                'mobile_no' => $user->mobile
            ];
        } else {
            $re = [
                'status'    => false,
                'message'   => 'Username or Mobile no. doesn\'t exists.'
            ];
        }
        return response()->json($re, 200);
    }
    public function logout(Request $request, $guards = null)
    {
        if (Auth::check()) {
            $request->user()->tokens->each(function ($token, $key) {
                $token->delete();
            });
        }
        $re = [
            'status' => true,
        ];
        return response()->json($re, 200);
    }
    public function store(Request $request, $schoolName)
    {
        $rules = [
            'login'     => [
                'required',
                Rule::unique('users')
                    ->where('school', auth()->user()->school)
            ],
            'password'  => 'required',
            'fname'     => 'required|alpha',
            'title'     => 'required',
            'gender'    => 'required',
            'mobile'    => 'required|numeric'
            // 'role'      => 'required|numeric'
        ];
        // $role = Role::where('name', 'LIKE', $request->role)->first();
        $input      = $request->all();
        // $input['role'] = $role->id;

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
            $role = Role::where('name', 'LIKE', $input['role'])->firstOrFail();

            $user = new User;
            $user->login         = $input['login'];
            $user->password      = Hash::make($input['password']);
            $user->title         = $input['title'];
            $user->fname         = $input['fname'];
            $user->lname         = $input['lname'];
            $user->name          = trim($input['title'] . ' ' . $input['fname'] . ' ' . $input['lname']);
            $user->email         = $input['email'];
            $user->mobile        = $input['mobile'];
            $user->dob           = $input['dob'];
            $user->gender        = $input['gender'];
            $user->address1      = $input['address1'];
            $user->address2      = $input['address2'];
            $user->city_id       = $input['city_id'];
            $user->pin_code      = $input['pin_code'];
            $user->image         = $input['image'];
            $user->role          = $role->id;
            $user->school        = auth()->user()->school;
            $user->save();

            $customFields = [];
            if (!empty($request->custom_field)) {
                foreach ($request->custom_field as $id => $cf) {
                    $customFields[$id] = [
                        'value' => $cf
                    ];
                }

                $user->custom_fields()->sync($customFields);
            }

            $re = [
                'status'    => true,
                'message'   => 'Success! Record has been added.',
                'user'      => $user
            ];
            $responseCode = 200;
        }
        return response()->json($re, $responseCode);
    }
    public function update(Request $request, $subdomain, User $user)
    {
        $input      = $request->all();
        $rules = [
            'login'     => 'required|unique:users,id,' . $user->id,
            'fname'     => 'required|alpha',
            'title'     => 'required',
            'gender'    => 'required',
            'mobile'    => 'required|numeric'
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
            $role = Role::where('name', 'LIKE', $input['role'])->firstOrFail();

            $user->login         = $input['login'];
            if (!empty($input['password'])) {
                $user->password      = Hash::make($input['password']);
            }
            $user->title         = $input['title'];
            $user->fname         = $input['fname'];
            $user->lname         = $input['lname'];
            $user->name          = trim($input['title'] . ' ' . $input['fname'] . ' ' . $input['lname']);
            $user->email         = $input['email'];
            $user->mobile        = $input['mobile'];
            $user->dob           = $input['dob'];
            $user->gender        = $input['gender'];
            $user->address1      = $input['address1'];
            $user->address2      = $input['address2'];
            $user->city_id       = $input['city_id'];
            $user->pin_code      = $input['pin_code'];
            $user->image         = $input['image'];
            $user->role          = $role->id;
            $user->school        = auth()->user()->school;
            $user->save();

            $customFields = [];
            if (!empty($request->custom_field)) {
                foreach ($request->custom_field as $id => $cf) {
                    $customFields[$id] = [
                        'value' => $cf
                    ];
                }

                $user->custom_fields()->sync($customFields);
            }

            $re = [
                'status'    => true,
                'message'   => 'Success! Record has been updated.',
            ];
            $responseCode = 200;
        }
        return response()->json($re, $responseCode);
    }
    public function getListByRole(Request $request)
    {
        $data = User::whereHas('roleName', function ($q) use ($request) {
            $q->where('name', 'LIKE', $request->role);
        })->get()->toArray();
        return response()->json($data, 200);
    }
    public function remove(Request $request)
    {
        User::whereIn('id', $request->check)->delete();
        $re = [
            'status'    => true,
            'message'   => 'Selected record(s) has been deleted.'
        ];
        return response()->json($re, 200);
    }
    public function getDrivers()
    {
        $lists = User::whereHas('roleName', function ($q) {
            $q->where('name', 'LIKE', 'Driver');
        })->where("school", auth()->user()->school)->get()->toArray();
        return response()->json($lists, 200);
    }
    public function getTeachers()
    {
        $data = User::with(['media', 'cityData', 'cityData.stateName', 'roleName', 'parent_school', 'parent_school.schoolData'])
            ->whereHas('roleName', function ($q) {
                $q->where('name', 'LIKE', 'Teacher');
            })->where("school", auth()->user()->school)->get();

        if (!$data->isEmpty()) {
            foreach ($data as $i => $d) {
                if (!empty($d->media->image)) {
                    $data[$i]->picture   = url('uploads/thumb/' . $d->media->image);
                }

                if (!empty($d->parent_school->schoolData->student_id_instructions) && !is_array($d->parent_school->schoolData->student_id_instructions)) {
                    $data[$i]->parent_school->schoolData->student_id_instructions = explode("\n", $d->parent_school->schoolData->student_id_instructions);
                }
                if (!empty($d->parent_school->schoolData->teacher_id_instructions) && !is_array($d->parent_school->schoolData->teacher_id_instructions)) {
                    $data[$i]->parent_school->schoolData->teacher_id_instructions = explode("\n", $d->parent_school->schoolData->teacher_id_instructions);
                }
                if (!empty($d->parent_school->schoolData->staff_id_instructions) && !is_array($d->parent_school->schoolData->staff_id_instructions)) {
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

                $data[$i]->barcode          = strtoupper(sprintf("%05d", $d->id));
                $data[$i]->barcode_image = 'data:image/png;base64,' . DNS1D::getBarcodePNG($data[$i]->barcode, 'C39', 1, 30);
            }
        }

        return response()->json($data, 200);
    }
    public function getStaffs()
    {
        $data = User::with(['media', 'cityData', 'cityData.stateName', 'roleName', 'parent_school', 'parent_school.schoolData'])
            ->whereHas('roleName', function ($q) {
                $q->where('name', 'LIKE', 'Staff');
            })->where("school", auth()->user()->school)->get();

        if (!$data->isEmpty()) {
            foreach ($data as $i => $d) {
                if (!empty($d->media->image)) {
                    $data[$i]->picture   = url('uploads/thumb/' . $d->media->image);
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

                $data[$i]->barcode            = strtoupper(sprintf("%05d", $d->id));
                $data[$i]->barcode_image = 'data:image/png;base64,' . DNS1D::getBarcodePNG($data[$i]->barcode, 'C39', 1, 30);
            }
        }

        return response()->json($data, 200);
    }
}