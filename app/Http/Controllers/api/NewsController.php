<?php

namespace App\Http\Controllers\api;

use App\Model\News;
use App\Model\School;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $list = News::with('media');
        if(!empty($request->s)) {
            $list->where('title', 'LIKE', '%'.$request->s.'%');
        }
        $news = $list->where('school_id', $school->uid)->paginate(10);
        if(!$news->isEmpty()) {
            foreach($news as $key => $n) {
                if(!empty($n->media->image)) {
                    $news[$key]->thumb_image = url("uploads/thumb/{$n->media->image}");
                }
                $news[$key]->date = date('F d, Y', strtotime($n->updated_at));
            }
        }
        return response()->json($news);
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
                Rule::unique('news')->where(function($q) use ($user, $input) {
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
            $page = new News;
            $page->fill($input);
            $page->school_id = $user->school;
            $page->save();

            return response()->json($page, 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\News  $news
     * @return \Illuminate\Http\Response
     */
    public function show(School $school, $news)
    {
        $query = News::where('school_id', $school->uid);
        if(is_numeric($news)) {
            $query->where('id', $news);
        } else {
            $query->where('slug', $news);
        }
        $news = $query->firstOrFail();
        return response()->json($news);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\News  $news
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $school, News $news)
    {
        $user = auth()->user();
        $input = $request->get('form');
        $rules = [
            'title'    => 'required|string',
            'slug'     => [
                'required',
                'string',
                Rule::unique('news')->where(function($q) use ($user, $input, $news) {
                    return $q->where('school_id', $user->school)->where('id', '!=', $news->id);
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
            $news->fill($input);
            $news->school_id = $user->school;
            $news->save();

            return response()->json($news, 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\News  $news
     * @return \Illuminate\Http\Response
     */
    public function destroy(News $news)
    {
        //
    }

    public function remove(Request $request)
    {
        News::whereIn('id', $request->check)->delete();

        return response()->json(['status' => true]);
    }
}
