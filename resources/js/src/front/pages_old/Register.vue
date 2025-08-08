<template>
  <form @submit.prevent="register">
    <input v-model="name" placeholder="Name" />
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <input v-model="password_confirmation" type="password" placeholder="Confirm Password" />
    <button>Register</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const name = ref('')
const email = ref('')
const password = ref('')
const password_confirmation = ref('')

const register = async () => {
  await axios.post('/api/register', {
    name: name.value,
    email: email.value,
    password: password.value,
    password_confirmation: password_confirmation.value
  })
}
</script>
