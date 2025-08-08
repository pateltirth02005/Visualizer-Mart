
<script setup>

import { ref, onMounted } from 'vue' // ✅ THIS IS REQUIRED!
// img and icon import here 
import bg_right_img from "../../assets/img/rank/rank-bg-shape.png";
import top_img_1 from "../../assets/img/rank/rank-cup.png";
import img_1 from "../../assets/img/rank/amazon.png";
import img_2 from "../../assets/img/rank/ebay.png";
import img_3 from "../../assets/img/rank/walmart.png";
import img_4 from "../../assets/img/rank/shopify.png";
// circle 
import cirimg_1 from "../../assets/img/rank/sky-circle.png";
import cirimg_2 from "../../assets/img/rank/yellow-circle.png";
import cirimg_3 from "../../assets/img/rank/black-circle.png";
import cirimg_4 from "../../assets/img/rank/black-sm-circle.png";
import cirimg_5 from "../../assets/img/rank/black-sm-circle.png";
import cirimg_6 from "../../assets/img/rank/black-sm-circle.png";
import cirimg_7 from "../../assets/img/rank/black-sm-circle.png";


// rank_data
const rank_data = [
  {
    id: 1,
    cls_1: "active z-index",
    cls_2: "tp-rank__cup",
    top_img: top_img_1,
    count: 1,
    img: img_1,
    // cls_3: "",
    domain: "amazon.com",
    visitors: "2.4B Visits",

  },
  {
    id: 2,
    cls_1: "",
    // cls_2: "",
    // top_img: "",
    count: 2,
    img: img_2,
    // cls_3: "",
    domain: "ebay.com",
    visitors: "700.2M Visits",

  },
  {
    id: 3,
    cls_1: "z-index",
    // cls_2: "",
    // top_img: "",
    count: 3,
    img: img_3,
    // cls_3: "",
    domain: "walmart.com",
    visitors: "489.6M Visits",

  },
  {
    id: 4,
    cls_1: "",
    // cls_2: "",
    // top_img: "",
    count: 4,
    img: img_4,
    // cls_3: "",
    domain: "shopify.com",
    visitors: "386.6M Visits",

  },
]

// circle_shape
const circle_shape = [
  {
    id: 1,
    cls: "1 tpfadeUp",
    img: cirimg_1,
    delay: ".3s",
  },
  {
    id: 2,
    cls: "2 tpfadeLeft",
    img: cirimg_2,
    delay: ".5s",
  },
  {
    id: 3,
    cls: "3 tpfadeRight",
    img: cirimg_3,
    delay: ".4s",
  },
  {
    id: 4,
    cls: "4 tpfadeIn",
    img: cirimg_4,
    delay: ".7s",
  },
  {
    id: 5,
    cls: "5 tpfadeUp",
    img: cirimg_5,
    delay: ".9s",
  },
  {
    id: 6,
    cls: "6 tpfadeUp",
    img: cirimg_6,
    delay: ".2s",
  },
  {
    id: 7,
    cls: "7 tpfadeIn",
    img: cirimg_7,
    delay: ".1s",
  },
]

</script>

<template>
  <!-- tp-rank-area-start -->
  <div class="tp-rank__area pb-200">
    <div class="container">
      <div class="row">
        <div class="col-xl-5 col-lg-5 order-1 order-lg-1">
          <div class="tp-rank__section-box pb-25 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
            <h4 class="tp-section-subtitle">Key Benefits</h4>
            <h3 class="tp-section-title">Get more Sales <br /> by Improving <br /> Results
            </h3>
          </div>
          <div class="tp-rank__btn wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
            <router-link class="tp-btn tp-btn-hover alt-color-black" to="/service-details">
              <span>Explore More</span>
              <b></b>
            </router-link>
          </div>
        </div>
        <div class="col-xl-7 col-lg-7 order-0 order-lg-2">
          <div class="tp-rank__wrapper p-relative">

            <div v-for="(item, i) in circle_shape" :key="i"
              :class="`tp-rank__circle-shape-${item.cls} d-none d-sm-block wow`" data-wow-duration=".9s"
              :data-wow-delay="item.delay">
              <img :src="item.img" alt="image-here">
            </div>

            <div class="tp-rank__bg-shape">
              <img class="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay="1.2s" :src="bg_right_img" alt="image-here">
            </div>

            <div class="tp-rank__rank-card wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">

              <div v-for="(item, i) in rank_data" :key="i" :class="`tp-rank__item p-relative ${item.cls_1}`">
                <div v-if="item.top_img" class="tp-rank__cup">
                  <span><img :src="item.top_img" alt="image-here"></span>
                </div>
                <div class="tp-rank__number d-flex align-items-center justify-content-center">
                  <i>#</i>
                  <span>{{ item.id }}</span>
                </div>
                <div class="tp-rank__company">
                  <span><img :src="item.img" alt="image-here"></span>
                </div>
                <div class="tp-rank__company-info">
                  <a href="#">{{ item.domain }}</a>   
                  <span> <br> {{ item.visitors }}</span>
                </div>

                <!-- <div class="tp-rank__company-info">
                  <a href="#">amazon.com</a>  
                  <span>2.4B Visits</span>
                </div> -->

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-rank-area-end -->
</template>

 