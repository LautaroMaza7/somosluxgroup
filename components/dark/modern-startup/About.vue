<template>
  <section class="about-knowus-section">
    <div class="about-knowus-container">
      <h2 class="about-knowus-title" ref="titleRef">NOS CONOCEN POR..</h2>
      <div class="about-knowus-box" ref="boxRef">
        Ser la primer agencia <b>100% especializada</b> en desarrollos inmobiliarios. En
        <span class="about-knowus-luxgroup" ref="luxgroupRef">Lux group</span>
        combinamos lo mejor de dos mundos: <b>Creatividad</b>, <b>estrategia</b> + un equipo comercial especializado.
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, nextTick, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const titleRef = ref(null)
const boxRef = ref(null)
const luxgroupRef = ref(null)

onMounted(async () => {
  await nextTick();
  gsap.from(titleRef.value, {
    scrollTrigger: {
      trigger: titleRef.value,
      start: 'top 80%',
    },
    opacity: 0,
    y: 40,
    duration: 0.7,
    ease: 'power2.out',
  });
  gsap.from(boxRef.value, {
    scrollTrigger: {
      trigger: boxRef.value,
      start: 'top 85%',
    },
    opacity: 0,
    y: 40,
    duration: 0.6,
    delay: 0.2,
    ease: 'power2.out',
  });
  gsap.from(luxgroupRef.value, {
    scrollTrigger: {
      trigger: luxgroupRef.value,
      start: 'top 90%',
    },
    opacity: 0,
    y: 40,
    duration: 0.5,
    delay: 0.4,
    ease: 'power2.out',
  });
});
</script>

<style scoped>
.about-knowus-section {
  background: #000;
  padding: 6vw 0 4vw 0;
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
  gap: 2.5rem;
  padding: 0 2vw;
}
.about-knowus-title {
  color: #fff;
  font-size: clamp(1.3rem, 4vw, 2.2rem);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  text-align: left;
  line-height: 1.1;
}
.about-knowus-box {
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
@media (max-width: 900px) {
  .about-knowus-container {
    max-width: 98vw;
    padding: 0 3vw;
  }
  .about-knowus-title {
    font-size: clamp(1.1rem, 5vw, 1.5rem);
  }
  .about-knowus-box {
    font-size: clamp(0.98rem, 3vw, 1.05rem);
    padding: 1.1em 1em;
  }
}
@media (max-width: 600px) {
  .about-knowus-section {
    padding: 8vw 0 5vw 0;
  }
  .about-knowus-container {
    padding: 0 2vw;
    gap: 1.2rem;
  }
  .about-knowus-title {
    font-size: 1.1rem;
  }
  .about-knowus-box {
    font-size: 0.98rem;
    padding: 0.9em 0.7em;
  }
}
</style>

