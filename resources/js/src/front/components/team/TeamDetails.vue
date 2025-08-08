

<script setup>

import team_img from "~/assets/img/team/team-details-1.jpg";


const team_details_content = {
  name: "Imdat Cimsit",
  feature_list: [
    "Cras sed felis eget velit aliquet. Morbi quis commodo odio",
    "Pharetra vel turpis nunc eget lorem dolor. Quam vulputate <br />dignissim",
    "Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.",
  ],
  expricence: [
    { id: 1, title: "Role:", info: "Design" },
    { id: 2, title: "Experience:", info: "14 years" },
  ],
  skill_title: "Superpower Skills:",
  details_skill: ["Interaction Design", "User Research", "Figma"],
  membur_about_title: "About Imdat Cimsit",
  about_info_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  about_info_2: "Cras sed felis eget velit aliquet. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Nibh tellus molestie nunc non blandit massa enim nec. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Posuere morbi leo urna molestie.",
}
const {
  name,
  feature_list,
  expricence,
  skill_title,
  details_skill,
  membur_about_title,
  about_info_1,
  about_info_2
} = team_details_content


  

</script>


<template>
  <!-- team-details-area-start -->
  <div class="team-details-area pt-100 pb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10">
          <div class="team-details-wrapper">
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-4">
                <div class="team-details-img-box text-center">
                  <div class="team-details-img">
                    <img :src="team_img" alt="image-here">
                  </div>
                  <div class="team-details-work-tag">
                    <span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14.9984 7.35929V8.00322C14.9976 9.51254 14.5088 10.9812 13.6051 12.19C12.7014 13.3989 11.4311 14.2832 9.98374 14.7112C8.53635 15.1391 6.98941 15.0877 5.57361 14.5647C4.15782 14.0416 2.94904 13.0749 2.12755 11.8087C1.30605 10.5426 0.915863 9.04474 1.01517 7.53869C1.11448 6.03263 1.69797 4.59903 2.67861 3.45168C3.65925 2.30433 4.9845 1.50472 6.45672 1.17209C7.92893 0.839462 9.46923 0.991643 10.8479 1.60594"
                          stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.0013 2.40381L8.00211 9.41002L5.90234 7.31025" stroke="currentcolor"
                          stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>
                    <span>Looking for Work</span>
                  </div>
                  <div class="team-details-work-location">
                    <span>
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1 6.70031C1 3.55211 3.74226 1 7.125 1C10.5077 1 13.25 3.55211 13.25 6.70031C13.25 9.82383 11.2951 13.4687 8.24506 14.7721C7.53404 15.076 6.71596 15.076 6.00494 14.7721C2.95489 13.4687 1 9.82383 1 6.70031Z"
                          stroke="#5F6168" stroke-width="1.5" />
                        <path
                          d="M8.875 7.12524C8.875 8.09174 8.0915 8.87524 7.125 8.87524C6.1585 8.87524 5.375 8.09174 5.375 7.12524C5.375 6.15875 6.1585 5.37524 7.125 5.37524C8.0915 5.37524 8.875 6.15875 8.875 7.12524Z"
                          stroke="#5F6168" stroke-width="1.5" />
                      </svg>
                    </span>
                    <span>Newark, NJ</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-8 col-lg-8 col-md-8">
                <div class="team-details-info-box">
                  <h3 class="team-details-client-title">{{ name }}</h3>
                  <div class="team-details-contact-box d-flex align-items-center">
                    <div class="team-details-social-info">
                      <router-link to="http://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></router-link>
                      <router-link to="http://twitter.com" target="_blank"><i class="fab fa-twitter"></i></router-link>
                      <router-link to="http://linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></router-link>
                      <router-link to="http://instagram.com" target="_blank"><i class="fab fa-instagram"></i></router-link>
                    </div>
                    <div class="team-details-personal-info">
                      <a href="#">
                        <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.4668 6.6C1.4668 3.96013 1.4668 2.6402 2.2889 1.8201C3.111 1 4.43415 1 7.08046 1H9.88728C12.5336 1 13.8567 1 14.6788 1.8201C15.5009 2.6402 15.5009 3.96013 15.5009 6.6C15.5009 9.23987 15.5009 10.5598 14.6788 11.3799C13.8567 12.2 12.5336 12.2 9.88728 12.2H7.08045C4.43415 12.2 3.111 12.2 2.2889 11.3799C1.4668 10.5598 1.4668 9.23987 1.4668 6.6Z"
                            stroke="#5F6168" stroke-width="1.5" />
                          <path
                            d="M4.27344 3.79999L5.78835 5.05934C7.07713 6.13071 7.72152 6.6664 8.48368 6.6664C9.24584 6.6664 9.89023 6.13071 11.179 5.05934L12.6939 3.79999"
                            stroke="#5F6168" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                        <span>Message</span>
                      </a>
                      <a href="#">
                        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.1 4.90001C11.1281 4.90001 11.9616 4.02696 11.9616 2.95001C11.9616 1.87305 11.1281 1 10.1 1C9.07178 1 8.23828 1.87305 8.23828 2.95001C8.23828 4.02696 9.07178 4.90001 10.1 4.90001Z"
                            stroke="#5F6168" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M2.65465 9.45012C3.68282 9.45012 4.51632 8.57707 4.51632 7.50012C4.51632 6.42316 3.68282 5.55011 2.65465 5.55011C1.62647 5.55011 0.792969 6.42316 0.792969 7.50012C0.792969 8.57707 1.62647 9.45012 2.65465 9.45012Z"
                            stroke="#5F6168" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M10.1 14C11.1281 14 11.9616 13.1269 11.9616 12.05C11.9616 10.973 11.1281 10.1 10.1 10.1C9.07178 10.1 8.23828 10.973 8.23828 12.05C8.23828 13.1269 9.07178 14 10.1 14Z"
                            stroke="#5F6168" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M4.26172 8.48151L8.50014 11.0685" stroke="#5F6168" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M8.49393 3.93152L4.26172 6.51853" stroke="#5F6168" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>Share</span>
                      </a>
                    </div>
                  </div>
                  <div class="team-details-expricence-box d-flex align-items-center">

                    <div v-for="(item, i) in expricence" :key="i" class="team-details-expricence-box-1">
                      <span>{{ item.title }}</span> <br />
                      <em>{{ item.info }}</em>
                    </div> 

                  </div>
                  <div class="team-details-skill">
                    <h5>{{ skill_title }}</h5>
                    <span v-for="(item, i) in details_skill" :key="i">{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-8 col-lg-10">
          <div class="team-details-text-wrapper pt-80">
            <div class="team-details-text">
              <h4 class="team-details-title">{{ membur_about_title }}</h4>
              <p>{{ about_info_1 }}</p>
            </div>
            <div class="team-details-feature-list">
              <ul>
                <li v-for="(item, i) in feature_list" :key="i"> <span v-html="item"></span> </li> 
              </ul>
              <p>{{ about_info_2 }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- team-details-area-end -->
</template>
 