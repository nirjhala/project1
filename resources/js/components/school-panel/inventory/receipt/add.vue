<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'ViewReceipt'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >View Receipts</router-link>
            </div>
            <h3>{{ $route.params.id ? 'Edit' : 'Add' }} Receipts</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'InventoryMaster' }">Inventory Master</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'ViewReceipt' }">Receipts</router-link>
                </li>
                <li>{{ $route.params.id ? 'Edit' : 'Add' }} Receipts</li>
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
                        label="Select Sale Invoice"
                    >
                        <select-search 
                            :options="sales"
                            placeholder="Select Sale Invoice"
                            :customClass="{
                                'is-invalid': $v.receipt.sale_id.$error
                            }"
                            @input="changeSaleInvoice"
                        ></select-search>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="Amount"
                    >
                        <b-input
                            type="number"
                            v-model="$v.receipt.amount.$model"
                            placeholder="Enter Amount"
                            :class="{
                                'is-invalid': $v.receipt.amount.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please enter amount.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="Payment Mode"
                    >
                        <select
                            v-model.trim="$v.receipt.payment_mode.$model"
                            class="form-control"
                            :class="{
                                'is-invalid': $v.receipt.payment_mode.$error
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
                    v-if="receipt.payment_mode != 'Cash'"
                    :label="receipt.payment_mode == 'Cheque' ? 'Cheque No.' : 'Txn. Number'"
                >
                    <b-input
                        :placeholder="receipt.payment_mode == 'Cheque' ? 'Cheque No.' : 'Txn. Number'"
                        v-model.trim="receipt.txn_number"
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
import { add_receipt, add_sale, edit_receipt, edit_sale, show_sale, view_item, view_sale, view_users } from '../../../../api/script'
import SelectSearch from '../../../SelectSearch.vue'
export default {
    components: {
        SelectSearch
    },
    data () {
        return {
            country_id: '',
            state_id: '',
            receipt: {
                sale_id: '',
                amount: 0,
                payment_mode: 'Cash',
                txn_number: '',
                remarks: ''
            },
            items: {},
            carts: {},
            customers: {},
            sales: {},
            loading: false
        }
    },
    validations: {
        receipt: {
            sale_id: {
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
        this.fetchSales()

        if(this.$route.params.id) {
            this.getInfo()
        }
    },
    methods: {
        fetchSales () {
            view_sale (`type=all`)
                .then(res => {
                    this.sales = res.data
                })
        },
        changeSaleInvoice (id) {
            this.receipt.sale_id = id

            show_sale (id)
                .then(res => {
                    this.receipt.amount = res.data.due_amount
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
                    receipt: this.receipt
                }
                let apiResponse = ''
    
                if (!this.$route.params.id) {
                    apiResponse = add_receipt (params)
                } else {
                    apiResponse = edit_receipt (this.$route.params.id, params)
                }
                
                apiResponse
                    .then(res => {
                        this.loading = false
                        this.$router.push({
                            name: 'ViewReceipt'
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
            this.receipt.paid_amount = Math.floor(this.totalCartAmount + this.totalGST)
        }
    }
}
</script>
