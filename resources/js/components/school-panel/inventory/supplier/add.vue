<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'ViewSupplier'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >View Suppliers</router-link>
            </div>
            <h3>{{ $route.params.id ? 'Edit' : 'Add' }} Suppliers</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'InventoryMaster' }">Inventory Master</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'ViewSupplier' }">Suppliers</router-link>
                </li>
                <li>{{ $route.params.id ? 'Edit' : 'Add' }} Suppliers</li>
            </ul>
        </div>

        <form
            method="post"
            @submit.prevent="saveData"
        >
            <b-card class="h-auto">
                <b-form-group
                    label="Name"
                >
                    <b-input
                        placeholder="Enter Name"
                        v-model.trim="$v.supplier.name.$model"
                        :class="{
                            'is-invalid': $v.supplier.name.$error
                        }"
                    ></b-input>
                    <b-form-invalid-feedback>Please enter Name</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group
                    label="Company / Organization Name"
                >
                    <b-input
                        placeholder="Enter Company / Organization Name"
                        v-model.trim="$v.supplier.organization_name.$model"
                        :class="{
                            'is-invalid': $v.supplier.organization_name.$error
                        }"
                    ></b-input>
                    <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                </b-form-group>
                <b-row>
                    <b-form-group
                        class="col-sm-4"
                        label="Email ID"
                    >
                        <b-input
                            type="email"
                            placeholder="Enter Email Address"
                            v-model.trim="$v.supplier.email.$model"
                            :class="{
                                'is-invalid': $v.supplier.email.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback
                            v-if="!$v.supplier.email.required"
                        >Please enter required field</b-form-invalid-feedback>
                        <b-form-invalid-feedback
                            v-if="!$v.supplier.email.email"
                        >Please enter valid email address.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="Phone No."
                    >
                        <b-input
                            type="number"
                            placeholder="Enter Phone No."
                            v-model.trim="supplier.phone"
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="Mobile No."
                    >
                        <b-input
                            type="number"
                            placeholder="Enter Mobile No."
                            v-model.trim="supplier.mobile"
                        ></b-input>
                    </b-form-group>
                </b-row>
                <b-form-group
                    label="Address"
                >
                    <b-textarea
                        rows="5"
                        placeholder="Enter Address"
                        v-model.trim="$v.supplier.address.$model"
                        class="h-auto"
                        :class="{
                            'is-invalid': $v.supplier.address.$error
                        }"
                    ></b-textarea>
                    <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                </b-form-group>
                <b-row>
                    <b-form-group
                        class="col-sm-3"
                        label="Country"
                    >
                        <select
                            v-model="$v.country_id.$model"
                            class="form-control"
                            :class="{
                                'is-invalid': $v.country_id.$error
                            }"
                            @change="fetchStates"
                        >
                            <option value="">Select Country</option>
                            <option 
                                :value="id"
                                v-for="(name, id) in countries"
                                :key="id"
                            >{{ name }}</option>
                        </select>
                        <b-form-invalid-feedback>Please select country</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-3"
                        label="State"
                    >
                        <select
                            v-model="$v.state_id.$model"
                            class="form-control"
                            :class="{
                                'is-invalid': $v.state_id.$error
                            }"
                            @change="fetchCities"
                        >
                            <option value="">Select State</option>
                            <option 
                                :value="id"
                                v-for="(name, id) in states"
                                :key="id"
                            >{{ name }}</option>
                        </select>
                        <b-form-invalid-feedback>Please select state.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-3"
                        label="City"
                    >
                        <select
                            v-model="$v.supplier.city_id.$model"
                            class="form-control"
                            :class="{
                                'is-invalid': $v.supplier.city_id.$error
                            }"
                        >
                            <option value="">Select City</option>
                            <option 
                                :value="id"
                                v-for="(name, id) in cities"
                                :key="id"
                            >{{ name }}</option>
                        </select>
                        <b-form-invalid-feedback>Please select city.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-3"
                        label="Pincode"
                    >
                        <b-input
                            v-model="$v.supplier.pincode.$model"
                            placeholder="Enter 6 digit pincode"
                            :class="{
                                'is-invalid': $v.supplier.pincode.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                    </b-form-group>
                </b-row>
                <div
                    v-if="loading"
                ><b-spinner></b-spinner> In process, please wait...</div>
                <b-button
                    v-if="!loading"
                    type="submit"
                    class="fw-btn-fill btn-gradient-yellow text-white router-link-active"
                    style="max-width: 100px;"
                >{{ $route.params.id ? 'Update' : 'Save' }}</b-button>
            </b-card>
        </form>
    </div>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'
import { add_supplier, edit_supplier, show_supplier, view_city, view_country, view_state } from '../../../../api/script'
export default {
    data () {
        return {
            country_id: '',
            state_id: '',
            supplier: {
                name: '',
                organization_name: '',
                email: '',
                phone: '',
                mobile: '',
                address: '',
                city_id: '',
                pincode: ''
            },
            countries: {},
            states: {},
            cities: {},
            loading: false
        }
    },
    validations: {
        supplier: {
            name: {
                required
            },
            organization_name: {
                required
            },
            email: {
                required,
                email
            },
            address: {
                required
            },
            city_id: {
                required
            },
            pincode: {
                required
            }
        },
        country_id: {
            required
        },
        state_id: {
            required
        }
    },
    mounted () {
        this.fetchCounties()

        if(this.$route.params.id) {
            this.getInfo()
        }
    },
    methods: {
        fetchCounties () {
            view_country(`type=all`)
                .then(res => {
                    this.countries = res.data
                })
        },
        fetchStates () {
            view_state(`type=all&country_id=${this.country_id}`)
                .then(res => {
                    this.states = res.data
                })
        },
        fetchCities () {
            view_city(`type=all&state_id=${this.state_id}`)
                .then(res => {
                    this.cities = res.data
                })
        },
        getInfo () {
            show_supplier (this.$route.params.id)
                .then(res => {
                    this.item = res.data
                })
        },
        saveData () {
            this.$v.$touch()

            if(!this.$v.$anyError) {
                this.loading = true
                let params = {supplier: this.supplier}
                let apiResponse = ''
    
                if (!this.$route.params.id) {
                    apiResponse = add_supplier (params)
                } else {
                    apiResponse = edit_supplier (this.$route.params.id, params)
                }
                
                apiResponse
                    .then(res => {
                        this.loading = false
                        this.$router.push({
                            name: 'ViewSupplier'
                        })
                        .then(() => {
                            this.$toast.success(res.data.message)
                        })
                    })
                    .catch(err => {
                        this.loading = false
                    })
            }
        }
    }
}
</script>
