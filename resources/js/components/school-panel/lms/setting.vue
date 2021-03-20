
<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
      <h3>LMS Setting</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>LMS Setting</li>
      </ul>
    </div>
    <!-- Breadcrumbs Area End Here -->

    <!-- Student Table Area Start Here -->
    <div v-if="loaded">
      <div class="text-center" v-if="!loaded">
        <b-spinner></b-spinner>
      </div>
      <form id="lms_settings" method="post" @submit.prevent="updateData()">
        <div class="card height-auto">
          <div class="card-body">
            <div>
              <div class="text-center" v-if="!loaded">
                <b-spinner></b-spinner>
              </div>

              <div v-if="loaded">
                <div class="alert alert-warning" v-if="!lists">
                  <i class="fa fa-exclamation-circle"></i>
                  No record(s) found.
                </div>
                <div class="table-responsive" v-if="lists">
                  <table class="table table-bordered text-nowrap">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Limit of Books</th>
                        <th>Limit of Time</th>
                        <th>Fine per day</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Student</th>
                        <td>
                          <input
                            type="number"
                            v-model="record.student_issue_book_limit"
                            value="0"
                            min="0"
                            class="form-control"
                            required
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            v-model="record.student_issue_time_limit"
                            value="0"
                            min="0"
                            class="form-control"
                            required
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            v-model="record.student_fine_per_day"
                            value="0"
                            min="0"
                            class="form-control"
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>Teacher</th>
                        <td>
                          <input
                            type="number"
                            v-model="record.teacher_issue_book_limit"
                            value="0"
                            min="0"
                            class="form-control"
                            required
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            v-model="record.teacher_issue_time_limit"
                            value="0"
                            min="0"
                            class="form-control"
                            required
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            v-model="record.teacher_fine_per_day"
                            value="0"
                            min="0"
                            class="form-control"
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>Other</th>
                        <td>
                          <input
                            type="number"
                            v-model="record.other_issue_book_limit"
                            value="0"
                            min="0"
                            class="form-control"
                            required
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            v-model="record.other_issue_time_limit"
                            value="0"
                            min="0"
                            class="form-control"
                            required
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            v-model="record.other_fine_per_day"
                            value="0"
                            min="0"
                            class="form-control"
                            required
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="form-group mg-t-8">
                  <button
                    type="submit"
                    class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                  >
                    Update
                  </button>
                  <button
                    type="reset"
                    class="btn-fill-lg bg-blue-dark btn-hover-yellow"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Student Table Area End Here -->
      </form>
    </div>
    <!-- Student Table Area End Here -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      record: {},
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

    this.getInfo();
  },
  methods: {
    rerenderSelf() {
      console.log("reload");
      this.$emit("rerender", 1);
    },
    getInfo() {
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.get("lms/setting").then((res) => {
        this.id = res.data.id;
        this.record = res.data;

        this.loaded = 1;
        $(".select2").each(function () {
          $(this).trigger("change");
        });
      });
    },
    updateData() {
      let params = { record: this.record },
        is_valid = $("#lms_settings").is_valid();

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
          .post("lms/setting", params)
          .then((res) => {
            this.loaded = 1;
            if (res.data.status) {
              this.record = {};
              this.$toast.success(res.data.message);
              // this.rerenderSelf();
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
  },
};
</script>
