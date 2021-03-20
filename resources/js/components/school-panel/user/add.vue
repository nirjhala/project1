<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
      <div class="float-right">
        <router-link
          :to="{ name: 'ViewUser', params: { role: page_title } }"
          class="fw-btn-fill btn-gradient-yellow text-white"
          >View {{ page_title }}</router-link
        >
      </div>
      <h3>{{ !id ? "Add" : "Edit" }} {{ page_title }}</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'UserMaster' }">User Master</router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'ViewUser', params: { role: page_title } }"
            >{{ page_title }}</router-link
          >
        </li>
        <li>{{ !id ? "Add" : "Edit" }} {{ page_title }}</li>
      </ul>
    </div>
    <!-- Breadcrumbs Area End Here -->

    <!-- Card Table Area Start Here -->
    <div class="card height-auto">
      <div class="card-body">
        <div class="text-center" v-if="!loaded">
          <b-spinner></b-spinner>
        </div>
        <div v-if="loaded">
          <form @submit.prevent="id ? updateData() : addData()">
            <div class="heading-layout1">
              <div class="item-title">
                <h3>Login Info</h3>
              </div>
            </div>
            <div class="alert alert-danger" v-if="errors.length">
              <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">
                  {{ error }}
                </li>
              </ul>
            </div>
            <div class="row">
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Mobile No. *</label>
                <input
                  type="text"
                  v-model="$v.mobile.$model"
                  class="form-control"
                  :class="{ 'is-invalid': $v.mobile.$error }"
                />
                <b-form-invalid-feedback v-if="!$v.mobile.required"
                  >Please enter mobile no.</b-form-invalid-feedback
                >
                <b-form-invalid-feedback v-if="!$v.mobile.mobileNo"
                  >Please enter valid 10 digit mobile
                  no.</b-form-invalid-feedback
                >
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Password *</label>
                <input
                  type="password"
                  v-model="$v.password.$model"
                  id="userPassword"
                  class="form-control"
                  :class="{ 'is-invalid': $v.password.$error }"
                />
                <b-form-invalid-feedback
                  >Please enter password.</b-form-invalid-feedback
                >
                <i
                  class="far fa fa-eye passwordToggle input-icon"
                  style="cursor: pointer"
                ></i>
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>&nbsp;</label>
                <button
                  type="button"
                  class="btn-fill-lg bg-blue-dark btn-hover-yellow genPassBtn"
                >
                  Auto Generate
                </button>
              </div>
            </div>
            <div class="heading-layout1">
              <div class="item-title">
                <h3>{{ page_title }} Info</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-9">
                <div class="row">
                  <div class="col-xl-4 col-12 form-group">
                    <label>Title *</label>
                    <select
                      v-model.trim="$v.title.$model"
                      v-on:change="getFullName()"
                      class="form-control"
                      :class="{ 'is-invalid': $v.title.$error }"
                    >
                      <option value="Mr.">Mr.</option>
                      <option value="Ms.">Ms.</option>
                      <option value="Mrs.">Mrs.</option>
                    </select>
                    <b-form-invalid-feedback
                      >Please select title</b-form-invalid-feedback
                    >
                  </div>
                  <div class="col-xl-4 col-12 form-group">
                    <label>First Name *</label>
                    <input
                      type="text"
                      v-model="$v.fname.$model"
                      v-on:keyup="getFullName()"
                      class="form-control"
                      :class="{ 'is-invalid': $v.fname.$error }"
                    />
                    <b-form-invalid-feedback v-if="!$v.fname.required"
                      >Please select title</b-form-invalid-feedback
                    >
                    <b-form-invalid-feedback v-if="$v.fname.required"
                      >Please don't enter any special symbol or numeric
                      value.</b-form-invalid-feedback
                    >
                  </div>
                  <div class="col-xl-4 col-12 form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      v-model="$v.lname.$model"
                      v-on:keyup="getFullName()"
                      class="form-control"
                      :class="{ 'is-invalid': $v.lname.$error }"
                    />
                    <b-form-invalid-feedback v-if="!$v.lname.alphaOnly"
                      >Please don't enter any special symbol or numeric
                      value.</b-form-invalid-feedback
                    >
                  </div>
                </div>
                <div class="form-group">
                  <label>Display Name *</label>
                  <input
                    type="text"
                    v-model="$v.name.$model"
                    class="form-control"
                    :class="{ 'is-invalid': $v.name.$error }"
                  />
                  <b-form-invalid-feedback
                    >Please enter name.</b-form-invalid-feedback
                  >
                </div>
                <div class="row">
                  <div class="col-xl-4 col-12 form-group">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      v-model="dob"
                      class="form-control"
                      :max="maxDob"
                    />
                  </div>
                  <div class="col-xl-4 form-group">
                    <label>Gender *</label>
                    <select
                      v-model="$v.gender.$model"
                      class="form-control"
                      :class="{ 'is-invalid': $v.gender.$error }"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <b-form-invalid-feedback
                      >Please select gender.</b-form-invalid-feedback
                    >
                  </div>
                  <div class="col-xl-4 col-12 form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      v-model="$v.email.$model"
                      class="form-control"
                      :class="{ 'is-invalid': $v.email.$error }"
                    />
                    <b-form-invalid-feedback
                      >Please enter valid email.</b-form-invalid-feedback
                    >
                  </div>
                </div>
                <div class="form-group">
                  <label>Address Line 1</label>
                  <input
                    type="text"
                    v-model="$v.address1.$model"
                    value=""
                    class="form-control"
                    :class="{ 'is-invalid': $v.address1.$error }"
                  />
                  <b-form-invalid-feedback
                    >Please fill address line 1.</b-form-invalid-feedback
                  >
                </div>
                <div class="form-group">
                  <label>Address Line 2</label>
                  <input
                    type="text"
                    v-model="address2"
                    value=""
                    class="form-control"
                  />
                </div>
                <div class="row">
                  <div class="col-xl-4 col-12 form-group">
                    <label>State *</label>
                    <select
                      v-on:change="getCities()"
                      v-model="$v.state.$model"
                      class="form-control"
                      :class="{ 'is-invalid': $v.state.$error }"
                    >
                      <option value="">Select State</option>
                      <option :value="s.id" v-for="(s, i) in states" :key="i">
                        {{ s.name }}, {{ s.country_name.name }}
                      </option>
                    </select>
                    <b-form-invalid-feedback
                      >Please select state</b-form-invalid-feedback
                    >
                  </div>
                  <div class="col-xl-4 form-group">
                    <label>City *</label>
                    <select
                      v-model="$v.city.$model"
                      class="form-control"
                      :class="{ 'is-invalid': $v.city.$error }"
                    >
                      <option value="">Select City</option>
                      <option :value="s.id" v-for="(s, i) in cities" :key="i">
                        {{ s.name }}
                      </option>
                    </select>
                    <b-form-invalid-feedback
                      >Please select city</b-form-invalid-feedback
                    >
                  </div>
                  <div class="col-xl-4 col-12 form-group">
                    <label>Pincode</label>
                    <input
                      type="tel"
                      v-model="$v.pin_code.$model"
                      class="form-control"
                      :class="{ 'is-invalid': $v.pin_code.$error }"
                    />
                    <b-form-invalid-feedback v-if="!$v.pin_code.required"
                      >Please select pincode</b-form-invalid-feedback
                    >
                    <b-form-invalid-feedback v-if="$v.pin_code.required"
                      >Please enter valid 6 digit
                      pincode</b-form-invalid-feedback
                    >
                  </div>
                </div>
                <div class="heading-layout1" v-if="custom_fields.length">
                  <div class="item-title">
                    <h3>Other Details</h3>
                  </div>
                </div>
                <b-row v-if="custom_fields.length">
                  <b-col
                    :xl="cf.type == 'textarea' ? 12 : 4"
                    class="form-group"
                    v-for="(cf, index) in custom_fields"
                    :key="index"
                    style="margin-bottom: 2.3rem"
                  >
                    <label>{{ cf.name }}</label>
                    <input
                      type="text"
                      v-model="custom_field[cf.id]"
                      class="form-control"
                      :placeholder="cf.name"
                      v-if="cf.type == 'text'"
                    />
                    <textarea
                      v-model="custom_field[cf.id]"
                      class="form-control"
                      :placeholder="cf.name"
                      v-if="cf.type == 'textarea'"
                      style="height: 200px"
                    ></textarea>
                    <select
                      v-model="custom_field[cf.id]"
                      class="form-control"
                      v-if="cf.type == 'relation'"
                    >
                      <option value="">Select an option</option>
                      <option
                        :value="id"
                        v-for="(name, id) in cf.options"
                        :key="id"
                      >
                        {{ name }}
                      </option>
                    </select>
                    <div v-if="cf.type == 'boolean'">
                      <label>
                        <input
                          type="radio"
                          :name="`customField${cf.id}`"
                          v-model="custom_field[cf.id]"
                          value="Yes"
                        />
                        Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          :name="`customField${cf.id}`"
                          v-model="custom_field[cf.id]"
                          value="No"
                        />
                        No
                      </label>
                    </div>
                  </b-col>
                </b-row>
              </div>
              <div class="col-lg-3">
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
                  Upload Image
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col-12 form-group mg-t-8">
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
          </form>
        </div>
      </div>
    </div>
    <!-- Student Table Area End Here -->
    <b-card title="Documents" v-if="this.id">
      <form method="post" enctype="multipart/form-data">
        <div class="row mb-2" v-for="(c, i) in certificates" :key="i">
          <div class="col-6">
            {{ c.en_name }}
            <span v-if="c.short_name"> - {{ c.short_name }}</span> ({{
              c.hi_name
            }})

            <a
              :href="user_certificates[c.id]"
              v-if="user_certificates[c.id]"
              target="_blank"
              >VIEW / DOWNLOAD FILE</a
            >
          </div>
          <div>
            <input type="file" :data-id="c.id" @change="handleFile" />
          </div>
        </div>
      </form>
    </b-card>
    <div class="modal align-middle" id="generatePasswordModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Generate Password</h5>
            <button class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <div class="input-group mb-3">
              <input
                type="text"
                v-model="generated_password"
                id="generatedPassword"
                class="form-control"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary genPassBtn"
                  type="button"
                >
                  Generate
                </button>
              </div>
            </div>
            <div class="">
              <label>
                <input type="checkbox" id="copyConfirm" value="1" /> Have you
                copied password?
              </label>
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-info btnReflectPassword"
              v-on:click="fillPassword()"
              disabled
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  required,
  email,
  minLength,
  maxLength,
  helpers,
  requiredIf,
} from "vuelidate/lib/validators";
import Select2 from "v-select2-component";
import api, {
  view_certificate,
  addUserCertificate,
  view_custom_fields,
} from "../../../api/script";

