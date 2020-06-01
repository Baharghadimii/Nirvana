<template>
  <div class="timezone-container">
    <div v-show="dropdown" class="timezone-dropdown">
      <TimeZoneList />
    </div>
    <p @click="handleClick">{{time}}({{timeZone}})</p>
  </div>
</template>

<script>
import TimeZoneList from "./TimeZoneList";
import { mapState, mapActions } from "vuex";
import Vue from "vue";
export default {
  name: "Time",
  components: {
    TimeZoneList
  },
  data() {
    return {
      dropdown: false,
      timeZone: "",
      time: ""
    };
  },
  computed: {
    ...mapState(["initialTimeZone"])
  },
  mounted: function() {
    Vue.axios
      .get("http://worldtimeapi.org/api/timezone/Etc/UTC")
      .then(response => {
        const stringTime = response.data.utc_datetime.slice(11, 19);
        this.time = stringTime;
        this.timeZone = "UTC";
        this.setInitialTime({ time: this.time, name: this.timeZone });
      });
  },
  methods: {
    ...mapActions(["setInitialTime"]),
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