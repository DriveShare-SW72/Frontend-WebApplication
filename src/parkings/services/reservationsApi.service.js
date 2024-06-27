import axios from 'axios'

class ReservationApiService {
  /** @type {import('axios').AxiosInstance} */
  axiosInstance

  constructor() {
    const BASE_URL = 'https://driveshare-reservationservice.onrender.com/api/v1/'

    this.axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

  async getReservations() {
    try {
      const response = await this.axiosInstance.get('/reservations')
      return response.data
    } catch (err) {
      console.error(err)
    }
  }

  async getReservationsById(id) {
    try {
      const response = await this.axiosInstance.get(`/reservations/${id}`)

      return response.data
    } catch (err) {
      console.error(err)
    }
  }

  async getReservationsByHostId(id) {
    try {
      const response = await this.axiosInstance.get(`/reservations/host/${id}`)

      return response.data
    } catch (err) {
      console.error(err)
    }
  }

  async getReservationsByGuestId(id) {
    try {
      const response = await this.axiosInstance.get(`/reservations/guest/${id}`)

      return response.data
    } catch (err) {
      console.error(err)
    }
  }

  async createReservation(data) {
    try {
      const response = await this.axiosInstance.post('/reservations', data)

      return response.data
    } catch (err) {
      console.error(err)
    }
  }
}

export default ReservationApiService
