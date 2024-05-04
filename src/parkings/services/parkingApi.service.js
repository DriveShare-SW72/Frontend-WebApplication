import axios from 'axios'

class ParkingApiService {
  /** @type {import('axios').AxiosInstance} */
  axiosInstance

  constructor() {
    const BASE_URL = 'http://localhost:3000/api/v1'

    this.axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

  async getParkings() {
    try {
      const response = await this.axiosInstance.get('/parkings')
      return response.data
    } catch (err) {
      console.error(err)
    }
  }

  async getParkingsById(id) {
    try {
      const response = await this.axiosInstance.get(`/parkings?id=${id}`)
      return response.data
    } catch (err) {
      console.error(err)
    }
  }

  async getParkingsLocations() {
    try {
      const response = await this.axiosInstance.get('/parkings-locations')
      return response.data
    } catch (err) {
      console.error(err)
    }
  }

  async postParking({ lat, lng, ...restParking }) {
    try {
      await this.axiosInstance.post('/parkings', restParking)

      const location = {
        id: Math.floor(Math.random() * (1000 - 20 + 1)) + 20,
        lat,
        lng,
        parking_id: restParking.id
      }

      await this.axiosInstance.post('/parkings-locations', location)
    } catch (err) {
      console.error(err)
    }
  }
}

export default ParkingApiService
