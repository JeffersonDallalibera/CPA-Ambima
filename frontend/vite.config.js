import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Para validar a UI sem backend/PostgreSQL: $env:VITE_MOCK='1'; npm run dev
const useMock = process.env.VITE_MOCK === '1'

export default defineConfig(async () => {
  const mock = useMock ? [(await import('./src/dev/mockApi.js')).mockApiPlugin()] : []
  return {
    plugins: [react(), tailwindcss(), ...mock],
    server: {
      port: 5173,
      proxy: useMock ? undefined : { '/api': 'http://127.0.0.1:5000' },
    },
  }
})
