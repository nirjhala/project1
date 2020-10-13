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
use App\Model\Role;
use App\Model\Setting;

class UserController extends Controller
{
    public function getInfo($subdomain, $id = null)
    {
        $info = User::with(['media', 'pincodeData', 'cityData'])->findOrFail($id);
        $re = [
            'status'    => true,
            'data'      => $info
        ];
        return response()->json($re, 200);
    }
    public function userLogin(Request $request)
    {
        $schoolName = Route::input('subdomain');
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
                $user['picture'] = !empty($user['media']['image']) ? url('uploads/thumb/'.$user['media']['image']) : url('img/figure/admin.jpg');

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
            $mobileNo = str_replace(["+", " ", "(", ")"], "", $user->mobile);
            $mobileNo = substr($mobileNo, -10);
            $senderId = "SCHERP";
            $message  = urlencode("Your One Time Password is {$otp_code} for recover password from {$settings->name}");
            $smsApiUrl = str_replace(["[SENDER]", "[MOBILE]", "[MESSAGE]"], [$senderId, $mobileNo, $message], $settings->sms_gateway);
            $sms = file_get_contents($smsApiUrl);
            $re = [
                'status'    => true,
                'message'   => 'OTP sent to your mobile no. '.$user->mobile,
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
    public function add(Request $request, $schoolName)
    {
        $rules = [
            // 'login'     => 'required|unique:users,login,NULL,id,school,'.auth()->user()->school.',deleted,N',
            'login'     => [
                'required',
                Rule::unique('users')
                    ->where('deleted', 'N')
                    ->where('school', auth()->user()->school)
            ],
            'password'  => 'required',
            'fname'     => 'required|alpha',
            'title'     => 'required',
            'gender'    => 'required',
            'mobile'    => 'required|numeric',
            'role'      => 'required|numeric'
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
            $obj = new User;
            $obj->login         = $input['login'];
            $obj->password      = Hash::make($input['password']);
            $obj->title         = $input['title'];
            $obj->fname         = $input['fname'];
            $obj->lname         = $input['lname'];
            $obj->name          = trim($input['title'].' '.$input['fname'].' '.$input['lname']);
            $obj->email         = $input['email'];
            $obj->mobile        = $input['mobile'];
            $obj->dob           = $input['dob'];
            $obj->gender        = $input['gender'];
            $obj->address1      = $input['address1'];
            $obj->address2      = $input['address2'];
            $obj->city_id       = $input['city_id'];
            $obj->pin_code      = $input['pin_code'];
            $obj->image         = $input['image'];
            $obj->role          = $input['role'];
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
    // public function addParent(Request $request)
    // {
    //     $input = [
    //         'login'     => $request->mobile,
    //     ];
    //     $request->merge($input);
    //     $rules = [
    //         'id'            => 'required|numeric',
    //         'login'         => 'required|unique:users',
    //         'password'      => 'required',
    //         'mobile'        => 'required',
    //         'name'          => 'required|regex:/[A-Za-z ]+/',
    //     ];
    //     $validator  = Validator::make($input, $rules);
    //     $input      = $request->all();
    //     $roleInfo   = Role::where('name', 'LIKE', 'Parents')->select('id')->first();
    //     $obj = new User;
    //     $obj->login     = $input['login'];
    //     $obj->password  = Hash::make($input['password']);
    //     $obj->mobile    = $input['mobile'];
    //     $obj->name      = $input['name'];
    //     $obj->role      = $roleInfo->id;
    //     $obj->school    = auth()->user()->school;
    //     $obj->save();
    //     $lists = User::where('role', $roleInfo->id)->get()->toArray();
    //     $re = [
    //         'id'    => $obj->id,
    //         'lists' => $lists
    //     ];
    //     return response()->json($re, 200);
    // }
    public function updateData(Request $request)
    {
        $schoolName = Route::input('subdomain');
        $input      = $request->all();
        $rules = [
            'login'     => 'required|unique:users,id,'.$input['id'],
            'fname'     => 'required|alpha',
            'title'     => 'required',
            'gender'    => 'required',
            'mobile'    => 'required|numeric',
            'role'      => 'required|numeric'
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
            $obj = User::findOrFail($input['id']);
            $obj->login         = $input['login'];
            if (!empty($input['password'])) {
                $obj->password      = Hash::make($input['password']);
            }
            $obj->title         = $input['title'];
            $obj->fname         = $input['fname'];
            $obj->lname         = $input['lname'];
            $obj->name          = trim($input['title'].' '.$input['fname'].' '.$input['lname']);
            $obj->email         = $input['email'];
            $obj->mobile        = $input['mobile'];
            $obj->dob           = $input['dob'];
            $obj->gender        = $input['gender'];
            $obj->address1      = $input['address1'];
            $obj->address2      = $input['address2'];
            $obj->city_id       = $input['city_id'];
            $obj->pin_code      = $input['pin_code'];
            $obj->image         = $input['image'];
            $obj->role          = $input['role'];
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
    public function getListByRole(Request $request)
    {
        $data = User::whereHas('roleName', function ($q) use ($request) {
            $q->where('name', 'LIKE', $request->role);
        })->where('deleted', 'N')->get()->toArray();
        return response()->json($data, 200);
    }
    public function getData()
    {
        $data = User::with(['media', 'cityData', 'cityData.stateName', 'roleName'])->whereHas('roleName', function ($q) {
            $q->whereNotIn('name', ['Student', 'Admin', 'School']);
        })->where('school', auth()->user()->school)->where('deleted', 'N')->latest()->paginate(20);
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
    public function searchData(Request $request)
    {
        $query = User::with(['media', 'cityData', 'cityData.stateName', 'roleName'])->whereHas('roleName', function ($q) {
            $q->whereNotIn('name', ['Student', 'Admin', 'School']);
        })->where('school', auth()->user()->school)->where('deleted', 'N');
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
            foreach ($data as $i => $d) {
                if (!empty($data[$i]->media)) {
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
    public function getDrivers()
    {
        $lists = User::whereHas('roleName', function ($q) {
            $q->where('name', 'LIKE', 'Driver');
        })->where('deleted', 'N')->where("school", auth()->user()->school)->get()->toArray();
        return response()->json($lists, 200);
    }
    public function getTeachers()
    {
        $data = User::with(['media', 'cityData', 'cityData.stateName', 'roleName', 'parent_school', 'parent_school.schoolData'])
        ->whereHas('roleName', function ($q) {
            $q->where('name', 'LIKE', 'Teacher');
        })->where('deleted', 'N')->where("school", auth()->user()->school)->get();

        if (!$data->isEmpty()) {
            foreach ($data as $i => $d) {
                if (!empty($d->media->image)) {
                    $data[$i]->picture   = url('uploads/thumb/'.$d->media->image);
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

                $data[$i]->barcode 		 = strtoupper(sprintf("%05d", $d->id));
                $data[$i]->barcode_image = 'data:image/png;base64,'.DNS1D::getBarcodePNG($data[$i]->barcode, 'C39', 1, 30);
            }
        }

        return response()->json($data, 200);
    }
    public function getStaffs()
    {
        $data = User::with(['media', 'cityData', 'cityData.stateName', 'roleName', 'parent_school', 'parent_school.schoolData'])
        ->whereHas('roleName', function ($q) {
            $q->where('name', 'LIKE', 'Staff');
        })->where('deleted', 'N')->where("school", auth()->user()->school)->get();

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

                $data[$i]->barcode 		   = strtoupper(sprintf("%05d", $d->id));
                $data[$i]->barcode_image = 'data:image/png;base64,'.DNS1D::getBarcodePNG($data[$i]->barcode, 'C39', 1, 30);
            }
        }

        return response()->json($data, 200);
    }
}
