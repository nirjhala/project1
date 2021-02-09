<template>
<div class="dashboard-content-one">
    <!-- Breadcubs Area Start Here -->
    <div class="breadcrumbs-area">
        <h3>Routes</h3>
        <ul>
            <li>
                <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
            </li>
            <li>Routes</li>
        </ul>
    </div>
    <!-- Breadcubs Area End Here -->

    <!-- Student Table Area Start Here -->
    <div class="card height-auto" v-if="!loaded">
        <div class="card-body">
            <div class="text-center">
                <img src="img/preloader.gif" alt="" style="max-width: 100%;">
            </div>
        </div>
    </div>
    <div v-if="loaded">
        <div class="card" v-if="!lists.id">
            <div class="card-body">
                No routes assigned yet.
            </div>
        </div>
        <div class="card" v-if="lists.id">
            <div class="card-body">
                <table class="table table-bordered mb-0">
                    <tr>
                        <th>Route Name</th>
                        <td>{{ lists.name }}</td>
                    </tr>
                    <tr>
                        <th>Starting Point</th>
                        <td>{{ lists.start_point }}</td>
                    </tr>
                    <tr>
                        <th>Driver Name</th>
                        <td>{{ lists.vehicle_info.driver_name.name }}</td>
                    </tr>
                    <tr>
                        <th>Vehicle No.</th>
                        <td>{{ lists.vehicle_info.vehicle_no }}</td>
                    </tr>
                    <tr>
                        <th>Vehicle Type</th>
                        <td>{{ lists.vehicle_info.type }}</td>
                    </tr>
                </table>
                <div class="p-3 bg-dark text-white">
                    ROUTE POINTS
                </div>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(pt, i) in lists.points" :key="i">{{ (i + 1) + '. ' + pt.name }}</li>
                </ul>
            </div>
        </div>
    </div>
    <!-- Student Table Area End Here -->
</div>
</template>
<style scoped>
.w-40 {
    width: 40%;
}
</style>
<script>
import _ from 'lodash'

export default {
    data() {
        return {
            errors: 0,
            lists: {},
            loaded: 0,
            token: localStorage.getItem('token')
        }
    },
    mounted() {
        this.loaded = 1
        this.getRoutes();
    },
    methods: {
        getRoutes () {
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            let self = this;
            instance.get('route/driver')
                .then(res => {
                    self.loaded = 1
                    if (res.status) {
                        self.lists = res.data
                    } else {
                        self.errors = 1
                    }
                }).catch(err => {
                    this.loaded = 1
                    console.log(err)
                })
        }
    }
}
</script>
