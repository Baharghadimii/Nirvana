<template>
  <div class="edit-container">
    <font-awesome-icon icon="edit" style="color:#3d3a49;" size="lg" />
    <span class="tooltip-edit">Edit</span>
  </div>
</template>

<style lang="scss">
.edit-container {
  width: 2rem;
  margin: 0 auto;
  position: relative;
  text-align: center;
  padding: 0.3rem;
  cursor: pointer;
  border-radius: 5px;
}
.edit-container:hover {
  background-color: $light-font;
}

.edit-container .tooltip-edit {
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
.edit-container:hover .tooltip-edit {
  visibility: visible;
}
</style>