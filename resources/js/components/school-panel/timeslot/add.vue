<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <breadcrumbs
      :items="b_items"
      :title="title"
      :btn="{
        target: {
          name: 'timeslot',
        },
        label: 'View Timeslot',
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
            <b-row>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Shift *</label>
                <select
                  v-model="$v.timeslotShift.$model"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.timeslotShift.$error,
                  }"
                >
                  <option value="">Select Shift</option>
                  <option :value="s.id" v-for="s in shifts" :key="s.id">
                    {{ s.shift_name }}
                  </option>
                </select>
                <b-form-invalid-feedback
                  >Please enter required field.</b-form-invalid-feedback
                >
              </div>
            </b-row>
            <div class="row" v-if="timeslotShift">
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Name *</label>
                <input
                  type="text"
                  v-model="$v.slotName.$model"
                  placeholder="like Lecture number, name, prayer, break etc."
                  class="form-control"
                  :class="{
                    'is-invalid': $v.slotName.$error,
                  }"
                />
                <b-form-invalid-feedback
                  >Please enter required field.</b-form-invalid-feedback
                >
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Start Time *</label>
                <input
                  type="time"
                  v-model="startTime"
                  placeholder=""
                  class="form-control"
                  :min="start_from_time"
                  :max="start_to_time"
                  :class="{
                    'is-invalid': $v.slotName.$error,
                  }"
                />
                <b-form-invalid-feedback
                  >Please enter required field.</b-form-invalid-feedback
                >
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>End Time *</label>
                <input
                  type="time"
                  v-model="$v.endTime.$model"
                  placeholder=""
                  :min="end_from_time"
                  :max="end_to_time"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.slotName.$error,
                  }"
                />
                <b-form-invalid-feedback
                  >Please enter required field.</b-form-invalid-feedback
                >
              </div>
            </div>
            <div class="row" v-if="timeslotShift">
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
import { view_shift } from "../../../api/shift";
import {
  add_timeslot,
  show_timeslot,
  update_timeslot,
} from "../../../api/timeslot";
import Breadcrumbs from "../common/Breadcrumbs";
export default {
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      title: "Add Timeslot",
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
      slotName: "",
      startTime: "",
      endTime: "",
      timeslotShift: "",
      start_from_time: 0,
      start_to_time: 0,
      end_from_time: 0,
      end_to_time: 0,
      shifts: [],
      errors: [],
      loaded: 0,
    };
  },
  validations: {
    slotName: {
      required,
    },
    startTime: {
      required,
    },
    endTime: {
      required,
    },
    timeslotShift: {
      required,
    },
  },
  mounted() {
    let params = this.$route.params;

    this.getShifts();
    if (params.id != undefined && params.id != "") {
      this.getInfo(params.id);
      this.title = "Edit Timeslot";
    } else {
      this.loaded = 1;
    }
  },
  methods: {
    getShifts() {
      view_shift("type=all").then((res) => {
        this.shifts = res.data;
      });
    },
    getInfo(id) {
      show_timeslot(id).then((res) => {
        this.id = res.data.data.id;
        this.slotName = res.data.data.name;
        this.startTime = res.data.data.time_start;
        this.endTime = res.data.data.time_end;
        this.timeslotShift = res.data.data.shift;

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
          name: this.slotName,
          time_start: this.startTime,
          time_end: this.endTime,
          shift: this.timeslotShift,
        };
        this.loaded = 0;

        add_timeslot(params)
          .then((res) => {
            if (res.data.status) {
              this.$router
                .push({ name: "timeslot" })
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
          name: this.slotName,
          time_start: this.startTime,
          time_end: this.endTime,
          shift: this.timeslotShift,
        };
        this.loaded = 0;

        update_timeslot(params)
          .then((res) => {
            if (res.data.status) {
              this.$router
                .push({ name: "timeslot" })
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
    findIndex(jsonData, findThis) {
      var indexNum = jsonData.findIndex((obj) => obj.id == findThis);
      return indexNum;
    },
  },
  watch: {
    timeslotShift(id) {
      let index = this.findIndex(this.shifts, id);
      this.start_from_time = this.shifts[index].shift_opening_time;
      this.start_to_time = this.shifts[index].shift_closing_time;
      this.end_from_time = this.shifts[index].shift_opening_time;
      this.end_to_time = this.shifts[index].shift_closing_time;
    },
    startTime(time) {
      this.end_from_time = time;
    },
  },
};
</script>
