<template>
    <div class="inner-page">
        <section id="page-header">
            <b-container>
              <h1>Make An Admission Enquiry</h1>
              <b-breadcrumb :items="items"></b-breadcrumb>
            </b-container>
        </section>
        <section id="page-content" class="py-5">
            <b-container>
                <b-form @submit.prevent="submitForm">
                  <b-row>
                    <b-col sm="4">
                      <b-form-group
                        label="Father's Name:"
                        label-for="fatherName"
                        description=""
                      >
                        <b-form-input
                          id="fatherName"
                          v-model.trim="$v.form.father_name.$model"
                          type="text"
                          placeholder="Father's Name"
                          :state="validateState('father_name')"
                          aria-describedby="form-father_name-feedback"
                        ></b-form-input>
                        <b-form-invalid-feedback id="form-father_name-feedback">This is a required field.</b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                    <b-col sm="4">
                      <b-form-group
                        label="Mother's Name:"
                        label-for="motherName"
                        description=""
                      >
                        <b-form-input
                          id="motherName"
                          v-model.trim="$v.form.mother_name.$model"
                          type="text"
                          placeholder="Mother's Name"
                          :state="validateState('mother_name')"
                          aria-describedby="form-mothername-feedback"
                        ></b-form-input>
                        <b-form-invalid-feedback id="form-mothername-feedback">This is a required field.</b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                    <b-col sm="4">
                      <b-form-group
                        label="Student's Name:"
                        label-for="studentName"
                        description=""
                        :class="{ 'form-group--error': $v.form.name.$error }"
                      >
                        <b-form-input
                          id="studentName"
                          v-model.trim="$v.form.name.$model"
                          type="text"
                          placeholder="Student's Name"
                          :state="validateState('name')"
                        ></b-form-input>
                        <b-form-invalid-feedback>This is a required field.</b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                    <b-col sm="4">
                      <b-form-group
                        label="Date of Birth:"
                        label-for="studentDob"
                        description=""
                      >
                        <b-form-input
                          id="studentDob"
                          type="date"
                          placeholder="Date of Birth"
                          v-model.trim="$v.form.dob.$model"
                          :state="validateState('dob')"
                        ></b-form-input>
                        <b-form-invalid-feedback >This is a required field.</b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                    <b-col sm="4">
                      <b-form-group label="Gender">
                        <b-form-radio-group id="studentGender" v-model="form.gender" name="gender">
                          <b-form-radio value="Male">Male</b-form-radio>
                          <b-form-radio value="Female">Female</b-form-radio>
                          <b-form-radio value="Other">Other</b-form-radio>
                        </b-form-radio-group>
                      </b-form-group>
                    </b-col>
                    <b-col sm="4">
                      <b-form-group
                        label="Email Address:"
                        label-for="studentEmail"
                        description=""
                      >
                        <b-form-input
                          id="studentEmail"
                          v-model.trim="$v.form.email.$model"
                          type="email"
                          placeholder="Email Address"
                          :state="validateState('email')"
                        ></b-form-input>
                        <b-form-invalid-feedback>Enter valid email.</b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                    <b-col sm="4">
                      <b-form-group
                        label="Mobile Number:"
                        label-for="studentMobile"
                        description=""
                      >
                        <b-form-input
                          id="studentMobile"
                          type="tel"
                          placeholder="Mobile Number"
                          v-model.trim="$v.form.mobile.$model"
                          :state="validateState('mobile')"
                        ></b-form-input>
                        <b-form-invalid-feedback>{{ !$v.form.mobile.required ? 'This is a required field.' : 'Enter valid 10 digit mobile no.' }}</b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                    <b-col sm="4">
                      <b-form-group
                        label="Phone Number:"
                        label-for="studentPhone"
                        description=""
                      >
                        <b-form-input
                          id="studentPhone"
                          type="tel"
                          placeholder="Phone Number"
                          v-model.trim="$v.form.phone.$model"
                          :state="validateState('phone')"
                        ></b-form-input>
                        <b-form-invalid-feedback>Enter valid phone number.</b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-form-group
                    label="Residential Address"
                    label-for="studentAddress"
                  >
                    <b-form-textarea
                      id="studentAddress"
                      v-model="form.address"
                      placeholder="Enter your address"
                      rows="6"
                      max-rows="6"
                      v-model.trim="$v.form.address.$model"
                      :state="validateState('address')"
                    ></b-form-textarea>
                    <b-form-invalid-feedback>
                      <span v-if="!$v.form.address.required">This is a required field.</span>
                      <span v-if="!$v.form.address.minLength">Min. character must be {{ $v.form.address.$params.minLength }}</span>
                      <span v-if="!$v.form.address.maxLength">Max. character must be {{ $v.form.address.$params.maxLength }}</span>
                    </b-form-invalid-feedback>
                  </b-form-group>
                  <b-row>
                    <b-col sm="4">
                      <b-form-group
                        label="State:"
                        label-for="studentState"
                        description=""
                      >
                        <b-form-input
                          id="studentState"
                          type="text"
                          placeholder="State"
                          v-model.trim="$v.form.state.$model"
                          :state="validateState('state')"
                        ></b-form-input>
                        <b-form-invalid-feedback >This is a required field.</b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                    <b-col sm="4">
                      <b-form-group
                        label="City:"
                        label-for="studentCity"
                        description=""
                      >
                        <b-form-input
                          id="studentCity"
                          type="text"
                          placeholder="City"
                          v-model.trim="$v.form.city.$model"
                          :state="validateState('city')"
                        ></b-form-input>
                        <b-form-invalid-feedback >This is a required field.</b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                    <b-col sm="4">
                      <b-form-group
                        label="Postal Code:"
                        label-for="studentPostcode"
                        description=""
                      >
                        <b-form-input
                          id="studentPostcode"
                          type="tel"
                          placeholder="Postal Code"
                          v-model.trim="$v.form.postcode.$model"
                          :state="validateState('postcode')"
                        ></b-form-input>
                        <b-form-invalid-feedback>
                          <span v-if="!$v.form.postcode.required">This is a required field.</span>
                          <span v-if="!$v.form.postcode.isPincode">Enter valid 6 digit postcode</span>
                        </b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-button type="submit" variant="primary">Submit <i class="icon-long-arrow-right"></i></b-button>
                </b-form>
            </b-container>
        </section>
    </div>
