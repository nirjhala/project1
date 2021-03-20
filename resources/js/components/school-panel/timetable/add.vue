<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
      <h3>{{ !id ? "Add" : "Edit" }} Time Table</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'timetable' }">Time Table</router-link>
        </li>
        <li>{{ !id ? "Add" : "Edit" }} Time Table</li>
      </ul>
    </div>
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
              <h3>{{ !id ? "Add New" : "Edit" }} Time Table</h3>
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
              <div class="col-lg-3 col-sm-6 col-12 form-group">
                <label>Department *</label>
                <select
                  class="form-control"
                  v-model="department"
                  @change="getClasses()"
                  required
                >
                  <option value="">Select Department</option>
                  <option :value="d.id" v-for="(d, i) in departments" :key="i">
                    {{ d.dept_name }}
                  </option>
                </select>
              </div>
              <div class="col-lg-3 col-sm-6 col-12 form-group">
                <label>Class Section *</label>
                <select
                  class="form-control"
                  v-model="section"
                  @change="getSubjects()"
                  required
                >
                  <option value="">Select Section</option>
                  <optgroup
                    :label="cls.name"
                    v-for="(cls, i) in classes"
                    :key="i"
                  >
                    <option
                      :value="s.id"
                      v-for="(s, i) in cls.sections"
                      :key="i"
                    >
                      {{ cls.name }} - {{ s.name }}
                    </option>
                  </optgroup>
                </select>
              </div>
              <div class="col-lg-3 col-sm-6 col-12 form-group">
                <label>Shift *</label>
                <select
                  class="form-control"
                  v-model="shift"
                  @change="getTimeslots()"
                  required
                >
                  <option value="">Select Shift</option>
                  <option :value="s.id" v-for="(s, i) in shifts" :key="i">
                    {{ s.shift_name }}
                  </option>
                </select>
              </div>
              <div class="col-lg-3 col-sm-6 col-12 form-group">
                <label>Weekday *</label>
                <multiselect
                  v-model="weekday"
                  :options="weekdays"
                  :multiple="true"
                  :close-on-select="false"
                  :clear-on-select="false"
                  :preserve-search="true"
                  placeholder="Select Weekday"
                  label="name"
                  track-by="name"
                  :preselect-first="true"
                  required
                >
                  <template slot="selection" slot-scope="{ values, isOpen }">
                    <span
                      class="multiselect__single"
                      v-if="isOpen"
                      style="display: none"
                    ></span>
                    <span
                      class="multiselect__single"
                      v-if="values.length &amp;&amp; !isOpen"
                    >
                      {{ values.length }} options selected
                    </span>
                  </template>
                </multiselect>
              </div>
            </div>
            <div class="row" v-for="(t, i) in timeslots" :key="i">
              <div class="col-lg-4 col-sm-6 col-12 form-group">
                <label>&nbsp;</label>
                {{ t.name }}
              </div>
              <div class="col-lg-4 col-sm-6 col-12 form-group">
                <label>Subject</label>
                <select class="form-control" v-model="subject[t.id]">
                  <option value="">Select Subject</option>
                  <option :value="s.id" v-for="(s, i) in subjects" :key="i">
                    {{ s.name }}
                  </option>
                </select>
              </div>
              <div class="col-lg-4 col-sm-6 col-12 form-group">
                <label>Teacher</label>
                <select class="form-control" v-model="teacher[t.id]">
                  <option value="">Select Teacher</option>
                  <option :value="tcr.id" v-for="(tcr, i) in teachers" :key="i">
                    {{ tcr.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="row" v-if="timeslots">
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
            <div v-if="!timeslots && shift">
              No Timeslots added, please create timeslots for respective shift.
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Student Table Area End Here -->
  </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script>
import Multiselect from "vue-multiselect";

export default {
  components: { Multiselect },
  data() {
    return {
      id: "",
      department: "",
      section: "",
      shift: "",
      weekday: [],
      subject: {},
      teacher: {},
      departments: [],
      classes: [],
      shifts: [],
      subjects: [],
      teachers: [],
      timeslots: [],
      weekdays: [],
      errors: [],
      loaded: 0,
      token: localStorage.getItem("token"),
    };
  },
  mounted() {
    let params = this.$route.params;
    this.getDropdowns();

    if (params.id != undefined && params.id != "") {
      this.getInfo(params.id);
    } else {
      this.loaded = 1;
    }
  },
  methods: {
    getTimeslots() {
      this.subject = {};
      this.teacher = {};

      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.get("get-timeslots-by-shift/" + this.shift).then((res) => {
        this.timeslots = res.data;
        let self = this;
        $(res.data).each(function (i, row) {
          let key = row.id;
          self.subject[row.id] = "";
          self.teacher[row.id] = "";
        });
      });
    },
    getClasses() {
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.get("get-class-by-dept/" + this.department).then((res) => {
        this.classes = res.data;
      });
    },
    getSubjects() {
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.get("subject/" + this.section).then((res) => {
        this.subjects = res.data;
      });
    },
    getDropdowns() {
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.get("get-timetable-dropdowns").then((res) => {
        this.departments = res.data.departments;
        this.shifts = res.data.shifts;
        this.subjects = res.data.subjects;
        this.teachers = res.data.teachers;
        this.weekdays = res.data.weekdays;
      });
    },
    getInfo(id) {
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.get("get-timetable-info/" + id).then((res) => {
        let list = res.data.data;
        this.id = list.id;
        this.timetableNumber = list.timetable_no;
        this.vechicleType = list.type;
        this.timetableRc = list.timetable_rc;
        this.driver = list.driver;

        this.loaded = 1;
        $(".select2").each(function () {
          $(this).trigger("change");
        });
      });
    },
    addData: function () {
      let params = {
        department: this.department,
        section: this.section,
        shift: this.shift,
        weekday: this.weekday,
        subjects: this.subject,
        teachers: this.teacher,
      };
      this.loaded = 0;
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance
        .post("add-timetable", params)
        .then((res) => {
          if (res.data.status) {
            this.$router
              .push({
                name: "student-time-table",
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
    },
    updateData: function () {
      let params = {
        id: this.id,
        driver: this.driver,
        type: this.vechicleType,
        timetable_no: this.timetableNumber,
        timetable_rc: this.timetableRc,
      };
      this.loaded = 0;
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance
        .post("update-timetable", params)
        .then((res) => {
          if (res.data.status) {
            this.$router
              .push({
                name: "student-time-table",
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
    },
  },
};
</script>
