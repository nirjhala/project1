<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <h3>Inventory Master</h3>
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

        <h3>Reports</h3>

        <b-row>
            <b-col sm="3" v-for="(row, i) in reports" :key="i">
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
                    header: 'ITEMS',
                    link: 'ViewItem',
                    variant: 'primary',
                    icon: 'icon-box'
                },
                {
                    header: 'SUPPLIER',
                    link: 'ViewSupplier',
                    variant: 'danger',
                    icon: 'icon-users2'
                },
                {
                    header: 'PURCHASE',
                    link: 'ViewPurchase',
                    variant: 'success',
                    icon: 'icon-shopping-bag1'
                },
                {
                    header: 'SALE',
                    link: 'ViewSale',
                    variant: 'info',
                    icon: 'icon-shopping-cart1'
                },
                {
                    header: 'DEBIT NOTE',
                    link: 'ViewDebitNote',
                    variant: 'primary',
                    icon: 'icon-minus-square1'
                },
                {
                    header: 'CREDIT NOTE',
                    link: 'ViewCreditNote',
                    variant: 'danger',
                    icon: 'icon-plus-square1'
                },
                {
                    header: 'RECEIPT',
                    link: 'ViewReceipt',
                    variant: 'success',
                    icon: 'icon-print'
                },
                {
                    header: 'PAYMENT',
                    link: 'ViewPayment',
                    variant: 'info',
                    icon: 'icon-credit-card'
                },
                // {
                //     header: 'DUMP ITEMS',
                //     link: 'ViewDumpItems',
                //     variant: 'primary',
                //     icon: 'icon-bin2'
                // },
                // {
                //     header: 'BARCODE',
                //     link: 'ViewBarcode',
                //     variant: 'danger',
                //     icon: 'icon-barcode'
                // }
            ],
            reports: [
                {
                    header: 'STOCK',
                    link: 'StockReport',
                    variant: 'primary',
                    icon: 'icon-equalizer1'
                },
                {
                    header: 'DAY BOOK',
                    link: 'DayBook',
                    variant: 'danger',
                    icon: 'icon-calendar_today'
                },
                {
                    header: 'BANK ENTRY',
                    link: 'BankBook',
                    variant: 'success',
                    icon: 'icon-bank'
                },
                {
                    header: 'CASH BOOK',
                    link: 'CashBook',
                    variant: 'info',
                    icon: 'icon-rupee'
                },
                // {
                //     header: 'CUSTOM RANGE',
                //     link: 'CustomReport',
                //     variant: 'primary',
                //     icon: 'icon-date_range'
                // },
                {
                    header: 'LEDGER',
                    link: 'Ledger',
                    variant: 'danger',
                    icon: 'icon-book1'
                }
            ]
        }
    }
}
</script>