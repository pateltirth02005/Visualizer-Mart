
<script setup>
import img_1 from "~/assets/img/contact/contact-icon-sm-5.png";
import img_2 from "~/assets/img/contact/contact-icon-sm-6.png";
import img_3 from "~/assets/img/contact/contact-icon-sm-7.png";


// office location data
const office_data = [
  {
    id: 1,
    img: img_1,
    location: "Colombia",
    address: "Bogota D.C., Colombia, b. a 181 <br /> C No. 930 Ap 202",
  },
  {
    id: 2, 
    img: img_2, 
    location: "France",
    address: "9 Pearse Street, Kinsale,Cork, <br /> P17 AH66, Ireland",
  },
  {
    id: 3,
    img: img_3,
    location: "Egypt",
    address: "Av. Cordoba 1309, 3'A, City of <br /> Buenos Aires, Egypt",
  },
]

</script>



<template>
  <!-- tp-contact-area-strat -->
  <div class="contact-info-area pb-90">
    <div class="container">
      <div class="row">

        <div v-for="(item, i) in office_data" :key="i" class="col-xl-4 col-lg-4 mb-30">
          <div :class="`contact-info-item ${i === 1 ? 'p-relative' : ''}`">
            <div v-if="i === 1" class="contact-info-badge">
              <span>Main Office</span>
            </div>
            <div class="contact-info-img">
              <img :src="item.img" alt="image-here">
            </div>
            <div class="contact-info-title-box">
              <h5 class="contact-info-title-sm"><a href="#">{{ item.location }}</a></h5>
              <p v-html="item.address"></p>
            </div>
          </div>

        </div> 
      </div>
    </div>
  </div>
</template>

 