<template>
    <OrdersLinks>
        <div class="mx-1 d-flex flex-column align-items-center" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExampleOne" aria-controls="offcanvasExampleOne">
            <i class="bi bi-arrow-down-up"></i>
            <small><small>Sort</small></small>
        </div>
        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasExampleOne"
            aria-labelledby="offcanvasExampleLabel" style="height: 50vh;">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Sort</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div>
                    <div class="w-100">
                        <div class="d-flex flex-column" data-bs-dismiss="offcanvas">
                            <div class="d-flex justify-content-between" v-for="(paragraph, index) in paragraphs"
                                :key="index">
                                <p :style="{ color: paragraphColor(paragraph) }" @click="changeColorAndCheck(paragraph)">
                                    {{ paragraph.text }}
                                </p>
                                <p v-if="paragraph.selected" class="tick-mark"><i class="bi bi-check2"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column align-items-center" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch"
            aria-controls="offcanvasSearch">
            <i class="bi bi-search"></i>
            <small><small>Search</small></small>
        </div>
        <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasSearch" aria-labelledby="offcanvasSearchLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasSearchLabel">Offcanvas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="form-outline d-flex" style="border-radius: 0% !important;">
                    <input type="search" id="form1" class="form-control" placeholder="Search"
                        style="border-top-right-radius: 0px !important; border-bottom-right-radius: 0px; " />
                    <button type="button" class="btn btn-primary"
                        style="border-top-left-radius: 0% !important; border-bottom-left-radius: 0%;">
                        <i class="bi bi-search"></i>
                    </button>
                </div>
            </div>
        </div>
    </OrdersLinks>
    <div class="list-group list-flushed " style="padding-bottom: 100px;">
        <div v-for="(payment, index) in payments" :key="index" class="list-group-item  test">
            <div class="d-flex align-items-center" @click="showSuppo(payment)">
                <img :src="`${publicPath}${payment.img}`" style="height: 60px; width: 60px; object-fit: fill;"
                    class="rounded-circle border">
                <!-- <div class="rounded-circle border d-flex flex-column justify-content-center align-items-center me-3"
                    style="height:60px; width:60px;">
                    <div style="line-height: 1rem;">{{ payment.date }}</div>
                    <small>{{ payment.month }}</small>
                </div> -->
                <div class="flex-fill ms-2 fw-bold">
                    <p class="mb-0 single-line">{{ payment.fabric }}</p>
                    <small class="d-flex justify-content-between">
                        <p class="mb-0">{{ payment.pono }}</p>
                        <p class="mb-0 ">{{ payment.qty }} @ {{ payment.price }}</p>
                    </small>
                </div>
            </div>
        </div>
    </div>
    <SuppOrderDetail></SuppOrderDetail>
</template>

<script>
import SuppOrderDetail from '@/components/SuppOrderDetail.vue';
import OrdersLinks from '@/components/OrdersLinks.vue';

export default {
    components: { OrdersLinks, SuppOrderDetail },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            paragraphs: [
                { text: 'By Latest Date', selected: false },
                { text: 'By Oldest Date', selected: false },
                { text: 'By Lowest Amount', selected: false },
                { text: 'By Highest Amount', selected: false }
            ],
        }
    },
    computed: {
        payments() {
            return this.$store.getters.getOrderPayments
        }
    },
    methods: {
        showSuppo(payment) {
            return this.$store.dispatch('selectSuppo', payment);
        },
        hideSupbill() {
            return this.$store.dispatch('hideSupbill');
        },
        paragraphColor(paragraph) {
            return paragraph.selected ? 'black' : 'gray';
        },
        changeColorAndCheck(clickedParagraph) {
            for (const paragraph of this.paragraphs) {
                if (paragraph === clickedParagraph) {
                    paragraph.selected = true;
                } else {
                    paragraph.selected = false;
                }
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.test:nth-child(even) {
    background-color: #F8F9FA;
}

.single-line {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>