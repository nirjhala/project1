<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link :to="{ name: 'timeslot' }" class="fw-btn-fill btn-gradient-yellow text-white">View Timeslot</router-link>
            </div>
            <h3>{{ !id ? 'Add' : 'Edit' }} Timeslot</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'timeslot' }">Timeslot</router-link>
                </li>
                <li>{{ !id ? 'Add' : 'Edit' }} Timeslot</li>
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
                            <h3>{{ !id ? 'Add New' : 'Edit' }} Timeslot</h3>
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
                            <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Name *</label>
                                <input type="text" v-model="slotName" placeholder="" class="form-control">
                            </div>
                            <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Start Time *</label>
                                <input type="time" v-model="startTime" placeholder="" class="form-control">
                            </div>
                            <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>End Time *</label>
                                <input type="time" v-model="endTime" placeholder="" class="form-control">
                            </div>
                            <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Shift *</label>
                                <select class="form-control" v-model="timeslotShift">
                                    <option value="">Select Shift</option>
                                    <option :value="s.id" v-for="s in shifts" :key="s.id">{{ s.shift_name }}</option>
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
            slotName: '',
            startTime: '',
            endTime: '',
            timeslotShift: '',
            shifts: [],
            errors: [],
            loaded: 0,
            token: localStorage.getItem('token')
        }
    },
    mounted() {
        let params = this.$route.params;

        this.getShifts();
        if( params.id != undefined && params.id != '' ) {
            this.getInfo( params.id );
        } else {
            this.loaded = 1;
        }

    },
    methods: {
        getShifts() {
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('get-all-shifts')
                 .then(res => {
                     this.shifts = res.data;
                 });
        },
        getInfo(id) {
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('get-timeslot-info/'+id)
                 .then( res => {
                     this.id            = res.data.data.id;
                     this.slotName      = res.data.data.name;
                     this.startTime     = res.data.data.time_start;
                     this.endTime       = res.data.data.time_end;
                     this.timeslotShift = res.data.data.shift;

                     this.loaded        = 1;

                     $('.select2').each(function() {
                         $(this).trigger('change');
                     });
                 });
        },
        addData: function () {
            let params = {
                name: this.slotName,
                time_start: this.startTime,
                time_end: this.endTime,
                shift: this.timeslotShift
            }
            this.loaded = 0;
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.post('add-timeslot', params)
                .then(res => {
                    if(res.data.status) {
                        this.$router.push({ name: 'timeslot' })
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
        updateData: function () {
            let params = {
                id: this.id,
                name: this.slotName,
                time_start: this.startTime,
                time_end: this.endTime,
                shift: this.timeslotShift,
            }
            this.loaded = 0;
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.post('update-timeslot', params)
                .then(res => {
                    if(res.data.status) {
                        this.$router.push({ name: 'timeslot' })
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
