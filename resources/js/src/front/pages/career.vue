<script setup>
import { gsap } from 'gsap';
import { onMounted } from 'vue';
// const { $ScrollSmoother,$ScrollTrigger } = useNuxtApp();
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'
import Breadcrumbfour from '../components/common/breadcrumbs/Breadcrumbfour.vue';
import HeaderSix from "../layouts/headers/HeaderSix.vue";
import FooterFive from "../layouts/footers/FooterFive.vue";
import PlatformArea from "../components/common/PlatformArea.vue"
import JobArea from '../components/job/JobArea.vue';
import CommonScrollTop from '../components/common/ScrollTop.vue';
import CtaAbout from '../components/cta/CtaAbout.vue';
// useHead
document.title = "Career Softec - Data analytics Vue Nuxt Template";

onMounted(() => {
  ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 2,
    effects: true
  });
});
</script>


<template>
  <div>
    <CommonScrollTop />
    <HeaderSix />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <Breadcrumbfour />
          <PlatformArea style_2="true" />

          <CommonPlatformArea :style_2="true" />
          <JobArea :style_2="true" />
          <CtaAbout />
        </main>
        <FooterFive :style_contact="true" :style_team="true" :bg_style="true" />
      </div>
    </div>
  </div>
</template>