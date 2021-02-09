<style>
    body {
        margin: 0;
    }
    .pm-10 {
        padding: 10mm;
    }
    table.marksheet-body {
        width: 100%;
        border-collapse: collapse;
        border: 3px solid #800000 !important;
        /* height: 180mm; */
        background-color: #fdfed4;
    }
    .print-page {
        height: 210mm;
        page-break-after: always;
    }
    .bg_yellow {
        height: 210mm;
        background-color: #fdfed4;
    }
    .table {
        width: 100%;
        border-collapse: collapse;
    }
    .table, .table th, .table td {
        border: 1px solid black;
        text-align: left;
        vertical-align: top;
    }
    .table th, .table td {
        padding: 10mm;
    }
    table .table th, table .table td {
        padding: 0 5px;
    }
    .marksheet-body * {
        font-size: 1em;
        line-height: 100%;
    }
    .marksheet-body th, .marksheet-body td {
        padding: 7px 5px;
        vertical-align: middle;
        white-space: nowrap;
        border: 1px solid black !important;
    }
    .marksheet-body.table th {
        text-align: center;
    }
    .table.no_bordered, .table.no_bordered>tr>th, .table.no_bordered>tr>td, .table.no_bordered>tbody>tr>th, .table.no_bordered>tbody>tr>td {
        border: none;
    }
    .w-50 {
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
    @page {size: A4 landscape;margin: 0;padding: 0;margin-bottom: 0 !important;background-color: #fdfed4;}
</style><div class="print-page">
<table class="table no_bordered bg_yellow">
    <tr>
        <td class="w-50">
            <div class="pdf-section left">
                <h2 class="text-center">Instructions</h2>
                <div>
                    <h4>1. Grading System</h4>
                    <table class="table">
                        <tr>
                            <th>Percentage</th>
                            <th>Grade</th>
                            <th>Percentage</th>
                            <th>Grade</th>
                        </tr>
                        <tr>
                            <td>91-100%</td>
                            <td>A+</td>
                            <td>51-60%</td>
                            <td>C+</td>
                        </tr>
                        <tr>
                            <td>81-90%</td>
                            <td>A</td>
                            <td>41-50%</td>
                            <td>C</td>
                        </tr>
                        <tr>
                            <td>71-80%</td>
                            <td>B+</td>
                            <td>33-40%</td>
                            <td>D+</td>
                        </tr>
                        <tr>
                            <td>61-70%</td>
                            <td>B</td>
                            <td>0-32%</td>
                            <td>F</td>
                        </tr>
                    </table>
                    <h4>2. Promotions are granted on the bases of the whole year work of the student.</h4>
                    <h4>3. A minimum of 75% attendance is obligatory to enable the child eligible to appear in the final examination.</h4>
                    <h4>4. All the parents must recieve the monthly test report from child within first week of each month.</h4>
                    <h4>5. Parents are requested to visit the school after each examination for parents-teachers meeting.</h4>
                    <div style="height: 60px;"></div>
                    <div class="text-center">
                        <div class="bottom_tag">
                            We Believe In Excellence
                        </div>
                    </div>
                </div>
            </div>
        </td>
        <td class="w-50">
            <div class="pdf-section right">
                <div class="text-center">
                    Recognized by Govt. of Rajasthan
                </div>
                <div style="margin-top: 10px;">
                    <div style="float: left">
                        School Code: RJ012020
                    </div>
                    <div style="float: right">
                        UDISC No.: 123456
                    </div>
                    <div style="clear: both"></div>
                </div>
                <h2 class="text-center" style="margin-top: 15px; text-transform: uppercase;">{{ $school->name }}</h2>
                <div class="text-center">
                    <img src="{{ url('img/profiles/logo_2.png') }}" alt="" style="height: 220px;">
                </div>
                <div class="text-center">
                    <h4>DISTRICT - JODHPUR</h4>
                    <h4>For The Year 2020-21</h4>
                </div>
                <div class="student_info">
                    <table class="table">
                        <tr>
                            <th>Student Name</th>
                            <td><span class="mr-2">-</span> {{ $student->user->name }}</td>
                        </tr>
                        <tr>
                            <th>Father's Name</th>
                            <td><span class="mr-2">-</span> {{ $student->father_name }}</td>
                        </tr>
                        <tr>
                            <th>Mother's Name</th>
                            <td><span class="mr-2">-</span> {{ $student->mother_name }}</td>
                        </tr>
                        <tr>
                            <th>Class</th>
                            <td><span class="mr-2">-</span> {{ $student->class_name }}</td>
                        </tr>
                        <tr>
                            <th>Date Of Birth</th>
                            <td><span class="mr-2">-</span> {{ date('d-m-Y', strtotime($student->user->dob)) }}</td>
                        </tr>
                        <tr>
                            <th>Blood Group</th>
                            <td><span class="mr-2">-</span> {{ $student->blood_group ?: '--' }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </td>
    </tr>
</table></div><div class="print-page pm-10">
    <table class="table marksheet-body">
        <tr>
            <td colspan="{{ count($result) * 3 + 1 }}" style="border: none; vertical-align: middle;">
                <div>
                    <div>
                        <div style="float:left; width: 30%;" class="text-center">
                            <img src="{{ url('img/profiles/logo_2.png') }}" alt="School" style="height: 100px;">
                        </div>
                        <div style="float:left; width: 40%; padding: 35px 0;" class="text-center">
                            <h2 style="margin: 0; line-height: 100%; ">{{ strtoupper($school->name) }}</h2>
                            <h2 style="margin: 0; line-height: 100%; ">DIST. JODHPUR</h2>
                        </div>
                        @if(!empty($student->user->media->image_url['thumb']))
                        <div style="float: left; width: 30%; text-align: right;" class="text-center">
                            <img src="{{ $student->user->media->image_url['thumb'] }}" style="height: 100px;" alt="">
                        </div>
                        @endif
                        <div style="clear: both"></div>
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <th colspan="{{ count($result) * 3 + 1 }}" class="text-center" style="background: #f61302; color: #fff; text-align: center; border: none;">
                MARKS STATEMENT
            </th>
        </tr>
        <tr>
            <td colspan="{{ count($result) * 3 + 1 }}" class="text-center">
                <div>
                    <div style="float: left; width: 50%;">
                        <strong style="width: 150px; display: inline-block">Student's Name</strong>
                        :- {{ $student->user->name }}
                    </div>
                    <div style="float: left; width: 50%;">
                        <strong style="width: 150px; display: inline-block">Father's Name</strong>
                        :- {{ $student->father_name }}
                    </div>
                    <div style="clear: both"></div>
                    <div style="float: left; width: 50%;">
                        <strong style="width: 150px; display: inline-block">Student Class</strong>
                        :- {{ $student->class_name }}
                    </div>
                    <div style="float: left; width: 50%;">
                        <strong style="width: 150px; display: inline-block">Student Roll No.</strong>
                        :- {{ $student->roll_no }}
                    </div>
                    <div style="clear: both"></div>
                </div>
            </td>
        </tr>
        <tr>
            <th rowspan="2">SUBJECT NAME</th>
            @foreach($result as $exam => $res)
            <th colspan="3">{{ $exam }}</th>
            @endforeach
        </tr>
        <tr>
            @foreach($result as $exam => $res)
            <th>Max.</th>
            <th>Min.</th>
            <th>Obt.</th>
            @endforeach
        </tr>
        
        @foreach($subjects as $subj)
        <tr>
            <td>{{ strtoupper($subj->name) }}</td>
            @foreach($result as $exam => $res)
                @php
                    if(empty($total_marks[$exam]))
                    {
                        $total_marks[$exam] = [
                            'min'   => 0,
                            'max'   => 0,
                            'gain'  => 0,
                            'pass'  => 1
                        ];
                    }

                    if(!empty($res[$subj->name]))
                    {
                        $total_marks[$exam]['min']    += $res[$subj->name]['min_marks'];
                        $total_marks[$exam]['max']    += $res[$subj->name]['max_marks'];
                        $total_marks[$exam]['gain']   += $res[$subj->name]['marks'];

                        if($total_marks[$exam]['gain'] < $total_marks[$exam]['min'])
                        {
                            $total_marks[$exam]['pass'] = 0;
                        }
                    }
                @endphp
                <td>{{ !empty($res[$subj->name]['min_marks']) ? $res[$subj->name]['min_marks'] : '-' }}</td>
                <td>{{ !empty($res[$subj->name]['max_marks']) ? $res[$subj->name]['max_marks'] : '-' }}</td>
                <td>{{ !empty($res[$subj->name]['marks']) ? $res[$subj->name]['marks'] : '-' }}</td>
            @endforeach
        </tr>
        @endforeach
        <tr>
            <td>GRAND TOTAL</td>
            @foreach($result as $exam => $res)
            <td>{{ $total_marks[$exam]['min'] ?: '-' }}</td>
            <td>{{ $total_marks[$exam]['max'] ?: '-' }}</td>
            <td>{{ $total_marks[$exam]['gain'] ?: '-' }}</td>
            @endforeach
        </tr>
        <!-- <tr>
            <td rowspan="2">
                Attendence
            </td>
            @foreach($result as $exam => $res)
            <td colspan="2">Total Presents</td>
            <td>%</td>
            @endforeach
        </tr>
        <tr>
            @foreach($result as $exam => $res)
            <td colspan="2">25 / 26</td>
            <td>96.15%</td>
            @endforeach
        </tr> -->
        <tr>
            <td rowspan="2">Result</td>
            @foreach($result as $exam => $res)
            <td rowspan="2">
                @php
                    if(!empty($total_marks[$exam]['max']))
                    {
                        echo $total_marks[$exam]['pass'] == 1 ? 'PASS' : 'FAIL';
                    }
                    else
                    {
                        echo '-';
                    }
                @endphp
            </td>
            <td>Division</td>
            <td>%</td>
            @endforeach
        </tr>
        <tr>
            @foreach($result as $exam => $res)
                @php
                    $grade = $percent = '-';
                    if(!empty($total_marks[$exam]['max']))
                    {
                        $percent = round(($total_marks[$exam]['gain'] / $total_marks[$exam]['max']) * 100, 2);

                        if($percent > 90)
                        {
                            $grade = 'A+';
                        }
                        else if($percent > 80)
                        {
                            $grade = 'A';
                        }
                        else if($percent > 70)
                        {
                            $grade = 'B+';
                        }
                        else if($percent > 60)
                        {
                            $grade = 'B';
                        }
                        else if($percent > 50)
                        {
                            $grade = 'C+';
                        }
                        else if($percent > 40)
                        {
                            $grade = 'C';
                        }
                        else if($percent > 33)
                        {
                            $grade = 'D+';
                        }
                        else
                        {
                            $grade = 'F';
                        }
                        
                        $percent .= '%';
                    }
                @endphp
            <td>{{ $grade }}</td>
            <td>{{ $percent }}</td>
            @endforeach
        </tr>
        <tr>
            <td
                colspan="{{ count($result) - 1 }}"
            >
                <div
                    style="text-align: center"
                >
                    <strong>Results</strong>
                </div>
                <div>
                    Passed:
                </div>
                <div>
                    Failed:
                </div>
                <div>
                    Promoted:
                </div>
                <div>
                    Grade:
                </div>
            </td>
            <td
                colspan="{{ count($result) - 1 }}"
                    style="text-align: center"
            >
                <div
                    style="margin-bottom: 40px;"
                >
                    <strong>Signature</strong>
                </div>
                <div>
                    Class Teacher
                </div>
            </td>
            <td
                colspan="{{ count($result) - 1 }}"
                    style="text-align: center"
            >
                <div
                    style="margin-bottom: 40px;"
                >
                    <strong>Signature</strong>
                </div>
                <div>
                    Parents / Guardian
                </div>
            </td>
            <td
                colspan="{{ count($result) }}"
                style="text-align: center"
            >
                <div
                    style="margin-bottom: 40px;"
                >
                    <strong>Signature</strong>
                </div>
                <div>
                    Principal
                </div>
            </td>
        </tr>
    </table>
</div>