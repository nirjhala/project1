<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link :to="{ name: 'ViewHoliday' }" class="fw-btn-fill btn-gradient-yellow text-white">View Holiday</router-link>
            </div>
            <h3>{{ !form.id ? 'Add' : 'Edit' }} Holiday</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'ViewHoliday' }">Holiday</router-link>
                </li>
                <li>{{ !form.id ? 'Add' : 'Edit' }} Holiday</li>
            </ul>
        </div>
        <!-- Breadcrumbs Area End Here -->

        <!-- Card Table Area Start Here -->
        <div class="card height-auto">
            <div class="card-body">
                <div class="text-center" v-if="!loaded">
                    <img :src="'img/preloader.gif'" alt="" style="max-width: 100%;">
                </div>
                <div v-if="loaded">
                    <form class="new-added-form" @submit.prevent=" form.id ? updateData() : addData()">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label>Title *</label>
                                    <input type="text" v-model="form.title" class="form-control" required>
                                </div>
                                <div class="row">
                                    <div class="col-xl-6 col-12 form-group">
                                        <label>Session</label>
                                        <select v-model="form.session_id" class="form-control" required>
                                            <option value="">Select Session</option>
                                            <option :value="s.id" v-for="(s, i) in sessions" :key="i">{{ s.session_name }}</option>
                                        </select>
                                    </div>
                                    <div class="col-xl-6 col-12 form-group">
                                        <label>Date *</label>
                                        <input type="date" v-model="form.date" class="form-control" required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Description</label>
                                    <textarea v-model="form.description" class="form-control" style="height: 150px;"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mg-t-8">
                                <button type="submit" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">{{ !form.id ? 'Save' : 'Update' }}</button>
                                <button type="reset" class="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .tox-notification { display: none !important }
</style>
<script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js"></script>
<script>
import Select2 from 'v-select2-component'
import api from '../../../../api/script'
import Editor from '@tinymce/tinymce-vue'

export default {
    components: { Select2, Editor },
    props: ['image_src', 'image'],
    data() {
        return {
            form: {
                id: '',
                title: '',
                date: '',
                description: '',
                session_id: ''
            },
            sessions: [],
            errors: [],
            loaded: 0
        }
    },
    mounted() {
        let params = this.$route.params;

        this.getSessions()
        if (params.id != undefined && params.id != '') {
            this.getInfo(params.id)
        } else {
            this.loaded = 1
        }
    },
    methods: {
        getSessions () {
            let apiResponse = api.getAllSessions()
            apiResponse
                .then (res => {
                    this.sessions = res.data
                })
                .catch (err => {
                    console.log('Errors: ', err)
                })
        },
        getInfo(id) {
            let apiResponse = api.holidayInfo(id)
            apiResponse
                .then(res => {
                    this.loaded         = 1;
                    this.form = res.data
                });
        },
        addData: function() {
            let params = {
                form: this.form
            }
            this.loaded = 0;
            
            let apiResponse = api.addHoliday(params)
            
            apiResponse
                .then(res => {
                    this.$router.push({
                        name: 'ViewHoliday'
                    })
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
                })
                .catch(error => {
                    this.loaded = 1;
                    console.log(error);
                });
        },
        updateData: function() {
            let params = {
                _method: 'PUT',
                form: this.form
            }
            this.loaded = 0;
            let apiResponse = api.updateHoliday(this.form.id, params)
            apiResponse
                .then(res => {
                    if (res.data.status) {
                        this.$router.push({
                                name: 'ViewHoliday'
                            })
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
        }
    }
}
</script>
