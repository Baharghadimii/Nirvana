<template>
  <div class="chart-container">
    <ChartHeader />
    <Graph />
    <ChartFooter />
  </div>
</template>

<script>
import Graph from "./graph/index";
import ChartFooter from "./footer/index";
import ChartHeader from "./header/index";

export default {
  name: "Chart",
  components: {
    Graph,
    ChartFooter,
    ChartHeader
  }
};
</script>
<style lang="scss">
.chart-container {
  width: 70%;
  height: 85%;
  background-color: $secondary;
  margin: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
}
</style>