

<script setup>

import author_img_3 from "~/assets/img/blog/blog-avata-3.png";

import img_4 from "~/assets/img/blog/blog-4-1.jpg"
import img_5 from "~/assets/img/blog/blog-4-2.jpg"


const blog_data = [
  // home 04
  {
    id: 4,
    img: img_4,
    delay: '.7s',
    category: "Blog",
    date: "10 min",
    title: `Building for the real world`,
    description: `How friends from college went on to build one powerful platform (hint: it was ours).`,
    author_img: author_img_3,
    author_name: "Penny Tool",
    job_title: "Founder & CEO Dulalix"
  },
  {
    id: 5,
    img: img_5,
    delay: '.9s',
    category: "Blog",
    date: "24 min",
    title: `High Returns on Investment`,
    description: `How friends from college went on to build one powerful platform (hint: it was ours).`,
    author_img: author_img_3,
    author_name: "Penny Tool",
    job_title: "Founder & CEO Dulalix"
  },
]


</script>


<template>
  <!-- tp-blog-area-start -->
  <div class="tp-blog-area blue-bg pb-90">
    <div class="container">
      <div class="row align-items-end tp-blog-four-section-space">
        <div class="col-xl-6 col-lg-6">
          <div class="tp-blog-four-section-box">
            <h5 class="tp-section-subtitle-4 pb-10">News Feeds</h5>
            <h3 class="tp-section-title-4">Blog & Insights</h3>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
          <div class="tp-blog-four-btn text-start text-lg-end">
            <router-link class="tp-btn-yellow-border" to="/blog-details">Show More <i class="far fa-angle-right"></i></router-link>
          </div>
        </div>
      </div>
      <div class="row">

        <div v-for="(item, i) in blog_data" :key="i" class="col-xl-6 col-lg-6 col-md-6 mb-40 wow tpfadeUp"
          data-wow-duration=".9s" :data-wow-delay="item.delay">
          <div class="tp-blog-four-item p-relative fix">
            <div class="tp-blog-four-img fix">
              <a href="#"><img :src="item.img" alt="image-here"></a>
            </div>
            <div class="tp-blog-four-content-wrapper">
              <div class="tp-blog-four-meta">
                <span class="child-1">{{ item.category }}</span>
                <span class="child-2">{{ item.date }}</span>
              </div>
              <div class="tp-blog-four-info">
                <h4 class="tp-blog-four-title-sm">
                  <router-link to="/blog-details">{{ item.title }}</router-link>
                </h4>
                <p v-html="item.description"></p>
              </div>
              <div class="tp-blog-four-btn">
                <router-link class="tp-btn-service" to="/blog-details">Read More</router-link>
              </div>
            </div>
          </div>
        </div> 

      </div>
    </div>
  </div>
  <!-- tp-blog-area-end -->
</template>
 