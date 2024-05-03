import axios from "axios";

const http = axios.create({
  baseURL: 'http://localhost:3000/'
});

export class AuthService {

  signUp(fullname, password, email, country, phoneNumber, newsCheck, privacyCheck) {
    return http.post('/users', {
      fullname: fullname,
      password: password,
      email: email,
      country: country,
      phoneNumber: phoneNumber,
      newsCheck: newsCheck,
      privacyCheck: privacyCheck
    });
  }

   signIn(email, password) {
     return http.post('/users', {
       email: email,
       password: password
     })
   }

  // signIn(email, password) {
  //   console.log('Attempting to sign in with email:', email);
  //
  //   // Consulta a la API para obtener todos los usuarios
  //   return http.get('/users')
  //     .then(response => {
  //       console.log('API response:', response);
  //
  //       // Buscar un usuario que coincida con el correo electrónico proporcionado
  //       const user = response.data.find(user => user.email === email);
  //
  //       if (user) {
  //         // Verificar la contraseña del usuario encontrado
  //         if (user.password === password) {
  //           // Usuario autenticado correctamente, almacenar en localStorage (simulando sesión)
  //           localStorage.setItem('user', JSON.stringify(user));
  //           return Promise.resolve(user); // Resuelve la promesa con el usuario autenticado
  //         } else {
  //           // Contraseña incorrecta, rechazar la promesa con un error
  //           return Promise.reject(new Error('Invalid password'));
  //         }
  //       } else {
  //         // Usuario no encontrado, rechazar la promesa con un error
  //         return Promise.reject(new Error('User not found'));
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error signing in:', error);
  //       return Promise.reject(error); // Rechazar la promesa con el error
  //     });
  // }

  logout() {
    localStorage.removeItem('user');
  }
}