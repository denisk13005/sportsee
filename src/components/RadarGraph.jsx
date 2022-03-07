import React from 'react'
import {
  Radar,
  RadarChart,
  ResponsiveContainer,
  PolarAngleAxis,
  PolarRadiusAxis,
  PolarGrid,
} from 'recharts'
import '../styles/components/radarGraph.scss'

const RadarGraph = ({ performances }) => {
  const frenchTranslation = [
    'cardio',
    'Energie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité',
  ]
  for (let i = 0; i < frenchTranslation.length; i++) {
    performances.kind[i + 1] = frenchTranslation[i]
  }
  performances.performances.forEach(
    (el, index) => (el.kind = performances.kind[index + 1])
  )
  performances.performances.reverse()
  return (
    <ResponsiveContainer width="100%">
      <RadarChart data={performances.performances} outerRadius="73%">
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

export default RadarGraph
