<template>
  <v-base-layout>
    <section class="main-section">
      <div class="section-header">
        <h2 class="section-title">Rent your parking</h2>
        <p class="section-subtitle">
          Fill in the following form with the information of the parking lot you want to rent. Once
          you have completed the form, click on the "Post parking" button to publish the parking lot
        </p>
      </div>
      <pv-divider />
      <div>
        <p v-if="loading">Cargando...</p>
        <div v-if="!loading && !reservations?.length">
          Usted no cuenta con reservas en este momento
        </div>
        <div v-if="!loading && reservations?.length">
          <pv-data-table :value="reservations">
            <pv-column field="id" header="Id" />
            <pv-column field="start_date" header="Fecha de inicio" />
            <pv-column field="end_date" header="Fecha final" />
            <pv-column field="total_fare" header="Precio" />
            <pv-column field="status" header="Estado" />
          </pv-data-table>
        </div>
      </div>
    </section>
  </v-base-layout>
</template>

<script>
import ReservationApiService from '@/parkings/services/reservationsApi.service'
import VBaseLayout from '@/public/layout/base.layout.vue'
import PvDataTable from 'primevue/datatable'
import PvColumn from 'primevue/column'
import PvDivider from 'primevue/divider'
import { useAuth } from '@/store/auth'
import { ref } from 'vue'

export default {
  name: 'your-reservations-page',
  components: {
    VBaseLayout,
    PvDivider,
    PvDataTable,
    PvColumn
  },
  setup() {
    const authStore = useAuth()

    const userId = authStore.user.id

    const reservationsService = new ReservationApiService()

    const loading = ref(true)
    const reservations = ref([])

    reservationsService
      .getReservationsByGuestId(userId)
      .then((data) => {
        console.log(data)
        reservations.value = data
      })
      .finally(() => (loading.value = false))

    console.log(userId)

    return { loading, reservations }
  }
}
</script>

<style>
.main-section {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
