<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link :to="{ name: 'add-book' }" class="fw-btn-fill btn-gradient-yellow text-white">Add New</router-link>
            </div>
            <h3>Book</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>Book</li>
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
                        <img src="img/preloader.gif" alt="" style="max-width: 100%;">
                    </div>
                    <div v-if="loaded">
                        <div class="heading-layout1">
                            <div class="item-title">
                                <h3>All Book Data</h3>
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
                                        <th>Title</th>
                                        <th>Author</th>
                                        <th>Publisher</th>
                                        <th>Price</th>
                                        <th>Barcode</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(list, i) in lists.data" :key="i">
                                        <td>
                                            <div class="form-check">
                                                <input v-model="check" :key="lists.from + i" :value="list.id" type="checkbox" class="form-check-input">
                                                <label class="form-check-label">{{ lists.from + i }}.</label>
                                            </div>
                                        </td>
                                        <td>
                                            <router-link :to="{ path: 'book/edit/'+list.id, params: list }" data-toggle="tooltip" title="Edit"><i class="fa fa-edit"></i> {{ list.title }}</router-link><br>
                                            <small v-if="list.subtitle">({{ list.subtitle }})</small>
                                        </td>
                                        <td>{{ list.author }}</td>
                                        <td>{{ list.publisher }}</td>
                                        <td>{{ list.price }}</td>
                                        <td>
                                          <div class="d-inline-block text-center">
                                            <div>
                                              <img :src="list.barcode_image" alt="">
                                            </div>
                                            <div style="letter-spacing: 5px; font-size: 8px; margin: 2px 0;">
                                              {{ list.barcode }}
                                            </div>
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
        this.getAllClasses();
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
        assignClass() {
            let classes = this.classes,
                book = this.bookId;

            this.loaded = 0;
            let params = {
                classes: classes,
                bookId: book
            };
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.post('assign-book-class', params)
                 .then(res => {
                     this.loaded = 1;
                     $('#classModal').modal('hide');
                     this.getRecords(1);
                 });
        },
        showClassPop(id, classes) {
            this.bookId = id;
            let classArr   = [];
            $(classes).each(function(i, row) {
                classArr.push( row.class );
            });
            this.classes = classArr;
            $('#classModal').modal('show');
        },
        getAllClasses() {
            this.loaded = 0;
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('get-all-classes')
                 .then(res => {
                     this.loaded = 1;
                     this.allClasses = res.data;
                 });
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
            instance.get('book/search/?page='+page+'&s='+s)
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
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('book/?page='+page)
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
                      instance.post('remove-book', params)
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
