<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
      <div class="float-right">
        <router-link
          :to="{ name: 'ViewPage' }"
          class="fw-btn-fill btn-gradient-yellow text-white"
          >View Page</router-link
        >
      </div>
      <h3>{{ !form.id ? "Add" : "Edit" }} Page</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'SchoolMaster' }"
            >School Master</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'ViewPage' }">Page</router-link>
        </li>
        <li>{{ !form.id ? "Add" : "Edit" }} Page</li>
      </ul>
    </div>
    <!-- Breadcrumbs Area End Here -->

    <b-row>
      <b-col sm="8">
        <!-- Card Table Area Start Here -->
        <div class="card height-auto">
          <div class="card-body">
            <div class="text-center" v-if="!loaded">
              <b-spinner></b-spinner>
            </div>
            <div v-if="loaded">
              <form
                class="new-added-form"
                @submit.prevent="form.id ? updateData() : addData()"
              >
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>Title *</label>
                      <input
                        type="text"
                        v-model="form.title"
                        class="form-control"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Slug *</label>
                      <input
                        type="text"
                        v-model="form.slug"
                        class="form-control"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Template *</label>
                      <select v-model="form.template_name" class="form-control">
                        <option value="">Default</option>
                        <option
                          :value="name"
                          v-for="(name, i) in templates"
                          :key="i"
                        >
                          {{ name }}
                        </option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label>Excerpt</label>
                      <textarea
                        v-model="form.excerpt"
                        class="form-control"
                        style="height: 150px"
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <label>Description</label>
                      <editor
                        v-model="form.description"
                        :init="editor_options"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 form-group mg-t-8">
                    <button
                      type="submit"
                      class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                    >
                      {{ !form.id ? "Save" : "Update" }}
                    </button>
                    <button
                      type="reset"
                      class="btn-fill-lg bg-blue-dark btn-hover-yellow"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </b-col>
      <b-col sm="4">
        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <label>Upload Image</label>
              <img
                :src="image_src"
                alt=""
                title=""
                id="featuredImage"
                class="w-100 uploadImage"
                data-image="#featuredImage"
                data-field="#featuredImageId"
                v-if="image_src"
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

            <!-- <div class="my-3">
                            <label>Show in Menu</label>
                            <label for="" class="d-block">
                                <input type="checkbox" v-model="menu_links"> Header
                            </label>
                        </div> -->
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<style>
.tox-notification {
  display: none !important;
}
</style>
<script>
import api from "../../../../api/script";
import Editor from "@tinymce/tinymce-vue";

export default {
  components: { Editor },
  props: ["image_src", "image"],
  data() {
    return {
      form: {
        id: "",
        title: "",
        slug: "",
        template_name: "",
        excerpt: "",
        description: "",
        image_id: "",
      },
      editor_options: {
        height: 500,
        branding: false,
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar:
          "undo redo | formatselect | bold italic forecolor backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help code",
      },
      templates: [],
      errors: [],
      loaded: 0,
    };
  },
  mounted() {
    let params = this.$route.params;

    this.getPageTemplate();
    if (params.id != undefined && params.id != "") {
      this.getInfo(params.id);
    } else {
      this.loaded = 1;
    }
  },
  methods: {
    getPageTemplate() {
      let apiResponse = api.getAllPageTemplate();
      apiResponse
        .then((res) => {
          this.templates = res.data;
        })
        .catch((err) => {
          console.log("Errors: ", err);
        });
    },
    getInfo(id) {
      let apiResponse = api.PageDetails(id);
      apiResponse.then((res) => {
        this.loaded = 1;
        this.form = res.data;
      });
    },
    addData: function () {
      let params = {
        form: this.form,
      };
      this.loaded = 0;

      let apiResponse = api.addPage(params);

      apiResponse
        .then((res) => {
          this.$router
            .push({
              name: "ViewPage",
            })
            .then((res) => {
              this.loaded = 1;
              this.$toast.success("Record saved.");
            })
            .catch((err) => {
              this.loaded = 1;
              console.log(err);
            });
        })
        .catch((error) => {
          this.loaded = 1;
          console.log(error);
        });
    },
    updateData: function () {
      let params = {
        _method: "PUT",
        form: this.form,
      };
      this.loaded = 0;
      let apiResponse = api.updatePage(this.form.id, params);
      apiResponse
        .then((res) => {
          this.$router
            .push({
              name: "ViewPage",
            })
            .then((res) => {
              this.loaded = 1;
              this.$toast.success("Record saved.");
            })
            .catch((err) => {
              this.loaded = 1;
              console.log(err);
            });
        })
        .catch((error) => {
          this.loaded = 1;
          console.log(error);
        });
    },
  },
  watch: {
    image(image_id) {
      this.form.image_id = image_id;
    },
    "form.title"(title) {
      this.form.slug = title
        .toLowerCase() // LowerCase
        .replace(/\s+/g, "-") // space to -
        .replace(/&/g, `-and-`) // & to and
        .replace(/--/g, `-`);
    },
  },
};
</script>
