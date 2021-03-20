<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
      <h3>Book Category</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>Book Category</li>
      </ul>
    </div>
    <!-- Breadcrumbs Area End Here -->

    <!-- Student Table Area Start Here -->
    <div v-if="loaded">
      <div class="text-center" v-if="!loaded">
        <b-spinner></b-spinner>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <form
            class="new-added-form"
            id="addCategoryForm"
            @submit.prevent="id ? updateData(id) : addData()"
          >
            <div class="alert alert-danger" v-if="errors.length">
              <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">
                  {{ error }}
                </li>
              </ul>
            </div>
            <div class="card height-auto">
              <div class="card-body">
                <div class="heading-layout1">
                  <div class="item-title">
                    <h3>{{ !id ? "Add New" : "Edit" }} Category</h3>
                  </div>
                </div>
                <input type="hidden" v-model="id" value="" />
                <div class="form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    v-model="record.name"
                    value=""
                    class="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark btn-block"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="col-sm-8">
          <form method="post" @submit.prevent="deleteRecord()">
            <div class="card height-auto">
              <div class="card-body">
                <div>
                  <div class="heading-layout1">
                    <div class="item-title">
                      <h3>All Book Categories</h3>
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
                            <th>Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(list, i) in lists.data">
                            <td>
                              <div
                                class="form-check"
                                v-if="!list.classes_count"
                              >
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
                              <div class="form-check" v-if="list.classes_count">
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
                                  path:
                                    baseURL + 'book-category/edit/' + list.id,
                                  params: list,
                                }"
                                v-on:click="rerenderSelf"
                                data-toggle="tooltip"
                                title="Edit"
                                ><i class="fa fa-edit"></i>
                                {{ list.name }}</router-link
                              >
                              <div>
                                <small>({{ list.classes_count }} books)</small>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <pagination
                        :data="lists"
                        @pagination-change-page="getData"
                      ></pagination>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Student Table Area End Here -->
          </form>
        </div>
      </div>
    </div>
    <!-- Student Table Area End Here -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      record: {
        name: "",
      },
      lists: {},
      allSelected: false,
      check: [],
      errors: [],
      loaded: 0,
      token: localStorage.getItem("token"),
    };
  },
  mounted() {
    let params = this.$route.params;
    this.getData();

    if (params.id != undefined && params.id != "") {
      this.getInfo(params.id);
    }
  },
  methods: {
    rerenderSelf() {
      console.log("reload");
      this.$emit("rerender", 1);
    },
    checkAll() {
      let self = this;
      self.check = [];
      if (!self.allSelected) {
        $.each(self.lists.data, function (i, row) {
          // if(row.classes_count == 0)
          self.check.push(row.id);
        });
      }
    },
    getInfo(id) {
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.get("book/category/info/" + id).then((res) => {
        this.id = res.data.id;
        this.record.name = res.data.name;

        this.loaded = 1;
        $(".select2").each(function () {
          $(this).trigger("change");
        });
      });
    },
    addData() {
      let params = this.record,
        is_valid = $("#addCategoryForm").is_valid();

      if (is_valid) {
        this.loaded = 0;
        this.errors = [];
        let instance = axios.create({
          baseURL: this.apiBaseUrl,
          headers: {
            Authorization: "Bearer " + this.token,
            Accept: "application/json",
          },
        });
        instance
          .post("book/category", params)
          .then((res) => {
            this.loaded = 1;
            if (res.data.status) {
              this.$toast.success(res.data.message);
              this.getData(1);
            } else {
              this.errors = res.data.errors;
            }
          })
          .catch((error) => {
            this.loaded = 1;
            console.log(error);
          });
      }
    },
    updateData(id) {
      let params = this.record,
        is_valid = $("#addCategoryForm").is_valid();

      if (is_valid) {
        this.loaded = 0;
        this.errors = [];
        let instance = axios.create({
          baseURL: this.apiBaseUrl,
          headers: {
            Authorization: "Bearer " + this.token,
            Accept: "application/json",
          },
        });
        instance
          .post("book/category/edit/" + id, params)
          .then((res) => {
            this.loaded = 1;
            if (res.data.status) {
              this.record = {
                name: "",
              };
              this.$toast.success(res.data.message);
              this.$router.push({ name: "book-category" });
            } else {
              this.errors = res.data.errors;
            }
          })
          .catch((error) => {
            this.loaded = 1;
            console.log(error);
          });
      }
    },
    getData(page) {
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
        .get("book/category/?page=" + page)
        .then((res) => {
          this.loaded = 1;
          this.lists = res.data;
        })
        .catch((error) => {
          this.loaded = 1;
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
              .post("book/category/remove", params)
              .then((res) => {
                if (res.status) {
                  this.getData();
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
    // call again the method if the route changes
    $route(to, from) {
      let params = this.$route.params;
      this.loaded = 0;
      this.getData();

      if (params.id != undefined && params.id != "") {
        this.getInfo(params.id);
      }
    },
  },
};
</script>
