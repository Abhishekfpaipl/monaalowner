<template>
    <PaymentLinks></PaymentLinks>
    <div style="padding-bottom: 100px;">
        <div v-for="(payment, index) in payments" :key="index" class="mt-2">
            <!-- <router-link :to="'/orders/pending/' + order.id" class="text-decoration-none text-dark"> -->
            <div class="d-flex justify-content-between container align-items-center mb-2">
                <div class="d-flex align-items-center w-100 border-top p-2" style="padding-bottom: 0px !important;">
                    <div class="rounded-circle border d-flex flex-column justify-content-center align-items-center me-3"
                        style="height:60px; width:60px;">
                        <div style="line-height: 1rem;">{{ payment.date }}</div>
                        <small>{{ payment.month }}</small>
                    </div>
                    <div class="w-75">
                        <div class="d-flex justify-content-between align-items-center ">
                            <p class="m-0" style="font-size:14px;font-weight:500;">OID: {{ payment.id }} </p>
                        </div>
                       
                    </div>
                </div>
            </div>
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