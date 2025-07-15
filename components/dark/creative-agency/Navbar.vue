<template>
  <nav class="navbar navbar-expand-lg bord blur">
    <div class="container">
      <a class="logo icon-img-100" href="#">
        <img src="/dark/assets/imgs/lux_white.png" alt="logo" class="logo-img-responsive" />
      </a>

      <div class="topnav">
        <div @click="toggleMenu" class="menu-icon cursor-pointer">
          <span class="icon ti-align-right"></span>
        </div>
      </div>
    </div>
  </nav>

  <div :class="`hamenu ${isOpen && 'open'}`">
    <div class="logo icon-img-100">
      <img src="/dark/assets/imgs/lux_white.png" alt="logo" class="logo-img-responsive" />
    </div>
    <div @click="closeMenu" class="close-menu cursor-pointer ti-close"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-2">
          <div class="menu-text">
            <div class="text">
              <h2>Menú</h2>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="menu-links">
            <ul class="main-menu rest">
              <li @click="handleMenuLinkClick('#quienes-somos')" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a href="#quienes-somos" class="link">
                    <span class="fill-text" data-text="Quiénes Somos">
                      Quiénes Somos
                    </span>
                  </a>
                </div>
              </li>
              <li @click="handleMenuLinkClick('#servicios')" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a href="#servicios" class="link">
                    <span class="fill-text" data-text="Servicios">
                      Servicios
                    </span>
                  </a>
                </div>
              </li>
              <li @click="handleMenuLinkClick('#proyectos')" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a href="#proyectos" class="link">
                    <span class="fill-text" data-text="Proyectos">
                      Proyectos
                    </span>
                  </a>
                </div>
              </li>
              <li @click="handleMenuLinkClick('#mision')" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a href="#mision" class="link">
                    <span class="fill-text" data-text="Misión">
                      Misión
                    </span>
                  </a>
                </div>
              </li>
              <li @click="handleMenuLinkClick('#contacto')" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a href="#contacto" class="link">
                    <span class="fill-text" data-text="Contacto">
                      Contacto
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="cont-info">
            <div class="item mb-50">
              <h6 class="sub-title mb-15 opacity-7">Oficina Central</h6>
              <h5>
                Buenos Aires, Argentina
              </h5>
            </div>
            <div class="item mb-50">
              <h6 class="sub-title mb-15 opacity-7">Redes Sociales</h6>
              <ul class="rest social-text">
                <li class="mb-10">
                  <a href="#0" class="hover-this">
                    <span class="hover-anim">Instagram</span>
                  </a>
                </li>
                <li class="mb-10">
                  <a href="#0" class="hover-this">
                    <span class="hover-anim">Facebook</span>
                  </a>
                </li>
                <li class="mb-10">
                  <a href="#0" class="hover-this">
                    <span class="hover-anim">YouTube</span>
                  </a>
                </li>
                <li>
                  <a href="#0" class="hover-this">
                    <span class="hover-anim">TikTok</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="item mb-40">
              <h6 class="sub-title mb-15 opacity-7">Contacto</h6>
              <h5>
                <a href="mailto:contacto@somosluxgroup.com">contacto@somosluxgroup.com</a>
              </h5>
              <h5 class="underline mt-10">
                <a href="tel:+5491122334455">+54-9 11-2233-4455</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue';
import { ref } from 'vue';

function handleScroll() {
  const bodyScroll = window.scrollY;
  const navbar = document.querySelector('.navbar');

  if (bodyScroll > 300) navbar.classList.add('nav-scroll');
  else navbar.classList.remove('nav-scroll');
}

function handleDropdownMouseMove(event) {
  event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
}

function handleDropdownMouseLeave(event) {
  event.currentTarget.querySelector('.dropdown-menu').classList.remove('show');
}

function handleDropdownSideMouseMove(event) {
  event.currentTarget.querySelector('.dropdown-side').classList.add('show');
}

function handleDropdownSideMouseLeave(event) {
  event.currentTarget.querySelector('.dropdown-side').classList.remove('show');
}

