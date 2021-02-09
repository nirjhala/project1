<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'ViewCertificate', 
                        params: {type: $route.params.type} 
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >View {{ $route.params.type }}</router-link>
            </div>
            <h3>{{ !$route.params.id ? 'Add' : 'Edit' }} {{ $route.params.type }}</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'CertificateMaster' }">Certificate Master</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'ViewCertificate', params: {type: $route.params.type} }">{{  $route.params.type }}</router-link>
                </li>
                <li>{{ !$route.params.id ? 'Add' : 'Edit' }} {{  $route.params.type }}</li>
            </ul>
        </div>
        <!-- Breadcrumbs Area End Here -->

        <!-- Card Table Area Start Here -->
        <b-card
            :title="!$route.params.id ? `Add ${$route.params.type}` : `Edit ${$route.params.type}`"
        >
            <b-form
                method="post"
                @submit.prevent="saveData"
            >
                <b-row>
                    <b-form-group
                        label="Search Student"
                        class="col-sm-9"
                        v-if="!$route.params.id"
                    >
                        <multiselect 
                            v-model="student" 
                            track-by="uid" 
                            placeholder="Search Student" 
                            select-label="" 
                            deselect-label="" 
                            :options="students" 
                            :custom-label="studentLabel" 
                            :searchable="true" 
                            :allow-empty="false"
                        >
                            <template slot="singleLabel" slot-scope="{ option }">
                                {{ `${option.user.name} - ${option.father_info.name}, Class - ${option.section_name.cls.name} ${option.section_name.name}` }}
                            </template>
                        </multiselect>
                    </b-form-group>
                    <b-form-group
                        label="Sr. No."
                        class="col-sm-3"
                    >
                        <b-input
                            placeholder="Enter Serial Number (leave blank to auto generate)"
                            v-model.trim="form.sr_no"
                        ></b-input>
                        <b-form-invalid-feedback>Please fill required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        label="Name of Pupil"
                        class="col-sm-3"
                    >
                        <b-input
                            placeholder="Enter Student Name"
                            v-model.trim="form.name"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="Class"
                        class="col-sm-3"
                    >
                        <b-input
                            placeholder="Enter Class Name"
                            v-model.trim="form.class"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="Father's Name"
                        class="col-sm-3"
                    >
                        <b-input
                            placeholder="Enter Father's Name"
                            v-model.trim="form.father_name"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="Mother's Name"
                        class="col-sm-3"
                    >
                        <b-input
                            placeholder="Enter Mother's Name"
                            v-model.trim="form.mother_name"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="Gender"
                        class="col-sm-3"
                    >
                        <b-input
                            placeholder="Enter Gender"
                            v-model.trim="form.gender"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="Admission No."
                        class="col-sm-3"
                    >
                        <b-input
                            placeholder="Enter Admission No."
                            v-model.trim="form.admission_no"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="From"
                        class="col-sm-3"
                        v-if="$route.params.type == 'character'"
                    >
                        <b-input
                            placeholder="Enter Year"
                            v-model.trim="$v.form.from.$model"
                            :class="{
                                'is-invalid': $v.form.from.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        label="To"
                        class="col-sm-3"
                        v-if="$route.params.type == 'character'"
                    >
                        <b-input
                            placeholder="Enter Year or Till Now"
                            v-model.trim="$v.form.to.$model"
                            :class="{
                                'is-invalid': $v.form.to.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        :label="`${$route.params.type} Name`"
                        class="col-sm-3"
                        v-if="$route.params.type != 'character'"
                    >
                        <b-input
                            placeholder="Enter Year or Till Now"
                            v-model.trim="$v.form.c_name.$model"
                            :class="{
                                'is-invalid': $v.form.c_name.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        label="Organized On"
                        class="col-sm-3"
                        v-if="$route.params.type != 'character'"
                    >
                        <b-input
                            type="date"
                            placeholder="Enter Date"
                            v-model.trim="$v.form.organized_at.$model"
                            :class="{
                                'is-invalid': $v.form.organized_at.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        label="Rank"
                        class="col-sm-3"
                        v-if="$route.params.type != 'character'"
                    >
                        <b-input
                            placeholder="Enter Rank"
                            v-model.trim="$v.form.rank.$model"
                            :class="{
                                'is-invalid': $v.form.rank.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                    </b-form-group>
                </b-row>
                <button
                    type="submit"
                    v-if="student || $route.params.id"
                    class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                >{{ $route.params.id ? 'Update' : 'Save' }}</button>
                <button
                    type="reset"
                    v-if="student || $route.params.id"
                    class="btn-fill-lg bg-blue-dark btn-hover-yellow"
                >Reset</button>
            </b-form>
        </b-card>
    </div>
