<template>
  <!-- Get Started Page Start Here -->
  <div class="login-page-wrap">
    <div class="login-page-content">
      <div class="login-box">
        <!-- <div class="item-logo">
                    <img src="img/logo2.png" alt="logo">
                </div> -->
        <form
          class="login-form get-started-form"
          @submit.prevent="getStarted()"
        >
          <div class="form-group">
            <label>Mobile No.</label>
            <input
              type="tel"
              placeholder="Enter Mobile No."
              v-model="mobile"
              class="form-control mobile"
              required
            />
            <i class="fa fa-mobile-alt"></i>
          </div>
          <div class="form-group">
            <button type="submit" class="login-btn">Get Started</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Get Started Page End Here -->
</template>

<script>
import "../../../public/css/normalize.css";
import "../../../public/css/main.css";
import "../../../public/css/all.min.css";
import "../../../public/css/fullcalendar.min.css";
import "../../../public/css/bootstrap.min.css";
import "../../../public/css/animate.min.css";
import "../../../public/css/style.css";
import "../../../public/admin/css/style.min.css";
import "../../../public/icomoon/style.min.css";

import { global_params } from "../global_params";

export default {
  data() {
    return {
      mobile: "",
      errors: [],
    };
  },
  methods: {
    getStarted: function () {
      let mobile_no = this.mobile;
      let params = {
        mobile: this.mobile,
      };
      let parent = $(".get-started-form");

      let is_valid = parent.is_valid();

      if (is_valid) {
        axios
          .post("/api/get-started", params)
          .then((res) => {
            if (res.data.status) {
              if (res.data.is_exists) {
                window.location = `${
                  global_params.http + res.data.weburl + global_params.suffixUrl
                }login`;
              } else {
                let route_param = {
                  name: res.data.route,
                  params: {
                    mobile_no: mobile_no,
                    otp_code: res.data.otp_code,
                  },
                };
                this.$router.push(route_param);
              }
            } else {
              this.errors = res.data.errors;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
