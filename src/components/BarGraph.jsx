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
  const CustomTooltipActivity = ({ active, payload }) => {
    if (active) {
      return (
        <div className="customTooltipActivity">
          <p>{`${payload[0].value}Kg`}</p>
          <p>{`${payload[1].value}Kcal`}</p>
        </div>
      )
    }

    return null
  }

  const formatDate = () => {
    activity.forEach((date) => {
      date.day = activity.indexOf(date) + 1
    })
  }
  formatDate()

  return (
    <>
      <div className="description">
        <p>Activité quotidienne</p>
        <ul>
          <li id="weight">Poids (kg)</li>
          <li className="cal">Calories brûlées (kCal)</li>
        </ul>
      </div>
      <ResponsiveContainer height={270} width="100%">
        <BarChart data={activity} className="barChart">
          <Tooltip
            content={<CustomTooltipActivity />}
            wrapperStyle={{ top: -70, left: 27 }}
            cursor={{ opacity: 0.4 }}
          />
          <CartesianGrid strokeDasharray="2" vertical="" />
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
            stroke="#74798c"
            tick={{ stroke: '#74798c', fontWeight: 200 }}
            dataKey="day"
            padding={{ left: -50, right: -50 }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="transparant"
            tick={{ stroke: '#74798c', fontWeight: 200 }}
            domain={['dataMin-1', 'dataMax']}
            tickCount={3}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="transparant"
            hide
            domain={['dataMin-150', 'dataMax']}
            // tickCount={4}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default BarGraph
