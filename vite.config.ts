import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import {} from 'vite-react-ssg'

export default defineConfig({
  plugins: [react()],
  base: '/',
  ssgOptions: {
    // It will cause Hydration Failed
    // formatting: 'minify',
  },
})
