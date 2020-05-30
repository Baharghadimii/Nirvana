<template>
  <ul class="time-list">
    <li id="timerange-list" v-for="item in list" :key="item">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: "TimeRange",
  data() {
    return {
      list: ["1D", "5D", "1M", "3M", "6M", "YTD", "1Y", "5Y", "All"]
    };
  }
};
</script>

<style lang="scss">
.time-list {
  list-style: none;
  padding: 0;
}
#timerange-list {
  display: inline;
  color: $light-font;
  padding: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
}
#timerange-list :hover {
  background-color: $dark-font;
}
</style>