<template>
  <div class="dashboard-content-one">
    <!-- Breadcubs Area Start Here -->
    <div class="breadcrumbs-area">
      <h3>Time Table</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>Time Table</li>
      </ul>
    </div>
    <!-- Breadcubs Area End Here -->

    <!-- Student Table Area Start Here -->
    <div class="card height-auto">
      <div class="card-body">
        <div class="text-center" v-if="!loaded">
          <b-spinner></b-spinner>
        </div>
        <div v-if="loaded">
          <div id="timetable">
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
                    <td class="text-center" v-for="(w, i) in weekdays" :key="i">
                      <div>
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
    this.getTimetable();
  },
  methods: {
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
    getTimetable() {
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      let self = this;
      instance
        .post("timetable/student")
        .then((res) => {
          self.loaded = 1;
          if (res.status) {
            self.timeslots = res.data.timeslots;
            self.lists = res.data.data;
            self.weekdays = res.data.weekdays;
            self.class_full_name = res.data.class_full_name;
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
