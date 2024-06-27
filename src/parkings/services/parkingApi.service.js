import axios from 'axios'

class ParkingApiService {
  /** @type {import('axios').AxiosInstance} */
  axiosInstance

  constructor() {
    const BASE_URL = 'http://3.14.129.158:8001/api/v1'

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

  async postParking({ lat, lng, ...restParking }) {
    try {
      const parking = await this.axiosInstance.post('/parkings', restParking)

      console.log(parking)
      const createLocationDTO = {
        id: Math.floor(Math.random() * (1000 - 20 + 1)) + 20,
        lat,
        lng,
        parking_id: parking.data.id
      }
      const location = await this.axiosInstance.post('/parkings-locations', createLocationDTO)

      return { parking: parking.data, location: location.data }
    } catch (err) {
      console.error(err)
    }
  }
}

export default ParkingApiService
