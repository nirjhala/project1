<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'PayrollAllowance'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >View Allowance</router-link>
            </div>
            <h3>{{ !$route.params.id ? 'Add' : 'Edit' }} Allowance</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'PayrollMaster' }">Payroll Management Master</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'PayrollAllowance' }">Allowance</router-link>
                </li>
                <li>{{ !$route.params.id ? 'Add' : 'Edit' }} Allowance</li>
            </ul>
        </div>
        <!-- Breadcrumbs Area End Here -->

        <!-- Card Table Area Start Here -->
        <b-card
            :title="!$route.params.id ? `Create Allowance` : `Edit Allowance`"
            class="h-auto"
        >
            <b-form
                method="post"
                @submit.prevent="saveData"
            >
                <b-row>
                    <b-form-group
                        label="Gender *"
                        class="col-sm-4"
                    >
                        <label
                            class="mr-2"
                        >
                            <input 
                                type="radio" 
                                name="gender" 
                                v-model="allowance.gender"
                                value="Male"
                            >
                            Male
                        </label>
                        <label
                            class="mr-2"
                        >
                            <input 
                                type="radio" 
                                name="gender" 
                                v-model="allowance.gender"
                                value="Female"
                            >
                            Female
                        </label>
                        <label
                            class="mr-2"
                        >
                            <input 
                                type="radio" 
                                name="gender" 
                                v-model="allowance.gender"
                                value="Other"
                            >
                            Other
                        </label>
                    </b-form-group>
                    <b-form-group
                        label="Select Allowance"
                        class="col-sm-4"
                    >
                        <select
                            v-model="$v.allowance.name.$model"
                            class="form-control"
                            :class="{
                                'is-invalid': $v.allowance.name.$error
                            }"
                        >
                            <option value="">Select Name</option>
                            <option 
                                :value="name"
                                v-for="(name, id) in payroll_masters"
                                :key="id"
                            >{{ name }}</option>
                        </select>
                        <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        label="From Salary Amount"
                        class="col-sm-2"
                    >
                        <b-input
                            type="number"
                            placeholder="From Salary Amount"
                            v-model="allowance.from_amount"
                            readonly
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        label="To Salary Amount"
                        class="col-sm-2"
                    >
                        <b-input
                            type="number"
                            placeholder="To Salary Amount"
                            v-model="$v.allowance.to_amount.$model"
                            :class="{
                                'is-invalid': $v.allowance.to_amount.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                    </b-form-group>

                     <b-form-group
                        label="Type"
                        class="col-sm-4"
                    >
                        <label
                            class="mr-2"
                        >
                            <input 
                                type="radio" 
                                name="type" 
                                v-model="allowance.type"
                                value="percent"
                            >
                            Percent
                        </label>
                        <label
                            class="mr-2"
                        >
                            <input 
                                type="radio" 
                                name="type" 
                                v-model="allowance.type"
                                value="fixed"
                            >
                            Fixed
                        </label>
                    </b-form-group>
                    <b-form-group
                        label="Percent"
                        class="col-sm-4"
                    >
                        <select
                            v-model="allowance.percent"
                            :disabled="allowance.type == 'fixed'"
                            class="form-control"
                        >
                            <option 
                                :value="percent"
                                v-for="(percent, index) in percentages"
                                :key="index"
                            >{{ percent }}</option>
                        </select>
                    </b-form-group>
                    <b-form-group
                        label="Amount (upto)"
                        class="col-sm-4"
                    >
                        <b-input
                            v-model="$v.allowance.amount.$model"
                            placeholder="Enter Amount"
                            :class="{
                                'is-invalid': $v.allowance.amount.$error
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
    import { add_allowance, add_employe_promotion, edit_allowance, edit_employe_promotion, show_allowance, show_employe_promotion, view_all_payroll_masters, view_employee_info, view_max_salary_allowance, view_pay_grade, view_users } from '../../../api/script'

    export default {
        data() {
            return {
                allowance: {
                    gender: 'Male',
                    from_amount: '',
                    to_amount: '',
                    type: 'percent',
                    name: '',
                    percent: 5,
                    amount: ''
                },
                percentages: [],
                payroll_masters: {},
                success: null,
                errors: [],
                loaded: 0
            }
        },
        validations() {
            return {
                allowance: {
                    to_amount: {
                        required
                    },
                    name: {
                        required
                    },
                    amount: {
                        required
                    }
                }
            }
        },
        mounted() {
            this.routeLoading()
            this.fetch_payroll_master()

            // if(!this.$route.params.id) {
            //     view_max_salary_allowance(this.allowance.gender, this.allowance.name)
            //         .then(res => {
            //             this.allowance.from_amount = res.data
            //         })
            // }

            let num = 1
            do {
                this.percentages.push(num)
                if(num < 10) num++
                else num += 5
            }
            while(num <= 50)
            this.allowance.percent = 1
        },
        methods: {
            routeLoading () {
                if (this.$route.params.id) {
                    this.getInfo()
                } else {
                    this.loaded = 1
                }
            },
            fetch_last_allowance () {
                if(!this.$route.params.id && this.allowance.gender && this.allowance.name) {
                    view_max_salary_allowance(this.allowance.gender, this.allowance.name)
                        .then(res => {
                            this.allowance.from_amount = res.data
                        })
                }
            },
            fetch_payroll_master () {
                view_all_payroll_masters ('allowance')
                    .then(res => {
                        this.payroll_masters = res.data
                    })
            },
            getInfo () {
                this.loaded = 0
                show_allowance (this.$route.params.id)
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
                        allowance: this.allowance
                    }
                    
                    if(!this.$route.params.id) {
                        add_allowance (params)
                            .then(res => {
                                this.loaded = 1
                                this.$router.push({
                                    name: 'PayrollAllowance'
                                })
                            })
                            .catch(error => {
                                this.loaded = 1
                                console.log(error)
                            })
                    } else {
                        edit_allowance (this.$route.params.id, params)
                            .then(res => {
                                this.loaded = 1
                                this.$router.push({
                                    name: 'PayrollAllowance'
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
                this.fetch_last_allowance()
            },
            "allowance.name" () {
                this.fetch_last_allowance()
            }
        }
    }
</script>
