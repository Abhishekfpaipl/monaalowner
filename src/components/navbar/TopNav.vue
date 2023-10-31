<template>
    <div class="border-bottom">
        <div class="d-flex justify-content-between align-items-center p-2 bg-light">
            <div class="d-flex gap-2 align-items-center">
                <img :src="`${publicPath}${logo}`" style="height: 40px; width: 40px;object-fit: contain;">
                <p class="mb-0 icon">Monaal</p>
            </div>
            <!-- <p class="mb-0">{{ pageTitle }}</p> -->
            <div class="d-flex align-items-center">
                <router-link to="/update-page" class="text-dark">
                    <i class="bi bi-bell fs-5 me-2"></i>
                </router-link>
                <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample">
                    <i class="bi bi-list fs-5"></i>
                </button>
            </div>
        </div>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body p-0">
                <ul class="list-group list-flushed rounded-0">
                    <router-link to="/login-page" class="list-group-item">Login</router-link>
                    <router-link to="/signup" class="list-group-item">Sign Up</router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopNav',
    data() {
        return {
            pageTitle: 'No Title',
            publicPath: process.env.BASE_URL,
            logo: 'img/logo.png',
        }
    },
    created() {
        this.setPageTitle(this.$route.name);
    },
    watch: {
        $route(newRoute) {
            this.setPageTitle(newRoute.name);
        },
    },
    methods: {
        setPageTitle(routeName) {
            this.pageTitle = routeName || 'No Title';
        },
    },
}
</script>

<style lang="scss" scoped>
.icon {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 1.5rem;
    background: -webkit-linear-gradient(#273990, #24aae3);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
}
</style>