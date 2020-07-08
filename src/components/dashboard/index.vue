<template>
  <div class="dashboard">
    <Services />
    <Chart />
    <DonutChart />
  </div>
</template>

<script>
import Services from "./services/index.vue";
import Chart from "./chart/index.vue";
import DonutChart from "./donut-chart/index";

export default {
  name: "Dashboard",
  components: {
    Services,
    Chart,
    DonutChart
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
