

<script setup>

import account_img_1 from "~/assets/img/account/account-bg.png"
import account_img_2 from "~/assets/img/account/acc-main.png"
import account_img_3 from "~/assets/img/account/ac-author.png"
import account_img_4 from "~/assets/img/account/ac-shape-1.png"
import account_img_5 from "~/assets/img/account/ac-shape-2.png"


const account_content = {
  account_shape: [
    {
      id: 1,
      cls: "bg",
      img: account_img_1
    },
    {
      id: 2,
      cls: "main-img",
      img: account_img_2
    },
    {
      id: 3,
      cls: "author",
      img: account_img_3
    },
    {
      id: 4,
      cls: "shape-1",
      img: account_img_4
    },
    {
      id: 5,
      cls: "shape-2",
      img: account_img_5
    },
  ],
  sub_title: "Open An Account",
  title: "Let's get started",
  account_step: [
    {
      id: 1,
      number: "01",
      info: "Sign up in a few minutes",
    },
    {
      id: 2,
      number: "02",
      info: "Let us verify your identity",
    },
    {
      id: 3,
      number: "03",
      info: "Your account is open; you can send <br /> your first payment",
    },

  ],
  btn_text: "Open An Account in Minutes",
  info: "Try it for 30 days. For free. No obligations.",
}
const { account_shape, sub_title, title, account_step, btn_text, info } = account_content
</script>




<template>
  <!-- tp-account-area-strat -->
  <div class="tp-account-area pb-120">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-6 col-lg-6">
          <div class="tp-account-thumb-wrapper p-relative text-center wow tpfadeLeft" data-wow-duration=".9s"
            data-wow-delay=".5s">


            <div v-for="(item, i) in account_shape" :key="i" :class="`tp-account-${item.cls}`">
              <img :src="item.img" alt="image-here">
            </div>

          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="tp-account-step-wrapper">
            <div class="tp-account-section-box mb-40">
              <h4 class="tp-section-subtitle-2">{{ sub_title }}</h4>
              <h3 class="tp-section-title-lg">{{ title }}</h3>
            </div>
            <div class="tp-account-step mb-50">

              <div v-for="(item, i) in account_step" :key="i" class="tp-account-item d-flex align-items-center">
                <span>{{ item.number }}</span>
                <p v-html="item.info"></p>
              </div>
            </div>
            <div class="tp-account-btn-box">
              <router-link class="tp-btn-green mb-15" to="/register">{{ btn_text }}</router-link>
              <p>{{ info }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-account-area-end -->
</template>

 