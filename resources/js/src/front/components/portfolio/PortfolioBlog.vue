
<script setup>

import { Swiper, SwiperSlide } from "swiper/vue";

// thumb img import here 
import thumb_img_1 from "~/assets/img/blog/blog-grid-1.jpg";
import thumb_img_2 from "~/assets/img/blog/blog-grid-2.jpg";
import thumb_img_3 from "~/assets/img/blog/blog-grid-3.jpg";
import thumb_img_4 from "~/assets/img/blog/blog-grid-4.jpg";
import thumb_img_5 from "~/assets/img/blog/blog-grid-5.jpg";
import thumb_img_6 from "~/assets/img/blog/blog-grid-6.jpg";
import thumb_img_7 from "~/assets/img/blog/blog-grid-1.jpg";
import thumb_img_8 from "~/assets/img/blog/blog-grid-2.jpg";
import thumb_img_9 from "~/assets/img/blog/blog-grid-3.jpg";
import thumb_img_10 from "~/assets/img/blog/blog-grid-4.jpg";
import thumb_img_11 from "~/assets/img/blog/blog-grid-5.jpg";
import thumb_img_12 from "~/assets/img/blog/blog-grid-6.jpg";

// avata img import here
import avata_img_1 from "~/assets/img/avata/avata-1.png";
import avata_img_2 from "~/assets/img/avata/avata-2.png";
import avata_img_3 from "~/assets/img/avata/avata-3.png";
import avata_img_4 from "~/assets/img/avata/avata-4.png";
import avata_img_5 from "~/assets/img/avata/avata-5.png";
import avata_img_6 from "~/assets/img/avata/avata-6.png";
import avata_img_7 from "~/assets/img/avata/avata-1.png";
import avata_img_8 from "~/assets/img/avata/avata-2.png";
import avata_img_9 from "~/assets/img/avata/avata-3.png";
import avata_img_10 from "~/assets/img/avata/avata-4.png";
import avata_img_11 from "~/assets/img/avata/avata-5.png";
import avata_img_12 from "~/assets/img/avata/avata-6.png";

