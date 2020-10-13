<?php
namespace App\Http\Controllers\api\lms;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use App\Model\LibraryPass;
use App\Model\LmsSetting;
use Str;
use DNS1D;

class LibraryPassController extends Controller
{
    public function add(Request $request, $subdomain)
    {
        $input = $request->all();
        $input['record']['school'] = auth()->user()->school;
        $rules = [
          'record'      => 'required|array',
          'record.name' => 'required|string'
        ];

        $validator  = Validator::make($input, $rules);

        if ($validator->fails()) {
          $re = [
              'status'    => false,
              'message'   => 'Validation Error!',
              'errors'    => $validator->errors()->all(),
          ];
        } else {
          // $isExists = LibraryPass::where('name', 'LIKE', $request->name)->where('school', auth()->user()->school)->count();
          //
          // if(!$isExists) {
          $pass = LibraryPass::create( $input['record'] );
          $pass->barcode = sprintf( "LP-%05d", $pass->id );
          $pass->save();

          $re = [
            'status'  => true,
            'message' => 'Success! New record added successfully.'
          ];
          // } else {
          //   $re = [
          //     'status'  => false,
          //     'message' => 'Failed! Validation Error!',
          //     'errors'  => [
          //         'Failed! Book category name already exists.'
          //     ]
          //   ];
          // }
        }

        return response()->json($re, 200);
    }
    public function info(Request $request, $subdomain, LibraryPass $pass) {
      return response()->json($pass, 200);
    }
    public function infoByBarcode(Request $request) {
      $info     = LibraryPass::where('barcode', $request->get('barcode'))->firstOrFail()->toArray();
      $setting  = LmsSetting::findOrFail(1)->toArray();

      $info['book_issue_limit'] = $setting[ $info['type'].'_issue_book_limit' ];

      $info     = array_merge( $info, $setting );

      $re = [
          'status'    => true,
          'data'      => $info
      ];
      return response()->json($re, 200);
    }
    public function update(Request $request, $subdomain, LibraryPass $pass)
    {
      $input = $request->get('record');

      $rules = [
        'name' => 'required|string'
      ];

      $validator  = Validator::make($input, $rules);

      if ($validator->fails()) {
        $re = [
            'status'    => false,
            'message'   => 'Validation Error!',
            'errors'    => $validator->errors()->all(),
        ];
      } else {
        // $isExists = LibraryPass::where('name', 'LIKE', $request->name)->where('school', auth()->user()->school)->where('id', '!=', $pass->id)->count();
        //
        // if(!$isExists) {
          $pass->fill($input);
          $pass->school = auth()->user()->school;
          $pass->save();

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
