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

const RadarGraph = ({ performances }) => {
  return (
    <ResponsiveContainer width="100%">
      <RadarChart data={performances} outerRadius="73%">
        <PolarGrid radialLines={false} fill="white" />
        <PolarAngleAxis
          dataKey="kind"
          tick={{ fill: 'white', fontSize: '12' }}
        />
        <Radar dataKey="value" fill="red" opacity={0.8} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
RadarGraph.propTypes = {
  performances: PropTypes.array.isRequired,
}

export default RadarGraph
