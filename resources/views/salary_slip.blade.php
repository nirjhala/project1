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
    return ($Rupees ? $Rupees . 'Rupees ' : '') . $paise;
}
@endphp
<title>{{ $salary->name ?: '' }} | Salary Slip</title>
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
        vertical-align: top;
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
        size: A5;
        margin: 0;
    }
</style><div class="print-page">
    <div class="paper-head">
        @if(!empty($school->logo_url))
            <div class="logo">
                <img src="{{ $school->logo_url }}" alt="">
            </div>
        @endif
        <div class="schoolName">
            {{ $school->name }}
        </div>
        <div class="text-center">
            (Affiliated with {{ $school->board }})
        </div>
    </div>
    <div>
        <div class="paper-title" style="margin-bottom: 15px;">
            Salary Slip - {{ date("M Y", mktime(0,0,0, $salary->month, 1, $salary->year )) }}
        </div>
    </div>

    <table class="table">
        <tr>
            <td colspan="4" class="text-center" style="padding: 10px 0; text-align: center; font-weight: bold;">{{ $salary->name }}</td>
        </tr>
        <tr>
            <th colspan="2">EMPLOYEE DETAILS</th>
            <th colspan="2">PAYMENT & ATTENDENCE</th>
        </tr>
        <tr>
            <td>Emp. No.</td>
            <td>{{ $salary->employee_no ?: '-' }}</td>
            <td>Bank Name</td>
            <td>{{ $salary->bank_name ?: '-' }}</td>
        </tr>
        <tr>
            <td>Dsgn.</td>
            <td>{{ $salary->designation ?: '-' }}</td>
            <td>ACC. NO.</td>
            <td>{{ $salary->account_no ?: '-' }}</td>
        </tr>
        <tr>
            <td>Grade</td>
            <td>{{ $salary->grade ?: '-' }}</td>
            <td>IFSC Code</td>
            <td>{{ $salary->ifsc_code ?: '-' }}</td>
        </tr>
        <tr>
            <td>PAN NO.</td>
            <td>{{ $salary->pan_no ?: '-' }}</td>
            <td>DAYS PAID</td>
            <td>{{ $salary->days_paid ?: '-' }}</td>
        </tr>
        <tr>
            <th 
                colspan="2"
                style="width: 50%"
            >
                <div>
                    <div style="width: 60%; float: left;">Allowance</div>
                    <div style="width: 40%; float: left;">Amount</div>
                    <div style="clear: both;"></div>
                </div>
            </th>
            <th 
                colspan="2"
                style="width: 50%"
            >
                <div>
                    <div style="width: 60%; float: left;">Deduction</div>
                    <div style="width: 40%; float: left;">Amount</div>
                    <div style="clear: both;"></div>
                </div>
            </th>
        </tr>
        <tr>
            <td
                colspan="2"
                style="vertical-align: top;"
            >
                <div>
                    <div style="width: 60%; float: left;">Basic Salary</div>
                    <div style="width: 40%; float: left;">Rs. {{ number_format($salary->basic_salary,2) }}</div>
                    <div style="clear: both;"></div>
                </div>
                @php
                $total_allowance = $salary->basic_salary;
                @endphp
                @foreach($salary->salary_data as $data)
                    @if($data->type == "allowance")
                    @php $total_allowance += $data->amount; @endphp
                    <div>
                        <div style="width: 60%; float: left;">{{ $data->name }}</div>
                        <div style="width: 40%; float: left;">Rs. {{ number_format($data->amount,2) }}</div>
                        <div style="clear: both;"></div>
                    </div>
                    @endif
                @endforeach
            </td>
            @php
                $leave_amount = ($salary->basic_salary / $salary->total_days) * $salary->total_leave;
            @endphp
            <td
                colspan="2"
                style="vertical-align: top;"
            >
                <div>
                    <div style="width: 60%; float: left;">Total {{ $salary->total_leave }} Leaves</div>
                    <div style="width: 40%; float: left;">Rs. {{ number_format( $leave_amount ) }}</div>
                    <div style="clear: both;"></div>
                </div>
                @php
                $total_deduction = $leave_amount;
                @endphp
                @foreach($salary->salary_data as $data)
                    @if($data->type == "deduction")
                    @php $total_deduction += $data->amount; @endphp
                    <div>
                        <div style="width: 60%; float: left;">{{ $data->name }}</div>
                        <div style="width: 40%; float: left;">Rs. {{ number_format($data->amount,2) }}</div>
                        <div style="clear: both;"></div>
                    </div>
                    @endif
                @endforeach
            </td>
        </tr>
        @php
        $total = $total_allowance - $total_deduction;
        @endphp
        <tr>
            <td colspan="2">
                <div style="font-weight: bold;">
                    <div style="width: 60%; float: left;">Total</div>
                    <div style="width: 40%; float: left;">Rs. {{ number_format($total_allowance,2) }}</div>
                    <div style="clear: both;"></div>
                </div>
            </td>
            <td colspan="2">
                <div style="font-weight: bold;">
                    <div style="width: 60%; float: left;">Total</div>
                    <div style="width: 40%; float: left;">Rs. {{ number_format($total_deduction,2) }}</div>
                    <div style="clear: both;"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td colspan="3">TOTAL SALARY</td>
            <td>Rs. {{ number_format($total, 2) }}</td>
        </tr>
        <tr>
            <td colspan="3">PREVIOUS DUE</td>
            <td>Rs. {{ number_format($salary->previous_due, 2) }}</td>
        </tr>
        @php
        $total      += round($salary->previous_due);
        $round_off   = round(ceil($total) - round($total, 2), 2);
        @endphp
        <tr>
            <td colspan="3">CARRY OVER ROUND-OFF</td>
            <td>Rs. {{ number_format($round_off, 2) }}</td>
        </tr>
        <tr>
            <th colspan="3">
                NET PAY
                <span style="font-size: 8px; text-transform: capitilize;">
                    (<strong>In words:</strong> Rupees {{ getIndianCurrency(ceil($total)) }} Only)
                </span>
            </th>
            <th>
                Rs. {{ number_format(ceil($total), 2) }}
            </th>
        </tr>
        <tr>
            <td colspan="2" style="height: 100px; text-align: center; vertical-align: bottom; padding-bottom: 5px;">
                Employer's Signature
            </td>
            <td colspan="2" style="height: 100px; text-align: center; vertical-align: bottom; padding-bottom: 5px;">
                Employee's Signature
            </td>
        </tr>
    </table>
</div>