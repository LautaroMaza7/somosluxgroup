<template>
  <section class="contact-section">
    <div class="contact-grid">
      <div class="contact-left">
        <div class="contact-box">
          <form class="contact-form">
            <div class="contact-row">
              <label class="contact-label">Nombre completo*</label>
              <input type="text" name="name" placeholder="Nombre completo" required class="contact-input" />
            </div>
            <div class="contact-row">
              <label class="contact-label">Email*</label>
              <input type="email" name="email" placeholder="Email" required class="contact-input" />
            </div>
            <div class="contact-row">
              <label class="contact-label">WhatsApp*</label>
              <input type="text" name="phone" placeholder="Telefono" required class="contact-input" />
            </div>
            <div class="contact-row">
              <label class="contact-label">Mensaje*</label>
              <textarea name="message" placeholder="Escribir mensaje..." rows="4" required class="contact-textarea"></textarea>
            </div>
            <button type="submit" class="contact-btn">Enviar mensaje</button>
          </form>
          <div class="contact-info">
            <div class="contact-info-item">
              <span class="contact-info-label">Teléfono:</span>
              <a href="tel:+5491122334455" class="contact-info-link">+54-9 11-2233-4455</a>
            </div>
            <div class="contact-info-item">
              <span class="contact-info-label">Oficina Central:</span>
              <span class="contact-info-text">Buenos Aires, Argentina</span>
            </div>
            <div class="contact-info-item">
              <span class="contact-info-label">Email:</span>
              <a href="mailto:contacto@somosluxgroup.com" class="contact-info-link">contacto@somosluxgroup.com</a>
            </div>
            <div class="contact-socials">
              <a href="#0" class="contact-social"><i class="fab fa-instagram"></i></a>
              <a href="#0" class="contact-social"><i class="fab fa-facebook-f"></i></a>
              <a href="#0" class="contact-social"><i class="fab fa-youtube"></i></a>
              <a href="#0" class="contact-social"><i class="fab fa-tiktok"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-right">
        <div class="contact-highlight">
          <span class="contact-highlight-sub">Si todavía tenes dudas...</span>
          <h2 class="contact-highlight-title">DEJANOS<br />UNA<br />CONSULTA</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
// Asegúrate de tener gsap y ScrollTrigger importados globalmente o aquí si es necesario
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

onMounted(async () => {
  await nextTick();
  gsap.from('.contact-highlight-title', {
    scrollTrigger: {
      trigger: '.contact-highlight-title',
      start: 'top 80%',
    },
    opacity: 0,
    y: 40,
    duration: 0.7,
    ease: 'power2.out',
  });
  gsap.from('.contact-box', {
    scrollTrigger: {
      trigger: '.contact-box',
      start: 'top 85%',
    },
    opacity: 0,
    y: 40,
    duration: 0.7,
    delay: 0.2,
    ease: 'power2.out',
  });
});
</script>

<style scoped>
.contact-section {
  background: #000;
  padding: 7vw 0 7vw 0;
  display: flex;
  justify-content: center;
}
.contact-grid {
  display: flex;
  flex-direction: row;
  gap: 4vw;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: center;
  padding: 0 2vw;
}
.contact-left {
  flex: 1 1 380px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.contact-box {
  background: #232323;
  border-radius: 1.5em;
  box-shadow: 0 4px 24px 0 rgba(80,80,80,0.13);
  padding: 2.2em 1.5em 1.5em 1.5em;
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: stretch;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.1em;
}
.contact-row {
  display: flex;
  flex-direction: column;
  gap: 0.3em;
}
.contact-label {
  color: #fff;
  font-size: 1.08rem;
  font-weight: 700;
  margin-bottom: 0.2em;
  letter-spacing: 0.2px;
}
.contact-input, .contact-textarea {
  background: #181818;
  border: 1.5px solid #444;
  border-radius: 0.9em;
  color: #fff;
  padding: 1em 1.2em;
  font-size: 1.08rem;
  width: 100%;
  margin-bottom: 0;
  transition: box-shadow 0.2s, border 0.2s;
  outline: none;
  resize: none;
}
.contact-input::placeholder, .contact-textarea::placeholder {
  color: #b7b7b7;
  opacity: 1;
  font-style: italic;
}
.contact-btn {
  background: #fff;
  color: #181818;
  border: none;
  border-radius: 0.9em;
  padding: 1.1em 0;
  font-size: 1.13rem;
  font-weight: 700;
  margin-top: 0.7em;
  cursor: pointer;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.10);
  transition: box-shadow 0.2s, transform 0.2s;
  width: 100%;
  text-align: center;
}
.contact-btn:hover, .contact-btn:focus {
  background: #f2f2f2;
  color: #000;
  box-shadow: 0 8px 32px 0 rgba(80,80,80,0.18);
  transform: scale(1.04);
}
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.7em;
  color: #fff;
  font-size: 1.03rem;
  justify-content: flex-start;
  margin-top: 0.5em;
}
.contact-info-item {
  margin-bottom: 0.2em;
}
.contact-info-label {
  font-weight: 700;
  margin-right: 0.5rem;
}
.contact-info-link {
  color: #b7ffdf;
  text-decoration: none;
  transition: color 0.2s, text-decoration 0.2s;
}
.contact-info-link:hover {
  color: #14cf93;
  text-decoration: underline;
}
.contact-info-text {
  color: #fff;
}
.contact-socials {
  display: flex;
  gap: 1.2em;
  margin-top: 1.2em;
  justify-content: flex-start;
}
.contact-social {
  color: #fff;
  font-size: 1.4rem;
  transition: color 0.2s;
}
.contact-social:hover {
  color: #b7ffdf;
}
.contact-right {
  flex: 1 1 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 220px;
  padding-top: 1.5em;
  padding-left: 2vw;
}
.contact-highlight {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7em;
}
.contact-highlight-sub {
  color: #fff;
  font-size: 1.08rem;
  font-style: italic;
  opacity: 0.8;
  margin-bottom: 0.2em;
}
.contact-highlight-title {
  color: #fff;
  font-size: 2.3rem;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-align: left;
}
@media (max-width: 1100px) {
  .contact-grid {
    max-width: 98vw;
    gap: 2vw;
    padding: 0 1vw;
  }
  .contact-right {
    padding-left: 1vw;
  }
}
@media (max-width: 900px) {
  .contact-grid {
    flex-direction: column;
    gap: 2.5em;
    max-width: 99vw;
    align-items: stretch;
    padding: 0 2vw;
  }
  .contact-left, .contact-right {
    align-items: center;
    padding-left: 0;
    padding-top: 0;
    min-width: 0;
  }
  .contact-highlight {
    align-items: center;
    text-align: center;
  }
  .contact-highlight-title {
    font-size: 2rem;
    text-align: center;
  }
  .contact-box {
    max-width: 99vw;
    padding: 2em 0.7em 1.2em 0.7em;
  }
  .contact-socials {
    justify-content: center;
  }
  .contact-left {
    order: 2;
  }
  .contact-right {
    order: 1;
  }
}
@media (max-width: 600px) {
  .contact-section {
    padding: 8vw 0 8vw 0;
  }
  .contact-highlight-title {
    font-size: 1.3rem;
  }
  .contact-box {
    padding: 1rem;
    border-radius: 1em;
    max-width: 99vw;
  }
  .contact-form {
    gap: 0.7em;
  }
  .contact-row {
    gap: 0.7em;
  }
  .contact-info {
    font-size: 0.98rem;
    gap: 0.5em;
  }
  .contact-socials {
    gap: 1em;
    margin-top: 1em;
  }
  .contact-right{
    flex: 1;
  }
}
</style>
