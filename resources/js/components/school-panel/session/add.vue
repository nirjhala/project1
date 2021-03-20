<template>
  <div class="dashboard-content-one">
    <!-- Breadcubs Area Start Here -->
    <breadcrumbs
      :items="b_items"
      :title="title"
      :btn="{
        target: {
          name: 'session',
        },
        label: 'View Session',
      }"
    />
    <!-- Breadcubs Area End Here -->

    <!-- Student Table Area Start Here -->
    <div class="card height-auto">
      <div class="card-body">
        <div class="text-center" v-if="!loaded">
          <b-spinner></b-spinner>
        </div>
        <div v-if="loaded">
          <div class="heading-layout1">
            <div class="item-title">
              <h3>{{ !$route.params.id ? "Add New" : "Edit" }} Session</h3>
            </div>
          </div>
          <form
            class="new-added-form"
            @submit.prevent="$route.params.id ? updateData() : addSession()"
          >
            <div class="alert alert-danger" v-if="errors.length">
              <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">
                  {{ error }}
                </li>
              </ul>
            </div>
            <input type="hidden" v-model="sessionId" value="" />
            <div class="row">
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Starting Year *</label>
                <select
                  v-model="$v.startYear.$model"
                  class="form-control select2"
                  :class="{
                    'is-invalid': $v.startYear.$error,
                  }"
                  @change="updateSessionName"
                >
                  <option value="">Please Select Year *</option>
                  <option :value="y" v-for="y in years" :key="y">
                    {{ y }}
                  </option>
                </select>
                <b-form-invalid-feedback
                  >Please select starting year.</b-form-invalid-feedback
                >
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Session Name *</label>
                <input
                  type="text"
                  v-model.trim="$v.sessionName.$model"
                  placeholder="20__-__"
                  value=""
                  class="form-control"
                  :class="{
                    'is-invalid': $v.sessionName.$error,
                  }"
                  readonly
                />
                <b-form-invalid-feedback v-if="!$v.sessionName.required"
                  >Please enter session name.</b-form-invalid-feedback
                >
              </div>
            </div>
            <div class="row">
              <div class="col-12 form-group mg-t-8">
                <button
                  type="submit"
                  class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                >
                  {{ !sessionId ? "Save" : "Update" }}
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
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import {
  add_session,
  show_session,
  update_session,
} from "../../../api/session";
import Breadcrumbs from "../common/Breadcrumbs";

export default {
  data() {
    return {
      title: "Add Session",
      b_items: [
        {
          target: {
            name: "dashboard",
          },
          title: "Dashboard",
        },
        {
          target: {
            name: "master",
          },
          title: "Master",
        },
      ],
      sessionId: "",
      sessionName: "",
      startYear: "",
      startMonth: 1,
      errors: [],
      years: [],
      loaded: 0,
    };
  },
  components: {
    Breadcrumbs,
  },
  validations: {
    sessionName: {
      required,
    },
    startYear: {
      required,
    },
    startMonth: {
      required,
    },
  },
  mounted() {
    let params = this.$route.params;

    if (params.id != undefined && params.id != "") {
      this.title = "Edit Session";
      this.getInfo(params.id);
    } else {
      this.loaded = 1;
    }

    var d = new Date();
    var n = d.getFullYear();
    for (let year = n; year >= n - 50; year--) {
      this.years.push(year);
    }

    /*-------------------------------------
              Select 2 Init
          -------------------------------------*/
    if ($.fn.select2 !== undefined) {
      $(".select2").select2({
        width: "100%",
      });
    }
  },
  methods: {
    updateSessionName() {
      let endYear = (parseInt(this.startYear) + 1).toString();
      endYear = endYear.slice(-2);
      this.sessionName = `${this.startYear}-${endYear}`;
    },
    getInfo(id) {
      this.loaded = 0;

      show_session(id).then((res) => {
        this.sessionId = res.data.data.id;
        this.sessionName = res.data.data.session_name;
        this.startYear = res.data.data.session_start_year;
        this.startMonth = res.data.data.session_start_month;
        this.loaded = 1;
      });
    },
    addSession: function () {
      this.$v.$touch();

      if (!this.$v.$anyError) {
        let params = {
          session_name: this.sessionName,
          session_start_year: this.startYear,
          session_start_month: this.startMonth,
        };
        this.loaded = 0;
        add_session(params)
          .then((res) => {
            if (res.data.status) {
              this.$router
                .push({ name: "session" })
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
      }
    },
    updateData: function () {
      this.$v.$touch();

      if (!this.$v.$anyError) {
        let params = {
          id: this.sessionId,
          session_name: this.sessionName,
          session_start_year: this.startYear,
          session_start_month: this.startMonth,
        };
        this.loaded = 0;

        update_session(params)
          .then((res) => {
            if (res.data.status) {
              this.$router
                .push({ name: "session" })
                .then(() => {
                  this.loaded = 1;
                  this.$toast.success("Record has been updated.");
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
      }
    },
  },
};
</script>
