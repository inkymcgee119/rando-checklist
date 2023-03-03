// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Zeldo: Randomizer Checklist',
            meta: [{ name: 'description', content: 'Randomizer Location Checklist.' }],    
            link: [{ rel: 'icon', type: 'image/svg', href: '/favicon.svg' }]        
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
