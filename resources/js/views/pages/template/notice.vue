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
              <b-card
                no-body
                :header="date"
                v-for="(notice, date) in notices"
                :key="date"
              >
                <b-list-group flush>
                  <b-list-group-item
                    v-for="(n, index) in notice"
                    :key="index"
                  >
                    <router-link
                      :to="{
                        name: 'NoticeDetails',
                        params: {
                          slug: n.slug
                        }
                      }"
                    ><strong>{{ `${index + 1}. ${n.full_title}` }}</strong></router-link>
                    <div><small>{{ n.updated_at | formatDate }}</small></div>
                  </b-list-group-item>
                </b-list-group>
              </b-card>
            </b-container>
        </section>
    </div>
</template>
<style>
.notices-box {
  border: 1px solid #ccc;
  border-radius: 3px;
}
</style>
<script>
import { view_all_notices } from '../../../api/script'

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
      notices: {}
    }
  },
  mounted () {
    this.items[1].text = this.page.title

    this.fetchNotices()
  },
  methods: {
    fetchNotices () {
      let apiResponse = view_all_notices()
      apiResponse
        .then(res => {
          this.notices = res.data
        })
        .catch(err => {
          console.log('Server Error: ', err)
        })
    }
  }
}
</script>
