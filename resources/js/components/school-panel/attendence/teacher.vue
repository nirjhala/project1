<template>
<div class="dashboard-content-one">
    <!-- Breadcubs Area Start Here -->
    <div class="breadcrumbs-area">
        <h3>Teacher Attendence</h3>
        <ul>
            <li>
                <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
            </li>
            <li>Teacher Attendence</li>
        </ul>
    </div>
    <!-- Breadcubs Area End Here -->

    <div class="mg-b-20">
        <div class="row gutters-8">
            <div class="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                <input type="date" :max="maxDate" v-model="attd_date" class="form-control" placeholder="Date" value="" @change="getTeachers()">
            </div>
        </div>
    </div>
    <!-- Teacher Table Area Start Here -->

    <form method="post" @submit.prevent="saveAttendence()">
        <div class="card height-auto" v-if="attd_date">
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
                                        <th class="text-center">CONTACT</th>
                                        <th class="text-center">Attendence</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(x, i) in users">
                                        <td class="text-center">
                                            {{ i + 1 }}
                                        </td>
                                        <td class="text-center">{{ x.name }}</td>
                                        <td class="text-center">{{ x.mobile }}</td>
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
        <!-- Teacher Table Area End Here -->
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
            users: [],
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
        this.getTeachers();
    },
    methods: {
        saveAttendence() {
            let params = {
                'attendence': this.attendence,
                'date': this.attd_date,
                'role': 'teacher'
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
        getTeachers() {
            if (this.attd_date) {
                let params = {
                    date: this.attd_date
                }
                let instance = axios.create({
                    baseURL: this.apiBaseUrl,
                    headers: {
                        'Authorization': 'Bearer ' + this.token,
                        'Accept': 'application/json'
                    }
                });
                instance.post('attd-users/Teacher', params)
                    .then(res => {
                        this.loaded = 1;
                        if (res.status) {
                            this.users = res.data.data;
                            this.attendence = res.data.attendees;
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
