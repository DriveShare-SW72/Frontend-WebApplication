<script>
export default {
  name: 'register-park-page'
}
</script>

<script setup>
import VBaseLayout from '@/public/layout/base.layout.vue'
import VGoogleAutocomplete from '@/public/components/google-autocomplete.component.vue'
import VGoogleMap from '../components/google-map.component.vue'
import PvInputText from 'primevue/inputtext'
import PvInputMask from 'primevue/inputmask'
import PvButton from 'primevue/button'
import { reactive, ref } from 'vue'
import ParkingApiService from '@/parkings/services/parkingApi.service'

const MAP_DEFAULT_CENTER = { lat: -12.1061161, lng: -77.026921 }
const MAP_DEFAULT_ZOOM = 18

const map = ref(null)
const parkingService = new ParkingApiService()

const formState = reactive({
  address: '',
  streetNumber: '',
  lat: 0,
  lng: 0,
  city: '',
  state: '',
  spaces: 0,
  length: 0,
  width: 0,
  height: 0,
  startTime: '',
  endTime: '',
  phone: '',
  fare: 0,
  description: ''
})

/** @param {google.maps.places.PlaceResult} place */
function handleAutocompletePlaceChanged(place) {
  const {
    geometry: { location },
    formatted_address,
    address_components
  } = place

  console.log('[ADDRESS-COMPONENT]', address_components)

  address_components.forEach((component) => {
    if (component.types.includes('street_number')) {
      formState.streetNumber = component.long_name
    }
    if (component.types.includes('locality')) {
      formState.city = component.long_name
    }
    if (component.types.includes('administrative_area_level_2')) {
      formState.state = component.long_name
    }
  })

  formState.address = formatted_address

  if (!location) return
  map.value.panTo(location)
  map.value.setZoom(18)

  formState.lat = location.lat()
  formState.lng = location.lng()
}

function handlePostGarage() {
  if (!formState.address) return
  const parkingDTOPost = {
    id: Math.floor(Math.random() * (1000 - 20 + 1)) + 20,
    owner_id: 1,
    address: formState.address,
    number: formState.streetNumber,
    city: formState.city,
    state: formState.state,
    dimensions: {
      width: formState.width,
      length: formState.length,
      height: formState.height
    },
    schedule: {
      start_time: formState.startTime,
      end_time: formState.endTime
    },
    phone: formState.phone,
    price_per_hour: formState.fare,
    description: formState.description,
    rating: 0,
    lat: formState.lat,
    lng: formState.lng
  }
  parkingService.postParking(parkingDTOPost).then(() => {
    console.log('Parking posted successfully')
  })
}
</script>

<template>
  <v-base-layout>
    <section class="register-section">
      <h2 class="register-title">Rent your parking</h2>

      <form @submit.prevent>
        <div class="register-form-section--top">
          <div class="register-form-field register-form-field--address">
            <label for="address">Exact address of the space to rent:</label>
            <v-google-autocomplete
              @placeChanged="handleAutocompletePlaceChanged"
              v-model="formState.address"
            />
          </div>
          <div class="register-form-field register-form-field--spaces">
            <label for="address">Parking spaces available</label>
            <pv-input-text v-model="formState.spaces" />
          </div>
        </div>
        <div class="map-container">
          <v-google-map :center="MAP_DEFAULT_CENTER" :zoom="MAP_DEFAULT_ZOOM" v-model:map="map" />
        </div>
        <div class="register-form-section--bottom">
          <div class="register-form-additional-info">
            <div class="register-form-field">
              <label for="length">Length (m):</label>
              <pv-input-text v-model="formState.length" />
            </div>
            <div class="register-form-field">
              <label for="width">Width (m):</label>
              <pv-input-text v-model="formState.width" />
            </div>
            <div class="register-form-field">
              <label for="height">Height (m):</label>
              <pv-input-text v-model="formState.height" />
            </div>
            <div class="register-form-field">
              <label for="startTime">Start time:</label>
              <pv-input-mask mask="99:99" v-model="formState.startTime" />
            </div>
            <div class="register-form-field">
              <label for="endTime">End time</label>
              <pv-input-mask mask="99:99" v-model="formState.endTime" />
            </div>
            <div class="register-form-field">
              <label for="phone">Phone number</label>
              <pv-input-mask mask="999-999-999" v-model="formState.phone" />
            </div>
          </div>
          <div class="register-form-cta">
            <div class="register-form-field register-form-field--fare">
              <label for="fare">Price per hour (includes commission)</label>
              <pv-input-text />
            </div>
            <div class="register-form-field register-form-field--description">
              <label for="description">Description</label>
              <pv-input-text />
            </div>
            <pv-button
              @click="handlePostGarage()"
              class="register-form-post-btn"
              label="Post parking"
              severity="contrast"
            />
          </div>
        </div>
      </form>
    </section>
  </v-base-layout>
</template>

<style scoped>
.register-section {
  background: #e7efff;
  padding: 2rem 2rem;
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}
.register-title {
  font-size: 2.5rem;
  font-weight: 700;
  font-family: 'Rubik', sans-serif;
  margin-block: 0 0.75rem;
}
.register-form-section--top {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.25rem;
}
.register-form-field {
  display: flex;
  flex-direction: column;
}
.register-form-field--address {
  width: 100%;
}
.register-form-field--spaces {
  flex-shrink: 0;
  width: 15rem;
}
.register-form-additional-info .register-form-field :deep(.p-inputtext) {
  width: 100%;
}
.register-form-field label {
  margin-bottom: 0.5rem;
}
.map-container {
  width: 100%;
  aspect-ratio: 3/1;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}
.register-form-additional-info {
  display: flex;
  gap: 1rem;
  margin-top: 1.25rem;
}
.register-form-cta {
  display: flex;
  gap: 1.25rem;
  margin-top: 1.5rem;
}
.register-form-field--fare {
  width: 20rem;
}
.register-form-field--description {
  width: 100%;
}
.register-form-post-btn {
  text-wrap: nowrap;
  flex-shrink: 0;
  height: fit-content;
  margin-block: auto;
}
</style>
