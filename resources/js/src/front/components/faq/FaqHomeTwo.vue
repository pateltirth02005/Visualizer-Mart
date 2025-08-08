

<script setup>

const faq_data = [
  {
    id: 1,
    question: "Why should I choose Softec?",
    answer: "The Softec Shop is built right into your account dashboard, and is accessible immediately after signing up.",
    accordion_id: "headingOne",
    collapsed: "collapsed",
    data_bs_target: "#collapseOne",
    aria_controls: "collapseOne",
    actice: "",
  },
  {
    id: 2,
    question: "Do I need to change banks??",
    answer: "The Softec Shop is built right into your account dashboard, and is accessible immediately after signing up.",
    accordion_id: "headingTwo",
    collapsed: "",
    data_bs_target: "#collapseTwo",
    aria_expanded: true,
    aria_controls: "collapseTwo",
    show: true,
    actice: "",

  },
  {
    id: 3,
    question: "How can I order equipment?",
    answer: "The Softec Shop is built right into your account dashboard, and is accessible immediately after signing up.",
    accordion_id: "headingThree",
    collapsed: "collapsed",
    data_bs_target: "#collapseThree",
    aria_controls: "collapseThree",
    actice: "",

  },
  {
    id: 4,
    question: "Do you offer volume discounts?",
    answer: "The Softec Shop is built right into your account dashboard, and is accessible immediately after signing up.",
    accordion_id: "headingFour",
    collapsed: "collapsed",
    data_bs_target: "#collapseFour",
    aria_controls: "collapseFour",
    actice: "",

  },
  {
    id: 5,
    question: "How does signing up work?",
    answer: "The Softec Shop is built right into your account dashboard, and is accessible immediately after signing up.",
    accordion_id: "headingFive",
    collapsed: "collapsed",
    data_bs_target: "#collapseFive",
    aria_controls: "collapseFive",
    actice: "",
  },
];


const active = ref(2)

const hendleActive = (id) => {
  active.value = id
}

const props = defineProps({
  style_service: {
    type: Boolean,
    default: false
  }
})

if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap");
}

</script>


<template>
  <!-- tp-faq-area-start -->
  <div class="tp-faq-area pt-140 pb-120 fix">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
          <div class="tp-faq-left-wrapper p-relative">
            <div
              :class="`${style_service ? 'tp-faq-section-box tp-inner-font tp-inner-faq-box' : 'tp-faq-section-box'} pb-20`">
              <h4 :class="`${style_service ? 'inner-section-subtitle' : 'tp-section-subtitle-2'}`">Support</h4>
              <h3 :class="`${style_service ? 'tp-section-title' : 'tp-section-title-lg'}`"
                v-html="style_service ? 'Frequently Asked Questions' : 'Frequently <br /> Asked Questions'">
              </h3>
              <p>Sed ut perspiciatis unde omnis iste natus error <br /> sit voluptatem accusantium.!</p>
            </div>
            <div class="tp-faq-btn">
              <router-link :class="`${style_service ? 'tp-btn-inner tp-btn-hover alt-color-black' : 'tp-btn-green'}`"
                to="/contact">Get in Touch</router-link>
            </div>
            <div class="tp-faq-img" data-parallax='{"x": -50, "smoothness": 30}'>
              <img src="~/assets/img/faq/faq-1.png" alt="image-here">
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="tp-custom-accordion">
            <div :class="`accordion ${style_service ? 'accordion tp-inner-font' : ''}`" id="accordionExample">

              <div v-for="(item, i) in faq_data" :key="i" @click="hendleActive(item.id)"
                :class="`accordion-items ${active === item.id ? 'tp-faq-active' : ''}`">
                <h2 class="accordion-header" :id="item.accordion_id">
                  <button :class="`accordion-buttons ${item.collapsed}`" type="button" data-bs-toggle="collapse"
                    :data-bs-target="item.data_bs_target" :aria-expanded="i === 1 ? 'false' : 'true'"
                    :aria-controls="item.aria_controls">
                    {{ item.question }}
                    <span class="accordion-btn"></span>
                  </button>
                </h2>
                <div :id="item.aria_controls" :class="`accordion-collapse collapse ${i === 1 ? 'show' : ''}`"
                  :aria-labelledby="item.accordion_id" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    {{ item.answer }}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-faq-area-end -->
</template>
 