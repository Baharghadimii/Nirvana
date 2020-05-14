<template>
  <div class="dashboard">
    <SearchBar />
    <services />
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import Services from "./Services.vue";
export default {
  name: "Dashboard",
  components: {
    SearchBar,
    Services
  }
};
</script>

<style lang="scss">
.dashboard {
  height: $full;
  width: $full;
}
</style>
