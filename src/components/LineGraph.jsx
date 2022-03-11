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
 * @param {object} average user average sessions
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
  let div = document.querySelector('.averageSessions')

  const gradientBackground = (e) => {
    if (e.isTooltipActive === true) {
      let windowWidth = div.clientWidth
      let mouseXpercentage = Math.round(
        (e.activeCoordinate.x / windowWidth) * 100
      )
      div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
    }
  }

  const defaultBackground = (e) => {
    div.style.background = 'red'
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
        onMouseMove={gradientBackground}
        onMouseLeave={defaultBackground}
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
  average: PropTypes.array.isRequired,
}

export default LineGraph
