<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'AddCreditNote'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >Add Credit Notes</router-link>
            </div>
            <h3>View Credit Notes</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'InventoryMaster' }">Inventory Master</router-link>
                </li>
                <li>View Credit Notes</li>
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
            v-if="!credit_notes.data"
            class="text-center h-auto"
        >
            <b-spinner label="Spinning" style="width: 48px; height: 48px;"></b-spinner>
        </b-card>
        <div
            v-if="credit_notes.data"
        >
            <b-card
                class="h-auto"
                v-if="!credit_notes.data.length"
            >
                No record(s) found.
            </b-card>
            <b-card class="h-auto"
                v-if="credit_notes.data.length"
            >
                <template #header>
                    <div
                        class="float-right"
                    >
                        {{ credit_notes.from }} - {{ credit_notes.to }} of {{ credit_notes.total }} record(s) are showing.
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
                        :fields="credit_note.fields"
                        :items="credit_notes.data"
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
                                    v-model="credit_note.check"
                                    :value="data.item.id"
                                > -->
                                {{ data.index + credit_notes.from }}.
                            </label>
                        </template>
                        <template #cell(action)="data">
                            <a 
                                :href="`${baseURL}invoice/credit-note/${data.item.id}`"
                                target="_blank"
                            ><i class="icon-print"></i> Print</a>
                        </template>
                        <template #cell(description)="data">
                            <div>
                                <router-link
                                    :to="{
                                        name: 'EditCreditNote',
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
                <pagination :data="credit_notes" :limit="2" @pagination-change-page="fetchCreditNotes"></pagination>
            </b-card>
        </div>
    </div>
</template>
<script>
import { multiple_delete_credit_note, view_credit_note } from '../../../../api/script'
export default {
    data () {
        return {
            s: '',
            limit: 10,
            checkAll: false,
            credit_note: {
                check: [],
                fields: [
                    {
                        key: 'index',
                        label: 'Sr. No.'
                    },
                    {
                        key: 'sale.customer_name',
                        label: 'Customer Name',
                        sortable: true
                    },
                    {
                        key: 'sale.full_invoice_no',
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
            credit_notes: {}
        }
    },
    mounted () {
        this.fetchCreditNotes()
    },
    methods: {
        searchAfterDebounce: _.debounce(
            function () {
                this.fetchCreditNotes()
            }, 500
        ),
        selectAll () {
            this.credit_note.check = []
            if (!this.checkAll) {
                for (let index in this.credit_notes.data) {
                    if(!this.credit_notes.data[index].stock) {
                        this.credit_note.check.push(this.credit_notes.data[index].id)
                    }
                }
            }
        },
        fetchCreditNotes (page = 1) {
            this.credit_notes = {}
            view_credit_note (`page=${page}&limit=${this.limit}&s=${this.s}`)
                .then(res => {
                    this.credit_notes = res.data
                })
        },
        deleteMultiple () {
            if(this.credit_note.check.length) {
                swal({
                  title: "Are you sure?",
                  text: "Once deleted, you will not be able to recover this record!",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                .then((willDelete) => {
                  if (willDelete) {
                      multiple_delete_credit_note ({ids: this.credit_note.check})
                        .then(res => {
                            this.$toast.success(res.data.message)
                            this.fetchCreditNotes(1)
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
            this.fetchCreditNotes(1)
        }
    }
}
</script>
