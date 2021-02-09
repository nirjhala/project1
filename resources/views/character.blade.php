<title>{{ $cert->name }} | Character Certificate</title>
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
        height: 200mm;
        page-break-after: always;
        background-color: #f2fee8;
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
        font-size: 12px;
        width: 100%;
        border-collapse: collapse;
    }
    .table, .table th, .table td {
        text-align: left;
        vertical-align: top;
        border: 1px solid #000;
    }
    .table th, .table td {
        padding: 8px 5px;
    }
    .col-3 {
        float: left;
        width: 33.33%;
    }
    .col-6 {
        float: left;
        width: 50%;
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
    .bottom_tag {
        display: inline;
        color: red;
        line-height: 120%;
        border-top: 1px solid;
        border-bottom: 1px solid;
    }
    .certificate-area {
        margin: 50px 0;
    }
    .certificate-area p {
        line-height: 60px;
        font-size: 24px;
    }
    .certificate-area p:first-child {
        text-indent: 150px;
    }
    .blank_fields {
        font-weight: bold;
        border-bottom: 2px dotted #000;
        padding: 0 70px 10px 5px;
        color: blue;
    }
    .mr-2 {
        margin-right: 20px;
    }
    @page {size: A4 landscape;margin: 0;}
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
    <div class="text-center">
        {{ ucwords( $school->user->full_address ) }} . Ph.: {{ $school->phone }}, {{ $school->user->mobile }}
    </div>
    <div>
        <div class="float_left">
            School No.: <span class="bigNumber">{{ $school->school_no }}</span>
        </div>
        <div class="float_right">
            Affiliation No.: <span class="bigNumber">{{ $school->affiliation_no }}</sapn>
        </div>
        <div class="clear"></div>
    </div>
    <div>
        <div class="paper-title">
            Character Certificate
        </div>
    </div>
    <div>
        <div class="float_left"><strong>Sr No.:</strong> <span class="bigNumber">{{ sprintf('%04d', $cert->sr_no) }}</span></div>
        <div class="float_right"><strong>Admission No.:</strong> <span class="bigNumber">{{ sprintf('%05d', $cert->admission_no) }}</span></div>
        <div class="clear"></div>
    </div>
    <div class="certificate-area" style="line-height: 2em;">
        <p>This is to certify that <span class="blank_fields">{{ $cert->name }}</span> {{ $cert->gender == 'Male' ? 's/o' : 'd/o' }} <span class="blank_fields">{{ $cert->father_name }}</span> and <span class="blank_fields">{{ $cert->mother_name }}</span> is/was a student of {{ $school->name }} from <span class="blank_fields">{{ $cert->from }}</span> to <span class="blank_fields">{{ $cert->to }}</span>.</p>
        <p>{{ $cert->gender == 'Male' ? 'He' : 'She' }} was a good student and took a keen interest in {{ $cert->gender == 'Male' ? 'his' : 'her' }} studies and in all the extra-curricular activities at the school.</p>
        <p>{{ $cert->gender == 'Male' ? 'He' : 'She' }} bears a good moral character.</p>
    </div>
    <div class="text-center" style="font-weight: bold; margin-top: 70px; margin-right: 50px;">

        <div class="float_right" style="15%;">
            Principal<br>Seal &amp; Signatory
        </div>
    </div>
</div>