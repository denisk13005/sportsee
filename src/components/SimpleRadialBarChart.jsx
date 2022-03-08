import React from 'react'
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts'

const SimpleRadialBarChart = ({ userMainDatas }) => {
  const data = [
    {
      name: '18-24',
      uv: 100,
      pv: 2400,
      fill: 'black',
      // fillOpacity: 0.01,
    },
    {
      name: '25-29',
      uv: userMainDatas.score * 100,
      pv: 4567,
      fill: 'red',
    },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        // cx="47%"
        // cy="32%"
        width={730}
        height={250}
        innerRadius="55%"
        outerRadius="80%"
        data={data}
        startAngle={0}
        endAngle={360}
        margin={{ top: 10 }}
      >
        <RadialBar
          minAngle={15}
          label={{ fill: '#666', position: 'insideStart' }}
          background
          clockWise={true}
          dataKey="uv"
        />
        {/* <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
        <Tooltip /> */}
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

export default SimpleRadialBarChart
