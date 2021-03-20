<template>
  <div class="dashboard-content-one" style="text-transform: capitialize">
    <!-- Breadcubs Area Start Here -->
    <div class="breadcrumbs-area">
      <div class="float-right">
        <router-link
          :to="{
            name: 'FillMarksheet',
          }"
          class="fw-btn-fill btn-gradient-yellow text-white"
          >Fill Marksheet</router-link
        >
      </div>
      <h3>View Marksheet</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ExamMaster' }">Exam Master</router-link>
        </li>
        <li>View Marksheet</li>
      </ul>
    </div>
    <!-- Breadcubs Area End Here -->

    <!-- Student Table Area Start Here -->
    <form method="post" @submit.prevent="deleteRecord()">
      <div class="card height-auto">
        <div class="card-body">
          <b-row>
            <b-form-group class="col-sm-6" label="Class / Section *">
              <select class="form-control" v-model="section_id">
                <option value="">Select Class</option>
                <optgroup
                  :label="`${c.dept.dept_name} ${c.name}`"
                  v-for="(c, i) in classes"
                  :key="i"
                >
                  <option :value="s.id" v-for="(s, j) in c.sections" :key="j">
                    {{ `${c.name} - ${s.name}` }}
                  </option>
                </optgroup>
              </select>
              <b-form-invalid-feedback
                >Please select class</b-form-invalid-feedback
              >
            </b-form-group>
          </b-row>
          <div class="text-center" v-if="!loaded">
            <b-spinner></b-spinner>
          </div>
          <div v-if="loaded">
            <div v-if="lists.length">
              <div class="table-responsive" v-if="lists">
                <table class="table display data-table text-nowrap">
                  <thead>
                    <tr>
                      <th>
                        <label class="form-check-label">Sr. No.</label>
                      </th>
                      <th>Roll No.</th>
                      <th>Name</th>
                      <th>Father Name</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(list, i) in lists" v-bind:key="i">
                      <td>
                        <label class="form-check-label">{{ 1 + i }}.</label>
                      </td>
                      <td>
                        {{ list.student_data.roll_no }}
                      </td>
                      <td>
                        {{ list.name }}
                      </td>
                      <td>{{ list.student_data.father_info.name }}</td>
                      <td>
                        <a
                          :href="`${baseURL}/api/student/marksheet/${list.id}`"
                          target="_blank"
                        >
                          <i class="icon-print"></i> Print Marksheet
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
import api, {
  multiple_delete_tc,
  view_admit_card,
  view_all_classes,
  view_exam_type,
} from "../../../api/script";

export default {
  data() {
    return {
      title: "Users",
      errors: 0,
      section_id: "",
      exam_type_id: "",
      lists: {},
      allSelected: 0,
      check: [],
      s: "",
      allClasses: [],
      classes: [],
      custom_fields: [],
      loaded: 1,
      subjectId: "",
      search: {
        s: "",
      },
      custom_field: {},
      // All Dropdown Data
      exam_types: [],
      classes: [],
      token: localStorage.getItem("token"),
    };
  },
  mounted() {
    this.title = this.$route.params.role;
    // this.getRecords()
    // this.fetch_exam_types();
    this.fetch_all_classes();
  },
  methods: {
    searchAfterDebounce: _.debounce(function () {
      this.getRecords();
    }, 500),
    fetch_exam_types() {
      view_exam_type("type=all")
        .then((res) => {
          this.exam_types = res.data.types;
        })
        .catch((err) => {
          console.log("Errors: ", err);
        });
    },
    fetch_all_classes() {
      view_all_classes().then((res) => {
        this.classes = res.data;
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
    showAdmitCards() {
      if (this.section_id) {
        this.loaded = 0;
        view_admit_card(`section_id=${this.section_id}`).then((res) => {
          this.lists = res.data;
          this.loaded = 1;
        });
      }
    },
    resetSearch() {
      this.search = {
        s: "",
      };
      this.getRecords();
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

            multiple_delete_tc(params)
              .then((res) => {
                this.getRecords();
                this.$toast.success("Selected record(s) has been deleted.");
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
    section_id() {
      this.showAdmitCards();
    },
  },
};
</script>
