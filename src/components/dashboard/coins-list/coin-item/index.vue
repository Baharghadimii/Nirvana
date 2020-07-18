<template>
  <li class="item-container">
    <div class="logo-name">
      <img />
      <span></span>
    </div>
    <span class="last-price"></span>
  </li>
</template>
<script>
export default {
  name: "CoinItem"
};
</script>
<style lang='scss'>
.item-container {
  height: 3rem;
  border-bottom: 1px solid #797d7f;
  &::before {
    content: "";
    display: block;
    height: 30%;
    width: 100%;
  }
}
</style>