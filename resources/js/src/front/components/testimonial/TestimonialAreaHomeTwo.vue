
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

import bg_img from "~/assets/img/testimonial/testi-bg-2-1.png";


// slider img import 
import slider_img_1 from "~/assets/img/testimonial/testi-icon-2-1.png";
import slider_img_2 from "~/assets/img/testimonial/testi-icon-2-2.png";
import slider_img_3 from "~/assets/img/testimonial/testi-icon-2-3.png";
import slider_img_4 from "~/assets/img/testimonial/testi-icon-2-1.png";
import shadow_img from "~/assets/img/testimonial/BODY.png";


const slider_data = [
  {
    id: 1,
    img: slider_img_1,
    name: "Lana Rey",
    job: "Founder & Leader",
    info: `"Is it possible to Love your credit card processor? with Softec, yes!"`,

  },
  {
    id: 2,
    img: slider_img_2,
    name: "J. McGhee",
    job: "Founder & Leader",
    info: `"Is it possible to Love your credit card processor? with Softec, yes!"`,

  },
  {
    id: 3,
    img: slider_img_3,
    name: "Michael H.",
    job: "Founder & Leader",
    info: `"Is it possible to Love your credit card processor? with Softec, yes!"`,

  },
  {
    id: 4,
    img: slider_img_4,
    name: "Lana Rey",
    job: "Founder & Leader",
    info: `"Is it possible to Love your credit card processor? with Softec, yes!"`,

  },
]



// slider setting 
const setting = {	
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    dots:true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
        
    ]
}



</script>



<template>
  <!-- tp-testimonial-area-start -->
  <div class="tp-testimonial-2-area pt-110 pb-120" :style="{ backgroundImage: `url(${bg_img})` }">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8">
          <div class="tp-testimonial-2-section-box mb-15 text-center">
            <h3 class="tp-section-title-lg text-white">What people <br />
              are saying about us</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="tp-testimonial-2-section">
            <Swiper 
            :slidesPerView="3" 
            :space-between="30" 
            :loop="false" 
            :pagination="true"
            :modules="[Pagination]"
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
            class="tp-testimonial-2-slider-active">


              <SwiperSlide v-for="(item, i) in slider_data" :key="i" class="tp-testimonial-2-item p-relative wow tpfadeUp" data-wow-duration=".9s" :data-wow-delay="`.${i+1}s`">
                <div class="tp-testimonial-2-border-shape">
                  <img :src="shadow_img" alt="image-here">
                </div>
                <div class="tp-testimonial-2-star">
                  <span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z"
                        fill="#FFCF55" />
                    </svg>
                  </span>
                  {{ ' ' }}
                  <span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z"
                        fill="#FFCF55" />
                    </svg>
                  </span>
                  {{ ' ' }}
                  <span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z"
                        fill="#FFCF55" />
                    </svg>
                  </span>
                  {{ ' ' }}
                  <span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z"
                        fill="#FFCF55" />
                    </svg>
                  </span>
                  {{ ' ' }}
                  <span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z"
                        fill="#FFCF55" />
                    </svg>
                  </span>
                </div>
                <div class="tp-testimonial-2-content">
                  <p>{{ item.info }}</p>
                </div>
                <div class="tp-testimonial-2-author d-flex align-items-center">
                  <div class="tp-testimonial-2-img">
                    <img :src="item.img" alt="image-here">
                  </div>
                  <div class="tp-testimonial-2-author-info">
                    <h5>{{ item.name }}</h5>
                    <span>{{ item.job }}</span>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-testimonial-area-end -->
</template>

 