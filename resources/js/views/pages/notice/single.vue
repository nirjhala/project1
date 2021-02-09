<template>
    <div class="inner-page" v-if="notice.id">
        <section id="page-header">
            <b-container>
              <h1>{{ notice.title }}</h1>
            </b-container>
        </section>
        <section id="page-content" class="py-5">
            <b-container class="text-justify">
              <div class="mb-2">
                <i class="icon-calendar"></i> {{ notice.updated_at | formatDate }}
              </div>
              <div
                v-if="notice.attachment_url"
                class="my-3 alert alert-dark"
              >
                <a :href="notice.attachment_url" target="_blank"><i class="icon-attachment"></i> Download / Read Attachment</a>
              </div>
              <div class="mb-2 text-info">
                {{ notice.full_title.replace(notice.title, '').trim() }}
              </div>
              <div v-html="notice.description"></div>
            </b-container>
        </section>
    </div>
</template>
<style>

</style>
<script>
import { notice_info } from '../../../api/script'
export default {
  data () {
    return {
      notice: {}
    }
  },
  mounted () {
    this.fetchNewsInfo()
  },
  methods: {
    fetchNewsInfo () {
      let apiResponse = notice_info(this.$route.params.slug)
      apiResponse
        .then(res => {
          this.notice = res.data
        })
        .catch(err => {
          console.log('Server Errors: ', err)
        })
    }
  }
}
</script>
