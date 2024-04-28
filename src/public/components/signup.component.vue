<script>
export default {
  name: 'sign-up-component'
}
</script>

<script setup>
import PvInputText from "primevue/inputtext";
import PvPassword from "primevue/password";
import PvCascadeSelect from "primevue/cascadeselect"
import PvInputNumber from "primevue/inputnumber"
import PvCheckbox from "primevue/checkbox"
import PvButton from "primevue/button";
import {ref} from "vue";

const countries = ref([]);
const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
const confirmValue3 = ref(null);
const value4 = ref(null);
const value5 = ref(false);
const value6 = ref(false);
</script>

<template>
  <section class='form-container'>
    <form action="" method="post">
      <div class="form-item">
        <div class="logo-container">
          <img alt="Logo" class="logo" src="../../assets/logo.svg">
        </div>
        <h1 class="title">Sign Up</h1>
      </div>
      <div class="form-item">
        <label class="label" for="fullname">Full Name</label>
        <pv-input-text id="fullname" v-model="value1" aria-describedby="fullname-help"/>
      </div>
      <div class="form-item">
        <label class="label" for="email">E-mail</label>
        <pv-input-text id="email" v-model="value2" aria-describedby="email-help"/>
      </div>
      <div class="duo-container">
        <div class="form-item">
          <label class="label" for="password">Password</label>
          <pv-password v-model="value3" :feedback="false"
                       inputStyle="width: 100%; background-color: #D9D9D9; color: black;"
                       toogle-mask toogleMask/>
        </div>
        <div class="form-item">
          <label class="label" for="password">Confirm Password</label>
          <pv-password v-model="confirmValue3" :feedback="false"
                       input-style="width: 100%; background-color: #D9D9D9; color: black;" toogleMask/>
        </div>
      </div>
      <div class="duo-container">
        <div class="form-item">
          <label class="label" for="country">Country</label>
          <pv-cascade-select v-model="countries" id="country"/>
        </div>
        <div class="form-item">
          <label class="label" for="phone">Phone Number</label>
          <pv-input-number v-model="value4" :useGrouping="false" inputId="withoutgrouping"
                           inputStyle="width: 100%; background-color: #D9D9D9; color: black;"/>
        </div>
      </div>
      <div class="form-item">
        <div class="conditions-container">
          <div class="condition-item">
            <pv-checkbox class="checkbox" v-model="value5" inputId="condition1" :binary="true"/>
            <label for="condition1">I want to receive news from EzPark via email</label>
          </div>
          <div class="condition-item">
            <pv-checkbox class="checkbox" v-model="value6" inputId="condition1" :binary="true"/>
            <label for="condition2">I have read and agree with the Privacy Policy</label>
          </div>
        </div>
      </div>
      <div class="form-item">
        <pv-button id="submit" label="Sign Up"/>
      </div>
      <div class="form-item">
        <p>Already have an account? <a href="">Sign in</a></p>
      </div>
    </form>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

a {
  text-decoration: none;
  color: #EF6C42;
}

form {
  display: flex;
  align-items: center;
  background-color: white;
  flex-direction: column;
  font-family: "Mulish", "Inter var", sans-serif;
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

.duo-container {
  display: flex;
  gap: 2em;
  flex-direction: row;
  font-family: inherit;

  width: 80%;
}

.label {
  display: inline-block;

  width: 100%
}

#email, #fullname, #country {
  background-color: #D9D9D9;
  color: black;
  width: 100%;
}

.conditions-container {
  display: inherit;
  flex-wrap: wrap;

  width: 368px;
}

.condition-item {
  display: inherit;
  gap: 1em;
  font-size: smaller;

  margin-top: 5px;
}

.checkbox {
  color: red;
}

#submit {
  width: 100%;
  font-family: "Mulish", "Inter var", sans-serif;
  background-color: #EF6C42;
  border: #D9D9D9 solid 2px;
}

</style>