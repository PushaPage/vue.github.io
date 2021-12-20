<template>
    <div class="wrap-helper">
        <TheNavbar />
        <main class="wrap-helper__inner">
            <Nuxt />
        </main>
    </div>
</template>

<script>
export default {}
</script>
<style lang="scss">
.wrap-helper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #fff;

    &__inner {
        flex: 1 0 auto;
        display: flex;
        flex-direction: column;
    }
}
</style>
