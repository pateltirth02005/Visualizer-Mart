<script setup>
import NiceSelect from '~/components/ui/NiceSelect.vue';

import icon_1 from "~/assets/img/contact/contact-icon-sm-1.png";
import icon_2 from "~/assets/img/contact/contact-icon-sm-2.png";
import icon_3 from "~/assets/img/contact/contact-icon-sm-3.png";


const contact_data = {
  social_links: [
    {
      link: "http://facebook.com",
      icon: "fab fa-facebook-f",
    },
    {
      link: "http://twitter.com",
      icon: "fab fa-twitter",
    },
    {
      link: "http://www.linkedin.com",
      icon: "fab fa-linkedin-in",
    },
    {
      link: "http://www.instagram.com",
      icon: "fab fa-instagram",
    },
  ],
  contact: [
    {
      id: 1,
      icon: icon_1,
      title: "contact@softuch.com",
      link: "mailto:contact@softuch.com",
    },
    {
      id: 2,
      icon: icon_2,
      title: "+1-202-555-0144",
      link: "tel:+1-202-555-0144",
    },
    {
      id: 3,
      icon: icon_3,
      title: "35Park Avenue, Uk",
      link: "https://www.google.com.bd/maps/@23.7806365,90.4193257,12z",
    },
  ],

}
const { social_links, contact } = contact_data
const changeHandler = (value) => { };

</script>



<template>
  <div class="contact-form-area pb-120">
    <div class="container">
      <div class="row gx-0">
        <div class="col-xl-5 col-lg-6">
          <div class="contact-form-left">
            <div class="contact-form-section-box pb-80">
              <h5 class="inner-section-subtitle">CONTACT US</h5>
              <h4 class="tp-section-title pb-10">We'd love to <br /> hear From
                <span>
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="44" height="44" fill="url(#pattern0)" />
                    <defs>
                      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_2106_35" transform="translate(-0.425532 -0.170213) scale(0.0212766)" />
                      </pattern>
                      <image id="image0_2106_35" width="83" height="66"
                        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABCCAYAAAArOOo+AAADcklEQVR4nO2bP0wTURzHP5RqQhyMtyJNTCcTnKCLnVhs4sRmHRk10U0WFhcXiQskuDPhxirRQZMagn8WB1gatTqQiMV/qRBM6nB99oDe9Y7+3mvf8T5j03u/yyfv97vvK8dQs9ls4hAh0+8bSBNOpiBOpiBOpiBOpiBOpiBOpiBOpiCnWma1AmvzUK/JrJeVWcYeqhWovoKnDw9/fu1e72ufCplhAhUXLsrUSa3MbgKD5IsyNVMlM4nAIF5Opr71Mk8qUFEoy92LlTJ7FRgkf7X3NRRDtvyeKSkwyKOvcmsN9M6UEuiNQf3z8c8lWxwGUKbkDvTGoHAzfC3JFocBkamjhfNFKC/Ag4no70jSN5m6ZiBAadY/0SxNR39PKhIpjMrUKRD8ti4v+jtubd6vF4b0vAQDMnULVOSLcHu1XbNbPel5CZqiUb0Gb57oF6hQba1qR81JhWQkUmjZmY+nO0cRaYJtrVi52/06HS0OmmTeWm239+sVHRUOt7Wi25z8f62GFgcDJ6B6TV5ssK0V1Ur3p7di7q38kxwMHyd7FduprdW6ceakQse8BBg6OPjbzGaH9aweQVKxndpasTQdr73Bn5flxfj3mYTMyxfv9KzcBS/nH/XKi37blRfCHwyl2XCRceekQte8BBg+N3Lp/tRUgTNn+3eyHDkPo1dg/LovdHTc/2zvB8wsh0uuVmDlTrJaM8u9328Y2efPNtjc/MDE5GV9VRLg5dq7Nop6Lf4DR6ErEiky29vfWF9/r7eKBuLkyaPobHFo/d18a+sjjcae3kqCJJ2TCulfiY6SAah92rZGZpxzdxg6smWQDMDOznd2d3/qrSRE0jmp0D0voSXzT2OP/f0D/dUEKM2e7Drd8xJaMqvVL/z+1dBfTYDJGye7rls6kMC6F7e8XPKWNdHiYKFMSP6SlYkWB0tlerlkMUd3JFJYKROglGB36o5ECmtl5ovxdpypeQkWywQoxHiym5qXYLnMWDvTQCRSWC3Ty0WHeJMtDpbLhOgQb7LFIQUyo0K8qUiksF4mhId4U5FIkQqZnUK86XkJKZEJx0O86XkJKZJ5NMSbjESK1MiEdojvR4tDymTmi61Xr/skcyBew5bCy8Fcf96pAFK2M/uNkymINf9UZQNuZwriZAriZAriZAriZAriZAriZAriZAryD4xxER8vOFEDAAAAAElFTkSuQmCC" />
                    </defs>
                  </svg>
                </span>
                you.
              </h4>
              <p>While we're good with smoke signals,
                there <br /> are easier ways to get in touch.</p>
            </div>
            <div class="contact-form-social-box p-relative">
              <div class="contact-form-social-item">
                <router-link v-for="(item, i) in social_links" :key="i" :to="item.link" target="_blank">
                  <i :class="item.icon"></i>
                </router-link>
              </div>
              <div class="contact-form-section-img">
                <img src="~/assets/img/contact/contact-icon-sm-4.png" alt="image-here">
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-7 col-lg-6">
          <div class="contact-form-right-warp">
            <div class="postbox__comment-form">
              <form @click.prevent class="box">
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
                    <div class="postbox__comment-input mb-35">
                      <input type="text" class="inputText" required>
                      <span class="floating-label">Phone Number</span>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="postbox__select mb-30">
                      <NiceSelect :options="[
                        { value: '1', text: 'Your Inquiry about' },
                        { value: '2', text: '01 Year' },
                        { value: '3', text: '02 Year' },
                        { value: '4', text: '03 Year' },
                        { value: '5', text: '04 Year' },
                        { value: '6', text: '05 Year' },
                      ]" :defaultCurrent="0" name="Choose Your Topic" @onChange="changeHandler"
                        placeholder="Choose Your Topic" className="nice-select" />

                    </div>
                  </div>
                  <div class="col-xxl-12">
                    <div class="postbox__comment-input mb-30">
                      <textarea class="textareaText" required></textarea>
                      <span class="floating-label-2">Message...</span>
                    </div>
                  </div>
                  <div class="col-xxl-12">
                    <div class="postbox__btn-box">
                      <button class="submit-btn w-100">Send your Request</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="contact-inner-area pb-130">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="contact-inner-title-sm-wrap text-center mb-50">
            <h4 class="contact-inner-title-sm">Book a Demo!</h4>
            <p>We will contact again after receive your request in 24h</p>
          </div>
        </div>
      </div>
      <div class="contact-inner-wrapper">
        <div class="row gx-0">


          <div v-for="(item, i) in contact" :key="i" class="col-xl-4 col-lg-4">
            <div class="contact-inner-item d-flex align-items-center justify-content-center">
              <div class="contact-inner-img contact-img-1">
                <img :src="item.icon" alt="image-here">
              </div>
              <div class="contact-inner-link">
                <a :href="item.link">{{ item.title }}</a>
              </div>
            </div>
          </div> 

        </div>
      </div>
    </div>
  </div>
</template>

 