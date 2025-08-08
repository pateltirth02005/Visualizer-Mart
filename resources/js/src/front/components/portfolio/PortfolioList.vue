
<script setup>

// thumb img import here 
import thumb_img_1 from "~/assets/img/blog/blog-grid-1.jpg";
import thumb_img_2 from "~/assets/img/blog/blog-grid-2.jpg";
import thumb_img_3 from "~/assets/img/blog/blog-grid-3.jpg";

// avata img import here
import avata_img_1 from "~/assets/img/avata/avata-1.png";
import avata_img_2 from "~/assets/img/avata/avata-2.png";
import avata_img_3 from "~/assets/img/avata/avata-3.png";

const portfolio_data = [
  {
    id: 1,
    thumb_img: thumb_img_1,
    avata_img: avata_img_1,
    name: "Hilary Ouse",
    job_title: "Founder & CEO Dulalix",
    title: "2024 Professional Year In <br /> Review",
    date: "April 12, 2024",
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
    date: "April 12, 2024",
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
    date: "April 12, 2024",
    delay: ".5s",
    category: "Marketing",
  }

]


</script>


<template>
  <!--Portfolio Start-->
  <div class="blog-grid-inner mb-80">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="popular-blog-title mb-40 text-center">
            <h4>Our Popular Posts</h4>
          </div>
        </div>
      </div>
      <div class="row">

        <div v-for="(item, i) in portfolio_data" :key="i" class="col-xl-4 col-lg-6 col-md-6 mb-30">
          <div class="tp-blog-item">
            <div class="tp-blog-thumb fix">
              <router-link to="/blog-details">
                <img :src="item.thumb_img" alt="image-here">
              </router-link>
            </div>
            <div class="tp-blog-content">
              <div class="tp-blog-meta d-flex align-items-center">
                <div class="tp-blog-category category-color-1">
                  <span>{{ item.category }}</span>
                </div>
                <div class="tp-blog-date">
                  <span>{{ item.date }}</span>
                </div>
              </div>
              <div class="tp-blog-title-box">
                <router-link class="tp-blog-title-sm" to="/blog-details">
                  <a v-html="item.title"></a>
                </router-link>
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
        </div>

      </div>
    </div>
  </div>
  <!--Portfolio End-->
</template>

