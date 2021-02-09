<title>{{ $transferCertificate->name }} | Transfer Certificate</title>
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
        height: 287mm;
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
    .bottom_tag {
        display: inline;
        color: red;
        line-height: 120%;
        border-top: 1px solid;
        border-bottom: 1px solid;
    }
    .student_info {
        padding: 10px;
        background: #fdfed4;
        border-radius: 5px;
        border: 3px solid #303030;
    }
    .student_info table, .student_info table th, .student_info table td {
        border-color: #fdfed4;
    }
    .mr-2 {
        margin-right: 20px;
    }
    @page {size: A4;margin: 0;}
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
            Transfer Certificate
        </div>
    </div>
    <div>
        <div class="float_left"><strong>Sr No.:</strong> <span class="bigNumber">{{ sprintf('%04d', $transferCertificate->tc_number) }}</span></div>
        <div class="float_right"><strong>Admission No.:</strong> <span class="bigNumber">{{ sprintf('%05d', $transferCertificate->admission_no) }}</span></div>
        <div class="clear"></div>
    </div>

    <table class="table">
        <tr>
            <th>1. Name of Pupil:</th>
            <td colspan="3">{{ $transferCertificate->name }}</td>
        </tr>
        <tr>
            <th>2. Father's/Guardian's Name:</th>
            <td>{{ $transferCertificate->father_name }}</td>
            <th>3. Mother's Name</th>
            <td>{{ $transferCertificate->mother_name }}</td>
        </tr>
        <tr>
            <th>4. Date of Birth</th>
            <td>{{ $transferCertificate->dob }}</td>
            <th>(in words)</th>
            <td>{{ $transferCertificate->dob_words }}</td>
        </tr>
        <tr>
            <th>5. NATIONALITY:</th>
            <td>{{ $transferCertificate->nationality }}</td>
            <th>6. Cast Category:</th>
            <td>{{ $transferCertificate->cast_category }}</td>
        </tr>
        <tr>
            <th colspan="2">7. Date of first admission in School with class</th>
            <td colspan="2">{{ $transferCertificate->admission_date }} in {{ $transferCertificate->admitted_class }} Class</td>
        </tr>
        <tr>
            <th colspan="2">8. Class in which the pupil last studied</th>
            <td colspan="2">Class {{ $transferCertificate->class }} - {{ $transferCertificate->section }}</td>
        </tr>
        <tr>
            <th colspan="2">9. School/Board Annual examination last taken with result</th>
            <td colspan="2">{{ $school->name }}, {{ @$school->board }}</td>
        </tr>
        <tr>
            <th colspan="2">10. Whether failed, if so once/twice in the same class</th>
            <td colspan="2">-</td>
        </tr>
        <tr>
            <th colspan="2">11. Whether qualifed for promotion to height class if so, to class (in fig & words)</th>
            <td>{{ ucwords($transferCertificate->class_promotion) }}</td>
            <td>Class {{ $transferCertificate->promoting_class }}</td>
        </tr>
        <tr>
            <th colspan="2">12. Months upto which the (pupil has paid) School dues</th>
            <td colspan="2">{{ $transferCertificate->paid_month }}</td>
        </tr>
        <tr>
            <th colspan="2">14. Any fee concession availed of: If so, the nature of such concession</th>
            <td colspan="2">{{ $transferCertificate->fee_concession }}</td>
        </tr>
        <tr>
            <th colspan="2">15. Total No. of Working days</th>
            <td colspan="2">{{ $transferCertificate->total_working_days }}</td>
        </tr>
        <tr>
            <th colspan="2">16. Total No. of working days present</th>
            <td colspan="2">{{ $transferCertificate->total_present_days }}</td>
        </tr>
        <tr>
            <th colspan="2">17. Whether NCC Cadet/Boy Scout/Girl Guide (Detail may be given)</th>
            <td colspan="2">{{ ucwords( $transferCertificate->is_ncc ) }}</td>
        </tr>
        <tr>
            <th colspan="2">18. Games played or extra-curricular activities in which the pupil usually took part</th>
            <td colspan="2">
                {{ ucwords( $transferCertificate->is_game ) }}
            </td>
        </tr>
        <tr>
            <th colspan="2">19. General Conduct</th>
            <td colspan="2">{{ $transferCertificate->conduct }}</td>
        </tr>
        <tr>
            <th colspan="2">20. Date of Application of Transfer Certificate</th>
            <td colspan="2">{{ date('d F Y', strtotime($transferCertificate->apply_date)) }}</td>
        </tr>
        <tr>
            <th colspan="2">21. Date of Issuance of Transfer Certificate</th>
            <td colspan="2">{{ date('d F Y', strtotime($transferCertificate->issue_date)) }}</td>
        </tr>
        <tr>
            <th colspan="2">22. Reason for leaving the School</th>
            <td colspan="2">{{ $transferCertificate->reason }}</td>
        </tr>
        <tr>
            <th colspan="2">23. Any other Remarks</th>
            <td colspan="2">{{ $transferCertificate->remarks }}</td>
        </tr>
    </table>
    <div class="text-center" style="margin-top: 200px; font-weight: bold;">
        <div class="float_left" style="15%;">
            Signature of<br>Class Teacher
        </div>
        <div class="float_left" style="width: 70%;">
            Checked By<br>(State full name and designation)
        </div>
        <div class="float_right" style="15%;">
            Principal<br>Seal &amp; Signatory
        </div>
    </div>
</div>