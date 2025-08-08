

<script setup>

import img_1 from "~/assets/img/blog/blog-1.jpg"
import img_2 from "~/assets/img/blog/blog-2.jpg"
import img_3 from "~/assets/img/blog/blog-3.jpg"

import author_img_1 from "~/assets/img/blog/blog-avata-1.png";
import author_img_2 from "~/assets/img/blog/blog-avata-2.png";
import author_img_3 from "~/assets/img/blog/blog-avata-3.png";

import img_4 from "~/assets/img/blog/blog-4-1.jpg"
import img_5 from "~/assets/img/blog/blog-4-2.jpg"

const blog_data = [
  // home 03 
  {
    id: 1,
    img: img_1,
    category: "Crm Software",
    color: "1",
    date: "28 April, 2023",
    title: "How Chatbots Can Help You <br /> Drive More Sales",
    author_img: author_img_1,
    author_name: "Hilary Ouse",
    job_title: "Founder & CEO Dulalix"
  },
  {
    id: 2,
    img: img_2,
    category: "Sales Tools",
    color: "2",
    date: "28 April, 2023",
    title: "6 Tips for Personal Selling that Guarantee Success in 2023",
    author_img: author_img_2,
    author_name: "Rudra Ghosh",
    job_title: "Founder & CEO Dulalix"
  },
  {
    id: 3,
    img: img_3,
    category: "Sales Management",
    color: "3",
    date: "28 April, 2023",
    title: "How Chatbots Can Help You <br /> Drive More Sales",
    author_img: author_img_3,
    author_name: "Penny Tool",
    job_title: "Founder & CEO Dulalix"
  }
]

</script>



<template>
  <!-- tp-blog-area-start -->
  <div class="tp-blog-area pb-80">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-5">
          <div class="tp-blog-section-box text-center mb-50">
            <h3 class="tp-section-title-3">Our Latest <span>News and Articles</span></h3>
          </div>
        </div>
      </div>
      <div class="row">

        <div v-for="(item, i) in  blog_data" :key="i" class="col-xl-4 col-lg-4 col-md-6 mb-60">
          <div class="tp-blog-item">
            <div class="tp-blog-thumb fix">
              <router-link to="/blog-details"><img :src="item.img" alt="image-here"></router-link>
            </div>
            <div class="tp-blog-meta d-flex align-items-center">
              <div :class="`tp-blog-category category-color-${item.color}`">
                <span>{{ item.category }}</span>
              </div>
              <div class="tp-blog-date">
                <span>{{ item.date }}</span>
              </div>
            </div>
            <div class="tp-blog-title-box">
              <router-link class="tp-blog-title-sm" to="/blog-details">
                <span v-html="item.title"></span>
              </router-link>
            </div>
            <div class="tp-blog-author-info-box d-flex align-items-center">
              <div class="tp-blog-avata">
                <img :src="item.author_img" alt="image-here">
              </div>
              <div class="tp-blog-author-info">
                <h5>{{ item.author_name }}</h5>
                <span>{{ item.job_title }}</span>
              </div>
            </div>
          </div>
        </div> 

      </div>
    </div>
  </div>
  <!-- tp-blog-area-end -->
</template>
 