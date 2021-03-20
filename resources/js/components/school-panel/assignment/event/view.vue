<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link :to="{ name: 'AddEvent' }" class="fw-btn-fill btn-gradient-yellow text-white">Add New</router-link>
            </div>
            <h3>Event</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'SchoolMaster' }">School Master</router-link>
                </li>
                <li>Event</li>
            </ul>
        </div>
        <!-- Breadcubs Area End Here -->

        <div class="mg-b-20">
            <div class="row gutters-8">
                <div class="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                    <input type="search" v-model="s" placeholder="Search ..." class="form-control bg-white">
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
                                            <th>Name</th>
                                            <th>Image</th>
                                            <th>Type</th>
                                            <th>Desciption</th>
                                            <th>Dates</th>
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
                                                <router-link :to="{ name: 'EditEvent', params: { id: list.id } }" data-toggle="tooltip" title="Edit"><i class="fa fa-edit"></i> {{ list.name }}</router-link>
                                            </td>
                                            <td>
                                                <div v-if="list.thumb_image">
                                                    <img :src="list.thumb_image" alt="">
                                                </div>
                                                <div v-if="!list.thumb_image">
                                                    Not Available
                                                </div>
                                            </td>
                                            <td>{{ list.type }}</td>
                                            <td>{{ list.short_description }}</td>
                                            <td>
                                                <div style="max-width: 300px; overflow: auto;">
                                                    {{ list.dates ? list.dates.join(" | ") : 'N/A' }}
                                                </div>
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
import api from '../../../../api/script'

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
            loaded: 0,
            subjectId: '',
            token: localStorage.getItem('token')
        }
    },
    mounted() {
        this.title = this.$route.params.role
        this.getRecords();
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
        getRecords(page) {
            if (typeof page === 'undefined') {
               page = 1;
            }
            this.loaded = 0;
            let apiResponse = api.getEvents(page, this.s)
            
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
                      let apiResponse = api.deleteEvents(params)
                      
                      apiResponse
                          .then(res => {
                            this.getRecords();
                            this.$toast.success('Selected record(s) has been deleted.');
                          })
                          .catch(err => {
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
