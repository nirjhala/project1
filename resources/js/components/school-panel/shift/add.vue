<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <breadcrumbs
      :items="b_items"
      :title="title"
      :btn="{
        target: {
          name: 'shift',
        },
        label: 'View Shift',
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
              <h3>{{ !id ? "Add New" : "Edit" }} Shift</h3>
            </div>
          </div>
          <form
            class="new-added-form"
            @submit.prevent="id ? updateData() : addSession()"
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
                <label>Name *</label>
                <input
                  type="text"
                  v-model.trim="$v.shiftName.$model"
                  placeholder="like Morning, Evening etc."
                  value=""
                  class="form-control"
                  :class="{
                    'is-invalid': $v.shiftName.$error,
                  }"
                />
                <b-form-invalid-feedback
                  >Please enter required field.</b-form-invalid-feedback
                >
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Opening Time *</label>
                <input
                  type="time"
                  v-model="$v.openingTime.$model"
                  class="form-control"
                  placeholder="Opening Time"
                  :class="{
                    'is-invalid': $v.openingTime.$error,
                  }"
                />
                <b-form-invalid-feedback
                  >Please enter required field.</b-form-invalid-feedback
                >
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Closing Time *</label>
                <input
                  type="time"
                  v-model.trim="$v.closingTime.$model"
                  class="form-control"
                  placeholder="Closing Time"
                  :class="{
                    'is-invalid': $v.closingTime.$error,
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
import { add_shift, show_shift, update_shift } from "../../../api/shift";
import Breadcrumbs from "../common/Breadcrumbs";

export default {
  name: "addShift",
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      title: "Add Shift",
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
      shiftName: "",
      openingTime: "",
      closingTime: "",
      errors: [],
      loaded: 0,
    };
  },
  validations: {
    shiftName: {
      required,
    },
    openingTime: {
      required,
    },
    closingTime: {
      required,
    },
  },
  mounted() {
    let params = this.$route.params;

    if (params.id != undefined && params.id != "") {
      this.getInfo(params.id);
      this.title = "Edit Shift";
    } else {
      this.loaded = 1;
    }
  },
  methods: {
    getInfo(id) {
      show_shift(id).then((res) => {
        this.id = res.data.data.id;
        this.shiftName = res.data.data.shift_name;
        this.openingTime = res.data.data.shift_opening_time;
        this.closingTime = res.data.data.shift_closing_time;

        this.loaded = 1;
        $(".select2").each(function () {
          $(this).trigger("change");
        });
      });
    },
    addSession: function () {
      this.$v.$touch();
      if (!this.$v.$anyError) {
        let params = {
          shift_name: this.shiftName,
          shift_opening_time: this.openingTime,
          shift_closing_time: this.closingTime,
        };
        this.loaded = 0;

        add_shift(params)
          .then((res) => {
            if (res.data.status) {
              this.$router
                .push({ name: "shift" })
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
          shift_name: this.shiftName,
          shift_opening_time: this.openingTime,
          shift_closing_time: this.closingTime,
        };
        this.loaded = 0;

        update_shift(params)
          .then((res) => {
            if (res.data.status) {
              this.$router
                .push({ name: "shift" })
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
