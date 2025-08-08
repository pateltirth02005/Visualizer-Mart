
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Scrollbar } from 'swiper/modules';


// slider setting
const setting = {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  breakpoints: {
    '1200': {
      slidesPerView: 5,
    },
    '992': {
      slidesPerView: 3,
    },
    '768': {
      slidesPerView: 2,
    },
    '576': {
      slidesPerView: 2,
    },
    '0': {
      slidesPerView: 1,
    },
  },
  scrollbar: {
    el: ".tp-scrollbar",
    clickable: true,
  },
}
// journey_data
const journey_data = [
  {
    id: "01",
    date: "OCT 2019",
    title: "Our Vision <br /> Of a better Way",
    description: "We envision sales teams having the tools <br /> and talent they need to make remote <br /> work.",
  },
  {
    id: "02",
    date: "OCT 2020",
    title: "Official <br /> Beta Launch",
    description: "We envision sales teams having the tools <br /> and talent they need to make remote <br /> work.",
  },
  {
    id: "03",
    date: "OCT 2021",
    title: "Rolling <br /> Up Sleeves",
    description: "We envision sales teams having the tools <br /> and talent they need to make remote <br /> work.",
  },
  {
    id: '04',
    date: "OCT 2022",
    title: "Design <br />Rewards In NYC",
    description: "We envision sales teams having the tools <br /> and talent they need to make remote <br /> work.",
  },
  {
    id: "05",
    date: "Present",
    title: "Featured On <br /> Envato",
    description: "We envision sales teams having the tools <br /> and talent they need to make remote <br /> work.",
  },
  {
    id: "06",
    date: "OCT 2020",
    title: "Official <br /> Beta Launch",
    description: "We envision sales teams having the tools <br /> and talent they need to make remote <br /> work.",
  },
  {
    id: "07",
    date: "OCT 2021",
    title: "Rolling <br /> Up Sleeves",
    description: "We envision sales teams having the tools <br /> and talent they need to make remote <br /> work.",
  },
  {
    id: '08',
    date: "OCT 2022",
    title: "Design <br />Rewards In NYC",
    description: "We envision sales teams having the tools <br /> and talent they need to make remote <br /> work.",
  },
  {
    id: "09",
    date: "Present",
    title: "Featured On <br /> Envato",
    description: "We envision sales teams having the tools <br /> and talent they need to make remote <br /> work.",
  },
  {
    id: "10",
    date: "OCT 2020",
    title: "Official <br /> Beta Launch",
    description: "We envision sales teams having the tools <br /> and talent they need to make remote <br /> work.",
  },
  {
    id: "11",
    date: "OCT 2019",
    title: "Our Vision <br /> Of a better Way",
    description: "We envision sales teams having the tools <br /> and talent they need to make remote <br /> work.",

  },
  {
    id: "12",
    date: "OCT 2020",
    title: "Official <br /> Beta Launch",
    description: "We envision sales teams having the tools <br /> and talent they need to make remote <br /> work.",
  },
  {
    id: "13",
    date: "OCT 2021",
    title: "Rolling <br /> Up Sleeves",
    description: "We envision sales teams having the tools <br /> and talent they need to make remote <br /> work.",
  },
  {
    id: '14',
    date: "OCT 2022",
    title: "Design <br />Rewards In NYC",
    description: "We envision sales teams having the tools <br /> and talent they need to make remote <br /> work.",
  },
  {
    id: "15",
    date: "Present",
    title: "Featured On <br /> Envato",
    description: "We envision sales teams having the tools <br /> and talent they need to make remote <br /> work.",
  },
  {
    id: "16",
    date: "OCT 2020",
    title: "Official <br /> Beta Launch",
    description: "We envision sales teams having the tools <br /> and talent they need to make remote <br /> work.",
  },
]

</script>



<template>
  <!-- tp-journey-area-start -->
  <div class="journey-area p-relative fix">
    <div class="journey-grey-bg grey-bg"></div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="journey-section-box">
            <h5 class="inner-section-subtitle pb-10">TIMELINE</h5>
            <h3 class="ab-brand-title pb-0 mb-0">Journey Was Started</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid g-0">
      <div class="row g-0">
        <div class="col-xl-12">
          <div class="journey-slider-wrapper">
            <Swiper 
            :loop="true"
            :slides-per-view="5" 
            :space-between="30"
            :modules="[Scrollbar]"
            :scrollbar="{
              el: '.tp-scrollbar',
              clickable: true,
            }"  
            :breakpoints="{
              '1200': {
                slidesPerView: 5,
              },
              '992': {
                slidesPerView: 3,
              },
              '768': {
                slidesPerView: 2,
              },
              '576': {
                slidesPerView: 2,
              },
              '0': {
                slidesPerView: 1,
              },
            }"  
            class="swiper-container journey-slider-active">

              <SwiperSlide v-for="(item, i) in journey_data" :key="i" class="swiper-slide">
                <div class="journey-slider-item p-relative">
                  <div class="journey-stroke-text">
                    <h2>{{ item.id }}</h2>
                  </div>
                  <div class="journey-slider-meta">
                    <span>{{ item.date }}</span>
                  </div>
                  <div class="journey-slider-content">
                    <h4 class="journey-slider-title" v-html="item.title"></h4>
                    <p v-html="item.description"></p>
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
  <!-- tp-journey-area-end -->
</template>
 