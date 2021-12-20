<template>
    <section class="flex-fill" :style="{ background: 'rgb(229, 229, 234)' }">
        <div class="container">
            <h1 class="mt-5 text-center">Hello word</h1>
        </div>
    </section>
</template>

<script>
export default {
    name: 'IndexPage',
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
    },
}
</script>
