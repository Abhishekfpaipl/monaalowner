<template>
  <div>
    <HelloWorld route="http://192.168.1.133:8001/api/charts/sale" chart="bar"/>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
