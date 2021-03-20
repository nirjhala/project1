<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
      <h3>Library Pass</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>Library Pass</li>
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
            id="addPassForm"
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
                    <h3>Member Registration</h3>
                  </div>
                </div>
                <input type="hidden" v-model="id" value="" />
                <div class="form-group">
                  <input
                    type="text"
                    v-model="record.name"
                    value=""
                    class="form-control"
                    placeholder="Name *"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="tel"
                    v-model="record.mobile"
                    value=""
                    class="form-control"
                    placeholder="Mobile No. *"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="tel"
                    v-model="record.mobile2"
                    value=""
                    class="form-control"
                    placeholder="Mobile No. 2 (Alternate No.)"
                  />
                </div>
                <div class="form-group">
                  <select class="form-control" v-model="record.type" required>
                    <option value="">Type *</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div class="form-group">
                  <textarea
                    v-model="record.address"
                    rows="8"
                    class="form-control h-auto"
                    placeholder="Address *"
                    required
                  ></textarea>
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
                      <h3>All Library Pass</h3>
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
                            <th>Mobile No.</th>
                            <th>Type</th>
                            <th>Address</th>
                            <th>Barcode</th>
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
                                    baseURL + 'library-pass/edit/' + list.id,
                                  params: list,
                                }"
                                v-on:click="rerenderSelf"
                                data-toggle="tooltip"
                                title="Edit"
                                ><i class="fa fa-edit"></i>
                                {{ list.name }}</router-link
                              >
                              <div>
                                <button
                                  type="button"
                                  class="btn btn-sm btn-dark"
                                  v-on:click="printPass('pass_' + list.id)"
                                >
                                  <i class="icon-print"></i> Print
                                </button>
                              </div>
                              <div
                                style="display: none"
                                :id="'pass_' + list.id"
                              >
                                <div
                                  style="
                                    border: 1px solid #000;
                                    border-radius: 12px;
                                    overflow: hidden;
                                    height: calc(100% - 10px);
                                    position: relative;
                                  "
                                >
                                  <div style="padding: 5px 0">
                                    <img
                                      :src="
                                        baseURL +
                                        'img/profiles/' +
                                        list.parent_school.logo
                                      "
                                      alt=""
                                      style="
                                        width: 100%;
                                        height: 70px;
                                        object-fit: contain;
                                      "
                                    />
                                  </div>
                                  <div
                                    style="
                                      background: #000;
                                      padding: 10px;
                                      text-align: center;
                                      color: #fff;
                                    "
                                  >
                                    <div
                                      style="
                                        font-size: 16px;
                                        text-transform: uppercase;
                                        font-weight: bold;
                                      "
                                    >
                                      {{ list.parent_school.name }}
                                    </div>
                                    <div style="font-size: 8px">
                                      LIBRARY PASS
                                    </div>
                                  </div>
                                  <div style="padding: 10px">
                                    <table style="width: 100%; font-size: 10px">
                                      <tr>
                                        <th align="left">Name</th>
                                        <td style="white-space: nowrap">
                                          : {{ list.name }}
                                        </td>
                                      </tr>
                                      <tr>
                                        <th
                                          align="left"
                                          valign="top"
                                          style="white-space: nowrap"
                                        >
                                          Mobile No.
                                        </th>
                                        <td style="white-space: nowrap">
                                          : {{ list.mobile }}<br /><span
                                            v-if="list.mobile2"
                                            >&nbsp; {{ list.mobile2 }}</span
                                          >
                                        </td>
                                      </tr>
                                      <tr>
                                        <th align="left">Type</th>
                                        <td>: {{ list.type }}</td>
                                      </tr>
                                      <tr>
                                        <th align="left">Address</th>
                                        <td>: {{ list.address }}</td>
                                      </tr>
                                    </table>
                                    <div
                                      style="
                                        position: absolute;
                                        bottom: 15px;
                                        left: 0;
                                        right: 0;
                                      "
                                    >
                                      <div style="text-align: center">
                                        <div>
                                          <img
                                            :src="list.barcode_image"
                                            alt=""
                                            style="max-width: 100%"
                                          />
                                        </div>
                                        <div
                                          style="
                                            letter-spacing: 5px;
                                            font-size: 8px;
                                            margin: 2px 0;
                                          "
                                        >
                                          {{ list.barcode }}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              {{ list.mobile }}
                              <span v-if="list.mobile2"
                                ><br />{{ list.mobile2 }}</span
                              >
                            </td>
                            <td>{{ list.type }}</td>
                            <td>{{ list.address }}</td>
                            <td>
                              <div style="text-align: center">
                                <div>
                                  <img :src="list.barcode_image" alt="" />
                                </div>
                                <div
                                  style="
                                    letter-spacing: 5px;
                                    font-size: 8px;
                                    margin: 2px 0;
                                  "
                                >
                                  {{ list.barcode }}
                                </div>
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
        mobile: "",
        mobile2: "",
        type: "",
        address: "",
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
    printPass(id_name) {
      let divToPrint = document.getElementById(id_name);

      let newWin = window.open("", "Time-Table", "width=800,height=600");
      newWin.document.open();
      let html = `
          <html>
              <head>
                  <title>Library Pass</title>
                  <style>
                  body {
                      margin:0;
                      font-family: sans-serif;
                  }
                  @page {
                      size: 2.13in 3.38in;
                      margin: 15px;
                  }
                  </style>
              </head>
              <body onload="window.print()">${divToPrint.innerHTML}</body>
          </html>`;
      newWin.document.write(html);

      newWin.document.close();

      setTimeout(function () {
        newWin.close();
      }, 10);
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
      instance.get("book/pass/info/" + id).then((res) => {
        this.record = res.data;
        this.id = res.data.id;

        this.loaded = 1;
      });
    },
    addData() {
      let params = {
          record: this.record,
        },
        is_valid = $("#addPassForm").is_valid();

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
          .post("book/pass", params)
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
      let params = { record: this.record },
        is_valid = $("#addPassForm").is_valid();

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
          .post("library/pass/edit/" + id, params)
          .then((res) => {
            this.loaded = 1;
            if (res.data.status) {
              this.record = {
                name: "",
              };
              this.$toast.success(res.data.message);
              this.$router.push({ name: "book-pass" });
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
        .get("book/pass/?page=" + page)
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
              .post("book/pass/remove", params)
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
