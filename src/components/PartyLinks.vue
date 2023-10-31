<template>
    <div>
        <div class="nav nav-tabs align-items-center pt-2 d-flex justify-content-around px-2 position-fixed w-100 bg-white top-0 border border-2"
            style="font-size: 16px;z-index: 12; height: 63px; font-weight: 500;" id="nav-tab" role="tablist">
            <router-link class="nav-link" to="parties" :class="currentRouteName === 'PartyPage' ? 'active' : ''">Buyer
            </router-link>
            <router-link class="nav-link " to="party-suppliers"
                :class="currentRouteName === 'SuppliersPage' ? 'active' : ''">Supplier</router-link>
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