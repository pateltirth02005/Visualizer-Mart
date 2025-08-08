<script setup>

const props = defineProps({
  style_2: Boolean,
})



import team_img_1 from "~/assets/img/team/team-4-1.png"
import team_img_2 from "~/assets/img/team/team-4-2.png"
import team_img_3 from "~/assets/img/team/team-4-3.png"
import team_img_4 from "~/assets/img/team/team-4-4.png"
import team_img_5 from "~/assets/img/team/team-4-5.png"
import team_img_6 from "~/assets/img/team/team-4-6.png"
import team_img_7 from "~/assets/img/team/team-4-7.png"
import team_img_8 from "~/assets/img/team/team-4-8.png"

const team_data = [
  // for home 04
  {
    id: 1,
    cls: 1,
    img: team_img_1,
    name: "Alexa Montes",
    job_title: "Partner & COO",
  },
  {
    id: 2,
    cls: 2,
    img: team_img_2,
    name: "Ravi Ganatra",
    job_title: "Designer",
  },
  {
    id: 3,
    cls: 3,
    img: team_img_3,
    name: "Imdat Cimsit",
    job_title: "CEO & Founder",
  },
  {
    id: 4,
    cls: 4,
    img: team_img_4,
    name: "Cimsit Imdat",
    job_title: "PHP Developer",
  },

  {
    id: 5,
    cls: 1,
    img: team_img_5,
    name: "Trevor Philips",
    job_title: "Marketing Lead",
  },
  {
    id: 6,
    cls: 2,
    img: team_img_6,
    name: "Cohnor Delaney",
    job_title: "Technology Officer",
  },
  {
    id: 7,
    cls: 3,
    img: team_img_7,
    name: "Trian Dominguez",
    job_title: "Visual designer",
  },
  {
    id: 8,
    cls: 4,
    img: team_img_8,
    name: "Cimsit Imdat",
    job_title: "Marketing Lead",
  },


]


const team_content = {
  sub_title: "THE TEAM",
  title: "Our Leaders",
  des: "Our clients are the companies and startups who <br /> make the world go round,!",
}
const { sub_title, title, des } = team_content



const social_links = [
  {
    color: "1",
    link: "http://facebook.com",
    icon: "fab fa-facebook-f",
  },
  {
    color: "2",
    link: "https://www.instagram.com",
    icon: "fab fa-instagram",
  },

  {
    color: "3",
    link: "http://twitter.com",
    icon: "fab fa-twitter",
  },
  {
    color: "4",
    link: "https://www.linkedin.com",
    icon: "fab fa-linkedin-in",
  },
];



</script>



<template>
  <!-- tp-team-area-start -->
  <div :class="`tp-team-area ${style_2 ? 'grey-bg pt-120' : 'blue-bg'}  pb-95`">
    <div class="container">
      <div :class="`tp-team-section-wrapper ${style_2 ? 'tp-team-inner-section' : ''} mb-70`">
        <div class="row align-items-end">
          <div class="col-xl-6 col-lg-6">
            <div :class="`tp-team-section-box ${style_2 ? 'text-center text-sm-start' : ''}`">
              <h5 :class="`${style_2 ? 'inner-section-subtitle' : 'tp-section-subtitle-4'} pb-10`">{{ sub_title }}</h5>
              <h3 :class="`${style_2 ? 'tp-section-title mb-0 text-black' : 'tp-section-title-4'}`">{{ title }}</h3>
            </div>
          </div>

          <div v-if="style_2" class="col-xl-6 col-lg-6 col-md-6">
            <div class="tp-team-top-content text-center text-md-end">
              <router-link class="tp-btn-inner tp-btn-hover alt-color-orange" to="/team-details">
                <span>View All</span>
                <b></b>
              </router-link>
            </div>
          </div>


          <div v-if="!style_2" class="col-xl-6 col-lg-6  wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
            <div class="tp-team-top-content d-flex justify-content-md-start justify-content-end">
              <p v-html="des"></p>
            </div>
          </div>

        </div>
      </div>
      <div class="row">


        <div v-for="(item, i) in team_data.slice(0, 4)" :key="i" :class="`col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 tp-team-border-right tp-border-after-${item.cls} 
                                              ${style_2 ? 'team-inner-border-right' : ''}`">
          <div :class="`tp-team-item text-center ${style_2 && 'tp-team-inner-title-color'} z-index`">
            <div class="tp-team-img tp-tilt-effect">
              <img :src="item.img" alt="image-here">
            </div>
            <div class="tp-team-content">
              <h4 class="tp-team-title-sm">
                <router-link to="/team-details">{{ item.name }}</router-link>
              </h4>
              <span>{{ item.job_title }}</span>
            </div>
            <div class="tp-team-social">

              <router-link v-for="(item, i) in social_links" :key="i" target="_blank" :class="`icon-color-${item.color} box`"
                :to="item.link">
                <i :class="item.icon"></i>
                <span></span>
              </router-link>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <!-- tp-team-area-end -->
</template>

 