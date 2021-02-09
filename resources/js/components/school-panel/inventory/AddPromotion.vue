<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'PayrollPromotion'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >View Promotion / Increament</router-link>
            </div>
            <h3>{{ !$route.params.id ? 'Add' : 'Edit' }} Promotion / Increament</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'PayrollMaster' }">Payroll Management Master</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'PayrollPromotion' }">Promotion / Increament</router-link>
                </li>
                <li>{{ !$route.params.id ? 'Add' : 'Edit' }} Promotion / Increament</li>
            </ul>
        </div>
        <!-- Breadcrumbs Area End Here -->

        <!-- Card Table Area Start Here -->
        <b-card
            :title="!$route.params.id ? `Create Promotion / Increament` : `Edit Promotion / Increament`"
            class="h-auto"
        >
            <b-form
                method="post"
                @submit.prevent="saveData"
            >
                <b-row>
                    <b-form-group
                        label="Staff / Teacher *"
                        class="col-sm-6"
                    >
                        <label
                            class="mr-2"
                        >
                            <input 
                                type="radio" 
                                name="employee_type" 
                                v-model="promotion.employee_type"
                                value="Teacher"
                            >
                            Teacher
                        </label>
                        <label
                            class="mr-2"
                        >
                            <input 
                                type="radio" 
                                name="employee_type" 
                                v-model="promotion.employee_type"
                                value="Staff"
                            >
                            Staff
                        </label>
                    </b-form-group>
                    <b-form-group
                        :label="`Select ${promotion.employee_type}`"
                        class="col-sm-6"
                    >
                        <select 
                            v-model="$v.promotion.user_id.$model"
                            class="form-control"
                            :class="{
                                'is-invalid': $v.promotion.user_id.$error
                            }"
                        >
                            <option value="">Select {{ promotion.employee_type }}</option>
                            <option
                                v-for="(name, id) in employees"
                                :key="id"
                                :value="id"
                            >{{ name }}</option>
                        </select>
                        <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group
                        label="Current Grade"
                        class="col-sm-6 col-lg-3"
                    >
                        <b-input
                            v-model="promotion.current_grade"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="Current Salary"
                        class="col-sm-6 col-lg-3"
                    >
                        <b-input
                            v-model="promotion.current_salary"
                            readonly
                        ></b-input>
                    </b-form-group>

                    <b-form-group
                        label="New Grade"
                        class="col-sm-6 col-lg-3"
                    >
                        <select 
                            v-model="$v.promotion.grade_id.$model"
                            class="form-control"
                            :class="{
                                'is-invalid': $v.promotion.grade_id.$error
                            }"
                        >
                            <option value="">Select Grade</option>
                            <option 
                                v-for="(name, id) in pay_grades"
                                :key="id"
                                :value="id"
                            >{{ name }}</option>
                        </select>
                        <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        label="New Salary"
                        class="col-sm-6 col-lg-3"
                    >
                        <b-input
                            type="number"
                            v-model="$v.promotion.new_salary.$model"
                            :class="{
                                'is-invalid': $v.promotion.new_salary.$error
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
    import { add_employe_promotion, edit_employe_promotion, show_employe_promotion, view_employee_info, view_pay_grade, view_users } from '../../../api/script'

    export default {
        data() {
            return {
                promotion: {
                    employee_type: 'Teacher',
                    user_id: '',
                    current_grade: 'NEW',
                    current_salary: 'NEW',
                    grade_id: '',
                    new_salary: ''
                },
                employees: {},
                pay_grades: {},
                success: null,
                errors: [],
                loaded: 0
            }
        },
        validations() {
            return {
                promotion: {
                    employee_type: {
                        required
                    },
                    user_id: {
                        required
                    },
                    grade_id: {
                        required
                    },
                    new_salary: {
                        required
                    }
                }
            }
        },
        mounted() {
            this.routeLoading()
            this.fetch_pay_grades()
            this.fetch_employees()
        },
        methods: {
            routeLoading () {
                if (this.$route.params.id) {
                    this.getInfo()
                } else {
                    this.loaded = 1
                }
            },
            fetch_pay_grades () {
                view_pay_grade ('type=all')
                    .then(res => {
                        this.pay_grades = res.data
                    })
            },
            fetch_employees () {
                this.promotion.user_id = ''
                view_users (`type=all&role=${this.promotion.employee_type}`)
                    .then(res => {
                        this.employees = res.data
                    })
            },
            fetch_employee_info () {
                view_employee_info (this.promotion.user_id)
                    .then(res => {
                        this.promotion.current_grade    = res.data.grade_name ?? 'NEW'
                        this.promotion.current_salary   = res.data.new_salary ?? 'NEW'
                        this.promotion.grade_id         = res.data.pay_grade_id ?? ''
                        this.promotion.new_salary       = res.data.new_salary ?? ''
                    })
            },
            getInfo () {
                this.loaded = 0
                show_employe_promotion (this.$route.params.id)
                    .then(res => {
                        this.promotion = res.data
                        this.promotion.grade_id = res.data.grade_id
                        this.loaded    = 1
                    });
            },
            saveData () {
                this.$v.$touch()

                if(!this.$v.$anyError) {
                    this.loaded = 0
    
                    let params = {
                        promotion: this.promotion
                    }
                    
                    if(!this.$route.params.id) {
                        add_employe_promotion (params)
                            .then(res => {
                                this.loaded = 1
                                this.$router.push({
                                    name: 'PayrollPromotion'
                                })
                            })
                            .catch(error => {
                                this.loaded = 1
                                console.log(error)
                            })
                    } else {
                        edit_employe_promotion (this.$route.params.id, params)
                            .then(res => {
                                this.loaded = 1
                                this.$router.push({
                                    name: 'PayrollPromotion'
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
            "promotion.employee_type" () {
                this.fetch_employees()
            },
            "promotion.user_id" () {
                this.fetch_employee_info()
            }
        }
    }
</script>
