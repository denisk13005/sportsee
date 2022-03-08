import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/pages/errorPage.scss'

const ErrorPage = () => {
  return (
    <div className="errorPageContainer">
      <h1>404</h1>
      <p>ooooops la page demandée n'existe pas</p>
      <NavLink className="navlink" to="/">
        retour à l'accueil
      </NavLink>
    </div>
  )
}

export default ErrorPage
