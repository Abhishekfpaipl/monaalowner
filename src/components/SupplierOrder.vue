<template>
    <div class="list-group list-flushed rounded-0">
        <div v-for="(order, index) in orders" :key="index" class="list-group-item">
            <div class="d-flex" @click="showSuppo(order)">
                <!-- <router-link :to="'/buyer-order-detail/' + order.id" class="text-decoration-none text-dark"> -->
                <div class="d-flex align-items-center">
                    <img class="rounded-circle" style="width: 60px; height: 60px;object-fit: cover;"
                        :src="`${publicPath}${order.img}`" alt="">
                    <div class="ms-2">
                        <p class="mb-0 fw-bold">{{ order.name }}</p>
                        <span>{{ order.sid }}</span> | <span class="">Qty:{{ order.qty }}</span>
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