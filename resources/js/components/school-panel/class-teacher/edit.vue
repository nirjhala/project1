<template>
<div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
        <h3>Class Teacher Allocation</h3>
        <ul>
            <li>
                <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
            </li>
            <li>Class Teacher Allocation</li>
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
                <form class="new-added-form" @submit.prevent="updateData()" v-if="lists.data">
                    <div class="alert alert-danger" v-if="errors.length">
                        <ul class="mb-0">
                            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                        </ul>
                    </div>
                    <div class="table-responsive mb-3">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Class Name</th>
                                    <th>Class Teacher</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(list, i) in lists.data" :key="i">
                                    <td>{{ i + lists.from }}.</td>
                                    <td>{{ list.cls.dept.dept_name }} &raquo; {{ list.cls.name }} &dash; {{ list.name }}</td>
                                    <td>
                                        <div style="width: 200px;">
                                            <select v-model="teacher[i][list.id]" class="form-control">
                                                <option value="">Select Teacher</option>
                                                <option :value="t.id" v-for="(t, i) in list.teachers" :key="i">{{ t.name }}</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <button type="submit" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save &amp; Submit</button>
                    </div>
                </form>
                <div v-if="!lists.data">
                    <div class="alert alert-warning">
                        No records found!
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Student Table Area End Here -->
</div>
</template>
<script>
export default {
    data() {
        return {
            lists: {},
            errors: [],
            loaded: 0,
            teacher: [],
            token: localStorage.getItem('token')
        }
    },
    mounted() {
        let params = this.$route.params;
        this.getSections();
        this.loaded = 1;
    },
    methods: {
        getSections() {
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('get-all-sections')
                .then(res => {
                    this.lists = res.data.data
                    this.teacher = [];
                    let teacherArr = [];
                    this.lists.data.forEach(function(row, i) {
                        let teacher_id = row.class_teacher ? row.class_teacher : ''
                        teacherArr.push({[row.id]: teacher_id});
                    })
                    this.teacher = teacherArr;
                });
        },
        updateData() {
            this.loaded = 0;
            let params = {
                teachers: this.teacher
            }
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            instance.post('allocate-class-teacher', params)
                .then(res => {
                    this.loaded = 1;
                    this.$toast.success('Changes saved successfully.');
                });
        }
    }
}
</script>
