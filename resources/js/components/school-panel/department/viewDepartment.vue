<template>
  <div class="dashboard-content-one">
    <!-- Breadcubs Area Start Here -->
    <breadcrumbs
      :items="b_items"
      :title="title"
      :btn="{
        target: {
          name: 'add-department',
        },
        label: 'Add New Department',
      }"
    />
    <!-- Breadcubs Area End Here -->

    <div class="mg-b-20">
      <div class="row gutters-8">
        <div class="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
          <input
            type="search"
            v-model="s"
            placeholder="Search ..."
            class="form-control bg-white"
          />
        </div>
      </div>
    </div>
    <!-- Student Table Area Start Here -->
    <form method="post" @submit.prevent="deleteRecord()">
      <div class="card height-auto">
        <div class="card-body">
          <div>
            <div class="heading-layout1">
              <div class="item-title">
                <h3>All Department Data</h3>
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

            <div class="text-center" v-if="!loaded">
              <b-spinner></b-spinner>
            </div>

            <div v-if="loaded">
              <div class="alert alert-warning" v-if="!lists">
                <i class="fa fa-exclamation-circle"></i>
                No record(s) found.
              </div>
              <div class="table-responsive" v-if="lists">
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
                      <th>Department Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(list, i) in lists.data" :key="i">
                      <td>
                        <div class="form-check" v-if="list.classes_count == 0">
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
                        <div class="form-check" v-if="list.classes_count > 0">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            disabled
                          />
                          <label class="form-check-label"
                            >{{ lists.from + i }}.</label
                          >
                        </div>
                      </td>
                      <td>
                        <router-link
                          :to="{
                            path: 'edit-department/' + list.id,
                            params: list,
                          }"
                          data-toggle="tooltip"
                          title="Edit"
                          ><i class="fa fa-edit"></i>
                          {{ list.dept_name }}</router-link
                        >
                        <div>
                          <small>({{ list.classes_count }} classes)</small>
                        </div>
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
      </div>
      <!-- Student Table Area End Here -->
    </form>
  </div>
</template>
<script>
import _ from "lodash";

import { remove_department, view_department } from "../../../api/department";
import Breadcrumbs from "../common/Breadcrumbs";
export default {
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      title: "View Department",
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
      errors: 0,
      lists: {},
      allSelected: 0,
      check: [],
      s: "",
      loaded: 0,
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
          if (row.classes_count == 0) self.check.push(row.id);
        });
      }
    },
    getRecords(page) {
      if (typeof page === "undefined") {
        page = 1;
      }
      this.loaded = 0;
      view_department(`page=${page}&s=${this.s}`)
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
    deleteRecord() {
      let params = {
        check: this.check,
      };
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

            remove_department(params)
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
  },
};
</script>
