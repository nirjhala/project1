<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
      <h3>Edit Profile</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>Edit Profile</li>
      </ul>
    </div>
    <!-- Breadcrumbs Area End Here -->
    <!-- Student Table Area Start Here -->
    <div class="card height-auto">
      <div class="card-body">
        <div class="text-center" v-if="!loaded">
          <b-spinner></b-spinner>
        </div>
        <div v-if="loaded">
          <form class="new-added-form" @submit.prevent="updateData()">
            <div class="alert alert-danger" v-if="errors.length">
              <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">
                  {{ error }}
                </li>
              </ul>
            </div>
            <input type="hidden" v-model="id" value="" />
            <div class="row">
              <div class="col-sm-9">
                <div class="row">
                  <div class="col-sm-4 form-group">
                    <label>Title *</label>
                    <div>
                      <label class="custom-radio">
                        <input
                          type="radio"
                          name="title"
                          v-model="title"
                          value="Mr."
                        />
                        <span>Mr.</span>
                      </label>
                      <label class="custom-radio">
                        <input
                          type="radio"
                          name="title"
                          v-model="title"
                          value="Ms."
                        />
                        <span>Ms.</span>
                      </label>
                      <label class="custom-radio">
                        <input
                          type="radio"
                          name="title"
                          v-model="title"
                          value="Mrs."
                        />
                        <span>Mrs.</span>
                      </label>
                    </div>
                  </div>
                  <div class="col-sm-4 form-group">
                    <label>First Name *</label>
                    <input
                      type="text"
                      v-model="fname"
                      name=""
                      class="form-control"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div class="col-sm-4 form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      v-model="lname"
                      name=""
                      class="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 form-group">
                    <label>Display Name *</label>
                    <input
                      type="text"
                      v-model="name"
                      name=""
                      class="form-control"
                      placeholder="Display Name"
                    />
                  </div>
                  <div class="col-12 form-group"></div>
                  <!-- To maintain space -->
                </div>
                <div class="row">
                  <div class="col-sm-4 form-group">
                    <label>Gender *</label>
                    <div>
                      <label class="custom-radio">
                        <input
                          type="radio"
                          name="gender"
                          v-model="gender"
                          value="Male"
                        />
                        <span>Male</span>
                      </label>
                      <label class="custom-radio">
                        <input
                          type="radio"
                          name="gender"
                          v-model="gender"
                          value="Female"
                        />
                        <span>Female</span>
                      </label>
                      <label class="custom-radio">
                        <input
                          type="radio"
                          name="gender"
                          v-model="gender"
                          value="Other"
                        />
                        <span>Other</span>
                      </label>
                    </div>
                  </div>
                  <div class="col-sm-4 form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      v-model="email"
                      name=""
                      class="form-control"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div class="col-sm-4 form-group">
                    <label>Date of Birth *</label>
                    <input
                      type="date"
                      v-model="dob"
                      name=""
                      class="form-control"
                      placeholder="Date of Birth"
                      :max="maxDate"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label>Address Line 1 *</label>
                  <input
                    type="text"
                    v-model="address1"
                    value=""
                    class="form-control"
                    placeholder="Address Line 1"
                    required
                  />
                </div>
                <div class="form-group">
                  <label>Address Line 2</label>
                  <input
                    type="text"
                    v-model="address2"
                    value=""
                    class="form-control"
                    placeholder="Address Line 2"
                  />
                </div>
                <div class="row">
                  <div class="col-sm-4 form-group">
                    <label>State *</label>
                    <select
                      class="form-control"
                      v-model="state"
                      v-on:change="getCities()"
                      required
                    >
                      <option value="">Select State</option>
                      <option :value="s.id" v-for="(s, i) in states" :key="i">
                        {{ s.name }}
                      </option>
                    </select>
                  </div>
                  <div class="col-sm-4 form-group">
                    <label>City *</label>
                    <select
                      class="form-control"
                      v-model="city"
                      v-on:change="getPincodes()"
                      required
                    >
                      <option value="">Select City</option>
                      <option :value="c.id" v-for="(c, i) in cities" :key="i">
                        {{ c.name }}
                      </option>
                    </select>
                  </div>
                  <div class="col-sm-4 form-group">
                    <label>Pincode *</label>
                    <select class="form-control" v-model="pin_code" required>
                      <option value="">Select Pincode</option>
                      <option
                        :value="p.pincode"
                        v-for="(p, i) in pincodes"
                        :key="i"
                      >
                        {{ p.pincode }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 form-group mg-t-8">
                    <label>&nbsp;</label>
                    <button
                      type="submit"
                      class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                    >
                      {{ !id ? "Save" : "Update" }}
                    </button>
                    <button
                      type="reset"
                      class="btn-fill-lg bg-blue-dark btn-hover-yellow"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="mb-3">
                  <label>Upload Image</label>
                  <img
                    :src="image_src"
                    alt=""
                    title=""
                    id="featuredImage"
                    class="w-100 uploadImage"
                    data-image="#featuredImage"
                    data-field="#featuredImageId"
                    v-if="image_src"
                  />
                  <input
                    type="hidden"
                    v-model="image"
                    value=""
                    id="featuredImageId"
                  />
                </div>
                <button
                  type="button"
                  class="uploadImage btn-fill-lg bg-blue-dark btn-hover-yellow btn-block uploadImageBtn"
                  data-image="#featuredImage"
                  data-field="#featuredImageId"
                >
                  Choose Image
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Student Table Area End Here -->
  </div>
</template>
<script>
var d = new Date(),
  month = "" + (d.getMonth() + 1),
  day = "" + d.getDate(),
  year = d.getFullYear();
if (month.length < 2) month = "0" + month;
if (day.length < 2) day = "0" + day;
var currentDate = [year, month, day].join("-");
export default {
  props: ["image_src", "image"],
  data() {
    return {
      id: "",
      title: "Mr.",
      fname: "",
      lname: "",
      gender: "Male",
      email: "",
      dob: "",
      address1: "",
      address2: "",
      state: "",
      city: "",
      pin_code: "",
      states: [],
      cities: [],
      pincodes: [],
      errors: [],
      loaded: 0,
      departments: [],
      token: localStorage.getItem("token"),
      maxDate: currentDate,
    };
  },
  computed: {
    name: {
      get() {
        return (this.title + " " + this.fname + " " + this.lname).trim();
      },
      set() {
        //
      },
    },
  },
  mounted() {
    this.getProfile();
  },
  methods: {
    getProfile() {
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.get("get-profile").then((res) => {
        this.states = res.data.states;
        this.cities = res.data.cities;
        this.pincodes = res.data.pincodes;

        let profile = res.data.userInfo;
        this.title = profile.title;
        this.fname = profile.fname;
        this.lname = profile.lname;
        this.name = profile.name;
        this.gender = profile.gender;
        this.email = profile.email;
        this.dob = profile.dob;
        this.address1 = profile.address1;
        this.address2 = profile.address2;
        this.state =
          profile.pincode_data && profile.pincode_data.city_name
            ? profile.pincode_data.city_name.state
            : "";
        this.city = profile.pincode_data ? profile.pincode_data.city : "";
        this.pin_code = profile.pin_code ? profile.pin_code : "";

        let media_image = profile.image;
        let media_src = profile.media
          ? this.baseURL + "/uploads/medium/" + profile.media.image
          : this.baseURL + "/img/default.jpg";

        this.$emit("update-image_src-selected", media_src);
        this.$emit("update-image-selected", media_image);

        this.loaded = 1;
      });
    },
    getPincodes() {
      let city = this.city,
        params = {
          id: city,
        };
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.post("get-pincodes-by-city", params).then((res) => {
        this.pincodes = res.data;
      });
    },
    getCities() {
      let state = this.state,
        params = {
          id: state,
        };
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.post("get-cities-by-state", params).then((res) => {
        this.cities = res.data;
      });
    },
    updateData: function () {
      let params = {
        record: {
          title: this.title,
          fname: this.fname,
          lname: this.lname,
          name: this.name,
          gender: this.gender,
          email: this.email,
          image: this.image,
          dob: this.dob,
          address1: this.address1,
          address2: this.address2,
          pin_code: this.pin_code,
        },
      };
      this.loaded = 0;
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance
        .post("update-profile", params)
        .then((res) => {
          this.loaded = 1;
          if (res.data.status) {
            this.$toast.success("Profile updated.");
          } else {
            this.errors = res.data.errors;
          }
        })
        .catch((error) => {
          this.loaded = 1;
          console.log(error);
        });
    },
  },
};
</script>
