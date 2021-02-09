<template>
<div class="dashboard-content-one">
    <!-- Breadcubs Area Start Here -->
    <div class="breadcrumbs-area">
        <h3>Attendence</h3>
        <ul>
            <li>
                <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
            </li>
            <li>Attendence</li>
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
                                    <div>
                                        <div>{{ d.date }}</div>
                                        <div>{{ d.status }}</div>
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
    data() {
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
        this.getAttendence();
    },
    methods: {
        getAttendence() {
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            let self = this;
            instance.get('attendence/student/' + this.$route.params.id)
                .then(res => {
                    self.loaded = 1
                    if (res.status) {
                        self.lists = res.data
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
