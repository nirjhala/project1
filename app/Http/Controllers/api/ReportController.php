<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Model\School;
use App\Model\Purchase;
use App\Model\Sale;
use App\Model\CreditNote;
use App\Model\DebitNote;
use App\Model\Reciept;
use App\Model\Payment;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function daybook(School $school)
    {
        $purchases = Purchase::where('user_id', $school->uid)
            ->whereRaw("DATE(created_at) = ?", date('Y-m-d'))
            ->get();
        
        $sales = Sale::where('user_id', $school->uid)
            ->whereRaw("DATE(created_at) = ?", date('Y-m-d'))
            ->get();
        
        $receipts = Reciept::with('sale')->where('user_id', $school->uid)
            ->whereRaw("DATE(created_at) = ?", date('Y-m-d'))
            ->get();
        
        $payments = Payment::with('purchase')->where('user_id', $school->uid)
            ->whereRaw("DATE(created_at) = ?", date('Y-m-d'))
            ->get();
        
        $credit_notes = CreditNote::with('sale')->where('user_id', $school->uid)
            ->whereRaw("DATE(created_at) = ?", date('Y-m-d'))
            ->get();
        
        $debit_notes = DebitNote::with('purchase')->where('user_id', $school->uid)
            ->whereRaw("DATE(created_at) = ?", date('Y-m-d'))
            ->get();

        $data = compact('sales', 'purchases', 'payments', 'receipts', 'credit_notes', 'debit_notes');
        $result = $this->fetchResults($data);

        return response()->json(['data' => $result]);
    }

    public function bankbook(School $school)
    {
        $purchases = Purchase::where('user_id', $school->uid)
            ->where("payment_mode", '!=', 'Cash')
            ->get();
        
        $sales = Sale::where('user_id', $school->uid)
            ->where("payment_mode", '!=', 'Cash')
            ->get();
        
        $receipts = Reciept::with('sale')->where('user_id', $school->uid)
            ->where("payment_mode", '!=', 'Cash')
            ->get();
        
        $payments = Payment::with('purchase')->where('user_id', $school->uid)
            ->where("payment_mode", '!=', 'Cash')
            ->get();
        
        $credit_notes = CreditNote::with('sale')->where('user_id', $school->uid)
            ->where("payment_mode", '!=', 'Cash')
            ->get();
        
        $debit_notes = DebitNote::with('purchase')->where('user_id', $school->uid)
            ->where("payment_mode", '!=', 'Cash')
            ->get();

        $data = compact('sales', 'purchases', 'payments', 'receipts', 'credit_notes', 'debit_notes');
        $result = $this->fetchResults($data);

        return response()->json(['data' => $result]);
    }

    public function cashbook(School $school)
    {
        $purchases = Purchase::where('user_id', $school->uid)
            ->where("payment_mode", 'Cash')
            ->get();
        
        $sales = Sale::where('user_id', $school->uid)
            ->where("payment_mode", 'Cash')
            ->get();
        
        $receipts = Reciept::with('sale')->where('user_id', $school->uid)
            ->where("payment_mode", 'Cash')
            ->get();
        
        $payments = Payment::with('purchase')->where('user_id', $school->uid)
            ->where("payment_mode", 'Cash')
            ->get();
        
        $credit_notes = CreditNote::with('sale')->where('user_id', $school->uid)
            ->where("payment_mode", 'Cash')
            ->get();
        
        $debit_notes = DebitNote::with('purchase')->where('user_id', $school->uid)
            ->where("payment_mode", 'Cash')
            ->get();

        $data = compact('sales', 'purchases', 'payments', 'receipts', 'credit_notes', 'debit_notes');
        $result = $this->fetchResults($data);

        return response()->json(['data' => $result]);
    }

    public function ledger(School $school, $user)
    {
        $userArr = explode("-", $user);
        $utype   = $userArr[0];
        $user_id = $userArr[1];

        $purchases = $payments = $debit_notes = $sales = $receipts = $credit_notes = null;

        if($utype == 'supplier')
        {
            $purchases = Purchase::where('user_id', $school->uid)
                ->where("supplier_id", $user_id)
                ->get();
            
            $payments = Payment::with(['purchase'])
                ->whereHas('purchase', function ($q) use ($user_id) {
                    $q->where('supplier_id', $user_id);
                })
                ->where('user_id', $school->uid)
                ->get();

            $debit_notes = DebitNote::with(['purchase'])
                ->whereHas('purchase', function ($q) use ($user_id) {
                    $q->where('supplier_id', $user_id);
                })
                ->where('user_id', $school->uid)
                ->get();
        }

        if($utype == 'customer')
        {
            $sales = Sale::where('user_id', $school->uid)
                ->where("customer_id", $user_id)
                ->get();
            
            $receipts = Reciept::with(['sale'])
                ->whereHas('sale', function ($q) use ($user_id) {
                    $q->where('customer_id', $user_id);
                })
                ->where('user_id', $school->uid)
                ->get();
            
            $credit_notes = CreditNote::with(['sale'])
                ->whereHas('sale', function ($q) use ($user_id) {
                    $q->where('customer_id', $user_id);
                })
                ->where('user_id', $school->uid)
                ->get();
        }
        
        

        $data = compact('sales', 'purchases', 'payments', 'receipts', 'credit_notes', 'debit_notes');
        $result = $this->fetchResults($data);

        return response()->json(['data' => $result]);
    }

    protected function fetchResults($data = [])
    {
        extract($data);

        $result = [];
        $balance = 0;
        // Purchase
        if($data['purchases'] && !$purchases->isEmpty())
        {
            foreach($purchases as $p)
            {
                $balance += $p->net_amount;
                $result[] = [
                    'credit'    => $p->net_amount,
                    'debit'     => 0,
                    'balance'   => $balance,
                    'remarks'   => 'Item purchased and added to stock. ['.$p->supplier_name.']',
                    'date'      => date('F d, Y', strtotime($p->created_at))
                ];
                if(!empty($p->paid_amount))
                {
                    $balance -= $p->paid_amount;
                    $result[] = [
                        'credit'    => 0,
                        'debit'     => $p->paid_amount,
                        'balance'   => $balance,
                        'remarks'   => 'Item purchased and paid to supplier. ['.$p->supplier_name.']',
                        'date'      => date('F d, Y', strtotime($p->created_at))
                    ];
                }
            }
        }

        // Sale
        if($data['sales'] && !$sales->isEmpty())
        {
            foreach($sales as $s)
            {
                $balance -= $s->net_amount;
                $result[] = [
                    'credit'    => 0,
                    'debit'     => $s->net_amount,
                    'balance'   => $balance,
                    'remarks'   => 'Item sold and out from stock. ['.$s->customer_name.']',
                    'date'      => date('F d, Y', strtotime($s->created_at))
                ];
                if(!empty($s->paid_amount))
                {
                    $balance += $s->paid_amount;
                    $result[] = [
                        'credit'    => $s->paid_amount,
                        'debit'     => 0,
                        'balance'   => $balance,
                        'remarks'   => 'Item sold and recieved from customer. ['.$s->customer_name.']',
                        'date'      => date('F d, Y', strtotime($s->created_at))
                    ];
                }
            }
        }

        // Receipt
        if($data['receipts'] && !$receipts->isEmpty())
        {
            foreach($receipts as $r)
            {
                $balance += $r->amount;
                $result[] = [
                    'credit'    => $r->amount,
                    'debit'     => 0,
                    'balance'   => $balance,
                    'remarks'   => 'Amount received by receipt. ['.@$r->sale->customer_name.']',
                    'date'      => date('F d, Y', strtotime($r->created_at))
                ];
            }
        }

        // Payment
        if($data['payments'] && !$payments->isEmpty())
        {
            foreach($payments as $p)
            {
                $balance -= $p->paid_amount;
                $result[] = [
                    'credit'    => 0,
                    'debit'     => $p->amount,
                    'balance'   => $balance,
                    'remarks'   => 'Amount paid by payment voucher. ['.$p->purchase->supplier_name.']',
                    'date'      => date('F d, Y', strtotime($p->created_at))
                ];
            }
        }

        // Credit Note
        if($data['credit_notes'] && !$credit_notes->isEmpty())
        {
            foreach($credit_notes as $cn)
            {
                $balance -= $cn->net_amount;
                $result[] = [
                    'credit'    => 0,
                    'debit'     => $cn->net_amount,
                    'balance'   => $balance,
                    'remarks'   => 'Amount paid to customer via credit note. ['.@$cn->sale->customer_name.']',
                    'date'      => date('F d, Y', strtotime($cn->created_at))
                ];

                $balance += $cn->net_amount;
                $result[] = [
                    'credit'    => $cn->net_amount,
                    'debit'     => 0,
                    'balance'   => $balance,
                    'remarks'   => 'Item returned via credit note. ['.@$cn->sale->customer_name.']',
                    'date'      => date('F d, Y', strtotime($cn->created_at))
                ];
            }
        }

        // Debit Note
        if($data['debit_notes'] && !$debit_notes->isEmpty())
        {
            foreach($debit_notes as $dn)
            {
                $balance += $dn->net_amount;
                $result[] = [
                    'credit'    => $dn->net_amount,
                    'debit'     => 0,
                    'balance'   => $balance,
                    'remarks'   => 'Amount received from supplier via debit note. ['.$dn->purchase->supplier_name.']',
                    'date'      => date('F d, Y', strtotime($dn->created_at))
                ];

                $balance -= $dn->net_amount;
                $result[] = [
                    'credit'    => 0,
                    'debit'     => $dn->net_amount,
                    'balance'   => $balance,
                    'remarks'   => 'Item returned to supplier via debit note. ['.$dn->purchase->supplier_name.']',
                    'date'      => date('F d, Y', strtotime($dn->created_at))
                ];
            }
        }

        return $result;
    }
}
