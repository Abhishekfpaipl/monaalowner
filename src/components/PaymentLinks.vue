<template>
    <div>
        <div class="nav nav-tabs align-items-center pt-2 d-flex justify-content-around px-2 w-100 bg-white"
            style="font-size: 16px;z-index: 12; height: 63px; font-weight: 500;"
            id="nav-tab" role="tablist">
            <router-link class="nav-link d-flex flex-column align-items-center" to="pending"
                :class="currentRouteName === 'PendingPage' ? 'active' : ''"><i class="bi bi-hourglass"></i> <small><small>Balance</small></small>
            </router-link>
            <router-link class="nav-link d-flex flex-column align-items-center " to="completed"
                :class="currentRouteName === 'CompletedPage' ? 'active' : ''"><i class="bi bi-clock-history"></i> <small><small>Recent</small></small></router-link>
            <slot></slot>
        </div>

    </div>
</template>
<script>
export default {
    name: 'OrdinaryLink',
    props: ['active'],
    computed: {
        currentRouteName() {
            return this.$route.name;
        }

    }
}
</script>
<style>
.nav-link {
    color: grey
}
</style>