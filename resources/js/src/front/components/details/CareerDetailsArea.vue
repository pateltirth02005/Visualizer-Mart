

<script setup>

import NiceSelect from '~/components/ui/NiceSelect.vue';

const career_content = {
  sub_title: "Developer",
  title: "Senior Frontend Developer",
  job_post_details: [
    {
      id: 1,
      cls: "mb-45",
      title: "Job Responsibilities",
      description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,anything embarrassing hidden.`,
    },
    {
      id: 2,
      cls: "mb-45",
      title: "Job Requirements",
      description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,anything embarrassing hidden.`,
      experiences: [
        `5+ years experience in backend engineering, <br /> ideally in Python or Node`,
        `Experience building and operating backend <br /> distributed systems`,
        `Experience designing serverless architectures <br /> on AWS infrastructure`,

      ],
    },
    {
      id: 3,
      cls: "mb-45",
      title: "Our Benefits",
      description: `Now, the paradigm has shifted. The question is not why you should include a content marketing strategy.`,
      experiences: [
        `Flexible hours`,
        `Unlimited PTO`,
        `Medical insurance`,
        `Career growth`,

      ],
    },
    {
      id: 4,
      cls: "mb-20",
      title: "Job Requirements",
      description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,anything embarrassing hidden.`,
      experiences: [
        `Experience building software and systems that balance <br /> simplicity, flexibility, and security.`,
        `Track record with a smart contract language <br /> such as Solidity`,
        `A customer-focused and product-focused mindset.`,


      ],
    },
    {
      id: 5,
      cls: "",
      title: "Education & Experience",
      description: `TBachelors Degree in Interaction, Graphic Design, Media Arts or similar.`,
    },

  ]
}
const { sub_title, title, job_post_details } = career_content

const active = ref(false)
const handleActive = () => {
  active.value = true
}
const changeHandler = (value) => { };


</script>





<template>
  <div class="career-details-area career-border-bottom pt-110 pb-110">
    <div class="container">
      <div class="row align-content-start">
        <div class="col-xl-7 col-lg-7">
          <div class="career-details-wrapper">
            <div class="career-details-title-box">
              <span>{{ sub_title }}</span>
              <h4 class="career-details-title">{{ title }}</h4>
            </div>
            <div class="career-details-location-box">
              <span>
                <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 7.10747C1 3.73441 3.93813 1 7.5625 1C11.1869 1 14.125 3.73441 14.125 7.10747C14.125 10.4541 12.0305 14.3593 8.76256 15.7558C8.00076 16.0814 7.12424 16.0814 6.36244 15.7558C3.09452 14.3593 1 10.4541 1 7.10747Z"
                    stroke="#5F6168" stroke-width="1.5" />
                  <path
                    d="M9.4375 7.56274C9.4375 8.59828 8.59803 9.43774 7.5625 9.43774C6.52697 9.43774 5.6875 8.59828 5.6875 7.56274C5.6875 6.52721 6.52697 5.68774 7.5625 5.68774C8.59803 5.68774 9.4375 6.52721 9.4375 7.56274Z"
                    stroke="#5F6168" stroke-width="1.5" />
                </svg>
                London, UK
              </span>
              <span>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.5 15.75C12.5041 15.75 15.75 12.5041 15.75 8.5C15.75 4.49594 12.5041 1.25 8.5 1.25C4.49594 1.25 1.25 4.49594 1.25 8.5C1.25 12.5041 4.49594 15.75 8.5 15.75Z"
                    stroke="#5F6168" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.5 5.52838V9.42838L11.1 10.7284" stroke="#5F6168" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                Full-time
              </span>
              <span>Senior</span>
            </div>

            <div v-for="(item, i) in job_post_details" :key="i" :class="`career-details-job-responsiblity ${item.cls}`">
              <h4 class="career-details-title-sm">{{ item.title }}</h4>
              <p>{{ item.description }}</p>
              <div v-if="item.experiences" class="career-details-job-list">
                <ul>
                  <li v-for="(list, index) in item.experiences" :key="index">
                    <i class="fal fa-long-arrow-right"></i>
                    <span v-html="list"></span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        <div class="col-xl-5 col-lg-5 career-details-pin">
          <div class="col-xxl-12">
            <div class="postbox__apply-btn-border">
              <div id="my-btn" class="postbox__apply-btn-box">
                <button v-if="!active" @click="handleActive()" class="submit-btn mb-50 w-100">Apply For This Job</button>
              </div>
            </div>
          </div>

          <div v-if="active" id="show" class="career-details-hide-wrapper">
            <div class="career-details-apply-info-box pb-10">
              <div class="career-details-profile-box pb-20">
                <h4 class="career-details-title-xs">Profile</h4>
                <p>Basic information about you</p>
              </div>
              <div class="postbox__comment-form">
                <form @submit.prevent class="box">
                  <div class="row gx-20">
                    <div class="col-12">
                      <div class="postbox__comment-input mb-30">
                        <input type="text" class="inputText" required>
                        <span class="floating-label">Full Name</span>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="postbox__comment-input mb-30">
                        <input type="text" class="inputText" required>
                        <span class="floating-label">Your Email</span>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="postbox__comment-input mb-30">
                        <input type="text" class="inputText" required>
                        <span class="floating-label">Phone</span>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="postbox__comment-input mb-35">
                        <input type="text" class="inputText" required>
                        <span class="floating-label">Address</span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="career-details-apply-info-box">
              <div class="career-details-profile-box pb-20">
                <h4 class="career-details-title-xs">Application Details</h4>
                <p>Summarize your relevant experience</p>
              </div>
              <div class="postbox__comment-form">
                <form @submit.prevent class="box">
                  <div class="row gx-20">
                    <div class="col-12">
                      <div class="postbox__comment-input mb-30">
                        <input type="text" class="inputText" required>
                        <span class="floating-label">LinkedIn Profile</span>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="postbox__comment-input mb-30">
                        <input type="text" class="inputText" required>
                        <span class="floating-label">Personal website</span>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="postbox__select mb-30">

                        <NiceSelect :options="[
                          { value: '1', text: 'Years of experience' },
                          { value: '2', text: '01 Year' },
                          { value: '3', text: '02 Year' },
                          { value: '4', text: '03 Year' },
                          { value: '5', text: '04 Year' },
                          { value: '6', text: '05 Year' },
                        ]" :defaultCurrent="0" name="Choose Your Topic" @onChange="changeHandler"
                          placeholder="Choose Your Topic" className="nice-select" />

                      </div>
                    </div>
                    <div class="col-12">
                      <div class="postbox__comment-input mb-35">
                        <input type="text" class="inputText" required>
                        <span class="floating-label">Expected salary</span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-xxl-12">
                <div class="postbox__authorization-title-box">
                  <h5 class="career-details-title-xs pb-15">US work authorization<span>*</span></h5>
                </div>
                <div class="postbox__authorization p-relative">
                  <div class="switcher mb-15">
                    <label for="toggle-0">
                      <small class="switcher-icon">
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 5.5H13.0305" stroke="#5F6168" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M10.0234 1.5L14.0336 5.5L10.0234 9.5" stroke="#5F6168" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Are you legally authorized to work in the <br> United States?
                      </small>
                      <input type="checkbox" id="toggle-0">
                      <span><small></small></span>
                    </label>
                  </div>
                  <div class="switcher">
                    <label for="toggle-1">
                      <small class="switcher-icon">
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 5.5H13.0305" stroke="#5F6168" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M10.0234 1.5L14.0336 5.5L10.0234 9.5" stroke="#5F6168" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Do you or will you require sponsorship for a US <br> employment visa (e.g. H-1B)?
                      </small>
                      <input type="checkbox" id="toggle-1">
                      <span><small></small></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-xxl-12">
                <div class="postbox__comment-input mb-30">
                  <textarea class="textareaText" required></textarea>
                  <span class="floating-label-2">Personal note</span>
                </div>
              </div>
              <div class="col-xxl-12">
                <div class="postbox__resume-title-box">
                  <h5 class="career-details-title-xs pb-15">Upload a recent resume or CV</h5>
                </div>
                <div class="postbox__resume mb-30">
                  <input id="cv" type="file" hidden>
                  <label for="cv">
                    <span>
                      <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9133 10.4519L9.00453 7.54309L6.0957 10.4519" stroke="#202124" stroke-width="1.5"
                          stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.00391 7.54309V14.0879" stroke="#202124" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                        <path
                          d="M15.1044 12.1899C15.8137 11.8032 16.374 11.1914 16.6969 10.4509C17.0198 9.7104 17.0869 8.88347 16.8877 8.1006C16.6884 7.31774 16.2341 6.62352 15.5965 6.12752C14.9588 5.63152 14.1742 5.36198 13.3664 5.36145H12.4501C12.23 4.51006 11.8197 3.71966 11.2502 3.04965C10.6806 2.37965 9.96657 1.84748 9.16174 1.49315C8.35691 1.13883 7.48222 0.971567 6.60344 1.00395C5.72467 1.03632 4.86466 1.2675 4.08808 1.68009C3.31151 2.09268 2.63857 2.67595 2.11986 3.38605C1.60115 4.09615 1.25017 4.9146 1.09331 5.77988C0.936443 6.64515 0.977774 7.53472 1.21419 8.38172C1.45061 9.22872 1.87597 10.0111 2.45829 10.67"
                          stroke="#202124" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.9133 10.4519L9.00453 7.54309L6.0957 10.4519" stroke="#202124" stroke-width="1.5"
                          stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      Drag to upload your resume, or browse
                    </span>
                  </label>
                </div>
              </div>
              <div class="col-xxl-12">
                <div class="postbox__btn-box mb-50">
                  <button class="submit-btn w-100">Submit Application</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xxl-12">
            <div class="career-details-social-box mb-20">
              <a class="facebook" href="http://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
              <a class="twitter" href="http://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
              <a class="instagram p-relative" href="http://instagram.com" target="_blank">
                <div class="insta-bg"></div>
                <i class="fab fa-instagram"></i>
              </a>
              <a class="linkedin" href="http://linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <div class="career-details-bottom-text text-center">
              <a href="#">Employee at Softec?</a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

 