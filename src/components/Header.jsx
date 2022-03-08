import React from 'react'
import '../styles/components/header.scss'
import clap from '../assets/clap.png'
import PropTypes from 'prop-types'

/**
 * Dashboard header to greet the user
 * @param {string} userName user name
 * @returns {ReactElement} hi user
 */

const Header = ({ userName }) => {
  return (
    <div className="title">
      <div className="hello">
        <h1>Bonjour</h1>
        <h1 className="userName">{userName}</h1>
      </div>
      <p className="congrats">
        Félicitation ! Vous avez explosé vos objectifs hier
        <img src={clap} alt="clap" />
      </p>
    </div>
  )
}
Header.propTypes = {
  userName: PropTypes.string,
}

export default Header
