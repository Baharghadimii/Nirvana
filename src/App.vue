<template>
  <div id="app">
    <SearchBar />
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from "./components/dashboard/index.vue";
import SearchBar from "./components/searchbar/index.vue";

export default {
  name: "App",
  components: {
    Dashboard,
    SearchBar
  }
};
</script>

<style lang="scss">
html,
body {
  height: $full;
  width: $full;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //this is where we use variables
  height: 100%;
  width: $full;
  overflow: hidden;
  background-color: $primary;
}
</style>
