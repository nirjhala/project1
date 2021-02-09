<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;

use App\Model\AssignmentStudent;
use App\Model\Assignment;
use App\Model\School;
use App\Model\User;
use Illuminate\Http\Request;

class AssignmentStudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(School $school, $assignment_id)
    {
        $assignment = Assignment::with('allocated')->findOrFail($assignment_id);
        $assignment_id = [];
        if(!empty($assignment->allocated)) {
            foreach($assignment->allocated as $user) {
                $assignment_id[] = $user->user_id;
            }
        }
        $assignedStudents = User::whereIn('id', $assignment_id)->pluck('name', 'id');
        $unassignedStudents = User::whereNotIn('id', $assignment_id)->whereHas('studentData', function ($q) use ($assignment) {
            $q->where('section', $assignment->section_id);
        })->pluck('name', 'id');

        return response()->json([
            'allocated' => $assignedStudents,
            'unallocated' => $unassignedStudents
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, School $school, $assignment_id)
    {
        if($request->action == 'add')
        {
            foreach($request->user_ids as $uid) {
                AssignmentStudent::create([
                    'assignment_id' => $assignment_id,
                    'user_id'       => $uid
                ]);
            }
        }
        elseif($request->action == 'delete')
        {
            AssignmentStudent::whereIn('user_id', $request->user_ids)->where('assignment_id', $assignment_id)->delete();
        }

        return response()->json("success");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\AssignmentStudent  $assignmentStudent
     * @return \Illuminate\Http\Response
     */
    public function show(AssignmentStudent $assignmentStudent)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\AssignmentStudent  $assignmentStudent
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AssignmentStudent $assignmentStudent)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\AssignmentStudent  $assignmentStudent
     * @return \Illuminate\Http\Response
     */
    public function destroy(AssignmentStudent $assignmentStudent)
    {
        //
    }
}
