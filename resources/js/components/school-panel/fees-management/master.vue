<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <h3>Fees Management Master</h3>
        </div>
        <!-- Breadcrumbs Area End Here -->

        <b-row>
            <b-col sm="3" v-for="(row, i) in main_panel" :key="i">
                <b-card
                    :border-variant="row.variant"
                    :header-bg-variant="row.variant"
                    :header="row.header"
                    header-text-variant="white"
                    align="center"
                    class="master-card"
                >
                    <div class="master-icon mt-3" :class="row.icon"></div>
                    <router-link :to="{ name: row.link }"></router-link>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    data () {
        return {
            main_panel: [
                {
                    header: 'FEES TYPE',
                    link: 'fees-type',
                    variant: 'primary',
                    icon: 'icon-account_tree'
                },
                {
                    header: 'FEES',
                    link: 'fees',
                    variant: 'danger',
                    icon: 'icon-rupee'
                },
                {
                    header: 'Fees Structure',
                    link: 'fees-collection',
                    variant: 'success',
                    icon: 'icon-table_chart'
                },
                {
                    header: 'Fees Report',
                    link: 'due-fees',
                    variant: 'info',
                    icon: 'icon-print'
                }
            ]
        }
    }
}
</script>