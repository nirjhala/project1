<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use Route;
use App\Model\Session;
use App\Model\Fees;

class FeesController extends Controller
{
    public function getList(Request $request)
    {
        $rules = [
            'class_id'          => 'required|numeric',
            'fee_type_id'       => 'required|numeric',
            'installment_id'    => 'required|numeric',
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

            $seesionInfo = Session::where('session_name', $session)->first();
            $info = Fees::where('fee_type_id', $input['fee_type_id'])
                        ->where('class_id', $input['class_id'])
                        ->where('session', @$seesionInfo->id)
                        ->where('school', auth()->user()->school)
                        ->where('installment_id', $input['installment_id'])
                        ->first();

            $re = [
                'status'    => true,
                'new_fees'  => floatval(@$info->new_fees),
                'old_fees'  => floatval(@$info->old_fees),
            ];
        }

        return response()->json($re, 200);
    }
    public function add(Request $request, $schoolName)
    {
        $rules = [
            'class_id'  => 'required|numeric',
            'school'    => 'required|numeric',
        ];

        $input      = $request->all();
        $session    = date('n') > 3 ? date('Y').'-'.(date('y') + 1) : (date('Y') - 1).'-'.date('y');
        $session    = !empty($input['session']) ? $input['session'] : $session;

        $seesionInfo = Session::where('session_name', $session)->firstOrFail();

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
            if (!empty($input['new_fees'])) {
                foreach ($input['new_fees'] as $index => $newFees) {
                    $installmentId = $newFees['installment_id'];

                    foreach ($newFees['ftypes'] as $fIndex => $fType) {
                        $dataArr = [
                            'fee_type_id'   => $fType['ftype_id'],
                            'class_id'      => $input['class_id'],
                            'session'       => $seesionInfo->id,
                            'installment_id'=> $installmentId,
                            'new_fees'      => $fType['fees'],
                            'old_fees'      => $input['old_fees'][$index]['ftypes'][$fIndex]['fees'],
                            'school'        => auth()->user()->school
                        ];

                        Fees::where('fee_type_id', $dataArr['fee_type_id'])
                            ->where('class_id', $dataArr['class_id'])
                            ->where('session', $dataArr['session'])
                            ->where('installment_id', $dataArr['installment_id'])
                            ->where('school', $dataArr['school'])
                            ->updateOrCreate($dataArr);
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
}