const portfolio_data = [
  {
    id: 1,
    thumb_img: thumb_img_1,
    avata_img: avata_img_1,
    name: "Hilary Ouse",
    job_title: "Founder & CEO Dulalix",
    title: "2024 Professional Year In <br /> Review",
    date: "April 12,",
    delay: ".5s",
    category: "Business",
  },
  {
    id: 2,
    thumb_img: thumb_img_2,
    avata_img: avata_img_2,
    name: "Rudra Ghosh",
    job_title: "Founder & CEO Dulalix",
    title: "Leveraging Feedback on <br /> Insights best.",
    date: "April 12,",
    delay: ".5s",
    category: "Business",
  },
  {
    id: 3,
    thumb_img: thumb_img_3,
    avata_img: avata_img_3,
    name: "Geraldine",
    job_title: "Founder & CEO Dulalix",
    title: "Typing Tutorials For Kids <br /> And Beginners",
    date: "April 12,",
    delay: ".5s",
    category: "Marketing",
  },
  {
    id: 4,
    thumb_img: thumb_img_4,
    avata_img: avata_img_4,
    name: "Helen M.",
    job_title: "Founder & CEO Dulalix",
    title: "Project Management at <br /> Your fingertips.",
    date: "April 24,",
    delay: ".5s",
    category: "Designing",
  },
  {
    id: 5,
    thumb_img: thumb_img_5,
    avata_img: avata_img_5,
    name: "R. Jones",
    job_title: "Founder & CEO Dulalix",
    title: "2024 Professional Year In <br /> Review",
    date: "April 12,",
    delay: ".5s",
    category: "Development",
  },
  {
    id: 6,
    thumb_img: thumb_img_6,
    avata_img: avata_img_6,
    name: "Frank P. Miller",
    job_title: "Founder & CEO Dulalix",
    title: "How Chatbots Can Help You <br /> Drive More Sales",
    date: "April 12,",
    delay: ".5s",
    category: "Business",
  },

  // extra
  {
    id: 7,
    thumb_img: thumb_img_7,
    avata_img: avata_img_7,
    name: "Hilary Ouse",
    job_title: "Founder & CEO Dulalix",
    title: "2024 Professional Year In <br /> Review",
    date: "April 12,",
    delay: ".5s",
    category: "Resources",
  },
  {
    id: 8,
    thumb_img: thumb_img_8,
    avata_img: avata_img_8,
    name: "Rudra Ghosh",
    job_title: "Founder & CEO Dulalix",
    title: "Leveraging Feedback on <br /> Insights best.",
    date: "April 12,",
    delay: ".5s",
    category: "Marketing",
  },
  {
    id: 9,
    thumb_img: thumb_img_9,
    avata_img: avata_img_9,
    name: "Geraldine",
    job_title: "Founder & CEO Dulalix",
    title: "Typing Tutorials For Kids <br /> And Beginners",
    date: "April 12,",
    delay: ".5s",
    category: "Business",
  },
  {
    id: 10,
    thumb_img: thumb_img_10,
    avata_img: avata_img_10,
    name: "Helen M.",
    job_title: "Founder & CEO Dulalix",
    title: "Project Management at <br /> Your fingertips.",
    date: "April 24,",
    delay: ".5s",
    category: "Development",
  },
  {
    id: 11,
    thumb_img: thumb_img_11,
    avata_img: avata_img_11,
    name: "R. Jones",
    job_title: "Founder & CEO Dulalix",
    title: "2024 Professional Year In <br /> Review",
    date: "April 12,",
    delay: ".5s",
    category: "Designing",
  },
  {
    id: 12,
    thumb_img: thumb_img_12,
    avata_img: avata_img_12,
    name: "Frank P. Miller",
    job_title: "Founder & CEO Dulalix",
    title: "How Chatbots Can Help You <br /> Drive More Sales",
    date: "April 12,",
    delay: ".5s",
    category: "Resources",
  },

]


</script>



