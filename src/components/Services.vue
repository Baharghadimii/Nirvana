<template>
  <div class="servicePanel">
    <div class="icon-holder">
      <font-awesome-icon icon="list-ul" style="color:#21202e;" size="2x" />
    </div>
    <div class="icon-holder">
      <font-awesome-icon icon="fire" style="color:#21202e;" size="2x" />
    </div>
    <div class="icon-holder">
      <font-awesome-icon icon="comments" style="color:#21202e;" size="2x" />
    </div>
    <div class="icon-holder">
      <font-awesome-icon
        icon="greater-than-equal"
        style="color:#21202e;"
        size="2x"
      />
    </div>
    <div class="icon-holder">
      <font-awesome-icon icon="bell" style="color:#21202e;" size="2x" />
    </div>
    <div class="icon-holder" id="help">
      <font-awesome-icon
        icon="question-circle"
        style="color:#21202e;"
        size="2x"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  props: {}
};
</script>

<style lang="scss">
.servicePanel {
  height: $full;
  width: 5%;
  background-color: $secondary;
  display: flex;
  flex-direction: column;
}
.icon-holder {
  position: relative;
  text-align: center;
  margin-bottom: 2em;
  cursor: pointer;
}
#help {
  margin-top: 20rem;
}
</style>
