

<script setup>

import plan_img_1 from "~/assets/img/plan/plan-1-1.png"
import plan_img_2 from "~/assets/img/plan/plan-1-2.png"
import plan_img_3 from "~/assets/img/plan/plan-1-3.png"
import plan_img_4 from "~/assets/img/plan/plan-1-4.png"
import plan_img_5 from "~/assets/img/plan/plan-1-5.png"
import plan_img_6 from "~/assets/img/plan/plan-1-6.png"

import img from "~/assets/img/cta/cta-title-icon-2.png";

const plan_content = {
  img_box: [
    { id: 1, img: plan_img_1, cls: "1", },
    { id: 2, img: plan_img_2, cls: "2 d-none d-sm-block", },
    { id: 3, img: plan_img_3, cls: "3", },
    { id: 4, img: plan_img_4, cls: "4", },
    { id: 5, img: plan_img_5, cls: "5 d-none d-sm-block", },
    { id: 6, img: plan_img_6, cls: "6 d-none d-sm-block", },
  ],

  sub_title: "INVOICES",
  title: "Simple <span>Tools</span>, Powerful Effects",

}
const { img_box, sub_title, title } = plan_content

const accordion_data = [
  {
    id: 1,
    question: "Dashboard",
    answer: "ERP provides a complete leave management system for your HR. Upcoming holidays and remaining leave balances.",
    accordion_id: "One",  
  },
  {
    id: 2,
    question: "Task Management",
    answer: "ERP provides a complete leave management system for your HR. Upcoming holidays and remaining leave balances.",
    accordion_id: "Two",  
  },
]

</script>


<template>
  <!-- tp-plan-area-start -->
  <div class="tp-plan-area tp-plan-2-space fix">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-5 col-lg-5 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
          <div class="tp-plan-section-box">
            <div class="tp-plan-section-icon pb-30">
              <img src="~/assets/img/cta/cta-title-icon-2.png" alt="image-here">
            </div>
            <span class="tp-section-subtitle-5 text-black">{{ sub_title }}</span>
            <h3 class="tp-section-title-5 text-black pb-25" v-html="title"></h3>
          </div>
          <div class="tp-custom-accordio-2">
            <div class="accordion" id="accordionExample">

              <div v-for="(item, i) in accordion_data" :key="i" class="accordion-items">
                <h2 class="accordion-header" :id="`heading${item.accordion_id}`">
                  <button 
                  :class="`accordion-buttons ${i === 1 ? '' : 'collapsed'}`" 
                  type="button" 
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse${item.accordion_id}`" 
                  :aria-expanded="`${i === 0? 'true' : 'false'}`" 
                  :aria-controls="`collapse${item.accordion_id}`">
                    {{ item.question }}
                  </button>
                </h2>
                <div :id="`collapse${item.accordion_id}`" :class="`accordion-collapse collapse ${i === 1? 'show' : ''}`" :aria-labelledby="`heading${item.accordion_id}`"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                     {{ item.answer }}
                  </div>
                </div>
              </div>
 
            </div>
          </div>

        </div>
        <div class="col-xl-7 col-lg-7  wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
          <div class="tp-plan-2-img-box p-relative">           
            
            <div v-for="(item, i) in img_box" :key="i" :class="`tp-plan-2-img-${item.cls}`">
              <img :src="item.img" alt="image-here">
            </div> 

          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-plan-area-end -->
</template>
 