import React from 'react'
import {
  Radar,
  RadarChart,
  ResponsiveContainer,
  PolarAngleAxis,
  PolarGrid,
} from 'recharts'
import '../styles/components/radarGraph.scss'
import PropTypes from 'prop-types'

/**
 *
 * @param {object} performances user performances
 * @returns {ReactComponentElement}  radar graph of user performances
 */
const RadarGraph = ({ performances }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={performances}>
        <Radar dataKey="value" fill="red" opacity={0.8} />
        <PolarGrid
          radialLines={false}
          fill="white"
          polarRadius={[5, 15, 35, 55, 75, 100]}
        />

        <PolarAngleAxis
          dataKey="kind"
          tick={{ fill: 'white', fontSize: '12', dy: 3 }}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}
RadarGraph.propTypes = {
  performances: PropTypes.array.isRequired,
}

export default RadarGraph
