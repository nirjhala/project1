<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <breadcrumbs
      :items="b_items"
      :title="title"
      :btn="{
        target: {
          name: 'department',
        },
        label: 'View Department',
      }"
    />
    <!-- Breadcrumbs Area End Here -->

    <!-- Student Table Area Start Here -->
    <div class="card height-auto">
      <div class="card-body">
        <div class="text-center" v-if="!loaded">
          <b-spinner></b-spinner>
        </div>
        <div v-if="loaded">
          <div class="heading-layout1">
            <div class="item-title">
              <h3>{{ title }}</h3>
            </div>
          </div>
          <form @submit.prevent="id ? updateData() : addSession()">
            <div class="alert alert-danger" v-if="errors.length">
              <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">
                  {{ error }}
                </li>
              </ul>
            </div>
            <input type="hidden" v-model="id" value="" />
            <div class="row">
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Name *</label>
                <input
                  type="text"
                  v-model.trim="$v.deptName.$model"
                  placeholder=""
                  value=""
                  class="form-control"
                  :class="{
                    'is-invalid': $v.deptName.$error,
                  }"
                />
                <b-form-invalid-feedback
                  >Please enter department name.</b-form-invalid-feedback
                >
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
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import {
  add_department,
  show_department,
  update_department,
} from "../../../api/department";

import Breadcrumbs from "../common/Breadcrumbs";
export default {
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      title: "Add Department",
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
      id: "",
      deptName: "",
      openingTime: "",
      closingTime: "",
      errors: [],
      loaded: 0,
    };
  },
  validations: {
    deptName: {
      required,
    },
  },
  mounted() {
    let params = this.$route.params;

    if (params.id != undefined && params.id != "") {
      this.title = "Edit Department";
      this.getInfo(params.id);
    } else {
      this.loaded = 1;
    }
  },
  methods: {
    getInfo(id) {
      show_department(id).then((res) => {
        this.id = res.data.data.id;
        this.deptName = res.data.data.dept_name;

        this.loaded = 1;
      });
    },
    addSession: function () {
      this.$v.$touch();

      if (!this.$v.$anyError) {
        let params = {
          dept_name: this.deptName,
        };
        this.loaded = 0;

        add_department(params)
          .then((res) => {
            if (res.data.status) {
              this.$router
                .push({ name: "department" })
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
          id: this.id,
          dept_name: this.deptName,
        };
        this.loaded = 0;

        update_department(params)
          .then((res) => {
            if (res.data.status) {
              this.$router
                .push({ name: "department" })
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
  },
};
</script>