<template>
  <!--Portfolio Start-->
  <div class="blog-grid-inner grey-bg pt-100 pb-50">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="popular-blog-title mb-40 text-center">
            <h4>Related Posts</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="blog-details-slider-wrapper">
            <Swiper :loop="true" :slidesPerView="3" :spaceBetween="30" :breakpoints="{
              '1200': {
                slidesPerView: 3,
              },
              '992': {
                slidesPerView: 2,
              },
              '768': {
                slidesPerView: 2,
              },
              '576': {
                slidesPerView: 1,
              },
              '0': {
                slidesPerView: 1,
              }
            }" class="swiper-container blog-slider-active pb-50">

              <SwiperSlide v-for="(item, i) in portfolio_data" :key="i" class="swiper-slide">
                <div class="tp-blog-item">
                  <div class="tp-blog-thumb fix">
                    <a href="#"><img :src="item.thumb_img" alt="image-here"></a>
                  </div>
                  <div class="tp-blog-content">
                    <div class="tp-blog-meta d-flex align-items-center">
                      <div class="tp-blog-category category-color-1">
                        <span>{{ item.category }}</span>
                      </div>
                      <div class="tp-blog-date">
                        <span>{{ item.date }} {{ new Date().getFullYear() }}</span>
                      </div>
                    </div>
                    <div class="tp-blog-title-box">
                      <a class="tp-blog-title-sm" href="#">
                        <a v-html="item.title"></a>
                      </a>
                    </div>
                    <div class="tp-blog-author-info-box d-flex align-items-center">
                      <div class="tp-blog-avata">
                        <img :src="item.avata_img" alt="image-here">
                      </div>
                      <div class="tp-blog-author-info">
                        <h5>{{ item.name }}</h5>
                        <span>{{ item.job_title }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>




              <!-- <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="tp-blog-item">
                    <div class="tp-blog-thumb fix">
                      <a href="#"><img src="~/assets/img/blog/blog-grid-1.jpg" alt="image-here"></a>
                    </div>
                    <div class="tp-blog-content">
                      <div class="tp-blog-meta d-flex align-items-center">
                        <div class="tp-blog-category category-color-1">
                          <span>Crm Software</span>
                        </div>
                        <div class="tp-blog-date">
                          <span>28 April, 2023</span>
                        </div>
                      </div>
                      <div class="tp-blog-title-box">
                        <a class="tp-blog-title-sm" href="#">2023 Professional Year <br /> In Review</a>
                      </div>
                      <div class="tp-blog-author-info-box d-flex align-items-center">
                        <div class="tp-blog-avata">
                          <img src="~/assets/img/blog/blog-avata-1.png" alt="image-here">
                        </div>
                        <div class="tp-blog-author-info">
                          <h5>Hilary Ouse</h5>
                          <span>Founder & CEO Dulalix</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="tp-blog-item">
                    <div class="tp-blog-thumb fix">
                      <a href="#"><img src="~/assets/img/blog/blog-grid-2.jpg" alt="image-here"></a>
                    </div>
                    <div class="tp-blog-content">
                      <div class="tp-blog-meta d-flex align-items-center">
                        <div class="tp-blog-category category-color-1">
                          <span>Crm Software</span>
                        </div>
                        <div class="tp-blog-date">
                          <span>28 April, 2023</span>
                        </div>
                      </div>
                      <div class="tp-blog-title-box">
                        <a class="tp-blog-title-sm" href="#">Leveraging Feedback on <br /> Insights best.</a>
                      </div>
                      <div class="tp-blog-author-info-box d-flex align-items-center">
                        <div class="tp-blog-avata">
                          <img src="~/assets/img/blog/blog-avata-2.png" alt="image-here">
                        </div>
                        <div class="tp-blog-author-info">
                          <h5>Hilary Ouse</h5>
                          <span>Founder & CEO Dulalix</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="tp-blog-item">
                    <div class="tp-blog-thumb fix">
                      <a href="#"><img src="~/assets/img/blog/blog-grid-3.jpg" alt="image-here"></a>
                    </div>
                    <div class="tp-blog-content">
                      <div class="tp-blog-meta d-flex align-items-center">
                        <div class="tp-blog-category category-color-1">
                          <span>Crm Software</span>
                        </div>
                        <div class="tp-blog-date">
                          <span>28 April, 2023</span>
                        </div>
                      </div>
                      <div class="tp-blog-title-box">
                        <a class="tp-blog-title-sm" href="#">Project Management at <br /> Your fingertips.</a>
                      </div>
                      <div class="tp-blog-author-info-box d-flex align-items-center">
                        <div class="tp-blog-avata">
                          <img src="~/assets/img/blog/blog-avata-3.png" alt="image-here">
                        </div>
                        <div class="tp-blog-author-info">
                          <h5>Hilary Ouse</h5>
                          <span>Founder & CEO Dulalix</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="tp-blog-item">
                    <div class="tp-blog-thumb fix">
                      <a href="#"><img src="~/assets/img/blog/blog-grid-2.jpg" alt="image-here"></a>
                    </div>
                    <div class="tp-blog-content">
                      <div class="tp-blog-meta d-flex align-items-center">
                        <div class="tp-blog-category category-color-1">
                          <span>Crm Software</span>
                        </div>
                        <div class="tp-blog-date">
                          <span>28 April, 2023</span>
                        </div>
                      </div>
                      <div class="tp-blog-title-box">
                        <a class="tp-blog-title-sm" href="#">Leveraging Feedback on <br /> Insights best.</a>
                      </div>
                      <div class="tp-blog-author-info-box d-flex align-items-center">
                        <div class="tp-blog-avata">
                          <img src="~/assets/img/blog/blog-avata-1.png" alt="image-here">
                        </div>
                        <div class="tp-blog-author-info">
                          <h5>Hilary Ouse</h5>
                          <span>Founder & CEO Dulalix</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->





            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Portfolio End-->
</template>

 