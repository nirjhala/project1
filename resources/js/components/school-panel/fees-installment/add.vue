<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
      <div class="float-right">
        <router-link
          :to="{ name: 'fees-installment' }"
          class="fw-btn-fill btn-gradient-yellow text-white"
          >View Fees Installment</router-link
        >
      </div>
      <h3>{{ !id ? "Add" : "Edit" }} Fees Installment</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'FeeMaster' }">Fees Management</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'fees-installment' }"
            >Fees Installment</router-link
          >
        </li>
        <li>{{ !id ? "Add" : "Edit" }} Fees Installment</li>
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
              <h3>{{ !id ? "Add New" : "Edit" }} Fees Installment</h3>
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
            <input type="hidden" v-model="id" value="" />
            <div class="row">
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Name *</label>
                <input
                  type="text"
                  v-model="name"
                  placeholder=""
                  value=""
                  class="form-control"
                  required
                />
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>Start Month *</label>
                <select class="form-control" v-model="start_month" required>
                  <option value="">Select Month</option>
                  <option :value="m" v-for="m in months" :key="m">
                    {{ m }}
                  </option>
                </select>
              </div>
              <div class="col-xl-3 col-lg-6 col-12 form-group">
                <label>End Month *</label>
                <select class="form-control" v-model="end_month" required>
                  <option value="">Select Month</option>
                  <option :value="m" v-for="m in months" :key="m">
                    {{ m }}
                  </option>
                </select>
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
      name: "",
      start_month: "",
      end_month: "",
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
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
      instance.get("get-fees-installment-info/" + id).then((res) => {
        let list = res.data.data;
        this.id = list.id;
        this.name = list.name;
        this.start_month = list.start_month;
        this.end_month = list.end_month;

        this.loaded = 1;
        $(".select2").each(function () {
          $(this).trigger("change");
        });
      });
    },
    addData: function () {
      let params = {
        name: this.name,
        start_month: this.start_month,
        end_month: this.end_month,
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
        .post("add-fees-installment", params)
        .then((res) => {
          if (res.data.status) {
            this.$router
              .push({ name: "fees-installment" })
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
        id: this.id,
        name: this.name,
        start_month: this.start_month,
        end_month: this.end_month,
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
        .post("update-fees-installment", params)
        .then((res) => {
          if (res.data.status) {
            this.$router
              .push({ name: "fees-installment" })
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
