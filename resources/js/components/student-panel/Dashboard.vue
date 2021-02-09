<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <h3>Student Dashboard</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>Student</li>
            </ul>
        </div>
        <!-- Breadcubs Area End Here -->
        <div class="card h-auto">
            <div class="card-body">
                <div class="text-center" v-if="!loaded">
                    <img :src="'img/preloader.gif'" alt="" style="max-width: 100%;">
                </div>
                <div v-if="loaded">
                    <div class="row">
                        <div class="col-sm-2 col-4">
                            <img :src="user_info.picture" :alt="user_info.name" :title="user_info.name" class="rounded bordered" style="object-fit: contain; max-width: 100%;">
                        </div>
                        <div class="col-sm-5 col-4">
                            <h3 class="mb-0">{{ user_info.name }}</h3>
                            <div>
                                <div class="mt-1" v-if="user_info.student_data.section_name">
                                    <strong>Class:</strong>
                                    <span class="text-warning">{{ user_info.student_data.section_name.cls.name }} - {{ user_info.student_data.section_name.name }}</span>
                                </div>
                                <div class="mt-1">
                                    <strong>Enroll. No.:</strong>
                                    <span class="text-warning">{{ user_info.student_data.reg_no }}</span>
                                </div>
                                <div class="mt-1">
                                    <strong>Roll No.:</strong>
                                    <span class="text-warning">{{ user_info.student_data.roll_no }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-5 col-4">
                            <h3 class="mb-0">Contact Information</h3>
                            <div>
                                <div class="mt-1">
                                    <strong>Phone:</strong>
                                    <span class="text-warning">{{ user_info.mobile }}</span>
                                </div>
                                <div class="mt-1">
                                    <strong>Email:</strong>
                                    <span class="text-warning">{{ user_info.email }}</span>
                                </div>
                                <div class="mt-1">
                                    <strong>Address:</strong>
                                    <span class="text-warning">
                                        {{ user_address }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-responsive mt-3" v-if="loaded">
                    <table class="table table-striped table-bordered">
                        <tr>
                            <th>BLOOD GROUP</th>
                            <td>{{ user_info.student_data.blood_group }}</td>
                            <th>DOB</th>
                            <td>{{ user_info.dob }}</td>
                            <th>GENDER</th>
                            <td>{{ user_info.gender }}</td>
                        </tr>
                        <tr>
                            <th>FATHER NAME</th>
                            <td>{{ user_info.student_data.father_info.name }}</td>
                            <th>FATHER MOBILE NO.</th>
                            <td>{{ user_info.student_data.father_info.mobile }}</td>
                            <th>FATHER EMAIL</th>
                            <td>{{ user_info.student_data.father_info.email }}</td>
                        </tr>
                        <tr>
                            <th>MOTHER NAME</th>
                            <td>{{ user_info.student_data.mother_info.name }}</td>
                            <th>MOTHER MOBILE NO.</th>
                            <td>{{ user_info.student_data.mother_info.mobile }}</td>
                            <th>MOTHER EMAIL</th>
                            <td>{{ user_info.student_data.mother_info.email }}</td>
                        </tr>
                        <tr>
                            <th>GUARDIAN NAME</th>
                            <td>{{ user_info.student_data.guardian_info.name }}</td>
                            <th>GUARDIAN MOBILE NO.</th>
                            <td>{{ user_info.student_data.guardian_info.mobile }}</td>
                            <th>GUARDIAN RELATION</th>
                            <td>{{ user_info.student_data.guardian_relation }}</td>
                        </tr>
                        <tr>
                            <th>RELIGION</th>
                            <td>{{ user_info.student_data.religion_info.name }}</td>
                            <th>CATEGORY</th>
                            <td>{{ user_info.student_data.category }}</td>
                            <th>CASTE</th>
                            <td>{{ user_info.student_data.cast }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    data () {
        return {
            user_info: {},
            loaded: 0,
            token: localStorage.getItem('token')
        }
    },
    computed: {
        user_address () {
            return this.user_info.address1 + ' ' + this.user_info.address1 + '\n' + this.user_info.city_data.name+' ' + this.user_info.city_data.state_name.name + ' ' + this.user_info.pin_code
        }
    },
    mounted () {
       this.getInfo()
    },
    methods: {
        getInfo () {
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            })

            instance.get('student/info')
                .then( res => {
                    this.loaded = 1
                    this.user_info = res.data

                    console.log(this.user_info)
                })
        }
    }
}
</script>
