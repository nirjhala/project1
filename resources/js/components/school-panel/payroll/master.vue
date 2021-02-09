<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <h3>Payroll Management Master</h3>
        </div>
        <!-- Breadcrumbs Area End Here -->

        <b-row>
            <b-col sm="3" v-for="(row, i) in folders" :key="i">
                <b-card
                    :border-variant="row.variant"
                    :header-bg-variant="row.variant"
                    :header="row.header"
                    header-text-variant="white"
                    align="center"
                    class="master-card"
                >
                    <div class="master-icon mt-3" :class="row.icon"></div>
                    <router-link :to="{ name: row.link, params: { type: row.type } }"></router-link>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    data () {
        return {
            folders: [
                {
                    header: 'PAY GRADE',
                    link: 'PayGrade',
                    variant: 'primary',
                    icon: 'icon-equalizer1'
                },
                {
                    header: 'PROMOTION / INCREAMENT',
                    link: 'PayrollPromotion',
                    variant: 'danger',
                    icon: 'icon-level-up'
                },
                {
                    header: 'ALLOWANCE',
                    link: 'PayrollAllowance',
                    variant: 'success',
                    icon: 'icon-plus-square1'
                },
                {
                    header: 'DEDUCTION',
                    link: 'PayrollDeduction',
                    variant: 'info',
                    icon: 'icon-minus-square1'
                },
                {
                    header: 'SALARY SLIP',
                    link: 'PayrollSalarySlip',
                    variant: 'primary',
                    icon: 'icon-print'
                }
            ]
        }
    }
}
</script>