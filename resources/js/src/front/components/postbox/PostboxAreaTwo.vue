

<script setup>


import blog_details_img_1 from "~/assets/img/blog/blog-details-1.jpg";
import blog_details_img_2 from "~/assets/img/blog/blog-details-2.jpg";
import blog_details_img_3 from "~/assets/img/blog/blog-details-3.jpg";
import navigation_img_1 from "~/assets/img/blog/navigation-1.png";
import navigation_img_2 from "~/assets/img/blog/navigation-2.png";
import blog_details_avata from "~/assets/img/blog/blog-details-avata-1.jpg";


const post_box_content = {
  title_1: `The History Of Web Design`,
  des_1: `While you want your sales team to be spending most of their time prospecting and selling, making sure they have the time and   space to keep the CRM up to date is critical. Remember to factor in time for these tasks when setting goals and benchmarks for them. Provide sales support where you can to ensure your sales team is spending.`,
  des_2: `Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day going forward, a new normal that has evolved.!`,
  checkmark_list: [
    "Say goodbye to bank fees.",
    "Leverage agile frameworks to provide",
    "Capitalize on low hanging fruit",
    "Deposit funds easily, securely.",
  ],
  title_2: "How to Update your Theme",
  des_3: `Felis morbi ut tristique pretium libero. Eget purus, enim, orci, quis tempor sed. Sed nec eget nibh et Ut orci, sagittis tellus dui congue. Blandit laoreet nullam amet eget. Ut tincidunt diam tempor sed turpis odio vitae sem lobortis.`,
  des_4: `Felis morbi ut tristique pretium libero. Eget purus, enim, orci, quis tempor sed. Sed nec eget nibh et Ut orci, sagittis tellus dui congue. Blandit laoreet nullam amet eget. Ut tincidunt diam tempor sed turpis odio vitae sem lobortis. sed turpis odio vitae sem lobortis.`,

  des_5: `Ex erat referrentur vis. Vim ad consul molestie, eu malorum aliquando referrentur pro, erroribus gloriatur sed at. Eu illud saepe impetus ius. Cum graece libris abhorreant id, eu veri aeque ubique vel. Ut his malis similique. Ei vim blandit nominavi, quo elaboraret quaerendum et. At animal fabellas pericula est, ut cibo lobortis delicatissimi vel, cum ex putant probatus petentium. Elitr laboramus mel id. Admodum adolescens id eam, omnes reformidans comprehensam no vim, ex omnes alienum liberavisse usu. Mandamus tincidunt cu pro, vocent corrumpit no per. Vis ad malorum tacimates adipiscing. Elitr laboramus mel id.`,

}
const { title_1, des_1, des_2, checkmark_list, title_2, des_3, des_4, des_5 } = post_box_content


import avata_1 from "~/assets/img/blog/blog-avata-2.png";
import avata_2 from "~/assets/img/blog/blog-avata-1.png";
import avata_3 from "~/assets/img/blog/blog-list-avata-1.jpg";

const comments_data = [
  {
    id: 1,
    img: avata_1,
    name: "Justin Case",
    date: "April 8, 2024 at 7:38 am",
    comment: `Patient Comments are a collection of comments submitted by viewers in <br /> response to a question posed by a MedicineNet doctor.`,

  },
  {
    id: 2,
    img: avata_2,
    name: "Farhan Firoz",
    date: "July 14, 2024 at 7:38 am",
    comment: `Include anecdotal examples of your experience, or things you took notice of that you feel others would find useful.`,

  },
  {
    id: 3,
    img: avata_3,
    name: "Jamil Rayhan",
    date: "April 8, 2024 at 7:38 am",
    comment: `Patient Comments are a collection of comments submitted by viewers in <br /> response to a question posed by a MedicineNet doctor.`,

  },
]

defineProps({
  style_2: {
    type: Boolean,
    default: false
  }
})


</script>


