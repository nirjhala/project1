<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <breadcrumbs
      :items="b_items"
      :title="title"
      :btn="{
        target: {
          name: 'hostel',
        },
        label: 'View Hostel',
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
                <label>Name *</label>
                <input
                  type="text"
                  v-model.trim="$v.hostelName.$model"
                  placeholder="like Boys Hostel, location wise name etc."
                  value=""
                  class="form-control"
                  :class="{
                    'is-invalid': $v.hostelName.$error,
                  }"
                />
                <b-form-invalid-feedback
                  >Please enter required field.</b-form-invalid-feedback
                >
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>No. of Rooms *</label>
                <input
                  type="number"
                  min="1"
                  v-model.trim="$v.noOfRooms.$model"
                  placeholder="Total number of rooms"
                  value="1"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.noOfRooms.$error,
                  }"
                />
                <b-form-invalid-feedback
                  >Please enter required field.</b-form-invalid-feedback
                >
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Room Cost *</label>
                <input
                  type="number"
                  min="0"
                  v-model="$v.roomCost.$model"
                  placeholder="in INR (₹)"
                  value="0"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.roomCost.$error,
                  }"
                />
                <b-form-invalid-feedback
                  >Please enter required field.</b-form-invalid-feedback
                >
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Capacity *</label>
                <input
                  type="number"
                  min="0"
                  v-model="$v.capacity.$model"
                  placeholder=""
                  value="0"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.capacity.$error,
                  }"
                />
                <b-form-invalid-feedback
                  >Please enter required field.</b-form-invalid-feedback
                >
              </div>
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea
                v-model="description"
                rows="8"
                class="form-control"
                style="height: 200px"
              ></textarea>
            </div>
            <div class="form-group">
              <label>Address *</label>
              <textarea
                v-model="$v.address.$model"
                style="height: 200px"
                class="form-control"
                :class="{
                  'is-invalid': $v.address.$error,
                }"
              ></textarea>
              <b-form-invalid-feedback
                >Please enter required field.</b-form-invalid-feedback
              >
            </div>
            <div class="row">
              <div class="col-xl-4 col-12 form-group">
                <label>State *</label>
                <select
                  class="form-control"
                  v-model="$v.state.$model"
                  v-on:change="getCities()"
                  :class="{
                    'is-invalid': $v.state.$error,
                  }"
                >
                  <option value="">Select State</option>
                  <option :value="id" v-for="(name, id) in states" :key="id">
                    {{ name }}
                  </option>
                </select>
                <b-form-invalid-feedback
                  >Please select required field.</b-form-invalid-feedback
                >
              </div>
              <div class="col-xl-4 form-group">
                <label>City *</label>
                <select
                  class="form-control"
                  v-model="$v.city.$model"
                  :class="{
                    'is-invalid': $v.city.$error,
                  }"
                >
                  <option value="">Select City</option>
                  <option :value="id" v-for="(name, id) in cities" :key="id">
                    {{ name }}
                  </option>
                </select>
                <b-form-invalid-feedback
                  >Please select required field.</b-form-invalid-feedback
                >
              </div>
              <div class="col-xl-4 col-12 form-group">
                <label>Pincode *</label>
                <input
                  type="tel"
                  v-model="$v.pincode.$model"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.pincode.$error,
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
import { add_hostel, show_hostel, update_hostel } from "../../../api/hostel";
import { view_state } from "../../../api/state";
import { view_city } from "../../../api/city";
import Breadcrumbs from "../common/Breadcrumbs";
export default {
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      title: "Add Hostel",
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
      hostelName: "",
      noOfRooms: "",
      roomCost: "",
      capacity: "",
      description: "",
      address: "",
      state: "",
      city: "",
      pincode: "",
      errors: [],
      states: [],
      cities: [],
      pincodes: [],
      loaded: 0,
    };
  },
  validations: {
    hostelName: {
      required,
    },
    noOfRooms: {
      required,
    },
    roomCost: {
      required,
    },
    capacity: {
      required,
    },
    address: {
      required,
    },
    state: {
      required,
    },
    city: {
      required,
    },
    pincode: {
      required,
    },
  },
  mounted() {
    let params = this.$route.params;
    this.getStates();
    if (params.id != undefined && params.id != "") {
      this.getInfo(params.id);
      this.title = "Edit Hostel";
    } else {
      this.loaded = 1;
    }
  },
  methods: {
    getCities() {
      view_city(`type=all&state_id=${this.state}`).then((res) => {
        this.cities = res.data;
      });
    },
    getStates() {
      view_state(`type=all`).then((res) => {
        this.states = res.data;
      });
    },
    getInfo(id) {
      show_hostel(id).then((res) => {
        let list = res.data.data;

        this.id = list.id;
        this.hostelName = list.name;
        this.noOfRooms = list.total_rooms;
        this.roomCost = list.cost;
        this.capacity = list.capacity;
        this.description = list.description;
        this.address = list.address;
        this.state = list.city_name ? list.city_name.state : "";
        this.city = list.city_id;
        this.pincode = list.pincode;

        if (list.city_name) {
          this.getCities(this.state);
        }

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
          name: this.hostelName,
          total_rooms: this.noOfRooms,
          cost: this.roomCost,
          capacity: this.capacity,
          description: this.description,
          address: this.address,
          city_id: this.city,
          pincode: this.pincode,
        };
        this.loaded = 0;
        add_hostel(params)
          .then((res) => {
            if (res.data.status) {
              this.$router
                .push({ name: "hostel" })
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
          name: this.hostelName,
          total_rooms: this.noOfRooms,
          cost: this.roomCost,
          capacity: this.capacity,
          description: this.description,
          address: this.address,
          city_id: this.city,
          pincode: this.pincode,
        };
        this.loaded = 0;
        update_hostel(params)
          .then((res) => {
            if (res.data.status) {
              this.$router
                .push({ name: "hostel" })
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
