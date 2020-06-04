<template>
  <div class="edit-panel-container">
    <Edit />
    <SnapShot />
  </div>
</template>

<script>
import SnapShot from "./Snapshot";
import Edit from "./Edit";
export default {
  name: "edit-panel",
  components: {
    SnapShot,
    Edit
  }
};
</script>
<style lang="scss">
.edit-panel-container {
  width: 8%;
  display: flex;
  flex-direction: row;
  float: right;
  margin: 1rem;
}
</style>