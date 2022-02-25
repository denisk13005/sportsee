import React from 'react'
import '../styles/components/topNav.scss'
import logo from '../assets/logo.svg'

const TopNav = () => {
  return (
    <header className="topNav">
      <img src={logo} alt="logo" />
      <nav className="navigation">
        <ul>
          <li>Acceuil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  )
}

export default TopNav
