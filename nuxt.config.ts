// https://nuxt.com/docs/api/configuration/nuxt-config
import type {NuxtPage} from "@nuxt/schema";

export default defineNuxtConfig({
    tailwindcss: undefined,
    $development: undefined, $env: undefined, $meta: undefined, $production: undefined, $test: undefined,
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
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts'
    ],
    css: [
        "@/assets/styles/main.scss",
    ],
    runtimeConfig: {
        public: {
            baseURL: process.env.NUXT_API_URL
        }
    },
    i18n: {
        vueI18n: './i18n.config.ts'
    },
    googleFonts: {
        families: {
            Montserrat: [400,500,600,700,800,900]
        }
    },
    // @ts-ignore
    piniaPersistedstate: {
        storage: 'localStorage'
    },
    hooks: {
        'pages:extend' (pages) {
            function setMiddleware (pages: NuxtPage[]) {
                for (const page of pages) {
                    if (page.name?.includes('cabinet')) {
                        page.meta ||= {}
                        page.meta.middleware = ['auth']
                    }
                    if (page.children) {
                        setMiddleware(page.children)
                    }
                }
            }
            setMiddleware(pages)
        }
    }
})
