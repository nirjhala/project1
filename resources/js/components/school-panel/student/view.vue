<template>
  <div class="dashboard-content-one">
    <!-- Breadcubs Area Start Here -->
    <div class="breadcrumbs-area">
      <div class="float-right">
        <router-link
          :to="{ name: 'AddStudent' }"
          class="fw-btn-fill btn-gradient-yellow text-white"
          >Add New</router-link
        >
      </div>
      <h3>Student</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>Student</li>
      </ul>
    </div>
    <!-- Breadcubs Area End Here -->

    <div class="mg-b-20">
      <div class="row gutters-8 mb-2">
        <div class="col-1-xxxl col-xl-1 col-lg-2 col-12 form-group">
          <button
            @click="resetSearch"
            class="btn btn-block btn-dark d-flex justify-content-center align-items-center"
            style="height: 45px; font-size: 16px"
          >
            All
          </button>
        </div>
        <div class="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
          <input
            type="text"
            v-model="search.s"
            placeholder="Search by Name, Mobile no., Email, Pincode etc. ..."
            class="form-control"
          />
        </div>
        <div class="col-lg-2 col-12 form-group">
          <select v-model.trim="search.department_id" class="form-control">
            <option value="">Select Department</option>
            <option :value="id" v-for="(name, id) in departments" :key="id">
              {{ name }}
            </option>
          </select>
        </div>
        <div class="col-lg-2 col-12 form-group">
          <select v-model.trim="search.class_id" class="form-control">
            <option value="">Select Class</option>
            <option :value="id" v-for="(name, id) in classes" :key="id">
              {{ name }}
            </option>
          </select>
        </div>
        <div class="col-lg-2 col-12 form-group">
          <select v-model.trim="search.section_id" class="form-control">
            <option value="">Select Section</option>
            <option :value="id" v-for="(name, id) in sections" :key="id">
              {{ name }}
            </option>
          </select>
        </div>
        <div class="col-lg-2 col-12 form-group">
          <select v-model.trim="search.gender" class="form-control">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div class="row gutters-8">
        <div class="col-lg-2 col-12 form-group">
          <select v-model.trim="search.state_id" class="form-control">
            <option value="">Select State</option>
            <option :value="id" v-for="(name, id) in states" :key="id">
              {{ name }}
            </option>
          </select>
        </div>
        <div class="col-lg-2 col-12 form-group">
          <select v-model.trim="search.city_id" class="form-control">
            <option value="">Select City</option>
            <option :value="id" v-for="(name, id) in cities" :key="id">
              {{ name }}
            </option>
          </select>
        </div>
        <div class="col-lg-2 col-12 form-group">
          <select v-model.trim="search.category" class="form-control">
            <option value="">Select Category</option>
            <option value="General">General</option>
            <option value="OBC">OBC</option>
            <option value="SBC">SBC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="col-lg-2 col-12 form-group">
          <select v-model="search.religion_id" class="form-control">
            <option value="">Select Religion</option>
            <option :value="id" v-for="(name, id) in religions" :key="id">
              {{ name }}
            </option>
          </select>
        </div>
        <div class="col-lg-2 col-12 form-group">
          <input
            type="text"
            v-model="search.cast"
            placeholder="By Cast"
            class="form-control"
          />
        </div>
        <div class="col-lg-2 col-12 form-group">
          <select v-model="search.blood_group" class="form-control">
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="Do not know">Don't know</option>
          </select>
        </div>
      </div>
    </div>
    <!-- Student Table Area Start Here -->
    <form method="post" @submit.prevent="deleteRecord()">
      <div class="card height-auto">
        <div class="card-body">
          <div class="text-center" v-if="!loaded">
            <b-spinner></b-spinner>
          </div>
          <div v-if="loaded">
            <div class="heading-layout1">
              <div class="item-title">
                <h3>All Student Data</h3>
              </div>
              <button
                type="submit"
                class="btn btn-link text-dark removeBtn"
                data-toggle="tooltip"
                title="Remove"
              >
                <i class="fa fa-trash fa-2x"></i>
              </button>
            </div>

            <div class="alert alert-warning" v-if="!lists.data">
              <i class="fa fa-exclamation-circle"></i>
              No record(s) found.
            </div>
            <div class="table-responsive" v-if="lists.data">
              <table class="table display data-table text-nowrap">
                <thead>
                  <tr>
                    <th>
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          v-on:click="checkAll"
                          v-model="allSelected"
                        />
                        <label class="form-check-label">Sr. No.</label>
                      </div>
                    </th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Mobile No.</th>
                    <th>Email</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Pincode</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(list, i) in lists.data" :key="i">
                    <td>
                      <div class="form-check">
                        <input
                          v-model="check"
                          :key="lists.from + i"
                          :value="list.id"
                          type="checkbox"
                          class="form-check-input"
                        />
                        <label class="form-check-label"
                          >{{ lists.from + i }}.</label
                        >
                      </div>
                    </td>
                    <td>
                      <router-link
                        :to="{ name: 'EditStudent', params: { id: list.id } }"
                        data-toggle="tooltip"
                        title="Edit"
                        ><i class="fa fa-edit"></i> {{ list.name }}</router-link
                      >
                    </td>
                    <td>
                      <div v-if="list.media">
                        <img :src="list.media.thumb_image" alt="" />
                      </div>
                      <div v-if="!list.media">Not Available</div>
                    </td>
                    <td>{{ list.mobile }}</td>
                    <td>{{ list.email }}</td>
                    <td>
                      <div v-if="list.city_data && list.city_data.state_name">
                        {{ list.city_data.state_name.name }}
                      </div>
                      <div v-if="!list.city_data || !list.city_data.state_name">
                        &mdash;
                      </div>
                    </td>
                    <td>
                      <div v-if="list.city_data">{{ list.city_data.name }}</div>
                      <div v-if="!list.city_data">&mdash;</div>
                    </td>
                    <td>{{ list.pin_code }}</td>
                    <td>
                      <div
                        v-if="
                          list.student_data.section_name &&
                          list.student_data.section_name.cls
                        "
                      >
                        {{ list.student_data.section_name.cls.name }}
                      </div>
                      <div
                        v-if="
                          !list.student_data.section_name ||
                          !list.student_data.section_name.cls
                        "
                      >
                        N/A
                      </div>
                    </td>
                    <td>
                      <div v-if="list.student_data.section_name">
                        {{ list.student_data.section_name.name }}
                      </div>
                      <div v-if="!list.student_data.section_name">N/A</div>
                    </td>
                    <td>
                      <router-link
                        :to="{
                          name: 'StudentDetails',
                          params: { id: list.id },
                        }"
                        ><i class="icon-eye"></i> Details</router-link
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
              <pagination
                :data="lists"
                @pagination-change-page="getRecords"
              ></pagination>
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

