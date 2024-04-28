<script setup>
import { defineComponent, ref, computed } from 'vue'
import PvInputText from 'primevue/inputtext'
import PvPassword from 'primevue/password'
import PvButton from 'primevue/button'
import { useRouter } from 'vue-router'

const formSteps = ['email', 'password']
const router = useRouter()

const currentStep = ref(formSteps[0])
const emailValue = ref('')
const passwordValue = ref('')
const newPasswordValue = ref('')

const currentStepViewStyle = computed(() => ({
  transform: `translateX(-${formSteps.indexOf(currentStep.value) * 100}%`
}))

function handleSubmit() {
  if (currentStep.value === 'email') {
    const isEmail = !!emailValue.value.match(/^[^\\.\s][\w\-\\.{2,}]+@([\w-]+\.)+[\w-]{2,}$/gm)
    if (!isEmail) return
    currentStep.value = 'password'
  } else if (currentStep.value === 'password') {
    const validatePassword = handleValidatePassword()
    if (!validatePassword) return
    router.push('/login')
  }
}

function handleValidatePassword() {
  if (passwordValue.value.length < 6 || newPasswordValue.value.length < 6) return false

  const samePassword = passwordValue.value === newPasswordValue.value

  if (!samePassword) return false

  return true
}

defineComponent({
  name: 'recovery-form-component'
})
</script>

<template>
  <form class="form" v-on:submit.prevent="handleSubmit">
    <h1 class="form-title">Forgot Password</h1>
    <div class="form-step-mask">
      <div class="form-step-view" :style="currentStepViewStyle">
        <div class="form-step">
          <p class="form-subtitle">
            Enter your email associated with your EzPark account and we will send you a reset link.
          </p>
          <div class="form-field">
            <label class="form-label" for="email">Email</label>
            <pv-input-text
              id="email"
              class="form-input"
              type="email"
              v-model="emailValue"
              required
            />
          </div>
          <pv-button class="form-btn" label="Send link" type="submit" />
          <p class="signup-link">
            Don't have an account yet?
            <router-link to="/signup">Sign up</router-link>
          </p>
        </div>
        <div class="form-step">
          <p class="form-subtitle">Enter your new password.</p>
          <div class="form-field-duo">
            <div class="form-field">
              <label class="form-label" for="email">Password</label>
              <pv-password
                id="email"
                class="form-input"
                v-model="passwordValue"
                :feedback="false"
                toggleMask
              />
            </div>
            <div class="form-field">
              <label class="form-label" for="email">New password</label>
              <pv-password
                id="email"
                class="form-input"
                v-model="newPasswordValue"
                :feedback="false"
                toggleMask
              />
            </div>
          </div>
          <pv-button class="form-btn" label="Change Password" type="submit" />
          <router-link to="/login">
            <pv-button
              class="form-btn form-btn--secondary"
              label="Go back to Sign In"
              type="submit"
            />
          </router-link>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>
.form {
  background-color: #fff;
  padding: 1.75rem 4rem;
  max-width: 31.25rem;
  width: 100%;
  border-radius: 1.25rem;
}
.form-step-mask {
  overflow: hidden;
}
.form-step-view {
  display: flex;
  transition: all 0.3s ease-in-out;
  padding-inline: 4px;
}
.form-step {
  flex-shrink: 0;
  width: 100%;
  margin-inline: 2px;
}
.form-title {
  font-family: 'Rubik', sans-serif;
  color: #212529;
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  margin-block: 0 0.5rem;
}
.form-subtitle {
  text-align: center;
  margin-block: 0 1.25rem;
}
.form-field-duo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.form-input,
.form-input :deep(.p-password-input) {
  width: 100%;
  background-color: #f7f7f7;
  color: #000;
}
.form-label {
  display: inline-block;
  font-weight: 700;
  margin-bottom: 0.25rem;
}
.form-input :deep(.p-inputtext):focus,
.form-input.p-inputtext:focus {
  outline: 2px solid #ef6c42;
}
.form-btn {
  margin-top: 1rem;
  width: 100%;
  background: #000;
  border: none;
}
.form-btn--secondary {
  background: transparent;
  border: 1px solid #000;
  color: #000;
}
.signup-link {
  display: block;
  text-align: center;
  margin-block: 2.5rem 0.25rem;
}
.signup-link a {
  color: #ef6c42;
  text-decoration: none;
}
.signup-link a:hover {
  text-decoration: underline;
}
</style>
