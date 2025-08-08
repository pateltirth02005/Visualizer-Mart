

<script setup>

// img import 
import shapes_1 from "~/assets/img/payment/qrcode.png";
import shapes_2 from "~/assets/img/payment/mobile.png";
import shapes_3 from "~/assets/img/payment/hand.png";
import shapes_4 from "~/assets/img/payment/coin-1.png";
import shapes_5 from "~/assets/img/payment/coin-2.png";
import shapes_6 from "~/assets/img/payment/payment-3.png";
import shapes_7 from "~/assets/img/payment/message.png";

import bg_img from "~/assets/img/payment/background.png";
import payment_img_1 from "~/assets/img/payment/image.png";
import payment_img_2 from "~/assets/img/payment/get-paid.png";


const payment_content = {
  title: "You'll love our <br /> powerful payments.",
  sub_title: "We've got all your payments covered",
  box_1: [
    {
      id: 1,
      cls: "2 tpfadeLeft",
      delay: ".3s",
      title: "Scan & Go",
      des: "Transform your payment link into a QR code that customers can scan with their <br /> phone to pay.",
      shapes: [
        {
          id: 1,
          cls: "4",
          img: shapes_1,
        },
        {
          id: 2,
          cls: "5",
          img: shapes_2,
        },
        {
          id: 3,
          cls: "6",
          img: shapes_3,
        },
        {
          id: 4,
          cls: "7",
          img: shapes_4,
        },
        {
          id: 5,
          cls: "8",
          img: shapes_5,
        },
      ]

    },
    {
      id: 2,
      cls: "3 tpfadeRight",
      delay: ".5s",
      title: "Easily Send Requesrs vai e-mail or SMS",
      des: "... or copy-paste the link",
      shapes: [
        {
          id: 1,
          cls: "9",
          img: shapes_6,
        },
        {
          id: 2,
          cls: "11",
          img: shapes_7,
        },

      ]

    },

  ],
  box_3_title: "Online Billing & <br /> Invoicing Payments.",
  box_3_des: "Get paid faster with Online Invoicing <br /> and the Virtual Terminal.",
  box_3_btn: "Explore Invoicing Tools",

}
const { title, sub_title, box_1, box_3_title, box_3_des, box_3_btn } = payment_content


</script>



<template>
  <!-- tp-payment-area-start -->
  <div id="payment-method" class="tp-payment__area pt-110 pb-110">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-7">
          <div class="tp-payment__title-box text-center mb-55">
            <h3 class="tp-section-title-lg " v-html="title" ></h3>
            <p>{{ sub_title }}</p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-12">
          <div class="row">

            <div v-for="(item, i) in box_1" :key="i" class="col-md-6 mb-30">
              <div :class="`tp-payment__item tp-payment__bg-color-${item.cls} p-relative z-index wow`"
                data-wow-duration=".9s" :data-wow-delay="item.delay">

                <div v-for="(shape, index) in item.shapes" :key="index" :class="`tp-payment__shape-${shape.cls}`">
                  <img :src="shape.img" alt="image-here">
                </div>


                <div class="tp-payment__content">
                  <h3 class="tp-payment__title">{{ item.title }}</h3>
                  <p v-html="item.des"></p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="col-xl-12 mb-30">
          <div class="tp-payment__item p-relative z-index wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
            <div class="tp-payment__shape-1">
              <img :src="bg_img" alt="image-here">
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="tp-payment__content tp-payment__content-space">
                  <h3 class="tp-payment__title" v-html="box_3_title"></h3>
                  <p v-html="box_3_des"></p>
                  <router-link to="/service-details">{{ box_3_btn }}<i class="far fa-arrow-right"></i></router-link>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tp-payment__shape-2">
                  <img :src="payment_img_1" alt="image-here">
                </div>
                <div class="tp-payment__shape-3 d-none d-sm-block">
                  <img :src="payment_img_2" alt="image-here">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-payment-area-end -->
</template>
 