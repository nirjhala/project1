<template>
    <div class="inner-page">
        <section id="page-header">
            <b-container>
              <h1>{{ page.title }}</h1>
              <b-breadcrumb :items="items"></b-breadcrumb>
            </b-container>
        </section>
        <section id="page-content" class="py-5">
            <b-container class="text-justify">
              <b-row>
                <b-col sm="6">
                  <b-form-group
                    label="Full Name"
                  >
                    <b-form-input
                      v-model="form.name"
                      placeholder="Enter Full Name"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    label="Mobile No."
                  >
                    <b-form-input
                      type="tel"
                      v-model="form.mobile"
                      placeholder="Enter Mobile No."
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    label="Email Address"
                  >
                    <b-form-input
                      type="email"
                      v-model="form.email"
                      placeholder="Enter Email Address"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    label="Subject"
                  >
                    <b-form-input
                      v-model="form.name"
                      placeholder="Enter Subject"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col sm="6">
                  
                  <b-form-group
                    label="Message"
                  >
                    <b-form-textarea
                      v-model="form.message"
                      placeholder="Enter Message"
                      style="height: 293px;"
                    ></b-form-textarea>
                  </b-form-group>
                </b-col>
              </b-row>
              <div class="text-right">
                <b-button variant="primary">Send <i class="icon-long-arrow-right"></i></b-button>
              </div>
            </b-container>
        </section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57252.5276478356!2d72.96196061056163!3d26.25247780445193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1603799512259!5m2!1sen!2sin" class="w-100" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
</template>
<style>

</style>
<script>
export default {
  props: ['page'],
  data () {
    return {
      items: [
        {
          text: 'Home',
          to: { name: 'Homepage' }
        },
        {
          text: '',
          active: true
        }
      ],
      form: {
        name: '',
        mobile: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  mounted () {
    this.items[1].text = this.page.title
  },
  methods: {
    submitForm () {
      console.log('hello')
    }
  }
}
</script>
