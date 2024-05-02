import { Loader } from '@googlemaps/js-api-loader'

const API_KEY = 'AIzaSyBe69kNwVcfq7gUOFLLH-mL2HdoV-rjCuQ'

const googleApiLoader = new Loader({
  apiKey: API_KEY,
  version: 'weekly',
  libraries: ['places']
})

export default googleApiLoader
