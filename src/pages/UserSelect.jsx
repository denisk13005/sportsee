import { NavLink } from 'react-router-dom'
import karl from '../assets/karl.jpg'
import cecilia from '../assets/cecilia.jpg'
import john from '../assets/john.jpg'
import '../styles/pages/userSelect.scss'
import TopNav from '../components/TopNav'
import LeftNavBar from '../components/LeftNavBar'
import { fetchMainDatas } from '../fetchMocks'
import { useEffect, useState } from 'react'

const UserSelect = () => {
  let userId = 12
  const [userMainDatas, setDatas] = useState()

  const loadDatas = async () => {
    setDatas(await fetchMainDatas(userId))
  }

  useEffect(() => {
    loadDatas()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="userSelect">
      <TopNav />
      <LeftNavBar />
      <div className="userContainer">
        <ul>
          <NavLink className="navlink" to="/12">
            <div className="userCard">
              <div className="imgContainer">
                <img src={karl} alt="karl " />
              </div>
              <p>Karl</p>
              <p>Dovineau</p>
            </div>
          </NavLink>

          <NavLink className="navlink" to="/18">
            <div className="userCard">
              <div className="imgContainer">
                <img src={cecilia} alt="karl " />
              </div>
              <p>Cecilia</p>
              <p>Ratorez</p>
            </div>
          </NavLink>
          <NavLink className="navlink" to="/errorPage">
            <div className="userCard">
              <div className="imgContainer">
                <img src={john} alt="karl " />
              </div>
              <p>John</p>
              <p>Doe</p>
            </div>
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default UserSelect
