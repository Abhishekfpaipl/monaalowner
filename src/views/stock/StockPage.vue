<template>
    <!-- <div class="list-group list-flushed rounded-0">
        <div v-for="(stock, index) in stocks" :key="index" class="list-group-item">
            <div class="d-flex">
                <router-link :to="'/stock-detail/' + stock.id" class="text-decoration-none text-dark">
                    <div class="d-flex align-items-center">
                        <img class="rounded-circle" style="width: 60px; height: 60px;object-fit: cover;"
                            :src="`${publicPath}${stock.img}`" alt="">
                        <div class="d-flex justify-content-between">
                            <p class="ms-2 mb-0 fw-bold">{{ stock.name }}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div> -->
    <div class="container pb-5 mb-5">
        <OrderFilter></OrderFilter>
        <div class="row row-cols-2 g-3 mt-1 border-top">
            <div v-for="(stock, index) in stocks" :key="index" class="col">
                <router-link :to="'/stock-detail/' + stock.id" class="text-decoration-none text-dark">
                    <div class="card">
                        <img v-if="stock.colors" class="card-img-top" :src="`${publicPath}${stock.colors[0].image}`"
                            style="max-height: 150px;">
                        <div class="card-body p-2 ">
                            <div id="scroll" class="d-flex align-items-center flex-nowrap overflow-x-scroll">
                                <div class="rounded-circle border d-flex align-items-center justify-content-center text-bg-primary"
                                    style="height: 30px; min-width: 30px;">{{ stock.colors.length }}
                                </div>
                                <div v-for="(color, colorIndex) in stock.colors" :key="colorIndex" class="m-1">
                                    <img :src="`${publicPath}${color.image}`" class="rounded-circle border"
                                        style="height: 30px; width: 30px; object-fit: fill;">
                                </div>
                            </div>
                            <small><small class="single-line">{{ stock.name }}</small></small>
                        </div>
                        <div class="card-footer p-2">
                            <p class="mb-0">{{ stock.qty }}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import OrderFilter from '@/components/OrderFilter.vue';

export default {
    name: 'StockPage',
    data() {
        return {
            publicPath: process.env.BASE_URL
        };
    },
    computed: {
        stocks() {
            return this.$store.getters.getStocks;
        }
    },
    components: { OrderFilter }
}
</script>

<style lang="scss" scoped>
.single-line {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

#scroll::-webkit-scrollbar {
    background-color: none;
    display: none;
}
</style>