
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Scrollbar} from "swiper/modules";

import bg_img from "~/assets/img/testimonial/testi-bg-5-1.jpg";


import author_img_1 from "~/assets/img/testimonial/testi-icon-5-4.png"
import author_img_2 from "~/assets/img/testimonial/testi-icon-5-2.png"
import author_img_3 from "~/assets/img/testimonial/testi-icon-5-4.png"
import author_img_4 from "~/assets/img/testimonial/testi-icon-5-3.png"
import author_img_5 from "~/assets/img/testimonial/testi-icon-5-4.png"
import author_img_6 from "~/assets/img/testimonial/testi-icon-5-1.png"
import author_img_7 from "~/assets/img/testimonial/testi-icon-5-4.png"
import author_img_8 from "~/assets/img/testimonial/testi-icon-5-2.png"
import author_img_9 from "~/assets/img/testimonial/testi-icon-5-4.png"
import author_img_10 from "~/assets/img/testimonial/testi-icon-5-3.png"
import author_img_11 from "~/assets/img/testimonial/testi-icon-5-4.png"
import author_img_12 from "~/assets/img/testimonial/testi-icon-5-1.png"


import brand_icon_1 from "~/assets/img/testimonial/testi-logo-5-2.png"
import brand_icon_2 from "~/assets/img/testimonial/testi-logo-5-1.png"
import brand_icon_3 from "~/assets/img/testimonial/testi-logo-5-2.png"
import brand_icon_4 from "~/assets/img/testimonial/testi-logo-5-3.png"
import brand_icon_5 from "~/assets/img/testimonial/testi-logo-5-3.png"
import brand_icon_6 from "~/assets/img/testimonial/testi-logo-5-2.png"
import brand_icon_7 from "~/assets/img/testimonial/testi-logo-5-2.png"
import brand_icon_8 from "~/assets/img/testimonial/testi-logo-5-1.png"
import brand_icon_9 from "~/assets/img/testimonial/testi-logo-5-2.png"
import brand_icon_10 from "~/assets/img/testimonial/testi-logo-5-3.png"
import brand_icon_11 from "~/assets/img/testimonial/testi-logo-5-3.png"
import brand_icon_12 from "~/assets/img/testimonial/testi-logo-5-2.png"

const testimonial_data = [
  // for home 05
  {
    id: 13,
    author_img: author_img_1,
    brand_icon: brand_icon_1,
    name: "Joann J.",
    title: "Community Organiser",
    description: `“ This is really awesome. many small businessmen are suffering from this service in different platform and the
        lovers are always looking this kind of feature on their own website. ”`,

  },
  {
    id: 14,
    author_img: author_img_2,
    brand_icon: brand_icon_2,
    name: "Joann J.",
    title: "Community Organiser",
    description: `“ This is really awesome. many small businessmen are suffering from this service in different platform and the
        lovers are always looking this kind of feature on their own website. ”`,

  },
  {
    id: 15,
    author_img: author_img_3,
    brand_icon: brand_icon_3,
    name: "Steven G.",
    title: "Community Organiser",
    description: `“ This is really awesome. many small businessmen are suffering from this service in different platform and the
        lovers are always looking this kind of feature on their own website. ”`,

  },
  {
    id: 16,
    author_img: author_img_4,
    brand_icon: brand_icon_4,
    name: "Gary M. Adams",
    title: "Community Organiser",
    description: `“ This is really awesome. many small businessmen are suffering from this service in different platform and the
        lovers are always looking this kind of feature on their own website. ”`,

  },
  {
    id: 17,
    author_img: author_img_5,
    brand_icon: brand_icon_5,
    name: "Edward G. Hall",
    title: "Community Organiser",
    description: `“ This is really awesome. many small businessmen are suffering from this service in different platform and the
        lovers are always looking this kind of feature on their own website. ”`,

  },
  {
    id: 18,
    author_img: author_img_6,
    brand_icon: brand_icon_6,
    name: "Erma P. Brown",
    title: "Community Organiser",
    description: `“ This is really awesome. many small businessmen are suffering from this service in different platform and the
        lovers are always looking this kind of feature on their own website. ”`,

  },
  {
    id: 19,
    author_img: author_img_7,
    brand_icon: brand_icon_7,
    name: "Joann J.",
    title: "Community Organiser",
    description: `“ This is really awesome. many small businessmen are suffering from this service in different platform and the
        lovers are always looking this kind of feature on their own website. ”`,

  },
  {
    id: 20,
    author_img: author_img_8,
    brand_icon: brand_icon_8,
    name: "Joann J.",
    title: "Community Organiser",
    description: `“ This is really awesome. many small businessmen are suffering from this service in different platform and the
        lovers are always looking this kind of feature on their own website. ”`,

  },
  {
    id: 21,
    author_img: author_img_9,
    brand_icon: brand_icon_9,
    name: "Steven G.",
    title: "Community Organiser",
    description: `“ This is really awesome. many small businessmen are suffering from this service in different platform and the
        lovers are always looking this kind of feature on their own website. ”`,

  },
  {
    id: 22,
    author_img: author_img_10,
    brand_icon: brand_icon_10,
    name: "Gary M. Adams",
    title: "Community Organiser",
    description: `“ This is really awesome. many small businessmen are suffering from this service in different platform and the
        lovers are always looking this kind of feature on their own website. ”`,

  },
  {
    id: 23,
    author_img: author_img_11,
    brand_icon: brand_icon_11,
    name: "Edward G. Hall",
    title: "Community Organiser",
    description: `“ This is really awesome. many small businessmen are suffering from this service in different platform and the
        lovers are always looking this kind of feature on their own website. ”`,

  },
  {
    id: 24,
    author_img: author_img_12,
    brand_icon: brand_icon_12,
    name: "Erma P. Brown",
    title: "Community Organiser",
    description: `“ This is really awesome. many small businessmen are suffering from this service in different platform and the
        lovers are always looking this kind of feature on their own website. ”`,

  },
]


