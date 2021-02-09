<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <h3>Assignment Master</h3>
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
                    <router-link :to="{ name: row.link, params: row.params }"></router-link>
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
                    header: 'ISSUE ASSIGNMENT',
                    link: 'AssignmentIssue',
                    variant: 'primary',
                    icon: 'icon-clipboard',
                    params: {}
                },
                {
                    header: 'MANAGE ASSIGNMENT',
                    link: 'ManageAssignement',
                    variant: 'danger',
                    icon: 'icon-inventory',
                    params: {}
                },
                // {
                //     header: 'SUBMITED ASSIGNMENT',
                //     link: 'ViewHoliday',
                //     variant: 'success',
                //     icon: 'icon-files-o',
                //     params: {}
                // },
                // {
                //     header: 'ASSIGNMENT REPORT',
                //     link: 'ViewHoliday',
                //     variant: 'dark',
                //     icon: 'icon-print',
                //     params: {}
                // }
            ]
        }
    }
}
</script>