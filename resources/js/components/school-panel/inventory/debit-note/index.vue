<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'AddDebitNote'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >Add Debit Notes</router-link>
            </div>
            <h3>View Debit Notes</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'InventoryMaster' }">Inventory Master</router-link>
                </li>
                <li>View Debit Notes</li>
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
            v-if="!debit_notes.data"
            class="text-center h-auto"
        >
            <b-spinner label="Spinning" style="width: 48px; height: 48px;"></b-spinner>
        </b-card>
        <div
            v-if="debit_notes.data"
        >
            <b-card
                class="h-auto"
                v-if="!debit_notes.data.length"
            >
                No record(s) found.
            </b-card>
            <b-card class="h-auto"
                v-if="debit_notes.data.length"
            >
                <template #header>
                    <div
                        class="float-right"
                    >
                        {{ debit_notes.from }} - {{ debit_notes.to }} of {{ debit_notes.total }} record(s) are showing.
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
                        :fields="debit_note.fields"
                        :items="debit_notes.data"
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
                                    v-model="debit_note.check"
                                    :value="data.item.id"
                                > -->
                                {{ data.index + debit_notes.from }}.
                            </label>
                        </template>
                        <template #cell(action)="data">
                            <a 
                                :href="`${baseURL}invoice/debit-note/${data.item.id}`"
                                target="_blank"
                            ><i class="icon-print"></i> Print</a>
                        </template>
                        <template #cell(description)="data">
                            <div>
                                <router-link
                                    :to="{
                                        name: 'EditDebitNote',
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
                <pagination :data="debit_notes" :limit="2" @pagination-change-page="fetchDebitNotes"></pagination>
            </b-card>
        </div>
    </div>
</template>
<script>
import { multiple_delete_debit_note, view_debit_note } from '../../../../api/script'
export default {
    data () {
        return {
            s: '',
            limit: 10,
            checkAll: false,
            debit_note: {
                check: [],
                fields: [
                    {
                        key: 'index',
                        label: 'Sr. No.'
                    },
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
            debit_notes: {}
        }
    },
    mounted () {
        this.fetchDebitNotes()
    },
    methods: {
        searchAfterDebounce: _.debounce(
            function () {
                this.fetchDebitNotes()
            }, 500
        ),
        selectAll () {
            this.debit_note.check = []
            if (!this.checkAll) {
                for (let index in this.debit_notes.data) {
                    if(!this.debit_notes.data[index].stock) {
                        this.debit_note.check.push(this.debit_notes.data[index].id)
                    }
                }
            }
        },
        fetchDebitNotes (page = 1) {
            this.debit_notes = {}
            view_debit_note (`page=${page}&limit=${this.limit}&s=${this.s}`)
                .then(res => {
                    this.debit_notes = res.data
                })
        },
        deleteMultiple () {
            if(this.debit_note.check.length) {
                swal({
                  title: "Are you sure?",
                  text: "Once deleted, you will not be able to recover this record!",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                .then((willDelete) => {
                  if (willDelete) {
                      multiple_delete_debit_note ({ids: this.debit_note.check})
                        .then(res => {
                            this.$toast.success(res.data.message)
                            this.fetchDebitNotes(1)
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
            this.fetchDebitNotes(1)
        }
    }
}
</script>
