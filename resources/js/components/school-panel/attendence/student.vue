<template>
<div class="dashboard-content-one">
    <!-- Breadcubs Area Start Here -->
    <div class="breadcrumbs-area">
        <h3>Student Attendence</h3>
        <ul>
            <li>
                <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
            </li>
            <li>Student Attendence</li>
        </ul>
    </div>
    <!-- Breadcubs Area End Here -->

    <div class="mg-b-20">
        <div class="row gutters-8">
            <div class="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                <input type="date" :max="maxDate" v-model="attd_date" class="form-control" placeholder="Date" value="" @change="getStudents()">
            </div>
            <div class="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                <select class="form-control" v-model="department" @change="getClasses()" required>
                    <option value="">Select Department</option>
                    <option :value="d.id" v-for="d in departments" :key="d.id">{{ d.dept_name }}</option>
                </select>
            </div>
            <div class="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                <select class="form-control" v-model="section" @change="getStudents()" required>
                    <option value="">Select Class / Section</option>
                    <optgroup :label="cls.name" v-for="cls in classes" :key="cls.id">
                        <option :value="s.id" v-for="s in cls.sections" :key="s.id">{{ cls.name }} - {{ s.name }}</option>
                    </optgroup>
                </select>
            </div>
        </div>
    </div>
    <!-- Student Table Area Start Here -->

    <form method="post" @submit.prevent="saveAttendence()">
        <div class="card height-auto" v-if="section">
            <div class="card-body">
                <div class="text-center" v-if="!loaded">
                    <img src="img/preloader.gif" alt="" style="max-width: 100%;">
                </div>
                <div v-if="loaded">
                    <div id="timetable">
                        <div class="table-responsive" v-if="lists">
                            <table class="table display table-bordered table-sm text-nowrap">
                                <thead class="thead-dark">
                                    <tr>
                                        <th class="text-center">
                                            #
                                        </th>
                                        <th class="text-center">NAME</th>
                                        <th class="text-center">FATHER</th>
                                        <th class="text-center">Attendence</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(x, i) in students" :key="i">
                                        <td class="text-center">
                                            {{ i + 1 }}
                                        </td>
                                        <td class="text-center">{{ x.name }}</td>
                                        <td class="text-center">{{ x.student_data && x.student_data.father_info ? x.student_data.father_info.name : "" }}</td>
                                        <td class="text-center">
                                            <div class="onoffswitch d-inline-block my-1">
                                                <input type="checkbox" v-model="attendence" :key="i" :value="x.id" class="onoffswitch-checkbox" :id="'attd_btn'+x.id" :tabindex="i" :checked="x.attd_count">
                                                <label class="onoffswitch-label m-0 text-left" :for="'attd_btn'+x.id">
                                                    <span class="onoffswitch-inner"></span>
                                                    <span class="onoffswitch-switch"></span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"> Save </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Student Table Area End Here -->
    </form>
</div>
</template>
<script>
import _ from 'lodash'

var d = new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
if (month.length < 2)
    month = '0' + month;
if (day.length < 2)
    day = '0' + day;
var currentDate = [year, month, day].join('-');

export default {
    data() {
        return {
            errors: 0,
            department: '',
            section: '',
            departments: [],
            classes: [],
            students: [],
            attendence: [],
            lists: [],
            attd_date: currentDate,
            maxDate: currentDate,
            s: '',
            loaded: 0,
            token: localStorage.getItem('token')
        }
    },
    mounted() {
        this.getDepts();
    },
    methods: {
        printTimeTable() {
            let divToPrint = document.getElementById('timetable');

            let newWin = window.open('', 'Time-Table', "width=800,height=600");

            newWin.document.open();
            let html = `
            <html>
                <head>
                    <title>Time-Table</title>
                    <style>
                    body {
                        margin:0;
                        font-family: sans-serif;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    table, th, td {
                        border: 1px solid #000;
                        padding: 5px 10px;
                        font-size: 12px;
                    }
                    th {
                        background: #555;
                        color: #fff;
                    }
                    .text-center {
                        text-align: center;
                    }
                    div.table-responsive {
                        margin: 10px;
                        padding: 10px;
                        border: 1px solid #000;
                    }
                    h4 {
                        margin-top: 20px;
                    }
                    @page {
                        margin: 0;
                        size: landscape;
                    }
                    </style>
                </head>
                <body onload="window.print()">${ divToPrint.innerHTML}</body>
            </html>`;
            newWin.document.write(html);

            newWin.document.close();

            setTimeout(function() {
                newWin.close();
            }, 10);
        },
        saveAttendence() {
            let params = {
                'attendence': this.attendence,
                'date': this.attd_date,
                'section': this.section
            }
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            instance.post('save-attendence', params)
                .then(res => {
                    this.$toast.success('Attendence saved.');
                });
        },
        getDepts() {
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('get-departments')
                .then(res => {
                    this.departments = res.data.data;
                });
        },
        getClasses() {
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('get-class-by-dept/' + this.department)
                .then(res => {
                    this.classes = res.data;
                });
        },
        getStudents() {
            if (this.section) {
                let params = {
                    section: this.section,
                    date: this.attd_date
                }
                let instance = axios.create({
                    baseURL: this.apiBaseUrl,
                    headers: {
                        'Authorization': 'Bearer ' + this.token,
                        'Accept': 'application/json'
                    }
                });
                instance.post('attd-students', params)
                    .then(res => {
                        this.loaded = 1;
                        if (res.status) {
                            this.students = res.data.data;
                            this.attendence = res.data.attendees;

                            if (typeof res.data.attendees === 'undefined' || res.data.attendees.length == 0) {
                                this.students.forEach(function(i, row) {
                                    this.students[i].attd_count = 1;
                                })
                            }
                        } else {
                            this.errors = 1;
                        }
                    }).catch(err => {
                        this.loaded = 1;
                        console.log(err);
                    });
            }
        }
    }
}
</script>
