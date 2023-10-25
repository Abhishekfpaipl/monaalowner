<template>
    <div v-for="(supbill, index) in supbills" :key="index" @click="showSupbill(supbill)"
        class="d-flex w-100 py-2 border-bottom container">
        <div class="d-flex  w-100 ">
            <div class="rounded-circle border d-flex flex-column justify-content-center align-items-center"
                style="height:60px; min-width:60px;">
                <div style="line-height: 1rem;">{{ supbill.date }}</div>
                <small>{{ supbill.month }}</small>
            </div>
            <div>
                <div class="w-100">
                    <p class="m-0 ps-2  fw-bold">{{ supbill.billno }}</p>
                    <span :class="supbill.status">{{ supbill.statustext }}</span>
                </div>
            </div>
        </div>
        <div class="fw-bold">
            <div class="d-flex">
                <p class="m-0 ps-2  fw-bold">{{ supbill.amount }}</p>
            </div>
        </div>
    </div>

    <div v-if="Object.keys(activeSupbill).length !== 0">
        <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
            aria-labelledby="staticBackdropLabel">
            <div class="d-flex justify-content-center align-items-center border-bottom pb-1">
                <div class=" w-100 d-flex ms-3 align-items-center">
                    <b class="m-0">{{ activeSupbill.billno }}</b>
                </div>
                <div class="d-flex justify-content-end w-100">
                    <button type="button" class="btn" @click="hideSupbill()"><i class="bi bi-x fs-3"></i></button>
                </div>
            </div>
            <div class="offcanvas-body">
                <div>
                    <table class="table">
                        <tbody>
                            <tr v-for="(order, index) in orders" :key="index">
                                <td @click="showSuppo(order)" class="fw-bold">{{ order.sid }}</td>
                                <td>{{ order.qty }}</td>
                            </tr>
                        </tbody>
                        <SuppOrderDetail></SuppOrderDetail>
                        <tbody>
                            <tr>
                                <td class="fw-bold text-success">Total Bill Amnt</td>
                                <td class="text-success">{{ activeSupbill.totalAmnt }}</td>
                            </tr>
                            <tr>
                                <td class="fw-bold text-danger">Debit Note Amnt</td>
                                <td class="text-danger">{{ activeSupbill.totalAmnt }}</td>
                            </tr>
                            <tr>
                                <td class="fw-bold text-success">Net Amnt Payable</td>
                                <td class="text-success">{{ activeSupbill.totalAmnt }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button collapsed d-flex p-2 py-3" type="button"
                                data-bs-toggle="collapse" :data-bs-target="`#collapseThree` + index" aria-expanded="false"
                                :aria-controls="`collapseThree` + index">
                                <b>Note</b>
                            </button>
                        </h2>
                        <div :id="`collapseThree` + index" class="accordion-collapse collapse" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore sequi
                                    magni eveniet, provident nulla harum, distinctio minima fugit corporis cupiditate
                                    illo enim mollitia, nesciunt culpa incidunt esse amet praesentium?</p>
                            </div>
                        </div>
                    </div>
                </div>


                <p class="text-center fw-bold py-2 fs-4">
                    Supporting Document
                </p>
                <div class=" card card-body">
                    <p class="text-center">Invoice</p>
                    <div class="d-flex justify-content-center">
                        <img :src="`${publicPath}${activeSupbill.invoice}`" style="width: 200px; height: 170px;" alt="">
                    </div>

                    <p class="text-center">Bilty</p>
                    <div class="d-flex justify-content-center">
                        <img :src="`${publicPath}${activeSupbill.bilty}`" style="width: 200px; height: 170px;" alt="">
                    </div>

                    <p class="text-center">e-Way Bill</p>
                    <div class="d-flex justify-content-center">
                        <img :src="`${publicPath}${activeSupbill.billimg}`" style="width: 200px; height: 170px;" alt="">
                    </div>

                    <p class="text-center">Debit note</p>
                    <div class="d-flex justify-content-center">
                        <img :src="`${publicPath}${activeSupbill.debit}`" style="width: 200px; height: 170px;" alt="">
                    </div>

                    <p class="text-center">Bank Transfer</p>
                    <div class="d-flex justify-content-center">
                        <img :src="`${publicPath}${activeSupbill.bank}`" style="width: 200px; height: 170px;" alt="">
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
import SuppOrderDetail from './SuppOrderDetail.vue';

export default {
    name: 'BillsList',
    data() {
        return {
            publicPath: process.env.BASE_URL
        };
    },
    computed: {
        orders() {
            return this.$store.getters.getSupplierOrders;
        },
        supbills() {
            return this.$store.getters.getSupbills;
        },
        activeSupbill() {
            return this.$store.getters.getSupbill;
        },
    },
    methods: {
        showSupbill(supbill) {
            return this.$store.dispatch('selectSupbill', supbill);
        },
        hideSupbill() {
            return this.$store.dispatch('hideSupbill');
        },
        showSuppo(order) {
            return this.$store.dispatch('selectSuppo', order);
        },
    },
    components: { SuppOrderDetail }
}
</script>

<style lang="scss" scoped></style>