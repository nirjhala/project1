<template>
<div class="">
    <div id="wrapper" class="wrapper bg-ash" v-if="auth">
        <!-- Header Menu Area Start Here -->
        <div class="navbar navbar-expand-md header-menu-one bg-light">
            <div class="nav-bar-header-one">
                <div class="header-logo">
                    <a href="./" class="text-white text-uppercase">
                        <img :src="logo_src" alt="logo" class="admin_logo">
                        {{ user_info.school_data.name }}
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
                <button class="navbar-toggler pulse-animation" type="button" data-toggle="collapse" data-target="#mobile-navbar" aria-expanded="false">
                    <i class="far fa-arrow-alt-circle-down"></i>
                </button>
                <button type="button" class="navbar-toggler sidebar-toggle-mobile">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            <div class="header-main-menu collapse navbar-collapse" id="mobile-navbar">
                <ul class="navbar-nav">
                    <li class="navbar-item header-search-bar">
                        <div class="input-group stylish-input-group">
                            <span class="input-group-addon">
                                <button type="submit">
                                    <span class="flaticon-search" aria-hidden="true"></span>
                                </button>
                            </span>
                            <input type="text" class="form-control" placeholder="Find Something...">
                        </div>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="navbar-item dropdown header-message">
                        <a class="navbar-nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
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
                                        <img src="img/figure/student11.png" alt="img">
                                    </div>
                                    <div class="media-body space-sm">
                                        <div class="item-title">
                                            <a href="#">
                                                <span class="item-name">Maria Zaman</span>
                                                <span class="item-time">18:30</span>
                                            </a>
                                        </div>
                                        <p>What is the reason of buy this item.
                                            Is it usefull for me.....</p>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="item-img bg-yellow author-online">
                                        <img src="img/figure/student12.png" alt="img">
                                    </div>
                                    <div class="media-body space-sm">
                                        <div class="item-title">
                                            <a href="#">
                                                <span class="item-name">Benny Roy</span>
                                                <span class="item-time">10:35</span>
                                            </a>
                                        </div>
                                        <p>What is the reason of buy this item.
                                            Is it usefull for me.....</p>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="item-img bg-pink">
                                        <img src="img/figure/student13.png" alt="img">
                                    </div>
                                    <div class="media-body space-sm">
                                        <div class="item-title">
                                            <a href="#">
                                                <span class="item-name">Steven</span>
                                                <span class="item-time">02:35</span>
                                            </a>
                                        </div>
                                        <p>What is the reason of buy this item.
                                            Is it usefull for me.....</p>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="item-img bg-violet-blue">
                                        <img src="img/figure/student11.png" alt="img">
                                    </div>
                                    <div class="media-body space-sm">
                                        <div class="item-title">
                                            <a href="#">
                                                <span class="item-name">Joshep Joe</span>
                                                <span class="item-time">12:35</span>
                                            </a>
                                        </div>
                                        <p>What is the reason of buy this item.
                                            Is it usefull for me.....</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="navbar-item dropdown header-notification">
                        <a class="navbar-nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            <i class="far fa-bell"></i>
                            <div class="item-title d-md-none text-16 mg-l-10">Notification</div>
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
                        <a class="navbar-nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            <div class="admin-title">
                                <h5 class="item-title">{{ user_info.name }}</h5>
                                <span>{{ user_info.role_name.name }}</span>
                            </div>
                            <div class="admin-img">
                                <img :src="profile_picture" alt="Admin" class="profile_pic">
                            </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <div class="item-header">
                                <h6 class="item-title">{{ user_info.name }}</h6>
                            </div>
                            <div class="item-content">
                                <ul class="settings-list">
                                    <li>
                                        <router-link :to="{ name: 'edit-profile', params: {} }"><i class="icon-user2"></i> My Profile</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{ name: 'settings', params: {} }"><i class="icon-settings1"></i> Settings</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{ name: 'change-password', params: {} }"><i class="icon-lock3"></i> Change Password</router-link>
                                    </li>
                                    <li>
                                        <a href="javascript: return void(0)" v-on:click="logOut()"><i class="icon-power2"></i>Log Out</a>
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
                <router-view :auth="auth" :image="media_image" :image_src="media_src" @update-image-selected="media_image = $event" @update-image_src-selected="media_src = $event" />
            <!-- </transition> -->
        </div>
        <!-- Page Area End Here -->

        <div class="modal align-middle" id="mediaModal">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-body">
                        <input type="hidden" v-model="imageTarget" value="" id="imageTarget">
                        <input type="hidden" v-model="fieldTarget" value="" id="fieldTarget">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#chooseImage" role="tab" aria-controls="profile" aria-selected="false">Choose Image</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="home-tab" data-toggle="tab" href="#uploadImage" role="tab" aria-controls="home" aria-selected="true">Upload Image</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="chooseImage" role="tabpanel" aria-labelledby="home-tab">
                                <div style="height: 500px;">
                                    <div class="d-flex flex-wrap mt-3 media_images">
                                        <div class="mr-2" v-for="(img, i) in images" v-bind:key="i">
                                            <label>
                                                <input type="radio" name="media_image" :value="img.id" :data-src="img.thumb_url" class="media_check">
                                                <img :src="img.thumb_url" class="media_thumb">
                                                <span class="fa fa-check-circle check-icon"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <button type="button" class="btn btn-fill-lg btn-gradient-yellow btn-hover-bluedark" v-on:click="okClicked()">Okay</button>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="uploadImage" role="tabpanel" aria-labelledby="profile-tab">
                                <div style="height: 500px;">
                                    <vue-dropzone ref="mediaDropzone" id="media-dropzone" :options="dropzoneOptions" v-on:vdropzone-success="fileUploaded"></vue-dropzone>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="!auth">
        <router-view :auth="auth" :key="routerKey" v-on:rerender="rerenderComponent" v-on:loginauth="changeLayout" v-on:loginuser="userInfo" />
    </div>
