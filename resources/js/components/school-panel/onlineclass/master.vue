<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
      <h3>Online Class Master</h3>
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
          <router-link
            :to="{ name: row.link, params: { type: row.type } }"
          ></router-link>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      folders: [
        {
          header: "CREATE ONLINE CLASS",
          link: "AddOnlineClass",
          variant: "primary",
          icon: "icon-plus",
        },
        {
          header: "LIST ONLINE CLASS",
          link: "ViewOnlineClass",
          variant: "danger",
          icon: "icon-laptop1",
        },
      ],
    };
  },
};
</script>
