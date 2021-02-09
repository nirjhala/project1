<?php

namespace App\Http\Controllers\api;

use App\Model\Gallery;
use App\Model\School;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $limit = !empty($request->limit) ? $request->limit : 10;
        $list = Gallery::with('media');
        if(!empty($request->s)) {
            $list->where('title', 'LIKE', '%'.$request->s.'%');
        }
        if(!empty($request->type)) {
            $list->where('type', '=', $request->type);
        }
        $gallery = $list->where('school_id', $school->uid)->latest()->paginate($limit);

        if(!$gallery->isEmpty()) {
            foreach($gallery as $key => $n) {
                if(!empty($n->media->image)) {
                    $gallery[$key]->thumb_image = url("uploads/thumb/{$n->media->image}");
                }
                $gallery[$key]->updated_at = date('F d, Y', strtotime($n->updated_at));
            }
        }
        return response()->json($gallery);
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
            'title'    => 'required|string'
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
            $page = new Gallery;
            $page->fill($input);
            $page->school_id = $user->school;
            $page->save();

            return response()->json($page, 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function show($school, Gallery $gallery)
    {
        return response()->json($gallery);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $school, Gallery $gallery)
    {
        $user = auth()->user();
        $input = $request->get('form');
        $rules = [
            'title'    => 'required|string'
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
            $gallery->fill($input);
            $gallery->school_id = $user->school;
            $gallery->save();

            return response()->json($gallery, 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gallery $gallery)
    {
        //
    }

    public function remove(Request $request)
    {
        Gallery::whereIn('id', $request->check)->delete();

        return response()->json(['status' => true]);
    }
}
