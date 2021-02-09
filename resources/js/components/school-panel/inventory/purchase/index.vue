<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'AddPurchase'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >Add Purchases</router-link>
            </div>
            <h3>View Purchases</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'InventoryMaster' }">Inventory Master</router-link>
                </li>
                <li>View Purchases</li>
            </ul>
        </div>
        <b-form-group>
            <b-input
                type="search"
                v-model.trim="s"
                placeholder="Search ..."
            ></b-input>
        </b-form-group>
        <b-card
            v-if="!purchases.data"
            class="text-center h-auto"
        >
            <b-spinner label="Spinning" style="width: 48px; height: 48px;"></b-spinner>
        </b-card>
        <div
            v-if="purchases.data"
        >
            <b-card
                class="h-auto"
                v-if="!purchases.data.length"
            >
                No record(s) found.
            </b-card>
            <b-card class="h-auto"
                v-if="purchases.data.length"
            >
                <template #header>
                    <div
                        class="float-right"
                    >
                        {{ purchases.from }} - {{ purchases.to }} of {{ purchases.total }} record(s) are showing.
                    </div>
                    <!-- <a 
                        href="javascript:" 
                        class="icon icon-delete text-dark" 
                        title="Remove Selected"
                        @click="deleteMultiple"
                    ></a> -->
                    <select
                        v-model="limit"
                    >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <span>Per Page</span>
                </template>
                <div
                    class="table-responsive"
                >
                    <b-table
                        :fields="purchase.fields"
                        :items="purchases.data"
                        :foot-clone="true"
                        striped
                        bordered
                    >
                        <!-- <template #head(index)="data">
                            <label>
                                <input type="checkbox" v-model="checkAll" value="1" @click="selectAll">
                                {{ data.label }}
                            </label>
                        </template> -->
                        <template #cell(index)="data">
                            <label>
                                <!-- <input 
                                    type="checkbox"
                                    v-model="purchase.check"
                                    :value="data.item.id"
                                > -->
                                {{ data.index + purchases.from }}.
                            </label>
                        </template>
                        <template #cell(action)="data">
                            <a 
                                :href="`${baseURL}invoice/purchase/${data.item.id}`"
                                target="_blank"
                            ><i class="icon-print"></i> Print</a>
                        </template>
                        <template #cell(description)="data">
                            <div>
                                <router-link
                                    :to="{
                                        name: 'EditPurchase',
                                        params: {
                                            id: data.item.id
                                        }
                                    }"
                                ><i class="icon-mode_edit"></i> {{ data.item.organization_name }}</router-link>
                            </div>
                            <div>{{ data.item.name }}</div>
                        </template>
                    </b-table>
                </div>
                <pagination :data="purchases" :limit="2" @pagination-change-page="fetchPurchases"></pagination>
            </b-card>
        </div>
    </div>
</template>
<script>
import { multiple_delete_purchase, view_purchase } from '../../../../api/script'
export default {
    data () {
        return {
            s: '',
            limit: 10,
            checkAll: false,
            purchase: {
                check: [],
                fields: [
                    {
                        key: 'index',
                        label: 'Sr. No.'
                    },
                    {
                        key: 'supplier_name',
                        sortable: true
                    },
                    {
                        key: 'invoice_no'
                    },
                    {
                        key: 'payment_mode'
                    },
                    {
                        key: 'total_amount',
                        sortable: true
                    },
                    {
                        key: 'paid_amount',
                        sortable: true
                    },
                    {
                        key: 'action'
                    }
                ]
            },
            purchases: {}
        }
    },
    mounted () {
        this.fetchPurchases()
    },
    methods: {
        searchAfterDebounce: _.debounce(
            function () {
                this.fetchPurchases()
            }, 500
        ),
        selectAll () {
            this.purchase.check = []
            if (!this.checkAll) {
                for (let index in this.purchases.data) {
                    if(!this.purchases.data[index].stock) {
                        this.purchase.check.push(this.purchases.data[index].id)
                    }
                }
            }
        },
        fetchPurchases (page = 1) {
            this.purchases = {}
            view_purchase (`page=${page}&limit=${this.limit}&s=${this.s}`)
                .then(res => {
                    this.purchases = res.data
                })
        },
        deleteMultiple () {
            if(this.purchase.check.length) {
                swal({
                  title: "Are you sure?",
                  text: "Once deleted, you will not be able to recover this record!",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                .then((willDelete) => {
                  if (willDelete) {
                      multiple_delete_purchase ({ids: this.purchase.check})
                        .then(res => {
                            this.$toast.success(res.data.message)
                            this.fetchPurchases(1)
                        })
                  }
                })
            } else {
                swal("Warning", "Please select at least one record to delete.", "warning")
            }
        }
    },
    watch: {
        s() {
            this.searchAfterDebounce()
        },
        limit () {
            this.fetchPurchases(1)
        }
    }
}
</script>
