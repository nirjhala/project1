<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <h3>Certificate Master</h3>
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
                    header: 'CREATE TC',
                    link: 'AddTc',
                    variant: 'primary',
                    type: null,
                    icon: 'icon-add_moderator'
                },
                {
                    header: 'CREATE CHARACTER CERTIFICATE',
                    link: 'AddCertificate',
                    type: 'character',
                    variant: 'danger',
                    icon: 'icon-verified_user'
                },
                {
                    header: 'CREATE EVENT CERTIFICATE',
                    link: 'AddCertificate',
                    type: 'event',
                    variant: 'success',
                    icon: 'icon-calendar'
                },
                {
                    header: 'CREATE SPORT CERTIFICATE',
                    link: 'AddCertificate',
                    type: 'sport',
                    variant: 'info',
                    icon: 'icon-sports_basketball'
                },
                {
                    header: 'MANAGE TC',
                    link: 'ViewTc',
                    variant: 'primary',
                    type: null,
                    icon: 'icon-card_membership'
                },
                {
                    header: 'MANAGE CHARACTER CERTIFICATE',
                    link: 'ViewCertificate',
                    type: 'character',
                    variant: 'danger',
                    icon: 'icon-card_membership'
                },
                {
                    header: 'MANAGE EVENT CERTIFICATE',
                    link: 'ViewCertificate',
                    type: 'event',
                    variant: 'success',
                    icon: 'icon-card_membership'
                },
                {
                    header: 'MANAGE SPORT CERTIFICATE',
                    link: 'ViewCertificate',
                    type: 'sport',
                    variant: 'info',
                    icon: 'icon-card_membership'
                }
            ]
        }
    }
}
</script>