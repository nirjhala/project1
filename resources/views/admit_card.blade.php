<title>{{ $user_info->name }} | Admit Card</title>
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
    @page {
        size: A5 landscape;
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
        <div
            style="float-left"
        >
            Roll No. <span class="bigNumber">{{ $user_info->studentData->roll_no }}</span>
        </div>
        <div class="paper-title" style="margin-top: -15px; margin-bottom: 15px;">
            Admit Card
        </div>
    </div>

    <table class="table">
        <tr>
            <th>Name of Pupil:</th>
            <td>{{ $user_info->name }}</td>
            <td 
                rowspan="4"
                width="100"
                style="text-align: center;"
            >
                <img 
                    src="{{ !empty($user_info->media->image_url['thumb']) ? $user_info->media->image_url['thumb'] : url('img/student.jpg') }}" 
                    alt="Student Photograph"
                    style="width: 100px;"
                >
            </td>
        </tr>
        <tr>
            <th>Father's Name:</th>
            <td>{{ $user_info->studentData->father_info->name }}</td>
        </tr>
        <tr>
            <th>Mother's Name</th>
            <td>{{ $user_info->studentData->mother_info->name }}</td>
        </tr>
        <tr>
            <th>Class</th>
            <td>{{ "{$user_info->studentData->sectionName->cls->name} - {$user_info->studentData->sectionName->name}" }}</td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 10px 5px;"><strong>EXAM CENTER: </strong>{{ $school->school_no }} {{ strtoupper($school->name) }}, {{ strtoupper( $school->user->full_address ) }}</td>
        </tr>
        <tr style="background: #ccc;">
            <th>Sr. No.</th>
            <th style="background: #ccc;">Subject</th>
            <th style="background: #ccc;">Date Time</th>
        </tr>
        @foreach($admit_card->subjects as $index => $subj)
        <tr>
            <td width="100">{{ $index + 1 }}.</td>
            <td>{{ $subj->name }}</td>
            <td>{{ date("d M Y h:i A", strtotime($subj->pivot->date.' '.$subj->pivot->time)) }}</td>
        </tr>
        @endforeach
    </table>
</div><div class="print-page">
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
        <div 
            style="
                text-align: center; 
                font-weight: bold; 
                text-decoration: underline;
                margin: 5px 0 10px 0;
                font-size: 20px;
            "
        >Instructions</div><div style="font-size: 10px;">
            {!! nl2br($admit_card->instruction) !!}
        </div>
    </div>
</div>