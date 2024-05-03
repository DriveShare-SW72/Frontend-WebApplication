<script>
export default {
  name: 'v-hero'
}
</script>

<script setup>
import VButton from '../components/button.component.vue'
import BgHeroIllustration from '@/assets/svg/bg-illustration.svg?component'
import HeroIllustration from '@/assets/svg/hero-illustration.svg?component'
</script>

<template>
  <section class="section" id="hero">
    <div class="container">
      <div class="hero-container">
        <div class="hero-container--left">
          <h1 class="font-rubik hero-title">
            Estaciona <span class="font-rubik">rápido</span> y ahorra
            <span class="font-rubik">tiempo</span>
          </h1>
          <h2 class="font-rubik hero-subtitle">
            Encuentra fácilmente estacionamiento desde la comodidad de tu dispositivo
          </h2>
          <router-link to="/login">
            <v-button>Conocer más</v-button>
          </router-link>
        </div>
        <div class="hero-container--right">
          <div class="hero-container--right-bg">
            <bg-hero-illustration
              viewBox="0 0 547 463"
              class="hero-container--right-bg-illustration"
            />
          </div>
          <hero-illustration viewBox="0 0 283 467" class="hero-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.hero-title,
.hero-title span {
  font-size: 60px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -1.2px;
  text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
}
.hero-title {
  color: var(--color-primary-500);
  margin-bottom: 16px;
}
.hero-title span {
  color: var(--color-secondary-400);
}
.hero-subtitle {
  font-size: 24px;
  line-height: 40px;
  font-weight: 400;
  color: var(--color-text);
  margin-bottom: 36px;
}
.hero-container--right {
  position: relative;
  display: flex;
  justify-content: center;
}
.hero-container--right-bg {
  position: absolute;
}
.hero-img {
  position: relative;
}

@media screen and (max-width: 1080px) {
  .hero-title,
  .hero-title span {
    font-size: 40px;
  }
  .hero-subtitle {
    font-size: 20px;
    line-height: 1.4;
  }
  .hero-container--right-bg-illustration {
    width: 100%;
    height: initial;
  }
  .hero-img {
    width: 50%;
    height: initial;
  }
}

@media screen and (max-width: 768px) {
  .section {
    padding-top: 48px;
  }
  .hero-container {
    display: flex;
    flex-direction: column;
    gap: 36px;
  }
  .hero-title {
    margin-block: 0 12px;
  }
  .hero-title,
  .hero-title span {
    font-size: 32px;
    text-align: center;
  }
  .hero-subtitle {
    font-size: 16px;
    text-align: center;
    margin-block: 0 24px;
  }
  .hero-container--left a {
    display: block;
    width: fit-content;
    margin-inline: auto;
  }

  .hero-container--right {
    width: 80%;
    margin-inline: auto;
  }
}
</style>
