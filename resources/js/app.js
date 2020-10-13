/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue       = require('vue');

import VueRouter from 'vue-router'
import VueGlobalVariable from 'vue-global-var'
import VueToast from 'vue-toast-notification'
// Import one of available themes
import 'vue-toast-notification/dist/theme-default.css'

Vue.use(VueRouter)
Vue.use(require('vue-resource'))
Vue.use(VueToast, {
  position: 'top',
  dismissible: true
})

Vue.component('pagination', require('laravel-vue-pagination'));

import { global_params } from './global_params';
import { routes } from './routes';

import App from './App.vue';

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

Vue.component('login-component', require('./components/LoginComponent.vue').default);
Vue.component('app-component', require('./App.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const router = new VueRouter({
    mode: 'history',
    base: 'school-management',
    routes
});

Vue.use(VueGlobalVariable, {
    globals: global_params,
});

const app = new Vue({
    components: {
        App
    },
    router,
}).$mount('#app')
