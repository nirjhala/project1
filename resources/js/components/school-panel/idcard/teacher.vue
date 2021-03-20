<template>
  <div class="dashboard-content-one">
    <!-- Breadcubs Area Start Here -->
    <div class="breadcrumbs-area">
      <h3>Teacher Id-Card</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>Teacher Id-Card</li>
      </ul>
    </div>
    <!-- Breadcubs Area End Here -->

    <!-- Teacher Table Area Start Here -->
    <form method="post">
      <div class="card height-auto">
        <div id="divToPrint">
          <div class="text-center" v-if="!loaded">
            <b-spinner></b-spinner>
          </div>
          <div
            v-if="loaded"
            style="
              margin-left: auto;
              margin-right: auto;
              display: flex;
              flex-wrap: wrap;
            "
          >
            <div
              :style="
                i % 5 == 0
                  ? 'margin: 0px 5px; width: calc(20% - 10px); page-break-after: always'
                  : 'margin: 0px 5px; width: calc(20% - 10px);'
              "
              v-for="(s, i) in teachers"
            >
              <div v-if="i % 6 == 0" style="page-break-before: always"></div>
              <div
                style="
                  border-radius: 8px;
                  background-color: #fff;
                  height: 338.67px;
                  width: 212.67px;
                  position: relative;
                  overflow: hidden;
                  margin: auto;
                "
              >
                <div class="">&nbsp;</div>
                <div
                  style="
                    background: #2980b9;
                    padding: 5px 10px;
                    margin: 10px 0 20px 0;
                    position: relative;
                    color: #fff;
                  "
                >
                  <div
                    style="
                      position: absolute;
                      width: 60px;
                      height: 60px;
                      top: 50%;
                      transform: translateY(-50%);
                      background: #fff;
                      border: 1px solid #ccc;
                      border-radius: 50%;
                    "
                  >
                    <img
                      :src="logo_src"
                      alt=""
                      style="width: 100%; height: 100%; object-fit: contain"
                    />
                  </div>
                  <div
                    style="
                      font-size: 0.6em;
                      padding-left: 60px;
                      font-weight: bold;
                      text-align: center;
                      text-transform: uppercase;
                    "
                  >
                    {{ s.parent_school.school_data.name }}
                  </div>
                </div>
                <div style="text-align: center">
                  <strong><u>ID-CARD</u></strong>
                </div>
                <div
                  style="
                    width: 90px;
                    height: 100px;
                    border: 1px solid #ccc;
                    border-radius: 10px;
                    overflow: hidden;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 2;
                    background: #fff;
                  "
                >
                  <img
                    :src="s.picture"
                    alt=""
                    style="width: 100%; height: 100%; object-fit: cover"
                  />
                </div>

                <div
                  style="
                    background: #2980b9;
                    color: #fff;
                    padding: 15px;
                    padding-top: 55px;
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    top: 50%;
                    z-index: 1;
                    font-size: 0.5em;
                  "
                >
                  <table
                    style="
                      width: 100%;
                      font-size: 8px;
                      color: #fff;
                      text-transform: uppercase;
                    "
                  >
                    <tr>
                      <th width="40%" style="text-align: left">NAME</th>
                      <td>: {{ s.name }}</td>
                    </tr>
                    <tr>
                      <th style="text-align: left">DESIGNATION</th>
                      <td>: Teacher</td>
                    </tr>
                    <tr>
                      <th style="text-align: left">CONTACT</th>
                      <td>: {{ s.mobile }}</td>
                    </tr>
                    <tr>
                      <th style="text-align: left">DOB</th>
                      <td>: {{ s.dob }}</td>
                    </tr>
                    <tr>
                      <th colspan="2" valign="top" style="text-align: center">
                        ADDRESS
                      </th>
                    </tr>
                    <tr>
                      <td style="text-align: center" colspan="2">
                        {{ s.full_address }}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>

              <!-- Seperator -->
              <div style="margin: 50px 0; border-top: 1px solid #000"></div>

              <div
                style="
                  border-radius: 8px;
                  background: #fff;
                  height: 338.67px;
                  width: 212.67px;
                  position: relative;
                  overflow: hidden;
                  margin: auto;
                "
              >
                <div class="">&nbsp;</div>
                <div
                  style="
                    background: #2980b9;
                    padding: 5px 10px;
                    margin: 10px 0 20px 0;
                    position: relative;
                    color: #fff;
                  "
                >
                  <div
                    style="
                      position: absolute;
                      width: 60px;
                      height: 60px;
                      top: 50%;
                      transform: translateY(-50%);
                      background: #fff;
                      border: 1px solid #ccc;
                      border-radius: 50%;
                    "
                  >
                    <img
                      :src="logo_src"
                      alt=""
                      style="width: 100%; height: 100%; object-fit: contain"
                    />
                  </div>
                  <div
                    style="
                      font-size: 0.6em;
                      padding-left: 60px;
                      font-weight: bold;
                      text-align: center;
                      text-transform: uppercase;
                    "
                  >
                    {{ s.parent_school.school_data.name }}
                  </div>
                </div>
                <div style="text-align: center">
                  <strong><u>TERMS</u></strong>
                </div>

                <ul
                  style="
                    font-size: 10px;
                    list-style: inside disc;
                    padding: 5px 15px;
                  "
                >
                  <li
                    v-for="ins in s.parent_school.school_data
                      .teacher_id_instructions"
                  >
                    {{ ins }}.
                  </li>
                </ul>

                <div style="text-align: center">
                  <div>
                    <img :src="s.barcode_image" alt="" />
                  </div>
                  <div
                    style="letter-spacing: 5px; font-size: 8px; margin: 2px 0"
                  >
                    {{ s.barcode }}
                  </div>
                </div>

                <div
                  style="
                    background: #2980b9;
                    color: #fff;
                    padding: 5px 10px;
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 1;
                  "
                ></div>
              </div>
            </div>
            <div style="clear: both"></div>
          </div>
        </div>
        <div>
          <button type="button" v-on:click="printIdCards()" class="btn-main">
            Print
          </button>
        </div>
      </div>
      <!-- Teacher Table Area End Here -->
    </form>
  </div>
