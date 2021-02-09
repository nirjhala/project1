<template>
    <div class="inner-page" v-if="event">
        <section id="page-header">
            <b-container>
              <h1>{{ event.name }}</h1>
            </b-container>
        </section>
        <section id="page-content" class="py-5">
            <b-container class="text-justify">
              <div class="mb-3 text-center" v-if="event.media && event.media.image_url && event.media.image_url.full">
                <img :src="event.media.image_url.full" :alt="event.name" class="mw-100">
              </div>
              <div class="mb-3">
                <i class="icon-calendar"></i> {{ event.updated_at | formatDate }}
              </div>
              <div v-html="event.description"></div>
            </b-container>
        </section>
    </div>
</template>

<script>
import { event_info } from '../../../api/script'

export default {
  data () {
    return {
      event: {}
    }
  },
  mounted () {
    this.fetchEventInfo()
  },
  methods: {
    fetchEventInfo () {
      let apiResponse = event_info(this.$route.params.slug)
      apiResponse
        .then(res => {
          this.event = res.data
        })
        .catch(err => {
          console.log('Errors: ', err)
        })
    }
  }
}
</script>
