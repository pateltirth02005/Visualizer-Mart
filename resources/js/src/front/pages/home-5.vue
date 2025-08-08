
<script setup>
import { gsap } from 'gsap';
const { $ScrollSmoother,$ScrollTrigger } = useNuxtApp();
gsap.registerPlugin($ScrollTrigger, $ScrollSmoother);

import HeaderFive from "~/layouts/headers/HeaderFive.vue";
import FooterFive from "~/layouts/footers/FooterFive.vue";

// useHead
useHead({title: "Softec - Data analytics Vue Nuxt Template"});


if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap");
}

onMounted(async () => {
  const wow = await import('wow.js')
  new wow.default().init()
})

onMounted(() => {
  $ScrollSmoother.create({
    wrapper : '#smooth-wrapper',
    content : '#smooth-content',
    smooth: 2,
    effects: true   
  });

  useTitleAnimation();
});
</script>


<template>
  <CommonScrollTop />
  <!-- <CommonCursor /> -->
  <animated-mouse />
  <HeaderFive />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="fix">
        <HeroBannerHeroAreaHomeFive />
        <VideoAreaHomeFive />
        <FunfactFunFactAreaHomeFive />
        <ServicesServiceAreaHomeFive />
        <CtaHomeFive />
        <PlanAreaHomeFive />
        <TestimonialArea />
        <FeatureAreaHomeFive />
        <IntegrationAreaHomeFive />
        <BusinessBoxHomeFive />
      </main>
      <FooterFive />
    </div>
  </div>
 

  <CommonVideoModal ref="video_modal" video-url="https://www.youtube.com/embed/7e90gBu4pas" />

</template>

 