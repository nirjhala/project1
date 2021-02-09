<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'PayrollSalarySlip'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >View Salary Slip</router-link>
            </div>
            <h3>{{ !$route.params.id ? 'Add' : 'Edit' }} Salary Slip</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'PayrollMaster' }">Payroll Management Master</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'PayrollSalarySlip' }">Salary Slip</router-link>
                </li>
                <li>{{ !$route.params.id ? 'Add' : 'Edit' }} Salary Slip</li>
            </ul>
        </div>
        <!-- Breadcrumbs Area End Here -->

        <!-- Card Table Area Start Here -->
        <b-card
            :title="!$route.params.id ? `Create Salary Slip` : `Edit Salary Slip`"
            class="h-auto"
        >
            <b-form
                method="post"
                @submit.prevent="saveData"
            >
                <b-row>
                    <b-form-group
                        label="Teacher / Staff *"
                        class="col-sm-4"
                    >
                        <label
                            class="mr-2"
                        >
                            <input 
                                type="radio" 
                                name="type" 
                                v-model="salary.type"
                                value="Teacher"
                            >
                            Teacher
                        </label>
                        <label
                            class="mr-2"
                        >
                            <input 
                                type="radio" 
                                name="type" 
                                v-model="salary.type"
                                value="Staff"
                            >
                            Staff
                        </label>
                    </b-form-group>
                    <b-form-group
                        :label="`Select ${salary.type}`"
                        class="col-sm-4"
                    >
                        <select
                            v-model="$v.salary.employee_id.$model"
                            class="form-control"
                            :class="{
                                'is-invalid': $v.salary.employee_id.$error
                            }"
                        >
                            <option value="">Select Name</option>
                            <option 
                                :value="id"
                                v-for="(name, id) in employees"
                                :key="id"
                            >{{ name }}</option>
                        </select>
                        <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        label="Select Month"
                        class="col-sm-2"
                    >
                        <select
                            v-model="salary.month"
                            class="form-control"
                        >
                            <option 
                                :value="num"
                                v-for="(name, num) in months"
                                :key="num"
                            >{{ name }}</option>
                        </select>
                    </b-form-group>
                    <b-form-group
                        label="Select Month"
                        class="col-sm-2"
                    >
                        <select
                            v-model="salary.year"
                            class="form-control"
                        >
                            <option :value="currentYear">{{ currentYear }}</option>
                            <option :value="currentYear - 1">{{ currentYear - 1 }}</option>
                            <option :value="currentYear - 2">{{ currentYear - 2 }}</option>
                            <option :value="currentYear - 3">{{ currentYear - 3 }}</option>
                        </select>
                    </b-form-group>
                </b-row>
                <b-row
                    v-if="salary.employee_id"
                >
                    <b-form-group
                        label="Name"
                        class="col-sm-2"
                    >
                        <b-input
                            placeholder="Name"
                            v-model="salary.name"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="Employee No."
                        class="col-sm-2"
                    >
                        <b-input
                            placeholder="Employee No."
                            v-model="salary.employee_no"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="Designation"
                        class="col-sm-2"
                    >
                        <b-input
                            placeholder="Designation"
                            v-model="salary.designation"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="Grade"
                        class="col-sm-2"
                    >
                        <b-input
                            placeholder="Grade"
                            v-model="salary.grade"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="PAN No."
                        class="col-sm-2"
                    >
                        <b-input
                            placeholder="PAN No."
                            v-model="salary.pan_no"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="Bank Name"
                        class="col-sm-2"
                    >
                        <b-input
                            placeholder="Bank Name"
                            v-model="salary.bank_name"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="Account No."
                        class="col-sm-2"
                    >
                        <b-input
                            placeholder="Account No."
                            v-model="salary.account_no"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="IFSC Code"
                        class="col-sm-2"
                    >
                        <b-input
                            placeholder="IFSC Code"
                            v-model="salary.ifsc_code"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="Total Days in Month"
                        class="col-sm-2"
                    >
                        <b-input
                            placeholder="Total Days in Month"
                            v-model="salary.total_days"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="Days Paid"
                        class="col-sm-2"
                    >
                        <b-input
                            placeholder="Days Paid"
                            v-model="salary.days_paid"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="Total Leave"
                        class="col-sm-2"
                    >
                        <b-input
                            placeholder="Leave Taken"
                            v-model="salary.total_leave"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="Basic Salary"
                        class="col-sm-2"
                    >
                        <b-input
                            placeholder="Basic Salary"
                            v-model="salary.basic_salary"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="Previous Due"
                        class="col-sm-2"
                    >
                        <b-input
                            type="number"
                            min="0"
                            placeholder="Previous Due"
                            v-model="salary.previous_due"
                        ></b-input>
                    </b-form-group>
                </b-row>
                <b-row
                    v-if="salary.employee_id"
                >
                    <b-col
                        sm="6"
                    >
                        <h4 class="card-title">Allowance</h4>
                        <b-row 
                            class="form-group"
                            v-for="(allowance, i) in allowances"
                            :key="i"
                        >
                            <label 
                                for=""
                                class="col-sm-5"
                            >{{ allowance.name }}</label>
                            <div
                                class="col-sm-7"
                            >
                                <b-input
                                    type="number"
                                    v-model="allowance.amount"
                                    placeholder="Amount"
                                ></b-input>
                            </div>
                        </b-row>
                    </b-col>
                    <b-col
                        sm="6"
                    >
                        <h4 class="card-title">Deduction</h4>
                        <b-row class="form-group"
                            v-for="(deduction, i) in deductions"
                            :key="i"
                        >
                            <label 
                                for=""
                                class="col-sm-5"
                            >{{ deduction.name }}</label>
                            <div
                                class="col-sm-7"
                            >
                                <b-input
                                    type="number"
                                    v-model="deduction.amount"
                                    placeholder="Amount"
                                ></b-input>
                            </div>
                        </b-row>
                    </b-col>
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
    var d = new Date()
    import { required } from 'vuelidate/lib/validators'
    import { 
        add_salary_slip, 
        edit_salary_slip, 
        show_salary_slip, 
        view_employee_info, 
        view_users 
    } from '../../../api/script'

    export default {
        data() {
            return {
                salary: {
                    type: 'Teacher',
                    employee_id: '',
                    name: '',
                    designation: '',
                    grade: '',
                    pan_no: '',
                    bank_name: '',
                    account_no: '',
                    ifsc_code: '',
                    total_days: 0,
                    total_leave: 0,
                    days_paid: 0,
                    basic_salary: 0,
                    previous_due: 0,
                    month: d.getMonth() > 0 ? d.getMonth() - 1 : 11,
                    year: d.getMonth() > 0 ? d.getFullYear() : d.getFullYear() - 1
                },
                employees: {},
                months: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                ],
                allowances: [],
                deductions: [],
                currentYear: d.getFullYear(),
                success: null,
                errors: [],
                loaded: 0
            }
        },
        validations() {
            return {
                salary: {
                    employee_id: {
                        required
                    }
                }
            }
        },
        mounted() {
            this.routeLoading()
            this.fetch_employees()

            let num = 1
            do {
                this.percentages.push(num)
                if(num < 10) num++
                else num += 5
            }
            while(num <= 50)
            this.salary.percent = 1
        },
        methods: {
            routeLoading () {
                if (this.$route.params.id) {
                    this.getInfo()
                } else {
                    this.loaded = 1
                }
            },
            fetch_employees () {
                this.salary.employee_id = ''
                view_users (`type=all&role=${this.salary.type}&month=${this.salary.month}&year=${this.salary.year}`)
                    .then(res => {
                        this.employees = res.data
                    })
            },
            fetch_employee_info () {
                let self = this
                if(this.salary.employee_id) {
                    view_employee_info(this.salary.employee_id, `type=all-details&month=${this.salary.month}&year=${this.salary.year}`)
                        .then(res => {
                            let user    = res.data
                            
                            self.salary.name            = user.name
                            self.salary.employee_no     = user['Employee Number'] ?? ''
                            self.salary.designation     = user.Designation ?? ''
                            self.salary.grade           = user.grade ?? ''
                            self.salary.pan_no          = user['PAN Number'] ?? ''
                            self.salary.bank_name       = user['Bank Name'] ?? ''
                            self.salary.account_no      = user['Account Number'] ?? ''
                            self.salary.ifsc_code       = user['IFSC Code'] ?? ''
                            self.salary.basic_salary    = user.salary ?? ''
                            self.salary.total_days      = user.total_days
                            self.salary.days_paid       = user.paid_days
                            self.salary.total_leave     = user.total_days - user.paid_days
                            self.allowances             = user.allowance
                            self.deductions             = user.deduction
                        })
                }
            },
            getInfo () {
                this.loaded = 0
                show_salary_slip (this.$route.params.id)
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
                        salary: this.salary,
                        allowances: this.allowances,
                        deductions: this.deductions
                    }
                    
                    if(!this.$route.params.id) {
                        add_salary_slip (params)
                            .then(res => {
                                this.loaded = 1
                                this.$router.push({
                                    name: 'PayrollSalarySlip'
                                })
                            })
                            .catch(error => {
                                this.loaded = 1
                                console.log(error)
                            })
                    } else {
                        edit_salary_slip (this.$route.params.id, params)
                            .then(res => {
                                this.loaded = 1
                                this.$router.push({
                                    name: 'PayrollSalarySlip'
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
            "salary.type" () {
                this.fetch_employees()
            },
            "salary.employee_id" () {
                this.fetch_employee_info()
            },
            "salary.month" () {
                this.fetch_employee_info()
            },
            "salary.year" () {
                this.fetch_employee_info()
            }
        }
    }
</script>
