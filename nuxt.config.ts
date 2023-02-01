// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Zeldo Rando Trackdo',
            meta: [{ name: 'description', content: 'OOT Randomizer Location Tracker.' }],
            
        }
    },
    css: [
        '@/assets/main.css'
    ],
    ssr: false,
    telemetry: false,
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ],
})
