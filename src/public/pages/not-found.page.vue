<script>
export default {
  name: '404-page'
}
</script>

<script setup>
import VBaseLayout from '../layout/base.layout.vue'
import BgIllustration from '@/assets/svg/bg-illustration.svg?component'
</script>

<template>
  <v-base-layout>
    <section class="not-found-section">
      <div class="not-found-img">
        <bg-illustration viewBox="0 0 547 463" class="bg-illustration" />
        <i class="pi pi-ban not-found-icon" />
      </div>
      <h1 class="not-found-title">Ups, page not found</h1>
      <p class="not-found-description">
        Error 404: Sorry, the page you are looking for could not be found.
      </p>
    </section>
  </v-base-layout>
</template>

<style scoped>
.not-found-section {
  margin-top: -48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.not-found-title {
  font-size: 32px;
  text-align: center;
  font-weight: 700;
  margin-block: 0 12px;
}
.not-found-description {
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  margin: 0;
}
.not-found-img {
  width: 240px;
  position: relative;
  margin-bottom: 32px;
}
.bg-illustration {
  width: 100%;
  height: fit-content;
}
.not-found-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 96px;
  font-weight: 700;
  color: #3c4e67;
}
@media screen and (max-width: 1080px) {
  .not-found-img {
    width: 160px;
    position: relative;
    margin-bottom: 32px;
  }
  .not-found-icon {
    font-size: 64px;
  }
  .not-found-title {
    font-size: 24px;
  }
  .not-found-description {
    font-size: 14px;
  }
}
</style>
