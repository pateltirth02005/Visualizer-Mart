<script setup>
import { gsap } from "gsap";
const { $ScrollSmoother, $ScrollTrigger } = useNuxtApp();
gsap.registerPlugin($ScrollTrigger, $ScrollSmoother);

import HeaderSix from "~/layouts/headers/HeaderSix.vue";
import FooterFive from "~/layouts/footers/FooterFive.vue";

// useHead
useHead({title: "Blog List - Data analytics Vue Nuxt Template"});

onMounted(() => {
  $ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
    effects: true,
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
          <CommonBreadcrumbsBreadcrumbTwo
            title="Read our blogs"
            innertitle="Blog Grid Classic"
          />
          <BlogGrid />
          <PortfolioList />
          <PostboxArea />
          <CtaAbout />
        </main>
        <FooterFive :style_contact="true" :style_team="true" :bg_style="true" />
      </div>
    </div>
    <CommonVideoModal />
  </div>
</template>
