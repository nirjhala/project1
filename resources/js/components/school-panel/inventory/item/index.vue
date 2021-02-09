<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'AddItem'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >Add Items</router-link>
            </div>
            <h3>View Items</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'InventoryMaster' }">Inventory Master</router-link>
                </li>
                <li>View Items</li>
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
            v-if="!items.data"
            class="text-center h-auto"
        >
            <b-spinner label="Spinning" style="width: 48px; height: 48px;"></b-spinner>
        </b-card>
        <div
            v-if="items.data"
        >
            <b-card
                class="h-auto"
                v-if="!items.data.length"
            >
                No record(s) found.
            </b-card>
            <b-card class="h-auto"
                v-if="items.data.length"
            >
                <template #header>
                    <div
                        class="float-right"
                    >
                        {{ items.from }} - {{ items.to }} of {{ items.total }} record(s) are showing.
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
                        :fields="item.fields"
                        :items="items.data"
                        striped
                        bordered
                    >
                        <template #head(index)="data">
                            <label>
                                <input type="checkbox" v-model="checkAll" value="1" @click="selectAll">
                                {{ data.label }}.
                            </label>
                        </template>
                        <template #cell(index)="data">
                            <label>
                                <input 
                                    type="checkbox"
                                    v-model="item.check"
                                    :value="data.item.id"
                                    v-if="!data.item.stock"
                                >
                                <span v-if="data.item.stock" class="icon-x-square"></span>
                                {{ data.index + items.from }}.
                            </label>
                        </template>
                        <template #cell(description)="data">
                            <div>
                                <router-link
                                    :to="{
                                        name: 'EditItem',
                                        params: {
                                            id: data.item.id
                                        }
                                    }"
                                ><i class="icon-mode_edit"></i> {{ data.item.name }}</router-link>
                            </div>
                            <div>{{ data.item.description }}</div>
                        </template>
                    </b-table>
                </div>
                <pagination :data="items" :limit="2" @pagination-change-page="fetchItems"></pagination>
            </b-card>
        </div>
    </div>
</template>
<script>
import { delete_item, multiple_delete_item, view_item } from '../../../../api/script'
export default {
    data () {
        return {
            s: '',
            limit: 10,
            checkAll: false,
            item: {
                check: [],
                fields: [
                    {
                        key: 'index',
                        label: 'Sr. No.'
                    },
                    {
                        key: 'description',
                        label: 'Item Description',
                        sortable: true
                    },
                    {
                        key: 'purchase_price',
                        sortable: true
                    },
                    {
                        key: 'margin',
                        sortable: true
                    },
                    {
                        key: 'sale_price',
                        sortable: true
                    },
                    {
                        key: 'stock',
                        sortable: true
                    }
                ]
            },
            items: {}
        }
    },
    mounted () {
        this.fetchItems()
    },
    methods: {
        searchAfterDebounce: _.debounce(
            function () {
                this.fetchItems()
            }, 500
        ),
        selectAll () {
            this.item.check = []
            if (!this.checkAll) {
                for (let index in this.items.data) {
                    if(!this.items.data[index].stock) {
                        this.item.check.push(this.items.data[index].id)
                    }
                }
            }
        },
        fetchItems (page = 1) {
            this.items = {}
            view_item (`page=${page}&limit=${this.limit}&s=${this.s}`)
                .then(res => {
                    this.items = res.data
                })
        },
        deleteMultiple () {
            if(this.item.check.length) {
                swal({
                  title: "Are you sure?",
                  text: "Once deleted, you will not be able to recover this record!",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                .then((willDelete) => {
                  if (willDelete) {
                      multiple_delete_item ({ids: this.item.check})
                        .then(res => {
                            this.$toast.success(res.data.message)
                            this.fetchItems(1)
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
            this.fetchItems(1)
        }
    }
}
</script>
