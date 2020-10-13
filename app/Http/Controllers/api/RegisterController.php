<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

use Auth;
use Route;
use Hash;
use App\Model\User;
use App\Model\Role;
use App\Model\Setting;

class RegisterController extends Controller
{
    public function shopRegister(Request $request)
    {
        $rules = [
            'user'              => 'required|array',
            'user.login'        => 'required|unique:users,login',
            'user.password'     => 'required',
            'user.mobile'       => 'required',
            'user.email'        => 'required|email',
            'user.fname'        => 'required|alpha',
            'school'            => 'required|array',
            'school.name'       => 'required',
            'school.est_year'   => 'required|numeric',
            'school.city_id'    => 'required|numeric',
            'school.plan_id'    => 'required|numeric',
            'school.weburl'     => 'required|unique:schools,weburl'
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
            $roleInfo                   = Role::where('name', 'LIKE', 'School')->first();
            $input['user']['role']      = $roleInfo->id;
            $input['user']['password']  = Hash::make($input['user']['password']);

            $user = User::create($input['user']);
            $user->schoolData()->create($input['school']);

            $user->school = $user->id;
            $user->save();

            $re = [
                'status'    => true,
                'message'   => 'Success! School added successfully.',
                'weburl'    => $user->schoolData->weburl
            ];
        }

        return response()->json($re);
    }
    public function getStarted(Request $request)
    {
        $rules = [
            'mobile' => 'required|numeric',
        ];

        $input      = $request->only('mobile');

        $validator  = Validator::make($input, $rules);

        if ($validator->fails()) {
            $re = [
                'status'    => false,
                'message'   => 'Validation Error!',
                'errors'    => $validator->errors()->all()
            ];
        } else {
            $isExists = User::where('mobile', $request->mobile)->whereHas('roleName', function ($q) {
                $q->where('name', 'School');
            })->count();

            if ($isExists) {
                $userInfo = User::with(['schoolData', 'roleName'])->where('mobile', $request->mobile)->whereHas('roleName', function ($q) {
                    $q->where('name', 'School');
                })->first();

                $re = [
                    'status'    => true,
                    'is_exists' => true,
                    'weburl'    => $userInfo->schoolData->weburl
                ];
            } else {
                $otp_code = rand(100000, 999999); // Generate 6 digit autogenerate

                $settings = Setting::find(1);

                // Send SMS
                $mobileNo = str_replace(["+", " ", "(", ")"], "", $request->mobile);
                $mobileNo = substr($mobileNo, -10);
                $senderId = "SCHERP";

                $message  = urlencode("Your One Time Password is {$otp_code} from {$settings->name}");

                $smsApiUrl = str_replace(["[SENDER]", "[MOBILE]", "[MESSAGE]"], [$senderId, $mobileNo, $message], $settings->sms_gateway);

                $sms = file_get_contents($smsApiUrl);

                $re = [
                    'status'    => true,
                    'is_exists' => false,
                    'route'     => 'otp',
                    'otp_code'  => $otp_code,
                    'sms'       => @$sms
                ];
            }
        }

        $responseCode = 200;
        return response()->json($re, $responseCode);
    }

    public function sendOtp(Request $request)
    {
        $otp_code = rand(100000, 999999); // Generate 6 digit autogenerate

        $settings = Setting::find(1);
        // Send SMS
        $mobileNo   = str_replace(["+", " ", "(", ")"], "", $request->mobile_no);
        $mobileNo   = substr($mobileNo, -10);
        $senderId   = "SCHERP";

        $message    = urlencode("Your One Time Password is {$otp_code} from {$settings->name}");

        $smsApiUrl  = str_replace(["[SENDER]", "[MOBILE]", "[MESSAGE]"], [$senderId, $mobileNo, $message], $settings->sms_gateway);

        $sms        = file_get_contents($smsApiUrl);

        $re = [
            'status'    => true,
            'otp_code'  => $otp_code,
            'mobile_no' => $request->mobile_no
        ];

        $responseCode   = 200;
        return response()->json($re, $responseCode);
    }

    public function logout()
    {
        Auth::logout();

        return redirect(url('admin-control'))->with('success', 'You\'ve logged out');
    }

    public function auth(Request $request)
    {
        $rules = [
            'user_login'    => 'required',
            'password'      => 'required|min:6|max:20'
        ];
        $request->validate($rules);

        $userData = [
            'user_login'    => $request->user_login,
            'password'      => $request->password
        ];

        if (Auth::attempt($userData)) {
            return redirect(url('admin-control/dashboard'));
        } else {
            return redirect(url('admin-control'))->with('danger', 'Credentials is not matched.');
        }
    }

    public function add(Request $request, $schoolName)
    {
        $rules = [
            'login'     => 'required|unique:users',
            'password'  => 'required',
            'fname'     => 'required|alpha',
            'lname'     => 'alpha',
            'title'     => 'required',
            'gender'    => 'required',
            'mobile'    => 'required|numeric',
            'role'      => 'required|numeric',
            'school'    => 'required|numeric'
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
            $obj->pin_code      = $input['pin_code'];
            $obj->image         = $input['image'];
            $obj->role          = $input['role'];
            $obj->school        = $input['school'];
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
            'id'            => 'required|numeric',
            'name'          => 'required|unique:class_timing,id,'.$input['id'],
            'time_start'    => 'required',
            'time_end'      => 'required',
            'shift'         => 'required|numeric',
            'school'        => 'required|numeric',
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
            $obj->name          = $input['name'];
            $obj->time_start    = $input['time_start'];
            $obj->time_end      = $input['time_end'];
            $obj->shift         = $input['shift'];
            $obj->school        = $input['school'];
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
        $data = User::with(['media', 'pincodeData.cityName', 'pincodeData.cityName.stateName', 'roleName'])->where('deleted', 'N')->latest()->paginate(20);

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
        $query = User::with(['media', 'pincode', 'roleName'])->where('deleted', 'N');

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
        })->get()->toArray();

        return response()->json($lists, 200);
    }
}
