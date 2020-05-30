<template>
  <div class="footer-container">
    <TimeRange />
    <TimeZone />
  </div>
</template>
<script>
import TimeZone from "./timezone/index";
import TimeRange from "./TimeRange";
export default {
  name: "ChartFooter",
  components: {
    TimeZone,
    TimeRange
  }
};
</script>

<style lang="scss">
.footer-container {
  height: 3rem;
  margin: 0 1rem 1rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid $dark-font;
}
</style>