<template>
  <div class="dashboard-content-one">
    <!-- Breadcubs Area Start Here -->
    <div class="breadcrumbs-area">
      <h3>Children</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>Children</li>
      </ul>
    </div>
    <!-- Breadcubs Area End Here -->

    <!-- Student Table Area Start Here -->
    <div class="card height-auto" v-if="!loaded">
      <div class="card-body">
        <div class="text-center">
          <b-spinner></b-spinner>
        </div>
      </div>
    </div>
    <div v-if="loaded">
      <div class="row">
        <div class="col-lg-3 col-sm-4" v-for="(s, i) in lists" :key="i">
          <div class="card">
            <div class="card-header text-center bg-dark text-white">
              <div class="mb-3">
                <img :src="s.picture" alt="" class="rounded-circle" />
              </div>
              <h4 class="text-white mt-3 mb-0">{{ s.name }}</h4>
            </div>
            <ul class="list-group list-sm">
              <li class="list-group-item">
                <strong class="w-40 d-inline-block">Class</strong>
                : {{ s.student_data.section_name.cls.name }}
              </li>
              <li class="list-group-item">
                <strong class="w-40 d-inline-block">Section</strong>
                : {{ s.student_data.section_name.name }}
              </li>
              <li class="list-group-item">
                <strong class="w-40 d-inline-block">Roll No.</strong>
                : {{ s.student_data.roll_no }}
              </li>
              <li class="list-group-item">
                <strong class="w-40 d-inline-block">Enroll No.</strong>
                : {{ s.student_data.reg_no }}
              </li>
            </ul>
            <div class="card-body">
              <button
                class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark btn-block"
                @click="loginAs(s.id)"
              >
                Login as {{ s.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Student Table Area End Here -->
  </div>
</template>
<style scoped>
.w-40 {
  width: 40%;
}
img {
  width: 72px;
  height: 72px;
  object-fit: cover;
}
</style>
<script>
import _ from "lodash";
import { login_as_student } from "../../api/script";

export default {
  data() {
    return {
      errors: 0,
      lists: [],
      loaded: 0,
      token: localStorage.getItem("token"),
    };
  },
  mounted() {
    this.getStudents();
  },
  methods: {
    loginAs(user_id) {
      this.loaded = 0;
      login_as_student(user_id).then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_info", JSON.stringify(res.data.user));
        this.loaded = 1;
        // this.$router.go({
        //   name: "dashboard",
        // });
        window.location = `${this.baseURL}/erp-panel`;
      });
    },
    getStudents() {
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      let self = this;
      self.loaded = 0;
      instance
        .get("student/parent")
        .then((res) => {
          self.loaded = 1;
          if (res.status) {
            self.lists = res.data;
          } else {
            self.errors = 1;
          }
        })
        .catch((err) => {
          this.loaded = 1;
          console.log(err);
        });
    },
  },
};
</script>
