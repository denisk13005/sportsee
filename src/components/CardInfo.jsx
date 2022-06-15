import React from 'react'
import '../styles/components/cardInfo.scss'
import PropTypes from 'prop-types'
/**
 * Card info component
 * @param {string} icone
 * @param {number} number
 * @param {string} unit
 * @param {string} type
 * @returns {ReactElement} card info of daily intake
 */
const CardInfo = ({ icone, number, unit, type }) => {
  return (
    <div className="cardInfoContainer">
      <div className="imgContainer" id={type}>
        <img src={icone} alt="icone" />
      </div>
      <div>
        <p className="numberAndUnit">
          {number}
          {unit}
        </p>
        <p className="type">{type}</p>
      </div>
    </div>
  )
}
CardInfo.propTypes = {
  icone: PropTypes.string,
  number: PropTypes.number,
  unit: PropTypes.string,
  type: PropTypes.string,
}

export default CardInfo
