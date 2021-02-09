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

$totalGST = 0;
foreach($purchase->items as $index => $item) {
    $gstAmt = round($item->pivot->price * $item->gst_rate * $item->pivot->qty / 100, 2);
    $totalGST += $gstAmt;
}

@endphp
<title>{{ $purchase->invoice_no ?: '' }} | Purchase Invoice</title>
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
        /* height: 190mm; */
        page-break-after: always;
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
        border: 1px solid #000;
    }
    .table th, .table td {
        padding: 1px 5px;
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
    h2 {
        margin: 0 0 15px 0;
        line-height: 100%;
        color: red;
        font-size: 24px;
        font-weight: bold;
    }
    th {
        background-color: #ccc;
        padding: 10px 5px!important;
        text-transform: uppercase;
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
    @page {
        size: A4;
        margin: 0;
    }
</style><div class="print-page">
    <div>
        <div style="text-align: center;">
            <strong>PURCHASE INVOICE</strong>
        </div>
    </div>

    <table class="table">
        <tr>
            <td colspan="6" rowspan="5" class="text-center" style="padding: 10px 0; text-align: center;">
                <div>
                    <h1 
                        style="margin: 0; line-height: 100%; margin-bottom: 10px;"
                    >{{ $purchase->supplier->organization_name }}</h1>
                    <div>{{ $purchase->supplier->full_address }}</div>
                    <div>Mob. {{ $purchase->supplier->mobile ?: '-' }} Phn. {{ $purchase->supplier->phone ?: '-' }}</div>
                    <div>Email: {{ $purchase->supplier->email }}</div>
                </div>
            </td>
            <th colspan="2" class="head-top">Invoice No.</th>
            <td colspan="2">{{ $purchase->invoice_no }}</td>
        </tr>
        <tr>
            <th colspan="2" class="head-top">Payment Mode</th>
            <td colspan="2">{{ $purchase->payment_mode }}</td>
        </tr>
        <tr>
            <th colspan="2" class="head-top">Date &amp; Time</th>
            <td colspan="2">{{ date('d/m/Y h:i A', strtotime($purchase->created_at)) }}</td>
        </tr>
        <tr>
            <th colspan="2" class="head-top">PAID AMOUNT</th>
            <td colspan="2">INR {{ $purchase->paid_amount }}</td>
        </tr>
        <tr>
            <th colspan="2" class="head-top">DUE AMOUNT</th>
            <td colspan="2">INR {{ floor($purchase->total_amount + $totalGST) - $purchase->paid_amount }}</td>
        </tr>
        <tr>
            <th colspan="5">BILL TO</th>
            <th colspan="5">SHIP TO</th>
        </tr>
        <tr>
            <td colspan="2">Name</td>
            <td colspan="3">{{ $purchase->school->user->name }}</td>
            <td colspan="2">Name</td>
            <td colspan="3">{{ $purchase->school->user->name }}</td>
        </tr>
        <tr>
            <td colspan="2">School Name</td>
            <td colspan="3">{{ $purchase->school->name }}</td>
            <td colspan="2">School Name</td>
            <td colspan="3">{{ $purchase->school->name }}</td>
        </tr>
        <tr>
            <td colspan="2">Mobile No.</td>
            <td colspan="3">{{ $purchase->school->user->mobile }}</td>
            <td colspan="2">Mobile No.</td>
            <td colspan="3">{{ $purchase->school->user->mobile }}</td>
        </tr>
        <tr>
            <td colspan="2">Address</td>
            <td colspan="3">{{ $purchase->school->user->full_address }}</td>
            <td colspan="2">Address</td>
            <td colspan="3">{{ $purchase->school->user->full_address }}</td>
        </tr>
        <tr>
            <td colspan="2">State</td>
            <td colspan="2">{{ $purchase->school->city->stateName->name }}</td>
            <td>{{ sprintf("%02d", $purchase->school->city->stateName->code) }}</td>
            <td colspan="2">State</td>
            <td colspan="2">{{ $purchase->school->city->stateName->name }}</td>
            <td>{{ sprintf("%02d", $purchase->school->city->stateName->code) }}</td>
        </tr>
        <tr>
            <th class="text-center" rowspan="2">Sr. No.</th>
            <th class="text-center" rowspan="2" colspan="2">Item Description</th>
            <th class="text-center" rowspan="2">Price</th>
            <th class="text-center" rowspan="2">Qty</th>
            @if($purchase->supplier->city->state == $purchase->school->city->state)
            <th class="text-center" colspan="2">CGST</th>
            <th class="text-center" colspan="2">SGST</th>
            @else
            <th class="text-center" colspan="4">IGST</th>
            @endif
            <th class="text-center" rowspan="2">Subtotal</th>
        </tr>
        @php
        $totalGST = 0;
        @endphp
        <tr>
            @if($purchase->supplier->city->state == $purchase->school->city->state)
            <th class="text-center">%</th>
            <th class="text-center">AMT.</th>
            <th class="text-center">%</th>
            <th class="text-center">AMT.</th>
            @else
            <th class="text-center" colspan="2">%</th>
            <th class="text-center" colspan="2">AMT.</th>
            @endif
        </tr>
        @foreach($purchase->items as $index => $item)
        @php
            $gstAmt = round($item->pivot->price * $item->gst_rate * $item->pivot->qty / 100, 2);
            $totalGST += $gstAmt;
        @endphp
        <tr>
            <td>{{ $index + 1 }}.</td>
            <td colspan="2">
                <strong>{{ $item->name }}</strong><br>{{ $item->description }}
            </td>
            <td>{{ $item->pivot->price }}</td>
            <td>{{ $item->pivot->qty }}</td>
            @if($purchase->supplier->city->state == $purchase->school->city->state)
            <td>{{ $item->gst_rate / 2 }}%</td>
            <td>{{ number_format($gstAmt / 2, 2) }}</td>
            <td>{{ $item->gst_rate / 2 }}%</td>
            <td>{{ number_format($gstAmt / 2, 2) }}</td>
            @else
            <td colspan="2">IGST</td>
            <td colspan="2">IGST</td>
            @endif
            <td>{{ round($item->pivot->price * $item->pivot->qty,2) }}</td>
        </tr>
        @endforeach
        @php
        $total = $purchase->total_amount + $totalGST;
        $totalRow = ($purchase->supplier->city->state == $purchase->school->city->state) ? 5 : 4;
        @endphp
        <tr>
            <td rowspan="{{ $totalRow }}" colspan="7" style="text-align: center; padding-bottom: 5px;">
                <div style="font-size: 8px; text-transform: capitilize; text-align: left; margin-bottom: 10px;">
                    (<strong>In words:</strong> {{ getIndianCurrency(floor($total)) }} Only)
                </div>
                <div style="margin-bottom: 100px; text-align: left;">For <strong>{{ $purchase->supplier->organization_name }}</strong></div>
                <div>Seal / Signatory</div>
            </td>
            <th colspan="2">TOTAL AMOUNT</th>
            <td>Rs. {{ number_format($purchase->total_amount, 2) }}</td>
        </tr>
        @if($purchase->supplier->city->state == $purchase->school->city->state)
        <tr>
            <th colspan="2">CGST</th>
            <td>Rs. {{ number_format($totalGST / 2 ,2) }}</td>
        </tr>
        <tr>
            <th colspan="2">SGST</th>
            <td>Rs. {{ number_format($totalGST / 2 ,2) }}</td>
        </tr>
        @else
        <tr>
            <th colspan="2">IGST</th>
            <td>Rs. {{ number_format($totalGST ,2) }}</td>
        </tr>
        @endif
        @php
        $round_off   = round(round($total, 2) - floor($total), 2);
        @endphp
        <tr>
            <th colspan="2">
                <span style="float: right">(-)</span>
                ROUND-OFF
            </th>
            <td>Rs. {{ number_format($round_off, 2) }}</td>
        </tr>
        <tr>
            <th colspan="2">
                NET PAY
            </th>
            <th>
                Rs. {{ number_format(floor($total), 2) }}
            </th>
        </tr>
        <!-- <tr>
            <td colspan="3" style="height: 100px; vertical-align: top; padding-bottom: 5px;">
                <strong>Terms</strong>
                <ul style="list-style: disc inside; margin: 0; padding: 0; padding-left: 5px;">
                    <li>Make all checks payable to {{ $purchase->supplier->organization_name }}</li>
                </ul>
            </td>
            <td colspan="3" style="text-align: center; vertical-align: bottom; padding-bottom: 5px;">
                <div style="margin-bottom: 80px;">For <strong>{{ $purchase->supplier->organization_name }}</strong></div>
                <div>Seal / Signatory</div>
            </td>
        </tr> -->
    </table>
</div>