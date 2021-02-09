<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link :to="{ name: 'AddUser', params: { role: title } }" class="fw-btn-fill btn-gradient-yellow text-white">Add New</router-link>
            </div>
            <h3>{{ title }}</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'UserMaster' }">User Master</router-link>
                </li>
                <li>{{ title }}</li>
            </ul>
        </div>
        <!-- Breadcubs Area End Here -->

        <div class="mg-b-20">
            <!-- <div class="row gutters-8">
                <div class="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                    <input type="text" v-model="s" placeholder="Search ..." class="form-control bg-white">
                </div>
            </div> -->
            <div class="row gutters-8 mb-2">
                <div class="col-1-xxxl col-xl-1 col-lg-2 col-12 form-group">
                    <button @click="resetSearch" class="btn btn-block btn-dark d-flex justify-content-center align-items-center" style="height: 45px; font-size: 16px;">All</button>
                </div>
                <div class="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                    <input type="text" v-model="search.s" placeholder="Search by Name, Mobile no., Email, Pincode etc. ..." class="form-control">
                </div>
                <div class="col-lg-2 col-12 form-group">
                    <select v-model.trim="search.gender" class="form-control">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option> 
                        <option value="Female">Female</option> 
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div class="col-lg-2 col-12 form-group">
                    <select v-model.trim="search.state_id" class="form-control">
                        <option value="">Select State</option>
                        <option :value="id" v-for="(name, id) in states" :key="id">{{ name }}</option>
                    </select>
                </div>
                <div class="col-lg-2 col-12 form-group">
                    <select v-model.trim="search.city_id" class="form-control">
                        <option value="">Select City</option>
                        <option :value="id" v-for="(name, id) in cities" :key="id">{{ name }}</option>
                    </select>
                </div>
            </div>
            <b-row class="gutters-8 mb-2">
                <b-col
                    :lg="2"
                    class="form-group"
                    v-for="(cf, index) in custom_fields"
                    :key="index"
                    style="margin-bottom: 2.3rem"
                >
                    <label>{{ cf.type == 'boolean' ? cf.short_name : cf.name }}</label>
                    <select v-model="custom_field[cf.id]" class="form-control" v-if="cf.type == 'relation'" @change="getRecords(1)">
                        <option value="">Select an option</option>
                        <option :value="id" v-for="(name, id) in cf.options" :key="id">{{ name }}</option>
                    </select>
                    <div v-if="cf.type == 'boolean'">
                        <select v-model="custom_field[cf.id]" class="form-control" @change="getRecords(1)">
                            <option value="">Select an option</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </b-col>
            </b-row>
        </div>
        <!-- Student Table Area Start Here -->
        <form method="post" @submit.prevent="deleteRecord()">
            <div class="card height-auto">
                <div class="card-body">
                    <div class="text-center" v-if="!loaded">
                        <img :src="baseURL + 'img/preloader.gif'" alt="" style="max-width: 100%;">
                    </div>
                    <div v-if="loaded">
                        <div class="alert alert-warning" v-if="!lists.data || !lists.data.length">
                            <i class="fa fa-exclamation-circle" ></i>
                            No record(s) found.
                        </div>

                        <div v-if="lists.data && lists.data.length">
                            <div class="heading-layout1">
                                <div class="item-title">
                                    {{ lists.from }} - {{ lists.to }} of {{ lists.total }} record(s) are showing
                                </div>
                                <button type="submit" class="btn btn-link text-dark removeBtn" data-toggle="tooltip" title="Remove"> <i class="fa fa-trash fa-2x"></i> </button>
                            </div>
                            <div class="table-responsive" v-if="lists">
                                <table class="table display data-table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" v-model="allSelected" v-on:click="checkAll()">
                                                    <label class="form-check-label">Sr. No.</label>
                                                </div>
                                            </th>
                                            <th>Name</th>
                                            <th>Image</th>
                                            <th>Mobile No.</th>
                                            <th>Email</th>
                                            <th>State</th>
                                            <th>City</th>
                                            <th>Pincode</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(list, i) in lists.data" v-bind:key="i">
                                            <td>
                                                <div 
                                                    class="form-check"
                                                    v-if="!list.children_count"
                                                >
                                                    <input v-model="check" :key="lists.from + i" :value="list.id" type="checkbox" class="form-check-input">
                                                    <label class="form-check-label">{{ lists.from + i }}.</label>
                                                </div>
                                                <div
                                                    class="form-check"
                                                    v-if="list.children_count"
                                                >
                                                    <input 
                                                        type="checkbox" 
                                                        class="form-check-input" 
                                                        disabled
                                                    >
                                                    <label
                                                        class="form-check-label"
                                                    >{{ lists.from + i }}</label>
                                                </div>
                                            </td>
                                            <td>
                                                <router-link :to="{ name: 'EditUser', params: { id: list.id, role: title } }" data-toggle="tooltip" title="Edit"><i class="fa fa-edit"></i> {{ list.name }}</router-link>
                                                <div
                                                    v-if="list.children_count"
                                                ><small>({{ list.children_count }} students)</small></div>
                                            </td>
                                            <td>
                                                <div v-if="list.media">
                                                    <img :src="list.media.thumb_image" alt="">
                                                </div>
                                                <div v-if="!list.media">
                                                    Not Available
                                                </div>
                                            </td>
                                            <td>{{ list.mobile }}</td>
                                            <td>{{ list.email }}</td>
                                            <td>
                                                <div v-if="list.city_data && list.city_data.state_name">{{ list.city_data.state_name.name }}</div>
                                                <div v-if="!list.city_data || !list.city_data.state_name">&mdash;</div>
                                            </td>
                                            <td>
                                                <div v-if="list.city_data">{{ list.city_data.name }}</div>
                                                <div v-if="!list.city_data">&mdash;</div>
                                            </td>
                                            <td>{{ list.pin_code }}</td>
                                            <td>
                                                <router-link
                                                    :to="{
                                                        name: 'UserDetail', 
                                                        params: {
                                                            role: $route.params.role,
                                                            id: list.id
                                                        } 
                                                    }"
                                                ><i class="icon-eye"></i> Details</router-link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <pagination :data="lists" :limit="2" @pagination-change-page="getRecords"></pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Student Table Area End Here -->
        </form>
    </div>
