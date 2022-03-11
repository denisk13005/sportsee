import React, { Fragment } from 'react'
import '../styles/components/barGraph.scss'
import {
  ResponsiveContainer,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid,
} from 'recharts'
import PropTypes from 'prop-types'

/**
 *
 * @param {object} activity user activity
 * @returns {ReactComponentElement} Bar graph of user activity
 */
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
            cursor={{ opacity: 0.4 }}
          />
          <CartesianGrid strokeDasharray="1" vertical="" />
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
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}
BarGraph.propTypes = {
  activity: PropTypes.array.isRequired,
}

export default BarGraph
