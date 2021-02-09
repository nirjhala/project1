<template>
    <div class="inner-page">
        <section id="page-header">
            <b-container>
              <h1>{{ page.title }}</h1>
              <b-breadcrumb :items="items"></b-breadcrumb>
            </b-container>
        </section>
        <section id="page-content" class="py-5">
            <b-container>
              <b-row v-if="news.data && news.data.length">
                <b-col sm="6" v-for="(n, i) in news.data" :key="i">
                  <div class="mb-4 p-3 news-box">
                    <h3>{{ n.title }}</h3>
                    <div class="mb-3">
                      <i class="icon-calendar"></i> {{ n.updated_at | formatDate }}
                    </div>
                    <p class="text-justify">
                      Suspendisse feugiat massa vel arcu convallis pulvinar sed non orci. Suspendisse hendrerit quis diam dictum pretium. Cras blandit, libero non bibendum congue, elit purus tincidunt lacus, et ultrices lacus odio sed dui. Sed pellentesque lobortis est. [&hellip;]
                    </p>
                    <router-link :to="{ name: 'NewsDetails', params: { slug: n.slug } }" class="btn btn-primary btn-sm">View Details <i class="icon-long-arrow-right"></i></router-link>
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
import { view_news } from '../../../api/script'

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
      news: {}
    }
  },
  mounted () {
    this.items[1].text = this.page.title

    this.fetchNews()
  },
  methods: {
    fetchNews (page = 1) {
      let apiResponse = view_news(page)
      apiResponse
        .then(res => {
          this.news = res.data
        })
        .catch(err => {
          console.log('Server Error: ', err)
        })
    }
  }
}
</script>
