<template>
  <div class="dashboard-content-one">
    <!-- Breadcubs Area Start Here -->
    <breadcrumbs
      :items="b_items"
      :title="title"
      :btn="{
        target: {
          name: 'add-subject',
        },
        label: 'Add New Subject',
      }"
    />
    <!-- Breadcubs Area End Here -->

    <div class="mg-b-20">
      <div class="row gutters-8">
        <div class="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
          <input
            type="text"
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
                <h3>All Subject Data</h3>
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
                          v-model="allSelected"
                          v-on:click="checkAll()"
                        />
                        <label class="form-check-label">Sr. No.</label>
                      </div>
                    </th>
                    <th>Subject Name</th>
                    <th>Classes</th>
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
                        :to="{ path: 'edit-subject/' + list.id, params: list }"
                        data-toggle="tooltip"
                        title="Edit"
                        ><i class="fa fa-edit"></i> {{ list.name }}</router-link
                      >
                    </td>
                    <td>
                      <ol
                        class="m-0 p-0"
                        style="list-style: inside decimal"
                        v-if="list.classes"
                      >
                        <li v-for="(cls, j) in list.classes" :key="j">
                          {{ cls.cls.name }} - {{ cls.cls.dept.dept_name }}
                        </li>
                      </ol>
                      <button
                        type="button"
                        class="btn btn-primary addClassBtn"
                        v-on:click="showClassPop(list.id, list.classes)"
                      >
                        Add Class
                      </button>
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

    <div class="modal align-middle fade" id="classModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Assign Classes</h5>
            <button class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <input type="hidden" v-model="subjectId" />
            <ul class="list-item-group">
              <li class="list-item" v-for="(name, id) in allClasses" :key="id">
                <label>
                  <input type="checkbox" v-model="classes" :value="id" />
                  {{ name }}
                </label>
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" v-on:click="assignClass()">
              Submit
            </button>
            <button class="btn btn-info" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import _ from "lodash";
import {
  assign_subject_class,
  remove_subject,
  view_subject,
} from "../../../api/subject";
import { view_class } from "../../../api/classapi";
import Breadcrumbs from "../common/Breadcrumbs";
export default {
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      title: "View Subject",
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
      allClasses: [],
      classes: [],
      loaded: 0,
      subjectId: "",
    };
  },
  mounted() {
    this.getRecords();
    this.getAllClasses();
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
    assignClass() {
      let classes = this.classes,
        subject = this.subjectId;

      this.loaded = 0;
      let params = {
        classes: classes,
        subjectId: subject,
      };

      assign_subject_class(params).then((res) => {
        this.loaded = 1;
        $("#classModal").modal("hide");
        this.getRecords(1);
      });
    },
    showClassPop(id, classes) {
      this.subjectId = id;
      let classArr = [];
      $(classes).each(function (i, row) {
        classArr.push(row.class);
      });
      this.classes = classArr;
      $("#classModal").modal("show");
    },
    getAllClasses() {
      this.loaded = 0;
      view_class("type=all").then((res) => {
        this.loaded = 1;
        this.allClasses = res.data;
      });
    },
    getRecords(page) {
      if (typeof page === "undefined") {
        page = 1;
      }
      this.loaded = 0;
      view_subject(`page=${page}&s=${this.s}`)
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

            remove_subject(params)
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
