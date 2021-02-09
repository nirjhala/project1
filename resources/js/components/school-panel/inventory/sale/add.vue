<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'ViewSale'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >View Sales</router-link>
            </div>
            <h3>{{ $route.params.id ? 'Edit' : 'Add' }} Sales</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'InventoryMaster' }">Inventory Master</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'ViewSale' }">Sales</router-link>
                </li>
                <li>{{ $route.params.id ? 'Edit' : 'Add' }} Sales</li>
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
                                            <input type="text" v-model="carts[item.id].qty" readonly>
                                            <button 
                                                type="button"
                                                @click="increamentCart(item.id, item)"
                                            ><i class="icon-plus-circle1"></i></button>
                                        </div>
                                    </div>
                                    <div>{{ item.name }}</div>
                                </template>
                                <div>{{ item.description }}</div>
                                <div class="float-right">Avaliable: {{ item.stock }}</div>
                                <div>
                                    ₹ {{ item.sale_price }}
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
                            <select-search 
                                :options="sessions"
                                placeholder="Select Session"
                                :customClass="{
                                    'is-invalid': $v.sale.session_id.$error
                                }"
                                @input="(id) => sale.session_id = id"
                            ></select-search>
                        </b-form-group>
                        <b-form-group
                            label="Select Customer"
                        >
                            <select-search 
                                :options="customers"
                                placeholder="Select Customer"
                                :customClass="{
                                    'is-invalid': $v.sale.customer_id.$error
                                }"
                                @input="(id) => sale.customer_id = id"
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
                                    <div class="col-4 text-right">₹{{ totalGST ? totalGST :  0 }}</div>
                                </div>
                                <div
                                    class="row font-weight-bold"
                                    v-if="totalCartAmount"
                                >
                                    <div class="col-8">NET AMOUNT</div>
                                    <div class="col-4 text-right">₹{{ totalCartAmount + totalGST }}</div>
                                </div>
                            </b-form-group>
                            <b-form-group
                                label="Payment Mode"
                            >
                                <select
                                    v-model.trim="$v.sale.payment_mode.$model"
                                    class="form-control"
                                    :class="{
                                        'is-invalid': $v.sale.payment_mode.$error
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
                                v-if="sale.payment_mode != 'Cash'"
                                :label="sale.payment_mode == 'Cheque' ? 'Cheque No.' : 'Txn. Number'"
                            >
                                <b-input
                                    :placeholder="sale.payment_mode == 'Cheque' ? 'Cheque No.' : 'Txn. Number'"
                                    v-model.trim="sale.txn_number"
                                ></b-input>
                            </b-form-group>
                            <b-form-group
                                label="Paid Amount"
                            >
                                <b-input
                                    type="number"
                                    v-model.trim="sale.paid_amount"
                                    placeholder="Enter Paid Amount"
                                ></b-input>
                            </b-form-group>
                            <div
                                v-if="loading"
                            ><b-spinner></b-spinner> In process, please wait...</div>
                            <b-button
                                v-if="!loading && totalCartAmount && sale.customer_id"
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
import api, { add_sale, edit_sale, view_item, view_supplier, view_users } from '../../../../api/script'
import SelectSearch from '../../../SelectSearch.vue'
export default {
    components: {
        SelectSearch
    },
    data () {
        return {
            country_id: '',
            state_id: '',
            sale: {
                session_id: '',
                customer_id: '',
                total_amount: 0,
                paid_amount: 0,
                payment_mode: 'Cash',
                txn_number: ''
            },
            items: {},
            carts: {},
            customers: {},
            sessions: {},
            loading: false
        }
    },
    validations: {
        sale: {
            session_id: {
                required
            },
            customer_id: {
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
            this.sale.total_amount = Math.round(total * 100) / 100
            return Math.round(total * 100) / 100
        },
        totalGST () {
            let total = 0, item, cart
            for(let index in this.items.data)
            {
                item = this.items.data[index]
                
                if (this.carts[item.id]) {
                    cart    = this.carts[item.id]
                    total  += parseFloat(cart.price * cart.qty * item.gst_rate / 100)
                }
            }

            return Math.round(total * 100) / 100
        }
    },
    mounted () {
        this.fetchItems()
        this.fetchCustomers()
        this.fetchSessions()

        if(this.$route.params.id) {
            this.getInfo()
        }
    },
    methods: {
        addToCart(id, item) {
            if(item.stock > 0) {
                Vue.set(this.carts, id, {})
                this.carts[id] = {
                    qty: 1,
                    price: item.sale_price,
                    name: item.name,
                    discount_amt: 0,
                    discount_per: 0
                }
            }
        },
        updateCart(id, obj) {
            for(let index in obj)
            {
                this.carts[`${id}`][index] = obj[index]
            }
        },
        increamentCart(id, item) {
            if(item.stock > this.carts[id].qty) {
                let obj = {}
                obj.qty = parseInt(this.carts[id].qty) + 1
    
                this.updateCart(id, obj)
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
        fetchCustomers () {
            view_users('type=all')
                .then(res => {
                    this.customers = res.data
                })
        },
        fetchSessions () {
            api.getAllSessions (`type=all`)
                .then(res => {
                    this.sessions = res.data
                    console.log('key array', Object.keys(res.data), typeof res.data);
                    setTimeout(() => {
                        if(typeof res.data === 'object') 
                            this.sale.session_id = parseInt(Object.keys(res.data)[0])
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
                    sale: this.sale,
                    sale_items: this.carts
                }
                let apiResponse = ''
    
                if (!this.$route.params.id) {
                    apiResponse = add_sale (params)
                } else {
                    apiResponse = edit_sale (this.$route.params.id, params)
                }
                
                apiResponse
                    .then(res => {
                        this.loading = false
                        this.$router.push({
                            name: 'ViewSale'
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
            this.sale.paid_amount = Math.floor(this.totalCartAmount + this.totalGST)
        }
    }
}
</script>
