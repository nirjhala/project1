<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link :to="{ name: 'vehicle' }" class="fw-btn-fill btn-gradient-yellow text-white">View Vehicle</router-link>
            </div>
            <h3>{{ !id ? 'Add' : 'Edit' }} Vehicle</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'vehicle' }">Vehicle</router-link>
                </li>
                <li>{{ !id ? 'Add' : 'Edit' }} Vehicle</li>
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
                            <h3>{{ !id ? 'Add New' : 'Edit' }} Vehicle</h3>
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
                                <label>Vehicle Number *</label>
                                <input type="text" v-model="vehicleNumber" placeholder="" value="" class="form-control" required>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Type *</label>
                                <select class="form-control" v-model="vechicleType">
                                    <option value="">Select Type</option>
                                    <option value="bus">Bus</option>
                                    <option value="auto">Auto</option>
                                    <option value="taxi">Taxi</option>
                                    <option value="van">Van</option>
                                    <option value="cab">Cab</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>RC Number *</label>
                                <input type="text" v-model="vehicleRc" placeholder="" class="form-control" required>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Driver *</label>
                                <select class="form-control" v-model="driver">
                                    <option value="">Select Driver</option>
                                    <option :value="d.id" v-for="d in drivers">{{ d.name }}</option>
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
            vehicleRc: '',
            vehicleNumber: '',
            vechicleType: '',
            driver: '',
            drivers: [],
            errors: [],
            loaded: 0,
            token: localStorage.getItem('token'),
        }
    },
    mounted() {
        let params          = this.$route.params;
        this.getDrivers();
        if( params.id != undefined && params.id != '' ) {
            this.getInfo( params.id );
        } else {
            this.loaded = 1;
        }
    },
    methods: {
        getDrivers() {
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('get-all-drivers/')
                .then(res => {
                    this.drivers = res.data;
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
            instance.get('get-vehicle-info/'+id)
                 .then( res => {
                     let list = res.data.data;
                     this.id            = list.id;
                     this.vehicleNumber = list.vehicle_no;
                     this.vechicleType  = list.type;
                     this.vehicleRc     = list.vehicle_rc;
                     this.driver        = list.driver;

                     this.loaded = 1;
                     $('.select2').each(function() {
                         $(this).trigger('change');
                     });
                 });
        },
        addData: function () {
            let params = {
                driver: this.driver,
                type: this.vechicleType,
                vehicle_no: this.vehicleNumber,
                vehicle_rc: this.vehicleRc
            }
            this.loaded = 0;
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.post('add-vehicle', params)
                .then(res => {
                    if(res.data.status) {
                        this.$router.push({ name: 'vehicle' })
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
                driver: this.driver,
                type: this.vechicleType,
                vehicle_no: this.vehicleNumber,
                vehicle_rc: this.vehicleRc
            }
            this.loaded = 0;
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.post('update-vehicle', params)
                .then(res => {
                    if(res.data.status) {
                        this.$router.push({ name: 'vehicle' })
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
