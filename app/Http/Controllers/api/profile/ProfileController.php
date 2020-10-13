<?php
namespace App\Http\Controllers\api\profile;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use App\Model\User;
use App\Model\Pincode;
use App\Model\State;
use App\Model\City;
use App\Model\School;

use Hash;

class ProfileController extends Controller
{
    public function info(Request $request, $subdomain)
    {
        $userInfo = User::with(['media', 'pincodeData', 'roleName', 'pincodeData.cityName'])->findOrFail(auth()->user()->id);

        // $userInfo->picture = url('upload')

        $pincodes = [];
        if (!empty($userInfo->pincodeData->city)) {
            $pincodes = Pincode::where('deleted', 'N')->where('city', $userInfo->pincodeData->city)->get()->toArray();
        }
        $cities = [];
        if (!empty($userInfo->pincodeData->cityName->state)) {
            $cities = City::where('deleted', 'N')->where('state', $userInfo->pincodeData->cityName->state)->get()->toArray();
        }
        $states = State::where('deleted', 'N')->get()->toArray();
        $re = compact('userInfo', 'states', 'cities', 'pincodes');
        return response()->json($re, 200);
    }
    public function schoolInfo(Request $request, $subdomain)
    {
        $userInfo = School::with(['city'])->where('uid', auth()->user()->id)->first();

        $cities = [];
        if (!empty($userInfo->city->state)) {
            $cities = City::where('deleted', 'N')->where('state', $userInfo->city->state)->get()->toArray();
        }
        $states = State::where('deleted', 'N')->get()->toArray();

        $re = compact('userInfo', 'states', 'cities');

        return response()->json($re, 200);
    }
    public function updateData(Request $request)
    {
        $input = $request->get("record");
        User::find(auth()->user()->id)->update($input);

        return response()->json(['status'=> true, 'message' => 'Profile updated.'], 200);
    }
    public function generalSetting(Request $request)
    {
        $input = $request->all();
        $input = json_decode($input['record'], true);
        $input['city_id'] = $input['city'];
        unset($input['city']);
        unset($input['state']);
        $setting = School::updateOrCreate(['uid' => auth()->user()->id], $input);

        if ($request->hasFile('logo')) {
            $fileName = "logo_{$setting->uid}.".$request->logo->getClientOriginalExtension();
            $request->logo->move(public_path('img/profiles/'), $fileName);

            $setting->logo = $fileName."?v=".time();
            $setting->save();
        }

        if ($request->hasFile('favicon')) {
            $fileName = "favicon_{$setting->uid}.".$request->favicon->getClientOriginalExtension();
            $request->favicon->move(public_path('img/profiles/'), $fileName);

            $setting->favicon = $fileName."?v=".time();
            $setting->save();
        }

        return response()->json(['status'=> true, 'message' => 'Data updated.'], 200);
    }
    public function ChangePassword(Request $request)
    {
        $input = $request->all();
        $rules = [
            'current_password'  => 'required|string|min:8',
            'new_password'		=> 'required|string|min:8|same:new_password',
            'confirm_password'	=> 'required|string|min:8|same:new_password'
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
            $check = Hash::check($input['current_password'], auth()->user()->password);
            if (!$check) {
                $re = [
                    'status'	=> false,
                    'message'	=> 'Validation Error!',
                    'errors' 	=> ['Current password is not matched.'],
                ];
            } else {
                $user = auth()->user();
                $user->password = Hash::make($input['new_password']);
                $user->save();

                $re = [
                    'status'	=> true,
                    'message'	=> 'Password has been changed successfully.'
                ];
            }
        }

        return response()->json($re, 200);
    }
}
