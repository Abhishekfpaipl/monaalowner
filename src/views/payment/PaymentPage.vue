<template>
    <div class="accordion" id="accordionExample" style="padding-bottom:80px">
        <div v-for="(payment, index) in payments" :key="index" class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <div class="rounded-circle border d-flex flex-column justify-content-center align-items-center"
                        style="height:60px; min-width:60px;">
                        <div style="line-height: 1rem;">{{ payment.date }}</div>
                        <small>{{ payment.month }}</small>
                    </div>
                    <div class="flex-fill d-flex justify-content-between me-3">
                        <p class="ms-2 mb-0 fw-bold single-line">{{ payment.name }}</p>
                        <p class="mb-0">{{ payment.amt }}</p>
                    </div>

                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p>{{ payment.id }}</p>
                </div>
            </div>
            <!-- 
            <div class="d-flex align-items-center">
                <div class="rounded-circle border d-flex flex-column justify-content-center align-items-center"
                    style="height:60px; min-width:60px;">
                    <div style="line-height: 1rem;">{{ payment.date }}</div>
                    <small>{{ payment.month }}</small>
                </div>
                <div class="ms-2 flex-fill">
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="mb-0 fw-bold single-line">{{ payment.name }} asd asdas dasd as sdasdasdfsdfsd</p>
                        <i v-if="payment.name.includes('Fabricator')" class="bi bi-caret-left fs-5 text-success"></i>
                        <i v-if="payment.name.includes('Supplier')" class="bi bi-caret-right fs-5 text-danger"></i>
                    </div>

                    <div v-if="payment.name.includes('Fabricator')" class=" text-success  single-line">
                        <small class="fw-bold">Receipt : {{ payment.amt }}</small> <small class="fw-bold"> | {{
                            payment.bills }} sdasdasd sd</small>

                    </div>
                    <div v-if="payment.name.includes('Supplier')" class="text-danger  single-line">
                        <small class="fw-bold">Payment : {{ payment.amt }}</small> <small class="fw-bold"> | {{
                            payment.bills }}</small>
                    </div>
                </div>
            </div> -->
        </div>
        <!-- <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div class="rounded-circle border d-flex flex-column justify-content-center align-items-center"
                            style="height:60px; min-width:60px;">
                            <div style="line-height: 1rem;">{{ payment.date }}</div>
                            <small>{{ payment.month }}</small>
                        </div>
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    </div>
                </div>
            </div>
        </div> -->

    </div>
</template>

<script>
export default {
    name: 'PaymentPage',
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

<style lang="scss" scoped>
.single-line {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.accordion-button:not(.collapsed) {
    background-color: transparent ;
}
.accordion-button:focus{
    border-color: none ;
}
.accordion{
    --bs-accordion-btn-focus-box-shadow: none;  
}
</style>