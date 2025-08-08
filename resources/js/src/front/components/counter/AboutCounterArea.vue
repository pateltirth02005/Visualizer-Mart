

<script setup>
import CountUp from 'vue-countup-v3'

const company_content = {
  sub_title: "ABOUT THE COMPANY",
  title: "Softuch is Made <br />For the Creator.",
  info_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum arcu sollicitudin viverra sit elit leo in. Vitae eu tellus mattis quis. Eu, tempus donec nam mauris egestas. Id aliquet ultricies ligula tellus arcu dolor. Massa arcu pulvinar in mattis",
  info_2: "Feugiat purus congue risus, blandit a sed. In aenean quam aenean purus dictum pellentesque consequat.!",
  info_3: "Our clean and simple APIs and transparent SaaS model will give you complete peace of mind.",
  counter_data: [
    {
      id: 1,
      sub_title: "USED BY",
      count: 11000,
      title: "Creators",
      symble: "+",
      cls: "d-flex justify-content-start",
    },
    {
      id: 2,
      sub_title: "VALUE",
      count: 46,
      title: "Revenue per Year",
      symble: "m",
      cls: "d-flex justify-content-md-center justify-content-left",
    },
    {
      id: 3,
      sub_title: "IN",
      count: 150,
      title: "Countries using",
      symble: "+",
      cls: "ab-company-border-none d-flex justify-content-md-center justify-content-left",
    },
  ]
}
const { sub_title, title, info_1, info_2, info_3, counter_data } = company_content


// video popup 
import { useVideoModal } from "~/components/composables/useVideoModal";
const { playVideo } = useVideoModal();
const videoUrl = "https://www.youtube.com/embed/6-YDnSgNuw8?si=z4OAO5uFpWlCULu1";

</script>



<template>

  <!--ab-company-area-start -->
  <div class="ab-company-area pt-105 pb-100">
    <div class="container">
      <div class="row ab-company-section-space">
        <div class="col-xl-6">
          <div class="ab-company-section-box">
            <h4 class="inner-section-subtitle">{{ sub_title }}</h4>
            <h3 class="tp-section-title" v-html="title"></h3>
          </div>
        </div>
        <div class="col-xl-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
          <div class="ab-company-right">
            <div class="ab-company-section-text">
              <p class="pb-10">{{ info_1 }}</p>
              <p class="pb-10">{{ info_2 }}</p>
              <p><span>{{ info_3 }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-xl-4">
          <div class="ab-company-video">
            <a class="popup-video" 
            @click="playVideo(videoUrl)" :style="{ cursor: 'pointer' }" 
            ><i class="fas fa-play"></i></a>
            <span>Watch Demo</span>
          </div>
        </div>
        <div class="col-xl-8">
          <div class="row">

            <div
            v-for="(item, i) in counter_data" :key="i"
             class="col-md-4 col-sm-4 mb-40">
              <div :class="`ab-company-fun-fact-wrap ${item.cls}`">
                <div class="ab-company-fun-fact">
                  <span>{{ item.sub_title }}</span> 
                  <h4> 
                    <count-up :end-val="item.count" class="d-inline"></count-up>
                    <em>{{ item.symble }}</em>
                  </h4>
                  <p>{{ item.title }}</p>
                </div>
              </div>
            </div> 

          </div>
        </div>
      </div>
    </div>
  </div>
  <!--ab-company-area-end -->

<CommonVideoModal ref="video_modal" video-url="https://www.youtube.com/embed/cuA_ZDb-QDk?si=MlPxBV05EDKHnvIk" />

</template>
 