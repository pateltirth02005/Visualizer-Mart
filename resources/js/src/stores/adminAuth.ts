import { defineStore } from 'pinia'
import api from '../utils/axios'
import { useRouter } from 'vue-router'

export const useAdminAuthStore = defineStore('adminAuth', {
    state: () => ({
        token: localStorage.getItem('admin_token') || null,
        admin: null as null | Record<string, any>,
    }),

    getters: {
        isLoggedIn: (state) => !!state.token,
    },

    actions: {
        async login(email: string, password: string) {
            const res = await api.post('/login', { email, password })
            this.token = res.data.token
            this.admin = res.data.user
            localStorage.setItem('admin_token', this.token)
        },

        async fetchAdmin() {
            if (!this.token) return
            const res = await api.get('/profile', {
                headers: { Authorization: `Bearer ${this.token}` },
            })
            this.admin = res.data
        },

        async logout() {
            await api.post('/logout', {}, {
                headers: { Authorization: `Bearer ${this.token}` },
            })
            this.token = null
            this.admin = null
            localStorage.removeItem('admin_token')
        }
    },
})
