<template>
    <div style="padding-bottom: 80px;">
        <order-filter></order-filter>
        <div class="list-group list-flushed rounded-0 mt-2 ">
            <div v-for="(party, index) in parties" :key="index" class="list-group-item">
                <div class="d-flex p-2">
                    <router-link v-if="party.type === 'Buyer'" :to="'/buyer-detail/' + party.id + '/chat'"
                        class="flex-fill text-decoration-none text-dark">
                        <div class="d-flex align-items-center">
                            <img class="rounded-circle" style="width: 60px; height: 60px;object-fit: cover;"
                                :src="party.img" alt="">
                            <div>
                                <p class="ms-2 mb-0 fw-bold single-line">{{ party.name }}</p>
                                <small class="ms-2 mb-0 ">{{ party.type }}</small>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-if="party.type === 'Supplier'" :to="'/supplier-detail/' + party.id + '/chat'"
                        class="flex-fill text-decoration-none text-dark">
                        <div class="d-flex align-items-center">
                            <img class="rounded-circle" style="width: 60px; height: 60px;object-fit: cover;"
                                :src="party.img" alt="">
                            <div>
                                <p class="ms-2 mb-0 fw-bold single-line">{{ party.name }}</p>
                                <small class="ms-2 mb-0">{{ party.type }}</small>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OrderFilter from '@/components/OrderFilter.vue';

export default {
    components: { OrderFilter },
    computed: {
        parties() {
            return this.$store.getters.getParties;
        }
    },
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
</style>