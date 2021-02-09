<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'AddPayment'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >Add Payments</router-link>
            </div>
            <h3>View Payments</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'InventoryMaster' }">Inventory Master</router-link>
                </li>
                <li>View Payments</li>
            </ul>
        </div>
        <!-- <b-form-group>
            <b-input
                type="search"
                v-model.trim="s"
                placeholder="Search ..."
            ></b-input>
        </b-form-group> -->
        <b-card
            v-if="!payments.data"
            class="text-center h-auto"
        >
            <b-spinner label="Spinning" style="width: 48px; height: 48px;"></b-spinner>
        </b-card>
        <div
            v-if="payments.data"
        >
            <b-card
                class="h-auto"
                v-if="!payments.data.length"
            >
                No record(s) found.
            </b-card>
            <b-card class="h-auto"
                v-if="payments.data.length"
            >
                <template #header>
                    <div
                        class="float-right"
                    >
                        {{ payments.from }} - {{ payments.to }} of {{ payments.total }} record(s) are showing.
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
                        :fields="payment.fields"
                        :items="payments.data"
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
                                    v-model="payment.check"
                                    :value="data.item.id"
                                > -->
                                {{ data.index + payments.from }}.
                            </label>
                        </template>
                        <template #cell(action)="data">
                            <a 
                                :href="`${baseURL}invoice/payment/${data.item.id}`"
                                target="_blank"
                            ><i class="icon-print"></i> Print</a>
                        </template>
                        <template #cell(created_at)="data">
                            {{ data.item.created_at | formatDate }}
                        </template>
                    </b-table>
                </div>
                <pagination :data="payments" :limit="2" @pagination-change-page="fetchPayments"></pagination>
            </b-card>
        </div>
    </div>
</template>
<script>
import { multiple_delete_payment, view_payment } from '../../../../api/script'
export default {
    data () {
        return {
            s: '',
            limit: 10,
            checkAll: false,
            payment: {
                check: [],
                fields: [
                    {
                        key: 'index',
                        label: 'Sr. No.'
                    },
                    'payment_no',
                    {
                        key: 'purchase.supplier_name',
                        label: 'Supplier Name',
                        sortable: true
                    },
                    {
                        key: 'purchase.invoice_no',
                        label: 'Invoice No.'
                    },
                    {
                        key: 'payment_mode'
                    },
                    {
                        key: 'amount',
                        sortable: true
                    },
                    {
                        label: 'Date',
                        key: 'created_at',
                        sortable: true
                    },
                    {
                        key: 'action'
                    }
                ]
            },
            payments: {}
        }
    },
    mounted () {
        this.fetchPayments()
    },
    methods: {
        searchAfterDebounce: _.debounce(
            function () {
                this.fetchPayments()
            }, 500
        ),
        selectAll () {
            this.payment.check = []
            if (!this.checkAll) {
                for (let index in this.payments.data) {
                    if(!this.payments.data[index].stock) {
                        this.payment.check.push(this.payments.data[index].id)
                    }
                }
            }
        },
        fetchPayments (page = 1) {
            this.payments = {}
            view_payment (`page=${page}&limit=${this.limit}&s=${this.s}`)
                .then(res => {
                    this.payments = res.data
                })
        },
        deleteMultiple () {
            if(this.payment.check.length) {
                swal({
                  title: "Are you sure?",
                  text: "Once deleted, you will not be able to recover this record!",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                .then((willDelete) => {
                  if (willDelete) {
                      multiple_delete_payment ({ids: this.payment.check})
                        .then(res => {
                            this.$toast.success(res.data.message)
                            this.fetchPayments(1)
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
            this.fetchPayments(1)
        }
    }
}
</script>
