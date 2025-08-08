

<script setup>

import header_img from "~/assets/img/price/price-4.1.png";

const price_content = {
  sub_title: "Who we are",
  title: "Confidence in Your Security",
  header_text: `You pay <span>$59.00/mo</span> today Renews <br /> April 2024 For <span>$69.00/mo</span>`,
}
const { sub_title, title, header_text } = price_content

// price header data 
const price_header = [
  {
    id: 1,
    title: "STARTER",
    description: `Collect more submissions, <br /> access most of the features`,
    price: 18,
    date: "Billed monthly",
    active: "",
  },
  {
    id: 2,
    title: "Advance",
    description: `Collect more submissions, <br /> access most of the features`,
    price: 19,
    date: "Billed monthly",
    active: "active",
  },
  {
    id: 3,
    title: "Team Plan",
    description: `Collect more submissions, <br /> access most of the features`,
    price: 14,
    date: "Billed monthly",
    active: "",
  },
]

// price feature 
const price_feature = [
  {
    id: 1,
    title: "Team",
    notice: `Add gradient heading, button, pricing table testimonial etc.`,
  },
  {
    id: 2,
    title: "Installed Agent",
    notice: `Add gradient heading, button, pricing table testimonial etc.`,
  },
  {
    id: 3,
    title: "Real-Time Feedback",
    notice: `Add gradient heading, button, pricing table testimonial etc.`,
  },
  {
    id: 4,
    title: "Adding Time Manually",
    notice: `Add gradient heading, button, pricing table testimonial etc.`,
  },
  {
    id: 5,
    title: "Adding Time Manually",
    notice: `Add gradient heading, button, pricing table testimonial etc.`,
  },

]

// price feature info
const price_feature_info = [
  {
    id: 1,
    active: "",
    info: [
      "02",
      "12",
      "Limited",
      "100",
      "Limited",
    ]

  },
  {
    id: 2,
    active: "active",
    info: [
      "02",
      "12",
      "Limited",
      "100",
      "Limited",
    ]

  },
  {
    id: 3,
    active: "",
    info: [
      "02",
      "12",
      "Limited",
      "100",
      "Limited",
    ]

  },
]



</script>



<template>
  <!-- tp-price-area-start -->
  <div class="tp-price-area pt-120 pb-145 blue-bg">
    <div class="container">
      <div class="row g-0">
        <div class="col-12">
          <div class="tp-price-sction-box text-center mb-30">
            <h5 class="tp-section-subtitle-4 both pb-10">{{ sub_title }}</h5>
            <h3 class="tp-section-title-4 pb-25">{{ title }}</h3>
          </div>
        </div>
      </div>
      <div class="tp-price-table">
        <div class="tp-price-table-wrapper">
          <div class="row g-0 align-items-center">
            <div class="col-4">
              <div class="tp-price-header">
                <div class="tp-price-header-img">
                  <img :src="header_img" alt="image-here">
                </div>
                <div class="tp-price-header-content">
                  <p v-html="header_text"></p>
                </div>
              </div>
            </div>
            <div class="col-8">
              <div class="tp-price-top-wrapper">


                <div v-for="(item, i) in price_header" :key="i"
                  :class="`tp-price-top-item text-center ${i === 1 ? 'active' : ''}`">
                  <div class="tp-price-top-tag-wrapper">
                    <span>{{ item.title }}</span>
                    <p v-html="item.description"></p>
                  </div>
                  <div class="tp-price-top-title-wrapper">
                    <h4><em>$</em>{{ item.price }} <span>/mo</span></h4>
                    <p>{{ item.date }}</p>
                    <router-link class="tp-btn-service" to="/price">Get Started</router-link>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="tp-price-feature-wrapper">
            <div class="row g-0">
              <div class="col-4">
                <div class="tp-price-feature-box">

                  <div v-for="(item, i) in price_feature" :key="i" class="tp-price-feature-item">
                    <div class="d-flex align-items-center">
                      <span>{{ item.title }}</span>
                      <div class="tp-price-feature-tooltip-box p-relative">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle opacity="0.5" cx="8" cy="8" r="7" stroke="white" stroke-width="1.5" />
                          <path d="M8 11.5V7.3" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                          <circle r="0.7" transform="matrix(1 0 0 -1 7.99883 5.19966)" fill="white" />
                        </svg>
                        <div class="tp-price-feature-tooltip">
                          <p>{{ item.notice }}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="col-8">

                <div v-for="(item, i) in price_feature_info" :key="i"
                  :class="`tp-price-feature-info-item ${i === 1 ? 'active' : ''}`">

                  <div v-for="(info, i) in item.info" :key="i" class="tp-price-feature-info text-center">
                    <span>{{ info }}</span>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-price-area-end -->
</template>

 