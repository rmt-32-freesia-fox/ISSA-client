import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

export default function BubbleChart() {
  const chartArea = useRef(null);
  const width = 700;
  const height = 500;

  const data = {
    children: [
      { name: "MTK", group: "A", value: 100 },
      { name: "IPA", group: "A", value: 80 },
      { name: "IPS", group: "B", value: 60 },
      { name: "OLAHRAGA", group: "B", value: 50 },
      { name: "SENI", group: "C", value: 30 },
      { name: "SEJARAH", group: "C", value: 20 },
      { name: "Item 7", group: "D", value: 10 },
      { name: "Item 8", group: "D", value: 5 },
      { name: "Item 9", group: "E", value: 2 },
      { name: "Item 10", group: "E", value: 1 },
    ],
  };

  useEffect(() => {
    const svg = d3.select(chartArea.current);
  
    // Tentukan skema warna untuk setiap group data
    const color = d3.scaleOrdinal()
      .domain(data.children.map((d) => d.group))
      .range(d3.schemeCategory10);
  
    const bubble = d3.pack()
      .size([width, height])
      .padding(1.5)
      .radius((d) => d.value);
  
    const nodes = d3.hierarchy(data)
      .sum((d) => d.value);
  
    const node = svg.selectAll(".node")
      .data(bubble(nodes).descendants())
      .enter()
      .filter((d) => !d.children)
      .append("g")
      .attr("class", "node")
      .attr("transform", (d) => `translate(${width/2},${height/2})scale(0)`);
    // Menambahkan transisi pada setiap node
    node.transition()
      .duration(2000)
      .attr("transform", (d) => `translate(${d.x},${d.y})scale(1)`);
  
    node.append("circle")
      .attr("r", (d) => d.r)
      .style("fill", (d) => color(d.data.group)); // Gunakan skema warna yang sudah ditentukan
  
    node.append("text")
      .attr("dy", ".3em")
      .style("text-anchor", "middle")
      .text((d) => d.data.name);
  }, []);
  
  
  return (
    <div>
      <svg ref={chartArea} width={width} height={height}></svg>
    </div>
  );
}
