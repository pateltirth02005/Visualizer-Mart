

<script setup>

// // video popup
import { useVideoModal } from "~/components/composables/useVideoModal";
const { playVideo } = useVideoModal();
const videoUrl = 'https://www.youtube.com/embed/GcMiYI1gWD4?si=Fj5qd8xfgXyl1v8J';

const mouse = useBigMouse();

const handleMouseEnter = () => {
   mouse.value = true
 }
const handleMouseLeave = () => {
  mouse.value = false
}


</script>



<template>
  <!-- tp-video-area-start -->
  <div class="tp-vedio-area p-relative pt-120">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-xl-10">
          <div class="tp-vedio-sction-box pb-70">
            <h4 class="tp-vedio-title">
              The best customer relationship <br>
              management platform for just <br>
              about everything
            </h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="tp-vedio-wrap">
            <a class="popup-video tp-cursor-point-area" @click="playVideo(videoUrl)" :style="{ cursor: 'pointer' }" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
              <video class="play-video" id="myVideo" autoplay loop playsInline muted>
                <source src="https://html.hixstudio.net/videos/softec/softec-video.mp4" type="video/mp4">
              </video>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-video-area-end -->

  <!-- <CommonVideoModal ref="video_modal" video-url="https://www.youtube.com/embed/7e90gBu4pas" /> -->

</template>

 