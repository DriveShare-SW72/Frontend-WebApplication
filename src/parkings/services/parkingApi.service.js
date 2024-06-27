import axios from 'axios'

class ParkingApiService {
  /** @type {import('axios').AxiosInstance} */
  axiosInstance

  constructor() {
    const BASE_URL = 'https://api-gateway-driveshare-qh7j.vercel.app/api/v1/'

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
      const response = await this.axiosInstance.get(`/parkings/${id}`)
      return response.data
    } catch (err) {
      console.error(err)
    }
  }

  async getParkingsLocations() {
    const response = await this.axiosInstance.get('/geocoordinates')

    return response.data
  }

  async postParking({ lat, lng, schedule, ...restParking }) {
    try {
      const { data: scheduleData } = await this.axiosInstance.post('/schedules', { ...schedule })

      const parking = await this.axiosInstance.post('/parkings', {
        ...restParking,
        schedule: scheduleData.id
      })

      const createLocationDTO = {
        latitude: lat,
        longitude: lng,
        parking: parking.data.id
      }
      const location = await this.axiosInstance.post('/geocoordinates', createLocationDTO)

      return { parking: parking.data, location: location.data }
    } catch (err) {
      console.error(err)
    }
  }
}

export default ParkingApiService
