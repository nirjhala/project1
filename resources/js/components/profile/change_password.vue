<template>
<div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
        <h3>Change Password</h3>
        <ul>
            <li>
                <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
            </li>
            <li>Change Password</li>
        </ul>
    </div>
    <!-- Breadcrumbs Area End Here -->

    <!-- Student Table Area Start Here -->
    <div class="card height-auto">
        <div class="card-body">
            <div class="text-center" v-if="!loaded">
                <img :src="'img/preloader.gif'" alt="" style="max-width: 100%;">
            </div>
            <div v-if="loaded">
                <form id="ChangePasswordForm" class="new-added-form" @submit.prevent="updateData()" enctype="multipart/form-data">
                    <div class="alert alert-danger" v-if="errors.length">
                        <ul class="mb-0">
                            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                        </ul>
                    </div>

                    <div class="row">
                        <div class="col-sm-4 mx-auto">
                            <div class="form-group">
                                <label>Current Password *</label>
                                <input type="password" v-model="record.current_password" value="" class="form-control" placeholder="Current Password" required>
                            </div>
                            <div class="form-group">
                                <label>New Password *</label>
                                <input type="password" v-model="record.new_password" value="" class="form-control password" placeholder="New Password" required>
                            </div>
                            <div class="form-group">
                                <label>Confirm Password *</label>
                                <input type="password" v-model="record.confirm_password" class="form-control confirm-password" placeholder="Confirm Password" required>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark btn-block">Change Password</button>
                            </div>
                        </div>
                    </div>
                </form>
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
            record: {
                current_password: '',
                new_password: '',
                confirm_password: ''
            },
            errors: [],
            loaded: 1,
            token: localStorage.getItem('token')
        }
    },
    mounted() {
        let params = this.$route.params;
    },
    methods: {
        updateData: function() {
            let form    = $('#ChangePasswordForm'),
                params  = this.record;

            let is_valid = form.is_valid();

            if (is_valid) {
              this.loaded = 0;
              let instance = axios.create({
                  baseURL: this.apiBaseUrl,
                  headers: {
                      'Authorization': 'Bearer ' + this.token,
                      'Accept': 'application/json',
                  }
              });
              instance.post('change-password', params)
                  .then(res => {
                      if (res.data.status) {
                          this.$toast.success(res.data.message);
                          location.reload();
                      } else {
                          this.loaded = 1;
                          this.errors = res.data.errors;
                      }
                  })
                  .catch(error => {
                      this.loaded = 1;
                      console.log(error);
                  });
            }
        }
    }
}
</script>
