<template>
  <div class="servicePanel">
    <div class="icon-holder">
      <font-awesome-icon icon="list-ul" style="color:#21202e;" size="2x" />
      <span class="tooltip">Watclist</span>
    </div>
    <div class="icon-holder">
      <font-awesome-icon icon="fire" style="color:#21202e;" size="2x" />
      <span class="tooltip">Hotlist</span>
    </div>
    <div class="icon-holder">
      <font-awesome-icon icon="comments" style="color:#21202e;" size="2x" />
      <span class="tooltip">Chat</span>
    </div>
    <div class="icon-holder">
      <font-awesome-icon
        icon="greater-than-equal"
        style="color:#21202e;"
        size="2x"
      />
      <span class="tooltip">Compare prices</span>
    </div>
    <div class="icon-holder">
      <font-awesome-icon icon="bell" style="color:#21202e;" size="2x" />
      <span class="tooltip">Notification</span>
    </div>
    <div class="icon-holder" id="help">
      <font-awesome-icon
        icon="question-circle"
        style="color:#21202e;"
        size="2x"
      />
      <span class="tooltip">Help centre</span>
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
.icon-holder .tooltip {
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
.icon-holder:hover .tooltip {
  visibility: visible;
}
</style>
