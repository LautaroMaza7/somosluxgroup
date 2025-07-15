<template>
  <section id="proyectos" class="portfolio-showcase section-padding position-re o-hidden">
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
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
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

onMounted(() => {
  // Cerrar modal con ESC
  window.addEventListener('keydown', handleEscClose);
});
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscClose);
});

function handleEscClose(e) {
  if (e.key === 'Escape' && selectedProject.value) {
    closeModal();
  }
}
</script>

<style scoped>
.portfolio-showcase {
  background: #000;
  padding: 6vw 0 6vw 0;
  overflow: hidden;
}
.slider-wrapper {
  margin-bottom: 2.5vw;
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
  margin-top: 1.2vw;
  color: #fff;
  text-align: left;
}
.project-info span {
  font-size: clamp(0.9rem, 2vw, 0.98rem);
  color: #a3a3a3;
  letter-spacing: 1px;
}
.project-info h6 {
  font-size: clamp(1rem, 2vw, 1.2rem);
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
  padding: 2vw;
}
.modal-content {
  background: #23232b;
  border-radius: 1.2em;
  padding: 2.5em 2em 2em 2em;
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
  top: 1.2em;
  right: 1.2em;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  transition: color 0.2s;
}
.close-btn:hover {
  color: #14cf93;
}
.modal-img-wrap {
  width: 100%;
  max-width: 480px;
  margin: 0 auto 1.5em auto;
}
.modal-img {
  width: 100%;
  border-radius: 1.2em;
  object-fit: cover;
  max-height: 60vh;
}
.modal-title {
  font-size: clamp(1.2rem, 3vw, 2rem);
  font-weight: 800;
  margin-bottom: 0.5em;
  color: #fff;
}
.modal-subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #b7ffdf;
  margin-bottom: 1em;
}
.modal-description {
  font-size: clamp(0.98rem, 2vw, 1.08rem);
  color: #e0e0e0;
  margin-bottom: 1.5em;
  text-align: left;
}
.modal-social {
  display: flex;
  gap: 1.2em;
  margin-top: 1.2em;
  justify-content: center;
}
.social-icon {
  color: #fff;
  font-size: 1.5em;
  transition: color 0.2s;
}
.social-icon:hover {
  color: #14cf93;
}
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  z-index: 2000;
}
@media (max-width: 1200px) {
  .portfolio-showcase {
    padding: 8vw 0 8vw 0;
  }
  .slider-wrapper {
    margin-bottom: 3vw;
  }
  .modal-content {
    padding: 1.5em 0.7em 1em 0.7em;
    max-width: 99vw;
  }
  .modal-img-wrap {
    max-width: 98vw;
  }
}
@media (max-width: 900px) {
  .portfolio-showcase {
    padding: 10vw 0 10vw 0;
  }
  .slider-wrapper {
    margin-bottom: 4vw;
  }
  .portfolio-slider {
    padding: 0 1vw;
  }
  .modal-content {
    padding: 1em 0.3em 0.7em 0.3em;
    border-radius: 0.7em;
  }
  .modal-img-wrap {
    max-width: 100vw;
  }
  .modal-title {
    font-size: 1.1rem;
  }
}
@media (max-width: 700px) {
  .portfolio-slider {
    padding: 0 0.5vw;
  }
  .slider-wrapper {
    margin-bottom: 5vw;
  }
  .modal-content {
    padding: 0.7em 0.1em 0.5em 0.1em;
  }
  .modal-img {
    max-height: 40vh;
  }
}
@media (max-width: 600px) {
  .portfolio-showcase {
    padding: 12vw 0 12vw 0;
  }
  .slider-wrapper {
    margin-bottom: 6vw;
  }
  .portfolio-slider {
    padding: 0 0.2vw;
  }
  .modal-content {
    padding: 0.5em 0.05em 0.3em 0.05em;
    border-radius: 0.5em;
  }
  .modal-img-wrap {
    max-width: 100vw;
  }
  .modal-title {
    font-size: 1rem;
  }
}
</style>
