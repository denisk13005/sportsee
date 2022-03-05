/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import LeftNavBar from '../components/LeftNavBar'
import TopNav from '../components/TopNav'
import '../styles/pages/dashboard.scss'
import CardInfo from '../components/CardInfo'
import flammeRouge from '../assets/flammeRouge.svg'
import chicken from '../assets/PouletBleu.svg'
import apple from '../assets/pommeJaune.svg'
import burger from '../assets/cheeseburger.svg'
import { useParams } from 'react-router-dom'
import {
  fetchMainDatas,
  fetchUserActivity,
  fetchUserAverageSessions,
  fetchUserPerformance,
} from '../fetchDatas'

import BarGraph from '../components/BarGraph'

/**
 *
 * @returns {ReactElements}
 */
const Dashboard = () => {
  /**
   * @param {object} datas users datas get from api
   */
  let { userId } = useParams()
  console.log(userId)

  const [userMainDatas, setUserMainDatas] = useState()
  const [userActivity, setUserActivity] = useState()
  const [userAverageSessions, setUserAverageSessions] = useState()
  const [userPerformance, setUserPerformance] = useState()

  const loadUserMainDatas = async () => {
    const datas = await fetchMainDatas(userId)
    console.log(datas)
    if (datas.data) {
      const id = datas.data.id
      const score = datas.data.score
      const userInfos = datas.data.userInfos
      setUserMainDatas({ id, score, userInfos })
    } else {
      const id = datas[0].id
      const score = datas[0].score
      const userInfos = datas[0].userInfos
      setUserMainDatas({ id, score, userInfos })
    }
  }
  const loadUserActivity = async () => {
    setUserActivity(await fetchUserActivity(userId))
  }
  const loadUserAverageSessions = async () => {
    setUserAverageSessions(await fetchUserAverageSessions(userId))
  }
  const loadUserPerformance = async () => {
    setUserPerformance(await fetchUserPerformance(userId))
  }
  useEffect(() => {
    loadUserMainDatas()
    loadUserActivity()
    loadUserAverageSessions()
    loadUserPerformance()
  }, [userId])

  if (userMainDatas) {
    console.log(userMainDatas)
  }

  // fetch API
  // const [userMainDatas, setUserMainDatas] = useState()

  // const getDatas = async () => {
  //   setUserMainDatas(await fetchUserMainDatas(userId))
  // }
  // useEffect(() => {
  //   getDatas()
  // }, [])
  // console.log(userMainDatas)

  return (
    <div>
      <TopNav />
      <LeftNavBar />
      {userMainDatas ? (
        <div className="mainContent">
          <Header userName={userMainDatas.userInfos.firstName} />

          {/* <div className="graphsAndDailyContainer">
            <section className="graphsContainer">
              <div className="dailyActivity">
                {userActivity ? <BarGraph activity={userActivity} /> : null}
              </div>
              <div className="otherGraph"></div>
            </section>
            <aside className="dailyIntake">
              <CardInfo
                icone={flammeRouge}
                number={userMainDatas.keyData.calorieCount}
                unit={'kCal'}
                type={'Calories'}
              />
              <CardInfo
                icone={chicken}
                number={userMainDatas.keyData.proteinCount}
                unit={'g'}
                type={'Protéines'}
              />
              <CardInfo
                icone={apple}
                number={userMainDatas.keyData.carbohydrateCount}
                unit={'g'}
                type={'Glucides'}
              />
              <CardInfo
                icone={burger}
                number={userMainDatas.keyData.lipidCount}
                unit={'g'}
                type={'Lipides'}
              />
            </aside>
          </div> */}
        </div>
      ) : null}
    </div>
  )
}

export default Dashboard