// setting 
const setting = {
   loop: true,
   slidesPerView: 4,
   spaceBetween: 30,
   breakpoints: {
      '1200': {
         slidesPerView: 4,
      },
      '992': {
         slidesPerView: 3,
      },
      '768': {
         slidesPerView: 3,
      },
      '576': {
         slidesPerView: 1,
      },
      '0': {
         slidesPerView: 1,
      },
   },
   scrollbar: {
      el: ".tp-scrollbar",
      clickable: true,
   },
   navigation: {
      nextEl: '.test-prev',
      prevEl: '.test-next',
   },
}


</script>



<template>
  <!-- tp-testimonial-area-start -->
  <div class="tp-testimonial-area pt-130 pb-130 fix" :style="{ backgroundImage: `url(${bg_img})` }">
    <div class="container">
      <div class="row align-items-end tp-testimonial-five-section-space">
        <div class="col-md-8">
          <div class="tp-testimonial-five-section-box">
            <span class="tp-section-subtitle-5">CLIENTS & PROJECTS</span>
            <h3 class="tp-section-title-5">About Customer <span>Stories</span></h3>
          </div>
        </div>
        <div class="col-md-4">
          <div class="tp-testimonial-five-arrow d-flex align-items-center justify-content-start justify-content-md-end">
            <div class="test-next">
              <button><i class="far fa-arrow-left"></i></button>
            </div>
            <div class="test-prev">
              <button><i class="far fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid p-0">
      <div class="row g-0">
        <div class="col-12">
          <div class="tp-testimonial-five-slider-section">
            <Swiper 
            :slidesPerView="4" 
            :space-between="30" 
            :loop="true" 
            :centeredSlides="true" 
            :modules="[Navigation, Scrollbar]"
            :scrollbar="{
              el: '.tp-scrollbar',
              clickable: true,
            }" 
            :navigation="{
              nextEl: '.test-next',
              prevEl: '.test-prev',
            }" 
            :breakpoints="{
              '1200': {
                slidesPerView: 4,
              },
              '992': {
                slidesPerView: 1,
              },
              '768': {
                slidesPerView: 1,
              },
              '576': {
                slidesPerView: 1,
              },
              '0': {
                slidesPerView: 1,
              },
            }"
            class=" swiper-container testimonial-five-slider-active">

              <SwiperSlide v-for="(item, i) in testimonial_data" :key="i" class="swiper-slide">
                <div class="tp-testimonial-five-item">
                  <div class="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                    <div class="tp-testimonial-five-top-info d-flex align-items-center">
                      <div class="tp-testimonial-five-avata">
                        <img :src="item.author_img" alt="image-here">
                      </div>
                      <div class="tp-testimonial-five-author-info">
                        <h4>{{ item.name }}</h4>
                        <span>{{ item.title }}</span>
                      </div>
                    </div>
                    <div class="tp-testimonial-five-brand d-none d-sm-block">
                      <img :src="item.brand_icon" alt="image-here">
                    </div>
                  </div>
                  <div class="tp-testimonial-five-content">
                    <p>{{ item.description }}</p>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
            <div class="tp-scrollbar"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-testimonial-area-end -->
</template>

 