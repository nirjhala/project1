<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <breadcrumbs
      :items="b_items"
      :title="title"
      :btn="{
        target: {
          name: 'class',
        },
        label: 'View Class',
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
              <h3>{{ !id ? "Add New" : "Edit" }} Class</h3>
            </div>
          </div>
          <form
            class="new-added-form"
            @submit.prevent="id ? updateData() : addData()"
          >
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
                  class="form-control classDept"
                  v-model.trim="$v.classDept.$model"
                  :class="{
                    'is-invalid': $v.classDept.$error,
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
                <label>Name *</label>
                <input
                  type="text"
                  v-model="$v.className.$model"
                  placeholder="Class Name like Prep, I, II etc."
                  value=""
                  class="form-control"
                  :class="{
                    'is-invalid': $v.className.$error,
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
import { add_class, show_class, update_class } from "../../../api/classapi";
import { view_department } from "../../../api/department";
import Breadcrumbs from "../common/Breadcrumbs";
export default {
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      title: "Add Class",
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
      className: "",
      classDept: "",
      errors: [],
      loaded: 0,
      departments: [],
    };
  },
  validations: {
    className: {
      required,
    },
    classDept: {
      required,
    },
  },
  mounted() {
    let params = this.$route.params;
    this.getDepts(params);
  },
  methods: {
    getDepts(params) {
      view_department("type=all").then((res) => {
        this.departments = res.data;
        if (params.id != undefined && params.id != "") {
          this.title = "Edit Class";
          this.getInfo(params.id);
        } else {
          this.loaded = 1;
        }
      });
    },
    getInfo(id) {
      show_class(id).then((res) => {
        this.id = res.data.data.id;
        this.className = res.data.data.name;
        this.classDept = res.data.data.department;

        this.loaded = 1;
      });
    },
    addData: function () {
      this.$v.$touch();

      if (!this.$v.$anyError) {
        let params = {
          name: this.className,
          department: this.classDept,
        };
        this.loaded = 0;

        add_class(params)
          .then((res) => {
            if (res.data.status) {
              this.$router
                .push({
                  name: "class",
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
      }
    },
    updateData: function () {
      this.$v.$touch();

      if (!this.$v.$anyError) {
        let params = {
          id: this.id,
          name: this.className,
          department: this.classDept,
        };
        this.loaded = 0;
        update_class(params)
          .then((res) => {
            if (res.data.status) {
              this.$router
                .push({
                  name: "class",
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
      }
    },
  },
};
</script>
