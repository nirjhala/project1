<template>
  <div class="dashboard-content-one">
    <!-- Breadcubs Area Start Here -->
    <div class="breadcrumbs-area">
      <h3>Admission Enquiry</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'StudentMaster' }"
            >Admission Master</router-link
          >
        </li>
        <li>Admission Enquiry</li>
      </ul>
    </div>
    <!-- Breadcubs Area End Here -->

    <div class="mg-b-20">
      <div class="row gutters-8">
        <div class="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
          <input
            type="text"
            v-model="s"
            placeholder="Search ..."
            class="form-control"
          />
        </div>
      </div>
    </div>
    <!-- Admission Enquiry Table Area Start Here -->
    <form method="post" @submit.prevent="deleteRecord()">
      <div class="card height-auto">
        <div class="card-body">
          <div class="text-center" v-if="!loaded">
            <b-spinner></b-spinner>
          </div>
          <div v-if="loaded">
            <div
              class="alert alert-warning"
              v-if="!lists.data || !lists.data.length"
            >
              <i class="fa fa-exclamation-circle"></i>
              No record(s) found.
            </div>
            <div v-if="lists.data && lists.data.length">
              <div class="heading-layout1">
                <div class="item-title">
                  {{ lists.from }} - {{ lists.to }} of
                  {{ lists.total }} record(s) are showing.
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
                            v-on:click="checkAll"
                            v-model="allSelected"
                          />
                          <label class="form-check-label">Sr. No.</label>
                        </div>
                      </th>
                      <th>Information</th>
                      <th>Contact</th>
                      <th>Other</th>
                      <th>Address</th>
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
                        <ul class="list-item-group">
                          <li class="list-item">
                            <strong>Name: </strong> {{ list.name }}
                          </li>
                          <li class="list-item">
                            <strong>Father: </strong> {{ list.father_name }}
                          </li>
                          <li class="list-item">
                            <strong>Mother: </strong> {{ list.mother_name }}
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul class="list-item-group">
                          <li class="list-item">
                            <strong>Mobile: </strong> {{ list.mobile }}
                          </li>
                          <li class="list-item">
                            <strong>Phone: </strong> {{ list.phone }}
                          </li>
                          <li class="list-item">
                            <strong>Email: </strong> {{ list.email }}
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul class="list-item-group">
                          <li class="list-item">
                            <strong>Gender: </strong> {{ list.gender }}
                          </li>
                          <li class="list-item">
                            <strong>DOB: </strong> {{ list.dob }}
                          </li>
                        </ul>
                      </td>
                      <td>
                        {{ list.address }}<br />{{
                          list.city + " " + list.state + " " + list.postcode
                        }}
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
      <!-- Admission Enquiry Table Area End Here -->
    </form>
  </div>
</template>
<script>
import _ from "lodash";
import api from "../../../api/script";

export default {
  data() {
    return {
      errors: 0,
      lists: {},
      allSelected: 0,
      check: [],
      s: "",
      allClasses: [],
      classes: [],
      loaded: 0,
      subjectId: "",
      token: localStorage.getItem("token"),
    };
  },
  mounted() {
    this.getRecords();
  },
  methods: {
    checkAll() {
      let self = this;
      self.check = [];
      if (!self.allSelected) {
        $.each(self.lists.data, function (i, row) {
          self.check.push(row.id);
        });
      }
    },
    searchAfterDebounce: _.debounce(function () {
      this.getRecords();
    }, 500),
    getRecords(page) {
      if (typeof page === "undefined") {
        page = 1;
      }
      let apiResponse = api.admissionEnquiry(page, this.s);
      apiResponse
        .then((res) => {
          this.lists = res.data;
          this.loaded = 1;
        })
        .catch((err) => {
          this.loaded = 1;
          this.errors = [err];
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
            let apiResponse = api.deleteAdmissionEnquiry(params);
            apiResponse
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
    s: function (val) {
      this.searchAfterDebounce();
    },
  },
};
</script>
