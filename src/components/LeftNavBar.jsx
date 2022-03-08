import React from 'react'
import LeftBtn from './LeftBtn'
import meditation from '../assets/meditation.svg'
import nageur from '../assets/nageur.svg'
import cycliste from '../assets/cycliste.svg'
import haltere from '../assets/haltere.svg'
import copyright from '../assets/copyright.svg'
import '../styles/components/leftNavBar.scss'
import PropTypes from 'prop-types'

/**
 *
 * @returns {ReactElement}
 */
const LeftNavBar = () => {
  return (
    <aside className="leftNavBar">
      <div className="leftBtnContainer">
        <LeftBtn icone={meditation} />
        <LeftBtn icone={nageur} />
        <LeftBtn icone={cycliste} />
        <LeftBtn icone={haltere} />
      </div>
      <img className="copyright" src={copyright} alt="copyright" />
    </aside>
  )
}
LeftBtn.propTypes = {
  icone: PropTypes.string,
}
export default LeftNavBar