const alphaOnly = helpers.regex("aplpha", /^[A-Za-z ]*$/i);

const date = new Date();
date.setFullYear(date.getFullYear() - 18);

let month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

export default {
  components: { Select2 },
  props: ["image_src", "image"],
  data() {
    return {
      maxDob: `${date.getFullYear()}-${month}-${day}`,
      page_title: "",
      id: "",
      role: "",
      mobile: "",
      password: "",
      title: "Mr.",
      fname: "",
      lname: "",
      name: "",
      dob: "",
      gender: "Male",
      email: "",
      address1: "",
      address2: "",
      city: "",
      pin_code: "",
      state: "",
      generated_password: "",
      custom_field: {},
      states: [],
      cities: [],
      pincodes: [],
      custom_fields: [],
      errors: [],
      loaded: 0,
      role_options: [],
      user_certificates: {},
      certificates: [],
      token: localStorage.getItem("token"),
    };
  },
  validations: {
    password: {
      requiredIf: requiredIf(function () {
        return !this.$route.params.id;
      }),
    },
    title: {
      required,
    },
    fname: {
      required,
      alphaOnly,
    },
    lname: {
      alphaOnly,
    },
    name: {
      required,
    },
    dob: {
      required,
    },
    email: {
      email,
    },
    gender: {
      required,
    },
    mobile: {
      required,
      mobileNo(mobile) {
        return /[0-9]{10}/.test(mobile) && mobile.length == 10;
      },
      maxLength: maxLength(10),
    },
    address1: {
      required,
    },
    state: {
      required,
    },
    city: {
      required,
    },
    pin_code: {
      required,
      isPincode(postcode) {
        return (
          postcode.length == 0 ||
          (postcode.length == 6 && /[0-9]{6}/.test(postcode))
        );
      },
    },
  },
  mounted() {
    this.routeLoading();
  },
  methods: {
    routeLoading() {
      let params = this.$route.params;
      this.page_title = params.role;

      this.getCustomFields();
      this.getStates();

      if (params.id != undefined && params.id != "") {
        this.getInfo(params.id);
        this.fetchCertificates();
      } else {
        this.loaded = 1;
      }
    },
    getFullName() {
      this.name = (this.title + " " + this.fname + " " + this.lname).trim();
    },
    fillPassword() {
      this.password = $("#generatedPassword").val();
      $("#generatePasswordModal").modal("hide");
    },
    handleFile(e) {
      let certificate_id = e.target.getAttribute("data-id");
      let data = new FormData();

      data.append("user_id", this.id);
      data.append("certificate_id", certificate_id);
      data.append("file", e.target.files[0]);

      addUserCertificate(data)
        .then((res) => {
          this.getInfo(this.id);

          this.$toast.success("File uploaded.");
        })
        .catch((err) => {
          console.log("Errors: ", err);
        });
    },
    fetchCertificates() {
      view_certificate(this.page_title.toLowerCase()).then((res) => {
        this.certificates = res.data;
      });
    },
    getCustomFields() {
      view_custom_fields(this.page_title.toLowerCase())
        .then((res) => {
          this.custom_fields = res.data;
          res.data.forEach((row, i) => {
            this.custom_field[row.id] = "";
          });
        })
        .catch((err) => {
          console.log("Error: ", err);
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
    getStates() {
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.get("get-all-states").then((res) => {
        this.states = res.data;
      });
    },
    getInfo(id) {
      let apiResponse = api.userInfo(id);
      apiResponse.then((res) => {
        this.id = res.data.data.id;
        this.role = res.data.data.role;
        this.mobile = res.data.data.mobile;
        this.title = res.data.data.title;
        this.fname = res.data.data.fname;
        this.lname = res.data.data.lname;
        this.name = res.data.data.name;
        this.dob = res.data.data.dob;
        this.gender = res.data.data.gender;
        this.email = res.data.data.email;
        this.address1 = res.data.data.address1;
        this.address2 = res.data.data.address2;
        this.state = res.data.data.city_data
          ? res.data.data.city_data.state
          : "";
        this.city = res.data.data.city_id;
        this.pin_code =
          res.data.data.pin_code != null ? res.data.data.pin_code : "";
        this.loaded = 1;

        if (res.data.data.documents.length) {
          res.data.data.documents.forEach((c, i) => {
            this.user_certificates[c.certificate_id] = c.file_url;
          });
        }

        if (res.data.data.custom_fields.length) {
          res.data.data.custom_fields.forEach((cf, i) => {
            this.custom_field[cf.id] = cf.pivot.value;
          });
        }

        let media_image = res.data.data.image;
        let media_src = res.data.data.media
          ? this.baseURL + "uploads/medium/" + res.data.data.media.image
          : this.baseURL + "/img/default.jpg";

        this.$emit("update-image_src-selected", media_src);
        this.$emit("update-image-selected", media_image);

        this.getCities();
      });
    },
    addData: function () {
      let params = {
        title: this.title,
        fname: this.fname,
        lname: this.lname,
        mobile: this.mobile,
        email: this.email,
        gender: this.gender,
        dob: this.dob,
        image: this.image,
        address1: this.address1,
        address2: this.address2,
        city_id: this.city,
        pin_code: this.pin_code,
        role: this.page_title,
        login: this.mobile,
        password: this.password,
        custom_field: this.custom_field,
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
        .post("user", params)
        .then((res) => {
          if (res.data.status) {
            this.$router
              .push({
                name: "EditUser",
                params: {
                  id: res.data.user.id,
                  role: this.page_title,
                },
              })
              .then((res) => {
                this.loaded = 1;
                this.$toast.success("Record saved.");
              })
              .catch((err) => {
                this.loaded = 1;
                console.log(err);
              });
          } else {
            this.loaded = 1;
            this.errors = res.data.errors;
          }
        })
        .catch((error) => {
          this.loaded = 1;
          console.log(error);
        });
    },
    updateData: function () {
      let params = {
        _method: "PUT",
        title: this.title,
        fname: this.fname,
        lname: this.lname,
        mobile: this.mobile,
        email: this.email,
        gender: this.gender,
        dob: this.dob,
        image: this.image,
        address1: this.address1,
        address2: this.address2,
        city_id: this.city,
        pin_code: this.pin_code,
        role: this.page_title,
        login: this.mobile,
        password: this.password,
        custom_field: this.custom_field,
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
        .post(`user/${this.id}`, params)
        .then((res) => {
          if (res.data.status) {
            this.$router
              .push({
                name: "ViewUser",
                params: {
                  role: this.page_title,
                },
              })
              .then((res) => {
                this.loaded = 1;
                this.$toast.success("Record saved.");
              })
              .catch((err) => {
                this.loaded = 1;
                console.log(err);
              });
          } else {
            this.loaded = 1;
            this.errors = res.data.errors;
          }
        })
        .catch((error) => {
          this.loaded = 1;
          console.log(error);
        });
    },
  },
  watch: {
    "$route.params.id"() {
      this.routeLoading();
    },
  },
};
</script>
