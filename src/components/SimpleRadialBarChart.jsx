import React from 'react'
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts'
import PropTypes from 'prop-types'

/**
 *
 * @param {object} userMainDatas user main datas
 * @returns {ReactComponentElement} radial bar chart of percentage of goal
 */
const SimpleRadialBarChart = ({ userMainDatas }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        width={730}
        height={250}
        innerRadius="50%"
        outerRadius="70%"
        data={userMainDatas.scores}
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
