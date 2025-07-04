<template>
  <section id="servicios" class="services section-padding">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-15 fz-18" style="letter-spacing:3px;">
          <span style="font-style:italic; font-weight:600;">NUESTROS SERVICIOS</span>
        </h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600 d-rotate wow">
            <span class="rotate-text">
              QUE HACEMOS POR <span class="fw-200">tu proyecto?.</span>
            </span>
          </h2>
          <div class="ml-auto">
            <div class="swiper-arrow-control">
              <div class="swiper-button-prev">
                <span class="ti-arrow-left"></span>
              </div>
              <div class="swiper-button-next">
                <span class="ti-arrow-right"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="serv-swiper"
        data-carousel="swiper"
        data-loop="true"
        data-space="30"
      >
        <Swiper
          id="content-carousel-container-unq-serv"
          class="swiper-container"
          data-swiper="container"
          v-bind="swiperOptions"
        >
          <SwiperSlide v-for="(item, i) in data" :key="i">
            <div class="item-box radius-15">
              <div class="icon mb-40 opacity-5">
                <img :src="item.img" alt="" />
              </div>
              <h5 class="mb-15">{{ item.title }}</h5>
              <p>{{ item.desc }}</p>
              <!-- <a :href="item.link" class="rmore mt-30">
                <span class="sub-title">Read More</span>
                <img
                  src="/dark/assets/imgs/arrow-right.png"
                  alt=""
                  class="icon-img-20 ml-5"
                />
              </a> -->
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
<script setup>
const data = [
  {
    img: '/dark/assets/imgs/serv-icons/5.png',
    title: 'Estrategia comercial y posicionamiento',
    desc: 'Impulsamos el crecimiento de tu marca con estrategias comerciales efectivas y posicionamiento diferencial.',
    link: '#',
  },
  {
    img: '/dark/assets/imgs/serv-icons/1.png',
    title: 'Naming, branding y presentación profesional',
    desc: 'Desarrollamos identidades de marca sólidas y presentaciones que generan confianza y reconocimiento.',
    link: '#',
  },
  {
    img: '/dark/assets/imgs/serv-icons/2.png',
    title: 'Renders, fotos, video, recorrido 360, Landing page + Campañas digitales',
    desc: 'Creamos contenido visual de alto impacto y gestionamos campañas digitales para maximizar tu alcance.',
    link: '#',
  },
  {
    img: '/dark/assets/imgs/serv-icons/3.png',
    title: 'Generación de Leads calificados, Seguimiento y cierre con equipo de ventas',
    desc: 'Atraemos prospectos calificados y acompañamos el proceso de venta hasta el cierre exitoso.',
    link: '#',
  },
  {
    img: '/dark/assets/imgs/serv-icons/4.png',
    title: 'Postventa con seguimiento al cliente, Reportes claros y medibles',
    desc: 'Brindamos atención postventa y reportes precisos para asegurar la satisfacción y medir resultados.',
    link: '#',
  },
];
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';

const swiperOptions = {
  modules: [Navigation],
  speed: 600,
  loop: true,
  navigation: {
    nextEl: '.swiper-arrow-control .swiper-button-next',
    prevEl: '.swiper-arrow-control .swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 640px
    640: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
    },
    // when window width is >= 768px
    768: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 50,
      centeredSlides: false,
    },
    // when window width is >= 1200px
    1000: {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 50,
      centeredSlides: true,
    },
  },
};
</script>

<style scoped>
.services .serv-swiper {
  min-height: 420px; /* Ajusta según necesidad */
}
.services .swiper-container,
.services .swiper-slide {
  height: 100% !important;
  min-height: 420px;
  display: flex;
  align-items: stretch;
}
.services .item-box {
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.services .item-box .icon {
  margin-bottom: 24px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.services .item-box h5 {
  margin-bottom: 12px;
  font-size: 1.2rem;
  font-weight: 600;
}
.services .item-box p {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
}
</style>
