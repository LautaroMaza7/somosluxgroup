<template>
  <section class="problem-section">
    <div class="problem-container">
      <h2 class="problem-title">EL PROBLEMA</h2>
      <div class="problem-box">
        <b>¿Qué problema resolvemos?</b><br>
        <ul class="problem-list-numbered">
          <li><span class="problem-number">1</span> Los equipos de venta tradicionales no están preparados para desarrollos</li>
          <li><span class="problem-number">2</span> Se pierden leads por falta de seguimiento profesional</li>
          <li><span class="problem-number">3</span> El desarrollador no tiene visibilidad real del proceso</li>
          <li><span class="problem-number">4</span> El contenido no refleja el valor real del proyecto</li>
          <li><span class="problem-number">5</span> El tiempo de comercialización se extiende innecesariamente</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
onMounted(async () => {
  await nextTick();
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
  /* padding: 0 2vw; */
}
.problem-title {
  color: #fff;
  font-size: clamp(2.2rem, 5vw, 2.7rem);
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
.problem-list {
  margin: 1rem 0 0 0;
  padding-left: 1.2em;
  color: #fff;
  font-size: 1.08em;
  line-height: 1.7;
  list-style: disc inside;
}
.problem-list-numbered {
  margin: 1rem 0 0 0;
  padding-left: 0;
  color: #fff;
  font-size: 1.08em;
  line-height: 1.7;
  list-style: none;
}
.problem-list-numbered li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.7em;
}
.problem-number {
  display: inline-block;
  min-width: 2em;
  height: 2em;
  margin-right: 0.7em;
  background: #bdbdbd;
  color: #232323;
  font-weight: 800;
  border-radius: 50%;
  text-align: center;
  line-height: 2em;
  font-size: 1.1em;
  box-shadow: 0 2px 8px 0 rgba(189, 189, 189, 0.10);
}
@media (max-width: 900px) {
  .problem-container {
    max-width: 98vw;
    padding: 0 3vw;
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
  .problem-box {
    font-size: 1rem;
    padding: 0.9em 0.7em;
  }
  .problem-list-numbered li {
    font-size: 1rem;
  }
  .problem-title {
    font-size: clamp(1.1rem, 7vw, 1.5rem);
  }
}
</style>
