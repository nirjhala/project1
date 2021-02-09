<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link :to="{ name: 'subject' }" class="fw-btn-fill btn-gradient-yellow text-white">View Subject</router-link>
            </div>
            <h3>{{ !id ? 'Add' : 'Edit' }} Subject</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'subject' }">Subject</router-link>
                </li>
                <li>{{ !id ? 'Add' : 'Edit' }} Subject</li>
            </ul>
        </div>
        <!-- Breadcrumbs Area End Here -->

        <!-- Student Table Area Start Here -->
        <div class="card height-auto">
            <div class="card-body">
                <div class="text-center" v-if="!loaded">
                    <img :src="'img/preloader.gif'" alt="" style="max-width: 100%;">
                </div>
                <div v-if="loaded">
                    <div class="heading-layout1">
                        <div class="item-title">
                            <h3>{{ !id ? 'Add New' : 'Edit' }} Subject</h3>
                        </div>
                    </div>
                    <form @submit.prevent=" id ? updateData() : addData()">
                        <div class="alert alert-danger" v-if="errors.length">
                            <ul class="mb-0">
                                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                            </ul>
                        </div>
                        <input type="hidden" v-model="id" value="">
                        <div class="row">
                            <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Name *</label>
                                <input 
                                    type="text" 
                                    v-model="$v.subjectName.$model" 
                                    placeholder="like Hindi, English, Maths etc." 
                                    class="form-control"
                                    :class="{
                                        'is-invalid': $v.subjectName.$error
                                    }"
                                >
                                <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group mg-t-8">
                                <button type="submit" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">{{ !id ? 'Save' : 'Update' }}</button>
                                <button type="reset" class="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Student Table Area End Here -->
    </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            id: '',
            subjectName: '',
            errors: [],
            loaded: 0,
            token: localStorage.getItem('token')
        }
    },
    validations: {
        subjectName: {
            required
        }
    },
    mounted() {
        let params = this.$route.params;

        if( params.id != undefined && params.id != '' ) {
            this.getInfo( params.id );
        } else {
            this.loaded = 1;
        }
    },
    methods: {
        getInfo(id) {
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('get-subject-info/'+id)
                 .then( res => {
                     this.id            = res.data.data.id;
                     this.subjectName   = res.data.data.name;

                     this.loaded        = 1;

                     $('.select2').each(function() {
                         $(this).trigger('change');
                     });
                 });
        },
        addData: function () {
            this.$v.$touch()
            if(!this.$v.$anyError) {
                let params = {
                    name: this.subjectName,
                }
                this.loaded = 0;
                let instance = axios.create({
                    baseURL: this.apiBaseUrl,
                    headers: {
                        'Authorization': 'Bearer '+this.token,
                        'Accept': 'application/json'
                    }
                });
                instance.post('add-subject', params)
                    .then(res => {
                        if(res.data.status) {
                            this.$router.push({ name: 'subject' })
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
        },
        updateData: function () {
            this.$v.$touch()
            if(!this.$v.$anyError) {
                let params = {
                    id: this.id,
                    name: this.subjectName,
                }
                this.loaded = 0;
                let instance = axios.create({
                    baseURL: this.apiBaseUrl,
                    headers: {
                        'Authorization': 'Bearer '+this.token,
                        'Accept': 'application/json'
                    }
                });
                instance.post('update-subject', params)
                    .then(res => {
                        if(res.data.status) {
                            this.$router.push({ name: 'subject' })
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
        },
    }
}
</script>
