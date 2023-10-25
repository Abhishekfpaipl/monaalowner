<template>
    <div class="border-bottom">
        <div class="d-flex justify-content-between align-items-center p-2 bg-light">
            <p class="mb-0">{{ pageTitle }}</p>
            <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample">
                <i class="bi bi-list fs-5"></i>
            </button>
        </div>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body p-0">
                <ul class="list-group list-flushed rounded-0">
                    <router-link to="/login" class="list-group-item">Login</router-link>
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

<style lang="scss" scoped></style>