

<script setup>

import bg_img from "~/assets/img/service/sv-bg.jpg"

import dashbord from "~/assets/img/service/sv-dashbord.png";
import service_img from "~/assets/img/service/sv-details-1.jpg";

const service_details_content = {
  category_title: "Service Category",
  categorys: [
    { id: 1, category: "Branding" },
    { id: 2, category: "Web Design" },
    { id: 3, category: "Mobile Application" },
    { id: 4, category: "Development" },
    { id: 5, category: "Illusutration" },
  ],

  overview_title: "Service Overview",
  overview_des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci at dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  overview_list: [
    "Product Quality: <br /> <span>Automatically syncs across all your devices. You can also access....</span>",
    "On Demand Design: <br /> <span>Images, videos, PDFs and audio files are supported.</span>",
    "Choice of Service: <span>Whatever your business needs, you can choose a service.</span>",
  ],
  challange_titel: "The Challange",
  challange_des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci at dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod dapibus. Lorem ipsum dolor sit amet!",
  social_links: [
    {
      link: "http://facebook.com",
      icon: "fab fa-facebook-f",
    },
    {
      link: "http://twitter.com",
      icon: "fab fa-twitter",
    },
    {
      link: "http://www.instagram.com",
      icon: "fab fa-instagram",
    },
    {
      link: "http://www.youtube.com",
      icon: "fab fa-youtube",
    },
  ],

}
const {
  category_title,
  categorys,
  overview_title,
  overview_des,
  overview_list,
  challange_titel,
  challange_des,
  social_links,
} = service_details_content


</script>


<template>
  <!-- service-details-area-start -->
  <div class="sv-details-area pt-100 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-lg-4">
          <div class="sv-details-widget">
            <div class="sv-details-category mb-30">
              <div class="sv-details-category-title">
                <h4 class="sv-details-title-sm">{{ category_title }}</h4>
              </div>
              <div class="sv-details-category-list">
                <ul>
                  <li v-for="(item, i) in categorys" :key="i" :class="i === 1 ? 'active' : ''">
                    <a href="#"><span>{{ item.category }}</span><i class="fal fa-angle-right"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="tp-service__dashboard mb-30" :style="{ backgroundImage: `url(${bg_img})` }">
              <div class="tp-service__top-content">
                <h3 class="tp-service__title-white">Data Analysis <br /> Tools & Methods</h3>
                <p>Lorem Ipsum is simply dummy text <br /> of the printing</p>
                <a class="tp-btn-orange tp-btn-hover alt-color-white" href="#">
                  <span>Work with Us</span>
                  <b></b>
                </a>
              </div>
              <div class="tp-service__dashdboard-sm-img">
                <img class="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".3s" :src="dashbord"
                  alt="image-here">
              </div>
            </div>
            <div class="sv-details-social-box mb-30">
              <h4 class="sv-details-title-sm">Share it.</h4>
              <div class="sv-details-social-link">
                <router-link v-for="(item, i) in social_links" :key="i" :to="item.link" target="_blank">
                  <i :class="item.icon"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8 col-lg-8">
          <div class="sv-details-wrapper">
            <div class="sv-details-thumb mb-45">
              <img class="w-100" :src="service_img" alt="image-here">
            </div>
            <div class="sv-details-title-box mb-55">
              <h4 class="sv-details-title">{{ overview_title }}</h4>
              <p>{{ overview_des }}</p>
            </div>
            <div class="sv-details-text mb-35">
              <h4 class="sv-details-text-title pb-10">Going Beyond the Usual</h4>
              <ul>

                <li v-for="(item, i) in overview_list" :key="i">
                  <i class="fal fa-check"></i>
                  <p v-html="item"></p>
                </li>

              </ul>
            </div>
            <div class="sv-details-text-2">
              <h4 class="sv-details-text-title">{{ challange_titel }}</h4>
              <p>{{ challange_des }}</p>
            </div>
            <div class="tp-faq-area pt-50">
              <div class="container p-0">
                <div class="row g-0">
                  <div class="col-xl-12">
                    <h4 class="sv-details-title">Any Questions find here.</h4>
                    <CommonFaqArea />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- service-details-area-end -->
</template>

 