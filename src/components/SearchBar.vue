<template>
  <div class="search-div">
    <div id="box" class="search-box" v-on:click="expand">
      <input id="search-input" type="text" hidden value="Search" />
      <font-awesome-icon
        icon="search"
        size="lg"
        style="color:#2e2b3f;margin:0.6rem;float:right"
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
      //handle different timing for transition
      setTimeout(() => {
        document.getElementById("search-input").className = "expanded-input";
      }, 500);
    }
  }
};
</script>

<style lang="scss">
.search-div {
  width: $full;
  height: 10%;
  position: relative;
  background-color: $secondary;
}
.search-box {
  top: 20%;
  left: 11%;
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  position: absolute;
  cursor: pointer;
  background-color: $primary;
  transition: width 1s;
}
#search-input {
  width: 8em;
  height: 2.5em;
  background-color: transparent;
  border: none;
  color: $secondary;
  font-size: 1rem;
  font-weight: 700;
  float: left;
  padding: 0 0 1.5rem 1rem;
  transition: all 5s;
}
//after transition
.expanded-input {
  visibility: visible;
  display: inline-block;
}
.expanded {
  width: 15em;
  border-radius: 20px;
}
</style>
