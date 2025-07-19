<template>
  <section id="mision" class="solution-section">
    <div class="solution-container">
      <h2 class="solution-title">NUESTRA SOLUCIÓN</h2>
      <div class="solution-subtitle"><i>Un sistema de venta completo y creativo</i></div>
      <div class="solution-box">
        <ul class="solution-list-numbered">
          <li>
            <span class="solution-number">1</span>
            <div class="solution-step-content">
              <span class="solution-step-title">Analizamos tu desarrollo</span>
              <span class="solution-step-desc">Te ayudamos a detectar qué necesita tu proyecto para empezar a vender
                bien desde el día uno.</span>
            </div>
          </li>
          <li>
            <span class="solution-number">2</span>
            <div class="solution-step-content">
              <span class="solution-step-title">Creamos tu contenido</span>
              <span class="solution-step-desc">Somos agencia creativa: desarrollamos renders, branding, presentaciones,
                storytelling y piezas que generan interés real en los compradores.</span>
            </div>
          </li>
          <li>
            <span class="solution-number">3</span>
            <div class="solution-step-content">
              <span class="solution-step-title">Lanzamos tu estrategia de marketing</span>
              <span class="solution-step-desc">Activamos campañas personalizadas para tu público objetivo: redes,
                portales, medios, afiliados y más.</span>
            </div>
          </li>
          <li>
            <span class="solution-number">4</span>
            <div class="solution-step-content">
              <span class="solution-step-title">Ejecutamos con equipo de ventas especializado</span>
              <span class="solution-step-desc">Nuestros closers están entrenados en desarrollos inmobiliarios. Sabemos
                cómo vender productos en pozo o terminado.</span>
            </div>
          </li>
          <li>
            <span class="solution-number">5</span>
            <div class="solution-step-content">
              <span class="solution-step-title">Medimos todo y te mostramos los resultados</span>
              <span class="solution-step-desc">Nuestro CRM con inteligencia artificial te permite ver en tiempo real
                cuántos leads tenés, cómo avanzan, y qué está funcionando.</span>
            </div>
          </li>
        </ul>
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
  padding: 0vw 0 4vw 0;
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
  font-size: clamp(2.2rem, 5vw, 2.7rem);
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
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.10);
  transition: box-shadow 0.2s, transform 0.2s;
  line-height: 1.6;
  text-align: left;
  max-width: 100%;
  word-break: break-word;
}

.solution-box:hover {
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.18);
  transform: translateY(-2px) scale(1.01);
}

.solution-italic {
  font-style: italic;
}

.solution-subtitle {
  color: #bdbdbd;
  font-size: clamp(1.05rem, 2.5vw, 1.18rem);
  font-style: italic;
  font-weight: 400;
  margin-bottom: 1.5rem;
  margin-top: -0.5rem;
  text-align: left;
}

.solution-steps {
  margin: 0;
  padding-left: 1.2em;
  color: #fff;
  font-size: 1.08em;
  line-height: 1.7;
  list-style: decimal inside;
  display: flex;
  flex-direction: column;
  gap: 1.3em;
}

.solution-steps li {
  background: #232323;
  border-radius: 1.2em;
  padding: 1.1em 1.5em;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.10);
  font-weight: 400;
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
  font-size: clamp(2.2rem, 5vw, 2.7rem);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
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
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.10);
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

.service-chip:hover,
.service-chip:focus {
  background: #bdbdbd;
  color: #181818;
  box-shadow: 0 12px 32px 0 rgba(189, 189, 189, 0.22);
  transform: scale(1.07);
}

.solution-list-numbered {
  margin: 1rem 0 0 0;
  padding-left: 0;
  color: #fff;
  font-size: 1.08em;
  line-height: 1.7;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.1em;
}

.solution-list-numbered li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.2em;
  gap: 1.1em;
  background: #181818;
  border-radius: 1.1em;
  box-shadow: 0 2px 8px 0 rgba(189, 189, 189, 0.10);
  padding: 1.1em 1.3em;
  transition: box-shadow 0.2s, transform 0.2s;
}

.solution-list-numbered li:hover {
  box-shadow: 0 8px 32px 0 rgba(189, 189, 189, 0.18);
  transform: translateY(-2px) scale(1.01);
}

.solution-number {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2.2em;
  height: 2.2em;
  background: #bdbdbd;
  color: #232323;
  font-weight: 800;
  border-radius: 50%;
  text-align: center;
  font-size: 1.15rem;
  box-shadow: 0 2px 8px 0 rgba(189, 189, 189, 0.10);
  margin-right: 0.7em;
  flex-shrink: 0;
}

.solution-step-content {
  display: flex;
  flex-direction: column;
  gap: 0.2em;
}

.solution-step-title {
  font-weight: 700;
  font-size: 1.15rem;
  color: #bdbdbd;
  margin-bottom: 0.1em;
}

.solution-step-desc {
  font-weight: 400;
  color: #fff;
  font-size: 1.15rem;
}

@media (max-width: 900px) {
  .solution-list-numbered li {
    font-size: 0.98rem;
    padding: 0.9em 0.7em;
    gap: 0.7em;
  }

  .solution-step-title {
    font-size: 1em;
  }
}

@media (max-width: 600px) {
  .solution-title,
  .services-title {
    font-size: clamp(1.1rem, 7vw, 1.5rem);
  }
  .solution-list-numbered li {
    font-size: 1rem;
    padding: 0.7em 0.5em;
    gap: 0.5em;
  }

  .solution-subtitle {
    margin-top: -2.5rem;
  }

  .solution-step-title {
    font-size: 1rem;
  }

  .solution-step-desc {
    font-size: 1rem;
    margin-left: -3rem;
  }

  .services-chips-grid {
    margin-bottom: 4rem;
    grid-template-columns: 1fr;
    margin-top: -2rem;
  }

  /* .services-title {
    font-size: 1em;
    margin-top: 2rem;
  } */
}
</style>
