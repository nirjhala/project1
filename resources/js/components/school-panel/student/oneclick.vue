<template>
  <div class="dashboard-content-one">
    <!-- Breadcubs Area Start Here -->
    <div class="breadcrumbs-area">
      <h3>Student One Click Actions</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'StudentMaster' }"
            >Student Master</router-link
          >
        </li>
        <li>Student One Click Actions</li>
      </ul>
    </div>
    <!-- Breadcubs Area End Here -->

    <div class="mg-b-20">
      <div class="card">
        <div class="card-body">
          <div class="gutters-8">
            <div class="form-group">
              <multiselect
                v-model="student"
                track-by="uid"
                placeholder="Select Student"
                select-label=""
                deselect-label=""
                :options="students"
                :custom-label="studentLabel"
                :searchable="true"
                :allow-empty="false"
              >
                <template slot="singleLabel" slot-scope="{ option }">
                  {{
                    `${option.user.name} - ${option.father_info.name}, Class - ${option.section_name.cls.name} ${option.section_name.name}`
                  }}
                </template>
              </multiselect>
            </div>
          </div>

          <div v-if="student">
            <div class="mb-3 table-responsive">
              <table class="table table-bordered">
                <tr>
                  <th>NAME</th>
                  <td>{{ student.user.name }}</td>
                </tr>
                <tr>
                  <th>FATHER NAME</th>
                  <td>{{ student.father_info.name }}</td>
                </tr>
                <tr>
                  <th>ROLL NO.</th>
                  <td>{{ student.roll_no ? student.roll_no : "N/A" }}</td>
                </tr>
                <tr>
                  <th>CLASS</th>
                  <td>
                    {{
                      `${student.section_name.cls.name}-${student.section_name.name}`
                    }}
                  </td>
                </tr>
              </table>
            </div>
            <b-row>
              <b-col sm="3" v-for="(act, i) in clickActions" :key="i">
                <router-link
                  :to="act.link"
                  v-if="act.link"
                  class="btn btn-dark btn-lg btn-block py-4 mb-3"
                  >{{ act.label }}</router-link
                >
                <button
                  type="button"
                  @click="handle_function_call(act.click)"
                  v-if="act.click"
                  class="btn btn-dark btn-lg btn-block py-4 mb-3"
                >
                  {{ act.label }}
                </button>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </div>
    <!-- Student Table Area Start Here -->
  </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script>
import _ from "lodash";
import Multiselect from "vue-multiselect";
import api from "../../../api/script";

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      errors: 0,
      lists: {},
      allSelected: 0,
      check: [],
      student: "",
      allClasses: [],
      classes: [],
      students: [],
      loaded: 0,
      subjectId: "",
      clickActions: [
        {
          label: "Pay Fee",
          link: {
            name: "StudentPayFee",
            params: {
              id: "",
            },
          },
        },
        {
          label: "Fee Details",
          link: {
            name: "StudentFeeDetails",
            params: {
              id: "",
            },
          },
        },
        {
          label: "TC Generate",
          link: {
            name: "ViewTc",
          },
        },
        // {
        //     label: 'Penalty',
        //     link: '#'
        // },
        {
          label: "Student Edit",
          link: {
            name: "EditStudent",
            params: {
              id: "",
            },
          },
        },
        {
          label: "Attendance",
          link: {
            name: "StudentAttendance",
            params: {
              id: "",
            },
          },
        },
        {
          label: "Full Mark-sheet",
          link: false,
          click: "openMarksheet",
        },
        {
          label: "Student Details",
          link: {
            name: "StudentDetails",
            params: {
              id: "",
            },
          },
        },
      ],
      token: localStorage.getItem("token"),
    };
  },
  mounted() {
    this.getStudents();
  },
  methods: {
    searchAfterDebounce: _.debounce(function () {
      this.searchData();
    }, 500),
    handle_function_call(function_name) {
      this[function_name]();
    },
    openMarksheet() {
      window.open(this.baseURL + "/api/student/marksheet/" + this.student.uid);
    },
    openTc() {
      window.open(this.baseURL + "api/student/tc/" + this.student.uid);
    },
    studentLabel({ user, father_info, section_name }) {
      let text = user.name;
      if (father_info && father_info.name) text += ` ${father_info.name}`;
      text += ", Class - ";
      if (section_name && section_name.cls && section_name.cls.name)
        text += ` ${section_name.cls.name}`;
      if (section_name && section_name.name) text += ` ${section_name.name}`;
      return text;
    },
    getStudents() {
      let apiResponse = api.getStudents();
      apiResponse
        .then((res) => {
          this.students = res.data;
        })
        .catch((err) => {
          console.log("Errors: ", err);
        });
    },
    searchData(page) {
      let s = this.s;
      if (typeof page === "undefined") {
        page = 1;
      }
      this.loaded = 0;
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance
        .get("search-student/?page=" + page + "&s=" + s)
        .then((res) => {
          this.loaded = 1;
          this.lists = res.data.data;
          if (!res.data.status) {
            this.errors = 1;
          }
        })
        .catch((err) => {
          this.loaded = 1;
          console.log(err);
        });
    },
    getRecords(page) {
      if (typeof page === "undefined") {
        page = 1;
      }
      this.loaded = 0;
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance
        .get("view-student/?page=" + page)
        .then((res) => {
          if (res.data.status) {
            this.lists = res.data.data;
          } else {
            this.errors = 1;
          }
          this.loaded = 1;
        })
        .catch((err) => {
          this.loaded = 1;
          console.log(err);
        });
    },
    deleteRecord() {
      let params = {
        check: this.check,
      };
      var parent = $(this).closest("form");
      if (this.check.length > 0) {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this record!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            this.loaded = 0;
            let instance = axios.create({
              baseURL: this.apiBaseUrl,
              headers: {
                Authorization: "Bearer " + this.token,
                Accept: "application/json",
              },
            });
            instance
              .post("remove-student", params)
              .then((res) => {
                if (res.status) {
                  this.getRecords();
                  this.$toast.success("Selected record(s) has been deleted.");
                } else {
                  this.loaded = 1;
                  this.$toast.warning("Record(s) unable to delete.");
                }
              })
              .catch((err) => {
                this.loaded = 1;
                console.log(err);
              });
          }
        });
      } else {
        this.loaded = 1;
        swal(
          "Warning",
          "Please select at least one record to delete.",
          "warning"
        );
        return false;
      }
    },
  },
  watch: {
    s: function (val) {
      this.searchAfterDebounce();
    },
    student(id) {
      this.clickActions.forEach((row, i) => {
        if (row.link.params) {
          this.clickActions[i].link.params.id = this.student.uid;
        }
      });
    },
  },
};
</script>
