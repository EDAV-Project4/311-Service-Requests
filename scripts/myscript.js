// add your JavaScript/D3 to this file

const w = 900;
const h = 500;
const margin = {top: 50, right: 0, bottom: 100,
      left: 300};
const innerWidth = w - margin.left - margin.right;
const innerHeight = h - margin.top - margin.bottom;

const svg = d3.select("div#plot")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

svg.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", w)
      .attr("height", h)
      .attr("fill", "white");

svg.append("text").text("Plot")
const dataset = {
      "MANHATTAN": [17156,14407,17256,0,13535],
      "QUEENS": [33874,17734,9839,18048,6710],
      "BRONX": [17580,17536,22867,0,8279],
      "BROOKLYN": [47624,21787,19535,16746,0],
      "STATEN ISLAND": [3147,2235,0,1055,0]
    };


d3.selectAll("input[name='Borough']").on("change", function () {
      selectedDataset = dataset[this.value];
      updateChart();
    });

// General Update Pattern
function updateChart() {
      svg.append("text").text("Title");
      // Remove existing chart elements
      svg.selectAll(".bar").remove();
      svg.selectAll("g").remove();
      svg.selectAll(".chart-title").remove();
      // Create scales
      const xScale = d3.scaleBand()
        .domain(d3.range(5))
        .range([100, innerWidth])
        .padding(0.1);

      const yScale = d3.scaleLinear()
        .domain([0,50000])
        .range([innerHeight,50, 0]);

      // Create x-axis
      svg.append("g")
        .attr("transform", "translate(0," + innerHeight + ")")
        .call(d3.axisBottom(xScale));

      // Create y-axis
      svg.append("g")
        .attr("transform", `translate (100, 0)`)
        .call(d3.axisLeft(yScale));

      // Create bars
      svg.selectAll(".bar")
        .data(selectedDataset)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d, i) => xScale(i))
        .attr("y", d => yScale(d))
        .attr("width", xScale.bandwidth())
        .attr("height", d => innerHeight - yScale(d))
        .transition()
        .duration(500)
        .attr("fill", "blue")

      svg.append("text")
        .attr("class", "x-label")
        .attr("x", 50+innerWidth / 2)
        .attr("y", innerHeight + margin.bottom - 40)
        .style("text-anchor", "middle")
        .text("Issue Types");

      svg.append("text")
        .attr("class", "y-label")
        .attr("transform", "rotate(-90)")
        .attr("x", -innerHeight / 2)
        .attr("y", 345 - margin.left)
        .style("text-anchor", "middle")
        .text("Ticket Created between Sept and Nov");

      svg.append("text")
        .attr("class", "chart-title")
        .attr("x", 50+innerWidth / 2)
        .attr("y", 50)
        .style("text-anchor", "middle")
        .text("311 ticket counts for major issues in " + d3.select("input[name='Borough']:checked").node().value);

    }
