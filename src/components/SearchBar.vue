<template>
  <div class="search-div">
    <div id="box" class="search-box" v-on:click="expand">
      <font-awesome-icon
        icon="search"
        size="lg"
        style="color:#21202e;margin:0.6rem;float:right"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {},
  methods: {
    expand: function() {
      document.getElementById("box").className += " expanded";
    }
  }
};
</script>

<style lang="scss">
.search-div {
  width: $full;
  height: 10%;
  position: relative;
}
.search-box {
  top: 20%;
  left: 11%;
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  background-color: $secondary;
  position: absolute;
  cursor: pointer;
  transition: width 1s;
}
.expanded {
  width: 10em;
  border-radius: 20px;
}
</style>
