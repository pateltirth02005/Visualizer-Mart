
<script setup>


import avata_1 from "~/assets/img/blog/blog-list-avata-1.jpg";
import avata_2 from "~/assets/img/blog/blog-list-avata-2.jpg";
import avata_3 from "~/assets/img/blog/blog-list-avata-3.jpg";

const recent_post_data = [
  {
    id: 1,
    img: avata_1,
    title: `Is slower team communication a bad thing?`,
    date: "4 March.",
    cls: "mb-20",
  },
  {
    id: 1,
    img: avata_2,
    title: `Is slower team communication a bad thing?`,
    date: "4 March.",
    cls: "mb-20",
  },
  {
    id: 1,
    img: avata_3,
    title: `The Ultimate Marketing Design Handbook`,
    date: "4 March.",
    cls: "",
  },
];


const categories_data = [
  { id: 1, title: "Technology", items: "01" },
  { id: 2, title: "Softec", items: "02" },
  { id: 3, title: "Development", items: "03" },
  { id: 4, title: "Tips & Tricks", items: "04" },
  { id: 5, title: "News", items: "05" },
];

const tags_data = [
  "Envato",
  "Development",
  "Technology",
  "Wordpress",
  "PHP",
  "Branding",
]



</script>



<template>

  <div class="col-xxl-4 col-xl-4 col-lg-4">
    <div class="sidebar__wrapper">

      <div class="sidebar__widget mb-40">
        <div class="sidebar__widge-title-box">
          <h3 class="sidebar__widget-title">Search</h3>
        </div>
        <div class="sidebar__widget-content">
          <div class="sidebar__search">
            <form @submit.prevent>
              <div class="sidebar__search-input-2">
                <input type="text" placeholder="Search your keyword...">
                <button type="submit">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.01371 15.2219C11.9525 15.2219 15.1456 12.0382 15.1456 8.11096C15.1456 4.18368 11.9525 1 8.01371 1C4.07488 1 0.881836 4.18368 0.881836 8.11096C0.881836 12.0382 4.07488 15.2219 8.01371 15.2219Z"
                      stroke="#5F6168" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16.9287 16.9996L13.0508 13.1331" stroke="#5F6168" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div class="sidebar__widget mb-40">
        <div class="sidebar__widge-title-box">
          <h3 class="sidebar__widget-title">Recent Post</h3>
        </div>
        <div class="sidebar__widget-content">
          <div class="sidebar__post rc__post">

            <div v-for="(item, i) in recent_post_data" :key="i" :class="`rc__post d-flex ${item.cls}`">
              <div class="rc__post-thumb mr-20">
                <router-link to="/blog-details"><img :src="item.img" alt="image-here"></router-link>
              </div>
              <div class="rc__post-content">
                <h3 class="rc__post-title">
                  <router-link to="/blog-details">{{ item.title }}</router-link>
                </h3>
                <div class="rc__meta">
                  <span>{{ item.date }} {{ new Date().getFullYear() }}</span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <div class="sidebar__widget mb-40">
        <div class="sidebar__widge-title-box">
          <h3 class="sidebar__widget-title">Categories</h3>
        </div>
        <div class="sidebar__widget-content">
          <ul>
            <li v-for="(item, i) in categories_data" :key="i">
              <router-link to="/blog"><span><i class="fal fa-angle-right"></i>{{ item.title }}</span><span>{{ item.items
              }}</span></router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="sidebar__widget mb-40">
        <div class="sidebar__widge-title-box">
          <h3 class="sidebar__widget-title">Tag Cloud</h3>
        </div>
        <div class="sidebar__widget-content">
          <div class="tagcloud">
            <router-link v-for="(item, i) in tags_data" :key="i" to="#">{{ item }}</router-link> 
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

 