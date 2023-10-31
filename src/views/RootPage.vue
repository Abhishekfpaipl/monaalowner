<template>
    <div class="d-flex flex-column justify-content-around align-items-center"
        style="height:100vh;background: linear-gradient(113deg, rgba(38,130,193,1) 31%, rgba(36,81,159,1) 97%);padding: 14px 12px ;">
        <div class="d-flex flex-column align-items-center justify-content-center">
            <img :src="logo" style="width: 75vw; object-fit: contain;grey">
            <p class="my-4 m-0 fw-bold text-white text-center icon">Monaal Creation</p>
        </div>
        <router-link to="/login-page" class="text-white text-decoration-none fs-4">
            Get Started
        </router-link>
        <router-link to="/dashboard" class="text-white text-decoration-none fs-4">
            Test Button
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'RootPage',
    data() {
        return {
            logo: 'img/logowhite.png'
        }
    }
}
</script>

<style lang="scss" scoped>
.icon {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 2rem;
}
</style>