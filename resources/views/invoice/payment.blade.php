@php
function getIndianCurrency(float $number)
{
    $decimal = round($number - ($no = floor($number)), 2) * 100;
    $hundred = null;
    $digits_length = strlen($no);
    $i = 0;
    $str = array();
    $words = array(0 => '', 1 => 'one', 2 => 'two',
        3 => 'three', 4 => 'four', 5 => 'five', 6 => 'six',
        7 => 'seven', 8 => 'eight', 9 => 'nine',
        10 => 'ten', 11 => 'eleven', 12 => 'twelve',
        13 => 'thirteen', 14 => 'fourteen', 15 => 'fifteen',
        16 => 'sixteen', 17 => 'seventeen', 18 => 'eighteen',
        19 => 'nineteen', 20 => 'twenty', 30 => 'thirty',
        40 => 'forty', 50 => 'fifty', 60 => 'sixty',
        70 => 'seventy', 80 => 'eighty', 90 => 'ninety');
    $digits = array('', 'hundred','thousand','lakh', 'crore');
    while( $i < $digits_length ) {
        $divider = ($i == 2) ? 10 : 100;
        $number = floor($no % $divider);
        $no = floor($no / $divider);
        $i += $divider == 10 ? 1 : 2;
        if ($number) {
            $plural = (($counter = count($str)) && $number > 9) ? 's' : null;
            $hundred = ($counter == 1 && $str[0]) ? ' and ' : null;
            $str [] = ($number < 21) ? $words[$number].' '. $digits[$counter]. $plural.' '.$hundred:$words[floor($number / 10) * 10].' '.$words[$number % 10]. ' '.$digits[$counter].$plural.' '.$hundred;
        } else $str[] = null;
    }
    $Rupees = implode('', array_reverse($str));
    $paise = ($decimal > 0) ? "." . ($words[$decimal / 10] . " " . $words[$decimal % 10]) . ' Paise' : '';
    return ucwords(($Rupees ? $Rupees . 'Rupees ' : '') . $paise);
}
@endphp
<title>{{ sprintf('#%05d', $payment->payment_no) }} | Payment Voucher</title>
<style>
    body {
        margin: 0;
    }
    .paper-head {
        border: 2px solid #000;
        border-radius: 8px;
        position: relative;
        padding: 5px;
    }
    .paper-title {
        width: 300px;
        font-size: 20px;
        border: solid #000;
        border-width: 3px 6px 6px 3px;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        margin: 5px auto;
        box-shadow: 5px 5px #000;
    }
    .logo {
        border: 2px solid #000;
        margin-left: 30px;
        padding: 5px;
        background: #f2fee8;
    }
    .logo, .logo img {
        width: 50px;
        height: 50px;
        position: absolute;
        z-index: 1;
    }
    .logo img {
        object-fit: contain;
    }
    .schoolName {
        background: #000;
        margin: 17.5px -5px 0 -5px;
        text-align: center;
        color: #fff;
        font-size: 24px;
        padding: 2px 0;
        line-height: 100%;
    }
    .bigNumber {
        font-size: 1.5em;
        font-weight: bold;
    }
    .pm-10 {
        padding: 10mm;
    }
    .print-page {
        padding: 5mm;
        page-break-after: always;
    }
    h1 {
        font-size: 36px;
        text-transform: capitilize;
    }
    h2 {
        margin: 0 0 15px 0;
        line-height: 100%;
        font-size: 24px;
        font-weight: bold;
    }
    .float_left {
        float: left;
    }
    .float_right {
        float: right;
    }
    .clear {
        clear: both;
    }
    .table {
        margin-top: 5px;
        font-size: 11px;
        width: 100%;
        border-collapse: collapse;
    }
    .table, .table th, .table td {
        text-align: left;
        vertical-align: middle;
    }
    .table {
        border: 5px solid;
    }
    .print-page.primary .table {
        border-color: blue;
    }
    .print-page.primary h1 {
        color: blue;
    }
    .print-page.secondary .table {
        border-color: red;
    }
    .print-page.secondary h1 {
        color: red;
    }
    .table th, .table td {
        padding: 1px 5px;
        white-space: nowrap;
    }
    .table td {
        font-weight: normal;
    }
    .col-3 {
        float: left;
        width: 33.33%;
    }
    .col-6 {
        float: left;
        width: 50%;
    }
    .pdf-section {
        background-color: #e1f1e6;
        padding: 5mm;
        border: 3px solid #800000;
        font-size: 1.2em;
        height: 170mm;
    }
    .pdf-section.left {
        margin-right: 10px;
    }
    .pdf-section.right {
        margin-left: 10px;
    }
    .text-center {
        text-align: center;
    }
    .bottom_tag {
        display: inline;
        color: red;
        line-height: 120%;
        border-top: 1px solid;
        border-bottom: 1px solid;
    }
    .mr-2 {
        margin-right: 20px;
    }
    .payment_body {
        padding: 20px 10px;
        font-size: 20px;
        line-height: 40px;
    }
    span.underline_span {
        color: blue;
        border-bottom: 1px solid;
        display: inline-block;
        padding-left: 10px;
    }
    @page {
        size: A5 landscape;
        margin: 0;
    }
