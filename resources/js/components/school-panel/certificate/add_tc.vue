<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link :to="{ name: 'ViewTc' }" class="fw-btn-fill btn-gradient-yellow text-white">View TC</router-link>
            </div>
            <h3>{{ !$route.params.id ? 'Add' : 'Edit' }} TC</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'CertificateMaster' }">Certificate Master</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'ViewTc' }">TC</router-link>
                </li>
                <li>{{ !$route.params.id ? 'Add' : 'Edit' }} TC</li>
            </ul>
        </div>
        <!-- Breadcrumbs Area End Here -->

        <!-- Card Table Area Start Here -->
        <b-card
            :title="!$route.params.id ? 'Add TC' : 'Edit TC'"
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
                        label="TC Generate No."
                        class="col-sm-3"
                    >
                        <b-input
                            placeholder="Enter TC Number (leave blank to auto generate)"
                            v-model.trim="form.tc_number"
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
                        label="Section"
                        class="col-sm-3"
                    >
                        <b-input
                            placeholder="Enter Section Name"
                            v-model.trim="form.section"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="Student Roll No."
                        class="col-sm-3"
                    >
                        <b-input
                            placeholder="Enter Student Roll No."
                            v-model.trim="form.roll_no"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="Admission Number"
                        class="col-sm-3"
                    >
                        <b-input
                            placeholder="Enter Admission No."
                            v-model.trim="form.admission_no"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="Admission Date"
                        class="col-sm-3"
                    >
                        <b-input
                            type="date"
                            placeholder="Enter Admission Date"
                            v-model.trim="form.admission_date"
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
                        label="Date Of Birth"
                        class="col-sm-3"
                    >
                        <b-input
                            type="date"
                            placeholder="Enter DOB"
                            v-model.trim="form.dob"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="Date Of Birth (in words)"
                        class="col-sm-3"
                    >
                        <b-input
                            placeholder="Enter DOB (in words)"
                            v-model.trim="$v.form.dob_words.$model"
                            :class="{
                                'is-invalid': $v.form.dob_words.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please fill required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        label="Nationality"
                        class="col-sm-3"
                    >
                        <b-input
                            placeholder="Nationality"
                            v-model.trim="$v.form.nationality.$model"
                            :class="{
                                'is-invalid': $v.form.nationality.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please fill required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        label="Cast Category"
                        class="col-sm-3"
                    >
                        <b-input
                            placeholder="Cast Category"
                            v-model.trim="form.cast_category"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="Date of Application"
                        class="col-sm-3"
                    >
                        <b-input
                            placeholder="Date of Application"
                            type="date"
                            v-model.trim="$v.form.apply_date.$model"
                            :class="{
                                'is-invalid': $v.form.apply_date.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please fill required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        label="Date of Issuance"
                        class="col-sm-3"
                    >
                        <b-input
                            placeholder="Date of Issuance"
                            type="date"
                            v-model.trim="$v.form.issue_date.$model"
                            :class="{
                                'is-invalid': $v.form.issue_date.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please fill required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        label="Class in which admitted"
                        class="col-sm-3"
                    >
                        <b-input
                            placeholder="Class in which admitted *"
                            v-model.trim="$v.form.admitted_class.$model"
                            :class="{
                                'is-invalid': $v.form.admitted_class.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please fill required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        label="Promoted to other class?"
                        class="col-sm-3"
                    >
                        <label>
                            <input type="radio" name="class_promotion" v-model="form.class_promotion" value="yes">
                            Yes
                        </label>
                        <label>
                            <input type="radio" name="class_promotion" v-model="form.class_promotion" value="no">
                            No
                        </label>
                    </b-form-group>
                    <b-form-group
                        label="Class in which promoted"
                        class="col-sm-3"
                    >
                        <b-input
                            placeholder="Class in which promoted *"
                            v-model.trim="$v.form.promoting_class.$model"
                            :class="{
                                'is-invalid': $v.form.promoting_class.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please fill required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        label="Reason"
                        class="col-sm-3"
                    >
                        <b-input
                            placeholder="Reason for leaving *"
                            v-model.trim="$v.form.reason.$model"
                            :class="{
                                'is-invalid': $v.form.reason.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please fill required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        label="Paid Month *"
                        class="col-sm-3"
                        :class="{
                            'is-invalid': $v.form.paid_month.$error
                        }"
                    >
                        <b-input
                            placeholder="Enter paid month"
                            v-model.trim="$v.form.paid_month.$model"
                            :class="{
                                'is-invalid': $v.form.paid_month.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please fill required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        label="Any Fee Concession"
                        class="col-sm-3"
                    >
                        <b-input
                            placeholder="Any Fee Concession"
                            v-model.trim="form.fee_concession"
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="Wheather NCC/SCOUT/GUIDE *"
                        class="col-sm-3"
                    >
                        <label>
                            <input type="radio" name="is_ncc" v-model="form.is_ncc" value="yes">
                            Yes
                        </label>
                        <label>
                            <input type="radio" name="is_ncc" v-model="form.is_ncc" value="no">
                            No
                        </label>
                    </b-form-group>
                    <b-form-group
                        label="Games Played or Extra Activity *"
                        class="col-sm-3"
                    >
                        <label>
                            <input type="radio" name="is_game" v-model="form.is_game" value="yes">
                            Yes
                        </label>
                        <label>
                            <input type="radio" name="is_game" v-model="form.is_game" value="no">
                            No
                        </label>
                    </b-form-group>
                    <b-form-group
                        label="Total working day *"
                        class="col-sm-3"
                    >
                        <b-input
                            type="number"
                            v-model.trim="$v.form.total_working_days.$model"
                            placeholder="Total no. of days to be present"
                            :class="{
                                'is-invalid': $v.form.total_working_days.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please fill required.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        label="No. of days present *"
                        class="col-sm-3"
                    >
                        <b-input
                            type="number"
                            v-model.trim="$v.form.total_present_days.$model"
                            placeholder="Total no. of present days"
                            :class="{
                                'is-invalid': $v.form.total_present_days.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please fill required.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        label="Result status"
                        class="col-sm-3"
                    >
                        <label>
                            <input type="radio" name="result" v-model="form.result" value="Pass">
                            Pass
                        </label>
                        <label>
                            <input type="radio" name="result" v-model="form.result" value="Fail">
                            Fail
                        </label>
                    </b-form-group>
                    <b-form-group
                        label="General Conduct *"
                        class="col-sm-3"
                    >
                        <b-input
                            placeholder="Conduct or behaviour"
                            v-model.trim="$v.form.conduct.$model"
                            :class="{
                                'is-invalid': $v.form.conduct.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please fill required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        label="Remarks"
                        class="col-sm-6"
                    >
                        <b-input
                            v-model.trim="form.remarks"
                            placeholder="Any other Remarks"
                        ></b-input>
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
<style>
input[readonly] {
    background-color: bisque !important;
    cursor: not-allowed;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script>
    import Multiselect from 'vue-multiselect'
    import { required, email, minLength, maxLength, helpers, requiredIf } from 'vuelidate/lib/validators'
    import api, { add_tc, edit_tc, show_tc } from '../../../api/script'

    const alphaOnly = helpers.regex('aplpha', /^[A-Za-z ]*$/i)

    export default {
        components: { Multiselect },
        data() {
            return {
                form: {
                    user_id: '',
                    tc_number: '',
                    name: '',
                    class: '',
                    section: '',
                    roll_no: '',
                    admission_no: '',
                    admission_date: '',
                    father_name: '',
                    mother_name: '',
                    cast_category: '',
                    dob: '',
                    dob_words: '',
                    apply_date: '',
                    issue_date: '',
                    admitted_class: '',
                    reason: '',
                    paid_month: '',
                    fee_concession: '',
                    is_ncc: 'no',
                    is_game: 'no',
                    total_working_days: '',
                    total_present_days: '',
                    result: 'Pass',
                    conduct: '',
                    remarks: '',
                    nationality: 'Indian',
                    class_promotion: 'yes',
                    promoting_class: ''
                },
                student: null,
                students: [],
                success: null,
                errors: [],
                loaded: 0
            }
        },
        validations: {
            form: {
                apply_date: {
                    required
                },
                issue_date: {
                    required
                },
                reason: {
                    required
                },
                tc_number: {
                    required
                },
                name: {
                    required
                },
                nationality: {
                    required
                },
                promoting_class: {
                    required
                },
                class: {
                    required
                },
                dob_words: {
                    required
                },
                section: {
                    required
                },
                roll_no: {
                    required
                },
                admitted_class: {
                    required
                },
                paid_month: {
                    required
                },
                total_working_days: {
                    required
                },
                total_present_days: {
                    required
                },
                reason: {
                    required
                },
                conduct: {
                    required
                }
            }
        },
        mounted() {
            this.routeLoading()
            this.fetch_students()
        },
        methods: {
            routeLoading () {
                if (this.$route.params) {
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
                this.loaded = 0

                let params = {
                    form: this.form
                }
                
                if(!this.$route.params.id) {
                    add_tc(params)
                        .then(res => {
                            this.loaded = 1
                            this.$router.push({
                                name: 'ViewTc'
                            })
                        })
                        .catch(error => {
                            this.loaded = 1
                            console.log(error)
                        })
                } else {
                    edit_tc(this.$route.params.id, params)
                        .then(res => {
                            this.loaded = 1
                            this.$router.push({
                                name: 'ViewTc'
                            })
                        })
                        .catch(error => {
                            this.loaded = 1
                            console.log(error)
                        })
                }
            }
        },
        watch: {
            "$route.params.id" () {
                this.routeLoading()
            },
            student (student) {
                this.form.user_id           = student.uid 
                this.form.name              = student.user.name
                this.form.class             = student.section_name.cls.name
                this.form.section           = student.section_name.name
                this.form.roll_no           = student.roll_no
                this.form.admission_no      = student.reg_no
                this.form.father_name       = student.father_info.name
                this.form.mother_name       = student.mother_info.name
                this.form.dob               = student.user.dob
                this.form.admission_date    = student.admission_date
                this.form.cast_category     = student.category
            }
        }
    }
</script>