</template>
<style scoped>
input[readonly] {
    background-color: bisque !important;
    cursor: not-allowed;
}
label {
    text-transform: capitalize;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script>
    import Multiselect from 'vue-multiselect'
    import { required } from 'vuelidate/lib/validators'
    import api, { add_sch_certificate, add_tc, edit_sch_certificate } from '../../../api/script'

    export default {
        components: { Multiselect },
        data() {
            return {
                form: {
                    sr_no: '',
                    name: '',
                    class: '',
                    father_name: '',
                    mother_name: '',
                    type: this.$route.params.type,
                    from: '',
                    to: '',
                    admission_no: '',
                    gender: 'Male',
                    rank: '',
                    organized_at: '',
                    c_name: ''
                },
                student: null,
                students: [],
                success: null,
                errors: [],
                loaded: 0
            }
        },
        validations() {
            if(this.$route.params.type == 'character') {
                return {
                    form: {
                        from: {
                            required
                        },
                        to: {
                            required
                        }
                    }
                }
            } else {
                return {
                    form: {
                        rank: {
                            required
                        },
                        organized_at: {
                            required
                        },
                        c_name: {
                            required
                        }
                    }
                }
            }
        },
        mounted() {
            this.routeLoading()
            this.fetch_students()
        },
        methods: {
            routeLoading () {
                if (this.$route.params.id) {
                    this.getInfo()
                } else {
                    this.loaded = 1
                }
            },
            studentLabel ({ user, father_info, section_name }) {
                let text = user.name
                if(father_info && father_info.name) text += ` ${father_info.name}`
                text += ', Class - '
                if(section_name && section_name.cls && section_name.cls.name) text += ` ${section_name.cls.name}`
                if(section_name && section_name.name) text += ` ${section_name.name}`
                return text
            },
            fetch_students () {
                let apiResponse = api.getStudents()
                    apiResponse
                        .then((res) => {
                            this.students = res.data
                        })
                        .catch((err) => {
                            console.log("Errors: ", err)
                        })
            },
            getInfo () {
                this.loaded = 0
                show_tc(this.$route.params.id)
                    .then(res => {
                        this.form   = res.data
                        this.loaded = 1
                    });
            },
            saveData () {
                this.$v.$touch()

                if(!this.$v.$anyError) {
                    this.loaded = 0
    
                    let params = {
                        form: this.form
                    }
                    
                    if(!this.$route.params.id) {
                        add_sch_certificate(params)
                            .then(res => {
                                this.loaded = 1
                                this.$router.push({
                                    name: 'ViewCertificate',
                                    params: {
                                        type: this.$route.params.type
                                    }
                                })
                            })
                            .catch(error => {
                                this.loaded = 1
                                console.log(error)
                            })
                    } else {
                        edit_sch_certificate(this.$route.params.id, params)
                            .then(res => {
                                this.loaded = 1
                                this.$router.push({
                                    name: 'ViewCertificate',
                                    params: {
                                        type: this.$route.params.type
                                    }
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
            "$route.params.type" (type) {
                this.type = type
            },
            student (student) {
                this.form.name              = student.user.name
                this.form.class             = student.section_name.cls.name
                this.form.father_name       = student.father_info.name
                this.form.mother_name       = student.mother_info.name
                this.form.gender            = student.user.gender
                this.form.admission_no      = student.reg_no
            }
        }
    }
</script>
