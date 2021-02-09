<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'PayrollDeduction'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >View Deduction</router-link>
            </div>
            <h3>{{ !$route.params.id ? 'Add' : 'Edit' }} Deduction</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'PayrollMaster' }">Payroll Management Master</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'PayrollDeduction' }">Deduction</router-link>
                </li>
                <li>{{ !$route.params.id ? 'Add' : 'Edit' }} Deduction</li>
            </ul>
        </div>
        <!-- Breadcrumbs Area End Here -->

        <!-- Card Table Area Start Here -->
        <b-card
            :title="!$route.params.id ? `Create Deduction` : `Edit Deduction`"
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
                                v-model="deduction.gender"
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
                                v-model="deduction.gender"
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
                                v-model="deduction.gender"
                                value="Other"
                            >
                            Other
                        </label>
                    </b-form-group>
                    <b-form-group
                        label="Select Deduction"
                        class="col-sm-4"
                    >
                        <select
                            v-model="$v.deduction.name.$model"
                            class="form-control"
                            :class="{
                                'is-invalid': $v.deduction.name.$error
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
                            v-model="deduction.from_amount"
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
                            v-model="$v.deduction.to_amount.$model"
                            :class="{
                                'is-invalid': $v.deduction.to_amount.$error
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
                                v-model="deduction.type"
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
                                v-model="deduction.type"
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
                            v-model="deduction.percent"
                            :disabled="deduction.type == 'fixed'"
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
                            v-model="$v.deduction.amount.$model"
                            placeholder="Enter Amount"
                            :class="{
                                'is-invalid': $v.deduction.amount.$error
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
    import { add_deduction, add_employe_promotion, edit_deduction, edit_employe_promotion, show_deduction, show_employe_promotion, view_all_payroll_masters, view_employee_info, view_max_salary_deduction, view_pay_grade, view_users } from '../../../api/script'

    export default {
        data() {
            return {
                deduction: {
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
                deduction: {
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
            //     view_max_salary_deduction(this.deduction.gender, this.deduction.name)
            //         .then(res => {
            //             this.deduction.from_amount = res.data
            //         })
            // }

            let num = 1
            do {
                this.percentages.push(num)
                if(num < 10) num++
                else num += 5
            }
            while(num <= 50)
            this.deduction.percent = 1
        },
        methods: {
            routeLoading () {
                if (this.$route.params.id) {
                    this.getInfo()
                } else {
                    this.loaded = 1
                }
            },
            fetch_last_deduction () {
                if(!this.$route.params.id && this.deduction.gender && this.deduction.name) {
                    view_max_salary_deduction(this.deduction.gender, this.deduction.name)
                        .then(res => {
                            this.deduction.from_amount = res.data
                        })
                }
            },
            fetch_payroll_master () {
                view_all_payroll_masters ('deduction')
                    .then(res => {
                        this.payroll_masters = res.data
                    })
            },
            getInfo () {
                this.loaded = 0
                show_deduction (this.$route.params.id)
                    .then(res => {
                        this.deduction = res.data
                        this.loaded    = 1
                    });
            },
            saveData () {
                this.$v.$touch()

                if(!this.$v.$anyError) {
                    this.loaded = 0
    
                    let params = {
                        deduction: this.deduction
                    }
                    
                    if(!this.$route.params.id) {
                        add_deduction (params)
                            .then(res => {
                                this.loaded = 1
                                this.$router.push({
                                    name: 'PayrollDeduction'
                                })
                            })
                            .catch(error => {
                                this.loaded = 1
                                console.log(error)
                            })
                    } else {
                        edit_deduction (this.$route.params.id, params)
                            .then(res => {
                                this.loaded = 1
                                this.$router.push({
                                    name: 'PayrollDeduction'
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
            "deduction.type" (type) {
                if(type == 'percent') {
                    this.percentages = []
                    let num = 1
                    do {
                        this.percentages.push(num)
                        if(num < 10) num++
                        else num += 5
                    }
                    while(num <= 50)
                    this.deduction.percent = 1
                } else {
                    this.percentages.push(0)
                    this.deduction.percent = 0
                }

                this.fetch_employees()
            },
            "deduction.gender" () {
                this.fetch_last_deduction()
            },
            "deduction.name" () {
                this.fetch_last_deduction()
            }
        }
    }
</script>
