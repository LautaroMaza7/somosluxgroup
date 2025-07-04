<template>
  <section id="mision" class="services-tab section-padding mb-80">
    <div class="container">
      <div class="row lg-marg" id="tabs">
        <div class="col-lg-6 valign">
          <div class="serv-tab-cont md-mb80">
            <div class="tab-content current" id="tabs-1">
              <div class="item">
                <div class="img">
                  <img src="/dark/assets/imgs/intro/03.jpg" alt="" />
                </div>
                <div class="cont sub-bg">
                  <div class="icon-img-60 mb-40">
                    <img src="/dark/assets/imgs/serv-icons/0.png" alt="" />
                  </div>
                  <div class="text">
                    <p>
                      Somos una agencia de desarrollos inmobiliarios que impulsa la transformación de espacios en experiencias de vida y valor. Combinamos estrategia, creatividad y tecnología para acompañar a nuestros clientes en cada etapa del proceso, desde la conceptualización hasta la comercialización.
                    </p>
                  </div>
                  <a href="https://instagram.com/somosluxgroup" target="_blank" rel="noopener" class="mt-30">
                    <span class="mr-15">Descubre más</span>
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="tab-content" id="tabs-2">
              <div class="item">
                <div class="img">
                  <img src="/dark/assets/imgs/intro/02.jpg" alt="" />
                </div>
                <div class="cont sub-bg">
                  <div class="icon-img-60 mb-40">
                    <img src="/dark/assets/imgs/serv-icons/1.png" alt="" />
                  </div>
                  <div class="text">
                    <p>
                      Nuestra misión es potenciar el valor de cada desarrollo, generando impacto positivo en las comunidades y el entorno. Nos enfocamos en la excelencia, la innovación y la transparencia para construir relaciones de confianza y resultados sostenibles.
                    </p>
                  </div>
                  <a href="https://instagram.com/somosluxgroup" target="_blank" rel="noopener" class="mt-30">
                    <span class="mr-15">Descubre más</span>
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="tab-content" id="tabs-3">
              <div class="item">
                <div class="img">
                  <img src="/dark/assets/imgs/intro/03.jpg" alt="" />
                </div>
                <div class="cont sub-bg">
                  <div class="icon-img-60 mb-40">
                    <img src="/dark/assets/imgs/serv-icons/2.png" alt="" />
                  </div>
                  <div class="text">
                    <p>
                      Nuestra visión es liderar la evolución del sector inmobiliario, creando desarrollos que trascienden el tiempo y las tendencias. Apostamos por la innovación, la sustentabilidad y el diseño inteligente para anticipar las necesidades del futuro.
                    </p>
                  </div>
                  <a href="https://instagram.com/somosluxgroup" target="_blank" rel="noopener" class="mt-30">
                    <span class="mr-15">Descubre más</span>
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="tab-content" id="tabs-4">
              <div class="item">
                <div class="img">
                  <img src="/dark/assets/imgs/intro/03.jpg" alt="" />
                </div>
                <div class="cont sub-bg">
                  <div class="icon-img-60 mb-40">
                    <img src="/dark/assets/imgs/serv-icons/0.png" alt="" />
                  </div>
                  <div class="text">
                    <p>
                      Nos enorgullece haber acompañado a nuestros clientes en el desarrollo de espacios que hoy son referentes en el mercado. Cada logro es el resultado de un trabajo colaborativo, pasión por el detalle y compromiso con la calidad.
                    </p>
                  </div>
                  <a href="https://instagram.com/somosluxgroup" target="_blank" rel="noopener" class="mt-30">
                    <span class="mr-15">Descubre más</span>
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 valign">
          <div class="serv-tab-link tab-links full-width pt-40">
            <div class="sec-head mb-30">
              <h6 class="sub-title main-color mb-15 fz-18" style="letter-spacing:3px;">
                <span style="font-style:italic; font-weight:600;">NUESTRA MISIÓN</span>
              </h6>
              <h2>Impulsando el desarrollo inmobiliario con visión y propósito.</h2>
            </div>
            <div class="row justify-content-end">
              <div class="col-lg-11">
                <div class="text mb-50">
                  <p>
                    En somosluxgroup creemos en el poder de la transformación. Nuestra experiencia y pasión nos permiten acompañar a nuestros clientes en el camino hacia el éxito inmobiliario, generando valor y construyendo futuro.
                  </p>
                </div>
                <ul class="rest">
                  <li
                    @click="openTab"
                    class="item-link current mb-15"
                    data-tab="tabs-1"
                  >
                    <h3>
                      <span class="fz-18 opacity-7 mr-15">01</span> Nuestra Esencia
                    </h3>
                  </li>
                  <li
                    @click="openTab"
                    class="item-link mb-15"
                    data-tab="tabs-2"
                  >
                    <h3>
                      <span class="fz-18 opacity-7 mr-15">02</span> Misión
                    </h3>
                  </li>
                  <li
                    @click="openTab"
                    class="item-link mb-15"
                    data-tab="tabs-3"
                  >
                    <h3>
                      <span class="fz-18 opacity-7 mr-15">03</span> Visión
                    </h3>
                  </li>
                  <li @click="openTab" class="item-link" data-tab="tabs-4">
                    <h3>
                      <span class="fz-18 opacity-7 mr-15">04</span>
                      Logros
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const openTab = (event) => {
  document
    .querySelectorAll('.tab-content')
    .forEach((element) => (element.style.display = 'none'));
  const tabid = event.currentTarget.getAttribute('data-tab');
  document.querySelector(`.tab-content#${tabid}`).style.display = 'block';
};
</script>
