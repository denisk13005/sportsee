import React from 'react'
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts'
import PropTypes from 'prop-types'

/**
 *
 * @param {Object} userMainDatas user main datas
 * @returns {ReactComponentElement} radial bar chart of percentage of goal
 */
const SimpleRadialBarChart = ({ userMainDatas }) => {
  const data = [
    {
      score: 100,
      fill: 'white',
    },
    {
      score: userMainDatas.score * 100,
      fill: 'red',
    },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        width={730}
        height={250}
        innerRadius="50%"
        outerRadius="70%"
        data={data}
        startAngle={200}
        endAngle={-360 + 200}
      >
        <circle cx="50%" cy="50%" fill="white" r="70"></circle>
        <RadialBar clockWise cornerRadius={10} fill="#FF0000" dataKey="score" />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}
SimpleRadialBarChart.propTypes = {
  userMainDatas: PropTypes.object.isRequired,
}
export default SimpleRadialBarChart
