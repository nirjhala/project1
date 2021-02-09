<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <h3>Online Exam Master</h3>
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
                    header: 'QUESTION BANK',
                    link: 'ViewQuestion',
                    variant: 'primary',
                    icon: 'icon-question-circle-o'
                },
                {
                    header: 'INSTRUCTION',
                    link: 'ViewInstruction',
                    variant: 'danger',
                    icon: 'icon-speaker_notes'
                },
                {
                    header: 'TEST',
                    link: 'ViewTest',
                    variant: 'success',
                    icon: 'icon-list_alt'
                },
                {
                    header: 'RESULTS',
                    link: 'ViewResult',
                    variant: 'info',
                    icon: 'icon-bullhorn1'
                }
            ]
        }
    }
}
</script>