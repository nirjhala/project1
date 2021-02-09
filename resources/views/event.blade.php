<title>Character Certificate</title>
<style>
    body {
        margin: 0;
    }
    .paper-title {
        position: absolute;
        top: 197px;
        left: 50%;
        width: 300px;
        transform: translateX(-50px);
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
    }
    .logo {
        position: absolute;
        top: 574px;
        left: 50%;
        transform: translateX(10px);
        margin-left: 30px;
        padding: 5px;
        background: #fff;
    }
    .logo, .logo img {
        width: 100px;
        height: 100px;
        /* position: absolute; */
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
        padding: 25mm;
        height: 160mm;
        page-break-after: always;
        background: #fff url({{ url('img/certificate-bg.jpg') }});
        background-size: cover;
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
    @if(!empty($school->logo_url))
    <div class="logo">
        <img src="{{ $school->logo_url }}" alt="">
    </div>
    @endif
    <div style="margin-top: 30px; padding: 0 60px;">
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
            of {{ $cert->type }}
        </div>
    </div>
    <div style="margin-top: 30px; padding: 0 60px;">
        <div class="float_left"><strong>Sr No.:</strong> <span class="bigNumber">{{ sprintf('%04d', $cert->sr_no) }}</span></div>
        <div class="float_right"><strong>Admission No.:</strong> <span class="bigNumber">{{ sprintf('%05d', $cert->admission_no) }}</span></div>
        <div class="clear"></div>
    </div>
    <div class="certificate-area" style="margin-top: 80px;">
        <p>This is to certify that <span class="blank_fields">{{ $cert->name }}</span> {{ $cert->gender == 'Male' ? 's/o' : 'd/o' }} <span class="blank_fields">{{ $cert->father_name }}</span> and <span class="blank_fields">{{ $cert->mother_name }}</span> of <span class="blank_fields">{{ $cert->class }}</span> class has earned this certificate for outstanding achievement in.</p>
        <p class="blank_fields" style="text-align: center;">{{ $cert->c_name }}</p>
        <p>on the date<span class="blank_fields">{{ date('d M Y', strtotime($cert->organized_at)) }}</span> with<span class="blank_fields">{{ $cert->rank }}</span> rank.</p>
    </div>
    <div class="text-center" style="font-weight: bold; margin-top: 150px; margin-right: 150px; margin-left: 150px;">
        <div class="float_left" style="15%;">
            Director<br>Seal &amp; Signatory
        </div>
        <div class="float_right" style="15%;">
            Principal<br>Seal &amp; Signatory
        </div>
    </div>
</div>