<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'
import HeroAreaHomeOne from '../components/hero-banner/HeroAreaHomeOne.vue'

import HeaderOne from "../layouts/headers/HeaderOne.vue";
import FooterFive from "../layouts/footers/FooterFive.vue";

import ServiceAreaHomeTwo from '../components/services/ServiceAreaHomeTwo.vue';
import ProjectAreaHomeOne from '../components/project/ProjectAreaHomeOne.vue'
import ServicesAreaHomeOne from '../components/services/ServicesAreaHomeOne.vue'
import TestimonialAreaHomeOne from '../components/testimonial/TestimonialAreaHomeOne.vue'
import RankAreaHomeOne from '../components/rank/RankAreaHomeOne.vue'
import PriceAreaHomeOne from '../components/price/PriceAreaHomeOne.vue'
import AboutArea from '../components/about/AboutArea.vue'
import CommonScrollTop from '../components/common/ScrollTop.vue'
import AnimatedMouse from '../components/animated-mouse.vue'
import { main } from '@popperjs/core'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// useHead
// useHead({
//   title: "Softec - Data analytics Vue Nuxt Template",
// });

if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap");
}
onMounted(async () => {
  document.title = "Softec - Data analytics Vue Nuxt Template";
  const wow = await import("wow.js");
  new wow.default().init();
});
onMounted(() => {
  ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 2,
    effects: true
  })

  // useTitleAnimation();
})
</script>
  
<template>
  <div>
    <AnimatedMouse />
    <CommonScrollTop />
    <HeaderOne />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main class="fix">
          <HeroAreaHomeOne />
          <ServiceAreaHomeTwo />
          <AboutArea :style_2="true" />
          <ServicesAreaHomeOne />
          <ProjectAreaHomeOne />
          <TestimonialAreaHomeOne />
          <RankAreaHomeOne />
          <PriceAreaHomeOne />
        </main>
         <FooterFive :style_contact="true" :style_team="true" :bg_style="true" />
      </div>
    </div>
  </div>
</template>
