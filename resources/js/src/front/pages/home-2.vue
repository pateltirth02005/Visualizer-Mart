
<script setup>
import { gsap } from 'gsap';
const { $ScrollSmoother,$ScrollTrigger } = useNuxtApp();
gsap.registerPlugin($ScrollTrigger, $ScrollSmoother);

import HeaderTwo from '~/layouts/headers/HeaderTwo.vue';
import FooterTwo from "~/layouts/footers/FooterTwo.vue";

// useHead
useHead({
  title: "Softec - Payment Gateway Vue Nuxt Template",
})


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
  <HeaderTwo />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="fix">
        <HeroBannerHeroAreaHomeTwo />
        <PaymentTpPaymentAreaHomeTwo />
        <PaymentPaymenAreatHomeTwo />
        <ServicesServiceAreaHomeTwo />
        <AccountAreaHomeTwo />
        <TestimonialAreaHomeTwo />
        <FaqHomeTwo />
        <CtaHomeTwo />
      </main>
      <FooterTwo />
    </div>
  </div>
</template>

 

