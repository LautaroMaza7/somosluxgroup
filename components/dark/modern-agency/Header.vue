<template>
  <header class="slider slider-prlx">
    <div class="swiper-container parallax-slider">
      <Swiper
        effect="Parallax"
        class="swiper-container parallax-slider"
        v-bind="swiperOptions"
        :modules="[Navigation, Parallax, Pagination]"
        @swiper="onSwiper"
      >
        <SwiperSlide>
          <div
            class="bg-img valign"
            data-background="/dark/assets/imgs/header/bg1.jpg"
            data-overlay-dark="4"
          >
            <div class="container">
              <div class="caption text-center">
                <h2 class="mb-30" data-swiper-parallax="-2000">Invierte en tu Futuro</h2>
                <h1>
                  <span data-swiper-parallax="-1000">Proyectos Inmobiliarios Exclusivos</span>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class="bg-img valign"
            data-background="/dark/assets/imgs/header/full/3.jpg"
            data-overlay-dark="4"
          >
            <div class="container">
              <div class="caption text-center">
                <h2 class="mb-30" data-swiper-parallax="-2000">
                  Vive el Cambio, Vive Mejor
                </h2>
                <h1>
                  <span data-swiper-parallax="-1000">Desarrollos que Transforman</span>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class="bg-img valign"
            data-background="/dark/assets/imgs/header/bg-4.png"
            data-overlay-dark="4"
          >
            <div class="container">
              <div class="caption text-center">
                <h2 class="mb-30" data-swiper-parallax="-2000">Haz Crecer tu Patrimonio</h2>
                <h1>
                  <span data-swiper-parallax="-1000">Invierte Hoy, Disfruta Siempre</span>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="slider-contro main-bg">
      <div class="swiper-button-prev swiper-nav-ctrl" @click="goPrev">
        <div>
          <span>Prev</span>
        </div>
      </div>
      <div class="ml-30 mr-30">
        <span>/</span>
      </div>
      <div class="swiper-button-next swiper-nav-ctrl" @click="goNext">
        <div>
          <span>Next</span>
        </div>
      </div>

      <div class="shap-left-bottom">
        <svg
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-11 h-11"
        >
          <path
            d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
            fill="#1a1a1a"
          ></path>
        </svg>
      </div>
      <div class="shap-right-top">
        <svg
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-11 h-11"
        >
          <path
            d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
            fill="#1a1a1a"
          ></path>
        </svg>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </header>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Parallax } from 'swiper';
import { onMounted, ref } from 'vue';
//= Common Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

const swiperInstance = ref(null);

function onSwiper(swiper) {
  swiperInstance.value = swiper;
}

function goPrev() {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev();
  }
}
function goNext() {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
  }
}

// Initialize background images when component is mounted
onMounted(() => {
  loadBackgroudImages();
});
const swiperOptions = {
  spaceBetween: 30,
  speed: 600,
  navigation: false, // Desactivamos la navegación automática de Swiper
  pagination: {
    el: '.swiper-pagination',
  },
};
</script>

<style scoped>
.swiper-nav-ctrl,
.swiper-button-prev,
.swiper-button-next {
  cursor: pointer !important;
  z-index: 10;
  user-select: none;
}
</style>
