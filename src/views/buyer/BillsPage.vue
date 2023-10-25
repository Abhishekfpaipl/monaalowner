<template>
    <div style="padding-bottom: 80px;">
        <SupplierBillsList class="mt-2"></SupplierBillsList>
    </div>
</template>

<script>
import SupplierBillsList from '@/components/SupplierBillsList.vue';

export default {
    name: 'OverviewPage',
    components: {
        SupplierBillsList,
    },
}
</script>

