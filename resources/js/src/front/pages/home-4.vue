
<script setup>
import { gsap } from 'gsap';
const { $ScrollSmoother,$ScrollTrigger } = useNuxtApp();
gsap.registerPlugin($ScrollTrigger, $ScrollSmoother);

import HeaderFour from "~/layouts/headers/HeaderFour.vue";
import FooterFour from "~/layouts/footers/FooterFour.vue";

// useHead
useHead({title: "Softec - Data analytics Vue Nuxt Template"})


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
})

</script>


<template>
  <CommonScrollTop />
  <HeaderFour />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="fix">
        <HeroBannerHeroAreaHomeFour />
        <BrandHomeFour />
        <ServicesServiceAreaHomeFour />
        <AboutAreaHomeFour />
        <FunfactFunFactAreaHomeFour />
        <CommonPlatformArea />
        <PriceAreaHomeFour />
        <TeamAreaHomeFour />
        <BrandSecurityArea />
        <BlogAreaHomeFour />
        <FormsContactFormHomeFour />
      </main>
      <FooterFour />
    </div>
  </div>
</template>

 