</div>
</template>

<style>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
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
</style>

<script>
var token = localStorage.getItem('token');
var user_info = localStorage.getItem('user_info');
user_info = JSON.parse(user_info);

import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

import Sidebar from './components/SidebarView';
export default {
    name: 'dashboard',
    data() {
        return {
            routerKey: 0,
            images: [],
            logo_src: baseURL + 'img/logo.png',
            profile_picture: baseURL + 'img/figure/admin.jpg',
            media_image: '',
            media_image_url: '',
            media_src: '',
            imageTarget: '',
            fieldTarget: '',
            user_info: user_info,
            auth: localStorage.getItem('token'),
            dropzoneOptions: {
                url: apiBaseUrl + 'add-media',
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Accept': 'application/json'
                }
            }
        }
    },
    components: {
        vueDropzone: vue2Dropzone,
        Sidebar,
    },
    mounted() {
        this.getMedia();
        this.loginAuth();

        let token = localStorage.getItem('token');

        if (user_info.picture) {
            this.profile_picture = user_info.picture;
        }
        if (user_info.school_data && user_info.school_data.logo) {
            this.logo_src = this.baseURL + 'img/profiles/' + user_info.school_data.logo;
        }

        this.auth = token;
    },
    methods: {
        logOut() {
            let token = localStorage.getItem('token');

            localStorage.removeItem("token");
            localStorage.removeItem("user_info");

            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Accept': 'application/json'
                }
            });
            instance.get('logout')
                .then(res => {
                    this.auth = false;
                    this.$router.push({
                        name: 'login'
                    });
                });
        },
        userInfo(info) {
            user_info = localStorage.getItem('user_info');
            this.user_info = JSON.parse(user_info);
        },
        fileUploaded(file, response) {
          $("[href='#chooseImage']").trigger('click');

          let html = `<div class="mr-2">
            <label>
              <input type="radio" name="media_image" data-src="${response.image}" value="${response.id}" class="media_check" checked>
              <img src="${response.image}" class="media_thumb">
              <span class="fa fa-check-circle check-icon"></span>
            </label>
          </div>`;

          $('.media_images').append(html);

          $('media_image div').last().find('input[type="radio"]').prop('checked', 'checked');
        },
        changeLayout(id) {
            this.auth       = id;
            token           = localStorage.getItem('token');
            user_info       = localStorage.getItem('user_info');
            user_info       = JSON.parse(user_info);
            this.user_info  = user_info;

            if (user_info.picture) {
                this.profile_picture = user_info.picture;
            }
            if (user_info.school_data && user_info.school_data.logo) {
                this.logo_src = this.baseURL + 'img/profiles/' + user_info.school_data.logo;
            }

            this.dropzoneOptions = {
                url: apiBaseUrl + 'add-media',
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Accept': 'application/json'
                }
            }

            this.getMedia();
        },
        rerenderComponent(id) {
            this.routerKey += 1;
        },
        loginAuth() {
            let routeName = this.$router.currentRoute.name;
            let routeArr = window.location.pathname.split('/');
            routeName = routeArr[2];
            if ((token == undefined || token == null || token == '') && routeName != 'get-started' && routeName != 'login' && routeName != 'forgot-password') {
                this.auth = false;

                this.$router.push({
                    name: 'login'
                });
            } else {
              this.getMedia();
            }
        },
        okClicked() {
            let target = $('#imageTarget').val(),
                image = $('.media_check:checked').data('src'),
                id = $('.media_check:checked').val(),
                target_field = $('#fieldTarget').val();

            this.media_src = image;

            this.media_image = id;

            $('#mediaModal').modal('hide');
        },
        getMedia() {
            if (token != undefined && token != '') {
                let instance = axios.create({
                    baseURL: this.apiBaseUrl,
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Accept': 'application/json'
                    }
                });
                instance.get('view-media')
                    .then(res => {
                        this.images = res.data;
                    });
            }
        }
    }
}
</script>
