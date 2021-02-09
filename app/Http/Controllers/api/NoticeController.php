<?php

namespace App\Http\Controllers\api;

use App\Model\Notice;
use App\Model\School;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NoticeController extends Controller
{
    public function all(Request $request, School $school)
    {
        $dates = Notice::where('user_id', $school->uid)
                ->groupBy(\DB::raw('DATE(`updated_at`)'))
                ->select(\DB::raw('DATE(`updated_at`) AS date'))
                ->get();
        
        $noticeArr = [];
        foreach ($dates as $key => $row) {
            # code...
            $noticeArr[$row->date] = Notice::where('user_id', $school->uid)
            ->whereRaw('DATE(`updated_at`) = ?', $row->date)
            ->latest()
            ->get()
            ->toArray();
        }

        return response()->json($noticeArr);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $list = Notice::query();
        if(!empty($request->s)) {
            $list->where('title', 'LIKE', '%'.$request->s.'%');
        }
        $notice = $list->where('user_id', $school->uid)->latest()->paginate(10);
        return response()->json($notice);
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
                Rule::unique('notices')->where(function($q) use ($user, $input) {
                    return $q->where('user_id', $user->school);
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
            $notice = new Notice;
            $notice->fill($input);
            $notice->user_id = $user->school;
            
            if($request->hasFile('attachment')) {
                $file = $request->file('attachment');
                $notice->attachment = $file->store('notice', 'public');
            }

            $notice->save();

            if(!empty($request->sections))
            {
                $sections = is_array($request->sections) ? $request->sections : explode(",", $request->sections);
                $notice->sections()->sync($sections);
            }

            return response()->json($notice, 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Notice  $notice
     * @return \Illuminate\Http\Response
     */
    public function show(School $school, $notice)
    {
        $query = Notice::where('user_id', $school->uid);
        if(is_numeric($notice)) {
            $query->where('id', $notice);
        } else {
            $query->where('slug', $notice);
        }
        $notice = $query->firstOrFail();
        return response()->json($notice);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Notice  $notice
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $school, Notice $notice)
    {
        
        $user = auth()->user();
        $input = $request->get('form');
        $rules = [
            'title'    => 'required|string',
            'slug'     => [
                'required',
                'string',
                // Rule::unique('notices', 'slug')->using(function($q) use ($user, $input, $notice) {
                //     return $q
                //         ->where('user_id', $user->school)
                //         ->where('id', '!=', $notice->id);
                // })
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
            $notice->fill($input);
            $notice->user_id = $user->school;

            if($request->hasFile('attachment')) {
                $file = $request->file('attachment');
                $notice->attachment = $file->store('notice', 'public');
            }

            $notice->save();

            if(!empty($request->sections))
            {
                $sections = is_array($request->sections) ? $request->sections : explode(",", $request->sections);
                $notice->sections()->sync($sections);
            }

            return response()->json($notice, 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Notice  $notice
     * @return \Illuminate\Http\Response
     */
    public function destroy(Notice $notice)
    {
        //
    }

    public function remove(Request $request)
    {
        Notice::whereIn('id', $request->check)->delete();

        return response()->json(['status' => true]);
    }
}
