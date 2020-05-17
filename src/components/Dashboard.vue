<template>
  <div class="dashboard">
    <SearchBar />
    <!-- <Services /> -->
    <!-- <Chart /> -->
    <MidContent />
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
// import Services from "./Services.vue";
// import Chart from './Chart';
import MidContent from "./MidContent";

export default {
  name: "Dashboard",
  components: {
    SearchBar,
    MidContent
    // Services,
    // Chart
  }
};
</script>

<style lang="scss">
.dashboard {
  height: $full;
  width: $full;
}
</style>
