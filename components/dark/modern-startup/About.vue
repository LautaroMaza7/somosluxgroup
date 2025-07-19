<template>
  <section id="quienes-somos" class="about-knowus-section">
    <div class="about-knowus-container">
      <h2 class="about-knowus-title">¿Querés vender tu desarrollo más rápido?
      </h2>
      <div class="about-knowus-box">
        En <span class="about-knowus-luxgroup">Lux Group</span> somos más que una <b>aceleradora comercial</b>:<br>
        <b>Somos tu equipo de ventas</b> + <b>tu agencia creativa</b> especializada en <b>desarrollos
          inmobiliarios</b>.<br>
        Combinamos <b>estrategia</b>, <b>contenido poderoso</b>, <b>marketing inteligente</b> y <b>tecnología propia</b>
        para que vendas más, con menos fricción y en menos tiempo.<br>
        <a href="#" class="about-knowus-crm-link"><b>Ver demo de nuestro CRM propio</b></a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, nextTick } from 'vue';

onMounted(async () => {
  await nextTick();

  gsap.from('.about-knowus-title', {
    scrollTrigger: {
      trigger: '.about-knowus-title',
      start: 'top 80%',
    },
    opacity: 0,
    y: 40,
    duration: 0.7,
    ease: 'power2.out',
  });
  gsap.from('.about-knowus-box', {
    scrollTrigger: {
      trigger: '.about-knowus-box',
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
  font-size: clamp(2.2rem, 5vw, 2.7rem);
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
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.10);
  transition: box-shadow 0.2s, transform 0.2s;
  line-height: 1.6;
  text-align: left;
}

.about-knowus-box:hover {
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.18);
  transform: translateY(-2px) scale(1.01);
}

.about-knowus-luxgroup {
  font-style: italic;
  font-weight: 600;
  color: #bdbdbd;
  transition: color 0.2s, text-decoration 0.2s;
  cursor: pointer;
}

.about-knowus-luxgroup:hover {
  color: #bdbdbd;
  text-decoration: underline;
}

.about-knowus-crm-link {
  color: #bdbdbd;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1.5px dashed #bdbdbd;
  transition: color 0.2s, border-bottom 0.2s;
}

.about-knowus-crm-link:hover {
  color: #bdbdbd;
  border-bottom: 2px solid #bdbdbd;
  text-decoration: underline;
}

@media (max-width: 600px) {
  .about-knowus-container {
    max-width: 98vw;
    padding: 0 0.5rem;
  }

  .about-knowus-title {
    font-size: clamp(1.1rem, 7vw, 1.5rem);
  }

  .about-knowus-box {
    font-size: 1rem;
    padding: 1rem 0.7rem;
  }

  .about-knowus-section {
    padding: 1rem 0 1rem 0;
  }
}
</style>
