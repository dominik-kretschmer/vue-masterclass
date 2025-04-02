import {fileURLToPath, URL} from 'node:url'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'unplugin-vue-router/vite'
import fs from 'fs'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({

    plugins: [
        VueRouter(),
        vue(),
        vueDevTools(),
        tailwindcss(),
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
