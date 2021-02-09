<?php

namespace App\Http\Controllers\api;

use App\Model\Page;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function all() {
        $pages = Page::pluck('title', 'id');

        return response()->json($pages);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $limit = 10;
        if(!empty(request('limit'))) {
            $limit = request('limit');
        }
        $page = Page::query();
        if(!empty(request('s'))) {
            $s = trim( request('s') );

            $page->where('title', 'LIKE', '%'.$s.'%');
        }
        $pages = $page->latest()->paginate($limit);
        
        return response()->json($pages);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = auth()->user();
        $input = $request->get('form');
        $rules = [
            'title'    => 'required|string',
            'slug'     => [
                'required',
                'string',
                Rule::unique('pages')->where(function($q) use ($user, $input) {
                    return $q->where('school_id', $user->school);
                })
            ],
        ];

        $validator  = Validator::make($input, $rules);

        if ($validator->fails()) {
            $re = [
                'status'    => false,
                'message'   => 'Validation Error!',
                'errors'    => $validator->errors()->all()
            ];
            return response()->json($re, 403);
        } else {
            $page = new Page;
            $page->fill($input);
            $page->school_id = $user->school;
            $page->save();

            return response()->json($page, 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($weburl, Page $page)
    {
        return response()->json($page);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $weburl, Page $page)
    {
        $user = auth()->user();
        $input = $request->get('form');
        $rules = [
            'title'    => 'required|string',
            'slug'     => [
                'required',
                'string',
                Rule::unique('pages')->where(function($q) use ($user, $page) {
                    return $q->where('school_id', $user->school)->where('id', '!=', $page->id);
                })
            ],
        ];

        $validator  = Validator::make($input, $rules);

        if ($validator->fails()) {
            $re = [
                'status'    => false,
                'message'   => 'Validation Error!',
                'errors'    => $validator->errors()->all()
            ];
            return response()->json($re, 403);
        } else {
            $page->fill($input);
            $page->school_id = $user->school;
            $page->save();

            return response()->json($page, 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Page $page)
    {
        $page->delete();
    }
}
