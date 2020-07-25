<template>
  <div class="donut-container">
    <div id="my_dataviz"></div>
    <div class="desc-container">
      <div class="window-container">
        <span id="high">Hight:</span>
        <span>$9114.61</span>
      </div>
      <div class="window-container">
        <span id="low">Low :</span>
        <span>$9106.39</span>
      </div>
      <div class="window-container">
        <span id="open">Open:</span>
        <span>$9113.84</span>
      </div>
      <div class="window-container">
        <span id="close">Close:</span>
        <span>$9112.09</span>
      </div>
    </div>
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

      svg
        .append("text")
        .attr("text-anchor", "middle")
        .style("fill", "#fff")
        //coin price
        .text("$9182.00");
      // Create dummy data
      var data = { a: 9, b: 20, c: 30, d: 8 };

      // set the color scale
      var color = d3
        .scaleOrdinal()
        .domain(data)
        .range(["#fff", "#67D26A", "#F6527D", "#428DC2"]);

      // Compute the position of each group on the pie:
      var pie = d3.pie().value(function (d) {
        return d.value;
      });
      var data_ready = pie(d3.entries(data));

      // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
      svg
        .selectAll("data")
        .data(data_ready)
        .enter()
        .append("path")
        .attr(
          "d",
          d3
            .arc()
            .innerRadius(60) // This is the size of the donut hole
            .outerRadius(radius)
        )
        .attr("fill", function (d) {
          return color(d.data.key);
        })
        .attr("stroke", "#2e2b3f")
        .style("stroke-width", "10px");
    },
  },
};
</script>
<style lang="scss">
.donut-container {
  width: 95%;
  height: 40%;
  background-color: $secondary;
  margin: 2rem 0.5rem;
  border-radius: 10px;
  margin-bottom: 0;
}
.desc-container {
  width: 80%;
  margin: 0 auto;
  margin-top: -50px;
  height: 30%;
  color: white;
  text-align: left;
}
span {
  display: flex;
  flex-direction: row;
  &::before {
    content: "";
    width: 10px;
    height: 10px;
    margin-top: 6px;
    margin-right: 10px;
    border-radius: 50%;
  }
}
#high {
  &::before {
    background-color: #67d26a;
  }
}
#low {
  &::before {
    background-color: #f6527d;
  }
}
#open {
  &::before {
    background-color: #fff;
  }
}
#close {
  &::before {
    background-color: #428dc2;
  }
}
.window-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>