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
import Binance from "binance-api-node";

const client2 = Binance({
  apiKey: "CSHSdfp7EvlBKp3bdaYj8aH7TXKxw8NvR0GkDYPra04L97uQ5bVbGlYBtiMaE4mb",
  apiSecret: "********",
});

export default {
  name: "Dashboard",
  components: {
    Services,
    Chart,
    DonutChart,
    CoinsList,
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const prices = await client2.prices();
      console.log(parseInt(prices.BTCTUSD).toFixed(2));
    },
  },
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
