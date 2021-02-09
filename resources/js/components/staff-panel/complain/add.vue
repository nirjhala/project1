<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link :to="{ name: 'hostel' }" class="fw-btn-fill btn-gradient-yellow text-white">View Complain</router-link>
            </div>
            <h3>{{ !id ? 'Raise' : 'Edit' }} Complain</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'hostel' }">Complain</router-link>
                </li>
                <li>{{ !id ? 'Raise' : 'Edit' }} Complain</li>
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
                            <h3>{{ !id ? 'Raise New' : 'Edit' }} Complain</h3>
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
                            <div class="col-lg-4 col-12 form-group">
                                <label>Type *</label>
                                <select v-model="record.type" class="form-control" required>
                                    <option value="Complain">Complain</option>
                                    <option value="Suggestion">Suggestion</option>
                                </select>
                            </div>
                            <div class="col-lg-4 col-12 form-group">
                                <label>{{ record.type == 'Complain' ? 'Against' : 'For' }} *</label>
                                <select v-model="record.against" class="form-control" required>
                                    <option value="">Select Any Option</option>
                                    <option value="School">School</option>
                                    <option value="Principal">Principal</option>
                                    <option value="Head Master">Head Master</option>
                                    <option value="Teacher">Teacher</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div class="col-lg-4 col-12 form-group" v-if="record.against == 'Teacher'">
                                <label>Select Teacher</label>
                                <select v-model="record.teacher_id" class="form-control" required>
                                    <option value="">Select Teacher</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Subject</label>
                            <input type="text" class="form-control" v-model="record.subject" required>
                        </div>
                        <div class="form-group">
                            <label>Complain / Suggestion</label>
                            <textarea v-model="record.remarks" rows="8" class="form-control" style="height: 200px;" required></textarea>
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
            record: {
                type: 'Complain',
                against: '',
                teacher_id: '',
                subject: '',
                remarks: ''
            },
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
