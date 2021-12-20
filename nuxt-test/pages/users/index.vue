<template>
    <section class="flex-fill" :style="{ background: 'rgb(28, 28, 30)', color: '#fff' }">
        <div class="container">
            <h1 class="mt-5">{{ pageTitle }}</h1>
            <ul>
                <li v-for="user of users" :key="user.id">
                    <a href="#" @click.prevent="openUser(user.id)">{{ user.name }}</a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    asyncData(context) {
        console.log(context)
    },
    async fetch({ store }) {
        if (!store.getters['users/users'].length) {
            await store.dispatch('users/fetch')
        }
    },
    computed: {
        users() {
            return this.$store.getters['users/users']
        },
    },

    // async asyncData({ $axios }) {
    //     const users = await $axios.$get('https://jsonplaceholder.typicode.com/users')
    //     return { users }
    // },
    data: () => ({
        pageTitle: 'Users page',
    }),
    // async mounted() {
    //     this.users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
    // },
    methods: {
        openUser(id) {
            this.$router.push('/users/' + id)
        },
    },
}
</script>
