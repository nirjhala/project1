<template>
    <div class="inner-page">
        <section id="page-header">
            <b-container>
              <h1>{{ page.title }}</h1>
              <b-breadcrumb :items="items"></b-breadcrumb>
            </b-container>
        </section>
        <section id="page-content" class="py-5">
            <b-container class="text-justify" v-html="page.description"></b-container>
        </section>
    </div>
</template>
<style>

</style>
<script>
import api from "../../../api/script";
export default {
  props: [
    'page'
  ],
  data() {
    return {
      items: [],
      metaInfo: {
        title: 'School Website'
      }
    }
  },
  mounted () {
    this.items = [
      {
        text: 'Home',
        to: {
          name: 'Homepage'
        }
      },
      {
        text: this.page.title,
        active: true
      }
    ]
    this.metaInfo.title = this.page.seo_title ? this.page.seo_title : this.page.title
  },
  watch: {
    page () {
      this.items = [
        {
          text: 'Home',
          to: {
            name: 'Homepage'
          }
        },
        {
          text: this.page.title,
          active: true
        }
      ]
    }
  }
}
</script>
