<template>
    <div class="dashboard-content-one" style="text-transform: capitialize">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'AddPayrollAllowance'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >Add New</router-link>
            </div>
            <h3>Allowance</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'PayrollMaster' }">Payroll Management Master</router-link>
                </li>
                <li>Allowance</li>
            </ul>
        </div>
        <!-- Breadcubs Area End Here -->
        
        <!-- Student Table Area Start Here -->
        <form method="post">
            <div class="card height-auto">
                <div class="card-body">
                    <div class="text-center" v-if="!loaded">
                        <img :src="baseURL + 'img/preloader.gif'" alt="" style="max-width: 100%;">
                    </div>
                    <div v-if="loaded">
                        <div v-if="lists">
                            <div class="table-responsive">
                                <table class="table table-bordered display data-table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>
                                                Sr. No.
                                            </th>
                                            <th>Name</th>
                                            <th>From</th>
                                            <th>To</th>
                                            <th>Type</th>
                                            <th>Percent</th>
                                            <th>Upto Amount</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <template
                                        v-for="(listItem, gender) in lists"
                                    >
                                        <tbody
                                            :key="gender"
                                        >
                                            <tr>
                                                <th colspan="8" class="bg-dark text-white">{{ gender }}</th>
                                            </tr>
                                            <template
                                                v-for="(allList, name) in listItem"
                                            >
                                                <tr
                                                    v-for="(list, j) in allList"
                                                    :key="`${gender}-${name}-${j}`"
                                                >
                                                    <td>
                                                        {{ 1 + j }}.
                                                    </td>
                                                    <td
                                                        v-if="j == 0"
                                                        :rowspan="allList.length"
                                                    >
                                                        {{ list.name }}
                                                    </td>
                                                    <td>{{ list.from_amount }}</td>
                                                    <td>{{ list.to_amount }}</td>
                                                    <td>{{ list.type }}</td>
                                                    <td>{{ list.percent }}%</td>
                                                    <td>{{ list.amount }}</td>
                                                    <td>
                                                        <b-button
                                                            type="button"
                                                            variant="danger"
                                                            v-if="j == allList.length - 2"
                                                            @click="deleteRecord(list.id)"
                                                        ><i class="icon-minus1"></i> Remove</b-button>
                                                    </td>
                                                </tr>
                                            </template>
                                        </tbody>
                                    </template>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Student Table Area End Here -->
        </form>
    </div>
</template>
<script>
import _ from 'lodash'
import { delete_allowance, multiple_delete_employe_promotion, view_allowance, view_employe_promotion } from '../../../api/script'

export default {
    data() {
        return {
            errors: 0,
            lists: {},
            allSelected: 0,
            check: [],
            s: '',
            loaded: 1
        }
    },
    mounted() {
        this.getRecords()
    },
    methods: {
        searchAfterDebounce: _.debounce(
            function () {
                this.getRecords()
            }, 500
        ),
        checkAll() {
            let self = this;
            self.check = [];
            if (!self.allSelected) {
                $.each(self.lists.data, function(i, row) {
                    self.check.push( row.id );
                });
            }
        },
        getRecords (page) {
            if (typeof page === 'undefined') {
               page = 1
            }
            this.loaded = 0
            view_allowance ()
                .then(res => {
                    this.lists = res.data
                    this.loaded = 1
                })
        },
        resetSearch () {
            this.search = {
                s: ''
            }
            this.getRecords()
        },
        deleteRecord (id) {
            let self = this
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this record!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                delete_allowance (id)
                    .then(res => {
                        self.$toast.success(res.data.message)
                        self.getRecords()
                    })
            })
        }
    },
    watch: {
        "s" () {
            this.searchAfterDebounce()
        }
    }
}
</script>
