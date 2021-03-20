<template>
  <div class="dashboard-content-one">
    <!-- Breadcubs Area Start Here -->
    <div class="breadcrumbs-area">
      <h3>Student Timetable</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>Student Timetable</li>
      </ul>
    </div>
    <!-- Breadcubs Area End Here -->

    <div class="mg-b-20">
      <div class="row gutters-8">
        <div class="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
          <select
            class="form-control"
            v-model="department"
            @change="getClasses()"
            required
          >
            <option value="">Select Department</option>
            <option :value="d.id" v-for="d in departments" :key="d.id">
              {{ d.dept_name }}
            </option>
          </select>
        </div>
        <div class="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
          <select
            class="form-control"
            v-model="section"
            @change="getTimetable()"
            required
          >
            <option value="">Select Section</option>
            <optgroup :label="cls.name" v-for="cls in classes" :key="cls.id">
              <option :value="s.id" v-for="s in cls.sections" :key="s.id">
                {{ cls.name }} - {{ s.name }}
              </option>
            </optgroup>
          </select>
        </div>
      </div>
    </div>
    <!-- Student Table Area Start Here -->
    <form method="post" @submit.prevent="deleteRecord()">
      <div class="card height-auto" v-if="section">
        <div class="card-body">
          <div class="text-center" v-if="!loaded">
            <b-spinner></b-spinner>
          </div>
          <div v-if="loaded">
            <div id="timetable">
              <button
                type="button"
                class="btn btn-dark float-right"
                style="@media print {display: none}"
                v-if="!editFlag"
                v-on:click="editAction(true)"
              >
                <i class="icon-pencil"></i> Edit
              </button>
              <button
                type="button"
                class="btn btn-dark float-right"
                style="@media print {display: none}"
                v-if="editFlag"
                v-on:click="editAction(false)"
              >
                <i class="icon-times"></i> Close
              </button>
              <h4>Time-Table for Class {{ class_full_name }}</h4>
              <div class="table-responsive" v-if="lists">
                <table
                  class="table display table-bordered text-nowrap"
                  style="font-size: 10px"
                >
                  <thead>
                    <tr>
                      <th class="text-center bg-dark text-white">Day</th>
                      <th
                        class="text-center bg-dark text-white"
                        v-for="(w, i) in weekdays"
                        :key="i"
                      >
                        {{ w }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(x, i) in lists" :key="i">
                      <th class="text-center bg-dark text-white">
                        <div>{{ x.timeslot }}</div>
                        <div>
                          {{ x.timeslot_time }}
                        </div>
                      </th>
                      <td
                        class="text-center"
                        v-for="(w, i) in weekdays"
                        :key="i"
                      >
                        <div v-if="editFlag == false">
                          <div>
                            <strong>{{
                              x[w] && x[w].subject_info
                                ? x[w].subject_info.name
                                : "-"
                            }}</strong>
                          </div>
                          <div>
                            {{
                              x[w] && x[w].teacher_info
                                ? `(${x[w].teacher_info.name})`
                                : ""
                            }}
                          </div>
                        </div>
                        <div v-if="editFlag == true">
                          <div class="mb-1">
                            <select
                              v-model="subject[x.timeslot_id][w]"
                              class="form-control"
                            >
                              <option value="">Select Subject</option>
                              <option
                                :value="s.id"
                                v-for="(s, i) in subject_lists"
                                :key="i"
                              >
                                {{ s.name }}
                              </option>
                            </select>
                          </div>
                          <div>
                            <select
                              v-model="teacher[x.timeslot_id][w]"
                              class="form-control"
                            >
                              <option value="">Select Teacher</option>
                              <option
                                :value="t.id"
                                v-for="(t, i) in teacher_lists"
                                :key="i"
                              >
                                {{ t.name }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="text-center">
              <button
                type="button"
                class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                v-if="!editFlag"
                v-on:click="printTimeTable()"
              >
                Print
              </button>
              <button
                type="button"
                class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                v-if="editFlag"
                v-on:click="updateData()"
              >
                Save &amp; Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Student Table Area End Here -->
    </form>
  </div>
</template>
<script>
import _ from "lodash";

export default {
  data() {
    return {
      errors: 0,
      department: "",
      section: "",
      class_full_name: "",
      departments: [],
      classes: [],
      timeslots: [],
      weekdays: [],
      lists: [],
      allSelected: 0,
      check: [],
      subject: {},
      teacher: {},
      subject_lists: [],
      teacher_lists: [],
      s: "",
      loaded: 0,
      editFlag: false,
      token: localStorage.getItem("token"),
    };
  },
  mounted() {
    this.getDepts();
  },
  methods: {
    editAction(flag) {
      this.editFlag = flag;
    },
    updateData() {
      let params = {
        subject: this.subject,
        teacher: this.teacher,
        department: this.department,
        section: this.section,
      };
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.post("timetable/edit", params).then((res) => {
        this.$toast.success("Timetable updated successfully.");
        this.editAction(false);
        this.getTimetable();
      });
    },
    printTimeTable() {
      let divToPrint = document.getElementById("timetable");

      let newWin = window.open("", "Time-Table", "width=800,height=600");

      newWin.document.open();
      let html = `
            <html>
                <head>
                    <title>Time-Table</title>
                    <style>
                    body {
                        margin:0;
                        font-family: sans-serif;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    table, th, td {
                        border: 1px solid #000;
                        padding: 5px 10px;
                        font-size: 8px;
                    }
                    th {
                        background: #555;
                        color: #fff;
                    }
                    .text-center {
                        text-align: center;
                    }
                    div.table-responsive {
                        margin: 15px;
                        padding: 10px;
                        border: 1px solid #000;
                    }
                    h4 {
                        margin-top: 20px;
                        text-align: center;
                    }
                    button {
                        display: none;
                    }
                    @page {
                        margin: 0;
                        size: A4 landscape;
                    }
                    </style>
                </head>
                <body onload="window.print()">${divToPrint.innerHTML}</body>
            </html>`;
      newWin.document.write(html);

      newWin.document.close();

      setTimeout(function () {
        newWin.close();
      }, 10);
    },
    getDepts() {
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.get("get-departments").then((res) => {
        this.departments = res.data.data;
        if (params.id != undefined && params.id != "") {
          this.getInfo(params.id);
        } else {
          this.loaded = 1;
        }
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
    getDropdowns() {
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.get("get-timetable-dropdowns").then((res) => {
        this.subject_lists = res.data.subjects;
        this.teacher_lists = res.data.teachers;
      });
    },
    getTimetable() {
      let department_id = this.department;
      let section_id = this.section;

      let params = {
        department_id: this.department,
        section_id: this.section,
      };

      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      let self = this;
      instance
        .post("view-timetable", params)
        .then((res) => {
          self.loaded = 1;
          if (res.status) {
            self.timeslots = res.data.timeslots;
            self.lists = res.data.data;
            self.weekdays = res.data.weekdays;
            self.class_full_name = res.data.class_full_name;

            self.getDropdowns();

            let subjectArr = [],
              teacherArr = [];

            self.lists.forEach(function (row, i) {
              subjectArr[row.timeslot_id] = {};
              teacherArr[row.timeslot_id] = {};
              self.weekdays.forEach(function (w, j) {
                subjectArr[row.timeslot_id][w] =
                  row[w] && row[w].subject_info ? row[w].subject_info.id : "";
                teacherArr[row.timeslot_id][w] =
                  row[w] && row[w].teacher_info ? row[w].teacher_info.id : "";
              });
            });

            this.subject = subjectArr;
            this.teacher = teacherArr;
          } else {
            self.errors = 1;
          }
        })
        .catch((err) => {
          this.loaded = 1;
          console.log(err);
        });
    },
  },
};
</script>
