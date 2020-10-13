<template>
<div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
        <div class="float-right">
            <router-link :to="{ name: 'timetable' }" class="fw-btn-fill btn-gradient-yellow text-white">View Time Table</router-link>
        </div>
        <h3>{{ !id ? 'Add' : 'Edit' }} Time Table</h3>
        <ul>
            <li>
                <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'timetable' }">Time Table</router-link>
            </li>
            <li>{{ !id ? 'Add' : 'Edit' }} Time Table</li>
        </ul>
    </div>
    <!-- Breadcrumbs Area End Here -->

    <!-- Student Table Area Start Here -->
    <div class="card height-auto">
        <div class="card-body">
            <div class="text-center" v-if="!loaded">
                <img :src="'img/preloader.gif'" alt="" style="max-width: 100%;">
            </div>
            <div v-if="loaded">
                <div class="heading-layout1">
                    <div class="item-title">
                        <h3>{{ !id ? 'Add New' : 'Edit' }} Time Table</h3>
                    </div>
                </div>
                <form class="new-added-form" @submit.prevent=" id ? updateData() : addData()">
                    <div class="alert alert-danger" v-if="errors.length">
                        <ul class="mb-0">
                            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                        </ul>
                    </div>
                    <input type="hidden" v-model="id" value="">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6 col-12 form-group">
                            <label>Department *</label>
                            <select class="form-control" v-model="department" @change="getClasses()" required>
                                <option value="">Select Department</option>
                                <option :value="d.id" v-for="d in departments">{{ d.dept_name }}</option>
                            </select>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-12 form-group">
                            <label>Class Section *</label>
                            <select class="form-control" v-model="section" required>
                                <option value="">Select Section</option>
                                <optgroup :label="cls.name" v-for="cls in classes">
                                    <option :value="s.id" v-for="s in cls.sections">{{ cls.name }} - {{ s.name }}</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-12 form-group">
                            <label>Shift *</label>
                            <select class="form-control" v-model="shift" @change="getTimeslots()" required>
                                <option value="">Select Shift</option>
                                <option :value="s.id" v-for="s in shifts">{{ s.shift_name }}</option>
                            </select>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-12 form-group">
                            <label>Weekday *</label>
                            <select class="form-control" v-model="weekday" required>
                                <option value="">Select Weekday</option>
                                <option :value="w.name" v-for="w in weekdays">{{ w.name }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="row" v-for="(t, i) in timeslots">
                        <div class="col-lg-4 col-sm-6 col-12 form-group">
                            <label>&nbsp;</label>
                            {{ t.name }}
                        </div>
                        <div class="col-lg-4 col-sm-6 col-12 form-group">
                            <label>Subject</label>
                            <select class="form-control" v-model="subject[t.id]">
                                <option value="">Select Subject</option>
                                <option :value="s.id" v-for="s in subjects">{{ s.name }}</option>
                            </select>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-12 form-group">
                            <label>Teacher</label>
                            <select class="form-control" v-model="teacher[t.id]">
                                <option value="">Select Teacher</option>
                                <option :value="tcr.id" v-for="tcr in teachers">{{ tcr.name }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 form-group mg-t-8">
                            <button type="submit" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">{{ !id ? 'Save' : 'Update' }}</button>
                            <button type="reset" class="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Student Table Area End Here -->
</div>
</template>
<script>
export default {
    data() {
        return {
            id: '',
            department: '',
            section: '',
            shift: '',
            weekday: '',
            subject: {},
            teacher: {},
            departments: [],
            classes: [],
            shifts: [],
            subjects: [],
            teachers: [],
            timeslots: [],
            weekdays: [],
            errors: [],
            loaded: 0,
            token: localStorage.getItem('token'),
        }
    },
    mounted() {
        let params = this.$route.params;
        this.getDropdowns();

        if (params.id != undefined && params.id != '') {
            this.getInfo(params.id);
        } else {
            this.loaded = 1;
        }
    },
    methods: {
        logValues() {
            console.log(this.subject);
            console.log(this.teacher);
        },
        getTimeslots() {
            this.subject = {};
            this.teacher = {};

            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('get-timeslots-by-shift/' + this.shift)
                .then(res => {
                    this.timeslots = res.data;
                    let self = this;
                    $(res.data).each(function(i, row) {
                        let key = row.id;
                        self.subject[row.id] = '';
                        self.teacher[row.id] = '';
                    });
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
        getDropdowns() {
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('get-timetable-dropdowns')
                .then(res => {
                    this.departments = res.data.departments;
                    this.shifts = res.data.shifts;
                    this.subjects = res.data.subjects;
                    this.teachers = res.data.teachers;
                    this.weekdays = res.data.weekdays;
                });
        },
        getInfo(id) {
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('get-timetable-info/' + id)
                .then(res => {
                    let list = res.data.data;
                    this.id = list.id;
                    this.timetableNumber = list.timetable_no;
                    this.vechicleType = list.type;
                    this.timetableRc = list.timetable_rc;
                    this.driver = list.driver;

                    this.loaded = 1;
                    $('.select2').each(function() {
                        $(this).trigger('change');
                    });
                });
        },
        addData: function() {
            let params = {
                department: this.department,
                section: this.section,
                shift: this.shift,
                weekday: this.weekday,
                subjects: this.subject,
                teachers: this.teacher,
            }
            this.loaded = 0;
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            instance.post('add-timetable', params)
                .then(res => {
                    if (res.data.status) {
                        this.$router.push({
                                name: 'student-timetable'
                            })
                            .then(
                                res => {
                                    this.loaded = 1;
                                    this.$toast.success('Record saved.');
                                }
                            )
                            .catch(
                                err => {
                                    this.loaded = 1;
                                    console.log(err);
                                }
                            );
                    } else {
                        this.loaded = 1;
                        this.errors = res.data.errors;
                    }
                })
                .catch(error => {
                    this.loaded = 1;
                    console.log(error);
                });
        },
        updateData: function() {
            let params = {
                id: this.id,
                driver: this.driver,
                type: this.vechicleType,
                timetable_no: this.timetableNumber,
                timetable_rc: this.timetableRc
            }
            this.loaded = 0;
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            instance.post('update-timetable', params)
                .then(res => {
                    if (res.data.status) {
                        this.$router.push({
                                name: 'timetable'
                            })
                            .then(
                                res => {
                                    this.loaded = 1;
                                    this.$toast.success('Record saved.');
                                }
                            )
                            .catch(
                                err => {
                                    this.loaded = 1;
                                    console.log(err);
                                }
                            );
                    } else {
                        this.loaded = 1;
                        this.errors = res.data.errors;
                    }
                })
                .catch(error => {
                    this.loaded = 1;
                    console.log(error);
                });
        },
    }
}
</script>
