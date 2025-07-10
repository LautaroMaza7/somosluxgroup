<template>
  <section class="solution-section">
    <div class="solution-container">
      <h2 class="solution-title">NUESTRA SOLUCION</h2>
      <div class="solution-box">
        Nuestra misión es que cada proyecto no solo se destaque, sino que se imponga en un mercado cada vez más exigente y competitivo.<br><br>
        Para lograrlo, trabajamos con una metodología estratégica que va desde el análisis del contexto y la competencia, hasta la definición precisa del producto y la ejecución de acciones comerciales y de marketing. Todo esto <span class="solution-italic">respaldado por un sistema propio</span> que nos permite optimizar cada etapa del proceso y maximizar resultados.
      </div>
    </div>
    <div class="services-container">
      <h2 class="services-title">QUE HACEMOS POR <span class="services-title-italic">tu proyecto?</span></h2>
      <div class="services-chips-grid">
        <div v-for="(chip, i) in chips" :key="i" class="service-chip">{{ chip }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
const chips = [
  'Estrategia comercial y posicionamiento',
  'Naming, branding y presentación profesional',
  'Renders, fotos, video, recorrido 360',
  'Landing page + Campañas digitales',
  'Generacion de Leads calificados',
  'Seguimiento y cierre con equipo de ventas',
  'Postventa con seguimiento al cliente',
  'Reportes claros y medibles',
];
// Asegúrate de tener gsap y ScrollTrigger importados globalmente o aquí si es necesario
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

onMounted(async () => {
  await nextTick();
  gsap.from('.solution-title', {
    scrollTrigger: {
      trigger: '.solution-title',
      start: 'top 80%',
    },
    opacity: 0,
    y: 40,
    duration: 0.7,
    ease: 'power2.out',
  });
  gsap.from('.solution-box', {
    scrollTrigger: {
      trigger: '.solution-box',
      start: 'top 85%',
    },
    opacity: 0,
    y: 30,
    duration: 0.7,
    delay: 0.2,
    ease: 'power2.out',
  });
  gsap.from('.services-title', {
    scrollTrigger: {
      trigger: '.services-title',
      start: 'top 80%',
    },
    opacity: 0,
    y: 40,
    duration: 0.7,
    delay: 0.3,
    ease: 'power2.out',
  });
  gsap.from('.service-chip', {
    scrollTrigger: {
      trigger: '.services-chips-grid',
      start: 'top 85%',
    },
    opacity: 0,
    y: 40,
    duration: 0.6,
    delay: 0.4,
    stagger: 0.08,
    ease: 'power2.out',
  });
});
</script>

<style scoped>
.solution-section {
  background: #000;
  padding: 6vw 0 6vw 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.solution-container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
  padding: 0 2vw;
}
.solution-title {
  color: #fff;
  font-size: clamp(1.3rem, 4vw, 2rem);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  text-align: left;
  line-height: 1.1;
}
.solution-box {
  background: #232323;
  color: #fff;
  border-radius: 1.2em;
  padding: 1.5em 2em;
  font-size: clamp(1rem, 2.5vw, 1.18rem);
  font-weight: 400;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.10);
  transition: box-shadow 0.2s, transform 0.2s;
  line-height: 1.6;
  text-align: left;
  max-width: 100%;
  word-break: break-word;
}
.solution-box:hover {
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18);
  transform: translateY(-2px) scale(1.01);
}
.solution-italic {
  font-style: italic;
}
.services-container {
  width: 100%;
  max-width: 900px;
  margin: 4vw auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
  padding: 0 2vw;
}
.services-title {
  color: #fff;
  font-size: clamp(1.1rem, 3vw, 1.7rem);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1.2rem;
  text-align: left;
}
.services-title-italic {
  font-style: italic;
  font-weight: 400;
  text-transform: none;
  font-size: 1.1em;
  color: #e0e0e0;
}
.services-chips-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 2rem;
  width: 100%;
}
.service-chip {
  background: #232323;
  color: #fff;
  border-radius: 0.8em;
  padding: 0.7em 1.3em;
  font-size: clamp(0.95rem, 2vw, 1rem);
  font-weight: 500;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10);
  transition: box-shadow 0.2s, transform 0.2s, background 0.2s, color 0.2s;
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  min-height: 44px;
  min-width: 0;
  justify-content: flex-start;
}
.service-chip:hover, .service-chip:focus {
  background: #14cf93;
  color: #181818;
  box-shadow: 0 12px 32px 0 rgba(20,207,147,0.22);
  transform: scale(1.07);
}
@media (max-width: 900px) {
  .solution-container, .services-container {
    max-width: 98vw;
    padding: 0 3vw;
  }
  .services-chips-grid {
    grid-template-columns: 1fr;
    gap: 0.7rem 0;
  }
  .solution-title, .services-title {
    font-size: clamp(1.1rem, 5vw, 1.3rem);
  }
  .solution-box {
    font-size: clamp(0.98rem, 3vw, 1.05rem);
    padding: 1.1em 1em;
  }
  .service-chip {
    font-size: 0.98rem;
    padding: 0.6em 0.7em;
  }
}
@media (max-width: 600px) {
  .solution-section {
    padding: 8vw 0 5vw 0;
  }
  .solution-container, .services-container {
    padding: 0 2vw;
    gap: 1.2rem;
  }
  .services-container{
    margin: 8vw 0vw 8vw 0vw;
  }
  .solution-title, .services-title {
    font-size: 1.1rem;
  }
  .services-title{
    margin-bottom: -1.8rem;}
  .solution-box {
    font-size: 0.98rem;
    padding: 0.9em 0.7em;
  }
  .service-chip {
    font-size: 0.95rem;
    padding: 0.6em 0.7em;
    min-width: 0;
  }
}
</style>
