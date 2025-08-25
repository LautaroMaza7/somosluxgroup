<template>
  <header class="slider slider-prlx header-hero">
    <div class="container text-center header-content">
      <h1 class="header-title">ACELERADORA COMERCIAL DE
        DESARROLLOS INMOBILIARIOS</h1>
      <p class="header-subtitle">Redefinimos la forma de
        comercializar</p>
      <button
        class="diagnostico-btn"
        aria-label="Agendar reunión de diagnóstico"
      >
        <div class="btn-text">
          Agenda una reunión de diagnóstico
          <span class="sin-costo">sin costo</span>
        </div>
      </button>
    </div>
    <div class="video-banner-responsive">
      <iframe
        class="video-iframe"
        src="https://www.youtube.com/embed/KktbY0xxKoI?si=X_dz5ChEUscjr9Fs&autoplay=1&mute=0"
        title="Video banner de la propuesta"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    </div>
  </header>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'

onMounted(async () => {
  await nextTick();
  gsap.from('.header-title', {
    scrollTrigger: {
      trigger: '.header-title',
      start: 'top 80%',
    },
    opacity: 0,
    y: 40,
    duration: 0.7,
    ease: 'power2.out',
  });
  gsap.from('.header-subtitle', {
    scrollTrigger: {
      trigger: '.header-subtitle',
      start: 'top 85%',
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    delay: 0.2,
    ease: 'power2.out',
  });
  gsap.from('.diagnostico-btn', {
    scrollTrigger: {
      trigger: '.diagnostico-btn',
      start: 'top 90%',
    },
    opacity: 0,
    y: 20,
    duration: 0.5,
    delay: 0.3,
    ease: 'power2.out',
  });
  gsap.from('.video-banner-responsive', {
    scrollTrigger: {
      trigger: '.video-banner-responsive',
      start: 'top 92%',
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay: 0.4,
    ease: 'power2.out',
  });
});
</script>

<style scoped>
.header-hero {
  background: #000;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10vw;
  padding-bottom: 3vw;
  box-sizing: border-box;
}
.header-content {
  margin-bottom: 3vw;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.2em;
}
.header-title {
  font-weight: 800;
  text-transform: uppercase;
  color: #fff;
  font-size: clamp(2.2rem, 5vw, 2.7rem);
  margin-bottom: -0.3em;
  letter-spacing: 0.5px;
  line-height: 1.1;
}
.header-subtitle {
  color: #e0e0e0;
  font-size: clamp(1.05rem, 3vw, 1.25rem);
  margin-bottom: 1.7em;
  font-weight: 400;
  line-height: 1.4;
}
.diagnostico-btn {
  background: linear-gradient(90deg, #232526 0%, #414345 100%);
  color: #fff;
  border: none;
  border-radius: 1.5em;
  padding: 1em 2.2em;
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 18px 0 rgba(0,0,0,0.18);
  transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
  outline: none;
  margin-bottom: 0.7em;
  max-width: 500px;
  width: 100%;
}

.btn-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 1.2;
}

.sin-costo {
  font-size: 0.9em;
  font-style: italic;
  color: #bdbdbd;
  margin-top: 0.3em;
  font-weight: 400;
}

.diagnostico-btn:hover, .diagnostico-btn:focus {
  background: linear-gradient(90deg, #414345 0%, #232526 100%);
  box-shadow: 0 6px 24px 0 rgba(0,0,0,0.22);
  transform: translateY(-2px) scale(1.03);
}
.video-banner-responsive {
  background: #232323;
  border-radius: 1.2em;
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.28);
  width: 100%;
  max-width: 900px;
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  transition: border-radius 0.2s, box-shadow 0.2s;
}
.video-iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
@media (max-width: 900px) {
  .header-hero {
    min-height: 70vh;
    padding-top: 10vw;
    padding-bottom: 4vw;
  }
  .header-content {
    max-width: 98vw;
    padding: 0 3vw;
    gap: 1.1em;
  }
  .header-subtitle {
    font-size: clamp(1rem, 4vw, 1.1rem);
    margin-bottom: 0.7em;
  }
  .video-banner-responsive {
    max-width: 100vw;
    border-radius: 1.2em;
    margin-top: 1.2em;
  }
}
@media (max-width: 700px) {
  .header-hero {
    min-height: 60vh;
    padding-top: 12vw;
    padding-bottom: 6vw;
  }
  .header-content {
    padding: 0 4vw;
    gap: 1em;
  }
  .header-subtitle {
    font-size: 0.98rem;
    margin-bottom: 1.2em;
  }
  .diagnostico-btn {
    padding: 0.9em 1.2em;
    font-size: 1rem;
    margin-bottom: 1.2em;
    max-width: 100%;
  }
  .video-banner-responsive {
    border-radius: 1em;
    aspect-ratio: 16/9;
    min-height: 160px;
    margin-top: 1.2em;
  }
}
@media (max-width: 500px) {
  .header-hero {
    min-height: 50vh;
    padding-top: 25vw;
    padding-bottom: 8vw;
  }
  .header-content {
    padding: 0 2vw;
    gap: 0.7em;
  }
  .header-subtitle {
    font-size: 0.92rem;
    margin-bottom: 1em;
  }
  .diagnostico-btn {
    padding: 0.7em 0.7em;
    font-size: 0.93rem;
    margin-bottom: 1em;
    max-width: 100%;
  }
  .video-banner-responsive {
    border-radius: 0.7em;
    min-height: 110px;
    margin-top: 0.7em;
    max-width: 93vw;
  }
  @media (max-width: 600px) {
    .header-title {
      font-size: clamp(1.1rem, 7vw, 1.5rem);
    }
  }
}
</style>
