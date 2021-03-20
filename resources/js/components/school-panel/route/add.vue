<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <breadcrumbs
      :items="b_items"
      :title="title"
      :btn="{
        target: {
          name: 'add-route',
        },
        label: 'Add New Route',
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
              <h3>{{ !id ? "Add New" : "Edit" }} Route</h3>
            </div>
          </div>
          <form @submit.prevent="id ? updateData() : addData()">
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
                <label>Route Name *</label>
                <input
                  type="text"
                  v-model.trim="$v.routeName.$model"
                  placeholder=""
                  value=""
                  class="form-control"
                  :class="{
                    'is-invalid': $v.routeName.$error,
                  }"
                />
                <b-form-invalid-feedback
                  >Please enter required field.</b-form-invalid-feedback
                >
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Vehicle *</label>
                <select
                  v-model.trim="$v.vehicle.$model"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.routeName.$error,
                  }"
                >
                  <option value="">Select Vehicle</option>
                  <option
                    :value="id"
                    v-for="(vehicle_no, id) in vehicles"
                    :key="id"
                  >
                    {{ vehicle_no }}
                  </option>
                </select>
                <b-form-invalid-feedback
                  >Please select required field.</b-form-invalid-feedback
                >
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Start Point *</label>
                <input
                  type="text"
                  v-model="$v.startPoint.$model"
                  placeholder="Route starting location from while picking students"
                  value=""
                  class="form-control"
                  :class="{
                    'is-invalid': $v.startPoint.$error,
                  }"
                />
                <b-form-invalid-feedback
                  >Please enter required field.</b-form-invalid-feedback
                >
              </div>
            </div>
            <div
              class="alert alert-danger"
              v-if="
                $v.routes.$error && !$v.routes.isUnique && routes.length > 1
              "
            >
              Duplicate routes entered.
            </div>
            <div
              class="alert alert-danger"
              v-if="$v.routes.$error && routes.length == 1"
            >
              Enter more than 1 route points.
            </div>
            <div class="route-list-group">
              <div
                class="row"
                v-for="(i, index) in $v.routes.$each.$iter"
                :key="`route-${index}`"
              >
                <div class="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Pickup Point *</label>
                  <input
                    type="text"
                    v-model="i.name.$model"
                    placeholder=""
                    value=""
                    class="form-control"
                    :class="{
                      'is-invalid': i.name.$error,
                    }"
                  />
                  <b-form-invalid-feedback
                    >Please enter required field.</b-form-invalid-feedback
                  >
                </div>
                <div
                  class="col-xl-3 col-lg-6 col-12 form-group"
                  v-if="routes.length > 1"
                >
                  <label>&nbsp;</label>
                  <button
                    type="button"
                    class="btn btn-danger btn-lg btn-block"
                    v-on:click="removeRoute(index)"
                  >
                    <span class="fa fa-minus"></span> REMOVE
                  </button>
                </div>
                <div
                  class="col-xl-3 col-lg-6 col-12 form-group"
                  v-if="index == routes.length - 1"
                >
                  <label>&nbsp;</label>
                  <button
                    type="button"
                    class="btn btn-success btn-lg btn-block addRouteBtn"
                    v-on:click="addRoute()"
                  >
                    <span class="fa fa-plus"></span> ADD
                  </button>
                </div>
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
import { required, minLength } from "vuelidate/lib/validators";
import { add_route, show_route, update_route } from "../../../api/route";
import { view_vehicle } from "../../../api/vehicle";
import Breadcrumbs from "../common/Breadcrumbs";
export default {
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      title: "Add Route",
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
      routeName: "",
      startPoint: "",
      endPoint: "",
      vehicle: "",
      routes: [
        {
          name: "",
        },
      ],
      vehicles: [],
      errors: [],
      loaded: 0,
    };
  },
  validations: {
    routeName: {
      required,
    },
    startPoint: {
      required,
    },
    vehicle: {
      required,
    },
    routes: {
      required,
      minLength: minLength(2),
      $each: {
        isUnique(currItem, itemArr) {
          var firstIdx = itemArr.findIndex(
            (item) => currItem.name === item.name
          );
          console.log(currItem, itemArr[firstIdx]);
          if (currItem === itemArr[firstIdx]) return true;
          return false;
        },
        name: {
          required,
        },
      },
    },
  },
  mounted() {
    this.getVehicles();

    let params = this.$route.params;
    if (params.id != undefined && params.id != "") {
      this.getInfo(params.id);
      this.title = "Edit Route";
    } else {
      this.loaded = 1;
    }
  },
  methods: {
    getVehicles() {
      view_vehicle(`type=all`).then((res) => {
        this.vehicles = res.data;
      });
    },
    addRoute() {
      let flag = true;
      $(this.routes).each(function (i, row) {
        if (row.name == "") flag = false;
      });
      if (flag) {
        this.routes.push({
          name: "",
        });
      } else {
        swal("Warning", "Please enter route name.", "warning");
      }
    },
    removeRoute(index) {
      this.routes.splice(index, 1);
    },
    getInfo(id) {
      show_route(id).then((res) => {
        let list = res.data.data;
        this.id = list.id;
        this.routeName = list.name;
        this.vehicle = list.vehicle;
        this.startPoint = list.start_point;
        this.routes = list.points;

        this.loaded = 1;
        $(".select2").each(function () {
          $(this).trigger("change");
        });
      });
    },
    addData: function () {
      this.$v.$touch();
      if (!this.$v.$anyError) {
        let params = {
          name: this.routeName,
          vehicle: this.vehicle,
          start_point: this.startPoint,
          routes: this.routes,
        };
        this.loaded = 0;
        add_route(params)
          .then((res) => {
            if (res.data.status) {
              this.$router
                .push({ name: "route" })
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
          name: this.routeName,
          vehicle: this.vehicle,
          start_point: this.startPoint,
          routes: this.routes,
        };
        this.loaded = 0;

        update_route(params)
          .then((res) => {
            if (res.data.status) {
              this.$router
                .push({ name: "route" })
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
