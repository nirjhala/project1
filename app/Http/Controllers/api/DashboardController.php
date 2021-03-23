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

        $count['sales_graph'] = [];

        $counter = 4;
        $year = date('m') <= 3 ? date('Y') - 1 : date('Y');
        while ($counter < 16) :
            $month = $counter > 12 ? $counter - 12 : $counter;

            $fee_count  = FeePayment::query()
                ->whereHas('student', function ($q) use ($school) {
                    $q->where('school', $school->uid);
                })
                ->whereRaw("YEAR(created_at) >= ? AND MONTH(created_at) = ?", [$year, $month])
                ->sum('amount');

            $sale_count = Sale::whereRaw("YEAR(created_at) >= ? AND MONTH(created_at) = ?", [$year, $month])
                ->where('user_id', $school->uid)
                ->sum('paid_amount');

            $receipt_count = Reciept::whereRaw("YEAR(created_at) >= ? AND MONTH(created_at) = ?", [$year, $month])
                ->where('user_id', $school->uid)
                ->sum('amount');

            $count['total_graph'][] = $sale_count + $fee_count + $receipt_count;
            $count['fees_graph'][] = $fee_count;
            $counter++;
        endwhile;



        $data = compact('count');

        return response()->json($data);
    }
}