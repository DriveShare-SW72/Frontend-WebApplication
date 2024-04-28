<script>
export default {
  name: 'sign-in-component'
}
</script>

<script setup>
import PvInputText from 'primevue/inputtext'
import PvPassword from 'primevue/password'
import PvButton from 'primevue/button'
import { ref } from 'vue'

const value1 = ref(null)
const value2 = ref(null)
</script>

<template>
  <section class="form-container">
    <form action="" method="get">
      <div class="form-item">
        <div class="logo-container">
          <img alt="Logo" class="logo" src="../../assets/logo.svg" />
        </div>
        <h1 class="title">Sign In</h1>
      </div>
      <div class="form-item">
        <label class="label" for="email">E-mail</label>
        <pv-input-text id="email" v-model="value1" aria-describedby="email-help" />
      </div>
      <div class="form-item">
        <label class="label" for="password">Password</label>
        <pv-password
          id="password"
          v-model="value2"
          :feedback="false"
          input-style="width: 100%; background-color: #D9D9D9; color: black;"
          toogleMask
        />
      </div>
      <div class="form-item">
        <pv-button id="submit" label="Login" />
      </div>
      <div class="forget-password">
        <h3 style="margin: 0"><a style="color: black" href="">Forgot password?</a></h3>
      </div>
      <div class="form-item">
        <p>Don't have an account yet? <a style="color: #ef6c42" href="">Sign up</a></p>
      </div>
    </form>
  </section>
</template>

<style scoped>
a {
  text-decoration: none;
}

form {
  display: flex;
  align-items: center;
  background-color: white;
  flex-direction: column;
  font-family: 'Mulish', 'Inter var', sans-serif;

  padding: 20px;
  width: 500px;
  border-radius: 20px;
}

.title {
  color: black;
  margin: 10px 0 0 0;
}

.logo {
  width: 160px;
}

.form-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: inherit;

  margin-bottom: 20px;
  color: black;
  width: 80%;
}

.label {
  display: inline-block;

  width: 100%;
}

#email,
#password {
  background-color: #d9d9d9;
  color: black;
  width: 100%;
}

.forget-password {
  display: inherit;
  justify-content: flex-end;
  font-family: inherit;

  width: 80%;
}

#submit {
  width: 100%;
  font-family: inherit;
  background-color: #ef6c42;
  border: #d9d9d9 solid 2px;
}
</style>
