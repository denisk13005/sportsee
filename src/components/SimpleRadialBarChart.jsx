import React from 'react'
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from 'recharts'

const SimpleRadialBarChart = ({ userMainDatas }) => {
  const data = [
    {
      name: '25-29',
      uv: 100,
      pv: 4567,
      fill: 'white',
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
        width={730}
        height={250}
        innerRadius="50%"
        outerRadius="80%"
        data={data}
        startAngle={200}
        endAngle={-360 + 200}
        // margin={{ top: 10 }}
      >
        <circle cx="50%" cy="50%" fill="white" r="70"></circle>
        <RadialBar
          clockWise
          cornerRadius={10}
          fill="#FF0000"
          isAnimationActive={false}
          dataKey="uv"
        />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

export default SimpleRadialBarChart
