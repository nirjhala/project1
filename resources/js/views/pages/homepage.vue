<template>
  <div>
    <section id="home-slider" v-if="slides.data && slides.data.length">
      <b-carousel
        id="home-slider-carousel"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-height="260"
        style="text-shadow: 1px 1px 2px #333"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          :caption="s.title"
          :text="s.description"
          :img-src="s.image_url"
          v-for="(s, i) in slides.data"
          :key="i"
        ></b-carousel-slide>
      </b-carousel>
    </section>
    <section id="news-section" class="py-5">
      <b-container>
        <b-row>
          <b-col sm="4">
            <b-card
              border-variant="primary"
              header="Notice"
              header-bg-variant="primary"
              header-text-variant="white"
              align="center"
            >
              <b-card-text>
                <marquee
                  behavior="scroll"
                  direction="up"
                  scrollamount="5"
                  onmouseover="stop()"
                  onmouseleave="start()"
                >
                  <ol
                    class="m-0 p-0"
                    v-for="(notice, date) in notices"
                    :key="date"
                  >
                    <li>
                      <strong>{{ date | formatDateOnly }}</strong>
                    </li>
                    <li v-for="(n, index) in notice" :key="index">
                      <router-link
                        :to="{
                          name: 'NoticeDetails',
                          params: {
                            slug: n.slug,
                          },
                        }"
                        >{{ `${index + 1}. ${n.full_title}` }}</router-link
                      >
                    </li>
                  </ol>
                </marquee>
              </b-card-text>
              <template #footer>
                <router-link
                  :to="{
                    name: 'Page',
                    params: {
                      slug: 'notice',
                    },
                  }"
                  >View All Notices &raquo;</router-link
                >
              </template>
            </b-card>
          </b-col>
          <b-col sm="8">
            <h1 class="mt-0">Welcome To <span>Akkhor School</span></h1>
            <p class="text-justify">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy [&hellip;]
            </p>
            <router-link to="#" class="btn btn-primary"
              >Read More &raquo;</router-link
            >
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="home-services" class="gray-bg py-5">
      <b-container>
        <h3 class="text-center">Why <span>Akkhor School</span></h3>
        <p class="text-center w-75 m-auto">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout, It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout,
        </p>
        <b-row class="mt-5">
          <b-col>
            <div class="service-block text-center">
              <div class="service-icon">
                <i class="icon-file"></i>
              </div>
              <h4>Immersive Education</h4>
              <p>
                More than 60% of our pupils are boarders and the majority of our
                staff live on site, so all pupils enjoy a busy, active and
                social environment seven days a week.
              </p>
            </div>
          </b-col>
          <b-col>
            <div class="service-block text-center">
              <div class="service-icon">
                <i class="icon-book"></i>
              </div>
              <h4>First Class Facilities</h4>
              <p>
                More than 60% of our pupils are boarders and the majority of our
                staff live on site, so all pupils enjoy a busy, active and
                social environment seven days a week.
              </p>
            </div>
          </b-col>
          <b-col>
            <div class="service-block text-center">
              <div class="service-icon">
                <i class="icon-sports_tennis"></i>
              </div>
              <h4>Sports Excellence</h4>
              <p>
                More than 60% of our pupils are boarders and the majority of our
                staff live on site, so all pupils enjoy a busy, active and
                social environment seven days a week.
              </p>
            </div>
          </b-col>
          <b-col>
            <div class="service-block text-center">
              <div class="service-icon">
                <i class="icon-group"></i>
              </div>
              <h4>Creative Opportunity</h4>
              <p>
                More than 60% of our pupils are boarders and the majority of our
                staff live on site, so all pupils enjoy a busy, active and
                social environment seven days a week.
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="home-news" class="py-5 events">
      <b-container>
        <h3 class="text-center">Upcoming <span>Events</span></h3>
        <p class="text-center w-75 m-auto">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout, It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout,
        </p>
        <b-row class="mt-5">
          <b-col sm="4" v-for="(evt, i) in events.data" :key="i">
            <b-card
              :title="evt.name"
              :img-src="
                evt.media && evt.media.image_url && evt.media.image_url.medium
                  ? evt.media.image_url.medium
                  : null
              "
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text v-html="evt.short_description"></b-card-text>
              <router-link
                :to="{
                  name: 'EventDetails',
                  params: {
                    slug: evt.slug,
                  },
                }"
                class="btn btn-primary btn-block"
              >
                View Details
              </router-link>
            </b-card>
          </b-col>
        </b-row>
        <div class="mt-3 text-center">
          <router-link to="/upcoming-events" class="btn-primary btn"
            >View All Events <i class="icon-long-arrow-right"></i
          ></router-link>
        </div>
      </b-container>
    </section>
    <section class="gray-bg py-5">
      <b-container>
        <h3 class="text-center">Explore <span>Our School</span></h3>
        <p class="text-center w-75 m-auto">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout, It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout,
        </p>
        <div class="mt-5">
          <b-row class="images-wrapper">
            <b-col
              sm="3"
              v-for="(image, imageIndex) in media"
              :key="imageIndex"
            >
              <div
                class="image mb-4"
                style="
                  height: 200px;
                  background-size: cover;
                  background-repeat: no-repeat;
                "
                @click="index = imageIndex"
                :style="{ backgroundImage: 'url(' + image + ')' }"
              ></div>
            </b-col>
          </b-row>
          <div class="mt-3 text-center">
            <router-link to="/picture-gallery" class="btn-primary btn"
              >View All Pictures <i class="icon-long-arrow-right"></i
            ></router-link>
          </div>
          <CoolLightBox :items="media" :index="index" @close="index = null">
          </CoolLightBox>
        </div>
      </b-container>
    </section>
  </div>
</template>
<style>
#home-slider-carousel img {
  height: 500px;
  object-fit: cover;
}
marquee ul {
  list-style: inside decimal;
}
.gray-bg {
  background-color: #ebebeb;
}
.service-block .service-icon {
  font-size: 36px;
  color: #2c3e50;
}
#home-slider-carousel h3 {
  color: #fff;
}
.events img {
  height: 200px;
  object-fit: cover;
}
</style>
<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

import api, {
  view_all_notices,
  view_events,
  view_gallery,
} from "../../api/script";

export default {
  components: {
    CoolLightBox,
  },
  data() {
    return {
      slide: 0,
      visible: false,
      index: null, // default: 0
      notices: {},
      slides: {},
      events: {},
      galleries: {},
      media: [],
    };
  },
  mounted() {
    this.fetchNotices();
    this.fetchSliders();
    this.fetchEvents();
    this.fetchGallery();
  },
  methods: {
    fetchGallery() {
      view_gallery("image", 1).then((res) => {
        this.galleries = res.data;
        this.media = [];
        if (res.data.data && res.data.data.length) {
          res.data.data.forEach((g, i) => {
            if (g.media && g.media.image_url && g.media.image_url.full) {
              this.media.push(g.media.image_url.full);
            }
          });
        }
      });
    },
    fetchEvents() {
      view_events(1).then((res) => {
        this.events = res.data;
      });
    },
    fetchNotices() {
      view_all_notices().then((res) => {
        this.notices = res.data;
      });
    },
    fetchSliders() {
      api.getSlider(1, "").then((res) => {
        this.slides = res.data;
      });
    },
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>
