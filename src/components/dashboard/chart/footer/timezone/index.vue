<template>
  <div class="timezone-container">
    <div v-show="dropdown" class="timezone-dropdown">
      <TimeZoneList />
    </div>
    <p @click="handleClick">04:45:13(UTC)</p>
  </div>
</template>

<script>
import TimeZoneList from "./TimeZoneList";
export default {
  name: "Time",
  components: {
    TimeZoneList
  },
  data() {
    return {
      dropdown: false
    };
  },
  methods: {
    handleClick() {
      this.dropdown ? (this.dropdown = false) : (this.dropdown = true);
    }
  }
};
</script>
<style lang="scss">
.timezone-container {
  margin-right: 1rem;
}
p {
  float: right;
  color: $light-font;
  cursor: pointer;
  padding: 1rem 0.5rem;
  margin: 0;
  border-radius: 10px;
}
p:hover {
  background-color: $dark-font;
}
.timezone-dropdown {
  background-color: $light-font;
  width: 15rem;
  height: 30rem;
  margin-top: -30rem;
  border-radius: 5px;
  overflow-x: hidden;
}
</style>