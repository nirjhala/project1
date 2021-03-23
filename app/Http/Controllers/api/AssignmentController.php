<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;

use App\Model\School;
use App\Model\User;
use App\Model\Assignment;
use Illuminate\Http\Request;

class AssignmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $query = Assignment::where('school_id', $school->uid);
        if (!empty($request->s)) {
            $s = trim($request->s);
            $query->where(function ($q) use ($s) {
                $q->where('name', 'LIKE', "%{$s}%")
                    ->orWhere('description', 'LIKE', "%{$s}%");
            });
        }
        $assignments = $query->paginate(10);

        return response()->json($assignments);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, School $school)
    {
        $rules = [
            'form'              => 'required|array',
            'form.name'         => 'required|string',
            'form.section_id'   => 'required|numeric',
        ];

        $input      = $request->all();

        $validator  = Validator::make($input, $rules);

        if ($validator->fails()) {
            $re = [
                'status'    => false,
                'message'   => 'Validation Error!',
                'errors'    => $validator->errors()->all(),
                'input'     => $input
            ];
        } else {
            $input['form']['user_id']   = auth()->user()->id;
            $input['form']['school_id'] = $school->uid;
            $assignment = Assignment::create($input['form']);

            if ($request->hasFile('attachement')) {
                $file = $request->file('attachement');

                $assignment->attachment = $file->store('assignments', 'public');
                $assignment->save();
            }

            $re = [
                'status'    => true,
                'message'   => 'Assignment Created.',
                'data'      => $assignment->append('attachment_full_url')
            ];
        }

        return response()->json($re);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Assignment  $assignment
     * @return \Illuminate\Http\Response
     */
    public function show($school, Assignment $assignment)
    {
        return response()->json($assignment->append('attachment_full_url'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Assignment  $assignment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, School $school, $assignment_id)
    {
        $request->validate([
            'form'              => 'required|array',
            'form.name'         => 'required|string',
            'form.section_id'   => 'required|numeric',
        ]);

        $input = $request->form;

        $assignment = Assignment::findOrFail($assignment_id);

        $input['user_id']   = auth()->user()->id;
        $input['school_id'] = $school->uid;
        unset($input['attachment_full_url']);
        $assignment->update($input);

        if ($request->hasFile('attachement')) {
            $file = $request->file('attachement');

            $assignment->attachment = $file->store('assignments', 'public');
            $assignment->save();
        }

        return response([
            'message'   => 'Assignment updated.',
            'data'      => $assignment
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Assignment  $assignment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Assignment $assignment)
    {
        //
    }
}