function toggleSearch() {
  let form = document.querySelector('.navbar .search-form');
  let closeBtn = document.querySelector('.search-form .close-search');

  form.classList.toggle('open');
  if (form.classList.contains('open')) closeBtn.style.display = 'block';
  else closeBtn.style.display = 'none';
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const isOpen = ref(false);
function toggleMenu() {
  const hamenu = document.querySelector('.hamenu');
  isOpen.value = !isOpen.value;
  setTimeout(() => {
    isOpen.value == false
      ? (hamenu.style.left = '-100%')
      : (hamenu.style.left = '0');
  }, 300);
}

function closeMenu() {
  const hamenu = document.querySelector('.hamenu');

  isOpen.value = false;
  setTimeout(() => {
    hamenu.style.left = '-100%';
  }, 300);
}

function handleMouseEnter(event) {
  document.querySelectorAll('ul.main-menu li').forEach((item) => {
    item.classList.add('hoverd');
  });
  event.currentTarget.classList.remove('hoverd');
}

function handleMouseLeave() {
  document
    .querySelectorAll('ul.main-menu li')
    .forEach((item) => item.classList.remove('hoverd'));
}
function toggleSubMenu(event) {
  const subMenu = event.currentTarget.querySelector('.sub-menu');
  const SubMenu2 = event.currentTarget.querySelector('.sub-menu2');
  if (subMenu) {
    if (subMenu.classList.contains('sub-open') && SubMenu2 == null) {
      document.querySelectorAll('.sub-menu').forEach((item) => {
        item.classList.remove('sub-open');
        item.style.maxHeight = '0';
        item.previousElementSibling.children[0].classList.remove('dopen');
      });
      subMenu.classList.remove('sub-open');
      subMenu.style.maxHeight = '0';
      subMenu.previousElementSibling.children[0].classList.remove('dopen');
    } else if (!subMenu.classList.contains('sub-open')) {
      if (SubMenu2 == null) {
        document.querySelectorAll('.sub-menu').forEach((item) => {
          item.classList.remove('sub-open');
          item.style.maxHeight = '0';
          item.previousElementSibling.children[0].classList.remove('dopen');
        });

        subMenu.classList.add('sub-open');
        subMenu.style.maxHeight = '450px';
        subMenu.previousElementSibling.children[0].classList.add('dopen');
      } else {
        subMenu.classList.add('sub-open');
        subMenu.style.maxHeight = '450px';
        subMenu.previousElementSibling.children[0].classList.add('dopen');
      }
    }
  }
}
function toggleSubMenu2(event) {
  const SubMenu2 = event.currentTarget.querySelector('.sub-menu2');
  if (SubMenu2) {
    if (SubMenu2.classList.contains('sub-open')) {
      event.currentTarget.querySelectorAll('.sub-menu2').forEach((item) => {
        item.classList.remove('sub-open');
        item.style.maxHeight = '0';
        item.previousElementSibling.children[0].classList.remove('dopen');
      });
      SubMenu2.classList.remove('sub-open');
      SubMenu2.style.maxHeight = '0';
      SubMenu2.previousElementSibling.children[0].classList.remove('dopen');
    } else if (!SubMenu2.classList.contains('sub-open')) {
      event.currentTarget.querySelectorAll('.sub-menu2').forEach((item) => {
        item.classList.remove('sub-open');
        item.style.maxHeight = '0';
        item.previousElementSibling.children[0].classList.remove('dopen');
      });
      SubMenu2.classList.add('sub-open');
      SubMenu2.style.maxHeight = '450px';
      SubMenu2.previousElementSibling.children[0].classList.add('dopen');
    }
  }
}

function handleMenuLinkClick(hash) {
  // Navega a la sección y cierra el menú hamburguesa si está abierto
  const hamenu = document.querySelector('.hamenu');
  isOpen.value = false;
  setTimeout(() => {
    hamenu.style.left = '-100%';
    // Navegación suave a la sección
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = hash;
    }
  }, 300);
}
</script>

<style scoped>
.logo-img-responsive {
  max-width: 120px;
  width: 100%;
  height: auto;
  display: block;
}
@media (max-width: 900px) {
  .logo-img-responsive {
    max-width: 90px;
  }
}
@media (max-width: 600px) {
  .logo-img-responsive {
    max-width: 60px;
  }
}
</style>
