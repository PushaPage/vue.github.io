export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxt-test',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    router: {
        prefetchLinks: false,
        // linkActiveClass: 'my-custom-active-link',
        // linkExactActiveClass: 'my-custom-exact-active-link',
        // linkPrefetchedClass: 'nuxt-link-prefetched'
    },

    components: true,

    layoutTransition: {
        name: 'layout',
        mode: 'out-in',
        beforeEnter(el) {
            console.log(el)
            console.log('Before enter...')
        },
    },

    pageTransition: {
        name: 'page',
        mode: 'out-in',
        beforeEnter(el) {
            console.log(el)
            console.log('Before enter...')
        },
    },

    // loading: '~/components/LoadingBar.vue'

    loading: {
        color: 'blue',
        failedColor: 'red',
        height: '5px',
        // duration: 5e3,
        continuous: true,
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/node_modules/bootstrap/dist/css/bootstrap.min.css', '@/assets/main.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}
