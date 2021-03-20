<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
      <div class="float-right">
        <router-link
          :to="{ name: 'Notice' }"
          class="fw-btn-fill btn-gradient-yellow text-white"
          >View Notice</router-link
        >
      </div>
      <h3>{{ !$route.params.id ? "Add" : "Edit" }} Notice</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Notice' }">Notice</router-link>
        </li>
        <li>{{ !$route.params.id ? "Add" : "Edit" }} Notice</li>
      </ul>
    </div>
    <!-- Breadcrumbs Area End Here -->

    <!-- Card Table Area Start Here -->
    <div class="card height-auto">
      <div class="card-body">
        <div class="text-center" v-if="!loaded">
          <b-spinner></b-spinner>
        </div>
        <div v-if="loaded">
          <form
            @submit.prevent="$route.params.id ? updateData() : addData()"
            enctype="multipart/form-data"
          >
            <div class="row">
              <div class="col-lg-9">
                <div class="form-group">
                  <label>Title *</label>
                  <input
                    type="text"
                    v-model="$v.form.title.$model"
                    class="form-control"
                    :class="{
                      'is-invalid': $v.form.title.$error,
                    }"
                  />
                  <b-form-invalid-feedback
                    >Please enter required field.</b-form-invalid-feedback
                  >
                </div>
                <div class="form-group">
                  <label>Slug *</label>
                  <input
                    type="text"
                    v-model="$v.form.slug.$model"
                    class="form-control"
                    :class="{
                      'is-invalid': $v.form.title.$error,
                    }"
                  />
                  <b-form-invalid-feedback
                    >Please enter required field.</b-form-invalid-feedback
                  >
                </div>
                <div class="form-group">
                  <label>Description</label>
                  <editor
                    v-model="$v.form.description.$model"
                    :init="editor_options"
                    :class="{
                      'is-invalid': $v.form.title.$error,
                    }"
                  />
                  <b-form-invalid-feedback
                    >Please enter required field.</b-form-invalid-feedback
                  >
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <label>Attachment</label>
                  <input type="file" @change="handleAttachment" />
                </div>

                <label>Select Classes</label>
                <div v-for="(c, i) in classes" :key="i">
                  <span
                    class="float-right icon-plus-square1"
                    :id="`icon_${c.id}`"
                    @click="toggleSection(`#icon_${c.id}`, `#section_${c.id}`)"
                  ></span>
                  <label class="d-block">
                    <input
                      type="checkbox"
                      :id="`class_${c.id}`"
                      @click="checkSections(c.id)"
                    />
                    {{ `${c.name} in ${c.dept.dept_name}` }}
                  </label>
                  <div :id="`section_${c.id}`" style="display: none">
                    <label
                      class="ml-5 pl-3 w-100"
                      v-for="(s, j) in c.sections"
                      :key="j"
                    >
                      <input
                        type="checkbox"
                        v-model="sections"
                        :value="s.id"
                        :class="`section_${c.id}`"
                      />
                      {{ `${c.name} - ${s.name}` }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 form-group mg-t-8">
                <button
                  type="submit"
                  class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                >
                  {{ !$route.params.id ? "Save" : "Update" }}
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
  </div>
</template>
<style>
.tox-notification {
  display: none !important;
}
</style>
<script>
import { required } from "vuelidate/lib/validators";
import api, { view_all_classes } from "../../../../api/script";
import Editor from "@tinymce/tinymce-vue";
import $ from "jquery";

export default {
  components: { Editor },
  props: ["image_src", "image"],
  data() {
    return {
      form: {
        title: "",
        slug: "",
        description: "",
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
      attachment: null,
      sections: [],
      classes: {},
      errors: [],
      loaded: 0,
    };
  },
  validations: {
    form: {
      title: {
        required,
      },
      slug: {
        required,
      },
      description: {
        required,
      },
    },
  },
  mounted() {
    let params = this.$route.params;
    this.fetchAllClasses();
    if (params.id != undefined && params.id != "") {
      this.getInfo(params.id);
    } else {
      this.loaded = 1;
    }
  },
  methods: {
    toggleSection(self, sel) {
      $(self).toggleClass("icon-plus-square1 icon-minus-square1");
      $(sel).slideToggle();
    },
    checkSections(id) {
      if ($(`#class_${id}`).prop("checked")) {
        $(`.section_${id}`).prop("checked", "checked").trigger("change");
        $(`.section_${id}`).each((i, checkBox) => {
          $(`.section_${id}`)[i].dispatchEvent(new Event("change"));
        });
      }
    },
    handleAttachment(e) {
      this.attachment = e.target.files[0];
    },
    fetchAllClasses() {
      view_all_classes().then((res) => {
        this.classes = res.data;
      });
    },
    getInfo(id) {
      let apiResponse = api.noticeInfo(id);
      apiResponse.then((res) => {
        this.loaded = 1;
        this.form = res.data;

        this.sections = [];
        if (res.data.sections.length) {
          res.data.sections.forEach((section, i) => {
            this.sections.push(section.id);
          });
        }
      });
    },
    addData: function () {
      this.$v.form.$touch();
      if (!this.$v.form.$anyError) {
        this.loaded = 0;
        let formData = new FormData();
        formData.append("form[title]", this.form.title);
        formData.append("form[slug]", this.form.slug);
        formData.append("form[description]", this.form.description);
        if (this.attachment) {
          formData.append("attachment", this.attachment);
        }
        if (this.sections.length) {
          formData.append("sections", this.sections);
        }
        let apiResponse = api.addNotice(formData);

        apiResponse
          .then((res) => {
            this.$router
              .push({
                name: "Notice",
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
      }
    },
    updateData: function () {
      this.$v.form.$touch();
      if (!this.$v.form.$anyError) {
        let formData = new FormData();
        formData.append("_method", "PUT");
        formData.append("form[title]", this.form.title);
        formData.append("form[slug]", this.form.slug);
        formData.append("form[description]", this.form.description);
        if (this.attachment) {
          formData.append("attachment", this.attachment);
        }
        if (this.sections.length) {
          formData.append("sections", this.sections);
        }
        this.loaded = 0;
        let apiResponse = api.updateNotice(this.$route.params.id, formData);
        apiResponse
          .then((res) => {
            this.$router
              .push({
                name: "Notice",
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
      }
    },
  },
  watch: {
    image(media_id) {
      this.form.image_id = media_id;
    },
    "form.title"(name) {
      this.form.slug = name
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    },
    "form.type"(type) {
      this.ev_dates = [];
      this.form.weekday = "";
      if (type == "date-range") {
        this.ev_dates = [
          {
            date: "",
          },
          {
            date: "",
          },
        ];
      }
    },
  },
};
</script>
