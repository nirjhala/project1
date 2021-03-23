<template>
  <div class="">
    <!-- Preloader Start Here -->
    <div id="preloader"></div>
    <!-- Preloader End Here -->
    <div id="wrapper" class="wrapper bg-ash">
      <!-- Header Menu Area Start Here -->
      <div class="navbar navbar-expand-md header-menu-one bg-light">
        <div class="nav-bar-header-one">
          <div class="header-logo">
            <a href="./" class="text-white text-uppercase">
              <img :src="logo_src" alt="logo" class="admin_logo" />
              {{
                user_info.school_data && user_info.school_data.name
                  ? user_info.school_data.name
                  : ""
              }}
            </a>
          </div>
          <div class="toggle-button sidebar-toggle">
            <button type="button" class="item-link">
              <span class="btn-icon-wrap">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
        <div class="d-md-none mobile-nav-bar">
          <button
            class="navbar-toggler pulse-animation"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-navbar"
            aria-expanded="false"
          >
            <i class="far fa-arrow-alt-circle-down"></i>
          </button>
          <button type="button" class="navbar-toggler sidebar-toggle-mobile">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <div
          class="header-main-menu collapse navbar-collapse"
          id="mobile-navbar"
        >
          <!-- <ul class="navbar-nav">
            <li class="navbar-item header-search-bar">
              <div class="input-group stylish-input-group">
                <span class="input-group-addon">
                  <button type="submit">
                    <span class="flaticon-search" aria-hidden="true"></span>
                  </button>
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Find Something..."
                />
              </div>
            </li>
          </ul> -->
          <ul class="navbar-nav ml-auto">
            <!-- <li class="navbar-item dropdown header-message">
              <a
                class="navbar-nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="far fa-envelope"></i>
                <div class="item-title d-md-none text-16 mg-l-10">Message</div>
                <span>5</span>
              </a>

              <div class="dropdown-menu dropdown-menu-right">
                <div class="item-header">
                  <h6 class="item-title">05 Message</h6>
                </div>
                <div class="item-content">
                  <div class="media">
                    <div class="item-img bg-skyblue author-online">
                      <img src="img/figure/student11.png" alt="img" />
                    </div>
                    <div class="media-body space-sm">
                      <div class="item-title">
                        <a href="#">
                          <span class="item-name">Maria Zaman</span>
                          <span class="item-time">18:30</span>
                        </a>
                      </div>
                      <p>
                        What is the reason of buy this item. Is it usefull for
                        me.....
                      </p>
                    </div>
                  </div>
                  <div class="media">
                    <div class="item-img bg-yellow author-online">
                      <img src="img/figure/student12.png" alt="img" />
                    </div>
                    <div class="media-body space-sm">
                      <div class="item-title">
                        <a href="#">
                          <span class="item-name">Benny Roy</span>
                          <span class="item-time">10:35</span>
                        </a>
                      </div>
                      <p>
                        What is the reason of buy this item. Is it usefull for
                        me.....
                      </p>
                    </div>
                  </div>
                  <div class="media">
                    <div class="item-img bg-pink">
                      <img src="img/figure/student13.png" alt="img" />
                    </div>
                    <div class="media-body space-sm">
                      <div class="item-title">
                        <a href="#">
                          <span class="item-name">Steven</span>
                          <span class="item-time">02:35</span>
                        </a>
                      </div>
                      <p>
                        What is the reason of buy this item. Is it usefull for
                        me.....
                      </p>
                    </div>
                  </div>
                  <div class="media">
                    <div class="item-img bg-violet-blue">
                      <img src="img/figure/student11.png" alt="img" />
                    </div>
                    <div class="media-body space-sm">
                      <div class="item-title">
                        <a href="#">
                          <span class="item-name">Joshep Joe</span>
                          <span class="item-time">12:35</span>
                        </a>
                      </div>
                      <p>
                        What is the reason of buy this item. Is it usefull for
                        me.....
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li> -->
            <li class="navbar-item dropdown header-notification">
              <a
                class="navbar-nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="far fa-bell"></i>
                <div class="item-title d-md-none text-16 mg-l-10">
                  Notification
                </div>
                <span>8</span>
              </a>

              <div class="dropdown-menu dropdown-menu-right">
                <div class="item-header">
                  <h6 class="item-title">03 Notifiacations</h6>
                </div>
                <div class="item-content">
                  <div class="media">
                    <div class="item-icon bg-skyblue">
                      <i class="fas fa-check"></i>
                    </div>
                    <div class="media-body space-sm">
                      <div class="post-title">Complete Today Task</div>
                      <span>1 Mins ago</span>
                    </div>
                  </div>
                  <div class="media">
                    <div class="item-icon bg-orange">
                      <i class="fas fa-calendar-alt"></i>
                    </div>
                    <div class="media-body space-sm">
                      <div class="post-title">Director Metting</div>
                      <span>20 Mins ago</span>
                    </div>
                  </div>
                  <div class="media">
                    <div class="item-icon bg-violet-blue">
                      <i class="fas fa-cogs"></i>
                    </div>
                    <div class="media-body space-sm">
                      <div class="post-title">Update Password</div>
                      <span>45 Mins ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="navbar-item dropdown header-admin">
              <a
                class="navbar-nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <div class="admin-title">
                  <h5 class="item-title">{{ user_info.name }}</h5>
                  <span>{{ user_info.role_name.name }}</span>
                </div>
                <div class="admin-img">
                  <img :src="profile_picture" alt="Admin" class="profile_pic" />
                </div>
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <div class="item-header">
                  <h6 class="item-title">{{ user_info.name }}</h6>
                </div>
                <div class="item-content">
                  <ul class="settings-list">
                    <li>
                      <router-link :to="{ name: 'edit-profile' }"
                        ><i class="icon-user2"></i> My Profile</router-link
                      >
                    </li>
                    <li v-if="user_info.role_name.name == 'School'">
                      <router-link :to="{ name: 'settings' }"
                        ><i class="icon-settings1"></i> General
                        Settings</router-link
                      >
                    </li>
                    <li v-if="user_info.role_name.name == 'School'">
                      <router-link :to="{ name: 'FeeSetting' }"
                        ><i class="icon-settings1"></i> Fees
                        Settings</router-link
                      >
                    </li>
                    <li>
                      <router-link :to="{ name: 'change-password' }"
                        ><i class="icon-lock3"></i> Change Password</router-link
                      >
                    </li>
                    <li>
                      <a href="javascript: return void(0)" v-on:click="logOut()"
                        ><i class="icon-power2"></i>Log Out</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- Header Menu Area End Here -->
      <!-- Page Area Start Here -->
      <div class="dashboard-page-one">
        <Sidebar />
        <!-- <transition name="bounce"> -->
        <router-view
          :user="user_info"
          :auth="auth"
          :image="media_image"
          :image_src="media_src"
          @update-image-selected="media_image = $event"
          @update-image_src-selected="media_src = $event"
        />
        <!-- </transition> -->
      </div>
      <!-- Page Area End Here -->

      <div class="modal align-middle" id="mediaModal">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-body">
              <input
                type="hidden"
                v-model="imageTarget"
                value=""
                id="imageTarget"
              />
              <input
                type="hidden"
                v-model="fieldTarget"
                value=""
                id="fieldTarget"
              />
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#chooseImage"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    >Choose Image</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="home-tab"
                    data-toggle="tab"
                    href="#uploadImage"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    >Upload Image</a
                  >
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="chooseImage"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div style="height: 500px">
                    <div class="d-flex flex-wrap mt-3 media_images">
                      <div
                        class="mr-2"
                        v-for="(img, i) in images"
                        v-bind:key="i"
                      >
                        <label>
                          <input
                            type="radio"
                            name="media_image"
                            :value="img.id"
                            :data-src="img.thumb_url"
                            class="media_check"
                          />
                          <img :src="img.thumb_url" class="media_thumb" />
                          <span class="fa fa-check-circle check-icon"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="mt-3">
                    <button
                      type="button"
                      class="btn btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                      v-on:click="okClicked()"
                    >
                      Okay
                    </button>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="uploadImage"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div style="height: 500px">
                    <vue-dropzone
                      ref="mediaDropzone"
                      id="media-dropzone"
                      :options="dropzoneOptions"
                      v-on:vdropzone-success="fileUploaded"
                    ></vue-dropzone>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../../../public/css/normalize.css";
