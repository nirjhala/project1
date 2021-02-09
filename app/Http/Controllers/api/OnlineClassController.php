<?php

namespace App\Http\Controllers\api;

use App\Model\OnlineClass;
use App\Model\School;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OnlineClassController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $limit = $request->limit ?: 10;
        $query = OnlineClass::query()->whereHas('user', function ($q) use ($school) {
            $q->where('school', $school->uid);
        });

        // if (!empty($request->s))
        // {
        //     $
        // }

        $online_classes = $query->latest()->paginate($limit);
        
        return response()->json($online_classes);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'online_class'                  => 'required|array',
            'online_class.class_id'         => 'required|numeric',
            'online_class.subject_id'       => 'required|numeric',
            'online_class.user_id'          => 'required|numeric',
            'online_class.room_unique_id'   => 'required|string',
            'online_class.sch_time_from'    => 'required',
            'online_class.sch_time_upto'    => 'required'
        ]);

        $onlineClass = new OnlineClass($request->online_class);
        $onlineClass->save();

        return response()->json([
            'message'   => 'Online class room created successfully.',
            'data'      => $onlineClass
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\OnlineClass  $onlineClass
     * @return \Illuminate\Http\Response
     */
    public function show(OnlineClass $onlineClass)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\OnlineClass  $onlineClass
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OnlineClass $onlineClass)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\OnlineClass  $onlineClass
     * @return \Illuminate\Http\Response
     */
    public function destroy(OnlineClass $onlineClass)
    {
        //
    }

    public function remove(Request $request)
    {
        OnlineClass::whereIn('id', $request->check)->delete();
        return response()->json([
            'message' => 'Selected record(s) have been deleted.'
        ]);
    }
}
