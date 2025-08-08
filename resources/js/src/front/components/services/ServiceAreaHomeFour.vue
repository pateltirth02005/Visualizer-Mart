

<script setup>

// for home 04
import icon_1 from "~/assets/img/service/sv-icon-4-1.png"
import icon_2 from "~/assets/img/service/sv-icon-4-2.png"
import icon_3 from "~/assets/img/service/sv-icon-4-3.png"
import icon_4 from "~/assets/img/service/sv-icon-4-4.png"


const service_data = [
  // for home 04
  {
    id: 10,
    icon: icon_1,
    img: icon_1,
    title: "Cyber Security Solustions",
    sub_title: "Cloud Backup",
    cls: "1",
    description: "Lorem Ipsum is simply dummy text <br /> of the printing",
    delay: ".9s",
  },
  {
    id: 11,
    icon: icon_2,
    img: icon_2,
    title: "AI Data Cloud Solution",
    sub_title: "Cloud Backup",
    cls: "2",
    description: "Lorem Ipsum is simply dummy text <br /> of the printing",
    delay: ".9s",
  },
  {
    id: 12,
    icon: icon_3,
    img: icon_3,
    title: "Managed <br /> Web Application",
    sub_title: "Cloud Backup",
    cls: "3",
    description: "Lorem Ipsum is simply dummy text <br /> of the printing",
    delay: ".9s",
  },
  {
    id: 13,
    icon: icon_4,
    img: icon_4,
    title: "24//7 Customer Support",
    sub_title: "Cloud Backup",
    cls: "4",
    description: "Lorem Ipsum is simply dummy text <br /> of the printing",
    delay: ".9s",
  }
]

</script>



<template>
  <!-- tp-service-area-start -->
  <div class="tp-service-area blue-bg p-relative pt-115 pb-105">
    <div class="tp-service-shape-right z-index">
      <img src="~/assets/img/service/service-shape-right.png" alt="image-here">
    </div>
    <div class="container">
      <div class="row align-items-end mb-60">
        <div class="col-xl-6 col-lg-6">
          <div class="tp-service-section-four">
            <h5 class="tp-section-subtitle-4 pb-10">WHAT WE DO</h5>
            <h3 class="tp-section-title-4">Our Services</h3>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6  wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
          <div class="tp-service-sction-content pb-15 d-flex justify-content-md-start justify-content-end">
            <p>Softec provides all customer management <br /> service within one software.
            </p>
          </div>
        </div>
      </div>
      <div class="tp-service-4-border-top  wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
        <div class="row">

          <div 
          v-for="(item,i) in service_data" :key="i"
          :class="`col-xl-3 col-lg-4 col-md-6 mb-50 tp-service-4-border-right service-border-trang-${item.cls}`">
            <div class="tp-service-4-item z-index">
              <div class="tp-service-4-icon">
                <img :src="item.img" alt="image-here">
              </div>
              <div class="tp-service-4-content">
                <span>{{ item.sub_title }}</span>
                <h4 class="tp-service-4-title">
                  <router-link to="/service-details"><a  v-html="item.title"></a></router-link>
                </h4>
                <router-link class="tp-btn-service" to="/service-details">Learn More</router-link>
              </div>
            </div>
          </div> 

        </div>
      </div>
    </div>
  </div>
  <!-- tp-service-area-end -->
</template>

 