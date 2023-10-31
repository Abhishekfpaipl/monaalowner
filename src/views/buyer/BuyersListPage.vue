<template>
    <div style="padding-bottom: 80px;">
        <order-filter></order-filter>
        <div class="list-group list-flushed rounded-0 mt-2 ">
            <div v-for="(buyer, index) in buyers" :key="index" class="list-group-item">
                <div class="d-flex p-2">
                    <router-link :to="'/buyer-detail/' + buyer.id" class="text-decoration-none text-dark">
                        <div class="d-flex align-items-center">
                            <img class="rounded-circle" style="width: 60px; height: 60px;object-fit: cover;"
                                :src="buyer.img" alt="">
                            <p class="ms-2 mb-0 fw-bold">{{ buyer.name }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OrderFilter from '@/components/OrderFilter.vue';

export default {
    name: 'BuyersPage',
    computed: {
        buyers() {
            return this.$store.getters.getBuyers;
        }
    },
    components: { OrderFilter }
}
</script>

<style lang="scss" scoped></style>