// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    ssr: false,
    app: {
        head: {
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
            ]
        }
    },
    modules: [
        '@nuxt/ui',
        '@nuxtjs/i18n',
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts'
    ],
    css: [
        "@/assets/styles/main.scss",
    ],
    runtimeConfig: {
        public: {
            baseURL: process.env.NUXT_API_URL,
            socketIoServerUrl: process.env.NUXT_SOCKET_IO_SERVER_URL,
            socketIoServerUrl2: process.env.NUXT_SOCKET_IO_SERVER_URL_2,
            underMaintenance: process.env.NUXT_UNDER_MAINTENANCE,
            doNotOpenMatch: process.env.NUXT_DO_NOT_OPEN_MATCH,
        }
    },
    i18n: {
        vueI18n: './i18n.config.ts'
    },
    googleFonts: {
        families: {
            Montserrat: [400,500,600,700,800,900]
        }
    }
})
