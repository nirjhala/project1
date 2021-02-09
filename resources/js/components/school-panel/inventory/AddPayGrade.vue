<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'PayGrade'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >View Pay Grade</router-link>
            </div>
            <h3>{{ !$route.params.id ? 'Add' : 'Edit' }} Pay Grade</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'PayrollMaster' }">Payroll Management Master</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'PayGrade' }">Pay Grade</router-link>
                </li>
                <li>{{ !$route.params.id ? 'Add' : 'Edit' }} Pay Grade</li>
            </ul>
        </div>
        <!-- Breadcrumbs Area End Here -->

        <!-- Card Table Area Start Here -->
        <b-card
            :title="!$route.params.id ? `Create Pay Grade` : `Edit Pay Grade`"
            class="h-auto"
        >
            <b-form
                method="post"
                @submit.prevent="saveData"
            >
                <b-form-group
                    label="Grade Pay Name *"
                >
                    <b-input
                        placeholder="Enter Grade Pay Name"
                        v-model="$v.pay_grade.name.$model"
                    ></b-input>
                    <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                </b-form-group>
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
    import { add_pay_grade, edit_pay_grade, show_pay_grade } from '../../../api/script'

    export default {
        data() {
            return {
                pay_grade: {
                    name: ''
                },
                success: null,
                errors: [],
                loaded: 0
            }
        },
        validations() {
            return {
                pay_grade: {
                    name: {
                        required
                    }
                }
            }
        },
        mounted() {
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
            getInfo () {
                this.loaded = 0
                show_pay_grade (this.$route.params.id)
                    .then(res => {
                        this.pay_grade   = res.data
                        this.loaded = 1
                    });
            },
            saveData () {
                this.$v.$touch()

                if(!this.$v.$anyError) {
                    this.loaded = 0
    
                    let params = {
                        pay_grade: this.pay_grade
                    }
                    
                    if(!this.$route.params.id) {
                        add_pay_grade (params)
                            .then(res => {
                                this.loaded = 1
                                this.$router.push({
                                    name: 'PayGrade'
                                })
                            })
                            .catch(error => {
                                this.loaded = 1
                                console.log(error)
                            })
                    } else {
                        edit_pay_grade (this.$route.params.id, params)
                            .then(res => {
                                this.loaded = 1
                                this.$router.push({
                                    name: 'PayGrade'
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
