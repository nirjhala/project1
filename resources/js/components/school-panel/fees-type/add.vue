<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
      <div class="float-right">
        <router-link
          :to="{ name: 'fees-type' }"
          class="fw-btn-fill btn-gradient-yellow text-white"
          >View Fees Type</router-link
        >
      </div>
      <h3>{{ !id ? "Add" : "Edit" }} Fees Type</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'FeeMaster' }">Fees Management</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'fees-type' }">Fees Type</router-link>
        </li>
        <li>{{ !id ? "Add" : "Edit" }} Fees Type</li>
      </ul>
    </div>
    <!-- Breadcrumbs Area End Here -->

    <!-- Table Area Start Here -->
    <div class="card height-auto">
      <div class="card-body">
        <div class="text-center" v-if="!loaded">
          <b-spinner></b-spinner>
        </div>
        <div v-if="loaded">
          <div class="heading-layout1">
            <div class="item-title">
              <h3>{{ !id ? "Add New" : "Edit" }} Fees Type</h3>
            </div>
          </div>
          <form
            class="new-added-form"
            @submit.prevent="id ? updateData() : addData()"
          >
            <div class="alert alert-danger" v-if="errors.length">
              <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">
                  {{ error }}
                </li>
              </ul>
            </div>
            <input type="hidden" v-model="record.id" value="" />
            <div class="form-group">
              <label>Name *</label>
              <input
                type="text"
                v-model="record.name"
                placeholder=""
                value=""
                class="form-control"
                required
              />
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-lg-8 col-6">Installment Avalailability</div>
                <div class="col-lg-4 col-6">
                  <label class="switch">
                    <input
                      type="checkbox"
                      v-model="record.installment_availability"
                      value="1"
                    />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-lg-8 col-6">Fees Applied On</div>
                <div class="col-lg-4 col-6">
                  <select v-model="record.fees_for" class="form-control">
                    <option value="both">Both</option>
                    <option value="new">New</option>
                    <option value="old">Old</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 form-group mg-t-8">
                <button
                  type="submit"
                  class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                >
                  {{ !id ? "Save" : "Update" }}
                </button>
                <button
                  type="reset"
                  class="btn-fill-lg bg-blue-dark btn-hover-yellow"
                >
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Table Area End Here -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      record: {
        name: "",
        installment_availability: 0,
        fees_for: "both",
      },
      errors: [],
      loaded: 0,
      token: localStorage.getItem("token"),
    };
  },
  mounted() {
    let params = this.$route.params;

    if (params.id != undefined && params.id != "") {
      this.getInfo(params.id);
    } else {
      this.loaded = 1;
    }
  },
  methods: {
    getInfo(id) {
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.get("fees-type/" + id).then((res) => {
        let list = res.data;
        this.id = list.id;
        this.record = list;

        this.loaded = 1;
        $(".select2").each(function () {
          $(this).trigger("change");
        });
      });
    },
    addData: function () {
      let params = {
        record: this.record,
      };
      this.loaded = 0;
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance
        .post("fees-type", params)
        .then((res) => {
          if (res.data.status) {
            this.$router
              .push({ name: "fees-type" })
              .then((res) => {
                this.loaded = 1;
                this.$toast.success("Record saved.");
              })
              .catch((err) => {
                this.loaded = 1;
                console.log(err);
              });
          } else {
            this.loaded = 1;
            this.errors = res.data.errors;
          }
        })
        .catch((error) => {
          this.loaded = 1;
          console.log(error);
        });
    },
    updateData: function () {
      let params = {
        record: this.record,
      };
      this.loaded = 0;
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance
        .put("fees-type/" + this.id, params)
        .then((res) => {
          if (res.data.status) {
            this.$router
              .push({ name: "fees-type" })
              .then((res) => {
                this.loaded = 1;
                this.$toast.success("Record saved.");
              })
              .catch((err) => {
                this.loaded = 1;
                console.log(err);
              });
          } else {
            this.loaded = 1;
            this.errors = res.data.errors;
          }
        })
        .catch((error) => {
          this.loaded = 1;
        });
    },
  },
};
</script>
