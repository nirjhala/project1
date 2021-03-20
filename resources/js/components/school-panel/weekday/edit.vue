<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
      <h3>Week Day Setting</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>Week Day Setting</li>
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
            @submit.prevent="id ? updateData() : addSession()"
          >
            <div class="alert alert-danger" v-if="errors.length">
              <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">
                  {{ error }}
                </li>
              </ul>
            </div>
            <ul class="list-group">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-4 text-center">
                    <label class="switch">
                      <input
                        type="checkbox"
                        v-model="Monday"
                        value="Y"
                        @change="updateWeekday()"
                      />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <div class="col-8">Monday</div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-4 text-center">
                    <label class="switch">
                      <input
                        type="checkbox"
                        v-model="Tuesday"
                        value="Y"
                        @change="updateWeekday()"
                      />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <div class="col-8">Tuesday</div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-4 text-center">
                    <label class="switch">
                      <input
                        type="checkbox"
                        v-model="Wednesday"
                        value="Y"
                        @change="updateWeekday()"
                      />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <div class="col-8">Wednesday</div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-4 text-center">
                    <label class="switch">
                      <input
                        type="checkbox"
                        v-model="Thursday"
                        value="Y"
                        @change="updateWeekday()"
                      />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <div class="col-8">Thursday</div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-4 text-center">
                    <label class="switch">
                      <input
                        type="checkbox"
                        v-model="Friday"
                        value="Y"
                        @change="updateWeekday()"
                      />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <div class="col-8">Friday</div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-4 text-center">
                    <label class="switch">
                      <input
                        type="checkbox"
                        v-model="Saturday"
                        value="Y"
                        @change="updateWeekday()"
                      />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <div class="col-8">Saturday</div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-4 text-center">
                    <label class="switch">
                      <input
                        type="checkbox"
                        v-model="Sunday"
                        value="N"
                        @change="updateWeekday()"
                      />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <div class="col-8">Sunday</div>
                </div>
              </li>
            </ul>
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
      id: "",
      className: "",
      classDept: "",
      errors: [],
      loaded: 0,
      departments: [],
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      Thursday: "",
      Friday: "",
      Saturday: "",
      Sunday: "",
      token: localStorage.getItem("token"),
    };
  },
  mounted() {
    let params = this.$route.params;
    this.getInfo();
  },
  methods: {
    updateWeekday() {
      let params = {
        input: {
          Monday: this.Monday,
          Tuesday: this.Tuesday,
          Wednesday: this.Wednesday,
          Thursday: this.Thursday,
          Friday: this.Friday,
          Saturday: this.Saturday,
          Sunday: this.Sunday,
        },
      };
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.post("save-weekday", params).then((res) => {
        console.log("saved.");
      });
    },
    getInfo() {
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.get("weekday-info").then((res) => {
        this.Monday = res.data.Monday == "Y" ? true : false;
        this.Tuesday = res.data.Tuesday == "Y" ? true : false;
        this.Wednesday = res.data.Wednesday == "Y" ? true : false;
        this.Thursday = res.data.Thursday == "Y" ? true : false;
        this.Friday = res.data.Friday == "Y" ? true : false;
        this.Saturday = res.data.Saturday == "Y" ? true : false;
        this.Sunday = res.data.Sunday == "Y" ? true : false;

        this.loaded = 1;

        $(".select2").each(function () {
          $(this).trigger("change");
        });
      });
    },
    updateData: function () {
      let params = {
        id: this.id,
        name: this.className,
        department: this.classDept,
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
        .post("update-class", params)
        .then((res) => {
          if (res.data.status) {
            this.$router
              .push({
                name: "class",
              })
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
  },
};
</script>
