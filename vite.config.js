import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Hostel/'   // MUST match repo name exactly (case-sensitive)
})