<template>
  <!-- postbox area start -->
  <div :class="`postbox__area ${style_2 && 'pt-100'} pb-100`">
    <div class="container">
      <div class="row">
        <div class="col-xxl-8 col-xl-8 col-lg-8">
          <div class="postbox__details-wrapper pr-20">
            <article>

              <div v-if="style_2" class="postbox__thumb w-img">
                <router-link to="/blog-details">
                  <img :src="blog_details_img_1" alt="image-here" />
                </router-link>
              </div>


              <div class="postbox__details-title-box pb-30">
                <h4 class="postbox__details-title">{{ title_1 }}</h4>
                <p>{{ des_1 }}</p>
                <p>{{ des_2 }}</p>
              </div>
              <div class="postbox__details-checkmark">
                <ul>
                  <li v-for="(item, i) in checkmark_list" :key="i"><i class="fal fa-check"></i>{{ item }}</li>
                </ul>
              </div>
              <div class="postbox__details-title-box pb-30">
                <h4 class="postbox__details-title">{{ title_2 }}</h4>
                <p>{{ des_3 }}</p>
              </div>
              <div class="postbox__details-img-box d-flex">
                <div class="mr-20 text-center">
                  <img class="mb-20" :src="blog_details_img_2" alt="image-here">
                  <h4 class="postbox__details-img-caption"><span>Images by</span>@sample</h4>
                </div>
                <div class="text-center">
                  <img class="mb-20" :src="blog_details_img_3" alt="image-here">
                  <h5 class="postbox__details-img-caption"><span>Images by</span>@sample</h5>
                </div>
              </div>
              <div class="postbox__details-title-box pb-15">
                <p>{{ des_4 }}</p>
              </div>
              <div class="postbox__details-qoute mb-30">
                <blockquote class="d-flex align-items-start">
                  <div class="postbox__details-qoute-icon">
                    <svg width="37" height="27" viewBox="0 0 37 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M35.046 0.402002C32.4553 2.01 30.222 3.97534 28.346 6.298C26.5593 8.53133 25.3533 10.8093 24.728 13.132C25.3533 12.596 26.0233 12.194 26.738 11.926C27.542 11.5687 28.3013 11.39 29.016 11.39C31.16 11.39 32.9467 12.1493 34.376 13.668C35.8053 15.0973 36.52 16.884 36.52 19.028C36.52 21.172 35.7607 22.9587 34.242 24.388C32.8127 25.8173 31.026 26.532 28.882 26.532C26.6487 26.532 24.8173 25.7727 23.388 24.254C21.9587 22.7353 21.244 20.77 21.244 18.358C21.244 15.142 22.1373 11.7027 23.924 8.04C25.8 4.288 27.8993 1.608 30.222 0H35.046V0.402002ZM13.802 0.402002C11.2113 2.01 8.978 3.97534 7.102 6.298C5.31533 8.53133 4.10933 10.8093 3.484 13.132C4.10933 12.596 4.77933 12.194 5.494 11.926C6.298 11.5687 7.05733 11.39 7.772 11.39C9.916 11.39 11.7027 12.1493 13.132 13.668C14.5613 15.0973 15.276 16.884 15.276 19.028C15.276 21.172 14.5167 22.9587 12.998 24.388C11.5687 25.8173 9.782 26.532 7.638 26.532C5.40467 26.532 3.57333 25.7727 2.144 24.254C0.714667 22.7353 0 20.77 0 18.358C0 15.142 0.893333 11.7027 2.68 8.04C4.556 4.288 6.65533 1.608 8.978 0H13.802V0.402002Z"
                        fill="#CDCECF" />
                    </svg>
                  </div>
                  <div class="postbox__details-qoute-text">
                    <p>“The team at @softecagency is incredibly dedicated, knowledgeable, and helpful.</p>
                    <span>Socrates</span>
                  </div>
                </blockquote>
              </div>
              <div class="postbox__details-title-box pb-15">
                <p> {{ des_5 }} </p>
              </div>
              <div class="postbox__details tagcloud mb-50">
                <span>Tags:</span>
                <a href="#">Envato</a>
                <a href="#">Development</a>
                <a href="#">Technology</a>
                <a href="#">Wordpress</a>
              </div>
              <div class="postbox__navigation-more mb-70 d-flex justify-content-between">
                <div class="postbox__navigation-left d-flex align-items-center">
                  <div class="postbox__navigation-img">
                    <a href="#"><img :src="navigation_img_1" alt="image-here"></a>
                  </div>
                  <div class="postbox__navigation-content">
                    <a href="#">
                      <span>
                        <i class="far fa-arrow-left"></i>
                        Previous post
                      </span>
                    </a>
                    <h5><a href="#">Leveraging Feedback...</a></h5>
                  </div>
                </div>
                <div class="postbox__navigation-right d-flex align-items-center">
                  <div class="postbox__navigation-content">
                    <a href="#">
                      <span>
                        Next post
                        <i class="far fa-arrow-right"></i>
                      </span>
                    </a>
                    <h5><a href="#">Typing Tutorials For...</a></h5>
                  </div>
                  <div class="postbox__navigation-img">
                    <a href="#"><img :src="navigation_img_2" alt="image-here"></a>
                  </div>
                </div>
              </div>
              <div class="postbox__details-author-info-box mb-100 d-flex align-items-start">
                <div class="postbox__details-author-avata">
                  <img :src="blog_details_avata" alt="image-here">
                </div>
                <div class="postbox__details-author-content">
                  <h5 class="postbox__details-author-title">Dianne Ameter</h5>
                  <p>Ex erat referrentur vis. Vim ad consul molestie, eu malorum aliquando
                    referrentur pro, erroribus gloriatur sed at.!
                  </p>
                  <div class="postbox__details-author-social">
                    <a target="_blank" href="http://facebook.com"><i class="fab fa-facebook-f"></i></a>
                    <a target="_blank" href="http://twitter.com"><i class="fab fa-twitter"></i></a>
                    <a target="_blank" href="http://linkedin.com"><i class="fab fa-linkedin-in"></i></a>
                    <a target="_blank" href="http://vimeo.com"><i class="fab fa-vimeo-v"></i></a>
                  </div>
                </div>
              </div>
              <div class="postbox__comment mb-65">
                <h3 class="postbox__comment-title">3 Comments</h3>
                <ul>


                  <li v-for="(item, i) in comments_data" :key="i" :class="i % 2 == 1 ? 'children' : null">
                    <div class="postbox__comment-box d-flex">
                      <div class="postbox__comment-info ">
                        <div class="postbox__comment-avater mr-20">
                          <img :src="item.img" alt="image-here">
                        </div>
                      </div>
                      <div class="postbox__comment-text">
                        <div class="postbox__comment-name d-flex">
                          <h5>{{ item.name }}</h5>
                          <span class="post-meta"> {{ item.date }}</span>
                        </div>
                        <p>{{ item.comment }}</p>
                        <div class="postbox__comment-reply">
                          <a href="#">
                            <svg width="12" height="10" viewBox="0 0 14 10" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 1L1 5L5 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                              <path d="M1 5.00024L9 5.00024C10.3333 5.00024 13 5.80025 13 9.00025" stroke="currentColor"
                                stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                            Reply
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>

                </ul>
              </div>
              <div class="postbox__comment-form">
                <h3 class="postbox__comment-form-title">Leave A Comment</h3>
                <form @submit.prevent class="box">
                  <div class="row gx-20">
                    <div class="col-xxl-4 col-xl-6 col-lg-4">
                      <div class="postbox__comment-input mb-35">
                        <input type="text" class="inputText" required>
                        <span class="floating-label">Your Name</span>
                      </div>
                    </div>
                    <div class="col-xxl-4 col-xl-6 col-lg-4">
                      <div class="postbox__comment-input mb-35">
                        <input type="text" class="inputText" required>
                        <span class="floating-label">Your Email</span>
                      </div>
                    </div>
                    <div class="col-xxl-4 col-xl-6 col-lg-4">
                      <div class="postbox__comment-input mb-35">
                        <input type="text" class="inputText" required>
                        <span class="floating-label">Your Website</span>
                      </div>
                    </div>
                    <div class="col-xxl-12">
                      <div class="postbox__comment-input mb-20">
                        <textarea class="textareaText" required></textarea>
                        <span class="floating-label-2">Your Comment</span>
                      </div>
                    </div>
                    <div class="col-xxl-12">
                      <div class="postbox__comment-agree">

                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="flexCheckDefault">
                          <label class="form-check-label" for="flexCheckDefault">
                            I agree that my submitted data is being collected and stored.
                          </label>
                        </div>

                      </div>
                    </div>
                    <div class="col-xxl-12">
                      <div class="postbox__comment-btn">
                        <button type="submit" class="tp-btn-inner">Post comment</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </article>
          </div>
        </div>

        <PostboxSlidebar />

      </div>
    </div>
  </div>
  <!-- postbox area end -->
</template>

 