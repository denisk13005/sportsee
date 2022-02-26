import React from 'react'
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
    <div>
      <img src={icone} alt="icone" />
      <div>
        <h4>
          {number}
          {unit}
        </h4>
        <p>{type}</p>
      </div>
    </div>
  )
}

export default CardInfo
