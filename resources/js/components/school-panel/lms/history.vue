<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link :to="{ name: 'add-book' }" class="fw-btn-fill btn-gradient-yellow text-white">Add New</router-link>
            </div>
            <h3>Issue History</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>Issue History</li>
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

        <!-- Book Table Area Start Here -->
        <form method="post" @submit.prevent=" deleteRecord() ">
            <div class="card height-auto">
                <div class="card-body">
                    <div class="text-center" v-if="!loaded">
                        <img :src="baseURL+'img/preloader.gif'" alt="" style="max-width: 100%;">
                    </div>
                    <div v-if="loaded">
                        <div class="heading-layout1">
                            <div class="item-title">
                                <h3>Issue History</h3>
                            </div>
                            <button type="submit" class="btn btn-link text-dark removeBtn" data-toggle="tooltip" title="Remove"> <i class="fa fa-trash fa-2x"></i> </button>
                        </div>

                        <div class="alert alert-warning" v-if="!lists.data">
                            <i class="fa fa-exclamation-circle" ></i>
                            No record(s) found.
                        </div>
                        <div class="table-responsive" v-if="lists.data">
                            <table class="table display data-table text-nowrap">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Contact</th>
                                        <th>Type</th>
                                        <th>Book Details</th>
                                        <th>Issue Date</th>
                                        <th>Submit Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(list, i) in lists.data" :key="lists.from + i">
                                        <td>{{ list.user.name }}</td>
                                        <td>{{ list.user.mobile }} <span v-if="list.user.mobile2">, {{ list.user.mobile2 }}</span></td>
                                        <td>{{ list.user.type }}</td>
                                        <td>{{ list.book.title }}</td>
                                        <td>{{ list.created_at }}</td>
                                        <td>{{ list.submission_date ? list.submission_date : '-' }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <pagination :data="lists" @pagination-change-page="getRecords"></pagination>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Book Table Area End Here -->
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
            bookId: '',
            token: localStorage.getItem('token'),
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
            instance.get('lms/book/search-issue-history/?page='+page+'&s='+s)
                .then(res => {
                    this.loaded = 1;
                    if(res.status) {
                        this.lists  = res.data;
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
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('lms/book/issue-history/?page='+page)
                .then(res => {
                    this.loaded = 1;
                    if(res.status) {
                        this.lists  = res.data;
                    } else {
                        this.errors = 1;
                    }
                }).catch(err => {
                    this.loaded = 1;
                    console.log(err);
                });
        }
    },
    watch: {
        s: function (val) {
            this.searchAfterDebounce()
        }
    }
}
</script>
