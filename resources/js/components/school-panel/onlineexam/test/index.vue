<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'AddTest'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >Add Tests</router-link>
            </div>
            <h3>View Tests</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'OnlineExamMaster' }">Online Exam Master</router-link>
                </li>
                <li>View Tests</li>
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
            v-if="!tests.data"
            class="text-center h-auto"
        >
            <b-spinner label="Spinning" style="width: 48px; height: 48px;"></b-spinner>
        </b-card>
        <div
            v-if="tests.data"
        >
            <b-card
                class="h-auto"
                v-if="!tests.data.length"
            >
                No record(s) found.
            </b-card>
            <b-card class="h-auto"
                v-if="tests.data.length"
            >
                <template #header>
                    <div
                        class="float-right"
                    >
                        {{ tests.from }} - {{ tests.to }} of {{ tests.total }} record(s) are showing.
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
                        :fields="test.fields"
                        :items="tests.data"
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
                                    v-model="test.check"
                                    :value="data.item.id"
                                    v-if="!data.item.stock"
                                >
                                <span v-if="data.item.stock" class="icon-x-square"></span>
                                {{ data.index + tests.from }}.
                            </label>
                        </template>
                        <template #cell(title)="data">
                            <div>
                                <router-link
                                    :to="{
                                        name: 'EditTest',
                                        params: {
                                            id: data.item.id
                                        }
                                    }"
                                ><i class="icon-mode_edit"></i> {{ data.item.title }}</router-link>
                            </div>
                        </template>
                        <template #cell(description)="data">
                            <div
                                v-html="data.item.description"
                            ></div>
                        </template>
                    </b-table>
                </div>
                <pagination :data="tests" :limit="2" @pagination-change-page="fetchTests"></pagination>
            </b-card>
        </div>
    </div>
</template>
<script>
import { delete_test, multiple_delete_test, view_test } from '../../../../api/script'
export default {
    data () {
        return {
            s: '',
            limit: 10,
            checkAll: false,
            test: {
                check: [],
                fields: [
                    {
                        key: 'index',
                        label: 'Sr. No.'
                    },
                    {
                        key: 'title',
                        sortable: true
                    },
                    {
                        key: 'description'
                    }
                ]
            },
            tests: {}
        }
    },
    mounted () {
        this.fetchTests()
    },
    methods: {
        searchAfterDebounce: _.debounce(
            function () {
                this.fetchTests()
            }, 500
        ),
        selectAll () {
            this.test.check = []
            if (!this.checkAll) {
                for (let index in this.tests.data) {
                    if(!this.tests.data[index].stock) {
                        this.test.check.push(this.tests.data[index].id)
                    }
                }
            }
        },
        fetchTests (page = 1) {
            this.tests = {}
            view_test (`page=${page}&limit=${this.limit}&s=${this.s}`)
                .then(res => {
                    this.tests = res.data
                })
        },
        deleteMultiple () {
            if(this.test.check.length) {
                swal({
                  title: "Are you sure?",
                  text: "Once deleted, you will not be able to recover this record!",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                .then((willDelete) => {
                  if (willDelete) {
                      multiple_delete_test ({ids: this.test.check})
                        .then(res => {
                            this.$toast.success(res.data.message)
                            this.fetchTests(1)
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
            this.fetchTests(1)
        }
    }
}
</script>
