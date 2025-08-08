
<script setup>

// team avatar
import team_img_1 from "~/assets/img/team/team-4-1.png"
import team_img_2 from "~/assets/img/team/team-4-2.png"
import team_img_3 from "~/assets/img/team/team-4-3.png"
import team_img_4 from "~/assets/img/team/team-4-4.png"
import team_img_5 from "~/assets/img/team/team-4-5.png"
import team_img_6 from "~/assets/img/team/team-4-6.png"
import team_img_7 from "~/assets/img/team/team-4-7.png"
import team_img_8 from "~/assets/img/team/team-4-8.png"

// team data 
const team_data = [
  // for home 04
  {
    id: 1,
    cls: 1,
    img: team_img_1,
    name: "Alexa Montes",
    designation: "Partner & COO",
  },
  {
    id: 2,
    cls: 2,
    img: team_img_2,
    name: "Ravi Ganatra",
    designation: "Designer",
  },
  {
    id: 3,
    cls: 3,
    img: team_img_3,
    name: "Imdat Cimsit",
    designation: "CEO & Founder",
  },
  {
    id: 4,
    cls: 4,
    img: team_img_4,
    name: "Cimsit Imdat",
    designation: "PHP Developer",
  },

  {
    id: 5,
    cls: 1,
    img: team_img_5,
    name: "Trevor Philips",
    designation: "Marketing Lead",
  },
  {
    id: 6,
    cls: 2,
    img: team_img_6,
    name: "Cohnor Delaney",
    designation: "Technology Officer",
  },
  {
    id: 7,
    cls: 3,
    img: team_img_7,
    name: "Trian Dominguez",
    designation: "Visual designer",
  },
  {
    id: 8,
    cls: 4,
    img: team_img_8,
    name: "Cimsit Imdat",
    designation: "Marketing Lead",
  },
]

const social_links = [
  {
    id: 1,
    link: "http://facebook.com",
    icon: "fab fa-facebook-f",
  },
  {
    id: 2,
    link: "http://instagram.com",
    icon: "fab fa-instagram",
  },
  {
    id: 3,
    link: "http://www.twitter.com",
    icon: "fab fa-twitter",
  },
  {
    id: 4,
    link: "http://www.linkedin.com",
    icon: "fab fa-linkedin-in",
  },
]


</script>



<template>
  <!-- tp-team-area-start -->
  <div class="tp-team-area tp-team-inner pt-100 pb-75">
    <div class="container">
      <div class="tp-team-section-wrapper tp-team-inner-section mb-70">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="tp-team-section-box text-center">
              <h5 class="inner-section-subtitle pb-10">Talented Team</h5>
              <h3 class="tp-section-title mb-0 text-black">Meet our Team Members</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(team, i) in team_data" :key="i"
          class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-70 tp-border-after-2 team-inner-border-right">
          <div class="tp-team-item tp-team-inner-title-color text-center z-index">
            <div class="tp-team-img">
              <img :src="team.img" alt="image-here">
            </div>
            <div class="tp-team-content">
              <h4 class="tp-team-title-sm">
                <router-link to="/team-details">{{ team.name }}</router-link>
              </h4>
              <span>{{ team.designation }}</span>
            </div>
            <div class="tp-team-social">            
              <router-link v-for="(item, i) in social_links" :key="i" :class="`icon-color-${item.id}`" :to="item.link" target="_blank">
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

 