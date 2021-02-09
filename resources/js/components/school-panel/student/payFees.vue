<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <h3>Pay Fee</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'StudentMaster' }">Student Master</router-link>
                </li>
                <li>Pay Fee</li>
            </ul>
        </div>
        <!-- Breadcubs Area End Here -->

        <!-- Lists Students -->
        <b-row
            v-if="lists.length"
        >
            <b-col
                sm="8"
            >
                <b-card
                    header="Fees Summary"
                >
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>FEES AMOUNT</th>
                                    <th>MONTH</th>
                                    <th>Pay Status</th>
                                    <th>Paid Amount</th>
                                    <th>Due Amount</th>
                                    <th>Penalty</th>
                                    <th>Due Penalty</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(s,i) in lists" :key="i" :class="s.pay_status == 'paid' ? 'bg-success text-white' : 'bg-danger text-white'">
                                    <td>{{ i + 1 }}</td>
                                    <td>₹ {{ s.amount }}</td>
                                    <td>{{ s.month }}</td>
                                    <td>
                                        {{ s.pay_status }}
                                    </td>
                                    <td>{{ s.paid_amount }}</td>
                                    <td>{{ s.amount - s.paid_amount }}</td>
                                    <td>{{ s.penalty_amount }}</td>
                                    <td>{{ s.penalty_amount - s.paid_penalty }}</td>
                                </tr>
                                <tr>
                                    <th colspan="6">
                                        TOTAL DUE FEES AMOUNT
                                    </th>
                                    <th colspan="2">₹ {{ totalFees }}</th>
                                </tr>
                                <tr>
                                    <th colspan="6">
                                        <span class="float-right">(+)</span>
                                        TOTAL PENALTY AMOUNT (due to late fees)
                                    </th>
                                    <th colspan="2">₹ {{ penaltyAmt }}</th>
                                </tr>
                                <tr>
                                    <th colspan="6">
                                        TOTAL PAYABLE AMOUNT
                                    </th>
                                    <th colspan="2">₹ {{ totalFees + penaltyAmt }}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </b-card>
            </b-col>
            <b-col
                sm="4"
            >
                <b-card
                    header="Pay Fees"
                >
                    <b-form>
                        <b-form-group
                            label="Amount"
                        >
                            <b-input
                                type="number"
                                min="1"
                                :max="totalFees"
                                v-model="amount"
                                @focus="$event.target.select()"
                                placeholder="Enter Fees Amount"
                            ></b-input>
                        </b-form-group>
                        <b-form-group
                            label="Penalty Amount"
                        >
                            <b-input
                                type="number"
                                min="0"
                                :max="penaltyAmt"
                                v-model="penalty_amount"
                                @focus="$event.target.select()"
                                placeholder="Enter Penalty Amount"
                            ></b-input>
                        </b-form-group>
                        <b-form-group>
                            <b-button
                                block
                                v-if="amount > 0 || penalty_amount > 0"
                                class="fw-btn-fill btn-gradient-yellow text-white"
                                @click="payFees"
                            >Pay Now</b-button>
                        </b-form-group>
                    </b-form>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import api, { pay_student_fees, view_fee_setting } from '../../../api/script'

const d = new Date()
const current_year = d.getFullYear()

export default {
    data() {
        return {
            errors: 0,
            lists: [],
            fee_setting: {},
            loaded: 0,
            amount: 0,
            penalty_amount: 0
        }
    },
    computed: {
        totalFees () {
            let total = 0
            this.lists.forEach(row => {
                if(row.pay_status == 'due') {
                    total += parseFloat(row.amount - row.paid_amount)
                }
            })
            return total
        },
        penaltyAmt () {
            let total = 0
            this.lists.forEach((row, index) => {
                if(row.pay_status == 'paid') {
                    total += parseFloat(row.penalty_amount - row.paid_penalty)
                } else {
                    let penalty_amt = 0,
                        month       = row.month > 9 ?  `0${row.month}` : row.month,
                        date        = row.month > 3 
                            ? new Date(current_year, (row.month - 1), this.fee_setting.fee_day)
                            : new Date((current_year + 1), (row.month - 1), this.fee_setting.fee_day),
                        late = 0

                        switch (this.fee_setting.penalty_type) {
                            case 'daily':
                                late = Math.round( (d - date) /  (24 * 60 * 60 * 1000))
                                break;

                            case 'weekly':
                                late = Math.round( (d - date) /  (7 * 24 * 60 * 60 * 1000))
                                break;

                            case 'monthly':
                                late = this.monthDiff(d, date)
                                break;
                        }

                        late = late > 0 ? late : 0
                        this.lists[index].penalty_amount = this.fee_setting.penalty_amount * late
                        total += this.lists[index].penalty_amount
                }
            })
            
            return total
        }
    },
    mounted() {
        this.getLists()
    },
    methods: {
        monthDiff (d2, d1) {
            var months;
            months = (d2.getFullYear() - d1.getFullYear()) * 12;
            months -= d1.getMonth();
            months += d2.getMonth();
            if(d2.getDate() < d1.getDate()) month--
            return months <= 0 ? 0 : months;
        },
        getLists () {
            this.loaded = 0;

            view_fee_setting()
                .then(res => {
                    this.fee_setting = res.data
                })

            let apiResponse = api.studentFees(this.$route.params.id)
                apiResponse
                    .then((res) => {
                        setTimeout(() => {
                            this.lists = res.data
    
                            this.amount         = this.totalFees
                            this.penalty_amount = this.penaltyAmt
                        }, 300);
                    })
                    .catch((err) => {
                        console.log('Errors: ', err)
                    })
        },
        payFees() {
            let amount = this.amount

            let installment_penalty = {}
            this.lists.forEach(row => {
                installment_penalty[row.id] = row.penalty_amount - row.paid_penalty
            })

            if((amount && amount > 0) || (this.penalty_amount || this.penalty_amount > 0)) {
                pay_student_fees(
                    {
                        sid: this.$route.params.id,
                        amount: this.amount, 
                        penalty_amount: this.penalty_amount,
                        installment_penalty: installment_penalty
                    }
                )
                    .then(res => {
                        this.$toast.success(res.message)
                        this.getLists()
                    })
            }
        }
    },
    watch: {
        amount (amt) {
            if(parseFloat(amt) > parseFloat(this.totalFees)) {
                setTimeout(() => {
                    this.amount = parseFloat(this.totalFees)
                }, 1);
            }
            if(this.totalFees > 0 && amt < this.totalFees) {
                setTimeout(() => {
                    this.penalty_amount = 0
                }, 1);
            } else if(amt == this.totalFees && this.penalty_amount == 0) {
                this.penalty_amount = this.penaltyAmt
            }
        },
        penalty_amount (amt) {
            if(parseFloat(amt) > parseFloat(this.penaltyAmt)) {
                setTimeout(() => {
                    this.penalty_amount = parseFloat(this.penaltyAmt)
                }, 1);
            }
        }
    }
}
</script>
