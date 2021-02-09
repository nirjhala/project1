<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <h3>Menu</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'SchoolMaster' }">School Master</router-link>
                </li>
                <li>Menu</li>
            </ul>
        </div>
        <!-- Breadcubs Area End Here -->
        
        <div class="card height-auto" v-if="!loaded">
            <div class="card-body">
                <div class="text-center">
                    <img :src="baseURL + 'img/preloader.gif'" alt="" style="max-width: 100%;">
                </div>
            </div>
        </div>
        <div v-if="loaded">
            <b-row>
                <b-col sm="4">
                    <b-card
                        header="Add Menu"
                    >
                        <form method="post" @submit.prevent="addMenu">
                            <b-form-group
                                label="Select Menu Location"
                            >
                                <label>
                                    <input type="radio" v-model="form.type" value="External">
                                    External Link
                                </label>
                                <label>
                                    <input type="radio" v-model="form.type" value="Page">
                                    Page
                                </label>
                            </b-form-group>
                            <b-form-group
                                label="Select Page"
                                v-if="form.type == 'Page'"
                            >
                                <select v-model="form.p_id" class="form-control" required>
                                    <option value="">Select Page</option>
                                    <option :value="id" v-for="(title, id) in pages" :key="id">{{ title }}</option>
                                </select>
                            </b-form-group>
                            <b-form-group
                                label="Enter Link"
                                v-if="form.type != 'Page'"
                            >
                                <input v-model="form.link" type="text" class="form-control" placeholder="Link / URL" required>
                            </b-form-group>
                            <b-form-group
                                label="Label"
                            >
                                <input v-model="form.label" type="text" class="form-control" placeholder="Label" required>
                            </b-form-group>
                            <b-form-group>
                                <label>Menu Locations</label>
                                <div v-for="(m, i) in menu" :key="i">
                                    <label>
                                        <input v-model="menu_locations" type="checkbox" :value="m.id" />
                                        {{ m.name }}
                                    </label>
                                </div>
                            </b-form-group>
                            <b-form-group>
                                
                            </b-form-group>
                            <button type="submit" class="btn-fill-lg btn-block btn-gradient-yellow btn-hover-bluedark">
                                Save
                            </button>
                        </form>
                    </b-card>
                </b-col>
                <b-col sm="8">
                    <b-card no-body>
                        <b-tabs card>
                            <b-tab :title="m.name" v-for="(m, i) in menu" :key="i">
                                <div v-if="!m.menu.length">
                                    No menu added yet.
                                </div>
                                <div v-if="m.menu.length">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Menu Name</th>
                                                <th>Link</th>
                                            </tr>
                                        </thead>
                                        <tbody v-sortable>
                                            <tr v-for="(link, j) in m.menu" :key="j">
                                                <td>{{ j + 1 }}</td>
                                                <td>
                                                    <div>{{ link.label }}</div>
                                                    <b-button
                                                        type="button"
                                                        variant="link"
                                                        class="text-danger m-0 p-0"
                                                        @click="deleteMenu(link.id)"
                                                    >Remove</b-button>
                                                </td>
                                                <td>
                                                    {{ link.link ? link.link : link.page.slug }}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </b-tab>
                        </b-tabs>
                    </b-card>
                </b-col>
            </b-row>
            
        </div>
    </div>
</template>
<script>
import _ from 'lodash'
import api from '../../../api/script'
export default {
    data() {
        return {
            form: {
                id: '',
                type: 'Page',
                p_id: '',
                ml_id: '',
                label: '',
                link: ''
            },
            title: 'Users',
            errors: 0,
            lists: {},
            allSelected: 0,
            check: [],
            menu_locations: [],
            menu: [],
            pages: {},
            loaded: 0,
            token: localStorage.getItem('token')
        }
    },
    mounted() {
        this.title = this.$route.params.role
        this.getMenu();
        this.getPages();
    },
    methods: {
        searchAfterDebounce: _.debounce(
            function () {
                this.getRecords()
            }, 500
        ),
        getPages() {
            let apiResponse = api.getAllPages()
            apiResponse
                .then(res => {
                    this.pages = res.data
                })
                .catch(err => {
                    console.log('Errors: ', err)
                })
        },
        getMenu () {
            let apiResponse = api.fetchMenu()
            apiResponse
                .then(res => {
                    this.menu = res.data
                    this.loaded = 1
                })
        },
        deleteMenu (id) {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this record!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    api.deleteMenu(id)
                        .then(res => {
                            this.$toast.success(res.data.message)
                            this.getMenu()
                        })
                }
            })
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
        addMenu () {
            let self = this
            let params = {
                form: this.form,
                menu_locations: this.menu_locations
            }
            let apiResponse = api.insertMenu(params)
            apiResponse
                .then(res => {
                    self.form = {
                        id: '',
                        type: 'Page',
                        p_id: '',
                        ml_id: '',
                        label: '',
                        link: ''
                    }
                    this.getMenu()
                })
                .catch(err => {
                    console.log('Errors:', err)
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
                      let apiResponse = api.deleteMenus(params)
                      
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
        "form.p_id" (id) {
            this.form.label = this.pages[id]
        }
    }
}
</script>
