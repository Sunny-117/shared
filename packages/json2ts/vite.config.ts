import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ohmytsVite } from '@ohmyts/vite'
import {resolve} from 'path'
const r = (p: string) => resolve(__dirname, p)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ohmytsVite({
      target: '/api',
      rootDir: r('@types'),
      proxyOptions: {
        target: 'https://autumnfish.cn',
      },
    }),],
})
