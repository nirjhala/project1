<template>
<div class="dashboard-content-one">
    <!-- Breadcubs Area Start Here -->
    <div class="breadcrumbs-area">
        <h3>Student Timetable</h3>
        <ul>
            <li>
                <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
            </li>
            <li>Student Timetable</li>
        </ul>
    </div>
    <!-- Breadcubs Area End Here -->

    <div class="mg-b-20">
        <div class="row gutters-8">
            <div class="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                <select class="form-control" v-model="department" @change="getClasses()" required>
                    <option value="">Select Department</option>
                    <option :value="d.id" v-for="d in departments">{{ d.dept_name }}</option>
                </select>
            </div>
            <div class="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                <select class="form-control" v-model="section" @change="getTimetable()" required>
                    <option value="">Select Section</option>
                    <optgroup :label="cls.name" v-for="cls in classes">
                        <option :value="s.id" v-for="s in cls.sections">{{ cls.name }} - {{ s.name }}</option>
                    </optgroup>
                </select>
            </div>
        </div>
    </div>
    <!-- Student Table Area Start Here -->
    <form method="post" @submit.prevent=" deleteRecord() ">
        <div class="card height-auto" v-if="section">
            <div class="card-body">
                <div class="text-center" v-if="!loaded">
                    <b-spinner></b-spinner>
                </div>
                <div v-if="loaded">
                    <div id="timetable">
                        <h4 class="text-center">Time-Table for Class {{ class_full_name }}</h4>
                        <div class="table-responsive" v-if="lists">
                            <table class="table display table-bordered text-nowrap">
                                <thead>
                                    <tr>
                                        <th class="text-center bg-dark text-white">
                                            Day
                                        </th>
                                        <th class="text-center bg-dark text-white" v-for="w in weekdays">{{ w }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="x in lists">
                                        <th class="text-center bg-dark text-white">
                                            <div>{{ x.timeslot }}</div>
                                            <div>
                                                {{ x.timeslot_time }}
                                            </div>
                                        </th>
                                        <td class="text-center" v-for="w in weekdays">
                                            <div>
                                                <strong>{{ x[w] && x[w].subject_info ? x[w].subject_info.name : '-' }}</strong>
                                            </div>
                                            <div>{{ x[w] && x[w].teacher_info ? `(${x[w].teacher_info.name})` : '' }}</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="text-center">
                        <button type="button" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark" v-on:click="printTimeTable()"> Print </button>
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

export default {
    data() {
        return {
            errors: 0,
            department: '',
            section: '',
            class_full_name: '',
            departments: [],
            classes: [],
            timeslots: [],
            weekdays: [],
            lists: [],
            allSelected: 0,
            check: [],
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
                        padding: 10px 15px;
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
                    if (params.id != undefined && params.id != '') {
                        this.getInfo(params.id);
                    } else {
                        this.loaded = 1;
                    }
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
        checkAll() {
            let self = this;
            self.check = [];
            if (!self.allSelected) {
                $.each(self.lists.data, function(i, row) {
                    if (row.routes_count == 0) {
                        self.check.push(row.id);
                    }
                });
            }
        },
        getTimetable() {
            let department_id = this.department;
            let section_id = this.section;

            let params = {
                'department_id': this.department,
                'section_id': this.section,
            };

            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            instance.post('view-timetable', params)
                .then(res => {
                    this.loaded = 1;
                    if (res.status) {
                        this.timeslots = res.data.timeslots;
                        this.lists = res.data.data;
                        this.weekdays = res.data.weekdays;
                        this.class_full_name = res.data.class_full_name;
                    } else {
                        this.errors = 1;
                    }
                }).catch(err => {
                    this.loaded = 1;
                    console.log(err);
                });
        },
        deleteRecord() {
            let params = {
                check: this.check
            };
            var parent = $(this).closest('form');

            if (this.check.length > 0) {
                swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to recover this record!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                    .then((willDelete) => {
                        if (willDelete) {
                            this.loaded = 0;
                            let instance = axios.create({
                                baseURL: this.apiBaseUrl,
                                headers: {
                                    'Authorization': 'Bearer ' + this.token,
                                    'Accept': 'application/json'
                                }
                            });
                            instance.post('remove-vehicle', params)
                                .then(res => {
                                    if (res.status) {
                                        this.getRecords();
                                        this.$toast.success('Selected record(s) has been deleted.');
                                    } else {
                                        this.loaded = 1;
                                        this.$toast.warning('Record(s) unable to delete.');
                                    }
                                }).catch(err => {
                                    this.loaded = 1;
                                    console.log(err);
                                });
                        }
                    });
            } else {
                this.loaded = 1;
                swal("Warning", "Please select at least one record to delete.", "warning");
                return false;
            }
        }
    }
}
</script>
