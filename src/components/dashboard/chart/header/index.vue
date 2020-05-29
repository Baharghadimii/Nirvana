<template>
  <div class="header-container">
    <CoinTitle />
    <EditPanel />
  </div>
</template>

<script>
import CoinTitle from "./CoinTitle";
import EditPanel from "./edit-panel/index";
export default {
  name: "Header",
  components: {
    CoinTitle,
    EditPanel
  }
};
</script>

<style lang="scss">
.header-container {
  widows: $full;
}
</style>