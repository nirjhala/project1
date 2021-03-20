<template>
<div>
    <!--
            HEADER PART
         -->
    <header class="top-header bg-primary py-2">
        <b-container>
            <b-row>
                <b-col>
                    <a href="tel: 9087654321" class="text-white"><i class="icon-mobile"></i> +91 9087654321</a>
                    <a href="mailto: info@example.com" class="text-white ml-3"><i class="icon-envelope-open-o"></i> info@example.com</a>
                </b-col>
                <b-col class="text-right">
                    <a href="" class="text-white ml-3"><i class="icon-facebook"></i></a>
                    <a href="" class="text-white ml-3"><i class="icon-instagram"></i></a>
                    <a href="" class="text-white ml-3"><i class="icon-linkedin"></i></a>
                    <a href="" class="text-white ml-3"><i class="icon-twitter"></i></a>
                </b-col>
            </b-row>
        </b-container>
    </header>
    <header class="main-header py-3">
        <b-container>
            <b-row>
                <b-col sm="4">
                    <router-link :to="{ name: 'Page' }"><img :src="baseURL + '/img/logo2.png'" alt="Akkhor" title="Akkhor" /></router-link>
                </b-col>
                <b-col sm="8" class="text-right">
                    <ul class="main-navbar m-0 ml-auto d-inline-flex">
                        <li v-for="(m, i) in menues['Header Menu']" :key="i">
                            <router-link v-if="m.page" :to="{ name: 'Page', params: { slug: m.page.slug } }">
                                {{ m.label }}
                                <i class="icon-angle-down" v-if="m.submenu.length"></i>
                            </router-link>
                            <a v-if="!m.page" :href="m.link">
                                {{ m.label }}
                                <i class="icon-angle-down" v-if="m.submenu.length"></i>
                            </a>
                            <ul v-if="m.submenu.length">
                                <li v-for="(sm, j) in m.submenu" :key="j">
                                    <router-link v-if="sm.page" :to="{ name: 'Page', params: { slug: sm.page.slug } }">
                                        {{ sm.label }}
                                    </router-link>
                                    <a v-if="!sm.page" :href="sm.link">
                                        {{ sm.label }}
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </b-col>
            </b-row>
        </b-container>
    </header>

    <!--
            MAIN CONTENT PART
         -->
    <section>
        <router-view />
    </section>

    <!--
            FOOTER PART
         -->
    <footer class="py-5">
        <b-container>
            <b-row>
                <b-col sm="3">
                    <h4>Latest News</h4>
                    <ul>
                        <li>
                            <router-link to="#">Home</router-link>
                        </li>
                        <li>
                            <router-link to="#">Our Mission &amp; Vision</router-link>
                        </li>
                        <li>
                            <router-link to="#">Chairman's Message</router-link>
                        </li>
                        <li>
                            <router-link to="#">Principal's Message</router-link>
                        </li>
                        <li>
                            <router-link to="#">Picture Gallery</router-link>
                        </li>
                        <li>
                            <router-link to="#">[More&hellip;]</router-link>
                        </li>
                    </ul>
                </b-col>
                <b-col sm="3">
                    <h4>Quick Links</h4>
                    <ul>
                        <li v-for="(m, i) in menues['Footer 1']" :key="i">
                            <router-link v-if="m.page" :to="{ name: 'Page', params: { slug: m.page.slug } }">
                                {{ m.label }}
                            </router-link>
                            <a v-if="!m.page" :href="m.link">
                                {{ m.label }}
                            </a>
                        </li>
                    </ul>
                </b-col>
                <b-col sm="3">
                    <h4>Admission</h4>
                    <ul>
                        <li v-for="(m, i) in menues['Footer 2']" :key="i">
                            <router-link v-if="m.page" :to="{ name: 'Page', params: { slug: m.page.slug } }">
                                {{ m.label }}
                            </router-link>
                            <a v-if="!m.page" :href="m.link">
                                {{ m.label }}
                            </a>
                        </li>
                    </ul>
                </b-col>
                <b-col sm="3">
                    <h4>Other Useful Links</h4>
                    <ul>
                        <li v-for="(m, i) in menues['Footer 3']" :key="i">
                            <router-link v-if="m.page" :to="{ name: 'Page', params: { slug: m.page.slug } }">
                                {{ m.label }}
                            </router-link>
                            <a v-if="!m.page" :href="m.link">
                                {{ m.label }}
                            </a>
                        </li>
                    </ul>
                    <h4 class="mt-3">Connect on Social</h4>
                    <a href="" target="_blank" class="icon-facebook"></a>
                    <a href="" target="_blank" class="ml-3 icon-instagram"></a>
                    <a href="" target="_blank" class="ml-3 icon-linkedin2"></a>
                    <a href="" target="_blank" class="ml-3 icon-twitter"></a>
                </b-col>
            </b-row>
        </b-container>
        <div class="text-center mt-5">
            Powered by: <a href="#" target="_blank">School Management System</a>
        </div>
    </footer>
