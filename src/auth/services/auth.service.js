import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000/'
})

export class AuthService {
  signUp(fullname, password, email, country, phoneNumber, newsCheck, privacyCheck) {
    return http.post('/users', {
      fullname,
      password,
      email,
      country,
      phoneNumber,
      newsCheck,
      privacyCheck
    })
  }

  async signIn(email, password) {
    const response = await http.get(`/users?email=${email}&password=${password}`)

    if (response.data.length === 0) throw new Error('User not found')

    return response.data
  }

  logout() {
    localStorage.removeItem('user')
  }
}
