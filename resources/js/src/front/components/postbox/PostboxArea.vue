
<script setup>

import img_1 from "~/assets/img/blog/blog-list-1.jpg";
import img_2 from "~/assets/img/blog/blog-list-3.jpg";
import thumb from "~/assets/img/blog/blog-list-2.jpg"; 

// blog page data
const blog_page_data = [
  {
    id: 1,
    img: img_1,
    cls: "format-image",
    category: "Resources",
    date: "April 12,",
    title: "Typing Tutorials For Kids And Beginners",
    des: `From publishing content and hoping to acquire leads to gaining audience insights and making personalized content, content marketing. From publishing content and hoping to acquire leads to gaining audience insights and making personalized content, content marketing. From publishing content and hoping to acquire leads to gaining audience insights and making personalized content, content marketing.`,
  },
  {
    id: 2,
    img: thumb,
    cls: "format-video",
    category: "Resources",
    date: "April 20,",
    videoId: "-WRZI63emjs",
    title: "Designing the Kids Space Universe",
    des: `From publishing content and hoping to acquire leads to gaining audience insights and making personalized content, content marketing. From publishing content and hoping to acquire leads to gaining audience insights and making personalized content, content marketing. From publishing content and hoping to acquire leads to gaining audience insights and making personalized content, content marketing.`,
  },
  {
    id: 3,
    img: img_2,
    cls: "format-image fix",
    category: "Resources",
    date: "April 12,",
    title: "Typing Tutorials For Kids And Beginners",
    des: `From publishing content and hoping to acquire leads to gaining audience insights and making personalized content, content marketing. From publishing content and hoping to acquire leads to gaining audience insights and making personalized content, content marketing. From publishing content and hoping to acquire leads to gaining audience insights and making personalized content, content marketing.`,
  },
];

// video popup
import { useVideoModal } from "~/components/composables/useVideoModal";
const { playVideo } = useVideoModal();
const videoUrl = 'https://www.youtube.com/embed/5IanQIwhA4E?si=mH_11uavYvmADRlD';

</script>


<template>
  <!-- postbox area start -->
  <div class="postbox__area pb-100">
    <div class="container">
      <div class="row">
        <div class="col-xxl-8 col-xl-8 col-lg-8">
          <div id="blog" class="postbox__wrapper pr-20">

            <article v-for="(item, i) in blog_page_data" :key="i" :class="`postbox__item ${item.cls} mb-70 transition-3`">

              <div v-if="i !== 1" class="postbox__thumb w-img">
                <router-link to="/blog-details">
                  <img :src="item.img" alt="image-here">
                </router-link>
              </div>

              <div v-if="i === 1" class="postbox__thumb postbox__video w-img p-relative">
                <router-link to="/blog-details">
                  <img :src="item.img" alt="image-here">
                </router-link>
                <button @click="playVideo(videoUrl)" :style="{ cursor: 'pointer' }"
                  class="play-btn pulse-btn popup-video">
                  <i class="fas fa-play"></i>
                </button>

              </div>

              <div class="postbox__content">
                <div class="postbox__meta">
                  <span>
                    <router-link to="#">{{ item.category }}</router-link>
                  </span>
                  <span>
                    <router-link to="#">{{ item.date }} {{ new Date().getFullYear() }}</router-link>
                  </span>
                </div>
                <h3 class="postbox__title">
                  <router-link to="/blog-details">{{ item.title }}</router-link>
                </h3>
                <div class="postbox__text">
                  <p>{{ item.des }}</p>
                </div>
                <div class="postbox__btn mt-35">
                  <router-link class="tp-btn-inner tp-btn-hover alt-color-black" to="/blog-details">
                    <span>Read More</span>
                    <b></b>
                  </router-link>
                </div>
              </div>

            </article>


            <div class="basic-pagination">
              <nav>
                <ul>
                  <li>
                    <router-link to="/blog">
                      <i class="far fa-angle-left"></i>
                    </router-link>
                  </li>
                  <li>
                    <router-link class="current" to="/blog">1</router-link>
                  </li>
                  <li>
                    <router-link to="/blog">2</router-link>
                  </li>
                  <li>
                    <span>...</span>
                  </li>
                  <li>
                    <router-link to="/blog">3</router-link>
                  </li>
                  <li>
                    <router-link to="/blog">
                      <i class="far fa-angle-right"></i>
                    </router-link>
                  </li>
                </ul>
              </nav>
            </div>

          </div>
        </div>

        <PostboxSlidebar /> 

      </div>
    </div>
  </div>
  <!-- postbox area end -->

  <!-- <CommonVideoModal /> -->
</template>

 