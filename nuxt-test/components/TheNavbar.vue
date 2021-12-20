<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Nuxt SSR</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarNavAltMarkup" class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/">Home</nuxt-link>
                    <nuxt-link active-class="active" class="nav-link" to="/about">About</nuxt-link>
                    <nuxt-link active-class="active" class="nav-link" to="/users">Users</nuxt-link>
                    <nuxt-link v-if="!hasToken" active-class="active" class="nav-link" to="/login">Login</nuxt-link>
                    <a v-else href="#" class="nav-link" @click.prevent="logout">logout</a>
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'TheNavbar',
    computed: {
        hasToken() {
            return this.$store.getters.hasToken
        },
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
            this.$router.push('/login')
        },
    },
}
</script>

<style>
/* .nuxt-link-active {
    font-weight: bold;
    color: #fff;
} */
/* exact link will show the primary color for only the exact matching link */
/* .nuxt-link-exact-active {
    color: #ffff00;
} */
</style>
