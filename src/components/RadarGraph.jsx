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
  console.log(performances.kind)
  return (
    <ResponsiveContainer>
      <RadarChart data={performances.performances}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        {/* <PolarRadiusAxis angle={30} domain={[0, 150]} /> */}
        <Radar dataKey="value" />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default RadarGraph
