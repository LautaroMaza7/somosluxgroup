<template>
  <section id="contacto" class="contact section-padding" data-scroll-index="6">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 valign">
          <div class="sec-head info-box full-width md-mb80">
            <div class="phone fz-30 fw-600 underline main-color">
              <a href="tel:+5491122334455">+54-9 11-2233-4455</a>
            </div>
            <div class="morinfo mt-50 pb-30 bord-thin-bottom">
              <h6 class="mb-15">Oficina Central</h6>
              <p>Buenos Aires, Argentina</p>
            </div>
            <div class="morinfo mt-30 pb-30 bord-thin-bottom">
              <h6 class="mb-15">Email</h6>
              <p>contacto@somosluxgroup.com</p>
            </div>
            <div class="social-icon-circle mt-50">
              <a href="#0">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#0">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#0">
                <i class="fab fa-youtube"></i>
              </a>
              <a href="#0">
                <i class="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-7 offset-lg-1 valign">
          <div class="full-width">
            <div class="sec-head mb-50">
              <h6 class="sub-title main-color mb-15 fz-18" style="letter-spacing:3px;">
                <span style="font-style:italic; font-weight:600;">CONTACTO SOMOSLUXGROUP</span>
              </h6>
              <h3 class="fz-40 fw-900 mb-10" style="line-height:1.1; letter-spacing:-1px;">
                ¿Listo para potenciar tu desarrollo inmobiliario?
              </h3>
              <h5 class="fw-400" style="color:#b7b7b7; max-width:500px;">
                Completa el formulario y nuestro equipo se pondrá en contacto contigo para brindarte asesoría personalizada y acompañarte en cada etapa de tu proyecto.
              </h5>
            </div>
            <form
              id="contact-form"
              class="form2"
              method="post"
              action="contact.php"
            >
              <div class="messages"></div>
              <div class="controls row">
                <div class="col-lg-6">
                  <div class="form-group mb-30">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      required
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group mb-30">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group mb-30">
                    <input
                      id="form_subject"
                      type="text"
                      name="subject"
                      placeholder="Asunto"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Mensaje"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div class="mt-30">
                    <button
                      type="submit"
                      class="butn butn-full butn-bord radius-30"
                    >
                      <span class="text">Enviar mensaje</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
