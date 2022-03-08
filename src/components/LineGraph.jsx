import React from 'react'
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'
import '../styles/components/lineGraph.scss'
import PropTypes from 'prop-types'
/**
 *Line graph
 * @param {Object} average user average sessions
 * @returns {ReactComponentElement} line graph of user average sessions
 */
const LineGraph = ({ average }) => {
  /**
   * CustomTooltipAverage
   * @param {boolean} active cursor in graph ?
   * @param {object} payload contain of props
   * @returns {HTMLElement} custom tooltip
   */
  const CustomTooltipAverage = ({ active, payload }) => {
    if (active && payload[0].payload.day !== '') {
      return (
        <div className="customTooltipAverage">
          <p className="pCustomTooltipAverage">{`${payload[0].value}min`}</p>
        </div>
      )
    }

    return null
  }

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
        <Tooltip
          content={<CustomTooltipAverage />}
          s
          cursor={{ opacity: 0.4 }}
        />
        <XAxis
          dataKey="day"
          stroke="transparant"
          fontSize={12}
          tick={{ fill: 'white', opacity: 0.6 }}
          margin={{ right: -50 }}
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
LineGraph.propTypes = {
  average: PropTypes.object.isRequired,
}

export default LineGraph
