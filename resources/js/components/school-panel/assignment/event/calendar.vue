<template>
<div class="dashboard-content-one">
    <!-- Breadcubs Area Start Here -->
    <div class="breadcrumbs-area">
        <h3>Event Calendar</h3>
        <ul>
            <li>
                <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'SchoolMaster' }">School Master</router-link>
            </li>
            <li>Event Calendar</li>
        </ul>
    </div>
    <!-- Breadcubs Area End Here -->

    <!-- Student Table Area Start Here -->
    <div class="card height-auto">
        <div class="card-body">
            <div class="text-center" v-if="!loaded">
                <b-spinner></b-spinner>
            </div>
            <div v-if="loaded">
                <div class="form-group">
                    <select v-model="month" class="form-control">
                        <option :value="m" v-for="m in allMonths" :key="m">{{ m }}</option>
                    </select>
                </div>
                <div id="attendence">
                    <div class="table-responsive" v-if="attdLists">
                        <div v-for="(m, i) in attdLists" :key="'m_'+i">
                            <div class="p-3 bg-dark text-white">{{ m.month }}</div>
                            <div class="d-flex bg-info text-white">
                                <div class="d-flex align-items-center justify-content-center text-center" style="width: 14.28%; height: 30px; border: 1px solid #ccc; font-size: 18px;">
                                    Sunday
                                </div>
                                <div class="d-flex align-items-center justify-content-center text-center" style="width: 14.28%; height: 30px; border: 1px solid #ccc; font-size: 18px;">
                                    Monday
                                </div>
                                <div class="d-flex align-items-center justify-content-center text-center" style="width: 14.28%; height: 30px; border: 1px solid #ccc; font-size: 18px;">
                                    Tuesday
                                </div>
                                <div class="d-flex align-items-center justify-content-center text-center" style="width: 14.28%; height: 30px; border: 1px solid #ccc; font-size: 18px;">
                                    Wednesday
                                </div>
                                <div class="d-flex align-items-center justify-content-center text-center" style="width: 14.28%; height: 30px; border: 1px solid #ccc; font-size: 18px;">
                                    Thursday
                                </div>
                                <div class="d-flex align-items-center justify-content-center text-center" style="width: 14.28%; height: 30px; border: 1px solid #ccc; font-size: 18px;">
                                    Friday
                                </div>
                                <div class="d-flex align-items-center justify-content-center text-center" style="width: 14.28%; height: 30px; border: 1px solid #ccc; font-size: 18px;">
                                    Saturday
                                </div>
                            </div>
                            <div class="d-flex flex-wrap">
                                <div class="d-flex align-items-center justify-content-center text-center" style="width: 14.28%; height: 100px; border: 1px solid #ccc; font-size: 18px; background: #bdc3c7;" v-for="n in m.start_week" :key="'w'+n">

                                </div>
                                <div class="d-flex align-items-center justify-content-center text-center" :class="d.class_name" style="width: 14.28%; height: 100px; border: 1px solid #ccc; font-size: 18px; background: #f9f9f9;" v-for="(d, j) in m.days" :key="'date_'+j">
                                    <div class="d-flex w-100 text-center">
                                        <div style="width: 60px;">{{ d.date }}</div>
                                        <div class="flex-fill" style="font-size: 12px;" v-if="d.status">{{ d.status.substr(0, 55) }}</div>
                                        <div class="flex-fill" style="font-size: 12px;" v-if="!d.status">
                                            Normal Day
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-center text-center" style="width: 14.28%; height: 100px; border: 1px solid #ccc; font-size: 18px; background: #bdc3c7;" v-for="index in m.left" :key="index"> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Student Table Area End Here -->
</div>
</template>
<script>
import _ from 'lodash'
import api from "../../../../api/script"

var d = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getMonth()] + ' ' + d.getFullYear();

export default {
    data () {
        return {
            errors: 0,
            month: n,
            class_full_name: '',
            timeslots: [],
            weekdays: [],
            lists: [],
            s: '',
            loaded: 0,
            editFlag: false,
            token: localStorage.getItem('token')
        }
    },
    computed: {
        attdLists () {
            return this.lists.filter( ( list, i ) => {
                return list.month == this.month
            })
        },
        allMonths () {
            let allMonths = []
            this.lists.forEach( (list,i) => {
                allMonths.push( list.month )
            })
            return allMonths
        }
    },
    mounted() {
        this.getEvents()
    },
    methods: {
        getEvents() {
            let apiResponse = api.getAllEvents()
            apiResponse
                .then(res => {
                    this.loaded = 1
                    this.lists = res.data
                })
                .catch(err => {
                    this.loaded = 1
                    console.log('Error: ', err)
                })
        }
    }
}
</script>
