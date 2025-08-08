
<script setup>

import bg_img from "~/assets/img/rate/rated-bg.jpg";


import author_img_1 from "~/assets/img/rate/rate-logo-1.png"
import author_img_2 from "~/assets/img/rate/rate-logo-2.png"
import author_img_3 from "~/assets/img/rate/rate-logo-3.png"

import img_1 from "~/assets/img/rate/rate-shape-1.png"
import img_2 from "~/assets/img/rate/rate-shape-2.png"
import author_big_img from "~/assets/img/rate/rated-img.png"

const author = [
  {
    id: 1,
    title: `"the interface is excellent"`,
    img: author_img_1,
  },
  {
    id: 2,
    title: `"improvements in every release"`,
    img: author_img_2,
  },
  {
    id: 3,
    title: `"improvements in every release"`,
    img: author_img_3,
  },
]

onMounted(() => {
  useTitleAnimation();
})
</script>


<template>
  <!-- tp-rated-area-start -->
  <div class="tp-rated-area fix p-relative">
    <div class="tp-rated-bg pt-120" :style="{ backgroundImage: `url(${bg_img})` }">
      <div class="tp-rated-shape-1 d-none d-lg-block">
        <img src="~/assets/img/rate/rate-shape-1.png" alt="image-here">
      </div>
      <div class="tp-rated-shape-2 d-none d-sm-block">
        <img src="~/assets/img/rate/rate-shape-2.png" alt="image-here">
      </div>
      <div class="container z-index-6">
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="tp-rated-title-box text-center mb-60">
              <div class="tp-rated-icon tp-title-anim">
                <span>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.6007 2.16169L20.2414 7.48279C20.6015 8.20839 21.5617 8.93399 22.3619 9.05493L27.1432 9.86114C30.204 10.3852 30.9242 12.6023 28.7236 14.8194L25.0027 18.5684C24.3825 19.1932 24.0224 20.4227 24.2224 21.3096L25.2828 25.9655C26.123 29.6339 24.1825 31.0649 20.9616 29.1501L16.4804 26.4694C15.6602 25.9857 14.3398 25.9857 13.5196 26.4694L9.0384 29.1501C5.81755 31.0649 3.87702 29.6339 4.71725 25.9655L5.77759 21.3096C5.97764 20.4429 5.61751 19.2134 4.99735 18.5684L1.27639 14.8194C-0.92419 12.6023 -0.204043 10.365 2.85677 9.86114L7.63806 9.05493C8.43828 8.91384 9.39853 8.20839 9.75862 7.48279L12.3993 2.16169C13.8197 -0.720565 16.1803 -0.720565 17.6007 2.16169Z"
                      fill="url(#tp-1)" fill-opacity="0.3" />
                    <defs>
                      <linearGradient id="tp-1" x1="15" y1="0" x2="15" y2="30" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.6007 2.16169L20.2414 7.48279C20.6015 8.20839 21.5617 8.93399 22.3619 9.05493L27.1432 9.86114C30.204 10.3852 30.9242 12.6023 28.7236 14.8194L25.0027 18.5684C24.3825 19.1932 24.0224 20.4227 24.2224 21.3096L25.2828 25.9655C26.123 29.6339 24.1825 31.0649 20.9616 29.1501L16.4804 26.4694C15.6602 25.9857 14.3398 25.9857 13.5196 26.4694L9.0384 29.1501C5.81755 31.0649 3.87702 29.6339 4.71725 25.9655L5.77759 21.3096C5.97764 20.4429 5.61751 19.2134 4.99735 18.5684L1.27639 14.8194C-0.92419 12.6023 -0.204043 10.365 2.85677 9.86114L7.63806 9.05493C8.43828 8.91384 9.39853 8.20839 9.75862 7.48279L12.3993 2.16169C13.8197 -0.720565 16.1803 -0.720565 17.6007 2.16169Z"
                      fill="url(#tp-2)" fill-opacity="0.3" />
                    <defs>
                      <linearGradient id="tp-2" x1="15" y1="0" x2="15" y2="30" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.6007 2.16169L20.2414 7.48279C20.6015 8.20839 21.5617 8.93399 22.3619 9.05493L27.1432 9.86114C30.204 10.3852 30.9242 12.6023 28.7236 14.8194L25.0027 18.5684C24.3825 19.1932 24.0224 20.4227 24.2224 21.3096L25.2828 25.9655C26.123 29.6339 24.1825 31.0649 20.9616 29.1501L16.4804 26.4694C15.6602 25.9857 14.3398 25.9857 13.5196 26.4694L9.0384 29.1501C5.81755 31.0649 3.87702 29.6339 4.71725 25.9655L5.77759 21.3096C5.97764 20.4429 5.61751 19.2134 4.99735 18.5684L1.27639 14.8194C-0.92419 12.6023 -0.204043 10.365 2.85677 9.86114L7.63806 9.05493C8.43828 8.91384 9.39853 8.20839 9.75862 7.48279L12.3993 2.16169C13.8197 -0.720565 16.1803 -0.720565 17.6007 2.16169Z"
                      fill="url(#tp-3)" fill-opacity="0.3" />
                    <defs>
                      <linearGradient id="tp-3" x1="15" y1="0" x2="15" y2="30" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.6007 2.16169L20.2414 7.48279C20.6015 8.20839 21.5617 8.93399 22.3619 9.05493L27.1432 9.86114C30.204 10.3852 30.9242 12.6023 28.7236 14.8194L25.0027 18.5684C24.3825 19.1932 24.0224 20.4227 24.2224 21.3096L25.2828 25.9655C26.123 29.6339 24.1825 31.0649 20.9616 29.1501L16.4804 26.4694C15.6602 25.9857 14.3398 25.9857 13.5196 26.4694L9.0384 29.1501C5.81755 31.0649 3.87702 29.6339 4.71725 25.9655L5.77759 21.3096C5.97764 20.4429 5.61751 19.2134 4.99735 18.5684L1.27639 14.8194C-0.92419 12.6023 -0.204043 10.365 2.85677 9.86114L7.63806 9.05493C8.43828 8.91384 9.39853 8.20839 9.75862 7.48279L12.3993 2.16169C13.8197 -0.720565 16.1803 -0.720565 17.6007 2.16169Z"
                      fill="url(#tp-4)" fill-opacity="0.3" />
                    <defs>
                      <linearGradient id="tp-4" x1="15" y1="0" x2="15" y2="30" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.6007 2.16169L20.2414 7.48279C20.6015 8.20839 21.5617 8.93399 22.3619 9.05493L27.1432 9.86114C30.204 10.3852 30.9242 12.6023 28.7236 14.8194L25.0027 18.5684C24.3825 19.1932 24.0224 20.4227 24.2224 21.3096L25.2828 25.9655C26.123 29.6339 24.1825 31.0649 20.9616 29.1501L16.4804 26.4694C15.6602 25.9857 14.3398 25.9857 13.5196 26.4694L9.0384 29.1501C5.81755 31.0649 3.87702 29.6339 4.71725 25.9655L5.77759 21.3096C5.97764 20.4429 5.61751 19.2134 4.99735 18.5684L1.27639 14.8194C-0.92419 12.6023 -0.204043 10.365 2.85677 9.86114L7.63806 9.05493C8.43828 8.91384 9.39853 8.20839 9.75862 7.48279L12.3993 2.16169C13.8197 -0.720565 16.1803 -0.720565 17.6007 2.16169Z"
                      fill="url(#tp-5)" fill-opacity="0.3" />
                    <defs>
                      <linearGradient id="tp-5" x1="15" y1="0" x2="15" y2="30" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
              <h5 class="tp-section-title-3 text-white pb-40">Customers have <span>Consistently</span><br />
                <span>Rated</span> Softec<span> 4.9/5</span>
              </h5>
              <a class="tp-btn-blue-lg tp-btn-hover alt-color-white" href="#">
                <span class="text-color-black">Try it on Browser</span>
                <b></b>
              </a>
            </div>
          </div>
        </div>
        <div class="author-rated-wrapper">
          <div class="row">

            <div v-for="(item,i) in author" :key="i" class="col-xl-4 col-lg-4 col-md-4">
              <div class="author-rated text-center">
                <div class="author-rated-icon">
                  <span><i class="fas fa-star"></i></span>{{" "}}
                  <span><i class="fas fa-star"></i></span>{{" "}}
                  <span><i class="fas fa-star"></i></span>{{" "}}
                  <span><i class="fas fa-star"></i></span>{{" "}}
                  <span><i class="fas fa-star"></i></span>{{" "}}
                </div>
                <p>{{ item.title }}</p>
                <div class="author-rated-logo">
                  <img :src="item.img" alt="image-here">
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="author-rated-big-img" data-parallax='{"y": 100, "smoothness": 30}'>
          <img src="~/assets/img/rate/rated-img.png" alt="image-here">
        </div>
      </div>
    </div>
  </div>
  <!-- tp-rated-area-end -->
</template>

