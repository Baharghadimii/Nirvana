<template>
  <div class="search-bar">
    <div class="search-icon">
      <font-awesome-icon
        icon="search"
        size="lg"
        style="color:#21202e;margin:0.4rem;"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {}
};
</script>

<style lang="scss">
.search-bar {
  width: $full;
  height: 10%;
  position: relative;
}
.search-icon {
  top: 20%;
  left: 11%;
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  background-color: $secondary;
  position: absolute;
}
</style>
