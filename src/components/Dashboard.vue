<template>
  <div class="dashboard">
    <SearchBar />
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
export default {
  name: "Dashboard",
  components: {
    SearchBar
  }
};
</script>

<style lang="scss">
.dashboard {
  height: $full;
  width: $full;
}
</style>
