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
export default {
  data() {
    return {
      citiesList: [
        { area: "Etc", location: "UTC" },
        { area: "Etc", location: "Los Angeles" },
        { area: "America", location: "Vancouver" },
        { area: "America", location: "Denver" },
        { area: "America", location: "Santiago" },
        { area: "America", location: "Bogota" },
        { area: "America", location: "Lima" },
        { area: "America/Argentina", location: "Buenos Aires" },
        { area: "America/Argentina", location: "San Luis" },
        { area: "America", location: "Mexico City" },
        { area: "America", location: "New York" },
        { area: "America", location: "Chicago" },
        { area: "America", location: "Caracas" },
        { area: "America", location: "Toronto" },
        { area: "Europe", location: "London" },
        { area: "Europe", location: "Belgrade" },
        { area: "Europe", location: "Berlin" },
        { area: "Europe", location: "Luxembourg" },
        { area: "Europe", location: "Madrid" },
        { area: "Europe", location: "Paris" },
        { area: "Europe", location: "Madrid" },
        { area: "Europe", location: "Oslo" },
        { area: "Europe", location: "Rome" },
        { area: "Europe", location: "Stockhome" },
        { area: "Europe", location: "Warsaw" },
        { area: "Europe", location: "Zurich" },
        { area: "Europe", location: "Athens" },
        { area: "Europe", location: "Istanbul" },
        { area: "Europe", location: "Helsinki" },
        { area: "Asia", location: "Bahrain" },
        { area: "Asia", location: "Jerusalem" },
        { area: "Asia", location: "Kuwait" },
        { area: "Asia", location: "Moscow" },
        { area: "Asia", location: "Qatar" },
        { area: "Asia", location: "Riyadh" },
        { area: "Asia", location: "Dubai" },
        { area: "Asia", location: "Muscat" },
        { area: "Asia", location: "Jakarta" },
        { area: "Asia", location: "Ashkhabad" },
        { area: "Asia", location: "Bangkok" },
        { area: "Asia", location: "Hong kong" },
        { area: "Asia", location: "Seoul" },
        { area: "Asia", location: "Singapore" },
        { area: "Asia", location: "Shanghai" },
        { area: "Asia", location: "Tehran" },
        { area: "Asia", location: "Taipei" },
        { area: "Asia", location: "Tokyo" },
        { area: "Australia", location: "Brisbane" },
        { area: "Australia", location: "Sydney" },
        { area: "Australia", location: "Perth" },
        { area: "Australia", location: "Tehran" }
      ]
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