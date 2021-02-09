<template>
    <div class="inner-page">
        <section id="page-header">
            <b-container>
              <h1>{{ page.title }}</h1>
              <b-breadcrumb 
                :items="items"
              ></b-breadcrumb>
            </b-container>
        </section>
        <section id="page-content" class="py-5">
            <b-container>
              <div
                class="alert alert-danger"
                v-if="error"
              >
                {{ error }}
              </div>
              <b-row>
                <b-col 
                  sm="5"
                  lg="4"
                  class="mx-auto"
                >
                  <b-form-group
                    label="Select Exam"
                  >
                    <select
                      v-model.trim="$v.exam_type_id.$model"
                      class="form-control"
                      :class="{
                        'is-invalid': $v.exam_type_id.$error
                      }"
                    >
                      <option value="">Select Exam</option>
                      <option 
                        :value="id"
                        v-for="(name, id) in exam_types"
                        :key="id"
                      >{{ name }}</option>
                    </select>
                    <b-form-invalid-feedback>Please select exam.</b-form-invalid-feedback>
                  </b-form-group>
                  <b-form-group
                    label="Enter Roll No."
                  >
                    <b-input
                      v-model.trim="$v.roll_no.$model"
                      placeholder="Enter Roll No."
                      :class="{
                        'is-invalid': $v.roll_no.$error
                      }"
                    ></b-input>
                    <b-form-invalid-feedback>Please enter roll no.</b-form-invalid-feedback>
                  </b-form-group>
                  <div
                    class="text-center"
                  >
                    <b-button
                      variant="primary"
                      block
                      @click="searchAdmitCard"
                      :disabled="loading"
                    >SUBMIT</b-button>
                  </div>
                </b-col>
              </b-row>
            </b-container>
        </section>
    </div>
</template>
<style>
.news-box {
  border: 1px solid #ccc;
  border-radius: 3px;
}
</style>
<script>
import { required } from 'vuelidate/lib/validators'
import { search_admit_card, view_news, view_web_exam_type } from '../../../api/script'

export default {
  props: [
    'page'
  ],
  data () {
    return {
      items: [
        {
          text: 'Home',
          to: { name: 'Homepage' }
        },
        {
          text: 'News',
          active: true
        }
      ],
      exam_type_id: '',
      roll_no: '',
      exam_types: {},
      error: null,
      loading: false
    }
  },
  validations: {
    exam_type_id: {
      required
    },
    roll_no: {
      required
    }
  },
  mounted () {
    this.items[1].text = this.page.title

    this.fetchExams()
  },
  methods: {
    fetchExams () {
      view_web_exam_type ('type=all')
        .then(res => {
          this.exam_types = res.data.types
        })
        .catch(err => {
          console.log('Server Error: ', err)
        })
    },
    searchAdmitCard () {
      this.error = null
      this.$v.$touch()

      if(!this.$v.$anyError)
      {
        let data = {
          exam_type_id: this.exam_type_id,
          roll_no: this.roll_no
        }

        search_admit_card (data)
          .then(res => {
            window.open(`${baseURL}api/admit-card/${res.data.exam_type_id}/${res.data.user_id}`)
            this.loading = false
          })
          .catch(err => {
            this.error = 'Admit card not available, please re-check your information'
            this.loading = false
          })
      }
    }
  }
}
</script>
