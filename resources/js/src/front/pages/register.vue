
<script setup>
import { gsap } from 'gsap';
import { onMounted, } from 'vue';
// const { ScrollSmoother,ScrollTrigger } = useNuxtApp();
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'
import HeaderSeven from "../layouts/headers/HeaderSeven.vue";
import Register from '../components/auth/Register.vue';
// import Offcanvus from '../components/common/Offcanvus.vue';
import CommonScrollTop from '../components/common/ScrollTop.vue'
// useHead
document.title = "Register Softec - Data analytics Vue Nuxt Template";

onMounted(() => {
  ScrollSmoother.create({
    wrapper : '#smooth-wrapper',
    content : '#smooth-content',
    smooth: 2,
    effects: true   
  });
})
</script>

<template>
  <div>
    <CommonScrollTop />
    <HeaderSeven />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <Register />
          <!-- <Offcanvus /> -->
        </main>
      </div>
    </div>
  </div>
</template>

 