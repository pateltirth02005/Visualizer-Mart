

<script setup>
import CountUp from 'vue-countup-v3'

import counter_shape_1 from "~/assets/img/counter/counter-shape-2.png";
import counter_shape_2 from "~/assets/img/counter/counter-shape-1.png";
import counter_shape_3 from "~/assets/img/counter/counter-shape-4.png";

const counter_info = [
  { id: 1, counter: 350, counter_icon: "+", title: "Team Members", },
  { id: 2, counter: 10, counter_icon: "<em>m</em>+", title: "Total funding", },
  { id: 3, counter: 500, counter_icon: "<em>k</em>+", title: "Total active user base", },
]

</script>


<template>
  <!-- tp-counter-area-start -->
  <div class="tp-counter-area tp-counter-space p-relative pb-140">
    <div class="tp-counter-shape-2">
      <img :src="counter_shape_1" alt="image-here">
    </div>
    <div class="tp-counter-shape-3">
      <img :src="counter_shape_2" alt="image-here">
    </div>
    <div class="tp-counter-shape-4 d-none d-sm-block">
      <img :src="counter_shape_3" alt="image-here">
    </div>
    <div class="container">
      <div class="tp-counter-wrapper p-relative">
        <div class="row gx-0">

          <div v-for="(item, i ) in counter_info" :key="i" class="col-xl-4 col-lg-4 col-md-4">
            <div class="tp-counter-wrap d-flex justify-content-center">
              <div class="tp-counter-item">
                <h4> 
                  <count-up :end-val="item.counter" class="d-inline"></count-up> 
                  <span v-html="item.counter_icon"></span>
                </h4>
                <p>{{ item.title }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <!-- tp-counter-area-end -->
</template>

 