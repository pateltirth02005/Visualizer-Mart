


<script setup>

import solution_1 from "~/assets/img/project/solution-1.jpg";
import solution_2 from "~/assets/img/project/solution-2.jpg";


const project_details_data = [
  {
    id: 1,
    cls: "info",
    title: "Duis aute irure dolor in reprehenderit",
    feture_list: false,
    description: `Posuere nibh vestibulum, velit pulvinar interdum sed in. Magnis netus magna urna, in tempor magna. Tortor vel vitae vel mi. Leo pellentesque eget pellentesque magnis. Pellentesque molestie sem massa nibh suspendisse ante eget. Sit dolor arcu scelerisque sit nibh nunc, vulputate cursus. Feugiat in tortor non mauris, sit. Hac adipiscing dui sit magna. Integer elementum et amet hac turpis. Sagittis magna nulla ut gravida integer pellentesque.`,

  },
  {
    id: 2,
    cls: "overview",
    title: "Overview",
    feture_list: [
      `Create & Save your notes with multi-media`,
      `Complete note editor with rich text options`,
      `Automatically sync in real time`,
      `Web Clipper Extension`,
    ],
    description: `Felis morbi ut tristique pretium libero. Eget purus, enim, orci, quis tempor sed. Sed nec eget nibh et Ut orci, sagittis tellus dui congue. Blandit laoreet nullam amet eget. Ut tincidunt diam tempor sed turpis odio vitae sem lobortis. Lobortis enim non eu a.`,

  },
]

const project_details_content = {
  solution_title: "Solution & Result",
  des_1: `Felis morbi ut tristique pretium libero. Eget purus, enim, orci, quis tempor sed. Sed nec eget nibh et Ut orci, sagittis tellus dui congue. Blandit laoreet nullam amet eget. Ut tincidunt diam tempor sed turpis odio vitae sem lobortis. Lobortis enim non eu a. In gravida velit pretium commodo odio ridiculus odio enim.Tincidunt eget tellus pellentesque nulla.`,
  des_2: `Sed morbi dignissim odio enim volutpat. Viverra facilisi aliquet sed purus id ornare nunc, sit ipsum.Risus amet non eget velit nunc, libero vitae. Arcu maecenas in montes, tincidunt pulvinar euismod ac proin`,
}
const { solution_title, des_1, des_2 } = project_details_content;

</script>



<template>
  <!-- project-details-area-start -->
  <div class="pd-details-area pt-100 pb-100">
    <div class="container">
      <div class="row g-0">
        <div class="col-xl-2 col-lg-2 social-box-pin">
          <div class="pd-details-social-box text-lg-center text-start p-relative">
            <div class="pd-details-social-title">
              <span>Share This <br>Story</span>
            </div>
            <div class="pd-details-social">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-vimeo-v"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div class="col-xl-10 col-lg-10 ">
          <div class="pd-details-wrapper">

            <div v-for="(item, i) in project_details_data" :key="i" :class="`pd-details-${item.cls}`">
              <h4 class="pd-details-title">{{ item.title }}</h4>
              <ul v-if="item.feture_list">
                <li v-for="(feature, index) in item.feture_list" :key="index">{{ feature }}
                </li>
              </ul>
              <p>{{ item.description }}</p>
            </div>

            <div class="pd-details-solution">
              <div class="pd-details-solution-img-box d-flex align-items-center">
                <div class="pd-details-solution-img mr-30">
                  <img :src="solution_1" alt="image-here">
                </div>
                <div class="pd-details-solution-img">
                  <img :src="solution_2" alt="image-here">
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <div class="pd-solution-title-box">
                    <h4 class="pd-details-title">{{ solution_title }}</h4>
                  </div>
                </div>
                <div class="col-md-9">
                  <div class="pd-solution-paragraph">
                    <p>{{ des_1 }}</p>
                    <p>{{ des_2 }}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- project-details-area-end -->
</template>

 