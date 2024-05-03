<script setup>
import VBaseLayout from '@/public/layout/base.layout.vue'
import PvCarousel from 'primevue/carousel'
import PvFieldset from 'primevue/fieldset'
import PvButton from 'primevue/button'
import { useRoute } from 'vue-router'
import ParkingApiService from '../services/parkingApi.service'

const route = useRoute()
const parkingId = route.params.id
const parkingService = new ParkingApiService()

console.log(parkingId)

const parkingImages = [
  {
    src: 'https://picsum.photos/200/300',
    alt: 'Parking image 1'
  },
  {
    src: 'https://picsum.photos/200/300',
    alt: 'Parking image 2'
  },
  {
    src: 'https://picsum.photos/200/300',
    alt: 'Parking image 3'
  },
  {
    src: 'https://picsum.photos/200/300',
    alt: 'Parking image 4'
  },
  {
    src: 'https://picsum.photos/200/300',
    alt: 'Parking image 5'
  },
  {
    src: 'https://picsum.photos/200/300',
    alt: 'Parking image 6'
  },
  {
    src: 'https://picsum.photos/200/300',
    alt: 'Parking image 7'
  },
  {
    src: 'https://picsum.photos/200/300',
    alt: 'Parking image 8'
  },
  {
    src: 'https://picsum.photos/200/300',
    alt: 'Parking image 9'
  }
]

parkingService
  .getParking(parkingId)
  .then((parking) => {
    console.log(parking)
  })
  .catch((error) => {
    console.error(error)
  })
</script>

<template>
  <v-base-layout>
    <section class="parking-detail-section">
      <h2 class="parking-detail-address">Av. Cadiz 311</h2>
      <pv-carousel
        :value="parkingImages"
        :num-visible="3"
        :num-scroll="1"
        circular
        class="parking-carousel-images"
      >
        <template #item="slotProps">
          <div class="parking-image-item">
            <img src="https://picsum.photos/600/400" :alt="slotProps.alt" />
          </div>
        </template>
      </pv-carousel>
      <div class="parking-info-container">
        <pv-fieldset legend="Description" class="parking-description-fieldset">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus libero magnam labore
          eaque dolorem! Numquam fugiat, voluptates expedita veritatis placeat cumque, reiciendis
          minima, quod illo nihil minus consequuntur consequatur non? Quo pariatur, perferendis odit
          accusantium odio maxime exercitationem, quae cum eum, nemo praesentium aspernatur
          provident sint sed minus? Eius nobis dolore nam ducimus quaerat enim similique possimus
          sint earum animi cupiditate, nostrum porro quae dicta. Ea recusandae quaerat consectetur
          perspiciatis maiores commodi sunt nobis, eius corporis quod ex omnis esse explicabo
          nostrum incidunt. Vitae quasi soluta alias quod eligendi asperiores, quam repellendus
          distinctio reiciendis, illum saepe. Debitis dicta repellendus harum!
        </pv-fieldset>
        <div class="parking-cta-container">
          <pv-button class="parking-reviews-btn">
            <span class="parking-review-btn-label">Ratings & Reviews &rarr;</span>
            <span class="parking-reviews-btn-rate">4.8/5</span>
          </pv-button>
          <p class="parking-fare">Price: S/. 4.00 / hour</p>
          <pv-button label="Reserve now" class="parking-reserve-btn" severity="contrast" />
        </div>
      </div>
    </section>
  </v-base-layout>
</template>

<style scoped>
.parking-detail-section {
  background-color: #e7efff;
  margin-top: 1.5rem;
  border-radius: 10px;
  padding: 2rem 4rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}
.parking-detail-address {
  font-family: 'Rubik', sans-serif;
  font-size: 2.25rem;
  text-align: center;
  color: #212529;
}
.parking-carousel-images :deep(.p-carousel-item) {
  transition: all 0.3s ease-in-out;
}
.parking-carousel-images :deep(.p-carousel-item-end),
.parking-carousel-images :deep(.p-carousel-item-start) {
  transform: scale(0.9);
}
.parking-image-item {
  display: flex;
  margin-inline: 1rem;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.parking-image-item img {
  width: 100%;
  height: 100%;
}
.parking-info-container {
  display: flex;
  gap: 2rem;
}
.parking-description-fieldset {
  border: 1px solid #8d9cac;
}
.parking-description-fieldset :deep(.p-fieldset-legend) {
  border: 1px solid #8d9cac;
}
.parking-cta-container {
  flex-shrink: 0;
  padding-top: 1rem;
}
.parking-reviews-btn {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-family: 'Rubik', sans-serif;
  padding-inline: 1.5rem;
  padding-block: 0.75rem;
}
.parking-review-btn-label {
  font-size: 1.25rem;
  font-weight: 600;
}
.parking-reviews-btn-rate {
  font-size: 2rem;
  font-weight: 700;
}
.parking-fare {
  font-size: 1.25rem;
  font-weight: 600;
  color: #212529;
  margin-block: 0.75rem;
}
.parking-reserve-btn {
  width: 100%;
  padding-block: 0.75rem;
}
</style>
