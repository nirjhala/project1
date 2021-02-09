<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <h3>User Master</h3>
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
                    <router-link :to="{ name: row.link, params: { role: row.role } }"></router-link>
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
                    header: 'STAFF',
                    link: 'ViewUser',
                    role: 'Staff',
                    variant: 'primary',
                    icon: 'icon-laptop1'
                },
                {
                    header: 'TEACHER',
                    link: 'ViewUser',
                    role: 'Teacher',
                    variant: 'danger',
                    icon: 'icon-school'
                },
                {
                    header: 'DRIVER',
                    link: 'ViewUser',
                    role: 'Driver',
                    variant: 'success',
                    icon: 'icon-bus'
                },
                {
                    header: 'GUARDIANS / PARENTS',
                    link: 'ViewUser',
                    role: 'Parents',
                    variant: 'info',
                    icon: 'icon-users'
                }
            ]
        }
    }
}
</script>