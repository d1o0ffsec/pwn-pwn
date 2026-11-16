import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base: './'` makes the build work on GitHub Pages project sites
// regardless of the repository name (https://usuario.github.io/pwn-pwn/).
export default defineConfig({
  base: './',
  plugins: [react()],
})
