<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <h3>Exam Master</h3>
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
                    header: 'EXAM TYPE',
                    link: 'ExamType',
                    variant: 'primary',
                    icon: 'icon-merge_type'
                },
                {
                    header: 'ADMIT CARD',
                    link: 'ViewAdmitCard',
                    variant: 'danger',
                    icon: 'icon-file-empty'
                },
                {
                    header: 'FILL MARKSHEET',
                    link: 'FillMarksheet',
                    variant: 'success',
                    icon: 'icon-file-text'
                },
                {
                    header: 'VIEW MARKSHEET',
                    link: 'ViewMarksheet',
                    variant: 'info',
                    icon: 'icon-format_list_numbered_rtl'
                }
            ]
        }
    }
}
</script>