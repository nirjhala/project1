<template>
    <div class="dashboard-content-one" style="text-transform: capitialize">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <h3>Exam Type</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'ExamMaster' }">Exam Master</router-link>
                </li>
                <li>Exam Type</li>
            </ul>
        </div>
        <!-- Breadcubs Area End Here -->
        
        <div
            class="alert alert-success"
            v-if="success"
        >{{ success }}</div>

        <b-card
            class="h-auto"
        >
            <template #header>
                {{ $route.params.id ? 'Edit' : 'Add' }} Exam Type
            </template>
            <b-form
                method="post"
                @submit.prevent="saveData"
            >
                <b-row>
                    <b-form-group
                        label="Name *"
                        class="col-sm-3"
                    >
                        <b-input
                            placeholder="Enter Name *"
                            v-model.trim="$v.name.$model"
                            :class="{
                                'is-invalid': $v.name.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please fill required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-3 col-lg-2"
                    >
                        <label for="">&nbsp;</label>
                        <b-button
                            type="submit"
                            class="fw-btn-fill btn-gradient-yellow text-white router-link-active"
                            block
                        >{{ $route.params.id ? 'Update' : 'Save' }}</b-button>
                    </b-form-group>
                </b-row>
            </b-form>
        </b-card>

        <div class="mg-b-20">
            <div class="row gutters-8">
                <div class="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                    <input 
                        type="search" 
                        v-model.trim="search.s" 
                        placeholder="Search ..." 
                        class="form-control bg-white"
                    >
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
                                                        name: 'EditExamType', 
                                                        params: { 
                                                            id: list.id,
                                                            type: list.type
                                                        } 
                                                    }" 
                                                    data-toggle="tooltip" 
                                                    title="Edit"
                                                >
                                                    <i class="fa fa-edit"></i> 
                                                    {{ list.name }}
                                                </router-link>
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
import { required } from 'vuelidate/lib/validators'
import api, { add_exam_type, edit_exam_type, multiple_delete_tc, show_exam_type, view_exam_type } from '../../../api/script'

export default {
    data() {
        return {
            name: '',
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
            success: null,
            // All Dropdown Data
            states: [],
            cities: [],
            token: localStorage.getItem('token')
        }
    },
    validations() {
        return {
            name: {
                required
            }
        }
    },
    mounted() {
        this.routeLoading()
    },
    methods: {
        searchAfterDebounce: _.debounce(
            function () {
                this.getRecords()
            }, 500
        ),
        routeLoading () {
            this.getRecords()
        },
        saveData () {
            this.$v.$touch();
            let apiResponse
            this.success = ''
            if(!this.$v.$anyError) {
                let params = { name: this.name }
                if(!this.$route.params.id) {
                    apiResponse = add_exam_type (params)
                } else {
                    apiResponse = edit_exam_type (this.$route.params.id, params)
                }

                apiResponse
                    .then(res => {
                        this.success = res.data.message
                        this.name = ''
                        this.$v.$reset()

                        if(this.$route.params.id) {
                            this.$router.push({
                                name: 'ExamType'
                            })
                        }

                        this.getRecords(1)

                    })
                    .catch(err => {
                        console.log('Errors: ', err)
                    })
            }
        },
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
            if(this.$route.params.id) {
                show_exam_type (this.$route.params.id)
                    .then(res => {
                        this.name = res.data.name
                    })
            }

            if (typeof page === 'undefined') {
               page = 1;
            }
            this.loaded = 0;
            view_exam_type (`page=${page}&search=${this.search.s}`)
                .then(res => {
                    this.lists = res.data.types
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
        },
        "$route.params.id" () {
            this.routeLoading()
        }
    }
}
</script>
