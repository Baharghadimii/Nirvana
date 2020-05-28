<template>
  <div class="mid-content">
    <Services />
    <Chart />
  </div>

</template>

<script>

import Services from './Services';
import Chart from './Chart';

export default {
    name: "MidContent",
    props: {},
    components: {
      Services,
      Chart
    }
}
</script>

<style lang="scss">
  .mid-content {
    display: flex;
    height: $full;
    background-color: $primary;
  }
</style>