</style><div class="print-page primary">
    <table class="table">
        <tr>
            <td
                style="padding-left: 15px;"
            ><strong>PV #</strong> <big style="font-size: 2em;">{{ sprintf('%05d', $payment->payment_no) }}</big></td>
            <td colspan="8" class="text-center" style="padding: 10px 0; text-align: center;">
                <div>
                    <h1 
                        style="margin: 0; line-height: 100%; margin-bottom: 10px;"
                    >{{ $payment->purchase->school->name }}</h1>
                    <div>{{ $payment->purchase->school->user->full_address }}</div>
                    <div>Mob. {{ $payment->purchase->school->user->mobile ?: '-' }} Phn. {{ $payment->purchase->school->phone ?: '-' }}</div>
                    <div>Email: {{ $payment->purchase->school->user->email }}</div>
                </div>
            </td>
            <td
                style="text-align: right; padding-right: 15px;"
            ><strong>Date:</strong> {{ date('d.m.Y h:i A', strtotime($payment->created_at)) }}</td>
        </tr>
        <tr>
            <td
                style="padding-left: 15px; padding-top: 30px"
            ><strong>#Ref Invoice No.</strong> {{ $payment->purchase->invoice_no }}</td>
            <td colspan="8" style="text-align: center; padding-top: 30px">
                <h2>PAYMENT VOUCHER</h2>
            </td>
            <td
                style="padding-right: 15px; text-align: right; padding-top: 30px"
            ><strong>Payment Mode</strong> {{ $payment->payment_mode }}</td>
        </tr>
        <tr>
            <td colspan="10">
                <div class="payment_body">
                    Amount Paid To 
                    <span 
                        class="underline_span"
                        style="width: 360px;"
                    >{{ $payment->purchase->supplier_name }}</span> of Rs. 
                    <span 
                        class="underline_span"
                        style="width: 140px;"
                    >{{ number_format($payment->amount, 2) }}</span><br> 
                    In Words: 
                    <span 
                        class="underline_span"
                        style="width: 620px;"
                    >{{ getIndianCurrency($payment->amount) }}</span><br>
                    Remarks: 
                    <span
                        class="underline_span"
                        style="width: 625px;"
                    >{!! $payment->remarks ?: 'N/A' !!}</span>
                </div>
            </td>
        </tr>
        <tr>
            <td colspan="10" style="vertical-align: bottom; height: 130px; text-align: right; padding-right: 15px; padding-bottom: 15px;">Seal / Signatory</td>
        </tr>
    </table>
</div>
<div class="print-page secondary">
    <table class="table">
        <tr>
            <td
                style="padding-left: 15px;"
            ><strong>PV #</strong> <big style="font-size: 2em;">{{ sprintf('%05d', $payment->payment_no) }}</big></td>
            <td colspan="8" class="text-center" style="padding: 10px 0; text-align: center;">
                <div>
                    <h1 
                        style="margin: 0; line-height: 100%; margin-bottom: 10px;"
                    >{{ $payment->purchase->school->name }}</h1>
                    <div>{{ $payment->purchase->school->user->full_address }}</div>
                    <div>Mob. {{ $payment->purchase->school->user->mobile ?: '-' }} Phn. {{ $payment->purchase->school->phone ?: '-' }}</div>
                    <div>Email: {{ $payment->purchase->school->user->email }}</div>
                </div>
            </td>
            <td
                style="text-align: right; padding-right: 15px;"
            ><strong>Date:</strong> {{ date('d.m.Y h:i A', strtotime($payment->created_at)) }}</td>
        </tr>
        <tr>
            <td
                style="padding-left: 15px; padding-top: 30px"
            ><strong>#Ref Invoice No.</strong> {{ $payment->purchase->invoice_no }}</td>
            <td colspan="8" style="text-align: center; padding-top: 30px">
                <h2>PAYMENT VOUCHER</h2>
            </td>
            <td
                style="padding-right: 15px; text-align: right; padding-top: 30px"
            ><strong>Payment Mode</strong> {{ $payment->payment_mode }}</td>
        </tr>
        <tr>
            <td colspan="10">
                <div class="payment_body">
                    Amount Paid To 
                    <span 
                        class="underline_span"
                        style="width: 360px;"
                    >{{ $payment->purchase->supplier_name }}</span> of Rs. 
                    <span 
                        class="underline_span"
                        style="width: 140px;"
                    >{{ number_format($payment->amount, 2) }}</span><br> 
                    In Words: 
                    <span 
                        class="underline_span"
                        style="width: 620px;"
                    >{{ getIndianCurrency($payment->amount) }}</span><br>
                    Remarks: 
                    <span
                        class="underline_span"
                        style="width: 625px;"
                    >{!! $payment->remarks ?: 'N/A' !!}</span>
                </div>
            </td>
        </tr>
        <tr>
            <td colspan="10" style="vertical-align: bottom; height: 130px; text-align: right; padding-right: 15px; padding-bottom: 15px;">Seal / Signatory</td>
        </tr>
    </table>
</div>