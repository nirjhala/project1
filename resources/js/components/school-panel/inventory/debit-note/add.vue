<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'ViewDebitNote'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >View Debit Notes</router-link>
            </div>
            <h3>{{ $route.params.id ? 'Edit' : 'Add' }} Debit Notes</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'InventoryMaster' }">Inventory Master</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'ViewDebitNote' }">Debit Notes</router-link>
                </li>
                <li>{{ $route.params.id ? 'Edit' : 'Add' }} Debit Notes</li>
            </ul>
        </div>

        <form
            method="post"
            @submit.prevent="saveData"
        >
            <b-row>
                <b-col
                    sm="8"
                >
                    <b-row
                        v-if="items.length"
                    >
                        <b-col
                            xs="3"
                            v-for="(item, i) in items"
                            :key="i"
                        >
                            <b-card>
                                <template #header>
                                    <div
                                        class="float-right"
                                    >
                                        <b-button
                                            type="button"
                                            variant="dark"
                                            @click="addToCart(item)"
                                            v-if="!carts[item.id]"
                                        >Add</b-button>
                                        <div
                                            v-if="carts[item.id]"
                                            class="d-flex cart-input"
                                        >
                                            <button 
                                                type="button" 
                                                @click="decreamentCart(item.id)"
                                            ><i class="icon-minus-circle1"></i></button>
                                            <input type="text" v-model="carts[item.id].qty">
                                            <button 
                                                type="button"
                                                @click="increamentCart(item)"
                                            ><i class="icon-plus-circle1"></i></button>
                                        </div>
                                    </div>
                                    <div>{{ item.name }}</div>
                                </template>
                                <div>{{ item.description }}</div>
                                <div 
                                    class="float-right"
                                ><strong>Purchase Qty:</strong> {{ item.pivot.qty }}</div>
                                <div>
                                    ₹ {{ item.pivot.price }}
                                </div>
                            </b-card>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col
                    sm="4"
                >
                    <b-card class="h-auto">
                        <b-form-group
                            label="Select Purchase Invoice"
                        >
                            <select-search 
                                :options="purchases"
                                placeholder="Select Purchase Invoice"
                                :customClass="{
                                    'is-invalid': $v.debit_note.purchase_id.$error
                                }"
                                @input="changePurchaseInvoice"
                            ></select-search>
                        </b-form-group>
                        <div
                            v-if="totalCartAmount"
                        >
                            <b-form-group>
                                <div class="row"
                                    v-for="(item, id) in carts"
                                    :key="id"
                                >
                                    <div class="col">
                                        {{ item.name }}
                                    </div>
                                    <div class="col">
                                        ₹{{ item.price }} x {{ item.qty }}
                                    </div>
                                    <div class="col text-right">
                                        ₹{{ item.price * item.qty }}
                                    </div>
                                </div>
                                <hr>
                                <div
                                    class="row font-weight-bold"
                                    v-if="totalCartAmount"
                                >
                                    <div class="col-8">TOTAL</div>
                                    <div class="col-4 text-right">₹{{ totalCartAmount }}</div>
                                </div>
                                <div
                                    class="row font-weight-bold"
                                    v-if="totalCartAmount"
                                >
                                    <div class="col-8">GST</div>
                                    <div class="col-4 text-right">₹{{ totalGST }}</div>
                                </div>
                                <div
                                    class="row font-weight-bold"
                                    v-if="totalCartAmount"
                                >
                                    <div class="col-8">NET AMOUNT</div>
                                    <div class="col-4 text-right">₹{{ Math.floor(totalCartAmount + totalGST) }}</div>
                                </div>
                            </b-form-group>
                            <b-form-group
                                label="Payment Mode"
                            >
                                <select
                                    v-model.trim="$v.debit_note.payment_mode.$model"
                                    class="form-control"
                                    :class="{
                                        'is-invalid': $v.debit_note.payment_mode.$error
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
                            <b-form-group
                                v-if="debit_note.payment_mode != 'Cash'"
                                :label="debit_note.payment_mode == 'Cheque' ? 'Cheque No.' : 'Txn. Number'"
                            >
                                <b-input
                                    :placeholder="debit_note.payment_mode == 'Cheque' ? 'Cheque No.' : 'Txn. Number'"
                                    v-model.trim="debit_note.txn_number"
                                ></b-input>
                            </b-form-group>
                            <b-form-group
                                label="Reason"
                            >
                                <b-input
                                    v-model.trim="$v.debit_note.reason.$model"
                                    placeholder="Reason"
                                    list="reasons"
                                    :class="{
                                        'is-invalid': $v.debit_note.reason.$error
                                    }"
                                ></b-input>
                                <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                                <datalist id="reasons">
                                    <option value="Wrong Item Ordered"></option>
                                    <option value="Wrong Item Shipped"></option>
                                    <option value="No Longer Needed"></option>
                                    <option value="Didn't Match Its Description"></option>
                                    <option value="A Wrong Gift Purchase"></option>
                                    <option value="Damaged Item"></option>
                                </datalist>
                            </b-form-group>
                            <b-form-group
                                label="Remarks"
                            >
                                <b-textarea
                                    v-model.trim="debit_note.remarks"
                                    class="h-auto"
                                    placeholder="Remarks"
                                    rows="4"
                                ></b-textarea>
                            </b-form-group>
                            <div
                                v-if="loading"
                            ><b-spinner></b-spinner> In process, please wait...</div>
                            <b-button
                                v-if="!loading && totalCartAmount && debit_note.purchase_id"
                                type="submit"
                                class="fw-btn-fill btn-gradient-yellow text-white router-link-active"
                            >{{ $route.params.id ? 'Update' : 'Save' }}</b-button>
                        </div>
                    </b-card>
                </b-col>
            </b-row>
        </form>
    </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
