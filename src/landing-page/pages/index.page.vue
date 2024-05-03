<script>
export default {
  name: 'v-landing-page'
}
</script>

<script setup>
import VHeader from '../modules/header.module.vue'
import VHero from '../modules/hero.module.vue'
import VProduct from '../modules/product.module.vue'
import VFeatures from '../modules/features.module.vue'
</script>
<template>
  <v-header />
  <main>
    <v-hero />
    <v-product />
    <v-features />
  </main>
</template>

<style>
:root {
  --color-primary-100: #d8dce1;
  --color-primary-200: #bec4cc;
  --color-primary-300: #7d899a;
  --color-primary-400: #5d6c80;
  --color-primary-500: #3c4e67;
  --color-primary-600: #324156;
  --color-primary-700: #283445;
  --color-primary-800: #1e2733;
  --color-primary-900: #141a22;

  --color-secondary-100: #fce2d9;
  --color-secondary-200: #ffc7b5;
  --color-secondary-300: #f49d81;
  --color-secondary-400: #f28461;
  --color-secondary-500: #ef6c42;
  --color-secondary-600: #c75a37;
  --color-secondary-700: #9f482c;
  --color-secondary-800: #773621;
  --color-secondary-900: #502416;

  --color-title: #212529;
  --color-text: #495057;
  --color-white: #fff;
}
.heading-1,
.heading-2,
.heading-3,
.subtitle-1,
.subtitle-2 {
  font-family:
    'Rubik',
    system-ui,
    -apple-system,
    sans-serif;
}

.font-rubik {
  font-family:
    'Rubik',
    system-ui,
    -apple-system,
    sans-serif;
}
.font-mulish {
  font-family:
    'Mulish',
    system-ui,
    -apple-system,
    sans-serif;
}

.heading-1 {
  font-weight: 700;
  font-size: 64px;
  line-height: 72px;
}
.heading-2 {
  font-weight: 700;
  font-size: 48px;
  line-height: 64px;
}
.heading-3 {
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
}
.subtitle-1 {
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
}
.subtitle-2 {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
}
.body-1 {
  font-size: 18px;
  line-height: 28px;
}
.body-2 {
  font-size: 16px;
  line-height: 24px;
}

.section {
  padding: 64px 32px;
}
.container {
  max-width: 1200px;
  margin-inline: auto;
}
</style>
