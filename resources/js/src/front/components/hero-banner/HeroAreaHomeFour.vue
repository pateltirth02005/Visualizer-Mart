<script setup>
onMounted(() => {
  useCharAnimation();
});
</script>


<template>
  <!-- tp-hero-area-start -->
  <div class="tp-hero-area tp-hero-overlay blue-bg pt-200 pb-115 p-relative">
    <div class="tp-hero-4-shape-img  wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
      <img src="~/assets/img/hero/hero-shape-4-1.png" alt="image-here">
    </div>
    <div class="tp-hero-glob-img">
      <img src="~/assets/img/hero/hero-4-3.png" alt="image-here">
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xl-7 col-lg-7">
          <div class="tp-hero-4-section-box pt-10 z-index-3">
            <h5 class="tp-section-subtitle-4 tp-char-animation"> Wellcome to Softec</h5>
            <h3 class="tp-hero-title-4 pb-35 tp-char-animation ">A1-Driven Cyber Security Solutions</h3>
            <router-link class="tp-btn-yellow-border wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s"
              to="/contact"><span>Get in Touch<i class="far fa-angle-right"></i></span></router-link>
          </div>
        </div>
        <div class="col-xl-5 col-lg-5">
          <div class="tp-hero-4-img-wrapper p-relative">
            <div class="tp-hero-4-main-img text-center z-index-3">
              <img src="~/assets/img/hero/hero-4-1.png" alt="image-here">
            </div>
            <div class="tp-hero-4-sub-img z-index-3">
              <img src="~/assets/img/hero/hero-4-2.png" alt="image-here">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-hero-area-end -->
</template>

 