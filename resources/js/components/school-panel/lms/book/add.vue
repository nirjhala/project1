<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
      <div class="float-right">
        <router-link
          :to="{ name: 'book' }"
          class="fw-btn-fill btn-gradient-yellow text-white"
          >View Book</router-link
        >
      </div>
      <h3>{{ !id ? "Add" : "Edit" }} Book</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'book' }">Book</router-link>
        </li>
        <li>{{ !id ? "Add" : "Edit" }} Book</li>
      </ul>
    </div>
    <!-- Breadcrumbs Area End Here -->

    <!-- Student Table Area Start Here -->
    <div class="card height-auto">
      <div class="card-body">
        <div class="text-center" v-if="!loaded">
          <b-spinner></b-spinner>
        </div>
        <div v-if="loaded">
          <div class="heading-layout1">
            <div class="item-title">
              <h3>{{ !id ? "Add New" : "Edit" }} Book</h3>
            </div>
          </div>
          <form
            class="new-added-form"
            id="addBookForm"
            @submit.prevent="id ? updateData() : addData()"
            enctype="multipart/form-data"
          >
            <div class="alert alert-danger" v-if="errors.length">
              <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">
                  {{ error }}
                </li>
              </ul>
            </div>
            <input type="hidden" v-model="id" value="" />
            <div class="row">
              <div class="col-sm-9">
                <div class="row">
                  <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>ISBN</label>
                    <input
                      type="text"
                      v-model="record.isbn"
                      placeholder="ISBN"
                      class="form-control"
                    />
                  </div>
                  <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Title *</label>
                    <input
                      type="text"
                      v-model="record.title"
                      placeholder="Title"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Subtitle</label>
                    <input
                      type="text"
                      v-model="record.subtitle"
                      placeholder="Subtitle"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Author</label>
                    <input
                      type="text"
                      v-model="record.author"
                      placeholder="Author"
                      class="form-control"
                    />
                  </div>
                  <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Edition</label>
                    <input
                      type="text"
                      v-model="record.edition"
                      placeholder="Edition"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Edition Year</label>
                    <select class="form-control" v-model="record.edition_year">
                      <option :value="yr" v-for="yr in years">{{ yr }}</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>No. of Copies *</label>
                    <input
                      type="number"
                      v-model="record.no_of_copies"
                      placeholder="No. of Copies"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Physical Form</label>
                    <select class="form-control" v-model="record.physical_form">
                      <option value="Book">Book</option>
                      <option value="Journal">Journal</option>
                      <option value="CD/DVD">CD/DVD</option>
                      <option value="Manuscript">Manuscript</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Publisher</label>
                    <input
                      type="text"
                      v-model="record.publisher"
                      placeholder="Publisher"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Publication Year</label>
                    <select
                      class="form-control"
                      v-model="record.publication_year"
                    >
                      <option :value="yr" v-for="yr in years">{{ yr }}</option>
                    </select>
                  </div>
                  <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Series *</label>
                    <input
                      type="text"
                      v-model="record.series"
                      placeholder="Series"
                      class="form-control"
                    />
                  </div>
                  <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Size</label>
                    <select class="form-control" v-model="record.size">
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                      <option value="huge">Huge</option>
                      <option value="small">Small</option>
                      <option value="tiny">Tiny</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Price</label>
                    <input
                      type="number"
                      v-model="record.price"
                      placeholder="Price"
                      class="form-control"
                    />
                  </div>
                  <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Category</label>
                    <select
                      class="form-control"
                      v-model="record.category"
                      required
                    >
                      <option value="">Select Category</option>
                      <option :value="c.id" v-for="c in categories">
                        {{ c.name }}
                      </option>
                    </select>
                  </div>
                  <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Editor</label>
                    <input
                      type="text"
                      v-model="record.editor"
                      placeholder="Editor"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Publication Place *</label>
                    <input
                      type="text"
                      v-model="record.publication_place"
                      placeholder="Publication Place"
                      class="form-control"
                    />
                  </div>
                  <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Total Pages</label>
                    <input
                      type="number"
                      v-model="record.total_pages"
                      placeholder="Total Pages"
                      class="form-control"
                    />
                  </div>
                  <!-- 'local purchase','university','world bank donation','personal donation','other' -->
                  <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Source of Book</label>
                    <select class="form-control" v-model="record.book_source">
                      <option value="local purchase">Local Purchase</option>
                      <option value="university">University</option>
                      <option value="world bank donation">
                        World Bank Donation
                      </option>
                      <option value="personal donation">
                        Personal Donation
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label>Notes</label>
                  <input
                    type="text"
                    v-model="record.notes"
                    placeholder="Notes"
                    class="form-control"
                  />
                </div>
                <div class="row">
                  <div class="col-12 form-group mg-t-8">
                    <button
                      type="submit"
                      class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                    >
                      {{ !id ? "Save" : "Update" }}
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
              <div class="col-sm-3">
                <div class="mb-3">
                  <label>Cover Image</label>
                  <img
                    v-bind:src="image_src"
                    alt=""
                    title=""
                    id="featuredImage"
                    class="w-100 featuredImage"
                  />
                  <input
                    type="hidden"
                    v-model="image"
                    value=""
                    id="featuredImageId"
                  />
                </div>
                <button
                  type="button"
                  class="uploadImage btn-fill-lg bg-blue-dark btn-hover-yellow btn-block uploadImageBtn"
                  data-image="#featuredImage"
                  data-field="#featuredImageId"
                >
                  Upload Image
                </button>
                <hr />
                <div class="mt-3 form-group">
                  <label>Upload PDF File (If ebook)</label>
                  <input type="file" value="" v-on:change="pdfHandler" />
                </div>
                <div class="form-group h3 font-bold">OR</div>
                <div class="form-group">
                  <label>PDF Link (If ebook)</label>
                  <input
                    type="text"
                    v-model="record.pdf_link"
                    value=""
                    class="form-control"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Student Table Area End Here -->
  </div>
