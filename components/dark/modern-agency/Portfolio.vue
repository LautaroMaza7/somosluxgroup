<template>
  <section id="proyectos" class="work-carsouel section-padding position-re o-hidden">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-15 fz-18" style="letter-spacing:3px;">
          <span style="font-style:italic; font-weight:600;">NUESTROS PROYECTOS</span>
        </h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fz-60 fw-900 mb-30" style="line-height:1.1; letter-spacing:-2px;">
            Proyectos <span class="main-color">destacados</span>
          </h2>
        </div>
        <h5 class="mb-30 fw-400 line-height-40" style="color:#b7b7b7; max-width:700px;">
          <span class="fw-700 fz-18" style="color:#fff;">En <span class="main-color">somosluxgroup</span> impulsamos desarrollos inmobiliarios que marcan tendencia y generan valor real.</span><br>
          <!-- <span>Cada uno de nuestros proyectos es el resultado de una visión estratégica, creatividad y un profundo conocimiento del mercado. Nos especializamos en potenciar el posicionamiento, la comercialización y la diferenciación de emprendimientos únicos, acompañando a nuestros clientes en cada etapa para lograr resultados sobresalientes.</span> -->
        </h5>
      </div>
    </div>
    <div class="container-fluid rest">
      <div class="row">
        <div class="col-12">
          <!-- Primer slider: izquierda a derecha -->
          <div class="work-crus work-crus5 out slider-wrapper">
            <Swiper
              v-bind="swiperOptions"
              class="portfolio-slider"
              :modules="[Autoplay]"
              :autoplay="{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }"
              :speed="3000"
              :loop="true"
              :slides-per-view="5"
              :space-between="40"
              :allow-touch-move="false"
            >
              <SwiperSlide v-for="(item, i) in data" :key="'top-'+i">
                <ProjectCard :item="item" @open="openProject" />
              </SwiperSlide>
            </Swiper>
          </div>
          <!-- Segundo slider: derecha a izquierda -->
          <div class="work-crus work-crus5 out slider-wrapper reverse">
            <Swiper
              v-bind="swiperOptions"
              class="portfolio-slider"
              :modules="[Autoplay]"
              :autoplay="{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, reverseDirection: true }"
              :speed="3000"
              :loop="true"
              :slides-per-view="5"
              :space-between="40"
              :allow-touch-move="false"
            >
              <SwiperSlide v-for="(item, i) in data" :key="'bottom-'+i">
                <ProjectCard :item="item" @open="openProject" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Modal dinámico fuera del section y usando teleport -->
  <teleport to="body">
    <transition name="modal-fade">
      <div v-if="selectedProject" class="project-modal">
        <div class="modal-content blog-modal-content">
          <button class="close-btn" @click="closeModal">×</button>
          <div class="modal-img-wrap mb-40">
            <img :src="selectedProject.img" alt="" class="modal-img" />
          </div>
          <div class="modal-body">
            <h1 class="modal-title mb-20">{{ selectedProject.title }}</h1>
            <h4 v-if="selectedProject.subTitle" class="modal-subtitle mb-30">{{ selectedProject.subTitle }}</h4>
            <div v-if="selectedProject.description" class="modal-description mb-40" v-html="selectedProject.description"></div>
          </div>
          <div v-if="selectedProject.social" class="modal-social mt-30">
            <a v-if="selectedProject.social.facebook" :href="selectedProject.social.facebook" target="_blank" class="social-icon facebook" title="Facebook">
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M17 2H7C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h5v-7h-2v-3h2v-2c0-2.21 1.79-4 4-4h2v3h-2c-.55 0-1 .45-1 1v2h3l-1 3h-2v7h3c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5z"/></svg>
            </a>
            <a v-if="selectedProject.social.instagram" :href="selectedProject.social.instagram" target="_blank" class="social-icon instagram" title="Instagram">
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25 1.25a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/></svg>
            </a>
            <a v-if="selectedProject.social.whatsapp" :href="selectedProject.social.whatsapp" target="_blank" class="social-icon whatsapp" title="WhatsApp">
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M16.7 14.3c-.3-.1-1.7-.8-2-1c-.3-.1-.5-.2-.7.1c-.2.3-.8 1-1 1.2c-.2.2-.4.2-.7.1c-.3-.1-1.2-.4-2.2-1.3c-.8-.7-1.3-1.6-1.5-1.9c-.2-.3 0-.5.1-.7c.1-.1.3-.4.5-.6c.1-.2.1-.3.2-.5c.1-.2 0-.4-.1-.6c-.1-.2-.7-1.7-.9-2.3c-.2-.6-.4-.5-.6-.5c-.2 0-.4 0-.6 0c-.2 0-.5.1-.7.3c-.2.2-.7.7-.7 1.7c0 1 .7 2.1 1.1 2.6c.4.5 1.5 2.2 3.6 3c.5.2.9.3 1.2.4c.5.1.9.1 1.2.1c.4 0 1.2-.2 1.4-.5c.2-.3.6-.7.7-1c.1-.3.1-.5-.2-.6zM12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.3 1.2 4.7L2 22l5.3-1.2C8.7 21.6 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
            </a>
          </div>
        </div>
        <div class="modal-backdrop" @click="closeModal"></div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import data from '@/data/portfolios/works3.json';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper';
import { ref, watch } from 'vue';
import ProjectCard from './ProjectCard.vue';

// Opciones base para Swiper (se sobreescriben en cada instancia)
const swiperOptions = {
  speed: 3000,
  loop: true,
  slidesPerView: 5,
  spaceBetween: 40,
  allowTouchMove: false,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
};

