<template>
  <section class="problem-section">
    <div class="problem-container">
      <h2 class="problem-title">EL PROBLEMA</h2>
      <div class="problem-box">
        Muchos desarrolladores enfrentan la dificultad de posicionar sus emprendimientos de forma efectiva. Por más sólidos y atractivos que sean en términos de diseño, <span class="problem-italic">ubicación o calidad constructiva</span>, si no cuentan con una estrategia clara de proyección y venta, es muy probable que no logren captar la atención de inversores ni alcanzar el nivel de ventas esperado.<br><br>
        La clave está en <b>comunicar correctamente el valor del proyecto</b> y diferenciarlo en un entorno saturado de ofertas similares.
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
// Asegúrate de tener gsap y ScrollTrigger importados globalmente o aquí si es necesario
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

onMounted(() => {
  gsap.from('.problem-title', {
    scrollTrigger: {
      trigger: '.problem-title',
      start: 'top 80%',
    },
    opacity: 0,
    y: 40,
    duration: 0.7,
    ease: 'power2.out',
  });
  gsap.from('.problem-box', {
    scrollTrigger: {
      trigger: '.problem-box',
      start: 'top 85%',
    },
    opacity: 0,
    y: 30,
    duration: 0.7,
    delay: 0.2,
    ease: 'power2.out',
  });
});
</script>

<style scoped>
.problem-section {
  background: #000;
  padding: 6vw 0 4vw 0;
  display: flex;
  justify-content: center;
}
.problem-container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
  padding: 0 2vw;
}
.problem-title {
  color: #fff;
  font-size: clamp(1.3rem, 4vw, 2.2rem);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  text-align: left;
  line-height: 1.1;
}
.problem-box {
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
.problem-box:hover {
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18);
  transform: translateY(-2px) scale(1.01);
}
.problem-italic {
  font-style: italic;
}
@media (max-width: 900px) {
  .problem-container {
    max-width: 98vw;
    padding: 0 3vw;
  }
  .problem-title {
    font-size: clamp(1.1rem, 5vw, 1.5rem);
  }
  .problem-box {
    font-size: clamp(0.98rem, 3vw, 1.05rem);
    padding: 1.1em 1em;
  }
}
@media (max-width: 600px) {
  .problem-section {
    padding: 8vw 0 5vw 0;
  }
  .problem-container {
    padding: 0 2vw;
    gap: 1.2rem;
  }
  .problem-title {
    font-size: 1.1rem;
  }
  .problem-box {
    font-size: 0.98rem;
    padding: 0.9em 0.7em;
  }
}
</style>
