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
        <div v-if="Object.keys(activeSuppo).length !== 0">
            <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                aria-labelledby="staticBackdropLabel">
                <div class="d-flex justify-content-center align-items-center">
                    <div class=" w-100 d-flex justify-content-center align-items-center">
                        <p class="fw-bold text-center m-0">{{ activeSuppo.sid }}</p>
                    </div>
                    <div class="d-flex justify-content-end w-100">
                        <button type="button" class="btn" @click="hideSuppo()"><i class="bi bi-x fs-3"></i></button>
                    </div>
                </div>
                <div class="offcanvas-body">
                    <div class="">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        PO Terms
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="row">
                                            <div class="col-6 border p-3">PO No.</div>
                                            <div class="col-6 border p-3">{{ activeSuppo.poTerms.no }}</div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6 border p-3">PO Issued Date</div>
                                            <div class="col-6 border p-3">{{ activeSuppo.poTerms.issue }}</div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6 border p-3">PO Expiry Date</div>
                                            <div class="col-6 border p-3">{{ activeSuppo.poTerms.expiry }}</div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6 border p-3">Material</div>
                                            <div class="col-6 border p-3">{{ activeSuppo.poTerms.material }}</div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6 border p-3">Style</div>
                                            <div class="col-6 border p-3">{{ activeSuppo.poTerms.style }}</div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6 border p-3">Rate</div>
                                            <div class="col-6 border p-3">{{ activeSuppo.poTerms.rate }}</div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6 border p-3">Total Qty</div>
                                            <div class="col-6 border p-3">{{ activeSuppo.poTerms.qty }}</div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6 border p-3">Delivery Mode</div>
                                            <div class="col-6 border p-3">{{ activeSuppo.poTerms.delivery }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion" id="accordionExample">
                            <div v-for="(color, index) in activeSuppo.colors" :key="index" class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button collapsed d-flex p-2" type="button"
                                        data-bs-toggle="collapse" :data-bs-target="`#collapseThree` + index"
                                        aria-expanded="false" :aria-controls="`collapseThree` + index">
                                        <img :src="`${publicPath}${color.img}`" class="rounded-circle"
                                            style="width: 60px; height: 60px;object-fit: cover;">
                                        <div class="d-flex justify-content-between ms-2 w-100">
                                            <p class="mb-0">{{ color.name }}</p>
                                            <p class="mb-0 me-2">{{ color.qty }}</p>
                                        </div>
                                    </button>
                                </h2>
                                <div :id="`collapseThree` + index" class="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="card card-body ">
                                            <div class="d-flex justify-content-center">
                                                <img :src="`${publicPath}${color.colorImg}`"
                                                    style="width:300px; height: 170px;" alt="">
                                            </div>
                                            <span class="mt-2">Width : {{ color.width }}, Length : {{ color.length }}</span>
                                            <p>Note :</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button class="mt-2  p-2 bg-light w-100" type="button" data-bs-toggle="collapse" data-bs-target="#note"
                        aria-expanded="false" aria-controls="note">
                        <b> Additional Note</b>
                    </button>
                    <div class="collapse" id="note">
                        <div class="card card-body">
                            There is no additional note
                        </div>
                    </div>

                    <button class="mt-2  p-2 bg-light w-100" type="button" data-bs-toggle="collapse" data-bs-target="#terms"
                        aria-expanded="false" aria-controls="terms">
                        <b>PO Terms tolerance</b>
                    </button>
                    <div class="collapse" id="terms">
                        <div class="card card-body">
                            <div class="d-flex justify-content-between">
                                <p>Rate</p>
                                <p>5 % Tolerance</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Order Quantity</p>
                                <p>5 % Tolerance</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Rate</p>
                                <p>5 % Tolerance</p>
                            </div>

                        </div>
                    </div>

                    <button class="mt-2  p-2 bg-light w-100" type="button" data-bs-toggle="collapse"
                        data-bs-target="#payment" aria-expanded="false" aria-controls="payment">
                        <b>Payment Terms</b>
                    </button>
                    <div class="collapse" id="payment">
                        <div class="card card-body">
                            45 Days of Payment Cycle
                        </div>
                    </div>

                    <button class="mt-2  p-2 bg-light w-100" type="button" data-bs-toggle="collapse"
                        data-bs-target="#rejection" aria-expanded="false" aria-controls="rejection">
                        <b>Rejection Terms</b>
                    </button>
                    <div class="collapse" id="rejection">
                        <div class="card card-body">
                            Checking Charges will be charged up rejected goods. And Godown Charges will also be charged up
                            on rejected goods if they are not Picking-Back within 10 days of rejection.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BuyerOrder',
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        orders() {
            return this.$store.getters.getOrders
        },
        activeSuppo(){
            return this.$store.getters.getSuppo
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
}
</script>

<style lang="scss" scoped></style>