import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import LeftNavBar from '../components/LeftNavBar'
import TopNav from '../components/TopNav'
import '../styles/pages/dashboard.scss'
import fetchDatas from '../fetchDatas'
import CardInfo from '../components/CardInfo'
import flammeRouge from '../assets/flammeRouge.svg'
import chicken from '../assets/PouletBleu.svg'
import apple from '../assets/pommeJaune.svg'
import burger from '../assets/cheeseburger.svg'
/**
 *
 * @returns {ReactElements}
 */
const Dashboard = () => {
  /**
   * @param {object} datas users datas get from api
   */
  const [datas, setDatas] = useState()

  const getDatas = async () => {
    setDatas(await fetchDatas(12))
  }
  useEffect(() => {
    getDatas()
  }, [])
  console.log(datas)

  return (
    <div>
      <TopNav />
      <LeftNavBar />
      {datas ? (
        <div className="mainContent">
          <Header userName={datas.userMainDatas.data.userInfos.firstName} />

          <div className="graphsAndDailyContainer">
            <section className="graphsContainer">
              <div className="dailyActivity"></div>
              <div className="otherGraph"></div>
            </section>
            <aside className="dailyIntake">
              <CardInfo
                icone={flammeRouge}
                number={datas.data.keyData.calorieCount}
                unit={'kCal'}
                type={'Calorie'}
              />
              <CardInfo
                icone={chicken}
                number={datas.data.keyData.proteinCount}
                unit={'g'}
                type={'Protéines'}
              />
              <CardInfo
                icone={apple}
                number={datas.data.keyData.carbohydrateCount}
                unit={'g'}
                type={'Glucides'}
              />
              <CardInfo
                icone={burger}
                number={datas.data.keyData.lipidCount}
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