</template>
<script>
var d = new Date();
var currentYear = d.getFullYear();

export default {
  props: ["image_src", "image"],
  data() {
    return {
      id: "",
      record: {
        isbn: "",
        title: "",
        subtitle: "",
        author: "",
        edition: "",
        edition_year: currentYear,
        no_of_copies: 1,
        cover_image: "",
        physical_form: "Other",
        publisher: "",
        series: "",
        size: "medium",
        price: 0,
        category: "",
        editor: "",
        publication_year: currentYear,
        publication_place: "",
        total_pages: "",
        book_source: "other",
        notes: "",
        pdf_link: "",
      },
      categories: [],
      years: [],
      errors: [],
      loaded: 0,
      token: localStorage.getItem("token"),
    };
  },
  mounted() {
    let params = this.$route.params;

    if (params.id != undefined && params.id != "") {
      this.getInfo(params.id);
    } else {
      this.loaded = 1;
    }

    for (let i = currentYear; i >= currentYear - 20; i--) {
      this.years.push(i);
    }

    this.getCategories();
  },
  methods: {
    pdfHandler(e) {
      this.pdf_file = e.target.files[0];
    },
    getCategories() {
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.get("book/category/all").then((res) => {
        this.categories = res.data;
      });
    },
    getInfo(id) {
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.get("get-book-info/" + id).then((res) => {
        this.id = res.data.data.id;
        this.bookName = res.data.data.name;

        this.loaded = 1;

        $(".select2").each(function () {
          $(this).trigger("change");
        });
      });
    },
    addData: function () {
      let params = {
        record: this.record,
        image: this.image,
      };
      let is_valid = $("#addBookForm").is_valid();
      if (is_valid) {
        // params = JSON.stringify(params);

        let formData = new FormData();
        formData.append("pdf_file", this.pdf_file); // Pdf file
        formData.append("record", JSON.stringify(params.record));
        formData.append("image", params.image);

        this.loaded = 0;
        let instance = axios.create({
          baseURL: this.apiBaseUrl,
          headers: {
            Authorization: "Bearer " + this.token,
            Accept: "application/json",
          },
        });
        instance
          .post("book/add", params)
          .then((res) => {
            if (res.data.status) {
              this.$router
                .push({ name: "book" })
                .then((res) => {
                  this.loaded = 1;
                  this.$toast.success("Record saved.");
                })
                .catch((err) => {
                  this.loaded = 1;
                  console.log(err);
                });
            } else {
              this.loaded = 1;
              this.errors = res.data.errors;
            }
          })
          .catch((error) => {
            this.loaded = 1;
            console.log(error);
          });
      }
    },
    updateData: function () {
      let params = {
        id: this.id,
        name: this.bookName,
      };
      this.loaded = 0;
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance
        .post("update-book", params)
        .then((res) => {
          if (res.data.status) {
            this.$router
              .push({ name: "book" })
              .then((res) => {
                this.loaded = 1;
                this.$toast.success("Record saved.");
              })
              .catch((err) => {
                this.loaded = 1;
                console.log(err);
              });
          } else {
            this.loaded = 1;
            this.errors = res.data.errors;
          }
        })
        .catch((error) => {
          this.loaded = 1;
          console.log(error);
        });
    },
  },
};
</script>
