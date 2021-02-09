<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'ViewPayment'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >View Payments</router-link>
            </div>
            <h3>{{ $route.params.id ? 'Edit' : 'Add' }} Payments</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'InventoryMaster' }">Inventory Master</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'ViewPayment' }">Payments</router-link>
                </li>
                <li>{{ $route.params.id ? 'Edit' : 'Add' }} Payments</li>
            </ul>
        </div>

        <form
            method="post"
            @submit.prevent="saveData"
        >
            <b-card class="h-auto">
                <b-row>
                    <b-form-group
                        class="col-sm-4"
                        label="Select Purchase Invoice"
                    >
                        <select-search 
                            :options="purchases"
                            placeholder="Select Purchase Invoice"
                            :customClass="{
                                'is-invalid': $v.payment.purchase_id.$error
                            }"
                            @input="changePurchaseInvoice"
                        ></select-search>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="Amount"
                    >
                        <b-input
                            type="number"
                            v-model="$v.payment.amount.$model"
                            placeholder="Enter Amount"
                            :class="{
                                'is-invalid': $v.payment.amount.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please enter amount.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="Payment Mode"
                    >
                        <select
                            v-model.trim="$v.payment.payment_mode.$model"
                            class="form-control"
                            :class="{
                                'is-invalid': $v.payment.payment_mode.$error
                            }"
                        >
                            <option value="Cash">Cash</option>
                            <option value="Card">Card</option>
                            <option value="PayTM">PayTM</option>
                            <option value="Cheque">Cheque</option>
                            <option value="UPI">UPI</option>
                            <option value="Demand Draft">Demand Draft - DD</option>
                            <option value="Bank Transfer">Bank Transfer like NEFT, EFT, etc.</option>
                            <option value="Other">Other payment options.</option>
                        </select>
                    </b-form-group>
                </b-row>
                <b-form-group
                    v-if="payment.payment_mode != 'Cash'"
                    :label="payment.payment_mode == 'Cheque' ? 'Cheque No.' : 'Txn. Number'"
                >
                    <b-input
                        :placeholder="payment.payment_mode == 'Cheque' ? 'Cheque No.' : 'Txn. Number'"
                        v-model.trim="payment.txn_number"
                    ></b-input>
                </b-form-group>
                <b-form-group
                    label="Remarks"
                >
                    <b-textarea
                        placeholder="Remarks (if any)"
                        class="h-auto"
                        rows="10"
                    ></b-textarea>
                </b-form-group>   
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
import { required } from 'vuelidate/lib/validators'
import { add_payment, edit_payment, show_purchase, view_purchase } from '../../../../api/script'
import SelectSearch from '../../../SelectSearch.vue'
export default {
    components: {
        SelectSearch
    },
    data () {
        return {
            country_id: '',
            state_id: '',
            payment: {
                purchase_id: '',
                amount: 0,
                payment_mode: 'Cash',
                txn_number: '',
                remarks: ''
            },
            items: {},
            carts: {},
            customers: {},
            purchases: {},
            loading: false
        }
    },
    validations: {
        payment: {
            purchase_id: {
                required
            },
            amount: {
                required
            },
            payment_mode: {
                required
            }
        }
    },
    mounted () {
        this.fetchPurchases()

        if(this.$route.params.id) {
            this.getInfo()
        }
    },
    methods: {
        fetchPurchases () {
            view_purchase (`type=all`)
                .then(res => {
                    this.purchases = res.data
                })
        },
        changePurchaseInvoice (id) {
            this.payment.purchase_id = id

            show_purchase (id)
                .then(res => {
                    this.payment.amount = res.data.due_amount
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
                let params = {
                    payment: this.payment
                }
                let apiResponse = ''
    
                if (!this.$route.params.id) {
                    apiResponse = add_payment (params)
                } else {
                    apiResponse = edit_payment (this.$route.params.id, params)
                }
                
                apiResponse
                    .then(res => {
                        this.loading = false
                        this.$router.push({
                            name: 'ViewPayment'
                        })
                        .then(() => {
                            this.$toast.success(res.data.message)
                        })
                    })
                    .catch(err => {
                        console.log(err)
                        this.loading = false
                    })
            }
        }
    },
    watch: {
        totalGST () {
            this.payment.paid_amount = Math.floor(this.totalCartAmount + this.totalGST)
        }
    }
}
</script>
