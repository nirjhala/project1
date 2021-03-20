<template>
  <div class="dashboard-content-one" style="text-transform: capitialize">
    <!-- Breadcubs Area Start Here -->
    <div class="breadcrumbs-area">
      <div class="float-right">
        <router-link
          :to="{
            name: 'AddPayrollPromotion',
          }"
          class="fw-btn-fill btn-gradient-yellow text-white"
          >Add New</router-link
        >
      </div>
      <h3>Promotion / Increament</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'PayrollMaster' }"
            >Payroll Management Master</router-link
          >
        </li>
        <li>{{ $route.params.type }} Promotion / Increament</li>
      </ul>
    </div>
    <!-- Breadcubs Area End Here -->

    <!-- Student Table Area Start Here -->
    <form method="post" @submit.prevent="deleteRecord()">
      <div class="card height-auto">
        <div class="card-body">
          <b-row>
            <b-form-group class="col-sm-4 col-lg-3" label="Search *">
              <b-input
                placeholder="Search by Name or Mobile no..."
                v-model="s"
              ></b-input>
            </b-form-group>
          </b-row>
          <div class="text-center" v-if="!loaded">
            <b-spinner></b-spinner>
          </div>
          <div v-if="loaded">
            <div v-if="lists.data && !lists.data.length">
              <div class="alert alert-warning">
                Warning! No record(s) found.
              </div>
            </div>
            <div v-if="lists.data && lists.data.length">
              <div class="heading-layout1">
                <div class="item-title">
                  <h3>
                    {{ lists.from }} to {{ lists.to }} of
                    {{ lists.total }} record(s) are showing.
                  </h3>
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
              <div class="table-responsive">
                <table class="table display data-table text-nowrap">
                  <thead>
                    <tr>
                      <th>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            v-model="allSelected"
                            @click="checkAll()"
                          />
                          <label class="form-check-label">Sr. No.</label>
                        </div>
                      </th>
                      <th>Name</th>
                      <th>Mobile</th>
                      <th>Type</th>
                      <th>Grade</th>
                      <th>Salary</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(list, i) in lists.data" v-bind:key="i">
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
                          :to="{
                            name: 'EditPayrollPromotion',
                            params: {
                              id: list.id,
                            },
                          }"
                          title="Edit"
                        >
                          <i class="icon icon-pencil1"></i> {{ list.user.name }}
                        </router-link>
                      </td>
                      <td>{{ list.user.mobile }}</td>
                      <td>{{ list.employee_type }}</td>
                      <td>{{ list.current_grade }} to {{ list.grade_name }}</td>
                      <td>
                        {{ list.current_salary }} to {{ list.new_salary }}
                      </td>
                      <td>{{ list.created_at | formatDate }}</td>
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
import {
  multiple_delete_employe_promotion,
  view_employe_promotion,
} from "../../../api/script";

export default {
  data() {
    return {
      errors: 0,
      lists: {},
      allSelected: 0,
      check: [],
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
      view_employe_promotion(`page=${page}&s=${this.s}`).then((res) => {
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

            multiple_delete_employe_promotion(params)
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
    s() {
      this.searchAfterDebounce();
    },
  },
};
</script>