</template>
<script>
import _ from 'lodash'
import api, { fetchStates, fetchCities, view_custom_fields } from '../../../api/script'

export default {
    data() {
        return {
            title: 'Users',
            errors: 0,
            lists: {},
            allSelected: 0,
            check: [],
            s: '',
            allClasses: [],
            classes: [],
            custom_fields: [],
            loaded: 0,
            subjectId: '',
            search: {
                s: '',
                gender: '',
                state_id: '',
                city_id: ''
            },
            custom_field: {},
            // All Dropdown Data
            states: [],
            cities: [],
            token: localStorage.getItem('token')
        }
    },
    mounted() {
        this.title = this.$route.params.role
        this.getRecords()
        this.getStates()
        this.getCustomFields()
    },
    methods: {
        searchAfterDebounce: _.debounce(
            function () {
                this.getRecords()
            }, 500
        ),
        checkAll() {
            let self = this;
            self.check = [];
            if (!self.allSelected) {
                $.each(self.lists.data, function(i, row) {
                    if(!row.children_count)
                        self.check.push( row.id )
                });
            }
        },
        getRecords(page) {
            if (typeof page === 'undefined') {
               page = 1;
            }
            this.loaded = 0;
            let apiResponse = api.getUsers(page, this.search, this.$route.params.role, this.custom_field)

            console.log(this.search)
            
            apiResponse
                .then(res => {
                    this.lists = res.data
                    this.loaded = 1;
                })
                .catch(err => {
                    this.loaded = 1;
                    console.log(err);
                })
        },
        getStates () {
            fetchStates ()
                .then(res => {
                    this.states = res.data
                })
                .catch(err => {
                    console.log('State Error: ', err)
                })
        },
        getCities (state_id) {
            fetchCities (state_id)
                .then(res => {
                    this.cities = res.data
                })
                .catch(err => {
                    console.log('City Error: ', err)
                })
        },
        getCustomFields () {
            view_custom_fields(this.$route.params.role.toLowerCase(), 'type=search')
                .then(res => {
                    this.custom_fields = res.data
                    res.data.forEach((row, i) => {
                        this.custom_field[row.id] = ''
                    })
                })
                .catch(err => {
                    console.log('Error: ', err)
                })
        },
        resetSearch () {
            this.search = {
                s: '',
                gender: '',
                state_id: '',
                city_id: ''
            }
            this.getRecords()
        },
        deleteRecord() {
            let params = {
                check: this.check
            };
            var parent = $(this).closest('form');
            if( this.check.length > 0 ) {
                swal({
                  title: "Are you sure?",
                  text: "Once deleted, you will not be able to recover this record!",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                .then((willDelete) => {
                  if (willDelete) {
                      this.loaded = 0;
                      let apiResponse = api.deleteUsers(params)
                      
                      apiResponse
                          .then(res => {
                            this.getRecords()
                            this.$toast.success('Selected record(s) has been deleted.')
                          })
                          .catch(err => {
                            this.loaded = 1
                            console.log(err)
                          });
                  }
                });
            } else {
                this.loaded = 1;
                swal("Warning", "Please select at least one record to delete.", "warning")
                return false
            }
        }
    },
    watch: {
        "search.s" () {
            this.searchAfterDebounce()
        },
        "search.gender" () {
            this.getRecords()
        },
        "search.state_id" (state_id) {
            this.getCities(state_id)
            this.getRecords()
        },
        "search.city_id" () {
            this.getRecords()
        }
    }
}
</script>
