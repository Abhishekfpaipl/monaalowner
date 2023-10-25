<template>
    <div class="list-group list-flushed rounded-0">
        <div v-for="(bill, index) in bills" :key="index" class="list-group-item">
            <div class="d-flex" @click="showBill(bill)">
                <!-- <router-link :to="'/bill-detail/' + bill.id" class="text-decoration-none text-dark"> -->
                <div class="d-flex align-items-center">
                    <img class="rounded-circle" style="width: 60px; height: 60px;object-fit: cover;"
                        :src="`${publicPath}${bill.img}`" alt="">
                    <div class="ms-2">
                        <p class="mb-0 fw-bold">{{ bill.name }}</p>
                        <span>{{ bill.sid }}</span> | <span class="">Qty:{{ bill.qty }}</span>
                    </div>
                </div>
                <!-- </router-link> -->
            </div>
        </div>
    </div>
    <div v-if="Object.keys(activeBill).length !== 0">
        <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
            aria-labelledby="staticBackdropLabel">
            <div class="d-flex justify-content-between align-items-center px-2">
                <p class="fw-bold text-center m-0">{{ activeBill.sid }}</p>
                <i class="bi bi-x fs-3" @click="hideBill()"></i>
            </div>
            <div class="offcanvas-body">
                <div class="">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Billing Details
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-6 border p-3">Bill No.</div>
                                            <div class="col-6 border p-3">{{ activeBill.poTerms.no }}</div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6 border p-3">Bill Date</div>
                                            <div class="col-6 border p-3">{{ activeBill.poTerms.issue }}</div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6 border p-3">Gross Bill Amount</div>
                                            <div class="col-6 border p-3">{{ activeBill.poTerms.grossBill }}</div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6 border p-3">GST @ 5%</div>
                                            <div class="col-6 border p-3">{{ activeBill.poTerms.gst }}</div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6 border p-3">Total Bill Amount</div>
                                            <div class="col-6 border p-3">{{ activeBill.poTerms.totalBill }}</div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6 border p-3">Debit Note Amount</div>
                                            <div class="col-6 border p-3">{{ activeBill.poTerms.debitNote }}</div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6 border p-3">Total Amount Payable</div>
                                            <div class="col-6 border p-3">{{ activeBill.poTerms.totalAmt }}</div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6 border p-3">Bill Status</div>
                                            <div class="col-6 border p-3">{{ activeBill.poTerms.billStatus }}</div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6 border p-3">Note</div>
                                            <div class="col-6 border p-3">{{ activeBill.poTerms.note }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion" id="accordionExample">
                        <div v-for="(color, index) in activeBill.colors" :key="index" class="accordion-item">
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
                                            <img :src="`${publicPath}${color.colorImg}`" style="width:300px; height: 170px;"
                                                alt="">
                                        </div>
                                        <span class="mt-2">Width : {{ color.width }}, Length : {{ color.length }}</span>
                                        <p>Note :</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-3 d-flex justify-content-center">
                    <button class="btn btn-outline-dark" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Supporting Document
                    </button>
                </div>

                <div class="collapse mt-2" id="collapseExample">
                    <div class="card card-body">
                        <p class="text-center">Invoice</p>
                        <div class="d-flex justify-content-center">
                            <img :src="`${publicPath}${activeBill.invoice}`" style="width: 200px; height: 170px;" alt="">
                        </div>

                        <p class="text-center">Bilty</p>
                        <div class="d-flex justify-content-center">
                            <img :src="`${publicPath}${activeBill.bilty}`" style="width: 200px; height: 170px;" alt="">
                        </div>

                        <p class="text-center">e-Way Bill</p>
                        <div class="d-flex justify-content-center">
                            <img :src="`${publicPath}${activeBill.billimg}`" style="width: 200px; height: 170px;" alt="">
                        </div>

                        <p class="text-center">Debit note</p>
                        <div class="d-flex justify-content-center">
                            <img :src="`${publicPath}${activeBill.debit}`" style="width: 200px; height: 170px;" alt="">
                        </div>

                        <p class="text-center">Bank Transfer</p>
                        <div class="d-flex justify-content-center">
                            <img :src="`${publicPath}${activeBill.bank}`" style="width: 200px; height: 170px;" alt="">
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BillsList',
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        bills() {
            return this.$store.getters.getBills
        },
        activeBill() {
            return this.$store.getters.getBill
        },
    },
    methods: {
        showBill(bill) {
            return this.$store.dispatch('selectBill', bill);
        },
        hideBill() {
            return this.$store.dispatch('hideBill');
        },
    },
}
</script>

<style lang="scss" scoped></style>