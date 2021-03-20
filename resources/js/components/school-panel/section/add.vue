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
          <form @submit.prevent="addData">
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
                  class="form-control sectionDept"
                  v-model.trim="$v.sectionDept.$model"
                  v-on:change="getClasses"
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
                  >Please select department.</b-form-invalid-feedback
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
                  >Please select class.</b-form-invalid-feedback
                >
              </div>
              <div class="col-xl-2 col-lg-2 col-12 form-group">
                <label>No. of Sections</label>
                <select
                  v-model.trim="$v.sectionNo.$model"
                  v-on:change="addSectionsText"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.sectionNo.$error,
                  }"
                >
                  <option value="">Select No. of Sections</option>
                  <option :value="n" v-for="n in 20" :key="n">{{ n }}</option>
                </select>
                <b-form-invalid-feedback
                  >Please select number of sections.</b-form-invalid-feedback
                >
              </div>
            </div>
            <div class="row">
              <div
                class="col-xl-3 col-lg-6 col-12 form-group"
                v-for="(sec, index) in $v.sectionNames.$each.$iter"
                :key="index"
              >
                <label>Name *</label>
                <input
                  type="text"
                  v-model.trim="sec.name.$model"
                  class="form-control"
                  :class="{
                    'is-invalid': sec.name.$error,
                  }"
                />
                <b-form-invalid-feedback v-if="!sec.name.required"
                  >Please enter section name.</b-form-invalid-feedback
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
import { add_section } from "../../../api/section";
import Breadcrumbs from "../common/Breadcrumbs";
export default {
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      title: "View Section",
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
      sectionNames: [],
      sectionDept: "",
      sectionClass: "",
      errors: [],
      loaded: 0,
      departments: {},
      classes: {},
      sectionNo: "",
      sectionArr: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
    };
  },
  validations: {
    sectionDept: {
      required,
    },
    sectionClass: {
      required,
    },
    sectionNo: {
      required,
    },
    sectionNames: {
      required,
      $each: {
        name: {
          required,
        },
      },
    },
  },
  mounted() {
    let params = this.$route.params;
    this.getDepts(params);
  },
  methods: {
    getClasses() {
      let deptId = this.sectionDept;

      view_class(`type=all&department=${deptId}`).then((res) => {
        this.classes = res.data;
        this.sectionClass = "";
      });
    },
    addSectionsText: function () {
      this.sectionNames = [];
      for (let i = 0; i < this.sectionNo; i++) {
        this.sectionNames.push({ name: this.sectionArr[i] });
      }
    },
    getDepts(params) {
      view_department("type=all").then((res) => {
        this.departments = res.data;

        this.loaded = 1;
      });
    },
    addData: function () {
      this.$v.$touch();

      if (!this.$v.$anyError) {
        let params = {
          names: this.sectionNames,
          department: this.sectionDept,
          class: this.sectionClass,
        };
        this.loaded = 0;

        add_section(params)
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
