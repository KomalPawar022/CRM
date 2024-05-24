import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';



const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
// const labels = ['Social Medial', 'Cold Call', 'Website', 'Advt'];




 
const DonutChart = ({data}) => {
 
 

  return (
    <div>
      <div className="row">
        <PieChart width={400} height={600}>
          <Pie
            data={data}
            cx={100}
            cy={100}
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={1}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            content={({ payload }) => {
              if (payload && payload.length > 0) {
                const { name, value } = payload[0].payload;
                return (
                  <div style={{ background: '#fff', padding: '5px', border: '1px solid #ccc' }}>
                    <p>{`${name}: ${value}`}</p>
                  </div>
                );
              }
              return null;
            }}
          />
        </PieChart>
      </div>
    </div>
  );
};

export default DonutChart;
