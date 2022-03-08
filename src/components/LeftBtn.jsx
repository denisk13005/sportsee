import React from 'react'
import '../styles/components/leftBtn.scss'
import PropTypes from 'prop-types'

/**
 *
 * @param {string} icone
 * @returns {ReactElement}
 */
const LeftBtn = ({ icone }) => {
  return (
    <div className="imgContainer">
      <img src={icone} alt="sport" />
    </div>
  )
}
LeftBtn.propTypes = {
  icone: PropTypes.string,
}

export default LeftBtn
