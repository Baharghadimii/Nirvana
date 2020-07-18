<template>
  <div class="list-container">
    <ul class="list">
      <li>Cras justo odio</li>
      <li>Dapibus ac facilisis in</li>
      <li>Morbi leo risus</li>
      <li>Porta ac consectetur ac</li>
      <li>Vestibulum at eros</li>
      <li>Cras justo odio</li>
      <li>Dapibus ac facilisis in</li>
      <li>Morbi leo risus</li>
      <li>Porta ac consectetur ac</li>
      <li>Vestibulum at eros</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CoinList"
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
  padding: 10px;
  height: 80%;
  overflow: scroll;
  li {
    height: 3rem;
    border-bottom: 1px solid #797d7f;
    &::before {
      content: "";
      display: block;
      height: 30%;
      width: 100%;
    }
  }
}
</style>