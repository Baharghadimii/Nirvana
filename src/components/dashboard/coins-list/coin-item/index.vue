<template>
  <li class="item-container">
    <div class="logo-name">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTd_tuOwUTNb8S8fB7JB1Tah0hZrLhIaZv23Q&usqp=CAU"
      />
      <span>BitCoin</span>
    </div>
    <span class="last-price">$12,593</span>
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