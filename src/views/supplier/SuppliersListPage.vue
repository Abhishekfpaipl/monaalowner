<template>
    <div style="padding-bottom: 80px;">
        <order-filter></order-filter>
        <div class="list-group list-flushed rounded-0 mt-2">
            <div v-for="(supplier, index) in suppliers" :key="index" class="list-group-item">
                <div class="p-2">
                    <router-link :to="'/supplier-detail/' + supplier.id"
                        class="flex-fill text-decoration-none text-dark w-100">
                        <div class="d-flex align-items-center w-100">
                            <img class="rounded-circle" style="width: 60px; height: 60px;object-fit: cover;"
                                :src="supplier.img" alt="">
                            <p class="ms-2 mb-0 fw-bold">{{ supplier.name }}</p>
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
        suppliers() {
            return this.$store.getters.getSuppliers;
        }
    },
    components: { OrderFilter }
}
</script>

<style lang="scss" scoped></style>