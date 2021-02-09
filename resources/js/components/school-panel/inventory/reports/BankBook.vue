<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <h3>Bank Entry</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'InventoryMaster' }">Inventory Master</router-link>
                </li>
                <li>Bank Entry</li>
            </ul>
        </div>
        <b-card
            v-if="!reports.data"
            class="text-center h-auto"
        >
            <b-spinner label="Spinning" style="width: 48px; height: 48px;"></b-spinner>
        </b-card>
        <div
            v-if="reports.data"
        >
            <b-card
                class="h-auto"
                v-if="!reports.data.length"
            >
                No record(s) found.
            </b-card>
            <b-card class="h-auto"
                v-if="reports.data.length"
            >
                <div
                    class="table-responsive"
                >
                    <b-table
                        :fields="report.fields"
                        :items="reports.data"
                        :foot-clone="true"
                        striped
                        bordered
                    >
                        <template #cell(index)="data">
                            <label>
                                {{ data.index + 1 }}.
                            </label>
                        </template>
                        <template #cell(action)="data">
                            <a 
                                :href="`${baseURL}invoice/report/${data.item.id}`"
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
                                        name: 'EditReport',
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
                <pagination :data="reports" :limit="2" @pagination-change-page="fetchReports"></pagination>
            </b-card>
        </div>
    </div>
</template>
<script>
import { bank_book } from '../../../../api/script'
export default {
    data () {
        return {
            s: '',
            limit: 100,
            checkAll: false,
            report: {
                check: [],
                fields: [
                    {
                        key: 'index',
                        label: 'Sr. No.'
                    },
                    {
                        key: 'remarks',
                    },
                    {
                        key: 'credit'
                    },
                    {
                        key: 'debit'
                    },
                    {
                        key: 'balance'
                    },
                    {
                        key: 'date',
                    }
                ]
            },
            reports: {}
        }
    },
    mounted () {
        this.fetchReports()
    },
    methods: {
        searchAfterDebounce: _.debounce(
            function () {
                this.fetchReports()
            }, 500
        ),
        fetchReports () {
            this.reports = {}
            bank_book ()
                .then(res => {
                    this.reports = res.data
                })
        }
    },
    watch: {
        s() {
            this.searchAfterDebounce()
        }
    }
}
</script>
