
<script setup>

import bg_img from "~/assets/img/service/service-5-1-bg.png";

// for home 05
import img_6 from "~/assets/img/service/sv-icon-5-1.png";
import img_7 from "~/assets/img/service/sv-icon-5-2.png";
import img_8 from "~/assets/img/service/sv-icon-5-3.png";
import img_9 from "~/assets/img/service/sv-icon-5-4.png";


const service_data = [
  // for home 05
  {
    id: 14,
    icon: img_6,
    img: img_6,
    title: "Live Inventory <br /> Management",
    sub_title: "Cloud Backup",
    cls: "4",
    description: "Track materials and stock for outsourced purchase orders",
    delay: ".9s",
  },
  {
    id: 15,
    icon: img_7,
    img: img_7,
    title: "Real-time Master <br />  Planning",
    sub_title: "Cloud Backup",
    cls: "4",
    description: "Track materials and stock for outsourced purchase orders",
    delay: ".9s",
  },
  {
    id: 16,
    icon: img_8,
    img: img_8,
    title: "Easy Contract <br /> Manufacturing",
    sub_title: "Cloud Backup",
    cls: "4",
    description: "Track materials and stock for outsourced purchase orders",
    delay: ".9s",
  },
  {
    id: 17,
    icon: img_9,
    img: img_9,
    title: "Omnichannel <br /> Order Management",
    sub_title: "Cloud Backup",
    cls: "4",
    description: "Track materials and stock for outsourced purchase orders",
    delay: ".9s",
  },
]

</script>


<template>
  <!-- tp-service-area-start -->
  <div class="tp-service-area tp-services-five-item-bg-color p-relative fix">
    <div class="container-fluid p-0">
      <div class="tp-service-five-bg" :style="{ backgroundImage: `url(${bg_img})` }"></div>
      <div class="row g-0 align-items-center">
        <div class="col-lg-6">
          <div class="tp-service-five-section-box">
            <span class="tp-section-subtitle-5">What we Offer</span>
            <h3 class="tp-section-title-5 pb-15">
              Get a Live <br />Look at Your <br /><span>Manufacturing</span> <br />
              <span>Business</span>
            </h3>
            <p class="pb-20">Access the insights you need to move products and <br />
              make decisions.
            </p>
            <router-link class="tp-btn-yellow-lg text-black" to="/service-details">View Details</router-link>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="row g-0">

            <div v-for="(item, i) in service_data" :key="i" class="col-md-6">
              <div class="tp-service-five-item z-index">
                <div class="tp-services-five-item-bg">
                  <div class="inner"></div>
                </div>
                <div class="tp-service-five-wrapper">
                  <div class="tp-service-five-icon">
                    <img :src="item.img" alt="image-here">
                  </div>
                  <div class="tp-service-five-content">
                    <h3 class="tp-service-five-title-sm">
                      <router-link to="/service-details">
                         <div v-html="item.title"></div>
                      </router-link>
                    </h3>
                    <p>
                       {{ item.description }}
                    </p>
                  </div>
                </div>
                <div class="tp-service-five-btn text-end">
                  <router-link to="/service-details"><i class="far fa-arrow-right"></i></router-link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-service-area-end -->
</template>

 