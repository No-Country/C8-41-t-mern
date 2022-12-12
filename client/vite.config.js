import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,

  },
  build: {
    rollupOptions:{
      external:[
        "react",
        "react-dom",
        "react-use-cart",
        "react-sdk-mercadopago",
      ]
    }
  }
  // preview: {
  //   port: 3000,
  //   host: '0.0.0.0',
  // }
})
