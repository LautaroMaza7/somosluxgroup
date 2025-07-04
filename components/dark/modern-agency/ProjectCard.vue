<template>
  <div class="project-card" @click="openProject" ref="card">
    <div class="img-container">
      <img
        :src="item.img"
        class="project-img main"
        :class="{ hovered: isHovered }"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      />
      <div class="img-blur" :class="{ active: isHovered }"></div>
      <div class="img-overlay"></div>
    </div>
    <div class="project-info">
      <span>{{ item.title }}</span>
      <h6>{{ item.subTitle }}</h6>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({ item: Object })
const emit = defineEmits(['open'])
const isHovered = ref(false)
const card = ref(null)

function openProject() {
  emit('open', props.item)
}
</script>

<style scoped>
.project-card {
  display: block;
  position: relative;
  cursor: pointer;
  overflow: visible;
  text-decoration: none;
  transition: box-shadow 0.4s cubic-bezier(.4,2,.3,1);
}
.img-container {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.18);
  background: #23232b;
}
.project-img.main {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
  z-index: 1;
  position: relative;
  transition:
    filter 0.5s cubic-bezier(.4,2,.3,1),
    box-shadow 0.5s cubic-bezier(.4,2,.3,1),
    transform 0.6s cubic-bezier(.4,2,.3,1);
}
.project-img.main.hovered {
  filter: blur(2.5px) brightness(1.08) saturate(1.1);
  transform: scale(1.06) translateY(-2px);
  box-shadow: 0 12px 48px 0 rgba(0,0,0,0.28);
  transition: filter 0.5s, transform 0.5s, box-shadow 0.5s;
}
.img-blur {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s;
  border-radius: 18px;
  background: transparent;
}
.img-blur.active {
  opacity: 1;
  background: rgba(40,40,50,0.08);
  backdrop-filter: blur(6px) saturate(1.2);
}
.img-overlay {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  opacity: 0;
  border-radius: 18px;
  background: linear-gradient(120deg,rgba(24,24,27,0.08) 0%,rgba(24,24,27,0.22) 100%);
  transition: opacity 0.5s;
}
.img-overlay.active {
  opacity: 0.35;
  background: linear-gradient(120deg,rgba(24,24,27,0.18) 0%,rgba(24,24,27,0.32) 100%);
}
.project-info {
  margin-top: 18px;
  color: #fff;
  text-align: left;
}
.project-info span {
  font-size: 0.95rem;
  color: #a3a3a3;
  letter-spacing: 1px;
}
.project-info h6 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  color: #fff;
  letter-spacing: 1px;
}
</style> 