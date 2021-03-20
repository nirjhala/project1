<template>
  <div class="dashboard-content-one">
    <!-- Breadcubs Area Start Here -->
    <div class="breadcrumbs-area">
      <h3>Fees Structure</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'FeeMaster' }">Fees Management</router-link>
        </li>
        <li>Fees Structure</li>
      </ul>
    </div>
    <!-- Breadcubs Area End Here -->

    <div class="mg-b-20">
      <div class="row gutters-8">
        <div class="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
          <label>Department</label>
          <multiselect
            v-model="department"
            deselect-label="Can't remove this value"
            track-by="dept_name"
            label="dept_name"
            placeholder="Select Department"
            :options="departments"
            :searchable="true"
            :allow-empty="false"
            @input="getClasses"
          ></multiselect>
        </div>
        <div class="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
          <label>Class</label>
          <multiselect
            v-model="section"
            deselect-label="Can't remove this value"
            group-values="sections"
            group-label="class"
            track-by="name"
            label="name"
            placeholder="Select Class"
            :options="classes"
            :searchable="true"
            :allow-empty="false"
            @input="getStudents"
          >
            <template
              slot="singleLabel"
              slot-scope="{ option, isOpen }"
              v-if="!isOpen"
              >{{ option.class_name }} - {{ option.name }}</template
            >
          </multiselect>
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
          <div v-if="loaded && lists.data">
            <div class="heading-layout1">
              <div class="item-title">
                <h3>
                  All Student Data of
                  {{ section.class_name + "-" + section.name }}
                </h3>
              </div>
            </div>

            <div
              class="alert alert-warning"
              v-if="!lists.data || !lists.data.length"
            >
              <i class="fa fa-exclamation-circle"></i>
              No record(s) found.
            </div>
            <div
              class="table-responsive"
              v-if="lists.data && lists.data.length"
            >
              <table class="table display table-bordered text-nowrap">
                <thead>
                  <tr>
                    <th>Photograph</th>
                    <th>Name</th>
                    <th>Father Name</th>
                    <th>Enroll No.</th>
                    <th>Fees Info</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(list, i) in lists.data" :key="i">
                    <td>
                      <img
                        :src="list.picture"
                        :alt="list.name"
                        :title="list.name"
                        class="img img-thumb"
                        style="max-width: 80px"
                      />
                    </td>
                    <td>{{ list.name }}</td>
                    <td>
                      {{ list.student_data.father_info.name }}
                    </td>
                    <td>{{ list.student_data.reg_no }}</td>
                    <td class="text-capitalize">
                      <div class="mb-1">
                        <span class="text-danger">Fees Due</span>
                      </div>
                      <router-link
                        :to="{ name: 'fees-info', params: { id: list.id } }"
                        class="btn btn-dark btn-sm"
                        >View Fees Info</router-link
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
              <pagination
                :data="lists"
                @pagination-change-page="getStudents"
              ></pagination>
            </div>
          </div>
        </div>
      </div>
      <!-- Student Table Area End Here -->
    </form>
  </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script>
import Multiselect from "vue-multiselect";
export default {
  components: { Multiselect },
  data() {
    return {
      errors: 0,
      lists: {},
      allSelected: 0,
      check: [],
      department: "",
      departments: [],
      section: "",
      classes: [],
      s: "",
      loaded: 1,
      token: localStorage.getItem("token"),
    };
  },
  mounted() {
    this.getDepartments();
  },
  methods: {
    searchAfterDebounce: _.debounce(function () {
      this.searchData();
    }, 500),
    getDepartments() {
      this.loaded = 0;
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.get("get-departments").then((res) => {
        this.loaded = 1;
        this.departments = res.data.data;
      });
    },
    getClasses() {
      this.loaded = 0;
      let dept_id = this.department.id;

      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.get("class/department/" + dept_id).then((res) => {
        this.loaded = 1;
        this.classes = res.data;
        console.log(this.classes);
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
        .get("fees-type/?page=" + page + "&s=" + s)
        .then((res) => {
          this.loaded = 1;
          if (res.status) {
            this.lists = res.data.data;
          } else {
            this.errors = 1;
          }
        })
        .catch((err) => {
          this.loaded = 1;
          console.log(err);
        });
    },
    getStudents(page) {
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
        .get("student/section/" + this.section.id + "?page=" + page)
        .then((res) => {
          this.loaded = 1;
          this.lists = res.data;
        })
        .catch((err) => {
          this.loaded = 1;
          console.log(err);
        });
    },
  },
  watch: {
    s: function (val) {
      this.searchAfterDebounce();
    },
  },
};
</script>
