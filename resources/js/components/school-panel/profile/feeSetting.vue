<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
      <h3>Fees Settings</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>Fees Settings</li>
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
          <form
            class="new-added-form"
            @submit.prevent="updateData()"
            enctype="multipart/form-data"
          >
            <div class="alert alert-danger" v-if="errors.length">
              <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">
                  {{ error }}
                </li>
              </ul>
            </div>

            <div class="row">
              <div class="col-sm-9">
                <div class="row">
                  <div class="col-sm-4 form-group py-4">
                    Fee Collection Day *
                  </div>
                  <div class="col-sm-8 form-group">
                    <select class="form-control" v-model.trim="fee.fee_day">
                      <option value="">Select day</option>
                      <option :value="d" v-for="d in 28" :key="d">
                        {{ d < 10 ? `0${d}` : d }}
                      </option>
                    </select>
                  </div>
                  <div class="col-sm-4 form-group py-4">Penalty Type *</div>
                  <div class="col-sm-8 form-group">
                    <select
                      class="form-control"
                      v-model.trim="fee.penalty_type"
                    >
                      <option value="">Select Fees Type</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                  <div class="col-sm-4 form-group py-4">Penalty Amount *</div>
                  <div class="col-sm-8 form-group">
                    <b-input
                      type="number"
                      min="0"
                      v-model.trim="fee.penalty_amount"
                      placeholder="Penalty Amount"
                    ></b-input>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 form-group mg-t-8">
                    <label>&nbsp;</label>
                    <button
                      type="submit"
                      class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                    >
                      Save Changes
                    </button>
                    <button
                      type="reset"
                      class="btn-fill-lg bg-blue-dark btn-hover-yellow"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-3"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Student Table Area End Here -->
  </div>
</template>
<script>
import { view_fee_setting, update_fee_setting } from "../../../api/script";

import { required, minLength } from "vuelidate/lib/validators";
export default {
  props: ["image_src", "image"],
  data() {
    return {
      fee: {
        id: null,
        fee_day: "",
        penalty_type: "",
        penalty_amount: 0,
      },
      errors: [],
      loaded: 0,
    };
  },
  validations: {
    fee: {
      fee_day: {
        required,
      },
      penalty_type: {
        required,
      },
      penalty_amount: {
        required,
      },
    },
  },
  mounted() {
    this.getFeeSetting();
  },
  methods: {
    getFeeSetting() {
      this.loaded = 0;
      view_fee_setting()
        .then((res) => {
          this.loaded = 1;
          this.fee = res.data;
        })
        .catch((err) => {
          this.loaded = 1;
        });
    },
    updateData() {
      this.loaded = 0;
      update_fee_setting(this.fee.id, this.fee)
        .then((res) => {
          this.loaded = 1;
          this.$toast.success(res.data.message);
        })
        .catch((err) => {
          this.loaded = 1;
        });
    },
  },
  watch: {
    "fee.penalty_amount"(amount) {
      if (parseFloat(amount) < 0) {
        setTimeout(() => {
          this.fee.penalty_amount = 0;
        }, 1);
      }
    },
  },
};
</script>
