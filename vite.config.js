import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Vercel and local dev use "/". GitHub Pages sets VITE_BASE_PATH to "/repo".
function resolveBase() {
  const pagesBase = process.env.VITE_BASE_PATH
  if (!pagesBase) return '/'
  return pagesBase.endsWith('/') ? pagesBase : `${pagesBase}/`
}

export default defineConfig({
  base: resolveBase(),
  plugins: [react()],
})
