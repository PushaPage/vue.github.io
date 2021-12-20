<template>
    <section :style="{ background: 'rgb(255, 214, 10)' }" class="flex-fill">
        <div class="container pt-5">
            <h1>User {{ user.name }}</h1>

            <hr />

            <h3>{{ user.email }}</h3>
        </div>
    </section>
</template>

<script>
export default {
    name: 'User',
    validate({ params }) {
        return /^\d+$/.test(params.user)
    },

    async asyncData({ $axios, params }) {
        const user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.user}`)
        return { user }
    },

    mounted() {
        console.log('Mouted')
    },
}
</script>
