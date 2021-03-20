<template>
  <div class="dashboard-content-one" style="text-transform: capitialize">
    <!-- Breadcubs Area Start Here -->
    <div class="breadcrumbs-area">
      <div class="float-right">
        <router-link
          :to="{
            name: 'AddOnlineClass',
          }"
          class="fw-btn-fill btn-gradient-yellow text-white"
          >Add New</router-link
        >
      </div>
      <h3>Online Class</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'OnlineClassMaster' }"
            >Online Class Master</router-link
          >
        </li>
        <li>Online Class</li>
      </ul>
    </div>
    <!-- Breadcubs Area End Here -->

    <!-- Student Table Area Start Here -->
    <form method="post" @submit.prevent="deleteRecord">
      <div class="card height-auto">
        <div class="card-body">
          <div class="text-center" v-if="!loaded">
            <b-spinner></b-spinner>
          </div>
          <div v-if="loaded && lists.data">
            <div v-if="!lists.data.length">No record(s) found.</div>
            <div v-if="lists.data.length">
              <div class="heading-layout1">
                <div class="item-title">
                  {{
                    `From ${lists.from} To ${lists.to} of ${lists.total} are showing.`
                  }}
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
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            v-model="allSelected"
                            v-on:click="checkAll"
                          />
                          <label class="form-check-label">Sr. No.</label>
                        </div>
                      </th>
                      <th>Online Class ID</th>
                      <th>Teacher</th>
                      <th>Class</th>
                      <th>Subject</th>
                      <th>Time</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, i) in lists.data" :key="i">
                      <td>
                        <div class="form-check">
                          <input
                            v-model="check"
                            :key="lists.from + i"
                            :value="row.id"
                            type="checkbox"
                            class="form-check-input check"
                          />
                          <label class="form-check-label"
                            >{{ lists.from + i }}.</label
                          >
                        </div>
                      </td>
                      <td>{{ row.room_unique_id }}</td>
                      <td>{{ row.teacher_name }}</td>
                      <td>{{ row.class_name }}</td>
                      <td>{{ row.subject_name }}</td>
                      <td>
                        {{ `${row.sch_time_from} - ${row.sch_time_upto}` }}
                      </td>
                      <td>
                        <a
                          :href="`${onlineClassURL}${row.room_unique_id}`"
                          target="_blank"
                          ><i class="icon-video"></i> Start Live Class</a
                        >
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
import {
  delete_allowance,
  multiple_delete_employe_promotion,
  multiple_delete_online_class,
  view_allowance,
  view_employe_promotion,
  view_online_class,
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
      view_online_class().then((res) => {
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
            multiple_delete_online_class(params)
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
    s() {
      this.searchAfterDebounce();
    },
  },
};
</script>
