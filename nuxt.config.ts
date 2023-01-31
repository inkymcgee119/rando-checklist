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
        'primevue/resources/themes/mdc-light-deeppurple/theme.css',
        'primevue/resources/primevue.css',
        '@/assets/main.css'
    ],
    ssr: false,
    telemetry: false,
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ],
    build: {
        transpile: ['primevue']
    }
})
