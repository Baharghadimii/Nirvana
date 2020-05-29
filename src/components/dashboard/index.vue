<template>
  <div class="dashboard">
    <Services />
    <Chart />
  </div>
</template>

<script>
import Services from "./services/index.vue";
import Chart from "./chart/index.vue";

export default {
  name: "Dashboard",
  components: {
    Services,
    Chart
  }
};
</script>

<style lang="scss">
.dashboard {
  height: $full;
  width: $full;
  display: flex;
  flex-direction: row;
}
</style>
