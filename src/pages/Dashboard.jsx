import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import LeftNavBar from '../components/LeftNavBar'
import TopNav from '../components/TopNav'
import '../styles/pages/dashboard.scss'
import { fetchUserMainDatas } from '../fetchDatas'
import CardInfo from '../components/CardInfo'
import flammeRouge from '../assets/flammeRouge.svg'
import chicken from '../assets/PouletBleu.svg'
import apple from '../assets/pommeJaune.svg'
import burger from '../assets/cheeseburger.svg'
import { useParams } from 'react-router-dom'
/**
 *
 * @returns {ReactElements}
 */
const Dashboard = () => {
  /**
   * @param {object} datas users datas get from api
   */
  const { userId } = useParams()
  console.log(userId)

  const [userMainDatas, setUserMainDatas] = useState()

  const getDatas = async () => {
    setUserMainDatas(await fetchUserMainDatas(userId))
  }
  useEffect(() => {
    getDatas()
  }, [])
  console.log(userMainDatas)

  return (
    <div>
      <TopNav />
      <LeftNavBar />
      {userMainDatas ? (
        <div className="mainContent">
          <Header userName={userMainDatas.data.userInfos.firstName} />

          <div className="graphsAndDailyContainer">
            <section className="graphsContainer">
              <div className="dailyActivity"></div>
              <div className="otherGraph"></div>
            </section>
            <aside className="dailyIntake">
              <CardInfo
                icone={flammeRouge}
                number={userMainDatas.data.keyData.calorieCount}
                unit={'kCal'}
                type={'Calorie'}
              />
              <CardInfo
                icone={chicken}
                number={userMainDatas.data.keyData.proteinCount}
                unit={'g'}
                type={'Protéines'}
              />
              <CardInfo
                icone={apple}
                number={userMainDatas.data.keyData.carbohydrateCount}
                unit={'g'}
                type={'Glucides'}
              />
              <CardInfo
                icone={burger}
                number={userMainDatas.data.keyData.lipidCount}
                unit={'g'}
                type={'Lipides'}
              />
            </aside>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Dashboard
