import { defineConfig } from "vite";
import {resolve} from "path"
import react from "@vitejs/plugin-react"
export default defineConfig({
    base: process.env.NODE_ENV === 'production' ? '' : '',
    publicDir: 'public',
    resolve: {
        alias: {
            '/@': resolve(__dirname, './src')
        }
    },
    plugins: [
        react()
    ],
})