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

//const bardata = [300, 100, 150, 220, 70, 270];

const dataset = {
      "MANHATTAN": [1,2,3,4,5],
      "QUEENS": [6,7,8,9,10],
      "BRONX": [5,15,20,45,60],
      "BROOKLYN": [14,33,22,10,8],
      "STATEN ISLAND": [10,20,30,40,50]
    };

/*const xScale = d3.scaleBand()
      .domain(["Issue 1","Issue 2","Issue 3","Issue 4","Issue 5"])
      .range([1, innerWidth])
      .paddingInner(.1);

const yScale = d3.scaleLinear()
      .domain([0, 400])  // use fixed y-scale if possible
      .range([innerHeight, 0])

const xAxis = d3.axisBottom()
      .scale(xScale);

const yAxis = d3.axisLeft()
      .scale(yScale);

/*const bars = svg.append("g")
      .attr("id", "plot")
      .attr("transform", `translate (${margin.left}, ${margin.top})`)
      .selectAll("rect")
      .data(dataset.MANHATTAN);
console.log(dataset.MANHATTAN)
bars.enter().append("rect")
      .attr("x", (d, i) => xScale(i))
      .attr("y", d => yScale(d))
      .attr("width", xScale.bandwidth())
      .attr("height", d => innerHeight - yScale(d))
      .attr("fill", "blue");
*/
//svg.append("g")
//      .attr("class", "xAxis")
//      .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
//      .call(xAxis);

//svg.append("g")
//      .attr("class", "yAxis")
//      .attr("transform", `translate (${margin.left}, ${margin.top})`)
//      .call(yAxis);

d3.selectAll("input[name='Borough']").on("change", function () {
      selectedDataset = dataset[this.value];
      console.log(selectedDataset)
      updateChart();
    });

// General Update Pattern
function updateChart() {
      // Remove existing chart elements
      svg.selectAll(".bar").remove();
      svg.selectAll("g").remove();

      // Create scales
      const xScale = d3.scaleBand()
        .domain(d3.range(selectedDataset.length))
        .range([0, innerWidth])
        .padding(0.1);

      const yScale = d3.scaleLinear()
        .domain([0, d3.max(selectedDataset)])
        .range([innerHeight, 0]);

      // Create x-axis
      svg.append("g")
        .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
        .call(d3.axisBottom(xScale));

      // Create y-axis
      svg.append("g")
        .attr("transform", `translate (${margin.left}, ${margin.top})`)
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
        .attr("height", d => innerHeight - yScale(d));
    }

/*
function add(){
      const newvalue = Math.floor(Math.random()*400);
      bardata.push(newvalue);
      update(bardata);
    }

function remove() {
      bardata.pop();
      update(bardata);
      };

const dataset = {
      "MANHATTAN": [10,20,30,40,50],
      "QUEENS": [11,20,25,30,55],
      "BRONX": [5,15,20,45,60],
      "BROOKLYN": [11,20,25,30,55],
      "STATEN ISLAND": [10,20,30,40,50]
    };


    // Set initial data
let selectedDataset = dataset["MANHATTAN"];
console.log(selectedDataset)

    // Create SVG container
const svg2 = d3.select("#chart-container")
      .append("svg")
      .attr("width", 900)
      .attr("height", 500);
svg2.append("g")
      .attr("class", "xAxis")
      .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
      .call(xAxis);

svg2.append("g")
      .attr("class", "yAxis")
      .attr("transform", `translate (${margin.left}, ${margin.top})`)
      .call(yAxis)

    // Initial render
updateChart();

    // Handle radio button change
d3.selectAll("input[name='Borough']").on("change", function () {
      selectedDataset = dataset[this.value];
      console.log(selectedDataset)
      updateChart();
    });

    // Function to update the bar chart
function updateChart(){
      xScale.domain(d3.range(5));

      const paddingpix = xScale.padding()*xScale.bandwidth()/(1 - xScale.padding())
      // Remove existing bars
      svg2.selectAll(".bar").remove();

      // Create new bars based on the selected dataset
      svg2.selectAll(".bar")
        .data(selectedDataset)
        .enter()
        .append("rect")
        .attr("x", (d, i) => xScale(i))
        .attr("y", d => yScale(d))
        .attr("width", xScale.bandwidth())
        .attr("height", d => innerHeight - yScale(d))
        .attr("fill", "blue")
        .attr("class", "bar")
        .attr("x", (d, i) => i * 80)
        .attr("y", d => 300 - d * 5)
        .attr("width", 80)
        .attr("height", d => d * 5);
    }
*/
