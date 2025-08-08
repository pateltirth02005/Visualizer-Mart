export default defineNuxtConfig({
  imports: {
    dirs: ['composables'],
    autoImport: true, // ✅ ensures things like `ref` and `onMounted` work
  },
})
