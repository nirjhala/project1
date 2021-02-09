<template>
    <component :is="currentPage" :page="page" v-if="currentPage" />
</template>
<script>
import api from "../../api/script"

const PageTemplate = () => import("./template/page")
const HomepageTemplate = () => import("./homepage")
const NewsTemplate = () => import("./template/news")
const EventsTemplate = () => import("./template/events")
const GalleryTemplate = () => import("./template/imageGallery")
const VideoGalleryTemplate = () => import("./template/videoGallery")
const AdmissionTemplate = () => import("./template/admission")
const ContactTemplate = () => import("./template/contact")
const NoticeTemplate = () => import("./template/notice")
const AdmitCardTemplate = () => import("./template/AdmitCard")

export default {
  components: {
    PageTemplate,
    HomepageTemplate,
    NewsTemplate,
    EventsTemplate,
    GalleryTemplate,
    VideoGalleryTemplate,
    AdmissionTemplate,
    ContactTemplate,
    NoticeTemplate,
    AdmitCardTemplate
  },
  data () {
    return {
      page: {},
      currentPage: null
    }
  },
  methods: {
    pageInfo () {
      let slug = this.$route.params.slug ? this.$route.params.slug : 'homepage'
      let apiResponse = api.fetchPageInfo(slug)
      apiResponse
        .then(res => {
          this.page = res.data
          this.currentPage = res.data.template_name ? `${res.data.template_name}Template` : 'PageTemplate'
          if(slug == 'homepage') {
            this.currentPage = 'HomepageTemplate'
          }
          
        })
    }
  },
  mounted () {
    this.pageInfo()
  },
  watch: {
    "$route.params.slug" () {
      this.pageInfo()
    }
  }
}
</script>
