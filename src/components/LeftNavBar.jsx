import React from 'react'
import LeftBtn from './LeftBtn'
import meditation from '../assets/meditation.svg'
import nageur from '../assets/nageur.svg'
import cycliste from '../assets/cycliste.svg'
import haltere from '../assets/haltere.svg'
import copyright from '../assets/copyright.svg'
import '../styles/components/leftNavBar.scss'

const LeftNavBar = () => {
  console.log(typeof meditation)
  return (
    <aside className="leftNavBar">
      <div className="leftBtnContainer">
        <LeftBtn test={meditation} />
        <LeftBtn test={nageur} />
        <LeftBtn test={cycliste} />
        <LeftBtn test={haltere} />
      </div>
      <img className="copyright" src={copyright} alt="copyright" />
    </aside>
  )
}

export default LeftNavBar
