<?php
namespace App\Http\Controllers\api\lms;
use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use App\Model\Book;
use App\Model\BookIssue;
use App\Model\LmsSetting;
use Str;
use DNS1D;

class BookController extends Controller
{
    public function addData(Request $request, $subdomain)
    {
        $input = $request->all();
        // dd($input);
        $rules = [
          'record'        => 'required|array',
          'record.title'  => 'required|string'
        ];
        $validator  = Validator::make($input, $rules);
        if ($validator->fails()) {
          $re = [
              'status'    => false,
              'message'   => 'Validation Error!',
              'errors'    => $validator->errors()->all(),
          ];
        } else {
            $data                 = $input['record'];
            $data['cover_image']  = $input['image'];
            $data['school']       = auth()->user()->school;
            $book                 = Book::create( $data );
            // Update / Generate Barcode
            $book->barcode  = sprintf("BOK %05d", $book->id);
            $book->save();

            if ($request->hasFile('pdf_file')) {
                $fileName = "file_{$setting->uid}.".$request->pdf_file->getClientOriginalExtension();
                $request->pdf_file->move(public_path('img/profiles/'), $fileName);

                $book->pdf_file = $fileName;
                $book->save();
            }

            $re = [
              'status'  => true,
              'message' => 'Success! New record added successfully.'
            ];
        }
        return response()->json($re, 200);
    }
    public function info(Request $request, $subdomain, Book $book) {
      return response()->json($book, 200);
    }
    public function infoByBarcode(Request $request, $subdomain) {
      $info = Book::where('barcode', $request->get('barcode'))->firstOrFail();
      return response()->json($info, 200);
    }
    public function updateData(Request $request, $subdomain, Book $book)
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
        $isExists = Book::where('name', 'LIKE', $request->name)->where('school', auth()->user()->school)->where('id', '!=', $book->id)->count();
        if(!$isExists) {
          $book->name = $request->name;
          $book->slug = Str::slug($request->name, '-');
          $book->school = auth()->user()->school;
          $book->save();
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
      $lists = Book::where('school', auth()->user()->school)->latest()->paginate(10);
      if(!$lists->isEmpty()) {
        foreach($lists as $key => $list) {
          $lists[$key]->barcode_image = 'data:image/png;base64,'.DNS1D::getBarcodePNG($list->barcode, 'C39', 1, 30);
        }
      }
      return response()->json($lists, 200);
    }
    public function removeData(Request $request) {
      Book::whereIn('id', $request->check)->delete();
      $re = [
          'status'    => true,
          'message'   => 'Selected record(s) has been deleted.'
      ];
      return response()->json($re, 200);
    }

    public function issue(Request $request) {
      $books = $request->get('books');

      // dd($books);
      if(!empty($books)) {
        foreach($books as $book) {
          $arr = [
            'book_id' => $book,
            'pass_id' => $request->pass,
            'school'  => auth()->user()->school
          ];

          BookIssue::create( $arr );
        }
        $re = [
          'status'  => true,
        ];
      } else {
        $re = [
          'status'  => false,
        ];
      }
      return response()->json($re, 200);
    }

    public function issue_history(Request $request) {
      $setting = LmsSetting::find(1);
      $lists = BookIssue::with(['book', 'user'])->latest()->where('school', auth()->user()->school)->paginate(30);

      if(!$lists->isEmpty()) {
        foreach($lists as $key => $l) {
          $lists[$key]->submission_date = date("d M Y", strtotime($l->created_at."+".$setting->{$l->user->type.'_issue_time_limit'}." days"));
        }
      }

      return response()->json($lists->toArray(), 200);
    }

    public function search_issue_history(Request $request) {
      $setting = LmsSetting::find(1);
      $query   = BookIssue::with(['book', 'user'])->latest()->where('school', auth()->user()->school);

      if(!empty($request->s)) {
        $s = $request->s;
        $query->whereHas('user', function($q) use($s) {
          $q->where('name', 'LIKE', '%'.$s.'%');
          $q->orWhere('mobile', 'LIKE', '%'.$s.'%');
          $q->orWhere('mobile2', 'LIKE', '%'.$s.'%');
          $q->orWhere('type', 'LIKE', '%'.$s.'%');
        });
        $query->orWhereHas('book', function($q) use($s) {
          $q->where('title', 'LIKE', '%'.$s.'%');
        });
      }

      $lists   = $query->paginate(30);

      if(!$lists->isEmpty()) {
        foreach($lists as $key => $l) {
          $lists[$key]->submission_date = date("d M Y", strtotime($l->created_at."+".$setting->{$l->user->type.'_issue_time_limit'}." days"));
        }
      }

      return response()->json($lists->toArray(), 200);
    }
}
