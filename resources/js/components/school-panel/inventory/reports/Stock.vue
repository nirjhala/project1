<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <h3>Stock Report</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'InventoryMaster' }">Inventory Master</router-link>
                </li>
                <li>Stock Report</li>
            </ul>
        </div>
        <b-card
            v-if="!stocks.data"
            class="text-center h-auto"
        >
            <b-spinner label="Spinning" style="width: 48px; height: 48px;"></b-spinner>
        </b-card>
        <div
            v-if="stocks.data"
        >
            <b-card
                class="h-auto"
                v-if="!stocks.data.length"
            >
                No record(s) found.
            </b-card>
            <b-card class="h-auto"
                v-if="stocks.data.length"
            >
                <template #header>
                    <div
                        class="float-right"
                    >
                        {{ stocks.from }} - {{ stocks.to }} of {{ stocks.total }} record(s) are showing.
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
                        :fields="stock.fields"
                        :items="stocks.data"
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
                                    v-model="stock.check"
                                    :value="data.item.id"
                                > -->
                                {{ data.index + stocks.from }}.
                            </label>
                        </template>
                        <template #cell(action)="data">
                            <a 
                                :href="`${baseURL}invoice/stock/${data.item.id}`"
                                target="_blank"
                            ><i class="icon-print"></i> Print</a>
                        </template>
                        <template #cell(created_at)="data">
                            {{ data.item.created_at | formatDate }}
                        </template>
                        <template #cell(description)="data">
                            <div>
                                <router-link
                                    :to="{
                                        name: 'EditReceipt',
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
                <pagination :data="stocks" :limit="2" @pagination-change-page="fetchReceipts"></pagination>
            </b-card>
        </div>
    </div>
</template>
<script>
import { view_stock } from '../../../../api/script'
export default {
    data () {
        return {
            s: '',
            limit: 100,
            checkAll: false,
            stock: {
                check: [],
                fields: [
                    {
                        key: 'index',
                        label: 'Sr. No.'
                    },
                    {
                        key: 'item.name',
                        label: 'Item Name',
                        sortable: true
                    },
                    {
                        key: 'qty_in'
                    },
                    {
                        key: 'qty_out'
                    },
                    {
                        key: 'remarks',
                        sortable: true
                    },
                    {
                        label: 'Date',
                        key: 'created_at',
                        sortable: true
                    }
                ]
            },
            stocks: {}
        }
    },
    mounted () {
        this.fetchReceipts()
    },
    methods: {
        searchAfterDebounce: _.debounce(
            function () {
                this.fetchReceipts()
            }, 500
        ),
        selectAll () {
            this.stock.check = []
            if (!this.checkAll) {
                for (let index in this.stocks.data) {
                    if(!this.stocks.data[index].stock) {
                        this.stock.check.push(this.stocks.data[index].id)
                    }
                }
            }
        },
        fetchReceipts (page = 1) {
            this.stocks = {}
            view_stock (`page=${page}&limit=${this.limit}&s=${this.s}`)
                .then(res => {
                    this.stocks = res.data
                })
        }
    },
    watch: {
        s() {
            this.searchAfterDebounce()
        },
        limit () {
            this.fetchReceipts(1)
        }
    }
}
</script>
