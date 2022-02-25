import React from 'react'
import '../styles/_leftBtn.scss'
import PropTypes from 'prop-types'

const LeftBtn = ({ test }) => {
  return (
    <div className="imgContainer">
      <img src={test} alt="sport" />
    </div>
  )
}
LeftBtn.propTypes = {
  img: PropTypes.object,
}

export default LeftBtn
