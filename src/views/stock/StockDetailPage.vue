<template>
    <div class="pb-5 mb-5">
        <div class="d-flex justify-content-between align-items-center bg-light p-2 px-3">
            <div class="fw-bold">
                <p class="mb-0 single-line">{{ stock.name }} </p>
                <p class="mb-0">Qty : {{ stock.qty }} @ {{ stock.rate }}</p>
            </div>
            <router-link to="/stock">
                <i class="bi bi-x fs-1"></i>
            </router-link>
        </div>
        <div class="border m-2">
            <img :src="`${publicPath}${stock.img}`" style="width: 100%; height: 250px; object-fit: fill;">
        </div>
        <div class="accordion" id="accordionExample">
            <div v-for="(color, index) in stock.colors" :key="index" class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed d-flex" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapseThree` + index" aria-expanded="false"
                        :aria-controls="`collapseThree` + index">
                        <img :src="`${publicPath}${color.img}`" class="rounded-circle border"
                            style="width: 60px; height: 60px;object-fit: cover;">
                        <div class="ms-2 w-100 fw-bold ">
                            <div class="single-line">
                                <span class="mb-0">{{ color.name }}</span> <span>W-{{ color.width }}</span>, <span>L-{{
                                    color.length
                                }}</span>
                            </div>
                            <p class="mb-0">Qty : {{ color.qty }} @ {{ stock.rate }}</p>
                        </div>
                    </button>
                </h2>
                <div :id="`collapseThree` + index" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="list-group list-flushed rounded-0">
                        <div v-for="(trans, transIndex) in color.transactions" :key="transIndex"
                            class="list-group-item px-2">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle border" style="width: 60px; height: 60px; object-fit: cover;"
                                        :src="`${publicPath}${trans.img}`" alt="">
                                    <div class="ms-2">
                                        <p class="mb-0 fw-bold">{{ trans.name }}</p>
                                        <span class=""
                                            :class="{ 'text-danger': trans.name.includes('Fabricator'), 'text-success': trans.name.includes('Supplier') }">
                                            Qty:{{ trans.qty }}</span> |
                                        <span
                                            :class="{ 'text-danger': trans.name.includes('Fabricator'), 'text-success': trans.name.includes('Supplier') }">
                                            Rate:{{ trans.rate }}</span>
                                    </div>
                                </div>
                                <i v-if="trans.name.includes('Fabricator')"
                                    class="bi bi-box-arrow-right fs-5 text-danger"></i>
                                <i v-if="trans.name.includes('Supplier')"
                                    class="bi bi-box-arrow-in-right fs-5 text-success"></i>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StockDetailPage',
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        stock() {
            let stockId = this.$route.params.stockId;
            return this.$store.getters.getStock(stockId)
        }
    }
}
</script>

<style lang="scss" scoped>
.single-line {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>