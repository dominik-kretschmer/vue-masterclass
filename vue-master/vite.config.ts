import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'unplugin-vue-router/vite'
import fs from 'fs'
import path from 'path'

export default defineConfig({
    plugins: [
        VueRouter(),
        vue(),
        vueDevTools(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        https: {
            key: fs.readFileSync(path.resolve(__dirname, 'cert/key.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, 'cert/cert.pem')),
        },
        port: 5173,
        host: 'localhost',
    },
})
