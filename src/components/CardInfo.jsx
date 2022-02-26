import React from 'react'
import '../styles/components/cardInfo.scss'
/**
 * Card info component
 * @param {string} icone
 * @param {string} number
 * @param {string} unit
 * @param {string} type
 * @returns {ReactElement} card info of daily intake
 */
const CardInfo = ({ icone, number, unit, type }) => {
  return (
    <div className="container">
      <img src={icone} alt="icone" />
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

export default CardInfo
