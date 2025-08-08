<template>
  <form @submit.prevent="login">
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button>Login</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()

const email = ref('')
const password = ref('')

const login = async () => {
  const res = await axios.post('/api/login', {
    email: email.value,
    password: password.value
  })
  localStorage.setItem('token', res.data.token)
  router.push('/dashboard')
}
</script>
