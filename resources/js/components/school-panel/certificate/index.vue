<template>
    <div class="dashboard-content-one" style="text-transform: capitialize">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link :to="{ name: 'AddCertificate', params: { type: $route.params.type } }" class="fw-btn-fill btn-gradient-yellow text-white">Add New</router-link>
            </div>
            <h3>{{ $route.params.type }} Certificate</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'CertificateMaster' }">Certificate Master</router-link>
                </li>
                <li>{{ $route.params.type }} Certificate</li>
            </ul>
        </div>
        <!-- Breadcubs Area End Here -->

        <div class="mg-b-20">
            <div class="row gutters-8">
                <div class="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                    <input type="text" v-model="search.s" placeholder="Search ..." class="form-control bg-white">
                </div>
            </div>
        </div>
        <!-- Student Table Area Start Here -->
        <form method="post" @submit.prevent="deleteRecord()">
            <div class="card height-auto">
                <div class="card-body">
                    <div class="text-center" v-if="!loaded">
                        <b-spinner></b-spinner>
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
                                            <th>Certificate No.</th>
                                            <th>Name</th>
                                            <th>Father Name</th>
                                            <th>Mother Name</th>
                                            <th>Class</th>
                                            <th></th>
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
                                            <td>
                                                <router-link 
                                                    :to="{ 
                                                        name: 'EditCertificate', 
                                                        params: { 
                                                            id: list.id,
                                                            type: list.type
                                                        } 
                                                    }" 
                                                    data-toggle="tooltip" 
                                                    title="Edit"
                                                >
                                                    <i class="fa fa-edit"></i> 
                                                    {{ list.sr_no }}
                                                </router-link>
                                            </td>
                                            <td>
                                                {{ list.name }}
                                            </td>
                                            <td>{{ list.father_name }}</td>
                                            <td>{{ list.mother_name }}</td>
                                            <td>{{ list.class }}</td>
                                            <td>
                                                <a 
                                                    :href="`${baseURL}api/${$route.params.type}-certificate/${list.sr_no}`"
                                                    target="_blank"
                                                >
                                                    <i class="icon-print"></i> Print
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <pagination :data="lists" @pagination-change-page="getRecords"></pagination>
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
import api, { multiple_delete_tc, view_sch_certificate, view_tc } from '../../../api/script'

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
                s: ''
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
                    self.check.push( row.id );
                });
            }
        },
        getRecords (page) {
            if (typeof page === 'undefined') {
               page = 1;
            }
            this.loaded = 0;
            view_sch_certificate (`page=${page}&search=${this.search.s}&type=${this.$route.params.type}`)
                .then(res => {
                    this.lists = res.data
                    this.loaded = 1
                })
                .catch(err => {
                    this.loaded = 1
                    console.log(err)
                })
        },
        resetSearch () {
            this.search = {
                s: ''
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
                      
                      multiple_delete_tc(params)
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
        }
    }
}
</script>
