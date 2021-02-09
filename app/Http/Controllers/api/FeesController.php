<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use Route;
use App\Model\Session;
use App\Model\User;
use App\Model\Fees;
use App\Model\FeeStructure;
use App\Model\FeeInstallment;
use App\Model\Student;

class FeesController extends Controller
{
    public function index(Request $request)
    {
        $rules = [
            'class_id'          => 'required|numeric',
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
            $responseCode = 200;
        } else {
            $session    = date('n') > 3 ? date('Y').'-'.(date('y') + 1) : (date('Y') - 1).'-'.date('y');
            $session    = !empty($input['session']) ? $input['session'] : $session;

            $sessionInfo = Session::where('session_name', $session)->first();

            $lists = Fees::where('class_id', $input['class_id'])
                    ->where('session', $sessionInfo->id)
                    ->where('school', auth()->user()->school)
                    ->get();

            $response = [];
            foreach($lists as $list) {
                $response[$list->fee_type_id] = [
                    'fees_for_new' => $list->fees_for_new,
                    'fees_for_old' => $list->fees_for_old,
                ];
            }

            $re = $response;
        }

        return response()->json($re, 200);
    }
    public function store(Request $request, $subdomain)
    {
        $rules = [
            'record'    => 'required|array',
            'class_id'  => 'required|numeric',
        ];

        $input      = $request->all();
        $session    = date('n') > 3 ? date('Y').'-'.(date('y') + 1) : (date('Y') - 1).'-'.date('y');
        $session    = !empty($input['session']) ? $input['session'] : $session;

        $sesionInfo = Session::where('session_name', $session)->firstOrFail();

        $validator  = Validator::make($input, $rules);

        if ($validator->fails()) {
            $re = [
                'status'    => false,
                'message'   => 'Validation Error!',
                'errors'    => $validator->errors()->all(),
                'input'     => $input
            ];
            $responseCode = 200;
        } else {
            if (!empty($input['record'])) {
                foreach($input['record'] as $ftype_id => $dataArr) {
                    if(!empty($dataArr)) {
                        $conditionArr = [
                            'class_id'      => $input['class_id'],
                            'session'       => $sesionInfo->id,
                            'fee_type_id'   => $ftype_id,
                            'school'        => auth()->user()->school,
                        ];
                        $dataArr = array_merge((array) $dataArr, $conditionArr);
    
                        Fees::updateOrCreate($conditionArr, $dataArr);
                    }
                }
            }

            $re = [
                'status'    => true,
                'message'   => 'Success! Record has been added.',
            ];
            $responseCode = 200;
        }

        return response()->json($re, $responseCode);
    }
    public function byStudent($subdomain, $user_id) {
        $user = User::with(['studentData', 'studentData.father_info', 'media'])->findOrFail($user_id);
        if (!empty($user->media->image)) {
            $user->picture   = url('uploads/thumb/'.$user->media->image);
        } else {
            $user->picture   = url('img/default.jpg');
        }

        $fees_lists = Fees::with("ftype")->get()->toArray();

        $fee_str = FeeStructure::withCount('installments')->with('installments')->where("sid", $user_id)->first();

        if( !empty( $fee_str->id ) ) {
            $fee_str->fees_types = array_map('intval', explode(",", $fee_str->fees_types) );
        }

        $re = [
            'user_info'     => $user,
            'fees_lists'    => $fees_lists,
            'fees_str'      => $fee_str
        ];

        return response()->json($re);
    }
    public function structure( Request $request, $subdomain, $id = null) {
        $input = $request->all();

        $session    = date('n') > 3 ? date('Y').'-'.(date('y') + 1) : (date('Y') - 1).'-'.date('y');
        $startYear  = substr($session, 0, 4);
        $session_exists = Session::where('session_start_year', $startYear)->where('session_school', auth()->user()->school)->where('session_is_deleted', 'N');
        if($session_exists->count() == 0) {
            $sess = Session::create([
                'session_name'          => $session,
                'session_start_year'    => $startYear,
                'session_start_month'   => 4,
                'session_school'        => auth()->user()->school
            ]);
        } else {
            $sess = $session_exists->first();
        }
        $session_id = $sess->id;

        $feeArr = [
            'amount'                => $input['total_amount'],
            'sid'                   => $input['sid'],
            'admission_type'        => $input['admission_type'],
            'fees_types'            => implode(",", $input['fees_types']),
            'total_installments'    => $input['total_installments'],
            'discount'              => $input['discount'],
            'session'               => $session_id
        ];
        $fee_str = FeeStructure::updateOrCreate(['sid' => $input['sid'], 'session' => $session_id, 'id' => $id], $feeArr);

        $input['installment_amount'] = array_filter( $input['installment_amount'] );
        $input['payement_month'] = array_filter( $input['payement_month'] );

        FeeInstallment::where('fee_structure_id', $fee_str->id)->delete();
        if(!empty($input['installment_amount'])) :
            $counter = 0;
            foreach( $input['installment_amount'] as $i => $amount ) { $counter++;
                $arr = [
                    'name'  => 'Installment '.$counter,
                    'month' => $input['payement_month'][$i],
                    'amount' => $amount,
                    'fee_structure_id'  => $fee_str->id
                ];
                FeeInstallment::create($arr);
            }
        endif;

        return response()->json(['status' => true]);
    }
    public function students(Request $request, $subdomain, $section) {
        $lists = FeeInstallment::with('structure', 'structure.student', 'structure.student.father_info', 'structure.student.user')
                ->whereHas('structure.student', function($q) use($section) {
                    $q->where('section', $section);
                })
                ->orderBy('pay_status', 'ASC')
                ->orderBy('month', 'ASC')
                ->get();
        
        if(!$lists->isEmpty()) {
            foreach($lists as $key => $list) {
                $lists[$key]->month = date('F', mktime(0, 0, 0, $list->month, 10));
            }
        }

        return response()->json( $lists->toArray() );
    }
    public function student_by_id(Request $request, $weburl, $uid = null)
    {
        $lists = FeeInstallment::with('structure')
                    ->whereHas('structure', function($q) use($uid) {
                        $q->where('sid', $uid);
                    })
                    ->orderBy('pay_status', 'ASC')
                    ->orderBy('month', 'ASC')
                    ->get();
        // if(!$lists->isEmpty()) {
        //     foreach($lists as $key => $list) {
        //         $lists[$key]->month = date('F', mktime(0, 0, 0, $list->month, 10));
        //     }
        // }

        return response()->json( $lists->toArray() );
    }
    public function updatePayStatus(Request $request, $subdomain, $id, $status) {
        $fins = FeeInstallment::findOrFail($id);
        $fins->pay_status = $status;
        $fins->save();

        return response()->json( ['status' => true] );
    }
}
