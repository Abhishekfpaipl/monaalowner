<template>
    <div style="padding-bottom: 80px;"> 
        <SupplierOrder></SupplierOrder> 
    </div>
</template>

<script> 
import SupplierOrder from '@/components/SupplierOrder.vue'; 

export default {
    name: 'OverviewPage',
    components: { 
        SupplierOrder, 
    },
}
</script>