import {
  fetchDepartments,
  fetchClasses,
  fetchSections,
  fetchStates,
  fetchCities,
  fetchReligions,
} from "../../../api/script";

export default {
  data() {
    return {
      errors: 0,
      lists: {},
      allSelected: 0,
      check: [],
      loaded: 0,
      subjectId: "",
      search: {
        s: "",
        department_id: "",
        class_id: "",
        section_id: "",
        gender: "",
        state_id: "",
        city_id: "",
        category: "",
        religion_id: "",
        cast: "",
        blood_group: "",
      },
      // All Dropdown Data
      departments: [],
      classes: [],
      sections: [],
      states: [],
      cities: [],
      religions: [],
      // token
      token: localStorage.getItem("token"),
    };
  },
  mounted() {
    this.loadComponent();
  },
  methods: {
    loadComponent() {
      this.getRecords();
      this.getDepartments();
      this.getReligions();
      this.getStates();
    },
    getDepartments() {
      fetchDepartments()
        .then((res) => {
          this.departments = res.data;
        })
        .catch((err) => {
          console.log("Dept Error: ", err);
        });
    },
    getClasses(deptId) {
      fetchClasses(deptId)
        .then((res) => {
          this.classes = res.data;
        })
        .catch((err) => {
          console.log("Class Error: ", err);
        });
    },
    getSections(class_id) {
      fetchSections(class_id)
        .then((res) => {
          this.sections = res.data;
        })
        .catch((err) => {
          console.log("Section Error: ", err);
        });
    },
    getStates() {
      fetchStates()
        .then((res) => {
          this.states = res.data;
        })
        .catch((err) => {
          console.log("State Error: ", err);
        });
    },
    getCities(state_id) {
      fetchCities(state_id)
        .then((res) => {
          this.cities = res.data;
        })
        .catch((err) => {
          console.log("City Error: ", err);
        });
    },
    getReligions() {
      fetchReligions()
        .then((res) => {
          this.religions = res.data;
        })
        .catch((err) => {
          console.log("Religions Error: ", err);
        });
    },
    checkAll() {
      let self = this;
      self.check = [];
      if (!self.allSelected) {
        $.each(self.lists.data, function (i, row) {
          self.check.push(row.id);
        });
      }
    },
    resetSearch() {
      this.search = {
        s: "",
        department_id: "",
        class_id: "",
        section_id: "",
        gender: "",
        state_id: "",
        city_id: "",
        category: "",
        religion_id: "",
        cast: "",
        blood_group: "",
      };
      this.searchData();
    },
    searchAfterDebounce: _.debounce(function () {
      this.searchData();
    }, 500),
    searchData(page) {
      if (typeof page === "undefined") {
        page = 1;
      }
      let searchQuery = new URLSearchParams(this.search).toString();

      this.loaded = 0;
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance
        .get("search-student/?page=" + page + "&" + searchQuery)
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
    "search.s"() {
      this.searchAfterDebounce();
    },
    "search.cast"() {
      this.searchAfterDebounce();
    },
    "search.department_id"(dept_id) {
      this.getClasses(dept_id);
      this.searchData();
    },
    "search.class_id"(class_id) {
      this.getSections(class_id);
      this.searchData();
    },
    "search.section_id"() {
      this.searchData();
    },
    "search.gender"() {
      this.searchData();
    },
    "search.state_id"(state_id) {
      this.getCities(state_id);
      this.searchData();
    },
    "search.city_id"() {
      this.searchData();
    },
    "search.category"() {
      this.searchData();
    },
    "search.religion_id"() {
      this.searchData();
    },
    "search.blood_group"() {
      this.searchData();
    },
  },
};
</script>
