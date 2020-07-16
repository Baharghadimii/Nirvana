<template>
  <div class="dashboard">
    <Services />
    <Chart />
    <div class="donut-list-container">
      <DonutChart />
      <CoinsList />
    </div>
  </div>
</template>

<script>
import Services from "./services/index.vue";
import Chart from "./chart/index.vue";
import DonutChart from "./donut-chart/index";
import CoinsList from "./coins-list/index";

export default {
  name: "Dashboard",
  components: {
    Services,
    Chart,
    DonutChart,
    CoinsList
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
.donut-list-container {
  width: 25%;
  display: flex;
  flex-direction: column;
}
</style>
