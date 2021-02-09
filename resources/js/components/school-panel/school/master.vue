<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <h3>School Master</h3>
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
                    header: 'EVENTS',
                    link: 'ViewEvent',
                    variant: 'primary',
                    icon: 'icon-calendar2',
                    params: {}
                },
                {
                    header: 'EVENT CALENDAR',
                    link: 'EventCalendar',
                    variant: 'danger',
                    icon: 'icon-calendar',
                    params: {}
                },
                {
                    header: 'HOLIDAYS',
                    link: 'ViewHoliday',
                    variant: 'success',
                    icon: 'icon-beach_access',
                    params: {}
                },
                {
                    header: 'HOLIDAY CALENDAR',
                    link: 'HolidayCalendar',
                    variant: 'dark',
                    icon: 'icon-calendar1',
                    params: {}
                },
                {
                    header: 'PAGES',
                    link: 'ViewPage',
                    variant: 'primary',
                    icon: 'icon-file',
                    params: {}
                },
                {
                    header: 'MENU',
                    link: 'Menu',
                    variant: 'danger',
                    icon: 'icon-menu',
                    params: {}
                },
                {
                    header: 'GALLERY',
                    link: 'ViewGallery',
                    variant: 'success',
                    icon: 'icon-image',
                    params: {}
                },
                {
                    header: 'NEWS',
                    link: 'News',
                    variant: 'dark',
                    icon: 'icon-newspaper',
                    params: {}
                },
                {
                    header: 'NOTICE',
                    link: 'Notice',
                    variant: 'primary',
                    icon: 'icon-bullhorn',
                    params: {}
                }
            ]
        }
    }
}
</script>