</div>
</template>

<script>
import api from "../api/script";
// import "../../../public/icomoon/style.min.css";
import "../../icomoon/style.css";

export default {
    data() {
        return {
            menues: {
                "Header Menu": [],
                "Footer 1": [],
                "Footer 2": [],
                "Footer 3": [],
                "Footer 4": [],
            },
        };
    },
    mounted() {
        this.getMenues();
    },
    methods: {
        getMenues() {
            let apiResponse = api.fetchFrontMenues();
            apiResponse.then((res) => {
                this.menues = res.data;
            });
        },
    },
};
</script>

<style>
.bg-primary {
    background-color: #2c3e50 !important;
    color: #fff;
}

.border-primary {
    border-color: #2c3e50 !important;
}

.btn-primary {
    background-color: #2c3e50 !important;
    border-color: #2c3e50 !important;
}

.btn-primary:hover {
    background-color: #ff9e01 !important;
    border-color: #ff9e01 !important;
}

h1,
h2,
h3,
h4,
h5,
h6,
a {
    color: #2c3e50;
}

h1 span,
h2 span,
h3 span,
h4 span,
h5 span,
h6 span,
a:hover {
    color: #ff9e01;
}

.toast-icon {
    display: block;
    width: 27px;
    min-width: 27px;
    height: 27px;
    margin-left: 1em;
    background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 45.999 45.999'%3e %3cpath fill='%23fff' d='M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 11-6 0V21a3 3 0 116 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z'/%3e %3c/svg%3e") no-repeat;
}

.toast-success .toast-icon {
    background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'%3e %3cpath fill='%23fff' d='M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm14.495 17.329l-16 18a1.997 1.997 0 01-2.745.233l-10-8a2 2 0 012.499-3.124l8.517 6.813L37.505 14.67a2.001 2.001 0 012.99 2.659z'/%3e %3c/svg%3e") no-repeat;
}

.toast-text {
    padding: 1.5em 1em;
}

header.main-header {
    position: sticky;
    top: 0;
    background-color: #fff;
    box-shadow: 0 0 10px #ccc;
    z-index: 99;
}

.main-navbar,
.main-navbar ul {
    margin: 0;
    padding: 0;
    margin-left: auto;
    list-style: none;
}

.main-navbar>li>a {
    padding: 12px 15px;
    display: block;
    color: #2c3e50;
}

.main-navbar>li:last-child>a {
    padding-right: 0;
}

.main-navbar>li:hover>a {
    color: #ff9e01;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0px);
    }
}

.main-navbar>li>ul {
    display: none;
    position: absolute;
    top: 100%;
    margin-top: -2px;
    z-index: 1;
    background: #2c3e50;
    border-radius: 3px;
    animation: slideUp 0.3s;
}

.main-navbar>li:hover>ul {
    display: block;
}

.main-navbar>li>ul>li:first-child:before {
    content: "";
    position: absolute;
    left: 15px;
    top: -20px;
    border: 10px solid transparent;
    border-bottom-color: #2c3e50;
}

.main-navbar>li>ul>li:hover:first-child:before {
    border-bottom-color: #ff9e01;
}

.main-navbar>li>ul>li>a {
    display: block;
    color: #fff;
    padding: 5px 15px;
    text-align: left;
    white-space: nowrap;
    min-width: 100px;
}

.main-navbar>li>ul>li:hover>a {
    background-color: #ff9e01;
}

.main-navbar>li>ul>li:not(:last-child)>a {
    border-bottom: 1px solid #999;
}

a:hover {
    text-decoration: none;
}

footer {
    background: #161616;
}

footer * {
    color: #fff;
}

footer ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

footer h4 {
    margin-bottom: 30px;
}

/* Other Pages */
#page-header {
    background: #ebebeb;
    padding: 40px 0;
    text-align: center;
}

#page-header h1 {
    font-size: 36px;
    text-transform: capitalize;
}

.breadcrumb {
    background-color: transparent;
    padding: 0;
    justify-content: center;
}
</style>
