<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <h3>Fees Details</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'StudentMaster' }">Student Master</router-link>
                </li>
                <li>Fees Details</li>
            </ul>
        </div>
        <!-- Breadcubs Area End Here -->

        <!-- Lists Students -->
        <div class="card height-auto mb-3" v-if="lists.length">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>FEES AMOUNT</th>
                                <th>MONTH</th>
                                <th>Pay Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(s,i) in lists" :key="i" :class="s.pay_status == 'paid' ? 'bg-success text-white' : 'bg-danger text-white'">
                                <td>{{ i + 1 }}</td>
                                <td>₹ {{ s.amount }}</td>
                                <td>{{ s.month }}</td>
                                <td>
                                    <select v-model="lists[i].pay_status" class="form-control" @change="payStatus( i )">
                                        <option value="due">Due</option>
                                        <option value="paid">Paid</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import api from '../../../api/script'

let count = 0;
export default {
    data() {
        return {
            errors: 0,
            lists: [],
            loaded: 0,
            token: localStorage.getItem('token')
        }
    },
    mounted() {
        this.getLists();
    },
    methods: {
        getLists () {
            this.loaded = 0;

            let apiResponse = api.studentFees(this.$route.params.id)
                apiResponse
                    .then((res) => {
                        this.lists = res.data
                    })
                    .catch((err) => {
                        console.log('Errors: ', err)
                    })
        },
        payStatus(i) {
            let status = this.lists[i].pay_status,
                id     = this.lists[i].id;

            this.loaded = 0;
            
            let instance = axios.create({
                baseURL: this.apiBaseUrl,
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Accept': 'application/json'
                }
            });
            instance.get('fees/update_pay_status/' + id + '/' + status)
                .then(res => {
                    this.lists = res.data
                    this.getLists()
                });
        }
    }
}
</script>
