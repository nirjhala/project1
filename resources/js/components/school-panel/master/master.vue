<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
      <h3>Master</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>Master</li>
      </ul>
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
          <router-link :to="{ name: row.link }"></router-link>
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
          header: "SESSION",
          link: "session",
          variant: "primary",
          icon: "icon-calendar",
        },
        {
          header: "SHIFTS",
          link: "shift",
          variant: "danger",
          icon: "icon-clock",
        },
        {
          header: "DEPARTMENT",
          link: "department",
          variant: "success",
          icon: "icon-bank",
        },
        {
          header: "CLASS",
          link: "class",
          variant: "info",
          icon: "icon-mortar-board",
        },
        {
          header: "SECTION",
          link: "section",
          variant: "warning",
          icon: "icon-books",
        },
        {
          header: "SUBJECT",
          link: "subject",
          variant: "secondary",
          icon: "icon-chrome_reader_mode",
        },
        {
          header: "TIMESLOT",
          link: "timeslot",
          variant: "dark",
          icon: "icon-clock",
        },
        // {
        //     header: 'RELIGION',
        //     link: 'religion',
        //     variant: 'warning',
        //     icon: 'icon-pan_tool'
        // },
        {
          header: "HOSTEL",
          link: "hostel",
          variant: "primary",
          icon: "icon-bed",
        },
        {
          header: "VEHICLES",
          link: "vehicle",
          variant: "danger",
          icon: "icon-bus",
        },
        {
          header: "ROUTE",
          link: "route",
          variant: "success",
          icon: "icon-map-signs",
        },
      ],
    };
  },
};
</script>
