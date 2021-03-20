<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
      <div class="float-right">
        <router-link
          :to="{ name: 'ViewGallery' }"
          class="fw-btn-fill btn-gradient-yellow text-white"
          >View Gallery</router-link
        >
      </div>
      <h3>{{ !form.id ? "Add" : "Edit" }} Gallery</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Gallery' }">Gallery</router-link>
        </li>
        <li>{{ !form.id ? "Add" : "Edit" }} Gallery</li>
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
            class="new-added-form"
            @submit.prevent="form.id ? updateData() : addData()"
          >
            <div class="row">
              <div class="col-lg-9">
                <div class="form-group">
                  <label>Type</label>
                  <div class="d-flex">
                    <label>
                      <input type="radio" v-model="form.type" value="image" />
                      Image
                    </label>
                    <label class="ml-5">
                      <input type="radio" v-model="form.type" value="video" />
                      Video
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <label>Title *</label>
                  <input
                    type="text"
                    v-model="form.title"
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-group" v-if="form.type == 'video'">
                  <label>Video URL *</label>
                  <input
                    type="text"
                    v-model="form.video_url"
                    class="form-control"
                    required
                  />
                </div>
                <div class="row">
                  <div class="col-sm-4">
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
                        v-model="form.image_id"
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
  </div>
</template>
<style>
.tox-notification {
  display: none !important;
}
</style>
<script>
import api from "../../../../api/script";

export default {
  props: ["image_src", "image"],
  data() {
    return {
      form: {
        id: "",
        title: "",
        image_id: "",
        type: "image",
        video_url: "",
      },
      errors: [],
      loaded: 0,
    };
  },
  mounted() {
    let params = this.$route.params;

    if (params.id != undefined && params.id != "") {
      this.getInfo(params.id);
    } else {
      this.loaded = 1;
    }
  },
  methods: {
    getInfo(id) {
      let apiResponse = api.galleryInfo(id);
      apiResponse.then((res) => {
        this.loaded = 1;

        let media_image = res.data.image;
        let media_src = res.data.media
          ? this.baseURL + "uploads/medium/" + res.data.media.image
          : this.baseURL + "/img/default.jpg";

        this.$emit("update-image_src-selected", media_src);
        this.$emit("update-image-selected", media_image);

        delete res.data.media;
        this.form = res.data;
      });
    },
    addData: function () {
      let params = {
        form: this.form,
      };
      this.loaded = 0;

      let apiResponse = api.addGallery(params);

      apiResponse
        .then((res) => {
          this.$router
            .push({
              name: "ViewGallery",
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
      let apiResponse = api.updateGallery(this.form.id, params);
      apiResponse
        .then((res) => {
          this.$router
            .push({
              name: "ViewGallery",
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
    image(media_id) {
      this.form.image_id = media_id;
    },
  },
};
</script>
