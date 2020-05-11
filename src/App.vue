<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";

export default {
  name: "App",
  components: {
    Dashboard
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
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //this is where we use variables
  height: $full;
  width: $full;
  background-color: $primary;
}
</style>
