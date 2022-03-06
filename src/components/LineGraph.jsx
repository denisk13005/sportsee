import React from 'react'
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts'
const LineGraph = ({ average }) => {
  average = [
    { day: '', sessionLength: 20 },
    ...average,
    { day: '', sessionLength: 20 },
  ]
  console.log(average)

  return (
    <ResponsiveContainer
      className="lineGraphContainer"
      height="68%"
      width="100%"
    >
      <LineChart
        data={average}
        margin={{ left: -80, right: -10 }}
        className="lineChart"
      >
        <Tooltip />
        <XAxis
          dataKey="day"
          stroke="transparant"
          fontSize={12}
          tick={{ fill: 'white', opacity: 0.6 }}
        />
        <YAxis domain={['dataMin-10', 'dataMax+5']} stroke="none" />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="white"
          dot={false}
          activeDot={{ r: 2, strokeWidth: 5, strokeOpacity: 0.4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default LineGraph
