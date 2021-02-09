<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link :to="{ name: 'session' }" class="fw-btn-fill btn-gradient-yellow text-white">View Session</router-link>
            </div>
            <h3>{{ !sessionId ? 'Add' : 'Edit' }} Session</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'session' }">Session</router-link>
                </li>
                <li>{{ !sessionId ? 'Add' : 'Edit' }} Session</li>
            </ul>
        </div>
        <!-- Breadcubs Area End Here -->

        <!-- Student Table Area Start Here -->
        <div class="card height-auto">
            <div class="card-body">
                <div class="text-center" v-if="!loaded">
                    <img :src="'img/preloader.gif'" alt="" style="width: 100%;">
                </div>
                <div v-if="loaded">
                    <div class="heading-layout1">
                        <div class="item-title">
                            <h3>{{ !$route.params.id ? 'Add New' : 'Edit' }} Session</h3>
                        </div>
                       <div class="dropdown">
                            <a class="dropdown-toggle" href="#" role="button"
                            data-toggle="dropdown" aria-expanded="false">...</a>

                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#"><i class="fas fa-times text-orange-red"></i>Close</a>
                                <a class="dropdown-item" href="#"><i class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                <a class="dropdown-item" href="#"><i class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                            </div>
                        </div>
                    </div>
                    <form class="new-added-form" @submit.prevent=" $route.params.id ? updateData() : addSession()">
                        <div class="alert alert-danger" v-if="errors.length">
                            <ul class="mb-0">
                                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                            </ul>
                        </div>
                        <input type="hidden" v-model="sessionId" value="">
                        <div class="row">
                            <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Starting Year *</label>
                                <select 
                                    v-model="$v.startYear.$model" 
                                    class="form-control select2"
                                    :class="{
                                        'is-invalid': $v.startYear.$error
                                    }"
                                    @change="updateSessionName"
                                >
                                    <option value="">Please Select Year *</option>
                                    <option :value="y" v-for="y in years" :key="y">{{ y }}</option>
                                </select>
                                <b-form-invalid-feedback>Please select starting year.</b-form-invalid-feedback>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Session Name *</label>
                                <input 
                                    type="text" 
                                    v-model.trim="$v.sessionName.$model" 
                                    placeholder="20__-__" 
                                    value="" 
                                    class="form-control"
                                    :class="{
                                        'is-invalid': $v.sessionName.$error
                                    }"
                                    readonly
                                >
                                <b-form-invalid-feedback v-if="!$v.sessionName.required">Please enter session name.</b-form-invalid-feedback>
                            </div>
                            <!-- <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Start Month *</label>
                                <select 
                                    v-model.trim="$v.startMonth.$model" 
                                    class="form-control select2"
                                    :class="{
                                        'is-invalid': $v.startMonth.$error
                                    }"
                                >
                                    <option value="">Please Select Month *</option>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">Octomber</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                                <b-form-invalid-feedback>Please select starting month.</b-form-invalid-feedback>
                            </div> -->
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mg-t-8">
                                <button type="submit" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">{{ !sessionId ? 'Save' : 'Update' }}</button>
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
import { required } from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            sessionId: '',
            sessionName: '',
            startYear: '',
            startMonth: 1,
            errors: [],
            years: [],
            loaded: 0,
            token: localStorage.getItem('token')
        }
    },
    validations: {
        sessionName: {
            required
        },
        startYear: {
            required
        },
        startMonth: {
            required
        }
    },
    mounted() {
        let params          = this.$route.params;

        if( params.id != undefined && params.id != '' ) {
            this.getInfo( params.id );
        } else {
            this.loaded = 1;
        }

        var d = new Date();
        var n = d.getFullYear();
        for( let year = n; year >= n - 50; year-- ) {
            this.years.push( year );
        }

        /*-------------------------------------
              Select 2 Init
          -------------------------------------*/
        if ($.fn.select2 !== undefined) {
            $('.select2').select2({
                width: '100%'
            });
        }
    },
    methods: {
        updateSessionName () {
            let endYear = (parseInt(this.startYear) + 1).toString();
            endYear = endYear.slice(-2)
            this.sessionName = `${this.startYear}-${endYear}`
        },
        getInfo(id) {
            this.loaded = 0;

            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });

            instance.get('get-session-info/'+id)
                 .then( res => {
                     this.sessionId    = res.data.data.id;
                     this.sessionName  = res.data.data.session_name;
                     this.startYear    = res.data.data.session_start_year;
                     this.startMonth   = res.data.data.session_start_month;
                     this.loaded       = 1;
                     $('.select2').each(function() {
                         $(this).trigger('change');
                     });
                 });
        },
        addSession: function () {
            this.$v.$touch()

            if(!this.$v.$anyError) {
                let params = {
                    session_name: this.sessionName,
                    session_start_year: this.startYear,
                    session_start_month: this.startMonth,
                }
                this.loaded = 0;
                let instance = axios.create({
                    baseURL: this.apiBaseUrl,
                    headers: {
                        'Authorization': 'Bearer '+this.token,
                        'Accept': 'application/json'
                    }
                });
                instance.post('add-session', params)
                    .then(res => {
                        if(res.data.status) {
                            this.$router.push({ name: 'session' })
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
            }
        },
        updateData: function () {
            this.$v.$touch()

            if(!this.$v.$anyError) {
                let params = {
                    id: this.sessionId,
                    session_name: this.sessionName,
                    session_start_year: this.startYear,
                    session_start_month: this.startMonth,
                }
                this.loaded = 0;
                let instance = axios.create({
                    baseURL: this.apiBaseUrl,
                    headers: {
                        'Authorization': 'Bearer '+this.token,
                        'Accept': 'application/json'
                    }
                });
                instance.post('update-session', params)
                    .then(res => {
                        if(res.data.status) {
                            this.$router.push({ name: 'session' })
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
            }
        },
    }
}
</script>
