<template>
    <PaymentLinks></PaymentLinks>
    <div class="list-group list-flushed" style="padding-bottom: 100px;">
        <div v-for="(payment, index) in payments" :key="index" class="list-group-item mt-2">
            <!-- <router-link :to="'/orders/pending/' + order.id" class="text-decoration-none text-dark"> -->
            <div class="d-flex align-items-center">
                <div class="rounded-circle border d-flex flex-column justify-content-center align-items-center me-3"
                    style="height:60px; width:60px;">
                    <div style="line-height: 1rem;">{{ payment.date }}</div>
                    <small>{{ payment.month }}</small>
                </div>
                <div class="ms-2 fw-bold">
                    <p class="mb-0">{{ payment.name }}</p>
                    <span>{{ payment.amt }}</span> | <span class="">{{ payment.bills }}</span>
                </div>
            </div>
            <!-- <div class="d-flex justify-content-between container align-items-center mb-2">
                <div class="d-flex align-items-center w-100 border-top p-2" style="padding-bottom: 0px !important;">
                    <div class="rounded-circle border d-flex flex-column justify-content-center align-items-center me-3"
                        style="height:60px; width:60px;">
                        <div style="line-height: 1rem;">{{ payment.date }}</div>
                        <small>{{ payment.month }}</small>
                    </div>
                </div>
            </div> -->
            <!-- </router-link> -->
        </div>
    </div>
</template>

<script>
import PaymentLinks from '@/components/PaymentLinks.vue';

export default {
    components: { PaymentLinks },
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        payments() {
            return this.$store.getters.getPayments
        }
    }
}
</script>

<style lang="scss" scoped></style>