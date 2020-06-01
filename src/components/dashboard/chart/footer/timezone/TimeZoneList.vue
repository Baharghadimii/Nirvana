<template>
  <ul class="city-list">
    <li
      @click="setCity(city)"
      id="city-list-item"
      v-for="(city,index) in citiesList"
      :key="index"
    >{{city.location}}</li>
  </ul>
</template>
<script>
import timezoneList from "@/data/timezone";
export default {
  data() {
    return {
      citiesList: timezoneList,
      zone: {}
    };
  },
  methods: {
    getTime(city) {
      this.zone = city;
    },
    setCity(city) {
      //passing data from child to parent
      this.$emit("childToParent", city);
    }
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