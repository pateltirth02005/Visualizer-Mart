
<script setup>
import { ref, onMounted } from 'vue' // ✅ THIS IS REQUIRED!
import bg_img from "../../assets/img/service/sv-bg.jpg";
import dashbord_img from "../../assets/img/service/sv-dashbord.png"


// images import  
import img_1 from "../../assets/img/service/sv-icon-1.png";
import img_2 from "../../assets/img/service/sv-icon-2.png";
import img_3 from "../../assets/img/service/sv-icon-3.png";
import img_4 from "../../assets/img/service/sv-icon-4.png";
import img_5 from "../../assets/img/service/sv-icon-5.png";

const service_data = [
  // for home 01 
  {
    id: 1,
    icon: img_1,
    img: img_1,
    title: "AI Data Analysis",
    description: "Lorem Ipsum is simply dummy text <br /> of the printing",
    delay: ".4s",
  },
  {
    id: 2,
    icon: img_2,
    img: img_2,
    title: "Machine Learning",
    description: "Lorem Ipsum is simply dummy text <br /> of the printing",
    delay: ".6s",
  },
  {
    id: 3,
    icon: img_3,
    img: img_3,
    title: "Data Visualization",
    description: "Lorem Ipsum is simply dummy text <br /> of the printing",
    delay: ".7s",
  },
  {
    id: 4,
    icon: img_4,
    img: img_4,
    title: "Business Intelligence",
    description: "Lorem Ipsum is simply dummy text <br /> of the printing",
    delay: ".8s",
  },
  {
    id: 5,
    icon: img_5,
    img: img_5,
    title: "Artificial Intelligence",
    description: "Lorem Ipsum is simply dummy text <br /> of the printing",
    delay: ".9s",
  },
]


</script>


<template>
  <!-- tp-services-area-start -->
  <div class="tp-service__area p-relative fix">
    <div class="tp-service__grey-shape grey-bg"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="tp-service__section-box mb-50 text-center tp-title-anim">
            <h2 class="tp-section-title tp-section-title2 d-flex justify-content-center">Explore Our Data Services</h2>
            <p>More than 15,000 companies trust and choose Itech</p>
          </div>
        </div>
      </div>
      <div class="row">

        <div v-for="(item, i) in service_data" :key="i" class="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp"
          data-wow-duration=".9s" :data-wow-delay="item.delay">
          <div class="tp-service__item mb-30">
            <div class="tp-service__icon">
              <img :src="item.icon" alt="image-here">
            </div>
            <div class="tp-service__content">
              <h3 class="tp-service__title-sm tp-orange-color">
                <router-link to="/service-details">{{ item.title }}</router-link>
              </h3>
              <p v-html="item.description"></p>
            </div>
            <div class="tp-service__link">
              <router-link to="/service-details">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.00098 7H13.001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M7.00098 1L13.001 7L7.00098 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
          <div class="tp-service__dashboard" :style="{ backgroundImage: `url(${bg_img})` }">
            <div class="tp-service__top-content">
              <h3 class="tp-service__title-white">Data Analysis <br /> Tools & Methods</h3>
              <p>Lorem Ipsum is simply dummy text <br /> of the printing</p>
              <router-link class="tp-btn-orange tp-btn-hover alt-color-white" to="/project-details">
                <span>Work with Us</span>
                <b></b>
              </router-link>
            </div>
            <div class="tp-service__dashdboard-sm-img">
              <img class="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s" :src="dashbord_img" alt="image-here">
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <!-- tp-services-area-end -->
</template>
 