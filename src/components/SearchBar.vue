<template>
  <div class="search-div">
    <div id="box" class="search-box" v-on:click="expand">
      <input id="search-input" type="text" hidden value="Search" />
      <font-awesome-icon
        icon="search"
        size="lg"
        style="color:#3d3a49;margin:0.6rem;float:right"
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
      const box = document.getElementById("box");
      const boxClassList = box.classList;
      const input = document.getElementById("search-input");
      //check if the box is expanded then close it otherwise open it
      if (boxClassList.contains("expanded")) {
        boxClassList.remove("expanded");
        input.classList.remove("expanded-input");
      } else {
        box.className += " expanded";
        //handle different timing for transition
        setTimeout(() => {
          input.className = "expanded-input";
        }, 500);
      }
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
  border-radius: 50px;
  position: absolute;
  cursor: pointer;
  background-color: $primary;
  transition: all 1s;
}
#search-input {
  width: 8em;
  height: 2.5em;
  background-color: transparent;
  border: none;
  color: $dark-font;
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
