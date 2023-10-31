<template>
    <div style="padding-bottom: 80px;">
        <HelloWorld route="http://192.168.1.133:8001/api/charts/sale" chart="bar" class="mt-2"></HelloWorld>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'OverviewPage',
    components: {
        HelloWorld,
    },
}
</script>

