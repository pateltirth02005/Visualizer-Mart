

<script setup>

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
  },
  {
    id: 4,
    thumb_img: thumb_img_4,
    avata_img: avata_img_4,
    name: "Helen M.",
    job_title: "Founder & CEO Dulalix",
    title: "Project Management at <br /> Your fingertips.",
    date: "April 24, 2024",
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
    date: "April 12, 2024",
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
    date: "April 12, 2024",
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
    date: "April 12, 2024",
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
    date: "April 12, 2024",
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
    date: "April 12, 2024",
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
    date: "April 24, 2024",
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
    date: "April 12, 2024",
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
    date: "April 12, 2024",
    delay: ".5s",
    category: "Resources",
  },

]



const categories = [
  "All",
  ...new Set(portfolio_data.map((item) => item.category)),
];
const perView = 6;

const activeCategory = ref("All");
const items = ref(portfolio_data);
const next = ref(perView);

const filterItems = (cateItem) => {
  activeCategory.value = cateItem;
  next.value = perView;

  if (cateItem === "All") {
    items.value = portfolio_data;
  } else {
    const findItems = portfolio_data.filter(
      (findItem) => findItem.category === cateItem
    );
    items.value = findItems;
  }
};

const handleLoadMore = () => {
  next.value += 3;
};

</script>




<template>
  <!--Portfolio Start-->
  <div class="portfolio blog-grid-inner mb-80">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="tp-about__section-box text-center mb-40">
            <h4 class="inner-section-subtitle">OVER 150K+ CLIENT</h4>
            <h3 class="tp-section-title">Accomplish more, Together</h3>
            <p>Softuch blog is your knowledge center for everything remote.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="portfolio-filter masonary-menu text-center mb-35">

            <template v-for="(item, i) in categories" :key="i">
              <button  @click="filterItems(item)" :class="`${item === activeCategory ? 'active' : ''}`">
                <span>{{ item }}</span>
              </button> {{ ' ' }}
            </template> 

          </div>
        </div>
      </div>
      <div class="row grid blog-grid-inner">

        <div v-for="(item, i) in items.slice(0, next)" :key="i"
          class="col-xl-4 col-lg-6 col-md-6 mb-30 grid-item cat1 cat4 cat3 cat5">
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
                  <div v-html="item.title"></div>
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
        
        <div class="text-center" v-if="next < items.length">
          <button class="submit-btn" style="width: 20%; border-radius: 30px"  @click="handleLoadMore">Load More</button>
        </div>


      </div>
    </div>
  </div>
  <!--Portfolio End-->
</template>

 