import SelectSearch from "../../../SelectSearch"
import api, { add_debit_note, edit_debit_note, show_debit_note, show_purchase, view_item, view_purchase } from '../../../../api/script'
export default {
    components: {
        SelectSearch
    },
    data () {
        return {
            country_id: '',
            state_id: '',
            debit_note: {
                purchase_id: '',
                total_amount: 0,
                paid_amount: 0,
                payment_mode: 'Cash',
                txn_number: '',
                reason: '',
                remarks: ''
            },
            items: [],
            carts: {},
            purchases: {},
            loading: false
        }
    },
    validations: {
        debit_note: {
            purchase_id: {
                required
            },
            payment_mode: {
                required
            },
            reason: {
                required
            }
        }
    },
    computed: {
        totalCartAmount () {
            let total = 0
            for(let id in this.carts)
            {
                total += parseFloat(this.carts[id].price * this.carts[id].qty)
            }
            this.debit_note.total_amount = Math.round(total * 100) / 100
            return Math.round(total * 100) / 100
        },
        totalGST () {
            let total = 0, item, cart
            if(this.items.length) {
                for(let index in this.items)
                {
                    item = this.items[index]
                    
                    if (this.carts[item.id]) {
                        cart    = this.carts[item.id]
                        total  += parseFloat(cart.price * cart.qty * item.gst_rate / 100)
                    }
                }
            }

            return Math.round(total * 100) / 100
        }
    },
    mounted () {
        // this.fetchItems()
        this.fetchPurchases()
        // this.fetchSessions()

        if(this.$route.params.id) {
            this.getInfo()
        }
    },
    methods: {
        addToCart(item) {
            Vue.set(this.carts, item.id, {})
            this.carts[item.id] = {
                qty: 1,
                price: item.pivot.price,
                name: item.name,
                discount_amt: 0,
                discount_per: 0
            }
        },
        changePurchaseInvoice (purchase_id) {
            this.debit_note.purchase_id = purchase_id

            show_purchase (purchase_id)
                .then (res => {
                    this.items = res.data.purchase.items
                })
        },
        updateCart(id, obj) {
            for(let index in obj)
            {
                this.carts[`${id}`][index] = obj[index]
            }
        },
        increamentCart(item) {
            if(this.carts[item.id].qty < item.pivot.qty) {
                let obj = {}
                obj.qty = parseInt(this.carts[item.id].qty) + 1
    
                this.updateCart(item.id, obj)
            }
        },
        decreamentCart(id) {
            if(this.carts[id].qty > 1) {
                let obj = {}
                obj.qty = parseInt(this.carts[id].qty) - 1
    
                this.updateCart(id, obj)
            } else {
                Vue.delete(this.carts, id)
            }
        },
        fetchItems () {
            view_item(`limit=100`)
                .then(res => {
                    this.items = res.data
                })
        },
        fetchPurchases () {
            view_purchase('type=all')
                .then(res => {
                    this.purchases = res.data
                })
        },
        getInfo () {
            show_debit_note (this.$route.params.id)
                .then(res => {
                    this.debit_note = res.data
                })
        },
        saveData () {
            this.$v.$touch()

            if(!this.$v.$anyError) {
                this.loading = true
                let params = {
                    debit_note: this.debit_note,
                    items: this.carts
                }
                let apiResponse = ''
    
                if (!this.$route.params.id) {
                    apiResponse = add_debit_note (params)
                } else {
                    apiResponse = edit_debit_note (this.$route.params.id, params)
                }
                
                apiResponse
                    .then(res => {
                        this.loading = false
                        this.$router.push({
                            name: 'ViewDebitNote'
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
