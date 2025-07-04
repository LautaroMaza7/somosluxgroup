<template>
  <section class="blog-list-half section-padding sub-bg">
    <div class="container">
      <div class="sec-head mb-80">
        <h2 class="fz-60 fw-900 mb-10" style="line-height:1.1; letter-spacing:-2px;">
          SI TODAVÍA NO TE CONVENCIMOS...
        </h2>
        <div class="d-flex align-items-center">
          <h4 class="fw-400" style="font-size:2rem; color:#fff; margin:0;">
            Nuestra <span style="font-style:italic;">información</span> y nuestros <span style="font-style:italic;">proyectos</span>
          </h4>
          <div class="ml-auto">
            <a href="https://www.youtube.com/@somosluxgroup" target="_blank" rel="noopener" class="go-more">
              <span class="text">Ver todos</span>
              <span class="icon ti-arrow-top-right"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="item main-bg md-mb50 curso-card">
            <a href="https://www.youtube.com/watch?v=CURSO1" target="_blank" rel="noopener" class="curso-img-link">
              <img
                src="/dark/assets/imgs/blog/b/2.jpg"
                alt="Mentoría 01"
                class="img-post curso-img"
              />
            </a>
            <div class="curso-info">
              <h3 class="curso-titulo">Mentoría 01</h3>
              <p class="curso-subtitulo">Información de valor para vos</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="item main-bg curso-card">
            <a href="https://www.youtube.com/watch?v=CURSO2" target="_blank" rel="noopener" class="curso-img-link">
              <img
                src="/dark/assets/imgs/blog/b/3.jpg"
                alt="Lo que hacemos"
                class="img-post curso-img"
              />
            </a>
            <div class="curso-info">
              <h3 class="curso-titulo">Lo que hacemos</h3>
              <p class="curso-subtitulo">Proyectos completos</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="item main-bg curso-card">
            <a href="#" class="curso-img-link">
              <img
                src="/dark/assets/imgs/blog/b/2.jpg"
                alt="Próximamente"
                class="img-post curso-img"
              />
            </a>
            <div class="curso-info">
              <h3 class="curso-titulo">Próximamente</h3>
              <p class="curso-subtitulo">Nuevo curso en camino</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.curso-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  box-shadow: none;
  border-radius: 20px;
  padding-bottom: 0;
  max-width: 340px;
  margin-left: auto;
  margin-right: auto;
}
.curso-img-link {
  width: 100%;
  display: block;
  border-radius: 16px;
  overflow: hidden;
}
.curso-img {
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  aspect-ratio: 16/9;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
}
.curso-info {
  background: #181818;
  border-radius: 10px;
  margin-top: 12px;
  padding: 8px 14px 6px 14px;
  text-align: center;
  width: 95%;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
}
.curso-titulo {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 2px 0;
}
.curso-subtitulo {
  color: #ccc;
  font-size: 0.95rem;
  font-weight: 400;
  margin: 0;
}
@media (max-width: 991px) {
  .curso-card { margin-bottom: 24px; max-width: 100%; }
  .curso-info { width: 100%; }
}
</style>
