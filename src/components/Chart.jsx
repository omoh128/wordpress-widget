import React from "react";
import { render } from "react-dom";

import { LineChart, Line, XAxis, YAxis } from "recharts";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const data = [];

const rand = 300;
for (let i = 0; i < 7; i++) {
  let d = {
    year: 2000 + i,
    value: Math.random() * (rand + 50) + 100
  };

  data.push(d);
}

const Chart= () => (
  <div style={styles}>
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
      <XAxis dataKey="year" />
      <YAxis />
    </LineChart>
  </div>
);

export default Chart;