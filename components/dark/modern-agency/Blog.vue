<template>
  <section class="convince-section">
    <div class="convince-container">
      <h2 class="convince-title">SI TODAVÍA NO TE CONVENCIMOS...</h2>
      <div class="convince-subtitle">
        Nuestra <span class="convince-italic">información</span> y nuestros <span class="convince-italic">proyectos</span>
      </div>
      <div class="convince-cards-grid">
        <div v-for="(card, i) in cards" :key="i">
          <a :href="card.url" class="convince-card-link" target="_blank" rel="noopener">
            <div class="convince-card">
              <img :src="card.img" :alt="card.title" class="convince-img" />
              <div class="convince-card-title">{{ card.title }}</div>
              <div v-if="card.type === 'info'" class="convince-card-sub">{{ card.sub }}</div>
              <div v-else-if="card.type === 'project'" class="convince-card-project">
                <div class="project-data-block improved">
                  <div class="project-row">
                    <span class="project-icon"> <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#b7b7b7" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-3.33 0-10 1.67-10 5v1.5A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5V19c0-3.33-6.67-5-10-5Z"/></svg></span>
                    <span class="project-label">Desarrollador:</span> <span class="project-value">{{ card.developer }}</span>
                  </div>
                  <div class="project-row">
                    <span class="project-icon"> <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#b7b7b7" d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.11 10.39 8.13 11.13a1 1 0 0 0 1.13 0C13.89 21.39 21 16.25 21 11c0-4.97-4.03-9-9-9Zm0 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"/></svg></span>
                    <span class="project-label">Ubicación:</span> <span class="project-value highlight">{{ card.location }}</span>
                  </div>
                  <div class="project-row">
                    <span class="project-icon"> <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#b7b7b7" stroke-width="2"/><path stroke="#b7b7b7" stroke-width="2" stroke-linecap="round" d="M12 7v5l3 3"/></svg></span>
                    <span class="project-label">Estado:</span> <span class="project-value status">{{ card.status }}</span>
                  </div>
                  <div class="project-row">
                    <span class="project-icon"> <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" fill="#b7b7b7"/><path d="M8 2v4M16 2v4" stroke="#fff" stroke-width="2"/><path d="M3 10h18" stroke="#fff" stroke-width="2"/></svg></span>
                    <span class="project-label">Finalización:</span> <span class="project-value">{{ card.finish }}</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
const cards = [
  { img: '/dark/assets/imgs/blog/b/2.jpg', title: 'Mentoría 01', sub: 'Información de valor para vos', type: 'info', url: 'https://ejemplo.com/mentoria' },
  {
    img: '/dark/assets/imgs/INA.png',
    title: 'Proyecto - Ina',
    type: 'project',
    developer: 'Aspic',
    location: 'Ituzaingó, Bs.As.',
    status: '5%',
    finish: '2027',
    url: 'https://somoslux.website/'
  },
];

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
  transition: box-shadow 0.3s cubic-bezier(.4,2,.3,1), transform 0.3s cubic-bezier(.4,2,.3,1);
  cursor: pointer;
  justify-content: flex-start;
}
.convince-card:hover {
  box-shadow: 0 12px 32px 0 rgba(0,0,0,0.28), 0 2px 12px 0 rgba(0,0,0,0.10);
  transform: translateY(-10px) scale(1.035);
  z-index: 2;
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
.convince-card-project {
  width: 100%;
  margin-top: 0.7em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.project-data-block {
  width: 100%;
  border-top: 1px solid #333;
  padding-top: 0.7em;
  margin-top: 0.5em;
  display: flex;
  flex-direction: column;
  gap: 0.25em;
}
.project-data-block.improved {
  background: rgba(24,24,24,0.98);
  border-radius: 1em;
  border-top: 1.5px solid #292929;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.10);
  padding: 1.1em 1.2em 1.1em 1.2em;
  margin: 1.1em 0.7em 0.7em 0.7em;
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 0.35em;
}
.project-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.04rem;
  margin-bottom: 0.18em;
  gap: 0.5em;
}
.project-icon {
  display: flex;
  align-items: center;
  margin-right: 0.3em;
  min-width: 18px;
}
.project-label {
  color: #b7b7b7;
  font-weight: 500;
  font-size: 0.97rem;
  margin-right: 0.2em;
}
.project-value {
  color: #fff;
  font-weight: 700;
  font-size: 1.08rem;
}
.project-value.highlight {
  color: #fff;
}
.project-value.status {
  color: #fff;
  font-weight: 800;
}
.convince-card-link {
  text-decoration: none;
  display: block;
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
  .convince-card-project {
    font-size: 0.95rem;
  }
  .project-data-block.improved {
    padding: 0.7em 0.6em 0.7em 0.6em;
    margin: 0.7em 0.2em 0.5em 0.2em;
    gap: 0.18em;
  }
  .project-row {
    font-size: 0.97rem;
    gap: 0.3em;
  }
  .project-label {
    font-size: 0.93rem;
  }
  .project-value {
    font-size: 1.01rem;
  }
}
</style>
