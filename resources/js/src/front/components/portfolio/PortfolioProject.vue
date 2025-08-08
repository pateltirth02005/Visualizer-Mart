
<script setup>
// thumb img import here 
import thumb_img_1 from "~/assets/img/project/project-inner-1.jpg";
import thumb_img_2 from "~/assets/img/project/project-inner-2.jpg";
import thumb_img_3 from "~/assets/img/project/project-inner-3.jpg";
import thumb_img_4 from "~/assets/img/project/project-inner-5.jpg";
import thumb_img_5 from "~/assets/img/project/project-inner-4.jpg";
import thumb_img_6 from "~/assets/img/project/project-inner-6.jpg";
import thumb_img_7 from "~/assets/img/project/project-inner-7.jpg";
import thumb_img_8 from "~/assets/img/project/project-inner-8.jpg";
import thumb_img_9 from "~/assets/img/project/project-inner-9.jpg";
// brand logo import here
import brand_logo_1 from "~/assets/img/project/project-inner-brand-1.png";
import brand_logo_2 from "~/assets/img/project/project-inner-brand-2.png";
import brand_logo_3 from "~/assets/img/project/project-inner-brand-3.png";
import brand_logo_4 from "~/assets/img/project/project-inner-brand-5.png";
import brand_logo_5 from "~/assets/img/project/project-inner-brand-4.png";
import brand_logo_6 from "~/assets/img/project/project-inner-brand-6.png";
import brand_logo_7 from "~/assets/img/project/project-inner-brand-5.png";
import brand_logo_8 from "~/assets/img/project/project-inner-brand-4.png";
import brand_logo_9 from "~/assets/img/project/project-inner-brand-6.png";

const portfolio_data = [
  {
    id: 1,
    thumb_img: thumb_img_1,
    brand_logo: brand_logo_1,
    job_title: "Design Wok, Branding",
    title: `Airbnb Upgrade`,
    des: `Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.`,
    delay: ".5s",
    category: "Design Work",
    filter_id: ["all", "Design Work", "Branding", "Development", "Illusutration", "App Design"],
  },
  {
    id: 2,
    thumb_img: thumb_img_2,
    brand_logo: brand_logo_2,
    job_title: "Development, App Design",
    title: `Mobile App Design`,
    des: `Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.`,
    delay: ".5s",
    category: "Branding",
    filter_id: ["all", "Design Work", "Branding", "Development", "Illusutration", "App Design"],
  },
  {
    id: 3,
    thumb_img: thumb_img_3,
    brand_logo: brand_logo_3,
    job_title: "Branding, Illusutration",
    title: `Branding & Identity`,
    des: `Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.`,
    delay: ".5s",
    category: "Design Work",
    filter_id: ["all", "Design Work", "Branding", "Development", "Illusutration", "App Design"],
  },
  {
    id: 4,
    thumb_img: thumb_img_4,
    brand_logo: brand_logo_4,
    job_title: "Design Wok, Illusutration",
    title: `Muckup Design`,
    des: `Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.`,
    delay: ".5s",
    category: "Development",
    filter_id: ["all", "Design Work", "Branding", "Development", "Illusutration", "App Design"],
  },
  {
    id: 5,
    thumb_img: thumb_img_5,
    brand_logo: brand_logo_5,
    job_title: "Design Wok, Branding",
    title: `Realistic Scenarios`,
    des: `Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.`,
    delay: ".5s",
    category: "Illusutration",
    filter_id: ["all", "Design Work", "Branding", "Development", "Illusutration", "App Design"],
  },
  {
    id: 6,
    thumb_img: thumb_img_6,
    brand_logo: brand_logo_6,
    job_title: "Design Wok, App Design",
    title: `Design System & Ul Kit`,
    des: `Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.`,
    delay: ".5s",
    category: "Branding",
    filter_id: ["all", "Design Work", "Branding", "Development", "Illusutration", "App Design"],
  },
  {
    id: 7,
    thumb_img: thumb_img_7,
    brand_logo: brand_logo_7,
    job_title: "Design Wok, Illusutration",
    title: `Web Design`,
    des: `Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.`,
    delay: ".5s",
    category: "App Design",
    filter_id: ["all", "Design Work", "Branding", "Development", "Illusutration", "App Design"],
  },
  {
    id: 8,
    thumb_img: thumb_img_8,
    brand_logo: brand_logo_8,
    job_title: "Design Wok, Branding",
    title: `Landing Page Design`,
    des: `Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.`,
    delay: ".5s",
    category: "Development",
    filter_id: ["all", "Design Work", "Branding", "Development", "Illusutration", "App Design"],
  },
  {
    id: 9,
    thumb_img: thumb_img_9,
    brand_logo: brand_logo_9,
    job_title: "Design Wok, App Design",
    title: `Mobile Design`,
    des: `Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.`,
    delay: ".5s",
    category: "App Design",
    filter_id: ["all", "Design Work", "Branding", "Development", "Illusutration", "App Design"],
  },
  // extra
  {
    id: 10,
    thumb_img: thumb_img_5,
    brand_logo: brand_logo_5,
    job_title: "Design Wok, Branding",
    title: `Realistic Scenarios`,
    des: `Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.`,
    delay: ".5s",
    category: "App Design",
    filter_id: ["all", "Design Work", "Branding", "Development", "Illusutration", "App Design"],
  },
  {
    id: 11,
    thumb_img: thumb_img_6,
    brand_logo: brand_logo_6,
    job_title: "Design Wok, App Design",
    title: `Design System & Ul Kit`,
    des: `Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.`,
    delay: ".5s",
    category: "Illusutration",
    filter_id: ["all", "Design Work", "Branding", "Development", "Illusutration", "App Design"],
  },
  {
    id: 12,
    thumb_img: thumb_img_7,
    brand_logo: brand_logo_7,
    job_title: "Design Wok, Illusutration",
    title: `Web Design`,
    des: `Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.`,
    delay: ".5s",
    category: "Design Work",
    filter_id: ["all", "Design Work", "Branding", "Development", "Illusutration", "App Design"],
  },
]


const categories = [
  "All",
  ...new Set(portfolio_data.map((item) => item.category)),
];
const perView = 9;

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
  <div class="portfolio-area pt-100 pb-90">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="portfolio-filter masonary-menu text-center mb-35">

            <template v-for="(item, i) in categories" :key="i">
              <button @click="filterItems(item)" :class="`${item === activeCategory ? 'active' : ''}`">
                <span>{{ item }}</span>
              </button> {{ ' ' }}
            </template> 

          </div>
        </div>
      </div>
      <div class="row grid">


        <div v-for="(item, i) in items.slice(0, next)" :key="i" class="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-item">
          <div class="inner-project-item mb-30">
            <div class="inner-project-img fix p-relative">
              <img class="w-100" :src="item.thumb_img" alt="image-here">
              <div class="inner-project-brand">
                <img :src="item.brand_logo" alt="image-here">
              </div>
            </div>
            <div class="inner-project-content">
              <span class="inner-project-category-title">
                {{ item.job_title }}
              </span>
              <h4 class="inner-project-title">
                <router-link to="/project-details">{{ item.title }}</router-link></h4>
              <p>{{ item.des }}</p>
            </div>
          </div>
        </div>

        <div class="text-center" v-if="next < items.length">
          <button class="submit-btn" style="width: 20%; border-radius: 30px" @click="handleLoadMore">Load More</button>
        </div> 


      </div>
    </div>
  </div>
  <!--Portfolio End-->
</template>

 