<script setup>
import { ref, onMounted } from 'vue' // ✅ THIS IS REQUIRED!

import { gsap } from 'gsap'

const heroBg = ref(null)

onMounted(async () => {
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  if (heroBg.value) {
    gsap.from(heroBg.value, {
      scale: 1.2,
      duration: 1.5,
      scrollTrigger: {
        trigger: heroBg.value,
        start: 'top bottom',
        toggleActions: 'play none none reset'
      }
    })
  }
})
</script>


<template>
  <!-- tp-slider-area-start -->
  <div class="tp-hero__area tp-hero__pl-pr">
    <div class="tp-hero__bg p-relative">
      <div class="tp-hero-bg tp-hero-bg-single" ref="heroBg">
        <img src="../../assets/img/hero/hero-frame.png" alt="image-here">
      </div>
      <div class="tp-hero-shape">
        <img class="tp-hero-shape-1" src="../../assets/img/hero/hero-line-shape.png" alt="image-here">
        <img class="tp-hero-shape-2" src="../../assets/img/hero/hero-line-shape-2.png" alt="image-here">
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="tp-hero__content-box text-center z-index-3">
              <div class="tp-hero__title-box p-relative">
                <h2 class="tp-hero__hero-title tp-title-anim title_animation  d-flex flex-wrap justify-content-center">
                  The Leading Customer<br />Data Platform
                </h2>
                <div class="tp-hero__title-shape d-none d-sm-block">
                  <svg width="491" height="24" viewBox="0 0 491 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="line1" fill-rule="evenodd" clip-rule="evenodd"
                      d="M208.549 3.29849C185.59 4.08616 162.901 5.05468 140.776 6.11351C109.455 7.61138 78.1462 9.16091 47.0261 11.6143C37.2302 12.3891 27.2823 12.8797 17.5476 13.8482C11.4368 14.4551 3.334 15.3201 2.27061 15.5009C1.71441 15.6042 1.47176 15.7593 1.39336 15.8109C0.842061 16.1725 0.942652 16.521 1.25383 16.7921C1.37879 16.9084 1.69478 17.1925 2.57195 17.2313C61.2348 19.8784 121.221 14.7133 179.955 14.171C281.81 13.2413 386.752 16.9343 487.799 24.9918C488.681 25.0564 489.539 24.7334 489.661 24.2557C489.808 23.7908 489.171 23.3389 488.289 23.2743C387.071 15.2039 281.957 11.498 179.906 12.4406C125.168 12.9442 69.3499 17.4766 14.5363 15.9271C15.7957 15.798 17.0307 15.6688 18.1578 15.5526C27.8533 14.5841 37.7594 14.1064 47.5162 13.3316C78.5701 10.8782 109.815 9.32872 141.095 7.84376C179.906 5.98434 220.408 4.38316 261.228 3.63423C275.831 3.75044 290.386 3.86671 304.94 4.00875C336.425 4.31865 368.057 5.22254 399.469 6.43633C408.927 6.8108 418.385 7.19814 427.842 7.53387C430.979 7.65009 439.064 7.98576 440.191 7.95993C441.588 7.93411 441.857 7.31436 441.882 7.21106C441.955 6.97863 441.906 6.65579 441.22 6.38463C441.147 6.34589 440.706 6.21668 439.726 6.13921C382.611 1.56813 321.626 0.806405 261.277 1.90398C197.621 1.42621 133.719 1.21951 70.2247 1C69.3157 1 68.5733 1.38744 68.5659 1.8652C68.561 2.34297 69.2935 2.73042 70.2026 2.74333C116.178 2.89828 162.387 3.05315 208.549 3.29849Z"
                      fill="none" stroke="none" />
                  </svg>
                </div>
              </div>
              <div class="tp-hero__input p-relative wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                <form @submit.prevent>
                  <div class="p-relative">
                    <input type="text" placeholder="Business email adress">
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13 14.6H5C2.6 14.6 1 13.4 1 10.6V5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6Z"
                        stroke="#5F6168" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path opacity="0.4"
                        d="M13 5.39993L10.496 7.39993C9.672 8.05593 8.32 8.05593 7.496 7.39993L5 5.39993" stroke="#5F6168"
                        stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <button type="submit" class="tp-btn tp-btn-hover alt-color-black">
                    <span>Get A Demo</span>
                    <b></b>
                  </button>
                </form>
              </div>
              <p class="wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">We are not going to save your data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tp-hero__bottom z-index-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="tp-hero__thumb-wrapper-main p-relative">
              <div class="tp-hero__shape-img-1 d-none d-xl-block">
                <img src="../../assets/img/hero/hero-shape-1.png" alt="image-here">
              </div>
              <div class="tp-hero__shape-img-2 d-none d-xl-block">
                <img src="../../assets/img/hero/hero-shape-2.png" alt="image-here">
              </div>
              <div>
                <div class="tp-hero__thumb-wrapper d-none d-md-block p-relative">
                  <div class="row">
                    <div class="col-8">
                      <div class="tp-hero__thumb-box">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="tp-hero__thumb mb-20">
                              <img class="w-100" src="../../assets/img/hero/hero-sm-1.jpg" alt="image-here">
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-4">
                            <div class="tp-hero__thumb tp-hero__sm-img">
                              <img class="w-100" src="../../assets/img/hero/hero-sm-3.png" alt="image-here">
                            </div>
                          </div>
                          <div class="col-md-8">
                            <div class="tp-hero__thumb">
                              <img class="w-100" src="../../assets/img/hero/hero-sm-4.jpg" alt="image-here">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="tp-hero__thumb-box">
                        <div class="tp-hero__thumb">
                          <img class="w-100" src="../../assets/img/hero/hero-sm-2.jpg" alt="image-here">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-slider-area-end -->
</template>

 