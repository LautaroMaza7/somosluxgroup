<template>
  <section class="about-knowus-section">
    <div class="about-knowus-container">
      <h2 class="about-knowus-title">NOS CONOCEN POR..</h2>
      <div class="about-knowus-box">
        Ser la primer agencia <b>100% especializada</b> en desarrollos inmobiliarios. En
        <span class="about-knowus-luxgroup">Lux group</span>
        combinamos lo mejor de dos mundos: <b>Creatividad</b>, <b>estrategia</b> + un equipo comercial especializado.
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const tl = gsap.timeline();
  tl.from('.about-knowus-title', { y: 40, opacity: 0, duration: 0.7, ease: 'power2.out' });
  tl.from('.about-knowus-box', { y: 30, opacity: 0, duration: 0.7, ease: 'power2.out' }, '-=0.4');
});
</script>

<style scoped>
.about-knowus-section {
  background: #000;
  padding: 5rem 0 3rem 0;
  display: flex;
  justify-content: center;
}
.about-knowus-container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
}
.about-knowus-title {
  color: #fff;
  font-size: 2rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  text-align: left;
}
.about-knowus-box {
  background: #232323;
  color: #fff;
  border-radius: 12px;
  padding: 1.3rem 1.5rem;
  font-size: 1.15rem;
  font-weight: 400;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.10);
  transition: box-shadow 0.2s, transform 0.2s;
  line-height: 1.6;
  text-align: left;
}
.about-knowus-box:hover {
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18);
  transform: translateY(-2px) scale(1.01);
}
.about-knowus-luxgroup {
  font-style: italic;
  font-weight: 600;
  color: #b7ffdf;
  transition: color 0.2s, text-decoration 0.2s;
  cursor: pointer;
}
.about-knowus-luxgroup:hover {
  color: #14cf93;
  text-decoration: underline;
}
@media (max-width: 600px) {
  .about-knowus-container {
    max-width: 98vw;
    padding: 0 0.5rem;
  }
  .about-knowus-title {
    font-size: 1.2rem;
  }
  .about-knowus-box {
    font-size: 1rem;
    padding: 1rem 0.7rem;
  }
}
</style>
