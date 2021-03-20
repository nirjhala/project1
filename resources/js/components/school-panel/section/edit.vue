<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <breadcrumbs
      :items="b_items"
      :title="title"
      :btn="{
        target: {
          name: 'section',
        },
        label: 'View Section',
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
                <label>Department</label>
                <select
                  v-model="$v.sectionDept.$model"
                  v-on:change="getClasses"
                  class="form-control sectionDept"
                  :class="{
                    'is-invalid': $v.sectionDept.$error,
                  }"
                >
                  <option value="">Select Department</option>
                  <option
                    v-for="(name, id) in departments"
                    :value="id"
                    :key="id"
                  >
                    {{ name }}
                  </option>
                </select>
                <b-form-invalid-feedback
                  >Please select required field.</b-form-invalid-feedback
                >
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Class</label>
                <select
                  v-model="$v.sectionClass.$model"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.sectionClass.$error,
                  }"
                >
                  <option value="">Select Class</option>
                  <option v-for="(name, id) in classes" :value="id" :key="id">
                    {{ name }}
                  </option>
                </select>
                <b-form-invalid-feedback
                  >Please select required field.</b-form-invalid-feedback
                >
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Name *</label>
                <input
                  type="text"
                  v-model="$v.sectionName.$model"
                  placeholder=""
                  class="form-control"
                  :class="{
                    'is-invalid': $v.sectionName.$error,
                  }"
                />
                <b-form-invalid-feedback
                  >Please enter required field.</b-form-invalid-feedback
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
import { view_class } from "../../../api/classapi";
import { view_department } from "../../../api/department";
import { show_section, update_section } from "../../../api/section";
import Breadcrumbs from "../common/Breadcrumbs";
export default {
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      title: "Edit Section",
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
      sectionName: "",
      sectionDept: "",
      sectionClass: "",
      errors: [],
      loaded: 0,
      departments: [],
      classes: [],
      sectionNo: 1,
    };
  },
  validations: {
    sectionDept: {
      required,
    },
    sectionClass: {
      required,
    },
    sectionName: {
      required,
    },
  },
  mounted() {
    let params = this.$route.params;
    this.getDepts(params);
  },
  methods: {
    getClasses() {
      this.classes = [];
      this.sectionClass = "";
      let deptId = this.sectionDept;
      if (deptId) {
        this.loaded = 0;

        view_class(`type=all&department=${deptId}`)
          .get("get-class-by-dept/" + deptId)
          .then((res) => {
            this.classes = res.data;
            this.loaded = 1;
          });
      }
    },
    getEditClasses(id) {
      let deptId = this.sectionDept;
      this.loaded = 0;
      view_class(`type=all&department=${deptId}`).then((res) => {
        this.classes = res.data;
        this.loaded = 1;
      });
    },
    addSectionsText: function () {
      for (let i = 0; i < this.sectionNo; i++) {
        this.sectionNames.push(this.sectionArr[i]);
      }
    },
    getDepts(params) {
      view_department("type=all").then((res) => {
        this.departments = res.data;

        if (params.id != undefined && params.id != "") {
          this.getInfo(params.id);
        } else {
          this.loaded = 1;
        }
      });
    },
    getInfo(id) {
      show_section(id).then((res) => {
        this.id = res.data.data.id;
        this.sectionClass = res.data.data.class;
        this.sectionDept = res.data.data.cls.department;
        this.sectionName = res.data.data.name;

        this.getEditClasses(this.id);
      });
    },
    updateData: function () {
      this.$v.$touch();
      if (!this.$v.$anyError) {
        let params = {
          id: this.id,
          name: this.sectionName,
          department: this.sectionDept,
          class: this.sectionClass,
        };
        this.loaded = 0;
        update_section(params)
          .then((res) => {
            if (res.data.status) {
              this.$router
                .push({ name: "section" })
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
