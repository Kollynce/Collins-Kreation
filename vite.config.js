import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/',
  server: {
    port: 3000, // You can change this to any port number you prefer
    open: true  // This will automatically open the browser
  }
})
