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
              <b-row class="images-wrapper">
                <b-col 
                  sm="3" 
                  class="mb-4"
                  v-for="(g, imageIndex) in galleries.data" 
                  :key="imageIndex"
                >
                  <div
                    class="image"
                    style="height: 200px; background-size: cover; background-repeat: no-repeat"
                    @click="index = imageIndex"
                    :style="{ backgroundImage: 'url(' + g.media.image_url.medium + ')' }"
                    v-if="g.media && g.media.image_url && g.media.image_url.medium"
                  ></div>
                  <div>
                    {{ g.title }}
                  </div>
                </b-col>
              </b-row>
              <CoolLightBox 
                :items="images" 
                :index="index"
                @close="index = null">
              </CoolLightBox>
            </b-container>
        </section>
    </div>
</template>

<script>
import { view_gallery } from "../../../api/script"
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  props: ['page'],
  components: {
    CoolLightBox
  },
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
      index: null,
      images: [ ],
      galleries: {}
    }
  },
  mounted () {
    this.items[1].text = this.page.title

    this.fetchGallery()
  },
  methods: {
    fetchGallery (page = 1) {
      let apiResponse = view_gallery('video', page)
      apiResponse
        .then(res => {
          this.galleries = res.data
          this.images = []
          if(res.data.data && res.data.data.length)
          {
            res.data.data.forEach((g, i) => {
              if(g.media && g.media.image_url && g.media.image_url.thumb && g.video_url)
              {
                this.images.push(
                  {
                    title: g.title,
                    description: "",
                    src: g.video_url,
                    thumb: g.media.image_url.thumb,
                  }
                )
              }
            })
          }
        })
    }
  }
}
</script>
