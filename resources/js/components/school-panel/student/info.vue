<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <h3>Student Details</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'StudentMaster' }">Student Master</router-link>
                </li>
                <li>Student Details</li>
            </ul>
        </div>
        <!-- Breadcubs Area End Here -->

        <div class="mg-b-20" v-if="info.id">
            <b-card
                header="Basic Information"
                class="height-auto"
            >
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <tr>
                            <th>TITLE: </th>
                            <td>{{ info.user.title }}</td>
                            <th>FIRST NAME: </th>
                            <td>{{ info.user.fname }}</td>
                            <th>LAST NAME: </th>
                            <td>{{ info.user.lname }}</td>
                        </tr>
                        <tr>
                            <th colspan="2">FULL NAME: </th>
                            <td colspan="2">{{ info.user.name }}</td>
                            <td colspan="2" rowspan="8" class="text-center">
                                <div class="mb-2">
                                    PHOTOGRAPH
                                </div>
                                <div>
                                    <img :src="info.picture" :alt="info.user.name" :title="info.user.name" style="max-width: 200px;">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th colspan="2">EMAIL ADDRESS: </th>
                            <td colspan="2">{{ info.user.email }}</td>
                        </tr>
                        <tr>
                            <th colspan="2">MOBILE NO.: </th>
                            <td colspan="2">{{ info.user.mobile }}</td>
                        </tr>
                        <tr>
                            <th colspan="2">GENDER: </th>
                            <td colspan="2">{{ info.user.gender }}</td>
                        </tr>
                        <tr>
                            <th colspan="2">DOB: </th>
                            <td colspan="2">{{ info.user.dob }}</td>
                        </tr>
                        <tr>
                            <th colspan="2">ENROLLMENT NO.: </th>
                            <td colspan="2">{{ info.reg_no }}</td>
                        </tr>
                        <tr>
                            <th colspan="2">ROLL NO.: </th>
                            <td colspan="2">{{ info.roll_no }}</td>
                        </tr>
                        <tr>
                            <th colspan="2">ENROLLMENT NO.: </th>
                            <td colspan="2">{{ info.reg_no }}</td>
                        </tr>
                        <tr>
                            <th colspan="2">ADDRESS: </th>
                            <td colspan="4">
                                <div>{{ `${info.user.address1} ${info.user.address2}` }}</div>
                                <div v-if="info.user.city_data">
                                    {{ `${info.user.city_data.state_name.name} ${info.user.city_data.name} ${info.user.pin_code}` }}
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </b-card>
            <b-card
                header="Parents Information"
                class="height-auto"
            >
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <tr>
                            <th>RELATION</th>
                            <th>NAME</th>
                            <th>MOBILE</th>
                            <th>EMAIL</th>
                        </tr>
                        <tr>
                            <td>Father</td>
                            <td>{{ info.father_info.name }}</td>
                            <td>{{ info.father_info.mobile }}</td>
                            <td>{{ info.father_info.email }}</td>
                        </tr>
                        <tr>
                            <td>Mother</td>
                            <td>{{ info.mother_info.name }}</td>
                            <td>{{ info.mother_info.mobile }}</td>
                            <td>{{ info.mother_info.email }}</td>
                        </tr>
                        <tr>
                            <td>{{ info.guardian_relation }}</td>
                            <td>{{ info.guardian_info.name }}</td>
                            <td>{{ info.guardian_info.mobile }}</td>
                            <td>{{ info.guardian_info.email }}</td>
                        </tr>
                    </table>
                </div>
            </b-card>
            <b-card
                header="Other Information"
                class="height-auto"
            >
                <table class="table table-bordered">
                    <tr>
                        <th>CLASS</th>
                        <td>{{ `${info.section_name.cls.name} - ${info.section_name.name}` }}</td>
                    </tr>
                    <tr>
                        <th>RELIGION</th>
                        <td>{{ info.religion_info.name }}</td>
                    </tr>
                    <tr>
                        <th>CAST</th>
                        <td>{{ info.cast }}</td>
                    </tr>
                    <tr>
                        <th>CATEGORY</th>
                        <td>{{ info.category }}</td>
                    </tr>
                    <tr>
                        <th>BLOOD GROUP</th>
                        <td>{{ info.blood_group }}</td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <strong>ABOUT / BIO: </strong>
                            {{ info.short_bio ? info.short_bio : 'N/A' }}
                        </td>
                    </tr>
                </table>

                <div class="table-responsive" v-if="info.user.documents && info.user.documents.length">
                    <table
                        class="table table-bordered"
                    >
                        <tr class="bg-dark text-white">
                            <th colspan="2">
                                <div class="px-3 py-2">UPLOADED DOCUMENTS</div>
                            </th>
                        </tr>
                        <tr
                            v-for="(d, i) in info.user.documents"
                            :key="i"
                        >
                            <th>{{ `${d.document.en_name} ${d.document.hi_name} (${d.document.short_name})` }}</th>
                            <td>
                                <a :href="d.file_url" target="_blank">VIEW / DOWNLOAD</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </b-card>
        </div>
        <!-- Student Table Area Start Here -->
    </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script>
import _ from 'lodash'
import Multiselect from 'vue-multiselect'
import api from '../../../api/script'

export default {
    components: {
        Multiselect
    },
    data() {
        return {
            errors: 0,
            id: null,
            info: {},
            token: localStorage.getItem('token')
        }
    },
    mounted() {
        this.id = this.$route.params.id
        this.getInfo()
    },
    methods: {
        searchAfterDebounce: _.debounce(
            function () {
                this.searchData()
            }, 500
        ),
        studentLabel ({ user, father_info, section_name }) {
            return `${user.name} - ${father_info.name}, Class - ${section_name.cls.name} ${section_name.name}`
        },
        getInfo () {
            let apiResponse = api.studentInfo(this.id)
                apiResponse
                    .then((res) => {
                        this.info = res.data
                    })
                    .catch((err) => {
                        console.log("Errors: ", err)
                    })
        },
        searchData(page) {
            let s = this.s;
            if (typeof page === 'undefined') {
               page = 1;
            }
            this.loaded = 0;
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer '+this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('search-student/?page='+page+'&s='+s)
                .then(res => {
                    this.loaded = 1;
                    this.lists  = res.data.data;
                    if(!res.data.status) {
                        this.errors = 1;
                    }
                }).catch(err => {
                    this.loaded = 1;
                    console.log(err);
                });
        }
    }
}
</script>
