<template>
<div class="dashboard-content-one">
    <!-- Breadcubs Area Start Here -->
    <div class="breadcrumbs-area">
        <h3>Time Table</h3>
        <ul>
            <li>
                <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
            </li>
            <li>Time Table</li>
        </ul>
    </div>
    <!-- Breadcubs Area End Here -->

    <!-- Student Table Area Start Here -->
    <div class="card height-auto">
        <div class="card-body">
            <div class="text-center" v-if="!loaded">
                <img src="img/preloader.gif" alt="" style="max-width: 100%;">
            </div>
            <div v-if="loaded">
                <div id="timetable">
                    <h4 class="text-center">Time-Table of {{ teacher_name }}</h4>
                    <div class="table-responsive" v-if="lists">
                        <table class="table display table-bordered text-nowrap">
                            <thead>
                                <tr>
                                    <th class="text-center bg-dark text-white">
                                        Day
                                    </th>
                                    <th class="text-center bg-dark text-white" v-for="(w,i) in weekdays" :key="i">{{ w }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(x,i) in lists" :key="'slot'+i">
                                    <th class="text-center bg-dark text-white">
                                        <div>{{ x.timeslot }}</div>
                                        <div>
                                            {{ x.timeslot_time }}
                                        </div>
                                    </th>
                                    <td class="text-center" v-for="(w, j) in weekdays" :key="'wk'+j">
                                        <div>
                                            <strong>{{ x[w] && x[w].subject_info ? x[w].subject_info.name : '-' }}</strong>
                                        </div>
                                        <div>{{ x[w] && x[w].section_info ? `(${x[w].section_info.cls.name} - ${x[w].section_info.name})` : '' }}</div>
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
</div>
</template>
<script>
import _ from 'lodash'

export default {
    data() {
        return {
            errors: 0,
            teacher: '',
            teacher_name: '',
            timeslots: [],
            weekdays: [],
            lists: [],
            loaded: 0,
            editFlag: false,
            token: localStorage.getItem('token')
        }
    },
    mounted() {
        this.getTimetable();
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
        getTimetable() {

            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            let self = this;
            instance.post('timetable/teacher')
                .then(res => {
                    self.loaded = 1
                    if (res.status) {
                        self.timeslots = res.data.timeslots
                        self.lists = res.data.data
                        self.weekdays = res.data.weekdays
                        self.teacher_name = res.data.teacher_name
                    } else {
                        self.errors = 1
                    }
                }).catch(err => {
                    this.loaded = 1
                    console.log(err)
                })
        }
    }
}
</script>
