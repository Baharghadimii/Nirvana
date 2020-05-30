<template>
  <ul class="city-list">
    <li
      @click="getTime(city)"
      id="city-list-item"
      v-for="(city,index) in citiesList"
      :key="index"
    >{{city.location}}</li>
  </ul>
</template>
<script>
import timezoneList from "@/assets/data/timezone";
export default {
  data() {
    return {
      citiesList: timezoneList
    };
  },
  methods: {
    // getTime(city) {}
  }
};
</script>

<style lang="scss">
.city-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
#city-list-item {
  padding: 0.5rem 2rem;
}
#city-list-item:hover {
  background-color: #646177;
  cursor: pointer;
}
</style>