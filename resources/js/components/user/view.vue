<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link :to="{ name: 'add-user' }" class="fw-btn-fill btn-gradient-yellow text-white">Add New</router-link>
            </div>
            <h3>User</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>User</li>
            </ul>
        </div>
        <!-- Breadcubs Area End Here -->

        <div class="mg-b-20">
            <div class="row gutters-8">
                <div class="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                    <input type="text" v-model="s" placeholder="Search ..." class="form-control bg-white">
                </div>
            </div>
        </div>
        <!-- Student Table Area Start Here -->
        <form method="post" @submit.prevent="deleteRecord()">
            <div class="card height-auto">
                <div class="card-body">
                    <div class="text-center" v-if="!loaded">
                        <img src="img/preloader.gif" alt="" style="max-width: 100%;">
                    </div>
                    <div v-if="loaded">
                        <div class="heading-layout1">
                            <div class="item-title">
                                <h3>All User Data</h3>
                            </div>
                            <button type="submit" class="btn btn-link text-dark removeBtn" data-toggle="tooltip" title="Remove"> <i class="fa fa-trash fa-2x"></i> </button>
                        </div>

                        <div class="alert alert-warning" v-if="!lists">
                            <i class="fa fa-exclamation-circle" ></i>
                            No record(s) found.
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
                                        <th>Role</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Mobile No.</th>
                                        <th>Email</th>
                                        <th>State</th>
                                        <th>City</th>
                                        <th>Pincode</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(list, i) in lists.data" v-bind:key="i">
                                        <td>
                                            <div class="form-check">
                                                <input v-model="check" :key="lists.from + i" :value="list.id" type="checkbox" class="form-check-input">
                                                <label class="form-check-label">{{ lists.from + i }}.</label>
                                            </div>
                                        </td>
                                        <td><strong>{{ list.role_name.name }}</strong></td>
                                        <td>
                                            <router-link :to="{ path: 'edit-user/'+list.id, params: list }" data-toggle="tooltip" title="Edit"><i class="fa fa-edit"></i> {{ list.name }}</router-link>
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
                                    </tr>
                                </tbody>
                            </table>
                            <pagination :data="lists" @pagination-change-page="getRecords"></pagination>
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

export default {
    data() {
        return {
            errors: 0,
            lists: {},
            allSelected: 0,
            check: [],
            s: '',
            allClasses: [],
            classes: [],
            loaded: 0,
            subjectId: '',
            token: localStorage.getItem('token')
        }
    },
    mounted() {
        this.getRecords();
    },
    methods: {
        searchAfterDebounce: _.debounce(
            function () {
                this.searchData()
            }, 500
        ),
        checkAll() {
            let self = this;
            self.check = [];
            if (!self.allSelected) {
                $.each(self.lists.data, function(i, row) {
                    self.check.push( row.id );
                });
            }
        },
        searchData(page) {
            let s = this.s;
            if (typeof page === 'undefined') {
               page = 1;
            }
            this.loaded = 0;
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('search-user/?page='+page+'&s='+s)
                .then(res => {
                    this.loaded = 1;

                    if(res.status) {
                        this.lists  = res.data.data;
                    } else {
                        this.errors = 1;
                    }
                }).catch(err => {
                    this.loaded = 1;
                    console.log(err);
                });
        },
        getRecords(page) {
            if (typeof page === 'undefined') {
               page = 1;
            }
            this.loaded = 0;
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('view-user/?page='+page)
                .then(res => {

                    console.log(res.data.data);
                    if(res.status) {
                        this.lists = res.data.data;

                        let listArr = res.data.data.data
                        console.log(listArr[0].media.image);
                        // this.lists.pincode_data = res.data.data;
                    } else {
                        this.errors = 1;
                    }
                    this.loaded = 1;
                }).catch(err => {
                    this.loaded = 1;
                    console.log(err);
                });
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
                      let instance = axios.create({
                          baseURL: this.apiBaseUrl,
                          headers: {
                              'Authorization': 'Bearer '+this.token,
                              'Accept': 'application/json'
                          }
                      });
                      instance.post('remove-user', params)
                          .then(res => {
                              if(res.status) {
                                  this.getRecords();
                                  this.$toast.success('Selected record(s) has been deleted.');
                              } else {
                                  this.loaded = 1;
                                  this.$toast.warning('Record(s) unable to delete.');
                              }
                          }).catch(err => {
                              this.loaded = 1;
                              console.log(err);
                          });
                  }
                });
            } else {
                this.loaded = 1;
                swal("Warning", "Please select at least one record to delete.", "warning");
                return false;
            }
        }
    },
    watch: {
        s: function (val) {
            this.searchAfterDebounce()
        }
    }
}
</script>
