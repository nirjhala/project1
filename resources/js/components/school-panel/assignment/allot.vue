<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link :to="{ name: 'AssignmentIssue' }" class="fw-btn-fill btn-gradient-yellow text-white">Add New</router-link>
            </div>
            <h3>Allot Assignment</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'AssignmentMaster' }">Assignment Master</router-link>
                </li>
                <li>Allot Assignment</li>
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

        <b-row>
            <b-col sm="6">
                <b-card
                    header="Unallocated Students"
                >
                    <label>
                        <input type="checkbox" v-model="allocatedCheckAll" value="1">
                        <span>Check All</span>
                    </label>
                    <label class="checkbox-list-item" v-for="(name, id) in student.unallocated" :key="id">
                        <input type="checkbox" v-model="allocated" :value="id">
                        <span>{{ name }}</span>
                    </label>
                    <div class="text-center">
                        <button type="button" class="fw-btn-fill btn-gradient-yellow text-white" @click="allocateAssignemnt">Allocate <i class="icon-long-arrow-right"></i></button>
                    </div>
                </b-card>
            </b-col>
            <b-col sm="6">
                <b-card
                    header="Allocated Students"
                >
                    <label>
                        <input type="checkbox" v-model="unallocatedCheckAll" value="1">
                        <span>Check All</span>
                    </label>
                    <label class="checkbox-list-item" v-for="(name, id) in student.allocated" :key="id">
                        <input type="checkbox" v-model="unallocated" :value="id">
                        <span>{{ name }}</span>
                    </label>
                    <div class="text-center">
                        <button type="button" class="fw-btn-fill btn-gradient-yellow text-white" @click="unallocateAssignemnt"><i class="icon-long-arrow-left"></i> Unallocate</button>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<style>
.checkbox-list-item, .checkbox-list-item input[type=checkbox] + span {
    display: block;
}
.checkbox-list-item input[type=checkbox] {
    display: none;
}
.checkbox-list-item input[type=checkbox] + span {
    padding: 5px 15px;
    border: 1px solid #ccc;
    margin-bottom: 1px;
    cursor: pointer;
    border-radius: 3px;
}
.checkbox-list-item input[type=checkbox]:checked + span {
    background: #042954;
    color: #fff;
}
</style>
<script>
import _ from 'lodash'
import api from '../../../api/script'

export default {
    data() {
        return {
            errors: 0,
            s: '',
            unallocatedCheckAll: null,
            allocatedCheckAll: null,
            allocated: [],
            unallocated: [],
            student: {
                allocated: {},
                unallocated: {}
            }
        }
    },
    mounted() {
        this.title = this.$route.params.role
        this.fetchAllotStudents()
    },
    methods: {
        searchAfterDebounce: _.debounce(
            function () {
                this.getRecords()
            }, 500
        ),
        fetchAllotStudents () {
            let apiResponse = api.fetchAllotStudents( this.$route.params.id )
            apiResponse
                .then(res => {
                    this.student = res.data
                })
                .catch(err => {
                    console.log('Fetch Error: ', err)
                })
        },
        allocateAssignemnt () {
            let apiResponse = api.addAssignmentStudent(this.$route.params.id, this.allocated)
            apiResponse
                .then(res => {
                    this.fetchAllotStudents()
                })
                .catch(err => {
                    console.log('Fetch Error: ', err)
                })
        },
        unallocateAssignemnt () {
            let apiResponse = api.deleteAssignmentStudent(this.$route.params.id, this.unallocated)
            apiResponse
                .then(res => {
                    this.fetchAllotStudents()
                })
                .catch(err => {
                    console.log('Fetch Error: ', err)
                })
        },
        getRecords(page) {
            if (typeof page === 'undefined') {
               page = 1;
            }
            this.loaded = 0;
            let apiResponse = api.fetchAssignments(page, this.s)
            
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
                      let apiResponse = api.deleteAssignments(params)
                      
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
        },
        allocatedCheckAll ( status ) {
            this.allocated = []
            if(status) {
                for(let id in this.student.unallocated) {
                    this.allocated.push(id)
                }
            }
        },
        allocated (row) {
            if(Object.keys(this.student.unallocated).length == this.allocated.length)
                this.allocatedCheckAll = 1
            if(this.allocated.length == 0)
                this.allocatedCheckAll = null
        },
        unallocatedCheckAll ( status ) {
            this.unallocated = []
            if(status) {
                for(let id in this.student.allocated) {
                    this.unallocated.push(id)
                }
            }
        },
        unallocated (row) {
            if(Object.keys(this.student.allocated).length == this.unallocated.length)
                this.unallocatedCheckAll = 1
            if(this.unallocated.length == 0)
                this.unallocatedCheckAll = null
        }
    }
}
</script>
