import React from 'react'
import '../styles/components/leftBtn.scss'
import PropTypes from 'prop-types'

const LeftBtn = ({ test }) => {
  return (
    <div className="imgContainer">
      <img src={test} alt="sport" />
    </div>
  )
}
LeftBtn.propTypes = {
  test: PropTypes.string,
}

export default LeftBtn