import "../../../public/css/main.css";
import "../../../public/css/all.min.css";
// import "../../../public/css/fullcalendar.min.css";
// import "../../../public/css/bootstrap.min.css";
import "../../../public/css/animate.min.css";
import "../../../public/css/style.css";
import "../../../public/admin/css/style.min.css";
import "../../../public/icomoon/style.min.css";

var token = localStorage.getItem("token"),
  user_info = localStorage.getItem("user_info");
user_info = JSON.parse(user_info);

import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

import Sidebar from "./SidebarView";

export default {
  data() {
    return {
      routerKey: 0,
      images: [],
      logo_src: baseURL + "/img/logo.png",
      profile_picture: baseURL + "/img/figure/admin.jpg",
      media_image: "",
      media_image_url: "",
      media_src: baseURL + "/img/default.jpg",
      imageTarget: "",
      fieldTarget: "",
      user_info: JSON.parse(localStorage.getItem("user_info")),
      auth: localStorage.getItem("token"),
      js_load: 0,
      dropzoneOptions: {
        url: apiBaseUrl + "add-media",
        headers: {
          Authorization: "Bearer " + token,
          Accept: "application/json",
        },
      },
    };
  },
  components: {
    vueDropzone: vue2Dropzone,
    Sidebar,
  },
  mounted() {
    this.getMedia();
    this.loadJs();

    let token = localStorage.getItem("token");

    if (this.user_info.picture) {
      this.profile_picture = this.user_info.picture;
    }
    if (this.user_info.school_data && this.user_info.school_data.logo) {
      this.logo_src =
        this.baseURL + "/img/profiles/" + this.user_info.school_data.logo;
    }

    this.auth = token;
  },
  methods: {
    logOut() {
      let token = localStorage.getItem("token");

      localStorage.removeItem("token");
      localStorage.removeItem("user_info");

      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + token,
          Accept: "application/json",
        },
      });
      instance.get("logout").then((res) => {
        this.auth = false;
        this.$router.push({
          name: "login",
        });
      });
    },
    userInfo(info) {
      user_info = localStorage.getItem("user_info");
      this.user_info = JSON.parse(user_info);
    },
    fileUploaded(file, response) {
      $("[href='#chooseImage']").trigger("click");

      let html = `<div class="mr-2">
            <label>
              <input type="radio" name="media_image" data-src="${response.image}" value="${response.id}" class="media_check" checked>
              <img src="${response.image}" class="media_thumb">
              <span class="fa fa-check-circle check-icon"></span>
            </label>
          </div>`;

      $(".media_images").append(html);

      $("media_image div")
        .last()
        .find('input[type="radio"]')
        .prop("checked", "checked");
    },
    changeLayout(id) {
      this.auth = id;
      token = localStorage.getItem("token");
      user_info = localStorage.getItem("user_info");
      user_info = JSON.parse(user_info);
      this.user_info = user_info;

      if (user_info.picture) {
        this.profile_picture = user_info.picture;
      }
      if (user_info.school_data && user_info.school_data.logo) {
        this.logo_src =
          this.baseURL + "img/profiles/" + user_info.school_data.logo;
      }

      this.dropzoneOptions = {
        url: apiBaseUrl + "add-media",
        headers: {
          Authorization: "Bearer " + token,
          Accept: "application/json",
        },
      };

      this.getMedia();
    },
    rerenderComponent(id) {
      this.routerKey += 1;
    },
    okClicked() {
      let image = $(".media_check:checked").data("src"),
        id = $(".media_check:checked").val(),
        target = $("#imageTarget").val(),
        target_field = $("#fieldTarget").val();

      this.media_src = image;
      this.media_image = id;

      $(target).attr("src", image);
      $(target_field).val(id)[0].dispatchEvent(new Event("input"));

      $("#mediaModal").modal("hide");
    },
    getMedia() {
      let token = localStorage.getItem("token");
      if (token != undefined && token != "") {
        let instance = axios.create({
          baseURL: this.apiBaseUrl,
          headers: {
            Authorization: "Bearer " + token,
            Accept: "application/json",
          },
        });
        instance
          .get("view-media")
          .then((res) => {
            this.images = res.data;
          })
          .catch((err) => {
            if (err.response.status === 401) {
              localStorage.removeItem("token");
              localStorage.removeItem("user_info");

              this.auth = false;
              this.$router.push({
                name: "login",
              });
            }
          });
      }
    },
    loadJs() {
      this.js_load++;
      if (this.js_load == 1) {
        let src_urls = [
          "jquery.counterup.min.js",
          "jquery.waypoints.min.js",
          "jquery.scrollUp.min.js",
          "sweetalert.min.js",
          "main.js",
        ];
        let scriptTag;
        src_urls.forEach((row, i) => {
          scriptTag = document.createElement("script");
          scriptTag.defer = "defer";
          scriptTag.src = `${this.baseURL}/js/${row}`;
          document.body.appendChild(scriptTag);
        });
      }
    },
  },
};
</script>
<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.form-group .input-icon {
  cursor: pointer;
  position: absolute;
  right: 25px;
  top: 45px;
}
.form-control.is-invalid {
  background-color: #f7e7e7;
}

.master-card {
  position: relative;
}
.master-card > .card-header {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
}
.master-card > .card-body > a {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.master-card .master-icon {
  font-size: 48px;
  line-height: 100%;
}

.notices {
  display: block;
  text-align: center;
}
.notices .toast {
  min-height: 4em;
  font-size: 1em;
}
.notices .toast .toast-icon {
  display: block;
  width: 27px;
  min-width: 27px;
  height: 27px;
  margin-left: 1em;
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 45.999 45.999'%3e %3cpath fill='%23fff' d='M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 11-6 0V21a3 3 0 116 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z'/%3e %3c/svg%3e")
    no-repeat;
}
.notices .toast.toast-success .toast-icon {
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'%3e %3cpath fill='%23fff' d='M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm14.495 17.329l-16 18a1.997 1.997 0 01-2.745.233l-10-8a2 2 0 012.499-3.124l8.517 6.813L37.505 14.67a2.001 2.001 0 012.99 2.659z'/%3e %3c/svg%3e")
    no-repeat;
}
.toast-text {
  padding: 1.5em 1em;
}
</style>
