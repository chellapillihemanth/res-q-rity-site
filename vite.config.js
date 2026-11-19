import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Also expose WEB3FORMS_* variables (the contact form key) to the site, so the Vercel variable can be named WEB3FORMS_KEY.
  envPrefix: ['VITE_', 'WEB3FORMS_'],
})
