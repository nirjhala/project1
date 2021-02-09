<template>
    <div class="inner-page">
        <section id="page-header">
            <b-container>
              <h1>{{ news.title }}</h1>
            </b-container>
        </section>
        <section id="page-content" class="py-5">
            <b-container class="text-justify">
              <div class="mb-2">
                <i class="icon-calendar"></i> {{ news.updated_at | formatDate }}
              </div>
              <div v-html="news.description"></div>
            </b-container>
        </section>
    </div>
</template>
<style>

</style>
<script>
import {news_info} from '../../../api/script'
export default {
  data () {
    return {
      news: {}
    }
  },
  mounted () {
    this.fetchNewsInfo()
  },
  methods: {
    fetchNewsInfo () {
      let apiResponse = news_info(this.$route.params.slug)
      apiResponse
        .then(res => {
          this.news = res.data

          if(res.data.title) {
            this.items[2].text = res.data.title
          }
        })
        .catch(err => {
          console.log('Server Errors: ', err)
        })
    }
  }
}
</script>
