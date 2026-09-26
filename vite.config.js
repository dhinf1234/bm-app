import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set VITE_BASE_PATH=/repository-name/ for a project page; use / for a custom domain.
export default defineConfig({ base: process.env.VITE_BASE_PATH || '/', plugins: [react()] })