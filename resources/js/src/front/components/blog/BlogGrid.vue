
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, EffectFade } from "swiper/modules";

import bg_img_1 from "~/assets/img/blog/inner-blog-1.png";
import bg_img_2 from "~/assets/img/blog/inner-blog-2.png";
import bg_img_3 from "~/assets/img/blog/inner-blog-3.png";

// author img import here 
import author_img_1 from "~/assets/img/blog/blog-avata-3.png";
import author_img_2 from "~/assets/img/blog/blog-avata-2.png";
import author_img_3 from "~/assets/img/blog/blog-avata-1.png";
import author_img_4 from "~/assets/img/blog/blog-avata-3.png";
import author_img_5 from "~/assets/img/blog/blog-avata-2.png";
import author_img_6 from "~/assets/img/blog/blog-avata-1.png";

const slider_data = [
  {
    id: 1,
    bg_img: bg_img_1,
    child_1: "Resources",
    date: "October 20, 2024",
    title: "5 Companies doing Brand <br /> Marketing Right",
    des: "From publishing content and hoping to acquire leads to <br /> gaining audience insights and making personalized <br /> content, content marketing.",
    author_img: author_img_1,
    author_name: "Hilary Ouse",
    author_info: "Founder & CEO Dulalix",
  },
  {
    id: 2,
    bg_img: bg_img_2,
    child_1: "Resources",
    date: "October 12, 2024",
    title: "5 Companies doing Brand <br /> Marketing Right",
    des: "From publishing content and hoping to acquire leads to <br /> gaining audience insights and making personalized <br /> content, content marketing.",
    author_img: author_img_2,
    author_name: "Ouse Hilary",
    author_info: "Founder & CEO Dulalix",
  },
  {
    id: 3,
    bg_img: bg_img_3,
    child_1: "Resources",
    date: "October 25, 2024",
    title: "5 Companies doing Brand <br /> Marketing Right",
    des: "From publishing content and hoping to acquire leads to <br /> gaining audience insights and making personalized <br /> content, content marketing.",
    author_img: author_img_3,
    author_name: "Mahful Alom",
    author_info: "Founder & CEO Dulalix",
  },
  {
    id: 4,
    bg_img: bg_img_1,
    child_1: "Resources",
    date: "October 20, 2024",
    title: "5 Companies doing Brand <br /> Marketing Right",
    des: "From publishing content and hoping to acquire leads to <br /> gaining audience insights and making personalized <br /> content, content marketing.",
    author_img: author_img_4,
    author_name: "Hilary Ouse",
    author_info: "Founder & CEO Dulalix",
  },
  {
    id: 5,
    bg_img: bg_img_2,
    child_1: "Resources",
    date: "October 12, 2024",
    title: "5 Companies doing Brand <br /> Marketing Right",
    des: "From publishing content and hoping to acquire leads to <br /> gaining audience insights and making personalized <br /> content, content marketing.",
    author_img: author_img_5,
    author_name: "Ouse Hilary",
    author_info: "Founder & CEO Dulalix",
  },
  {
    id: 6,
    bg_img: bg_img_3,
    child_1: "Resources",
    date: "October 25, 2024",
    title: "5 Companies doing Brand <br /> Marketing Right",
    des: "From publishing content and hoping to acquire leads to <br /> gaining audience insights and making personalized <br /> content, content marketing.",
    author_img: author_img_6,
    author_name: "Mahful Alom",
    author_info: "Founder & CEO Dulalix",
  },
] 
</script>




<template>
  <!-- blog-grid-area-start -->
  <div class="blog-grid-area pt-100 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="blog-grid-arrow p-relative">
            <div class="grid-next d-none d-sm-block">
              <button>
                <i class="far fa-angle-left"></i>
                <svg width="36" height="100" viewBox="0 0 36 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.99999 14C0 7.5 0.5 3.5 0 0L-0.000484467 99.5C-0.000415802 96.7234 1.00003 88 23 71.5C44.9999 55 32.5 37.1667 24 30.5C19.8333 27.1667 9.48375 19.8289 4.99999 14Z"
                    fill="white" />
                </svg>
              </button>
            </div>
            <div class="grid-prev d-none d-sm-block">
              <button>
                <i class="far fa-angle-right"></i>
                <svg width="36" height="100" viewBox="0 0 36 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M30.3164 14C35.3164 7.5 34.8164 3.5 35.3164 0L35.3169 99.5C35.3168 96.7234 34.3164 88 12.3164 71.5C-9.68354 55 2.81642 37.1667 11.3164 30.5C15.4831 27.1667 25.8327 19.8289 30.3164 14Z"
                    fill="white" />
                </svg>
              </button>
            </div>
            <Swiper 
            :loop="true" 
            :effect="'fade'"
            :modules="[Navigation, EffectFade]"  
            :navigation="{
              nextEl: '.grid-next',
              prevEl: '.grid-prev',
            }"
            class="swiper-container blog-grid-slider-active">


              <SwiperSlide v-for="(item, i) in slider_data" :key="i" class="swiper-slide">
                <div class="blog-grid-slider blog-grid-slider-bg d-flex align-items-center blog-grid-slider-height"
                  :style="{ backgroundImage: `url(${item.bg_img})` }">
                  <div class="blog-grid-slider-wrapper">
                    <div class="blog-grid-slider-meta">
                      <span class="child-one">{{ item.child_1 }}</span>
                      <span class="child-two">{{ item.date }}</span>
                    </div>
                    <div class="blog-grid-slider-title-box">
                      <h4 class="blog-grid-slider-title">
                        <router-link to="/blog-details"> 
                          <a v-html="item.title"></a> 
                        </router-link></h4>
                      <p v-html="item.des"></p>
                    </div>
                    <div class="tp-blog-author-info-box blog-grid-avata-box d-flex align-items-center">
                      <div class="tp-blog-avata">
                        <img :src="item.author_img" alt="image-here">
                      </div>
                      <div class="tp-blog-author-info">
                        <h5>{{ item.author_name }}</h5>
                        <span>{{ item.author_info }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- blog-grid-area-end -->
</template>

 