// import { defineStore } from 'pinia';
//
// export const useUserStore = defineStore('auth', {
//   state: () => ({
//     isAuthenticated: false,
//     role: null,
//     user: null,
//     companyId: null,
//     token: null,
//   }),
//   actions: {
//     setUser(data) {
//       this.isAuthenticated = true;
//       this.token = data.token;
//
//       this.user = data.user;
//     },
//     logout() {
//       localStorage.removeItem("user");
//       this.isAuthenticated = false;
//       this.token = null;
//     },
//   }
// });