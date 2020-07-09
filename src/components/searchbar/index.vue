<template>
  <div class="search-div">
    <div id="box" class="search-box">
      <input id="search-input" type="text" hidden placeholder="Search coin" />
      <font-awesome-icon
        v-on:click="expand"
        icon="search"
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
  height: 8%;
  position: relative;
  background-color: $secondary;
}
.search-box {
  top: 20%;
  left: 11%;
  width: 2.1em;
  height: 2.1em;
  border-radius: 50px;
  position: absolute;
  cursor: pointer;
  background-color: $light-font;
  transition: all 1s;
}
#search-input {
  width: 8em;
  height: 2.5em;
  background-color: transparent;
  border: none;
  color: $dark-font;
  font-size: 0.9rem;
  font-weight: 700;
  float: left;
  padding: 0 0 2rem 1rem;
  outline: none;
  transition: all 5s;
}
#search-input::placeholder {
  color: $dark-font;
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
