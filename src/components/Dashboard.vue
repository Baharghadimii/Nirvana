<template>
  <div class="dashboard">
    <SearchBar />
    <MidContent />
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import MidContent from "./MidContent";

export default {
  name: "Dashboard",
  components: {
    SearchBar,
    MidContent
  }
};
</script>

<style lang="scss">
.dashboard {
  height: $full;
  width: $full;
}
</style>
