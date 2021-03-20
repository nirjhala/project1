<template>
  <div class="dashboard-content-one" style="text-transform: capitialize">
    <!-- Breadcubs Area Start Here -->
    <div class="breadcrumbs-area">
      <div class="float-right">
        <router-link
          :to="{
            name: 'AddPayrollSalarySlip',
          }"
          class="fw-btn-fill btn-gradient-yellow text-white"
          >Add New</router-link
        >
      </div>
      <h3>Salary Slip</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'PayrollMaster' }"
            >Payroll Management Master</router-link
          >
        </li>
        <li>Salary Slip</li>
      </ul>
    </div>
    <!-- Breadcubs Area End Here -->

    <!-- Student Table Area Start Here -->
    <form method="post">
      <div class="card height-auto">
        <div class="card-body">
          <div class="text-center" v-if="!loaded">
            <b-spinner></b-spinner>
          </div>
          <div v-if="loaded">
            <div class="mb-3">
              <select v-model="month">
                <option :value="num" v-for="(name, num) in months" :key="num">
                  {{ name }}
                </option>
              </select>
              <select v-model="year">
                <option :value="currentYear">{{ currentYear }}</option>
                <option :value="currentYear - 1">{{ currentYear - 1 }}</option>
                <option :value="currentYear - 2">{{ currentYear - 2 }}</option>
                <option :value="currentYear - 3">{{ currentYear - 3 }}</option>
              </select>
            </div>
            <div v-if="lists">
              <div class="table-responsive">
                <table
                  class="table table-bordered display data-table text-nowrap"
                >
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Slip No.</th>
                      <th>Name</th>
                      <th>Employee No.</th>
                      <th>Designation</th>
                      <th>Grade</th>
                      <th>Basic Salary</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(list, j) in lists.data" :key="j">
                      <td>{{ lists.from + j }}.</td>
                      <td>{{ list.slip_no }}</td>
                      <td>{{ list.name }}</td>
                      <td>{{ list.employee_no }}</td>
                      <td>{{ list.designation }}</td>
                      <td>{{ list.grade }}</td>
                      <td>{{ list.basic_salary }}</td>
                      <td>
                        <a
                          :href="`${baseURL}api/salaryslip/${list.id}`"
                          target="_blank"
                        >
                          <i class="icon-print"></i> Print / Download Payslip
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <pagination
                :data="lists"
                :limit="2"
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
import { view_salary_slip } from "../../../api/script";

var d = new Date();
export default {
  data() {
    return {
      errors: 0,
      lists: {},
      allSelected: 0,
      check: [],
      currentYear: d.getFullYear(),
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      month: d.getMonth() > 0 ? d.getMonth() - 1 : 11,
      year: d.getMonth() > 0 ? d.getFullYear() : d.getFullYear() - 1,
      s: "",
      loaded: 1,
    };
  },
  mounted() {
    this.getRecords();
  },
  methods: {
    searchAfterDebounce: _.debounce(function () {
      this.getRecords();
    }, 500),
    checkAll() {
      let self = this;
      self.check = [];
      if (!self.allSelected) {
        $.each(self.lists.data, function (i, row) {
          self.check.push(row.id);
        });
      }
    },
    getRecords(page) {
      if (typeof page === "undefined") {
        page = 1;
      }
      this.loaded = 0;
      view_salary_slip(`month=${this.month}&year=${this.year}`).then((res) => {
        this.lists = res.data;
        this.loaded = 1;
      });
    },
    resetSearch() {
      this.search = {
        s: "",
      };
      this.getRecords();
    },
    deleteRecord(id) {
      let self = this;
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this record!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        delete_allowance(id).then((res) => {
          self.$toast.success(res.data.message);
          self.getRecords();
        });
      });
    },
  },
  watch: {
    s() {
      this.searchAfterDebounce();
    },
    month() {
      this.getRecords();
    },
    year() {
      this.getRecords();
    },
  },
};
</script>
