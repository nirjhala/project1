<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'AddSupplier'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >Add Suppliers</router-link>
            </div>
            <h3>View Suppliers</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'InventoryMaster' }">Inventory Master</router-link>
                </li>
                <li>View Suppliers</li>
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
            v-if="!suppliers.data"
            class="text-center h-auto"
        >
            <b-spinner label="Spinning" style="width: 48px; height: 48px;"></b-spinner>
        </b-card>
        <div
            v-if="suppliers.data"
        >
            <b-card
                class="h-auto"
                v-if="!suppliers.data.length"
            >
                No record(s) found.
            </b-card>
            <b-card class="h-auto"
                v-if="suppliers.data.length"
            >
                <template #header>
                    <div
                        class="float-right"
                    >
                        {{ suppliers.from }} - {{ suppliers.to }} of {{ suppliers.total }} record(s) are showing.
                    </div>
                    <a 
                        href="javascript:" 
                        class="icon icon-delete text-dark" 
                        title="Remove Selected"
                        @click="deleteMultiple"
                    ></a>
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
                        :fields="supplier.fields"
                        :items="suppliers.data"
                        :foot-clone="true"
                        striped
                        bordered
                    >
                        <template #head(index)="data">
                            <label>
                                <input type="checkbox" v-model="checkAll" value="1" @click="selectAll">
                                {{ data.label }}
                            </label>
                        </template>
                        <template #cell(index)="data">
                            <label>
                                <input 
                                    type="checkbox"
                                    v-model="supplier.check"
                                    :value="data.item.id"
                                >
                                {{ data.index + suppliers.from }}.
                            </label>
                        </template>
                        <template #cell(description)="data">
                            <div>
                                <router-link
                                    :to="{
                                        name: 'EditSupplier',
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
                <pagination :data="suppliers" :limit="2" @pagination-change-page="fetchSuppliers"></pagination>
            </b-card>
        </div>
    </div>
</template>
<script>
import { multiple_delete_supplier, view_supplier } from '../../../../api/script'
export default {
    data () {
        return {
            s: '',
            limit: 10,
            checkAll: false,
            supplier: {
                check: [],
                fields: [
                    {
                        key: 'index',
                        label: 'Sr. No.'
                    },
                    {
                        key: 'description',
                        label: 'Supplier Info',
                        sortable: true
                    },
                    {
                        key: 'email'
                    },
                    {
                        key: 'phone'
                    },
                    {
                        key: 'mobile'
                    },
                    {
                        label: 'Address',
                        key: 'full_address'
                    }
                ]
            },
            suppliers: {}
        }
    },
    mounted () {
        this.fetchSuppliers()
    },
    methods: {
        searchAfterDebounce: _.debounce(
            function () {
                this.fetchSuppliers()
            }, 500
        ),
        selectAll () {
            this.supplier.check = []
            if (!this.checkAll) {
                for (let index in this.suppliers.data) {
                    if(!this.suppliers.data[index].stock) {
                        this.supplier.check.push(this.suppliers.data[index].id)
                    }
                }
            }
        },
        fetchSuppliers (page = 1) {
            this.suppliers = {}
            view_supplier (`page=${page}&limit=${this.limit}&s=${this.s}`)
                .then(res => {
                    this.suppliers = res.data
                })
        },
        deleteMultiple () {
            if(this.supplier.check.length) {
                swal({
                  title: "Are you sure?",
                  text: "Once deleted, you will not be able to recover this record!",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                .then((willDelete) => {
                  if (willDelete) {
                      multiple_delete_supplier ({ids: this.supplier.check})
                        .then(res => {
                            this.$toast.success(res.data.message)
                            this.fetchSuppliers(1)
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
            this.fetchSuppliers(1)
        }
    }
}
</script>
