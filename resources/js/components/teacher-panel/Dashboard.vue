<template>
  <div class="dashboard-content-one">
    <!-- Breadcubs Area Start Here -->
    <div class="breadcrumbs-area">
      <h3>Teacher Dashboard</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>Teacher</li>
      </ul>
    </div>
    <!-- Breadcubs Area End Here -->
    <div class="card h-auto">
      <div class="card-body">
        <div class="text-center" v-if="!loaded">
          <b-spinner></b-spinner>
        </div>
        <div v-if="loaded">
          <div class="row">
            <div class="col-sm-2 col-4">
              <img
                :src="user_info.picture"
                :alt="user_info.name"
                :title="user_info.name"
                class="rounded bordered"
                style="object-fit: contain; max-width: 100%"
              />
            </div>
            <div class="col-sm-10 col-8">
              <h3 class="mb-0">{{ user_info.name }}</h3>
              <div>
                <div class="mt-1">
                  <strong>Phone:</strong>
                  <span class="text-warning">{{ user_info.mobile }}</span>
                </div>
                <div class="mt-1">
                  <strong>Email:</strong>
                  <span class="text-warning">{{ user_info.email }}</span>
                </div>
                <div class="mt-1">
                  <strong>Address:</strong>
                  <span class="text-warning">
                    {{ user_address }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      user_info: {},
      loaded: 0,
      token: localStorage.getItem("token"),
    };
  },
  computed: {
    user_address() {
      return (
        this.user_info.address1 +
        " " +
        this.user_info.address1 +
        "\n" +
        this.user_info.city_data.name +
        " " +
        this.user_info.city_data.state_name.name +
        " " +
        this.user_info.pin_code
      );
    },
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });

      instance.get("student/info").then((res) => {
        this.loaded = 1;
        this.user_info = res.data;

        console.log(this.user_info);
      });
    },
  },
};
</script>
