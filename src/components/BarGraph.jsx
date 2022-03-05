import React, { Fragment } from 'react'
import '../styles/components/barGraph.scss'
import {
  ResponsiveContainer,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  Legend,
  CartesianGrid,
} from 'recharts'
const BarGraph = ({ activity }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="customTooltip">
          <p>{`${payload[0].value}Kg`}</p>
          <p>{`${payload[1].value}Kcal`}</p>
        </div>
      )
    }

    return null
  }

  return (
    <>
      <div className="description">
        <p>Activité quotidienne</p>
        <ul>
          <li id="weight">Poids (kg)</li>
          <li className="cal">Calories brûlées (kCal)</li>
        </ul>
      </div>
      <ResponsiveContainer height={270}>
        <BarChart data={activity} className="barChart">
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            barSize={7}
            radius={[5, 5, 0, 0]}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            barSize={7}
            fill="red"
            radius={[5, 5, 0, 0]}
          />

          <XAxis
            stroke="transparant"
            tick={{ stroke: '#74798c', fontWeight: 200 }}
            // tickFormatter={}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="transparant"
            padding={{ bottom: 16 }}
            hide
            domain={['dataMin-150', 'dataMax+0']}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="transparant"
            padding={{ bottom: 16 }}
            tick={{ stroke: '#74798c', fontWeight: 200 }}
            domain={['dataMin-1', 'dataMax+0']}
          />
          <Tooltip cursor={false} content={<CustomTooltip />} />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default BarGraph
