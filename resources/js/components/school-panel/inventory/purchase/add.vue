<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'ViewPurchase'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >View Purchases</router-link>
            </div>
            <h3>{{ $route.params.id ? 'Edit' : 'Add' }} Purchases</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'InventoryMaster' }">Inventory Master</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'ViewPurchase' }">Purchases</router-link>
                </li>
                <li>{{ $route.params.id ? 'Edit' : 'Add' }} Purchases</li>
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
                        v-if="items.data && items.data.length"
                    >
                        <b-col
                            xs="3"
                            v-for="(item, i) in items.data"
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
                                            @click="addToCart(item.id, item)"
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
                                                @click="increamentCart(item.id)"
                                            ><i class="icon-plus-circle1"></i></button>
                                        </div>
                                    </div>
                                    <div>{{ item.name }}</div>
                                </template>
                                <div>{{ item.description }}</div>
                                <div>
                                    ₹ {{ item.purchase_price }}
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
                            label="Select Session"
                        >
                            <select
                                v-model="$v.purchase.session_id.$model"
                                class="form-control"
                                :class="{
                                    'is-invalid': $v.purchase.session_id.$error
                                }"
                            >
                                <option 
                                    :value="id"
                                    v-for="(name, id) in sessions"
                                    :key="id"
                                >{{ name }}</option>
                            </select>
                            <b-form-invalid-feedback>Please select session</b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group
                            label="Select Supplier"
                        >
                            <select
                                v-model="$v.purchase.supplier_id.$model"
                                class="form-control"
                                :class="{
                                    'is-invalid': $v.purchase.supplier_id.$error
                                }"
                            >
                                <option value="">Select Supplier</option>
                                <option 
                                    :value="id"
                                    v-for="(name, id) in suppliers"
                                    :key="id"
                                >{{ name }}</option>
                            </select>
                            <b-form-invalid-feedback>Please select supplier</b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group
                            label="Purchase Invoice No."
                        >
                            <b-input
                                v-model.trim="$v.purchase.invoice_no.$model"
                                placeholder="Enter Invoice No."
                                :class="{
                                    'is-invalid': $v.purchase.invoice_no.$error
                                }"
                            ></b-input>
                            <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
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
                            </b-form-group>
                            <b-form-group
                                label="Payment Mode"
                            >
                                <select
                                    v-model.trim="$v.purchase.payment_mode.$model"
                                    class="form-control"
                                    :class="{
                                        'is-invalid': $v.purchase.payment_mode.$error
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
                                v-if="purchase.payment_mode != 'Cash'"
                                :label="purchase.payment_mode == 'Cheque' ? 'Cheque No.' : 'Txn. Number'"
                            >
                                <b-input
                                    :placeholder="purchase.payment_mode == 'Cheque' ? 'Cheque No.' : 'Txn. Number'"
                                    v-model.trim="purchase.txn_number"
                                ></b-input>
                            </b-form-group>
                            <b-form-group
                                label="Paid Amount"
                            >
                                <b-input
                                    type="number"
                                    v-model.trim="purchase.paid_amount"
                                    placeholder="Enter Paid Amount"
                                ></b-input>
                            </b-form-group>
                            <div
                                v-if="loading"
                            ><b-spinner></b-spinner> In process, please wait...</div>
                            <b-button
                                v-if="!loading && totalCartAmount && purchase.supplier_id"
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
import api, { add_purchase, edit_purchase, view_item, view_supplier } from '../../../../api/script'
export default {
    data () {
        return {
            country_id: '',
            state_id: '',
            purchase: {
                session_id: '',
                supplier_id: '',
                total_amount: 0,
                paid_amount: 0,
                invoice_no: '',
                payment_mode: 'Cash',
                txn_number: ''
            },
            items: {},
            carts: {},
            suppliers: {},
            sessions: {},
            loading: false
        }
    },
    validations: {
        purchase: {
            session_id: {
                required
            },
            supplier_id: {
                required
            },
            invoice_no: {
                required
            },
            payment_mode: {
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
            this.purchase.total_amount = Math.round(total * 100) / 100
            return Math.round(total * 100) / 100
        }
    },
    mounted () {
        this.fetchItems()
        this.fetchSuppliers()
        this.fetchSessions()

        if(this.$route.params.id) {
            this.getInfo()
        }
    },
    methods: {
        addToCart(id, item) {
            Vue.set(this.carts, id, {})
            this.carts[id] = {
                qty: 1,
                price: item.purchase_price,
                name: item.name,
                discount_amt: 0,
                discount_per: 0
            }
        },
        updateCart(id, obj) {
            for(let index in obj)
            {
                this.carts[`${id}`][index] = obj[index]
            }
        },
        increamentCart(id) {
            let obj = {}
            obj.qty = parseInt(this.carts[id].qty) + 1

            this.updateCart(id, obj)
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
        fetchSuppliers () {
            view_supplier('type=all')
                .then(res => {
                    this.suppliers = res.data
                })
        },
        fetchSessions () {
            api.getAllSessions (`type=all`)
                .then(res => {
                    this.sessions = res.data
                    console.log('key array', Object.keys(res.data), typeof res.data);
                    setTimeout(() => {
                        if(typeof res.data === 'object') 
                            this.purchase.session_id = parseInt(Object.keys(res.data)[0])
                    }, 10);
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
                    purchase: this.purchase,
                    purchase_items: this.carts
                }
                let apiResponse = ''
    
                if (!this.$route.params.id) {
                    apiResponse = add_purchase (params)
                } else {
                    apiResponse = edit_purchase (this.$route.params.id, params)
                }
                
                apiResponse
                    .then(res => {
                        this.loading = false
                        this.$router.push({
                            name: 'ViewPurchase'
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
