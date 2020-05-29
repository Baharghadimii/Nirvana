<template>
  <div class="snapshot-container">
    <font-awesome-icon icon="camera" style="color:#3d3a49" size="lg" />
    <span class="tooltip-snapshot">Snapshot</span>
  </div>
</template>

<style lang="scss">
.snapshot-container {
  width: 2rem;
  position: relative;
  text-align: center;
  cursor: pointer;
  padding: 0.3rem;
  border-radius: 5px;
}
.snapshot-container:hover {
  background-color: $light-font;
}
.snapshot-container .tooltip-snapshot {
  visibility: hidden;
  white-space: nowrap;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 0.5rem 1rem;
  margin-left: 1.2rem;

  position: absolute;
  z-index: 1;
}
.snapshot-container:hover .tooltip-snapshot {
  visibility: visible;
}
</style>