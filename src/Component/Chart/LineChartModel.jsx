import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


  

const LineChartModel = ({data}) => {
  const [chartData] = useState(data);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        width={800}
        height={350}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Actual" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Trend" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartModel;
