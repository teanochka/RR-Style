<template>
    <Header
      :isMenuVisible="isMenuVisible"
      :isSticky="isSticky"
      @toggleMenu="handleToggleMenu"
      @navbarHeight="handleNavbarHeight"
    />
    <slot />
    <Footer />
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  import Header from '~/assets/components/header.vue';
  import Footer from '~/assets/components/footer.vue';
  
  const props = defineProps({
    isMenuVisible: Boolean,
    isSticky: Boolean,
  });
  
  const emit = defineEmits(['toggleMenu', 'navbarHeight']);
  
  function handleToggleMenu() {
    emit('toggleMenu');
  }
  
  function handleNavbarHeight(height: number) {
    emit('navbarHeight', height);
  }
  </script>
  