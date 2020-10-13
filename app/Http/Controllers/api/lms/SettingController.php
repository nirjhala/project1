<?php
namespace App\Http\Controllers\api\lms;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use App\Model\LmsSetting;
use Str;
use DNS1D;

class SettingController extends Controller
{
    public function index(Request $request, $subdomain) {
      $setting = LmsSetting::where('school', auth()->user()->school)->first();
      return response()->json($setting, 200);
    }
    public function update(Request $request, $subdomain)
    {
      $input = $request->get('record');

      $rules = [
        'student_issue_book_limit' => 'required|numeric'
      ];

      $validator  = Validator::make($input, $rules);

      if ($validator->fails()) {
        $re = [
            'status'    => false,
            'message'   => 'Validation Error!',
            'errors'    => $validator->errors()->all(),
        ];
      } else {
          $input['school'] = auth()->user()->school;
          // $pass->fill($input);
          // $pass->school = auth()->user()->school;
          // $pass->save();
          LmsSetting::updateOrCreate(['school' => auth()->user()->school], $input);

          $re = [
            'status'  => true,
            'message' => 'Success! New record added successfully.'
          ];
      }
      return response()->json(['status'=> true, 'message' => 'Success! Data updated successfully.'], 200);
    }
    public function getData(Request $request) {
      $lists = LibraryPass::with('parent_school')->where('school', auth()->user()->school)->latest()->paginate(10);

      if(!$lists->isEmpty()) {
        foreach($lists as $key => $list) {
          $lists[$key]->barcode = $list->barcode ?? sprintf("%05d", $list->id);
          $lists[$key]->barcode_image = 'data:image/png;base64,'.DNS1D::getBarcodePNG($list->barcode, 'C39', 1, 30);
        }
      }

      return response()->json($lists, 200);
    }
    public function getAllList(Request $request) {
      $lists = LibraryPass::where('school', auth()->user()->school)->orderBy('name', 'ASC')->get();

      return response()->json($lists, 200);
    }
    public function removeData(Request $request) {
      LibraryPass::whereIn('id', $request->check)->delete();

      $re = [
          'status'    => true,
          'message'   => 'Selected record(s) has been deleted.'
      ];

      return response()->json($re, 200);
    }
}
