<template>
  <section class="convince-section">
    <div class="convince-container">
      <h2 class="convince-title">SI TODAVÍA NO TE CONVENCIMOS...</h2>
      <div class="convince-subtitle">
        Nuestra <span class="convince-italic">información</span> y nuestros <span class="convince-italic">proyectos</span>
      </div>
      <div class="convince-cards-grid">
        <div v-for="(card, i) in cards" :key="i" class="convince-card">
          <img :src="card.img" :alt="card.title" class="convince-img" />
          <div class="convince-card-title">{{ card.title }}</div>
          <div class="convince-card-sub">{{ card.sub }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
const cards = [
  { img: '/dark/assets/imgs/blog/b/2.jpg', title: 'Mentoría 01', sub: 'Información de valor para vos' },
  { img: '/dark/assets/imgs/blog/b/3.jpg', title: 'Lo que hacemos', sub: 'Proyectos completos' },
];
// Asegúrate de tener gsap y ScrollTrigger importados globalmente o aquí si es necesario
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

onMounted(async () => {
  await nextTick();
  gsap.from('.convince-title', {
    scrollTrigger: {
      trigger: '.convince-title',
      start: 'top 80%',
    },
    opacity: 0,
    y: 40,
    duration: 0.7,
    ease: 'power2.out',
  });
  gsap.from('.convince-subtitle', {
    scrollTrigger: {
      trigger: '.convince-subtitle',
      start: 'top 85%',
    },
    opacity: 0,
    y: 30,
    duration: 0.7,
    delay: 0.2,
    ease: 'power2.out',
  });
  gsap.from('.convince-card', {
    scrollTrigger: {
      trigger: '.convince-cards-grid',
      start: 'top 85%',
    },
    opacity: 0,
    y: 40,
    duration: 0.6,
    delay: 0.3,
    stagger: 0.12,
    ease: 'power2.out',
  });
});
</script>

<style scoped>
.convince-section {
  background: #000;
  padding: 6vw 0 6vw 0;
  display: flex;
  justify-content: center;
}
.convince-container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
  padding: 0 2vw;
}
.convince-title {
  color: #fff;
  font-size: clamp(1.3rem, 4vw, 2rem);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.2rem;
  text-align: left;
  line-height: 1.1;
}
.convince-subtitle {
  color: #fff;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  font-weight: 400;
  text-align: left;
}
.convince-italic {
  font-style: italic;
}
.convince-cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  width: 100%;
  justify-items: center;
  align-items: stretch;
}
.convince-card {
  background: #232323;
  border-radius: 1.2em;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.10);
  padding-bottom: 1.2rem;
  width: 100%;
  max-width: 340px;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: pointer;
  justify-content: flex-start;
}
.convince-card:hover {
  box-shadow: 0 8px 32px 0 rgba(80,80,80,0.18);
  transform: scale(1.04);
}
.convince-img {
  width: 100%;
  border-radius: 1.2em 1.2em 0 0;
  object-fit: cover;
  aspect-ratio: 16/9;
  margin-bottom: 1.1rem;
}
.convince-card-title {
  color: #fff;
  font-size: clamp(1.1rem, 2.5vw, 1.35rem);
  font-weight: 700;
  margin-bottom: 0.2rem;
  text-align: center;
}
.convince-card-sub {
  color: #ccc;
  font-size: clamp(0.95rem, 2vw, 1rem);
  font-weight: 400;
  text-align: center;
}
@media (max-width: 900px) {
  .convince-container {
    max-width: 98vw;
    padding: 0 3vw;
  }
  .convince-cards-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    justify-items: center;
  }
  .convince-card {
    max-width: 400px;
  }
}
@media (max-width: 600px) {
  .convince-title {
    font-size: 1.1rem;
    margin-bottom: -1.8rem;
  }
  .convince-subtitle {
    font-size: 1rem;
    margin-bottom: -2.5rem;
  }
  .convince-card {
    font-size: 0.95rem;
    padding-bottom: 0.7rem;
    min-height: 0;
  }
  .convince-container {
    padding: 0 2vw;
  }
}
</style>
