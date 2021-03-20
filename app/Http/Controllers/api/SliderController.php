<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Model\School;
use App\Model\Slider;
use Illuminate\Http\Request;

class SliderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $limit = $request->limit ?: 10;
        $query = Slider::query();
        $sliders = $query->paginate($limit);

        return response()->json($sliders);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, School $school)
    {
        $request->validate([
            'slider'        => 'required|array',
            'slider.title'  => 'required|string',
            'image'         => 'required|image'
        ]);
        $slider = new Slider($request->slider);
        $slider->user_id = $school->uid;
        $slider->save();

        if($request->hasFile('image'))
        {
            $image      = $request->file('image');
            $filename   = "{$slider->id}.png";
            
            $image->storeAs('slider', $filename, "public");

            $slider->image = "{$filename}?v=".time();
            $slider->save();
        }

        return response()->json([
            'message'   => 'New record added successfully.',
            'data'      => $slider
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Slider  $slider
     * @return \Illuminate\Http\Response
     */
    public function show($store_id, Slider $slider)
    {
        return response()->json($slider);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Slider  $slider
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, School $school, $slider_id)
    {
        $request->validate([
            'slider'        => 'required|array',
            'slider.title'  => 'required|string'
        ]);
        
        $slider = Slider::findOrFail($slider_id);
        $slider->fill($request->slider);
        $slider->save();

        if($request->hasFile('image'))
        {
            $image      = $request->file('image');
            $filename   = "{$slider->id}.png";
            
            $image->storeAs('slider', $filename, 'public');

            $slider->image = "{$filename}?v=".time();
            $slider->save();
        }

        return response()->json([
            'message'   => 'Record has been updated.',
            'data'      => $slider
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Slider  $slider
     * @return \Illuminate\Http\Response
     */
    public function destroy($school, Slider $slider)
    {
        $slider->delete();

        return response()->json([
            'message'   => 'Record has been deleted.'
        ]);
    }

    public function remove(Request $request)
    {
        Slider::whereIn('id', $request->check)->delete();

        return response()->json(['status' => true]);
    }
}
