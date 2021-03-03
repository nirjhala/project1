<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use App\Model\CustomField;
use App\Model\School;
use App\Model\Subject;
use App\Model\Religion;
use App\Model\Degree;

class CustomFieldController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $query = CustomField::query();

        if (!empty($request->role)) {
            $query->where('roles', 'all')->orWhereRaw("FIND_IN_SET(?, roles)", [$request->role]);
        }

        if(!empty($request->type) && $request->type == 'search')
        {
            $query->where(function($q) {
                $q->where('name', 'LIKE', 'Primary Subject')
                ->orWhere('name', 'LIKE', 'Religion')
                ->orWhere('name', 'LIKE', 'Degree / Diploma')
                ->orWhere('short_name', 'LIKE', 'Driven Before')
                ->orWhere('short_name', 'LIKE', 'Have Own Vehicle');
            });
        }

        $customFields = $query->get();

        if(!$customFields->isEmpty())
        {
            foreach($customFields as $key => $cf)
            {
                if($cf->type == 'relation')
                {
                    if($cf->relative_table == 'subjects')
                    {
                        $customFields[$key]->options = Subject::where('school', $school->uid)->pluck('name', 'id');
                    } 
                    else if($cf->relative_table == 'religions')
                    {
                        $customFields[$key]->options = Religion::pluck('name', 'id');
                    }
                    else if($cf->relative_table == 'degrees')
                    {
                        $customFields[$key]->options = Degree::pluck('name', 'id');
                    }
                }
            }
        }

        return response()->json($customFields);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\CustomField  $customField
     * @return \Illuminate\Http\Response
     */
    public function show(CustomField $customField)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\CustomField  $customField
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CustomField $customField)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\CustomField  $customField
     * @return \Illuminate\Http\Response
     */
    public function destroy(CustomField $customField)
    {
        //
    }
}
