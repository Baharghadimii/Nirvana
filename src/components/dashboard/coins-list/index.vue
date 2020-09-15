<template>
  <div class="list-container">
    <ul class="list">
      <CoinItem />
    </ul>
  </div>
</template>
<script>
import CoinItem from "./coin-item/index";
export default {
  name: "CoinList",
  components: {
    CoinItem,
  },
};
</script>
<style lang="scss">
.list-container {
  width: 95%;
  height: 44%;
  background-color: $secondary;
  margin: 0.5rem 0.5rem;
  border-radius: 10px;
}
.list {
  color: white;
  list-style-type: none;
  text-align: left;
  height: 85%;
  padding: 10px 2px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>