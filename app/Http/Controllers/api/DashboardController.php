<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Model\School;
use App\Model\User;
use App\Model\FeePayment;
use App\Model\Sale;
use App\Model\Reciept;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(School $school)
    {
        $count['student'] = User::whereHas('roleName', function ($q) {
            $q->where('name', 'Student');
        })->where('school', $school->uid)->count();

        $count['teacher'] = User::whereHas('roleName', function ($q) {
            $q->where('name', 'Teacher');
        })->where('school', $school->uid)->count();

        $count['parents'] = User::whereHas('roleName', function ($q) {
            $q->where('name', 'Parents');
        })->where('school', $school->uid)->count();

        $count['fees_collection'] = FeePayment::whereHas('student', function ($q) use ($school) {
            $q->where('school', $school->uid);
        })->sum('amount');

        $total_sales_paid   = Sale::where('user_id', $school->uid)->sum('paid_amount');
        $total_receipts_amt = Reciept::where('user_id', $school->uid)->sum('amount');

        $count['total_sales_paid'] = $total_sales_paid + $total_receipts_amt + $count['fees_collection'];

        $count['male_students'] = User::whereHas('roleName', function ($q) {
            $q->where('name', 'Student');
        })->where('gender', 'Male')->where('school', $school->uid)->count();

        $count['female_students'] = User::whereHas('roleName', function ($q) {
            $q->where('name', 'Student');
        })->where('gender', 'Female')->where('school', $school->uid)->count();

        $data = compact('count');

        return response()->json($data);
    }
}