<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <Navbar />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="main-bg">
        <Header />
        <About />
        <Challenge />
        <Services/>
        <Portfolio />
        <Solution />
        <Next />
        <Marquee />
        <Brands />
        <ServicesTab />
        <ImageScale />
        <Blog />
        <Contact />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  </div>
</template>
<script setup>
import Lines from '@/components/dark/common/Lines';
import ImageScale from '@/components/dark/creative-agency/ImageScale';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Cursor from '@/components/dark/common/cusor';
import LoadingScreen from '@/components/dark/common/loader';
import Navbar from '@/components/dark/creative-agency/Navbar';
import About from '@/components/dark/modern-startup/About';
import Challenge from '@/components/dark/project1/Challenge';
import Solution from '@/components/dark/project1/Solution';
import Next from '@/components/dark/project1/Next';
import Blog from '@/components/dark/modern-agency/Blog';
import Brands from '@/components/dark/modern-agency/Brands';
import Contact from '@/components/dark/modern-startup/Contact';
import Footer from '@/components/dark/modern-startup/Footer';
import Header from '@/components/dark/modern-agency/Header';
import Marquee from '@/components/dark/modern-agency/Marquee';
import Portfolio from '@/components/dark/modern-agency/Portfolio';
import Services from '@/components/dark/home-main/Services2';
import ServicesTab from '@/components/dark/modern-agency/ServicesTab';
import { onMounted } from 'vue';

useHead({
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
  // script: [{ src: '/dark/assets/js/smoother-script.js', defer: true }],
});
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollTrigger.normalizeScroll(true);
  ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });
});
</script>
