<template>
  <div class="dashboard-content-one" v-if="user.id">
    <!-- Breadcubs Area Start Here -->
    <div class="breadcrumbs-area">
      <div class="float-right">
        <router-link
          :to="{ name: 'AddUser', params: { role: $route.params.role } }"
          class="fw-btn-fill btn-gradient-yellow text-white"
          >Add New</router-link
        >
      </div>
      <h3>{{ user.name }}</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'UserMaster' }">User Master</router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'ViewUser', params: { role: $route.params.role } }"
            >{{ $route.params.role }}</router-link
          >
        </li>
        <li>{{ user.name }}</li>
      </ul>
    </div>
    <!-- Breadcubs Area End Here -->

    <!-- Student Table Area Start Here -->
    <form method="post" @submit.prevent="deleteRecord()">
      <div class="card height-auto">
        <div class="card-body">
          <div class="text-center" v-if="!loaded">
            <b-spinner></b-spinner>
          </div>
          <div v-if="loaded">
            <div class="table-responsive">
              <table class="table table-sm table-bordered">
                <tbody>
                  <tr class="bg-dark text-white">
                    <th colspan="3">
                      <div class="px-3 py-2">BASIC INFO</div>
                    </th>
                  </tr>
                  <tr>
                    <th style="width: 300px">FIRST NAME</th>
                    <td>
                      {{ user.fname }}
                    </td>
                    <td rowspan="9" class="text-center" style="width: 300px">
                      <p>&nbsp;</p>
                      <img
                        :src="
                          user.media
                            ? user.media.image_url.medium
                            : `${baseURL}img/user.png`
                        "
                        :alt="user.name"
                        style="max-width: 300px"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>LAST NAME</th>
                    <td>{{ user.lname }}</td>
                  </tr>
                  <tr>
                    <th>FULL NAME</th>
                    <td>{{ user.name }}</td>
                  </tr>
                  <tr>
                    <th>DATE OF BIRTH</th>
                    <td>{{ user.dob | formatDateOnly }}</td>
                  </tr>
                  <tr>
                    <th>LOGIN USERNAME</th>
                    <td>{{ user.login }}</td>
                  </tr>
                  <tr>
                    <th>EMAIL</th>
                    <td>{{ user.email }}</td>
                  </tr>
                  <tr>
                    <th>MOBILE NO.</th>
                    <td>{{ user.mobile }}</td>
                  </tr>
                  <tr>
                    <th>GENDER</th>
                    <td>{{ user.gender }}</td>
                  </tr>
                  <tr>
                    <th>FULL ADDRESS</th>
                    <td>{{ user.full_address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="table-responsive"
              v-if="user.custom_fields && user.custom_fields.length"
            >
              <table class="table table-sm table-bordered">
                <tr class="bg-dark text-white">
                  <th colspan="2">
                    <div class="px-3 py-2">OTHER INFO</div>
                  </th>
                </tr>
                <tr v-for="(cf, i) in user.custom_fields" :key="i">
                  <th style="width: 300px">{{ cf.name }}</th>
                  <td>
                    {{ cf.valueText }}
                  </td>
                </tr>
              </table>
            </div>
            <div
              class="table-responsive"
              v-if="user.documents && user.documents.length"
            >
              <table class="table table-sm table-bordered">
                <tr class="bg-dark text-white">
                  <th colspan="2">
                    <div class="px-3 py-2">UPLOADED DOCUMENTS</div>
                  </th>
                </tr>
                <tr v-for="(d, i) in user.documents" :key="i">
                  <th style="width: 300px">
                    {{
                      `${d.document.en_name} ${d.document.hi_name} (${d.document.short_name})`
                    }}
                  </th>
                  <td>
                    <a :href="d.file_url" target="_blank">VIEW / DOWNLOAD</a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- Student Table Area End Here -->
    </form>
  </div>
</template>
<script>
import _ from "lodash";
import api from "../../../api/script";

export default {
  data() {
    return {
      loaded: 0,
      user: {},
      token: localStorage.getItem("token"),
    };
  },
  mounted() {
    this.getDetails();
  },
  methods: {
    getDetails() {
      let id = this.$route.params.id;
      let apiResponse = api.userInfo(id);
      apiResponse.then((res) => {
        this.user = res.data.data;
        this.loaded = 1;
      });
    },
  },
};
</script>
