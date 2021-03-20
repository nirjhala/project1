<template>
  <div class="dashboard-content-one">
    <!-- Breadcubs Area Start Here -->
    <div class="breadcrumbs-area">
      <div class="float-right">
        <router-link
          :to="{ name: 'add-fees-type' }"
          class="fw-btn-fill btn-gradient-yellow text-white"
          >Add New</router-link
        >
      </div>
      <h3>Fee Type</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'FeeMaster' }">Fees Management</router-link>
        </li>
        <li>Fee Type</li>
      </ul>
    </div>
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
          <div class="text-center" v-if="!loaded">
            <b-spinner></b-spinner>
          </div>
          <div v-if="loaded">
            <div class="heading-layout1">
              <div class="item-title">
                <h3>All Fee Type Data</h3>
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
                          v-model="allSelected"
                          v-on:click="checkAll()"
                        />
                        <label class="form-check-label">Sr. No.</label>
                      </div>
                    </th>
                    <th>Name</th>
                    <th>Installment Availability</th>
                    <th>Applied On</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(list, i) in lists.data" :key="i">
                    <td>
                      <div class="form-check">
                        <input
                          v-model="check"
                          :key="i"
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
                          path: 'edit-fees-type/' + list.id,
                          params: list,
                        }"
                        data-toggle="tooltip"
                        title="Edit"
                        ><i class="fa fa-edit"></i> {{ list.name }}</router-link
                      >
                    </td>
                    <td>
                      {{ list.installment_availability ? "Yes" : "No" }}
                    </td>
                    <td class="text-capitalize">
                      {{ list.fees_for }} Students
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
export default {
  data() {
    return {
      errors: 0,
      lists: {},
      allSelected: 0,
      check: [],
      s: "",
      loaded: 0,
      token: localStorage.getItem("token"),
    };
  },
  mounted() {
    this.getRecords();
  },
  methods: {
    searchAfterDebounce: _.debounce(function () {
      this.searchData();
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
    getRecords(page) {
      if (typeof page === "undefined") {
        page = 1;
      }
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance
        .get("fees-type/?page=" + page)
        .then((res) => {
          this.loaded = 1;
          this.lists = res.data.data;
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
              .post("fees-type/remove", params)
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
