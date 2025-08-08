
<script setup>

const job_data = {
  sub_title: "Current Positions",
  title: "Join our Growing Team <br /> of Doers.",
  carrer_title: "Open Positions",
  carrer_info: "Borem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque tristique <br /> Et amet risus enim accumsan sit purus sit.",
  job_info: [
    {
      id: 1,
      category: "Product Designer",
      job_time: "Full-time",
      job_location: "Newark, NJ",
    },
    {
      id: 2,
      category: "Software Engineer",
      job_time: "Full-time",
      job_location: "London, UK",
    },
    {
      id: 3,
      category: "Junior Frontend Developer",
      job_time: "Full-time",
      job_location: "Brooklyn, NY",
    },
    {
      id: 4,
      category: "Finance Executive",
      job_time: "Full-time",
      job_location: "Newark, NJ",
    },
    {
      id: 5,
      category: "Junior Copywriter",
      job_time: "Full-time",
      job_location: "London, UK",
    },
  ]

}
const { sub_title, carrer_info, title, carrer_title, job_info } = job_data


const props = defineProps({
  style_2: Boolean,
})

</script>



<template>
  <!-- tp-job-area-start -->
  <div class="job-area pt-120 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="job-section-box text-center mb-40"> 
            
            <template v-if="style_2">
              <h3 class="tp-section-title">{{carrer_title}}</h3>
              <p v-html="carrer_info"></p>
            </template>
           
            <template v-if="!style_2">
              <h4 class="inner-section-subtitle">{{ sub_title }}</h4>
              <h3 class="tp-section-title" v-html="title"></h3>
            </template>
            
          </div>
        </div> 
      </div>

      <div v-for="(item, i) in job_info" :key="i" class="job-post-box">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-4">
            <div class="job-post-info d-flex justify-content-start align-items-center">
              <div class="job-post-category">
                <span>{{ item.category }}</span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-5">
            <div class="job-post-wrapper d-flex align-items-center">
              <div class="job-post-time d-flex align-items-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 16.75C13.2802 16.75 16.75 13.2802 16.75 9C16.75 4.71979 13.2802 1.25 9 1.25C4.71979 1.25 1.25 4.71979 1.25 9C1.25 13.2802 4.71979 16.75 9 16.75Z"
                    stroke="#5F6168" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9 5.7998V9.9998L11.8 11.3998" stroke="#5F6168" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                <span>{{ item.job_time }}</span>
              </div>
              <div class="job-post-location d-flex align-items-center">
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 7.51463C1 3.9167 4.13401 1 8 1C11.866 1 15 3.9167 15 7.51463C15 11.0844 12.7658 15.2499 9.28007 16.7396C8.46748 17.0868 7.53252 17.0868 6.71993 16.7396C3.23416 15.2499 1 11.0844 1 7.51463Z"
                    stroke="#5F6168" stroke-width="1.5" />
                  <path
                    d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z"
                    stroke="#5F6168" stroke-width="1.5" />
                </svg>
                <span>{{ item.job_location }}</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3">
            <div class="job-post-apply-btn text-start text-md-end">
              <router-link class="tp-btn-inner tp-btn-hover alt-color-orange" to="/career-details">
                <span>Apply</span>
                <b></b>
              </router-link>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <!-- tp-job-area-end -->
</template>

 