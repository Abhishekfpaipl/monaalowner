<template>
    <div class="pb-5 mb-5">
        <div class="d-flex justify-content-between align-items-center bg-light p-2 px-3 border-bottom">
            <div class="fw-bold">
                <p class="mb-0 double-line">{{ stock.sid }}</p>
                <!-- <p class="mb-0">Qty : {{ stock.qty }}</p> -->
            </div>
            <router-link to="/stock">
                <i class="bi bi-x fs-1"></i>
            </router-link>
        </div>

        <p class="mb-0 fw-bold single-line">{{ stock.name }}</p>

        <p class="text-center fw-bold my-3">Stock Summary</p>
        <table class="table table-bordered">
            <tbody>
                <tr>
                    <th class="text-start ps-3 table-secondary w-50">Total Stock</th>
                    <td class="text-start ps-3 w-50">{{ stock.qty }}</td>
                </tr>
                <tr>
                    <th class="text-start ps-3 table-secondary w-50">Avg. Buying Rate</th>
                    <td class="text-start ps-3 w-50"> ₹ 4545 / mtr</td>
                </tr>
                <tr>
                    <th class="text-start ps-3 table-secondary w-50">Avg. Selling Rate</th>
                    <td class="text-start ps-3 w-50"> ₹ 4545 / mtr</td>
                </tr>
            </tbody>
        </table>

        <p class="text-center fw-bold my-3 mt-5">Admin Controls</p>
        <table class="table table-bordered">
            <tbody>
                <tr>
                    <th class="text-start ps-3 table-secondary w-50">Set Buying Rate </th>
                    <td class="text-start ps-3 w-50"><input type="number" class="form-control"></td>
                </tr>
                <tr>
                    <th class="text-start ps-3 table-secondary w-50">Set Selling Rate</th>
                    <td class="text-start ps-3 w-50"><input type="number" class="form-control"></td>
                </tr>
                <tr>
                    <th class="text-start ps-3 table-secondary w-50">Set Status</th>
                    <td class="text-start ps-3 w-50">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="liveDraftSwitch" v-model="isLive"
                                @change="toggleMode">
                        </div>
                        <label class="form-check-label" for="liveDraftSwitch">{{ isLive ? 'Live' : 'Draft' }}</label>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- <div class="border m-2">
            <img :src="`${publicPath}${stock.img}`" style="width: 100%; height: 250px; object-fit: fill;">
        </div> -->
        <div class="accordion" id="accordionExample">
            <p class="fw-bold text-center my-3 mt-5">Stock Options</p>
            <div v-for="(color, index) in stock.colors" :key="index" class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed d-flex" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapseThree` + index" aria-expanded="false"
                        :aria-controls="`collapseThree` + index">
                        <img :src="`${publicPath}${color.image}`" class="rounded-circle border"
                            style="height: 60px; width: 60px; object-fit: fill;">

                        <div class="ms-2 w-100 fw-bold ">
                            <div class="single-line">
                                <span class="mb-0">{{ color.name }}</span> <span>W-{{ color.width }}</span>, <span>L-{{
                                    color.length
                                }}</span>
                            </div>
                            <p class="mb-0">Qty : {{ color.qty }}</p>
                        </div>
                    </button>
                </h2>
                <div :id="`collapseThree` + index" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="list-group list-flushed rounded-0">
                        <img :src="`${publicPath}${color.image}`" alt="">
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
            publicPath: process.env.BASE_URL,
            isLive: true
        }
    },
    computed: {
        stock() {
            let stockId = this.$route.params.stockId;
            return this.$store.getters.getStock(stockId)
        }
    },
    methods: {
        toggleMode() {
            // Handle your logic when the toggle button is changed
            if (this.isLive) {
                // Perform actions for live mode
                console.log('Switched to Live Mode');
            } else {
                // Perform actions for draft mode
                console.log('Switched to Draft Mode');
            }
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

.double-line {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}</style>