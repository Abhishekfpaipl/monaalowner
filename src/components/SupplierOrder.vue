<template>
    <div class="list-group list-flushed rounded-0">
        <div v-for="(order, index) in orders" :key="index" class="list-group-item border-top-0">
            <div class="d-flex" @click="showSuppo(order)">
                <!-- <router-link :to="'/buyer-order-detail/' + order.id" class="text-decoration-none text-dark"> -->
                <div class="flex-fill d-flex align-items-center">
                    <img v-if="order.colors" class="rounded-circle" style="width: 60px; height: 60px;object-fit: cover;"
                        :src="`${publicPath}${order.colors[0].img}`" alt="">
                    <div class="flex-fill ms-2">
                        <p class="mb-0 fw-bold">{{ order.name }}</p>
                        <div class="d-flex justify-content-between">
                            <p class="mb-0">{{ order.sid }}</p>
                            <div class="d-flex gap-2">
                                <p class="mb-0">{{ order.qty }}</p>
                                <i v-if="order.status === 'Issued'" class="bi bi-dash-circle-dotted text-danger  "></i>
                                <i v-if="order.status === 'Partial'" class="bi bi-arrow-clockwise text-warning  "></i>
                                <i v-if="order.status === 'Completed'" class="bi bi-check2-circle text-success  "></i>
                                <i v-if="order.status === 'Cancelled'" class="bi bi-x-circle text-secondary  "></i>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- </router-link> -->
            </div>
        </div>
        <SuppOrderDetail></SuppOrderDetail>
    </div>
</template>

<script>
import SuppOrderDetail from './SuppOrderDetail.vue';

export default {
    name: 'BuyerOrder',
    data() {
        return {
            publicPath: process.env.BASE_URL
        };
    },
    computed: {
        orders() {
            return this.$store.getters.getSupplierOrders;
        },
        activeSuppo() {
            return this.$store.getters.getSuppo;
        }
    },
    methods: {
        showSuppo(suppo) {
            return this.$store.dispatch('selectSuppo', suppo);
        },
        hideSuppo() {
            return this.$store.dispatch('hideSuppo');
        },
    },
    components: { SuppOrderDetail }
}
</script>

<style lang="scss" scoped></style>