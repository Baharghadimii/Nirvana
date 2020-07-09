<template>
  <div class="donut-container">
    <div id="my_dataviz"></div>
  </div>
</template>
<script>
import * as d3 from "d3";
export default {
  name: "DonutChart",
  mounted() {
    this.generateDonut();
  },
  methods: {
    generateDonut() {
      // set the dimensions and margins of the graph
      let width = 150;
      let height = 250;
      let margin = 0;

      // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
      var radius = Math.min(width, height) / 2 - margin;

      // append the svg object to the div called 'my_dataviz'
      var svg = d3
        .select("#my_dataviz")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      // Create dummy data
      var data = { a: 9, b: 20, c: 30, d: 8 };

      // set the color scale
      var color = d3
        .scaleOrdinal()
        .domain(data)
        .range(["#F6527D", "#FFBC2B", "#67D26B", "#4B85F9"]);

      // Compute the position of each group on the pie:
      var pie = d3.pie().value(function(d) {
        return d.value;
      });
      var data_ready = pie(d3.entries(data));

      // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
      svg
        .selectAll("whatever")
        .data(data_ready)
        .enter()
        .append("path")
        .attr(
          "d",
          d3
            .arc()
            .innerRadius(50) // This is the size of the donut hole
            .outerRadius(radius)
        )
        .attr("fill", function(d) {
          return color(d.data.key);
        })
        .attr("stroke", "black")
        .style("stroke-width", "1px")
        .style("opacity", 0.7);
    }
  }
};
</script>
<style lang="scss">
.donut-container {
  width: 20%;
  height: 40%;
  background-color: $secondary;
  margin: 2rem 0.5rem;
  border-radius: 10px;
}
</style>