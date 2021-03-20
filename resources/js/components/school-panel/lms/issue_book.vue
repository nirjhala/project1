<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
      <h3>Issue Book</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>Issue Book</li>
      </ul>
    </div>
    <!-- Breadcrumbs Area End Here -->

    <!-- Student Table Area Start Here -->
    <div v-if="loaded">
      <div class="text-center" v-if="!loaded">
        <b-spinner></b-spinner>
      </div>
      <!-- <form id="lms_issue_books" method="post" @submit.prevent=" updateData() "> -->
      <div class="card height-auto">
        <div class="card-body">
          <div>
            <div class="text-center" v-if="!loaded">
              <b-spinner></b-spinner>
            </div>

            <div v-if="loaded">
              <div class="row mb-3">
                <div class="col-sm-7">
                  <div class="form-group">
                    <label>Scan Library Pass</label>
                    <input
                      type="text"
                      v-model="user"
                      ref="user"
                      class="form-control"
                      v-on:change="scanLibPass()"
                      autofocus
                    />
                  </div>
                  <div class="form-group" v-if="user_info.id">
                    <label>Scan Book</label>
                    <input
                      type="text"
                      v-model="book"
                      ref="book"
                      class="form-control"
                      v-on:change="scanLibBook()"
                      autofocus
                    />
                  </div>
                </div>
                <div class="col-sm-5">
                  <table class="table table-bordered" v-if="user_info.id">
                    <tr>
                      <th>ID</th>
                      <td>{{ user_info.barcode }}</td>
                    </tr>
                    <tr>
                      <th>NAME</th>
                      <td>{{ user_info.name }}</td>
                    </tr>
                    <tr>
                      <th>ROLE</th>
                      <td>{{ user_info.type }}</td>
                    </tr>
                    <tr>
                      <th>LIMIT OF BOOKS</th>
                      <td>{{ user_info.book_issue_limit }}</td>
                    </tr>
                  </table>
                </div>
              </div>

              <div
                class="table-responsive mb-3"
                v-if="books.length && user_info.id"
              >
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>DESCRIPTION</th>
                      <th>Author</th>
                      <th>Publication</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(b, i) in books" v-bind:key="i">
                      <td>{{ i + 1 }}</td>
                      <td>{{ b.title }}</td>
                      <td>{{ b.author }}</td>
                      <td>{{ b.publication_year }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div
                class="form-group mg-t-8"
                v-if="user_info.id && books.length"
              >
                <button
                  type="button"
                  class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                  v-on:click="saveData()"
                >
                  Submit
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
      <!-- </form> -->
    </div>
    <!-- Student Table Area End Here -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      user: "",
      user_info: {},
      book: "",
      books: [],
      record: {},
      lists: {},
      allSelected: false,
      check: [],
      errors: [],
      loaded: 1,
      render: 0,
      token: localStorage.getItem("token"),
    };
  },
  mounted() {
    let params = this.$route.params;
    // this.$refs.user.$el.focus();
    // this.getInfo();
  },
  methods: {
    rerenderSelf() {
      this.$emit("rerender", Date.now());
    },
    scanLibPass() {
      let barcode = this.user;

      if (barcode != "" && barcode != undefined) {
        let params = {
          barcode: barcode,
        };
        let instance = axios.create({
          baseURL: this.apiBaseUrl,
          headers: {
            Authorization: "Bearer " + this.token,
            Accept: "application/json",
          },
        });
        instance.post("book/pass/info-by-barcode", params).then((res) => {
          this.user_info = res.data.data;
        });
      }
    },
    scanLibBook() {
      let barcode = this.book;

      let hasMatch = false;

      for (b in this.books) {
        if (b.barcode == barcode) {
          hasMatch = true;
        }
      }

      if (barcode != "" && barcode != undefined && hasMatch == false) {
        let params = {
          barcode: barcode,
        };
        let instance = axios.create({
          baseURL: this.apiBaseUrl,
          headers: {
            Authorization: "Bearer " + this.token,
            Accept: "application/json",
          },
        });
        instance.post("book/info-by-barcode", params).then((res) => {
          this.books.push(res.data);
        });
      }
    },
    saveData() {
      let bookList = [];
      let b;
      this.books.forEach(function (b, i) {
        bookList.push(b.id);
      });
      let params = {
        pass: this.user_info.id,
        books: bookList,
      };

      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance
        .post("lms/book/issue", params)
        .then((res) => {
          if (res.data.status) {
            this.$toast.success("Book issued successfully.");
            // this.rerenderSelf();
            this.user = "";
            this.user_info = "";
            this.book = "";
            this.books = "";
          } else {
            this.$toast.error("Data not saved, please try again.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
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

      if (is_valid && this.user_info.id) {
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
          .post("lms/book/issue", params)
          .then((res) => {
            this.loaded = 1;
            if (res.data.status) {
              this.record = {};
              this.$toast.success(res.data.message);
              this.$forceUpdate();
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
