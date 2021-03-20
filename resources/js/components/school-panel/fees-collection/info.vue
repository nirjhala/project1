<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
      <h3>Fees Summary</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'FeeMaster' }">Fees Management</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'fees-collection' }"
            >Fees Collection</router-link
          >
        </li>
        <li>Fees Summary</li>
      </ul>
    </div>
    <!-- Breadcrumbs Area End Here -->

    <!-- Table Area Start Here -->
    <div class="card height-auto mb-3">
      <div class="card-body">
        <div class="text-center" v-if="!loaded">
          <b-spinner></b-spinner>
        </div>
        <div v-if="loaded">
          <div class="heading-layout1">
            <div class="item-title">
              <h3>Student Info</h3>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table table-bordered">
              <tr>
                <th>Name</th>
                <td>{{ user_info.name }}</td>
                <td
                  colspan="2"
                  rowspan="4"
                  class="text-center"
                  style="width: 100px"
                >
                  <div><strong>Photograph</strong></div>
                  <img
                    :src="user_info.picture"
                    alt=""
                    style="max-width: 100px"
                  />
                </td>
              </tr>
              <tr>
                <th>Father Name</th>
                <td>{{ user_info.student_data.father_info.name }}</td>
              </tr>
              <tr>
                <th>Enrollment No.</th>
                <td>{{ user_info.student_data.reg_no }}</td>
              </tr>
              <tr>
                <th>Admission Type</th>
                <td>
                  <label>
                    <input
                      type="radio"
                      v-model="admission_type"
                      value="New"
                      @change="calcInstallments()"
                    />
                    New
                  </label>
                  <label>
                    <input
                      type="radio"
                      v-model="admission_type"
                      value="Old"
                      @change="calcInstallments()"
                    />
                    Old
                  </label>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="card height-auto mb-3">
      <div class="card-body">
        <div class="text-center" v-if="!loaded">
          <b-spinner></b-spinner>
        </div>
        <div v-if="loaded">
          <div class="heading-layout1">
            <div class="item-title">
              <h3>Fees Setting</h3>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Fees Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(ft, i) in fees_lists" :key="i">
                  <td>{{ ft.ftype.name }}</td>
                  <td>
                    {{ fee_amount[ft.id] }}
                  </td>
                  <td>
                    <label class="switch">
                      <input
                        type="checkbox"
                        v-model="fees_include"
                        :value="ft.id"
                        @change="calcInstallments()"
                      />
                      <span class="slider round"></span>
                    </label>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th>Total Amount</th>
                  <td colspan="2">
                    {{ total_fees }}
                  </td>
                </tr>
                <tr>
                  <th>No. Of Installments</th>
                  <td colspan="2">
                    <select
                      v-model="no_of_installments"
                      class="form-control"
                      @change="calcInstallments()"
                    >
                      <option :value="i" v-for="i in 10" :key="i">
                        {{ i }}
                      </option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>Discount</th>
                  <td colspan="2">
                    <input
                      type="number"
                      v-model="discount"
                      class="form-control"
                      @change="calcInstallments()"
                    />
                  </td>
                </tr>
                <tr>
                  <th>Final Amount</th>
                  <td colspan="2">
                    {{ final_total }}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="card height-auto mb-3" v-if="no_of_installments">
      <div class="card-body">
        <div>
          <div class="heading-layout1">
            <div class="item-title">
              <h3>Fees Installments</h3>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Installment</th>
                  <th>Amount</th>
                  <th>Payment Month</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="num in no_of_installments" :key="num">
                  <td>Installment {{ num }}</td>
                  <td>₹ {{ installment_amount[num] }}</td>
                  <td>
                    <select v-model="payement_month[num]" class="form-control">
                      <option value="">Select Month</option>
                      <option :value="m" v-for="m in 12" :key="m">
                        {{ m }}
                      </option>
                    </select>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th>Total Amount</th>
                  <td colspan="2">₹ {{ final_total }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="text-center">
            <button
              type="button"
              class="btn btn-success"
              @click="saveInstallments()"
            >
              Save &amp; Submit
            </button>
          </div>
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
      user_info: {},
      no_of_installments: 1,
      admission_type: "New",
      fees_lists: [],
      fees_include: [],
      installment_amount: [],
      payement_month: [],
      errors: [],
      discount: 0,
      loaded: 0,
      token: localStorage.getItem("token"),
    };
  },
  computed: {
    fee_amount() {
      let feeAmt = [];
      let self = this;
      self.fees_lists.forEach(function (row, i) {
        feeAmt[row.id] =
          self.admission_type == "New" ? row.fees_for_new : row.fees_for_old;
      });

      return feeAmt;
    },
    total_fees() {
      let self = this;
      let total = 0;
      self.fees_include.forEach(function (row, i) {
        total += parseFloat(self.fee_amount[row]);
      });
      return total;
    },
    final_total() {
      return this.total_fees - this.discount;
    },
  },
  mounted() {
    let params = this.$route.params;

    if (params.id != undefined && params.id != "") {
      this.getInfo(params.id);
    }
  },
  methods: {
    calcInstallments() {
      let feeAmt = 0;
      let extraAmt = 0;
      let self = this;
      self.fees_lists.forEach(function (row, i) {
        feeAmt =
          self.admission_type == "New" ? row.fees_for_new : row.fees_for_old;
        if (
          row.ftype.installment_availability == 0 &&
          self.fees_include.includes(row.id)
        ) {
          extraAmt += parseFloat(feeAmt);
        }
      });

      // Installments
      let avg_emi = (this.final_total - extraAmt) / this.no_of_installments;
      let installment_amount = [];
      let payement_month = [];
      for (let num = 1; num <= this.no_of_installments; num++) {
        installment_amount[num] = avg_emi;
        if (num == 1) {
          installment_amount[num] += parseFloat(extraAmt);
        }
        installment_amount[num] = Math.round(installment_amount[num]);
        payement_month[num] = this.payement_month[num]
          ? this.payement_month[num]
          : "";
      }

      this.installment_amount = installment_amount;
      this.payement_month = payement_month;
    },
    getInfo(id) {
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.get(`fees/info/student/${id}`).then((res) => {
        let self = this;
        let list = res.data;
        self.user_info = list.user_info;
        self.fees_lists = list.fees_lists;

        if (list.fees_str) {
          self.id = list.fees_str.id;
          self.fees_include = list.fees_str.fees_types;
          self.admission_type = list.fees_str.admission_type;
          self.discount = list.fees_str.discount;
          self.no_of_installments = list.fees_str.installments_count;

          let monthArr = {};
          list.fees_str.installments.forEach(function (row, i) {
            monthArr[i + 1] = row.month;
          });
          self.payement_month = monthArr;
        }

        self.calcInstallments();

        this.loaded = 1;
        $(".select2").each(function () {
          $(this).trigger("change");
        });
      });
    },
    saveInstallments: function () {
      let params = {
        sid: this.user_info.id,
        fees_types: this.fees_include,
        admission_type: this.admission_type,
        total_installments: this.no_of_installments,
        discount: this.discount,
        total_amount: this.total_fees,
        payement_month: this.payement_month, // Installments
        installment_amount: this.installment_amount,
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
        .post("fees-structure/" + this.id, params)
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
