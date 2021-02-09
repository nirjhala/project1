<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'ViewOnlineClass'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >View Online Class</router-link>
            </div>
            <h3>{{ !$route.params.id ? 'Add' : 'Edit' }} Online Class</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'OnlineClassMaster' }">Online Class Master</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'ViewOnlineClass' }">Online Class</router-link>
                </li>
                <li>{{ !$route.params.id ? 'Add' : 'Edit' }} Online Class</li>
            </ul>
        </div>
        <!-- Breadcrumbs Area End Here -->

        <!-- Card Table Area Start Here -->
        <b-card
            :title="!$route.params.id ? `Create Online Class` : `Edit Online Class`"
            class="h-auto"
        >
            <b-form
                method="post"
                @submit.prevent="saveData"
            >
                <b-row>
                    <b-form-group
                        label="Department *"
                        class="col-sm-4"
                    >
                        <select
                            class="form-control"
                            v-model="department_id"
                            @change="fetch_classes"
                        >
                            <option value="">Select Department</option>
                            <option 
                                :value="id"
                                v-for="(name, id) in departments"
                                :key="id"
                            >{{ name }}</option>
                        </select>
                    </b-form-group>
                    <b-form-group
                        label="Class *"
                        class="col-sm-4"
                    >
                        <select
                            class="form-control"
                            v-model="$v.form.class_id.$model"
                            @change="fetch_subjects"
                        >
                            <option value="">Select Class</option>
                            <option 
                                :value="id"
                                v-for="(name, id) in classes"
                                :key="id"
                            >{{ name }}</option>
                        </select>
                    </b-form-group>
                    <b-form-group
                        label="Select Subject"
                        class="col-sm-4"
                    >
                        <select
                            v-model="$v.form.subject_id.$model"
                            class="form-control"
                            :class="{
                                'is-invalid': $v.form.subject_id.$error
                            }"
                            @change="fetch_teachers"
                        >
                            <option value="">Select Name</option>
                            <option 
                                :value="id"
                                v-for="(name, id) in subjects"
                                :key="id"
                            >{{ name }}</option>
                        </select>
                        <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                    >
                        <a href="javascript:" class="float-right" @click="genOnlineId">Regenerate</a>
                        <label>Online Class ID</label>
                        <b-input
                            v-model.trim="form.room_unique_id"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="Select Teacher"
                        class="col-sm-4"
                    >
                        <select
                            class="form-control"
                            v-model="$v.form.user_id.$model"
                            :class="{
                                'is-invalid': $v.form.user_id.$error
                            }"
                        >
                            <option value="">Select Teacher</option>
                            <option 
                                :value="id"
                                v-for="(name, id) in teachers"
                                :key="id"
                            >{{ name }}</option>
                        </select>
                    </b-form-group>
                    <b-form-group
                        label="From Time"
                        class="col-sm-2"
                    >
                        <b-input
                            type="time"
                            placeholder="From Time"
                            v-model.trim="$v.form.sch_time_from.$model"
                            :class="{
                                'is-invalid': $v.form.sch_time_from.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        label="To Time"
                        class="col-sm-2"
                    >
                        <b-input
                            type="time"
                            placeholder="To Time"
                            v-model="$v.form.sch_time_upto.$model"
                            :class="{
                                'is-invalid': $v.form.sch_time_upto.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                    </b-form-group>
                </b-row>
                <button
                    type="submit"
                    class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                >{{ $route.params.id ? 'Update' : 'Save' }}</button>
                <button
                    type="reset"
                    class="btn-fill-lg bg-blue-dark btn-hover-yellow"
                >Reset</button>
            </b-form>
        </b-card>
    </div>
</template>
<style scoped>
label {
    text-transform: capitalize;
}
</style>
<script>
    import { required } from 'vuelidate/lib/validators'
    import { add_online_class, fetchClasses, fetchDepartments, fetchSubjects, view_teachers } from '../../../api/script'

    export default {
        data() {
            return {
                department_id: '',
                form: {
                    class_id: '',
                    subject_id: '',
                    user_id: '',
                    sch_time_from: '',
                    sch_time_upto: '',
                    room_unique_id: ''
                },
                departments: {},
                classes: {},
                subjects: {},
                teachers: {},
                success: null,
                errors: [],
                loaded: 0
            }
        },
        validations() {
            return {
                form: {
                    class_id: {
                        required
                    },
                    subject_id: {
                        required
                    },
                    user_id: {
                        required
                    },
                    sch_time_from: {
                        required
                    },
                    sch_time_upto: {
                        required
                    }
                }
            }
        },
        mounted() {
            this.fetch_deparments()
            this.genOnlineId()
            this.routeLoading()
        },
        methods: {
            routeLoading () {
                if (this.$route.params.id) {
                    this.getInfo()
                } else {
                    this.loaded = 1
                }
            },
            genOnlineId () {
                let len = 20
                var dt = new Date().getTime();
                var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                    var r = (dt + Math.random()*len)%len | 0;
                    dt = Math.floor(dt/len);
                    return (c=='x' ? r :(r&0x3|0x8)).toString(len);
                });

                this.form.room_unique_id = uuid
            },
            fetch_deparments  () {
                fetchDepartments ()
                    .then(res => {
                        this.departments = res.data
                    })
            },
            fetch_classes () {
                this.form.class_id = ''
                fetchClasses (this.department_id)
                    .then(res => {
                        this.classes = res.data
                    })
            },
            fetch_subjects () {
                this.form.subject_id = ''
                fetchSubjects (this.form.class_id)
                    .then (res => {
                        this.subjects = res.data
                    })
            },
            fetch_teachers () {
                this.form.user_id = ''
                view_teachers (this.form.class_id, this.form.subject_id)
                    .then(res => {
                        this.teachers = res.data
                    })
            },
            getInfo () {
                this.loaded = 0
                show_onlineadd_online_class (this.$route.params.id)
                    .then(res => {
                        this.allowance = res.data
                        this.loaded    = 1
                    });
            },
            saveData () {
                this.$v.$touch()

                if(!this.$v.$anyError) {
                    this.loaded = 0
    
                    let params = {
                        online_class: this.form
                    }
                    
                    if(!this.$route.params.id) {
                        add_online_class (params)
                            .then(res => {
                                this.loaded = 1
                                this.$router.push({
                                    name: 'ViewOnlineClass'
                                })
                            })
                            .catch(error => {
                                this.loaded = 1
                                console.log(error)
                            })
                    } else {
                        edit_onlineadd_online_class (this.$route.params.id, params)
                            .then(res => {
                                this.loaded = 1
                                this.$router.push({
                                    name: 'ViewOnlineClass'
                                })
                            })
                            .catch(error => {
                                this.loaded = 1
                                console.log(error)
                            })
                    }
                }
            }
        },
        watch: {
            "$route.params.id" () {
                this.routeLoading()
            },
            "allowance.type" (type) {
                if(type == 'percent') {
                    this.percentages = []
                    let num = 1
                    do {
                        this.percentages.push(num)
                        if(num < 10) num++
                        else num += 5
                    }
                    while(num <= 50)
                    this.allowance.percent = 1
                } else {
                    this.percentages.push(0)
                    this.allowance.percent = 0
                }

                this.fetch_employees()
            },
            "allowance.gender" () {
                this.fetch_last_onlineadd_online_class()
            },
            "allowance.name" () {
                this.fetch_last_onlineadd_online_class()
            }
        }
    }
</script>