</template>
<script>
import _ from "lodash";

var user_info = localStorage.getItem("user_info");
user_info = JSON.parse(user_info);

export default {
  data() {
    return {
      errors: 0,
      teachers: [],
      lists: [],
      s: "",
      user_info: user_info,
      logo_src: baseURL + "img/logo.png",
      loaded: 0,
      token: localStorage.getItem("token"),
    };
  },
  mounted() {
    this.getTeachers();

    if (user_info.school_data && user_info.school_data.logo) {
      this.logo_src =
        this.baseURL + "img/profiles/" + user_info.school_data.logo;
    }
  },
  methods: {
    printIdCards() {
      let divToPrint = document.getElementById("divToPrint");

      let newWin = window.open("", "Time-Table", "width=800,height=600");

      newWin.document.open();
      let html = `
            <html>
                <head>
                    <title>ID-CARD</title>
                    <style>
                    body {
                        margin:0;
                        font-family: sans-serif;
                        background: #ebebeb;
                    }
                    @page {
                        size: A4 landscape;
                        margin: 0;
                    }
                    </style>
                </head>
                <body onload="window.print()">${divToPrint.innerHTML}</body>
            </html>`;
      newWin.document.write(html);

      newWin.document.close();

      setTimeout(function () {
        newWin.close();
      }, 10);
    },
    getTeachers() {
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance
        .get("get-teachers")
        .then((res) => {
          this.loaded = 1;
          if (res.status) {
            this.teachers = res.data;
          } else {
            this.errors = 1;
          }
        })
        .catch((err) => {
          this.loaded = 1;
          console.log(err);
        });
    },
    deleteRecord() {
      let params = {
        check: this.check,
      };
      var parent = $(this).closest("form");

      if (this.check.length > 0) {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this record!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            this.loaded = 0;
            let instance = axios.create({
              baseURL: this.apiBaseUrl,
              headers: {
                Authorization: "Bearer " + this.token,
                Accept: "application/json",
              },
            });
            instance
              .post("remove-vehicle", params)
              .then((res) => {
                if (res.status) {
                  this.getRecords();
                  this.$toast.success("Selected record(s) has been deleted.");
                } else {
                  this.loaded = 1;
                  this.$toast.warning("Record(s) unable to delete.");
                }
              })
              .catch((err) => {
                this.loaded = 1;
                console.log(err);
              });
          }
        });
      } else {
        this.loaded = 1;
        swal(
          "Warning",
          "Please select at least one record to delete.",
          "warning"
        );
        return false;
      }
    },
  },
};
</script>
