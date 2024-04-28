import { jwtDecode } from 'jwt-decode'

/* eslint-disable no-undef */
class GoogleAuthProvider {
  constructor() {
    this.oauthId = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID
    this.accessToken = JSON.parse(localStorage.getItem('google-auth'))
    this.signInMethod = null
  }

  /**
   * Initialize the Google Auth Provider
   * @returns {void}
   */
  initialize() {
    google.accounts.id.initialize({
      client_id: this.oauthId,
      callback: this.handleCallbackResponse.bind(this)
    })
  }

  /**
   * Handle the callback response from Google Auth
   * @param {google.accounts.id.CredentialResponse} response
   */
  handleCallbackResponse(response) {
    const { credential } = response

    localStorage.setItem('google-auth', JSON.stringify(credential))
    this.accessToken = credential

    this.signInMethod(jwtDecode(credential), credential)
  }

  onSignIn(callback) {
    this.signInMethod = callback
  }

  /**
   * Render the Google Auth button
   * @param {HTMLElement} element The element to render the button in
   * @param {"outline" | "filled_blue" | "filled_black"} theme The theme of the button, it only have three modes
   * @param {number} width The width of the button
   * @returns {void}
   */
  renderButton(element, theme, width) {
    google.accounts.id.renderButton(element, { theme, width })
  }
}

export default GoogleAuthProvider
