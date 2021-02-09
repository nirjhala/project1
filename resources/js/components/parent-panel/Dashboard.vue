<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <h3>Parent Dashboard</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>Parent</li>
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
                        <div class="col-sm-10 col-8">
                            <h3 class="mb-0">{{ user_info.name }}</h3>
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
            let address = ''
            address += (this.user_info.address1 + ' ' + this.user_info.address2).trim()
            if(this.user_info.city_data) {
                address += '\n' + this.user_info.city_data.name+' ' + this.user_info.city_data.state_name.name
            }
            address +=  ' ' + this.user_info.pin_code
            return address.replace(null, '').replace(null, '').replace(null, '')
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
                })
        }
    }
}
</script>
