import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/PF_P2_Portfolio_BSIT32E2_GA_RONAN-JUSTINE/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
})
