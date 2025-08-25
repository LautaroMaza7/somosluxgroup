<template>
  <div class="service-card" @click="$emit('open', item)">
    <div class="img-container">
      <img :src="item.img" :alt="item.title" class="service-img" />
      <div class="service-overlay">
        <div class="overlay-content">
          <span class="service-type">{{ item.type === 'gif' ? 'GIF' : 'IMAGEN' }}</span>
        </div>
      </div>
    </div>
    <div class="service-info">
      <span class="service-category">{{ item.subTitle }}</span>
      <h6 class="service-title">{{ item.title }}</h6>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
});

defineEmits(['open']);
</script>

<style scoped>
.service-card {
  display: block;
  position: relative;
  cursor: pointer;
  overflow: visible;
  text-decoration: none;
  transition: transform 0.4s cubic-bezier(.4,2,.3,1);
}

.service-card:hover {
  transform: translateY(-8px);
}

.img-container {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
  border-radius: 1.2em;
  transition: box-shadow 0.4s cubic-bezier(.4,2,.3,1);
}

.service-card:hover .img-container {
  box-shadow: 0 12px 32px 0 rgba(20, 207, 147, 0.25);
}

.service-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(.4,2,.3,1);
}

.service-card:hover .service-img {
  transform: scale(1.05);
}

.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(20, 207, 147, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-card:hover .service-overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
  color: #fff;
}

.service-type {
  background: rgba(20, 207, 147, 0.9);
  color: #000;
  padding: 0.5em 1em;
  border-radius: 2em;
  font-size: 0.8em;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.service-info {
  margin-top: 1.2vw;
  color: #fff;
  text-align: left;
}

.service-category {
  font-size: clamp(0.8rem, 1.8vw, 0.9rem);
  color: #14cf93;
  letter-spacing: 1px;
  font-weight: 500;
  display: block;
  margin-bottom: 0.5em;
}

.service-title {
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  font-weight: 600;
  margin: 0;
  color: #fff;
  letter-spacing: 0.5px;
  line-height: 1.3;
}

@media (max-width: 900px) {
  .service-info {
    margin-top: 1.5vw;
  }
  
  .service-category {
    font-size: 0.8rem;
  }
  
  .service-title {
    font-size: 0.9rem;
  }
}

@media (max-width: 600px) {
  .service-info {
    margin-top: 2vw;
  }
  
  .service-category {
    font-size: 0.75rem;
  }
  
  .service-title {
    font-size: 0.85rem;
  }
}
</style>
