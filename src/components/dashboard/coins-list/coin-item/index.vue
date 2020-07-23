<template>
  <li>
    <div class="item-container" v-for="coin in coinItems" :key="coin">
      <div class="logo-name">
        <img :src="coin.img" />
        <span>{{coin.name}}</span>
      </div>
      <span class="last-price">$12,593</span>
    </div>
  </li>
</template>
<script>
import coinItemList from "../../../../data/coins";
export default {
  name: "CoinItem",
  data() {
    return {
      coinItems: coinItemList,
    };
  },
};
</script>
<style lang='scss'>
.item-container {
  padding: 4px 10px;
  height: 3rem;
  border-bottom: 1px solid #797d7f;
  cursor: pointer;
  &:hover {
    background-color: $dark-font;
  }
  &::before {
    content: "";
    display: block;
    height: 20%;
    width: 100%;
  }
  .logo-name {
    display: flex;
    flex-direction: row;
    float: left;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }
  .last-price {
    float: right;
  }
}
</style>