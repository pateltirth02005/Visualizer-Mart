<script setup>

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";


import bg_img from "~/assets/img/testimonial/testi-bg-3-1.png";

import testimonial_img_1 from "~/assets/img/testimonial/testi-3-2.png"
import testimonial_img_2 from "~/assets/img/testimonial/testi-3-3.png"
import testimonial_img_3 from "~/assets/img/testimonial/testi-3-4.png"
import testimonial_img_4 from "~/assets/img/testimonial/testi-3-5.png"


// testimonial data
const testimonial_data = [
  {
    id: 1,
    img: testimonial_img_1,
    name: "Rudra Ghosh",
    job_title: "Founder & CEO Dulalix",
    description: "We get absolutely raving reviews from our sales and customer support teams using close. Even our co- founders are very happy.",

  },
  {
    id: 2,
    img: testimonial_img_2,
    name: "Rudra Ghosh",
    job_title: "Founder & CEO Dulalix",
    description: "We get absolutely raving reviews from our sales and customer support teams using close. Even our co- founders are very happy.",

  },
  {
    id: 3,
    img: testimonial_img_3,
    name: "Rudra Ghosh",
    job_title: "Founder & CEO Dulalix",
    description: "We get absolutely raving reviews from our sales and customer support teams using close. Even our co- founders are very happy.",

  },
  {
    id: 4,
    img: testimonial_img_4,
    name: "Rudra Ghosh",
    job_title: "Founder & CEO Dulalix",
    description: "We get absolutely raving reviews from our sales and customer support teams using close. Even our co- founders are very happy.",

  },
]


</script>


<template>
  <!-- tp-testimonial-area-start -->
  <div class="tp-testimonial-area tp-testimonial-3-mlr pb-110">
    <div class="tp-testimonial-3-bg pt-110 fix" :style="{ backgroundImage: `url(${bg_img})` }">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="tp-testimonial-3-section-box d-flex justify-content-between align-items-end mb-60">
              <h3 class="tp-section-title-3 text-white"><span>Kind Words</span> <br /> from our Customers</h3>

              <div class="tp-test-arrow d-flex pb-10">
                <button type="button" class="slick-prev slick-arrow" style="">
                  <i class="fal fa-angle-left"></i>
                </button>
                <button type="button" class="slick-next slick-arrow" style="">
                  <i class="fal fa-angle-right"></i>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="tp-testimonial-3-slider-wrapper">
        <div class="container-fluid g-0">
          <div class="row g-0">
            <div class="col-12">
              <Swiper 
              :slidesPerView="3" 
              :space-between="30" 
              :loop="true" 
              :centeredSlides="true" 
              :modules="[Navigation]"
              :navigation="{
                nextEl: '.slick-next',
                prevEl: '.slick-prev',
              }" 
              :breakpoints="{
                  '1200': {
                    slidesPerView: 3,
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
                class="tp-testimonial-3-slider-active">

                <SwiperSlide v-for="(item, i) in testimonial_data" :key="i" class="tp-testimonial-wrapper">
                  <div class="tp-testimonial-3-item d-flex justify-content-between align-items-center">
                    <div class="tp-testimonial-3-content-box">
                      <div class="tp-testimonial-3-review">
                        <span><i class="fas fa-star"></i></span> {{" "}}
                        <span><i class="fas fa-star"></i></span> {{" "}}
                        <span><i class="fas fa-star"></i></span> {{" "}}
                        <span><i class="fas fa-star"></i></span> {{" "}}
                        <span><i class="fas fa-star"></i></span> {{" "}}
                      </div>
                      <p>{{ item.description }}</p>
                      <div class="tp-testimonial-3-author-info d-flex align-items-center">
                        <div class="tp-testimonial-3-sm-thumb d-md-none">
                          <img :src="item.img" alt="image-here">
                        </div>
                        <div>
                          <h5>{{ item.name }}</h5>
                          <span>{{ item.job_title }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="tp-testimonial-3-thumb d-none d-md-block">
                      <img :src="item.img" alt="image-here">
                    </div>
                  </div>
                </SwiperSlide> 

              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-testimonial-area-end -->
</template>

 