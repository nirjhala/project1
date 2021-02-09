<?php

namespace App\Http\Controllers\api;

use App\Model\MenuLink;
use App\Model\MenuLocation;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class MenuLinkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $menuLocations = MenuLocation::with(['menu', 'menu.page'])->get();
        return response()->json($menuLocations);
    }

    public function front()
    {
        $menues = MenuLocation::get();

        $menuData = [];
        foreach($menues as $m) {
            $parentMenu = MenuLink::with([
                'page' => function($q) {
                    $q->select('id', 'slug');
                },
                'submenu' => function ($q) {
                    $q->select('link', 'label', 'id', 'p_id', 'parent');
                }, 
                'submenu.page' => function ($q) {
                    $q->select('id', 'slug');
                }
            ])
            ->whereNull('parent')
            ->where('ml_id', $m->id)
            ->select('link', 'label', 'id', 'p_id', 'parent')
            ->get();
            $menuData[$m->name] = $parentMenu;
        }

        return response()->json($menuData);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->form;
        $user = auth()->user();
        $input = $request->get('form');
        $rules = [
            'label'    => 'required|string'
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
            if(!empty($request->menu_locations)) :
                foreach($request->menu_locations as $ml_id) {
                    $check = MenuLink::where(function ($q) use($input, $ml_id) {
                        $q->whereNull('p_id')
                        ->where('link', $input['link'])
                        ->where('label', $input['label'])
                        ->where('ml_id', $ml_id)
                        ->where('school_id', auth()->user()->school);
                    })->orWhere(function ($q) use ($input, $ml_id) {
                        $q->whereNotNull('p_id')
                        ->where('p_id', $input['p_id'])
                        ->where('ml_id', $ml_id)
                        ->where('school_id', auth()->user()->school);
                    })
                    ->count();

                    if(!$check) {
                        $arr = [
                            'link'  => $input['link'],
                            'label'  => $input['label'],
                            'ml_id'  => $ml_id,
                            'p_id'  => $input['p_id'],
                            'school_id' => auth()->user()->school
                        ];
                        MenuLink::create($arr);
                    }
                }
            endif;

            return response()->json(['status' => true]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\MenuLink  $menuLink
     * @return \Illuminate\Http\Response
     */
    public function show(MenuLink $menuLink)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\MenuLink  $menuLink
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MenuLink $menuLink)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\MenuLink  $menuLink
     * @return \Illuminate\Http\Response
     */
    public function destroy($school, $menu_id)
    {
        // dd($menuLink);
        $menuLink = MenuLink::findOrFail($menu_id);
        $menuLink->delete();

        return response()->json(['message' => 'Menu deleted successfully.']);
    }
}
