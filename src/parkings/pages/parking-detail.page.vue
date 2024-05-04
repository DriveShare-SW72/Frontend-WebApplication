<script setup>
import VBaseLayout from '@/public/layout/base.layout.vue'
import BgIllustration from '@/assets/svg/bg-illustration.svg?component'
import PvCarousel from 'primevue/carousel'
import PvFieldset from 'primevue/fieldset'
import PvButton from 'primevue/button'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import ParkingApiService from '../services/parkingApi.service'

const route = useRoute()
const parkingId = route.params.id
const parkingService = new ParkingApiService()
const loading = ref(true)
const parking = ref(null)

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
  .getParkingsById(parkingId)
  .then((data) => {
    loading.value = true
    return new Promise((resolve) => {
      setTimeout(() => {
        parking.value = data
        resolve(data)
      }, 1000)
    })
  })
  .then(([data]) => {
    parking.value = data
    console.log(parking.value)
  })
  .catch(console.error)
  .finally(() => (loading.value = false))

console.log(parking.value)
</script>

<template>
  <v-base-layout>
    <section class="main-section">
      <template v-if="loading">
        <div class="loading-container">
          <div>
            <i class="pi pi-spin pi-spinner loading-icon"></i>
          </div>
          <p class="loading-complement">Loading parking, please wait a few seconds</p>
        </div>
      </template>
      <template v-else-if="!loading && parking">
        <h2 class="parking-detail-address">
          {{ parking.address }} {{ parking.number }}, {{ parking.city }}
        </h2>
        <p class="parking-detail-complement">
          See the images of the parking lot and its description. If you like it, you can reserve it
        </p>
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
          <pv-fieldset legend="Description" class="parking-description-fieldset">{{
            parking.description
          }}</pv-fieldset>
          <pv-fieldset legend="Dimensions" class="parking-dimensions-fieldset">
            <p>Width: {{ parking.dimensions.width }} m</p>
            <p>Length: {{ parking.dimensions.length }} m</p>
            <p>Height: {{ parking.dimensions.height }} m</p>
            <p>Max capacity: {{ parking.max_capacity }} spaces</p>
            <p>Available spaces: 2 spaces</p>
          </pv-fieldset>
          <div class="parking-cta-container">
            <pv-button class="parking-reviews-btn">
              <span class="parking-review-btn-label">Ratings & Reviews &rarr;</span>
              <span class="parking-reviews-btn-rate">{{ parking.rating }}/5</span>
            </pv-button>
            <p class="parking-fare">Price: S/. {{ parking.price_per_hour }} / hour</p>
            <pv-button label="Reserve now" class="parking-reserve-btn" severity="contrast" />
          </div>
        </div>
      </template>
      <template v-else>
        <div class="not-found">
          <div class="not-found-img">
            <bg-illustration viewBox="0 0 547 463" class="bg-illustration" />
            <i class="pi pi-ban not-found-icon" />
          </div>
          <h1 class="not-found-title">Ups, park with ID {{ parkingId }} not found</h1>
          <p class="not-found-description">
            Error 404: It seems that the parking lot you are looking for does not exist. <br />
            Please return to the home page.
          </p>
          <router-link class="return-link" to="/find-your-park">
            <pv-button label="Return home" class="pi pi-chevron-left return-btn" />
          </router-link>
        </div>
      </template>
    </section>
  </v-base-layout>
</template>

<style scoped>
.main-section {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.loading-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: -2.5rem;
}
.loading-icon {
  font-size: 3rem;
  color: #3c4e67;
}
.loading-complement {
  font-size: 1.25rem;
}
.parking-detail-address {
  font-family: 'Rubik', sans-serif;
  font-size: 2.25rem;
  margin-block: 0 12px;
  color: #3c4e67;
}
.parking-detail-complement {
  font-size: 18px;
  font-weight: 500;
  margin-block: 0 24px;
}

.parking-carousel-images :deep(.p-carousel-indicator.p-highlight .p-link) {
  background: #ef6c42;
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

.parking-description-fieldset,
.parking-dimensions-fieldset,
.parking-description-fieldset :deep(.p-fieldset-legend),
.parking-dimensions-fieldset :deep(.p-fieldset-legend) {
  font-family: 'Rubik', sans-serif;
}
.parking-description-fieldset {
  font-family: 'Mulish', sans-serif;
  width: 100%;
}
.parking-dimensions-fieldset {
  flex-shrink: 0;
}
.parking-dimensions-fieldset :deep(.p-fieldset-content) {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.parking-dimensions-fieldset p {
  margin: 0;
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
  background: #ef6c42;
  border: 0;
  outline-color: #ef6c42;
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
  background: #3c4e67;
  border: none;
  outline-color: #3c4e67;
}
.not-found-title {
  font-size: 32px;
  text-align: center;
  font-weight: 700;
  margin-block: 0 12px;
}
.not-found-description {
  font-size: 18px;
  line-height: 1.4;
  text-align: center;
  font-weight: 500;
  margin: 0;
}
.not-found {
  margin-top: -48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
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
.return-link {
  margin-top: 1.5rem;
  text-decoration: none;
}
.return-btn {
  background: #ef6c42;
  outline-color: #ef6c42;
  border: none;
  display: flex;
  gap: 8px;
  align-items: center;
}
.return-btn :deep(.p-button-label) {
  font-family: 'Mulish', sans-serif;
}
</style>