const selectedProject = ref(null);
function openProject(project) {
  selectedProject.value = project;
}
function closeModal() {
  selectedProject.value = null;
}
// Bloquea el scroll del body cuando el modal está abierto
watch(selectedProject, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});
</script>

<style scoped>
.portfolio-showcase {
  background: #18181b;
  padding: 80px 0;
  overflow: hidden;
}
.slider-wrapper {
  margin-bottom: 40px;
}
.slider-wrapper.reverse .portfolio-slider .swiper-wrapper {
  flex-direction: row-reverse;
}
.portfolio-slider {
  width: 100%;
}
.project-card {
  display: block;
  position: relative;
  cursor: pointer;
  overflow: visible;
  text-decoration: none;
  transition: box-shadow 0.4s cubic-bezier(.4,2,.3,1);
}
.img-container {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  overflow: visible;
  transition: box-shadow 0.4s cubic-bezier(.4,2,.3,1);
}
.project-info {
  margin-top: 18px;
  color: #fff;
  text-align: left;
}
.project-info span {
  font-size: 0.95rem;
  color: #a3a3a3;
  letter-spacing: 1px;
}
.project-info h6 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  color: #fff;
  letter-spacing: 1px;
}
/* Modal refuerzo */
.project-modal {
  position: fixed !important;
  z-index: 2000;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
}
.modal-content {
  background: #23232b;
  border-radius: 22px;
  padding: 2.5rem 2rem 2rem 2rem;
  max-width: 95vw;
  max-height: 90vh;
  box-shadow: 0 12px 64px 0 rgba(0,0,0,0.55);
  position: relative;
  z-index: 2001;
  color: #fff;
  text-align: center;
  animation: modalIn 0.38s cubic-bezier(.4,2,.3,1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  justify-content: center;
}
.close-btn {
  position: absolute;
  top: 1.1rem;
  right: 1.1rem;
  background: transparent;
  border: none;
  font-size: 2.2rem;
  color: #fff;
  cursor: pointer;
  transition: color 0.2s;
  z-index: 2002;
}
.close-btn:hover {
  color: #ffb347;
}
.modal-img-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.2rem;
}
.modal-img {
  width: 100%;
  max-width: 420px;
  max-height: 320px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.18);
  background: #18181b;
  transition: box-shadow 0.3s, transform 0.3s;
}
.modal-img:hover {
  box-shadow: 0 8px 48px 0 rgba(255,179,71,0.18);
  transform: scale(1.03) rotate(-1deg);
}
.modal-title {
  font-size: 2rem;
  font-weight: 700;
  color: #ffb347;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}
.modal-subtitle {
  font-size: 1.15rem;
  color: #e0e0e0;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
}
.modal-description {
  font-size: 1.08rem;
  color: #bdbdbd;
  margin-bottom: 1.2rem;
  line-height: 1.6;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
.modal-social {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 1.2rem;
  margin-bottom: 0.2rem;
}
.social-icon {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #23232b;
  color: #ffb347;
  font-size: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.12);
  transition: background 0.2s, color 0.2s, transform 0.2s;
  text-decoration: none;
}
.social-icon.facebook:hover {
  background: #1877f2;
  color: #fff;
  transform: scale(1.12);
}
.social-icon.instagram:hover {
  background: radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  color: #fff;
  transform: scale(1.12);
}
.social-icon.whatsapp:hover {
  background: #25d366;
  color: #fff;
  transform: scale(1.12);
}
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(24,24,27,0.82);
  z-index: 2000;
  animation: backdropIn 0.38s cubic-bezier(.4,2,.3,1);
}
@keyframes modalIn {
  0% { opacity: 0; transform: scale(0.92) translateY(40px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}
@keyframes backdropIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.35s cubic-bezier(.4,2,.3,1);
}
.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}
.blog-modal-content {
  max-width: 700px;
  padding: 2.5rem 2.2rem 2rem 2.2rem;
  background: #23232b;
  border-radius: 22px;
  box-shadow: 0 12px 64px 0 rgba(0,0,0,0.55);
  color: #fff;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0;
  position: relative;
  animation: modalIn 0.38s cubic-bezier(.4,2,.3,1);
}
.modal-img-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.2rem;
}
.modal-img {
  width: 100%;
  max-width: 600px;
  max-height: 340px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.18);
  background: #18181b;
  transition: box-shadow 0.3s, transform 0.3s;
}
.modal-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #ffb347;
  margin-bottom: 0.7rem;
  letter-spacing: 1px;
  line-height: 1.2;
}
.modal-subtitle {
  font-size: 1.18rem;
  color: #e0e0e0;
  margin-bottom: 1.2rem;
  letter-spacing: 0.5px;
  font-weight: 500;
}
.modal-description {
  font-size: 1.08rem;
  color: #bdbdbd;
  margin-bottom: 1.2rem;
  line-height: 1.7;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.modal-social {
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
  margin-top: 2.2rem;
  margin-bottom: 0.2rem;
}
.social-icon {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #23232b;
  color: #ffb347;
  font-size: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.12);
  transition: background 0.2s, color 0.2s, transform 0.2s;
  text-decoration: none;
}
.social-icon.facebook:hover {
  background: #1877f2;
  color: #fff;
  transform: scale(1.12);
}
.social-icon.instagram:hover {
  background: radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  color: #fff;
  transform: scale(1.12);
}
.social-icon.whatsapp:hover {
  background: #25d366;
  color: #fff;
  transform: scale(1.12);
}
</style>