</template>
<style>

</style>
<script>
import api from '../../../api/script'

import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      items: [
        {
          text: 'Home',
          to: { name: 'Homepage' }
        },
        {
          text: 'Make An Admission Enquiry',
          active: true
        }
      ],
      form: {
        name: '',
        father_name: '',
        mother_name: '',
        dob: '',
        gender: 'Male',
        email: '',
        mobile: '',
        phone: '',
        address: '',
        state: '',
        city: '',
        postcode: ''
      },
      sessions: [
        {
          text: 'Select Year',
          value: ''
        },
        '2020-21'
      ],
      classes: [
        {
          text: 'Select Class',
          value: ''
        },
        {
          text: 'I',
          value: 1
        },
        {
          text: 'II',
          value: 2
        }
      ],
      loading: 0
    }
  },
  validations: {
    form: {
      father_name: {
        required
      },
      mother_name: {
        required
      },
      name: {
        required
      },
      dob: {
        required
      },
      email: {
        email
      },
      mobile: {
        required,
        mobileNo (mobile) {
          return (
            /[0-9]/.test(mobile) &&
            mobile.length == 10
          )
        },
        maxLength: maxLength(10)
      },
      phone: {
        isNum (phone) {
          return (
            phone.length == 0 ||
            /[0-9]{7,}/.test(phone)
          )
        }
      },
      address: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(160)
      },
      state: {
        required
      },
      city: {
        required
      },
      postcode: {
        required,
        isPincode (postcode) {
          return (
            postcode.length == 0 ||
            (postcode.length == 6 &&
            /[0-9]/.test(postcode))
          )
        }
      }
    }
  },
  methods: {
    validateState (name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    submitForm () {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return false
      } else {
        this.loading = true

        api.addAdmissionEnquiry({ record: this.form })
          .then((res) => {

          })

      }
    }
  }
}
</script>
