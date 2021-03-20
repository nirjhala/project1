<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <breadcrumbs
      :items="b_items"
      :title="title"
      :btn="{
        target: {
          name: 'vehicle',
        },
        label: 'View Vehicle',
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
              <h3>{{ !id ? "Add New" : "Edit" }} Vehicle</h3>
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
                <label>Vehicle Number *</label>
                <input
                  type="text"
                  v-model.trim="$v.vehicleNumber.$model"
                  placeholder="like RJ19 0392"
                  value=""
                  class="form-control"
                  :class="{
                    'is-invalid': $v.vehicleNumber.$error,
                  }"
                />
                <b-form-invalid-feedback
                  >Please enter required field.</b-form-invalid-feedback
                >
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Type *</label>
                <select
                  class="form-control"
                  v-model.trim="$v.vechicleType.$model"
                  :class="{
                    'is-invalid': $v.vechicleType.$error,
                  }"
                >
                  <option value="">Select Type</option>
                  <option value="bus">Bus</option>
                  <option value="auto">Auto</option>
                  <option value="taxi">Taxi</option>
                  <option value="van">Van</option>
                  <option value="cab">Cab</option>
                  <option value="other">Other</option>
                </select>
                <b-form-invalid-feedback
                  >Please enter required field.</b-form-invalid-feedback
                >
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>RC Number *</label>
                <input
                  type="text"
                  v-model="$v.vehicleRc.$model"
                  placeholder="Vehicle Registration Certified Number"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.vehicleRc.$error,
                  }"
                />
                <b-form-invalid-feedback
                  >Please enter required field.</b-form-invalid-feedback
                >
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Driver *</label>
                <select
                  v-model="$v.driver.$model"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.driver.$error,
                  }"
                >
                  <option value="">Select Driver</option>
                  <option :value="id" v-for="(name, id) in drivers" :key="id">
                    {{ name }}
                  </option>
                </select>
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
import { view_users } from "../../../api/script";
import {
  add_vehicle,
  show_vehicle,
  update_vehicle,
} from "../../../api/vehicle";
import Breadcrumbs from "../common/Breadcrumbs";
export default {
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      title: "Add Vehicle",
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
      vehicleRc: "",
      vehicleNumber: "",
      vechicleType: "",
      driver: "",
      drivers: [],
      errors: [],
      loaded: 0,
    };
  },
  validations: {
    vehicleRc: {
      required,
    },
    vehicleNumber: {
      required,
    },
    vechicleType: {
      required,
    },
    driver: {
      required,
    },
  },
  mounted() {
    let params = this.$route.params;
    this.getDrivers();
    if (params.id != undefined && params.id != "") {
      this.getInfo(params.id);
      this.title = "Edit Vehicle";
    } else {
      this.loaded = 1;
    }
  },
  methods: {
    getDrivers() {
      view_users(`type=all&role=Driver`).then((res) => {
        this.drivers = res.data;
      });
    },
    getInfo(id) {
      show_vehicle(id).then((res) => {
        let list = res.data.data;
        this.id = list.id;
        this.vehicleNumber = list.vehicle_no;
        this.vechicleType = list.type;
        this.vehicleRc = list.vehicle_rc;
        this.driver = list.driver;

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
          driver: this.driver,
          type: this.vechicleType,
          vehicle_no: this.vehicleNumber,
          vehicle_rc: this.vehicleRc,
        };
        this.loaded = 0;
        add_vehicle(params)
          .then((res) => {
            if (res.data.status) {
              this.$router
                .push({ name: "vehicle" })
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
          driver: this.driver,
          type: this.vechicleType,
          vehicle_no: this.vehicleNumber,
          vehicle_rc: this.vehicleRc,
        };
        this.loaded = 0;
        update_vehicle(params)
          .then((res) => {
            if (res.data.status) {
              this.$router
                .push({ name: "vehicle" })
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
