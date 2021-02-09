<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Model\Certificate;
use App\Model\SchooolCertificate;
use App\Model\TransferCertificate;
use App\Model\User;
use App\Model\Student;
use App\Model\Subject;
use App\Model\Marksheet;
use App\Model\ExamType;
use App\Model\AdmitCard;
use App\Model\SalarySlip;
use App\Model\School;

use PDF; // Generate PDF

class CertificateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Certificate::query();

        if (!empty($request->role)) {
            $query->where('roles', 'all')->orWhereRaw("FIND_IN_SET(?,roles)", [$request->role]);
        }

        $certificates = $query->get();

        return response()->json($certificates);
    }

    public function marksheet(Request $request, School $school, $uid) {
        $student    = Student::with(['user', 'user.media', 'marks', 'sectionName'])
            ->where('uid', $uid)
            ->firstOrFail();

        $exam_types = ExamType::where('user_id', $school->uid)->get();

        $subjects = Subject::whereHas('classes', function ($q) use ($student) {
            $q->where('class', $student->sectionName->class);
        })->select('id', 'name')->get();

        $result = [];
        foreach ($exam_types as $key => $exam) {
            foreach ($subjects as $key2 => $subj) {
                $marks = Marksheet::where('exam_type_id', $exam->id)->where('subject_id', $subj->id)->where('user_id', $student->uid)->select('min_marks', 'max_marks', 'marks')->first();
                $result[$exam->name][$subj->name] = !empty($marks) ? $marks->toArray() : [];
            }
        }

        $data = compact('school', 'student', 'result', 'subjects');
        $pdf = PDF::loadView('marksheet', $data)->setPaper('A4', 'landscape');
        return $pdf->stream("Marksheet.pdf");
        // return view('marksheet', $data);
    }

    public function tc(Request $request, School $school, TransferCertificate $transferCertificate) {
        $data = compact('school', 'transferCertificate');
        $pdf = PDF::loadView('tc', $data)->setPaper('A4');
        return $pdf->stream("transfer_certificate.pdf");
    }

    public function character(Request $request, School $school, $sr_no) {
        $cert = SchooolCertificate::where('sr_no', $sr_no)->where('type', 'character')->firstOrFail();
        $data   = compact('school', 'cert');
        $pdf    = PDF::loadView('character', $data)->setPaper('A4');
        return $pdf->stream("character_certificate.pdf");
    }

    public function event(Request $request, School $school, $sr_no) {
        $cert   = SchooolCertificate::where('sr_no', $sr_no)->where('type', 'event')->firstOrFail();
        $data   = compact('school', 'cert');
        $pdf    = PDF::loadView('event', $data)->setPaper('A4');
        return $pdf->stream("event_certificate.pdf");
    }

    public function sport(Request $request, School $school, $sr_no) {
        $cert = SchooolCertificate::where('sr_no', $sr_no)->where('type', 'sport')->firstOrFail();
        $data   = compact('school', 'cert');
        $pdf    = PDF::loadView('event', $data)->setPaper('A4');
        return $pdf->stream("sport_certificate.pdf");
    }

    public function admit_card(Request $request, School $school, $exam_type_id, $user_id)
    {
        $user_info  = User::with([
                'studentData', 
                'studentData.father_info', 
                'studentData.mother_info', 
                'studentData.sectionName', 
                'studentData.sectionName.cls',
                'media'
            ])->findOrFail($user_id);

        // dd($user_info);

        $admit_card = AdmitCard::with(['subjects'])->where('exam_type_id', $exam_type_id)
            ->where('section_id', $user_info->studentData->section)
            ->firstOrFail();

        $data  = compact('user_info', 'admit_card', 'school');
        $pdf   = PDF::loadView('admit_card', $data)->setPaper('A4');
        return $pdf->stream("admit_card.pdf");
    }
    public function salary_slip(Request $request, School $school, $id)
    {
        $salary = SalarySlip::with('salary_data')->findOrFail($id);
        $data   = compact('school', 'salary');
        $pdf    = PDF::loadView('salary_slip', $data)->setPaper('A4');
        return $pdf->stream("salary_slip.pdf");
    }
}
