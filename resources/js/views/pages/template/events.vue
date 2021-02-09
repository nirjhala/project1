<template>
    <div class="inner-page">
        <section id="page-header">
            <b-container>
              <h1>{{ page.title }}</h1>
              <b-breadcrumb :items="items"></b-breadcrumb>
            </b-container>
        </section>
        <section id="page-content" class="py-5">
            <b-container v-if="events.data && events.data.length">
              <b-row>
                <b-col sm="4" v-for="(e, i) in events.data" :key="i">
                  <b-card
                    :title="e.name"
                    :img-src="e.media && e.media.image_url ? e.media.image_url.medium : null"
                    img-alt="Image"
                    img-top
                    tag="article"
                    class="mb-4"
                  >
                    <div class="mb-3">
                      <i class="icon-calendar"></i> {{ e.updated_at | formatDate }}
                    </div>
                    <b-card-text>
                      {{ e.short_description }}
                    </b-card-text>
                    <router-link class="btn btn-block btn-primary" :to="{ name: 'EventDetails', params: { slug: e.slug } }">View Details <i class="icon-long-arrow-right"></i></router-link>
                  </b-card>
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
.card-img-top {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
</style>
<script>
import { view_events } from '../../../api/script'

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
          text: 'Events',
          active: true
        }
      ],
      events: {}
    }
  },
  mounted () {
    this.items[1].text = this.page.title
    this.fetchEvents()
  },
  methods: {
    fetchEvents (page = 1) {
      let apiResponse = view_events(page)
      apiResponse
        .then(res => {
          this.events = res.data
        })
    }
  }
}
</script>
