import ParkingApiService from '@/parkings/services/parkingApi.service'
import { defineStore } from 'pinia'

const parkingService = new ParkingApiService()

export const useParkings = defineStore('locations-store', {
  state: () => ({
    locations: [],
    yourGarages: []
  }),
  getters: {
    parking(parkingId) {
      return this.locations.find((location) => location.parking_id === parkingId)
    }
  },
  actions: {
    async loadLocations(force = false) {
      if (!force && this.locations.length) return
      try {
        const locations = await parkingService.getParkingsLocations()
        this.locations = locations
      } catch (err) {
        console.error(err)
      }
    },
    async createParking(createParkingDTO) {
      try {
        const { location, parking } = await parkingService.postParking(createParkingDTO)
        this.locations.push({ ...location, parking_id: parking.id })
        this.yourGarages.push(parking)
        return location
      } catch (err) {
        console.error(err)
      }
    }
  }
})
