

<script setup>
import { ref, onMounted } from 'vue' // ✅ THIS IS REQUIRED!
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Scrollbar } from "swiper/modules";


import project_img_1 from "../../assets/img/project/project-img-2.jpg";
import project_brand_1 from "../../assets/img/project/project-brand-1.png";

import project_img_2 from "../../assets/img/project/project-img-1.jpg";
import project_brand_2 from "../../assets/img/project/project-brand-2.png";

import project_img_3 from "../../assets/img/project/project-img-3.jpg";
import project_brand_3 from "../../assets/img/project/project-brand-4.png";

import project_img_4 from "../../assets/img/project/project-img-4.jpg";
import project_brand_4 from "../../assets/img/project/project-brand-2.png";

import project_img_5 from "../../assets/img/project/project-img-2.jpg";
import project_brand_5 from "../../assets/img/project/project-brand-1.png";

import project_img_6 from "../../assets/img/project/project-img-1.jpg";
import project_brand_6 from "../../assets/img/project/project-brand-2.png";

import project_img_7 from "../../assets/img/project/project-img-3.jpg";
import project_brand_7 from "../../assets/img/project/project-brand-4.png";

import project_img_8 from "../../assets/img/project/project-img-4.jpg";
import project_brand_8 from "../../assets/img/project/project-brand-2.png";



const project_data = [
  {
    id: 1,
    img_1: project_img_1,
    img_2: project_brand_1,
    title: "Muckup Design",
    description: "Excepteur sint occaecat cupidatat officia non proident, sunt in culpa qui deserunt mollit anim id est laborum.",
    client_name: "Phillip Anthropy",
    budget: "200-250 k",
    budget_simble: "k",
    delay: ".9s"
  },
  {
    id: 2,
    img_1: project_img_2,
    img_2: project_brand_2,
    title: "3d Design",
    description: "Excepteur sint occaecat cupidatat officia non proident, sunt in culpa qui deserunt mollit anim id est laborum.",
    client_name: "Anthropy Phillip",
    budget: "200-250 k",
    budget_simble: "k",
    delay: ".5s"
  },
  {
    id: 3,
    img_1: project_img_3,
    img_2: project_brand_3,
    title: "App Design",
    description: "Excepteur sint occaecat cupidatat officia non proident, sunt in culpa qui deserunt mollit anim id est laborum.",
    client_name: "Phillip Anthropy",
    budget: "200-250 k",
    budget_simble: "k",
    delay: ".7s"
  },
  {
    id: 4,
    img_1: project_img_4,
    img_2: project_brand_4,
    title: "Graphic Design",
    description: "Excepteur sint occaecat cupidatat officia non proident, sunt in culpa qui deserunt mollit anim id est laborum.",
    client_name: "Anthropy Salim",
    budget: "200-250 k",
    budget_simble: "k",
    delay: ".9s"
  },
  {
    id: 5,
    img_1: project_img_5,
    img_2: project_brand_5,
    title: "Muckup Design",
    description: "Excepteur sint occaecat cupidatat officia non proident, sunt in culpa qui deserunt mollit anim id est laborum.",
    client_name: "Phillip Anthropy",
    budget: "200-250 k",
    budget_simble: "k",
    delay: ".9s"
  },
  {
    id: 6,
    img_1: project_img_6,
    img_2: project_brand_6,
    title: "3d Design",
    description: "Excepteur sint occaecat cupidatat officia non proident, sunt in culpa qui deserunt mollit anim id est laborum.",
    client_name: "Anthropy Phillip",
    budget: "200-250 k",
    budget_simble: "k",
    delay: ".5s"
  },
  {
    id: 7,
    img_1: project_img_7,
    img_2: project_brand_7,
    title: "App Design",
    description: "Excepteur sint occaecat cupidatat officia non proident, sunt in culpa qui deserunt mollit anim id est laborum.",
    client_name: "Phillip Anthropy",
    budget: "200-250 k",
    budget_simble: "k",
    delay: ".7s"
  },
  {
    id: 8,
    img_1: project_img_8,
    img_2: project_brand_8,
    title: "Graphic Design",
    description: "Excepteur sint occaecat cupidatat officia non proident, sunt in culpa qui deserunt mollit anim id est laborum.",
    client_name: "Anthropy Salim",
    budget: "200-250 k",
    budget_simble: "k",
    delay: ".9s"
  },


]

// Define reactive state
const isDragged = ref(false);
// Define methods
const handleSlideChange = () => {
  isDragged.value = true;
};

const handleTransitionEnd = () => {
  isDragged.value = false;
};


</script>


<template>
  <!-- tp-project-area-start -->
  <div class="tp-project__area grey-bg pt-50 pb-110 fix">
    <div class="container">
      <div class="row">
        <div class="col-xl-6">
          <div class="tp-project__section-box wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
            <h3 class="tp-section-title">Check Some Of Our Recent Work.</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid gx-0">
      <div class="row gx-0">
        <div class="col-xl-12">
          <div class="tp-project__slider-section">
            <Swiper 
              :slidesPerView="3" 
              :space-between="30" 
              :loop="true" 
              :centeredSlides="true" 
              :modules="[Navigation, Scrollbar]"                
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
              
              :scrollbar="{
                el: '.tp-scrollbar',
                clickable: true, 
              }"
              :onSliderMove='handleSlideChange'
              :onTransitionEnd='handleTransitionEnd'            
              :class="`swiper-container tp-project__slider-active ${isDragged? 'dragged' : ''}`">

              <SwiperSlide v-for="(item, i) in project_data" :key="i" class="swiper-slide wow tpfadeUp"
                data-wow-duration=".9s" data-wow-delay=".5s">
                <div class="tp-project__slider-wrapper">
                  <div class="tp-project__item d-flex align-items-center">
                    <div class="tp-project__thumb">
                      <img :src="item.img_1" alt="image-here">
                    </div>
                    <div class="tp-project__content">
                      <div class="tp-project__brand-icon">
                        <img :src="item.img_2" alt="image-here">
                      </div>
                      <div class="tp-project__title-box">
                        <h4 class="tp-project__title-sm">
                          <router-link to="/project-details">{{ item.title }}</router-link>
                        </h4>
                        <p>{{ item.description }}</p>
                      </div>
                      <div class="tp-project__meta d-flex align-items-center">
                        <div class="tp-project__author-info">
                          <span>Client Name</span>
                          <h4>{{ item.client_name }}</h4>
                        </div>
                        <div class="tp-project__budget">
                          <span>Budget</span>
                          <h4>${{ item.budget }}</h4>
                        </div>
                        <div class="tp-project__link">
                          <router-link to="/project-details">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.00098 7H13.001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                              <path d="M7.00098 1L13.001 7L7.00098 13" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </router-link>
                        </div>
                      </div>
                    </div>
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
  <!-- tp-project-area-end -->
</template>

 