// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Zeldo Tracker',
            meta: [{ name: 'description', content: 'OOT Randomizer Location Tracker.' }],
            
        }
    },
    ssr: false,
    telemetry: false,
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ]
})
