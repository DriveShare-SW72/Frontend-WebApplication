<script >

// import {useUserStore} from "./auth/store/user-store.store.js";
// import { AuthService } from '@/auth/services/auth.service.js'
//
//
// export default {
//   data() {
//     return {
//
//       authenticationPaths: new Set([
//         "/login",
//         "/signup",
//         "/recovery",
//
//       ]),
//       authApi: new AuthService(),
//       user: null,
//       userOptions: false,
//       userItems: [
//         {label: 'Find-Parking', command: () => this.$router.push('/find-your-park')},
//         {label: 'Rent-Parking', command: () => this.$router.push('/rent-your-park')},
//         {label: 'Profile', command: () => this.$router.push('/profile')}
//       ]
//
//     }
//   },
//   setup() {
//     const userStore = useUserStore();
//
//     const setUser = (user) => {
//       userStore.setUser(user);
//     };
//
//     return { setUser };
//   },
//   created() {
//     this.$i18n.locale = localStorage.getItem("preferred-language") ?? "en";
//     const user = localStorage.getItem("user");
//     user && this.setUser(JSON.parse(user));
//     if (user) {
//       this.user = JSON.parse(user).user;
//     }
//   },
//   computed: {
//
//     localStorageUser() {
//       const user = localStorage.getItem("user");
//       return user ? JSON.parse(user).user : null;
//     }
//   },
//   watch: {
//
//     localStorageUser(newUserData, oldUserData) {
//       if (newUserData && newUserData !== oldUserData) {
//         this.user = newUserData;
//       }
//     }
//   },
//
//   methods: {
//     isAnAuthenticationPath(path) {
//       return this.authenticationPaths.has(path);
//     },
//     logout() {
//       this.userOptions = false;
//       const userStore = useUserStore();
//       this.$toast.add({
//         severity: "warn",
//         summary: "User",
//         detail: "Logging out...",
//         life: 1000
//       });
//       userStore.logout();
//       this.$router.push("/login");
//     },
//     goProfileManagement() {
//       this.$router.push("/manage-profile");
//       this.userOptions = false;
//     },
//   }
// }

</script>


<template>
  <router-view />
</template>

<style scoped></style>
