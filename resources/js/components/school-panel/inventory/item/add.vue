<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'ViewItem'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >View Items</router-link>
            </div>
            <h3>{{ $route.params.id ? 'Edit' : 'Add' }} Items</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'InventoryMaster' }">Inventory Master</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'ViewItem' }">Items</router-link>
                </li>
                <li>{{ $route.params.id ? 'Edit' : 'Add' }} Items</li>
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
                        v-model.trim="item.name"
                    ></b-input>
                </b-form-group>
                <b-form-group
                    label="Description"
                >
                    <b-textarea
                        rows="5"
                        placeholder="Enter Desription"
                        v-model.trim="item.description"
                        class="h-auto"
                    ></b-textarea>
                </b-form-group>
                <b-row>
                    <b-form-group
                        class="col-sm-4"
                        label="Purchase Price"
                    >
                        <b-input
                            type="number"
                            placeholder="Enter Purchase Price"
                            v-model.trim="item.purchase_price"
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="Margin"
                    >
                        <b-input
                            type="number"
                            placeholder="Enter Margin"
                            v-model.trim="item.margin"
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="Sale Price"
                    >
                        <b-input
                            type="number"
                            placeholder="Enter Sale Price"
                            v-model.trim="item.sale_price"
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="Price Type"
                    >
                        <label class="d-block">
                            <input type="radio" v-model="item.type" value="inc">
                            Inclusive GST
                        </label>
                        <label class="d-block">
                            <input type="radio" v-model="item.type" value="excl">
                            Exclusive GST
                        </label>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="GST Rate"
                    >
                        <select
                            v-model="item.gst_rate"
                            class="form-control"
                        >
                            <option
                                v-for="(r, i) in gst_rates"
                                :key="i"
                                :value="r"
                            >{{ r }}</option>
                        </select>
                    </b-form-group>
                </b-row>
                <b-button
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
import { add_item, edit_item, show_item, view_gst_rates } from '../../../../api/script'
export default {
    data () {
        return {
            item: {
                name: '',
                description: '',
                purchase_price: 0,
                margin: 0,
                sale_price: 0,
                gst_rate: 0,
                type: 'inc'
            },
            gst_rates: []
        }
    },
    validations: {
        item: {
            name: {
                required
            },
            purchase_price: {
                required
            },
            margin: {
                required
            },
            sale_price: {
                required
            }
        }
    },
    mounted () {
        this.fetchGstRates()

        if(this.$route.params.id) {
            this.getInfo()
        }
    },
    methods: {
        fetchGstRates () {
            view_gst_rates()
                .then(res => {
                    this.gst_rates = res.data
                })
        },
        getInfo () {
            show_item (this.$route.params.id)
                .then(res => {
                    this.item = res.data
                })
        },
        saveData () {
            let params = {item: this.item}
            let apiResponse = ''

            if (!this.$route.params.id) {
                apiResponse = add_item (params)
            } else {
                apiResponse = edit_item (this.$route.params.id, params)
            }
            
            apiResponse
                .then(res => {
                    this.$router.push({
                        name: 'ViewItem'
                    })
                    .then(() => {
                        this.$toast.success(res.data.message)
                    })
                })
        }
    }
}
</script>
