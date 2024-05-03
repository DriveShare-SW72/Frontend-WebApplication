<script>
export default {
  name: 'v-about-us'
}
</script>

<script setup>
import VCard from '../components/card.component.vue'
import MauricioImage from '@/assets/team/mauricio.png'
import MarceloImage from '@/assets/team/marcelo.png'
import SebastianImage from '@/assets/team/sebastian.png'
import BrunoImage from '@/assets/team/bruno.png'

const members = [
  {
    name: 'Mauricio Oliveira',
    role: 'Ingeniero de Software',
    src: MauricioImage
  },
  {
    name: 'Marcelo Garro',
    role: 'Ingeniero de Software',
    src: MarceloImage
  },
  {
    name: 'Sebastian Méndez',
    role: 'Ingeniero de Software',
    src: SebastianImage
  },
  {
    name: 'Bruno Gonzales',
    role: 'Ingeniero de Software',
    src: BrunoImage
  }
]
</script>

<template>
  <section id="about-us" class="section">
    <div class="container">
      <h2 class="heading-2 about-us-title">Sobre nosotros</h2>
      <p class="body-1 about-us-description">
        Conoce al equipo encargado de este proyecto innovador
      </p>
      <div class="team-container">
        <v-card v-for="member of members" :key="member.name">
          <img
            :src="member.src"
            :alt="member.name"
            width="180"
            height="180"
            class="team-member-picture"
          />
          <p class="body-2 team-member-name">{{ member.name }}</p>
          <p class="body-2 team-member-role">{{ member.role }}</p>
        </v-card>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-us-title {
  text-align: center;
  color: var(--color-primary-500);
  margin-bottom: 12px;
  text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
}
.about-us-description {
  text-align: center;
  text-wrap: pretty;
  margin-bottom: 64px;
}
.team-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 36px;
}
.team-member-picture {
  display: block;
  max-width: 180px;
  width: 80%;
  aspect-ratio: 1 / 1;
  height: initial;
  margin-inline: auto;
  margin-block: 12px 20px;
}
.team-member-name {
  color: var(--color-title);
  font-weight: 700;
  margin-bottom: 4px;
  text-align: center;
}
.team-member-role {
  color: var(--color-text);
  font-style: italic;
  text-align: center;
  margin-bottom: 12px;
}
</style>
