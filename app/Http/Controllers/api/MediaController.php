<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use Route;
use Image;
use App\Model\Media;
use App\Model\User;

class MediaController extends Controller
{
    public function add(Request $request)
    {
        $schoolInfo = auth()->user();
        $school_id  = $schoolInfo->school;

        $rules = [
            'file'      => 'required|image|mimes:jpeg,png,jpg,gif,svg',
        ];

        $image = $request->file('file');
        $input['imagename'] = uniqid().'_'.$school_id.'.'.$image->extension();

        $destinationPath = public_path('uploads/thumb');
        if (!is_dir($destinationPath)) {
            mkdir($destinationPath, 0755, true);
        }
        $img = Image::make($image->path());
        $img->resize(96, 96, function ($constraint) {
            $constraint->aspectRatio();
        })->save($destinationPath.'/'.$input['imagename']);

        $destinationPath = public_path('uploads/medium');
        if (!is_dir($destinationPath)) {
            mkdir($destinationPath, 0755, true);
        }
        $img = Image::make($image->path());
        $img->resize(256, 256, function ($constraint) {
            $constraint->aspectRatio();
        })->save($destinationPath.'/'.$input['imagename']);

        $destinationPath = public_path('uploads/large');
        if (!is_dir($destinationPath)) {
            mkdir($destinationPath, 0755, true);
        }
        $img = Image::make($image->path());
        $img->resize(800, 800, function ($constraint) {
            $constraint->aspectRatio();
        })->save($destinationPath.'/'.$input['imagename']);

        $destinationPath = public_path('uploads/full');
        if (!is_dir($destinationPath)) {
            mkdir($destinationPath, 0755, true);
        }
        $img = Image::make($image->path());
        $img->resize(1920, 1080, function ($constraint) {
            $constraint->aspectRatio();
        })->save($destinationPath.'/'.$input['imagename']);

        $fileName   = $input['imagename'];
        $obj        = new Media;
        $obj->title = date('d-m-Y h:i A', time());
        $obj->image = $fileName;
        $obj->school= $school_id;
        $obj->save();

        $re = [
            'status'    => true,
            'id'        => $obj->id,
            'image'     => url('uploads/thumb/'.$obj->image)
        ];

        return response()->json($re, 200);
    }
    public function getData(Request $request, $weburl)
    {
        $user       = auth()->user();
        $school_id  = $user->school;

        $lists      = Media::where('school', $school_id)->get()->toArray();

        if (!empty($lists)) {
            foreach ($lists as $k => $l) {
                $lists[$k]['thumb_url'] = url('uploads/thumb/'.$l['image']);
            }
        }

        return response()->json($lists, 200);
    }
}
