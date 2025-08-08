

<script setup>
import { gsap } from 'gsap';
const { $ScrollSmoother,$ScrollTrigger } = useNuxtApp();
gsap.registerPlugin($ScrollTrigger, $ScrollSmoother);

import HeaderSix from "~/layouts/headers/HeaderSix.vue";
import FooterFive from "~/layouts/footers/FooterFive.vue";

import bg_img from "~/assets/img/breadcrumb/breadcrumb-2.jpg";
 
// useHead
useHead({title: "About Softec - Data analytics Vue Nuxt Template"});


if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap");
}

onMounted(() => {
  $ScrollSmoother.create({
    wrapper : '#smooth-wrapper',
    content : '#smooth-content',
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
          <CommonBreadcrumbsBreadcrumb title="About" innertitle="Softec" />
          <CommonHeroBanner :bg_img="bg_img" title="About" innerTitle="Softec" />
          <BrandAboutBrand />
          <CounterAboutCounterArea />
          <AboutArea />
          <TeamAreaHomeFour :style_2="true" />
          <TestimonialJourneyArea />
          <JobArea />
          <CtaAbout />
        </main>
        <FooterFive :style_contact="true" :style_team="true" :bg_style="true" />
      </div>
    </div>
  </div>
</template>

 