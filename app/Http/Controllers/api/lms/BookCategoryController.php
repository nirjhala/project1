<?php
namespace App\Http\Controllers\api\lms;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use App\Model\BookCategory;
use Str;

class BookCategoryController extends Controller
{
    public function addCategory(Request $request, $subdomain)
    {
        $input = $request->all();
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
          $isExists = BookCategory::where('name', 'LIKE', $request->name)->where('school', auth()->user()->school)->count();

          if(!$isExists) {
            $bcat = new BookCategory;
            $bcat->name = $request->name;
            $bcat->slug = Str::slug($request->name, '-');
            $bcat->school = auth()->user()->school;
            $bcat->save();

            $re = [
              'status'  => true,
              'message' => 'Success! New record added successfully.'
            ];
          } else {
            $re = [
              'status'  => false,
              'message' => 'Failed! Validation Error!',
              'errors'  => [
                'Failed! Book category name already exists.'
              ]
            ];
          }
        }

        return response()->json($re, 200);
    }
    public function categoryInfo(Request $request, $subdomain, BookCategory $category) {
      return response()->json($category, 200);
    }
    public function updateCategory(Request $request, $subdomain, BookCategory $category)
    {
      $input = $request->all();
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
        $isExists = BookCategory::where('name', 'LIKE', $request->name)->where('school', auth()->user()->school)->where('id', '!=', $category->id)->count();

        if(!$isExists) {
          $category->name = $request->name;
          $category->slug = Str::slug($request->name, '-');
          $category->school = auth()->user()->school;
          $category->save();

          $re = [
            'status'  => true,
            'message' => 'Success! New record added successfully.'
          ];
        } else {
          $re = [
            'status'  => false,
            'message' => 'Failed! Validation Error!',
            'errors'  => [
              'Failed! Book category name already exists.'
            ]
          ];
        }
      }
      return response()->json(['status'=> true, 'message' => 'Success! Data updated successfully.'], 200);
    }
    public function getData(Request $request) {
      $lists = BookCategory::where('school', auth()->user()->school)->latest()->paginate(10);

      return response()->json($lists, 200);
    }
    public function getAllList(Request $request) {
      $lists = BookCategory::where('school', auth()->user()->school)->orderBy('name', 'ASC')->get();

      return response()->json($lists, 200);
    }
    public function removeData(Request $request) {
      BookCategory::whereIn('id', $request->check)->delete();

      $re = [
          'status'    => true,
          'message'   => 'Selected record(s) has been deleted.'
      ];

      return response()->json($re, 200);
    }
}
