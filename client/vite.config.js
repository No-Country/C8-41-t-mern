import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,

  },
  preview: {
    port: import.meta.env.PORT,
    host: '0.0.0.0',
  }
})
