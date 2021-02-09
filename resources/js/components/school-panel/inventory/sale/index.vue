<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'AddSale'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >Add Sales</router-link>
            </div>
            <h3>View Sales</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'InventoryMaster' }">Inventory Master</router-link>
                </li>
                <li>View Sales</li>
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
            v-if="!sales.data"
            class="text-center h-auto"
        >
            <b-spinner label="Spinning" style="width: 48px; height: 48px;"></b-spinner>
        </b-card>
        <div
            v-if="sales.data"
        >
            <b-card
                class="h-auto"
                v-if="!sales.data.length"
            >
                No record(s) found.
            </b-card>
            <b-card class="h-auto"
                v-if="sales.data.length"
            >
                <template #header>
                    <div
                        class="float-right"
                    >
                        {{ sales.from }} - {{ sales.to }} of {{ sales.total }} record(s) are showing.
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
                        :fields="sale.fields"
                        :items="sales.data"
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
                                    v-model="sale.check"
                                    :value="data.item.id"
                                > -->
                                {{ data.index + sales.from }}.
                            </label>
                        </template>
                        <template #cell(action)="data">
                            <a 
                                :href="`${baseURL}invoice/sale/${data.item.id}`"
                                target="_blank"
                            ><i class="icon-print"></i> Print</a>
                        </template>
                        <template #cell(description)="data">
                            <div>
                                <router-link
                                    :to="{
                                        name: 'EditSale',
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
                <pagination :data="sales" :limit="2" @pagination-change-page="fetchSales"></pagination>
            </b-card>
        </div>
    </div>
</template>
<script>
import { multiple_delete_sale, view_sale } from '../../../../api/script'
export default {
    data () {
        return {
            s: '',
            limit: 10,
            checkAll: false,
            sale: {
                check: [],
                fields: [
                    {
                        key: 'index',
                        label: 'Sr. No.'
                    },
                    {
                        key: 'customer_name',
                        sortable: true
                    },
                    {
                        key: 'full_invoice_no',
                        label: 'Invoice No.'
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
            sales: {}
        }
    },
    mounted () {
        this.fetchSales()
    },
    methods: {
        searchAfterDebounce: _.debounce(
            function () {
                this.fetchSales()
            }, 500
        ),
        selectAll () {
            this.sale.check = []
            if (!this.checkAll) {
                for (let index in this.sales.data) {
                    if(!this.sales.data[index].stock) {
                        this.sale.check.push(this.sales.data[index].id)
                    }
                }
            }
        },
        fetchSales (page = 1) {
            this.sales = {}
            view_sale (`page=${page}&limit=${this.limit}&s=${this.s}`)
                .then(res => {
                    this.sales = res.data
                })
        },
        deleteMultiple () {
            if(this.sale.check.length) {
                swal({
                  title: "Are you sure?",
                  text: "Once deleted, you will not be able to recover this record!",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                .then((willDelete) => {
                  if (willDelete) {
                      multiple_delete_sale ({ids: this.sale.check})
                        .then(res => {
                            this.$toast.success(res.data.message)
                            this.fetchSales(1)
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
            this.fetchSales(1)
        }
    }
}
</script>
