<?php

namespace App\Http\Controllers\api;

use App\Model\AdmitCard;
use App\Model\Marksheet;
use App\Model\User;
use App\Model\School;
use App\Model\Student;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdmitCardController extends Controller
{
    public function search(Request $request, School $school)
    {
        $request->validate([
            'exam_type_id' => 'required',
            'roll_no'      => 'required'
        ]);

        $student = Student::where('roll_no', $request->roll_no)
            ->whereHas('user', function ($q) use ($school) {
                $q->where('school', $school->uid);
            })
            ->select('uid', 'section')
            ->firstOrFail();
        
        $admit_card = AdmitCard::where('exam_type_id', $request->exam_type_id)->where('section_id', $student->section)->firstOrFail();
        
        return response()->json([
            'exam_type_id' => $request->exam_type_id,
            'user_id'      => $student->uid
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $request->validate([
            // 'exam_type_id'  => 'required|numeric',
            'section_id'    => 'required|numeric'
        ]);

        $query = User::with([
            'studentData', 
            'studentData.father_info', 
            'studentData.sectionName', 
            'studentData.sectionName.cls',
            'media'
        ])
        ->where('school', $school->uid)
        ->whereHas('studentData', function ($q) use ($request) {
            $q->where('section', $request->section_id);
            if(!empty($request->exam_type_id))
            {
                $q->whereHas('sectionName.admit_card', function ($query) use ($request) {
                    $query->where('exam_type_id', $request->exam_type_id);
                });
            }
        });

        if(!empty($request->s))
        {
            $s = trim($request->s);
            $query->where(function ($q) use ($s) {
                $q->where('name', 'LIKE', "%{$s}%")
                  ->orWhereHas('studentData', function ($q2) use ($s) {
                    $q2->where('roll_no', 'LIKE', "{$s}");
                  });
            });
        }

        $admit_cards = $query
        ->orderBy('fname')
        ->orderBy('lname')
        ->get();

        if(!empty($request->subject_id) && !$admit_cards->isEmpty())
        {
            foreach ($admit_cards as $key => $admit_card) {
                $marks = Marksheet::where('exam_type_id', $request->exam_type_id)
                    ->where('user_id', $admit_card->id)
                    ->where('subject_id', $request->subject_id)
                    ->select('marks')
                    ->first();

                $admit_cards[$key]->marks = $marks->marks ?: 0;
            }
        }

        return response()->json($admit_cards);
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
            'admit_card'                => 'required|array',
            'admit_card.section_id'     => 'required|numeric',
            'admit_card.exam_type_id'   => 'required|numeric',
            'admit_card_subjects'       => 'required|array'
        ]);
        
        // $admitCard = new AdmitCard($request->admit_card);
        
        $admitCard = AdmitCard::updateOrCreate($request->admit_card, $request->admit_card);

        $categoryArr = [];
        foreach($request->admit_card_subjects as $subj)
        {
            $categoryArr[$subj['subject_id']] = $subj;
        }

        $admitCard->subjects()->sync($categoryArr);

        return response()->json([
            'message'   => 'Success! new admit card added.'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\AdmitCard  $admitCard
     * @return \Illuminate\Http\Response
     */
    public function show($school, $admitCardId)
    {
        $admitCard = AdmitCard::with('subjects')->findOrFail($admitCardId);
        return response()->json($admitCard);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\AdmitCard  $admitCard
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AdmitCard $admitCard)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\AdmitCard  $admitCard
     * @return \Illuminate\Http\Response
     */
    public function destroy(AdmitCard $admitCard)
    {
        //
    }

    public function fetch_subjects($school, $examTypeId, $sectionId)
    {
        $admitCard = AdmitCard::with('subjects')->where('exam_type_id', $examTypeId)->where('section_id', $sectionId)->firstOrFail();
        $subjects = $admitCard->subjects()->pluck('name', 'subjects.id');

        return response()->json($subjects);
    }
}