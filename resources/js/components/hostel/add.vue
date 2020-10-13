<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link :to="{ name: 'hostel' }" class="fw-btn-fill btn-gradient-yellow text-white">View Hostel</router-link>
            </div>
            <h3>{{ !id ? 'Add' : 'Edit' }} Hostel</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'hostel' }">Hostel</router-link>
                </li>
                <li>{{ !id ? 'Add' : 'Edit' }} Hostel</li>
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
                            <h3>{{ !id ? 'Add New' : 'Edit' }} Hostel</h3>
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
                                <input type="text" v-model="hostelName" placeholder="" value="" class="form-control" required>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>No. of Rooms *</label>
                                <input type="number" min="1" v-model="noOfRooms" placeholder="" value="1" class="form-control" required>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Room Cost *</label>
                                <input type="number" min="0" v-model="roomCost" placeholder="" value="0" class="form-control" required>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Capacity *</label>
                                <input type="number" min="0" v-model="capacity" placeholder="" value="0" class="form-control" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <textarea v-model="description" rows="8" class="form-control" style="height: 200px;" required></textarea>
                        </div>
                        <div class="form-group">
                            <label>Address</label>
                            <textarea v-model="address" rows="8" class="form-control" style="height: 200px;" required></textarea>
                        </div>
                        <div class="row">
                            <div class="col-xl-4 col-12 form-group">
                                <label>State *</label>
                                <select class="form-control" v-model="state" v-on:change="getCities()" required>
                                    <option value="">Select State</option>
                                    <option :value="s.id" v-for="s in states" :key="s.id">{{ s.name }}, {{ s.country_name.name }}</option>
                                </select>
                            </div>
                            <div class="col-xl-4 form-group">
                                <label>City *</label>
                                <select class="form-control" v-model="city" required>
                                    <option value="">Select City</option>
                                    <option :value="s.id" v-for="s in cities" :key="s.id">{{ s.name }}</option>
                                </select>
                            </div>
                            <div class="col-xl-4 col-12 form-group">
                                <label>Pincode *</label>
                                <input type="tel" v-model="pincode" class="form-control" required>
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
            hostelName: '',
            noOfRooms: '',
            roomCost: '',
            capacity: '',
            description: '',
            address: '',
            state: '',
            city: '',
            pincode: '',
            errors: [],
            states: [],
            cities: [],
            pincodes: [],
            loaded: 0,
            token: localStorage.getItem('token'),
        }
    },
    mounted() {
        let params          = this.$route.params;
        this.getStates();
        if( params.id != undefined && params.id != '' ) {
            this.getInfo( params.id );
        } else {
            this.loaded = 1;
        }
    },
    methods: {
        getPincodes() {
            let city = this.city,
                params = {
                    id: city
                };
                let instance = axios.create({
                    baseURL: this.apiBaseUrl,
                    headers: {
                        'Authorization': 'Bearer '+this.token,
                        'Accept': 'application/json'
                    }
                });
                instance.post('get-pincodes-by-city', params)
                 .then(res => {
                     this.pincodes = res.data;
                 });
        },
        getCities() {
            let state = this.state,
                params = {
                    id: state
                };
                let instance = axios.create({
                    baseURL: this.apiBaseUrl,
                    headers: {
                        'Authorization': 'Bearer '+this.token,
                        'Accept': 'application/json'
                    }
                });
                instance.post('get-cities-by-state', params)
                 .then(res => {
                     this.cities = res.data;
                 });
        },
        getStates() {
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('get-all-states')
                .then(res => {
                    this.states = res.data;
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
            instance.get('get-hostel-info/'+id)
                 .then( res => {
                     let list = res.data.data;
                     
                     this.id            = list.id;
                     this.hostelName    = list.name;
                     this.noOfRooms     = list.total_rooms;
                     this.roomCost      = list.cost;
                     this.capacity      = list.capacity;
                     this.description   = list.description;
                     this.address       = list.address;
                     this.state         = list.city_name ? list.city_name.state : '';
                     this.city          = list.city_id;
                     this.pincode       = list.pincode;
                    
                     if(list.city_name) {
                         this.getCities( this.state );
                     }

                     this.loaded = 1;
                     $('.select2').each(function() {
                         $(this).trigger('change');
                     });
                 });
        },
        addData: function () {
            let params = {
                name: this.hostelName,
                total_rooms: this.noOfRooms,
                cost: this.roomCost,
                capacity: this.capacity,
                description: this.description,
                address: this.address,
                city_id: this.city,
                pincode: this.pincode,
            }
            this.loaded = 0;
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.post('add-hostel', params)
                .then(res => {
                    if(res.data.status) {
                        this.$router.push({ name: 'hostel' })
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
                name: this.hostelName,
                total_rooms: this.noOfRooms,
                cost: this.roomCost,
                capacity: this.capacity,
                description: this.description,
                address: this.address,
                city_id: this.city,
                pincode: this.pincode,
            }
            this.loaded = 0;
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.post('update-hostel', params)
                .then(res => {
                    if(res.data.status) {
                        this.$router.push({ name: 'hostel' })
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
