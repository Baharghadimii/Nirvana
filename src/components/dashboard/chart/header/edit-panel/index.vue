<template>
  <div>
    <SnapShot />
    <Edit />
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