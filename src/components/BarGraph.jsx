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
} from 'recharts'
const BarGraph = ({ activity }) => {
  console.log(activity.sessions)

  return (
    <Fragment>
      <div className="description">
        <p>Activité quotidienne</p>
        <ul>
          <li id="weight">Poids (kg)</li>
          <li className="cal">Calories brûlées (kCal)</li>
        </ul>
      </div>
      <ResponsiveContainer height={280} className="barGraphContainer">
        <BarChart data={activity.sessions} className="barChart">
          <Bar dataKey="kilogram" barSize={7} radius={[5, 5, 0, 0]} />
          <Bar
            dataKey="calories"
            barSize={7}
            fill="red"
            radius={[5, 5, 0, 0]}
          />
          <XAxis
            stroke="transparant"
            tick={{ stroke: '#74798c', fontWeight: 200 }}
          />
          <YAxis
            orientation="right"
            stroke="transparant"
            padding={{ bottom: 16 }}
            tick={{ stroke: '#74798c', fontWeight: 200 }}
          />
          <Tooltip
            separator=""
            cursor={false}
            wrapperStyle={{ top: -100, left: 20 }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Fragment>
  )
}

export default BarGraph
