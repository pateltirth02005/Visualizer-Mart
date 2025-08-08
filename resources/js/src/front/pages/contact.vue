

<script setup>
import { gsap } from 'gsap';
const { $ScrollSmoother,$ScrollTrigger } = useNuxtApp();
gsap.registerPlugin($ScrollTrigger, $ScrollSmoother);

import HeaderSix from "~/layouts/headers/HeaderSix.vue";
import FooterFive from "~/layouts/footers/FooterFive.vue";

import bg_img from "~/assets/img/contact/contact-banner.jpg";


// useHead
useHead({title: "Contact Softec - Data analytics Vue Nuxt Template"});


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
          <CommonBreadcrumbsBreadcrumb title="Get In" innertitle="Touch" />
          <CommonHeroBanner :bg_img="bg_img" title="Get In" innerTitle="Touch" />
          <Location />
          <FormsContactForm />
          <CtaAbout />
        </main>
        <FooterFive :style_contact="true" :style_team="true" :bg_style="true" />
      </div>
    </div>
  </div>
</template>

 