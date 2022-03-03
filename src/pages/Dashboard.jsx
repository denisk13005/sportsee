/* eslint-disable react-hooks/exhaustive-deps */
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
import {
  fetchMainDatas,
  fetchUserActivity,
  fetchUserAverageSessions,
} from '../fetchMocks'

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

  const loadUserMainDatas = async () => {
    setUserMainDatas(await fetchMainDatas(userId))
  }
  useEffect(() => {
    loadUserMainDatas()
  }, [])
  const loadUserActivity = async () => {
    setUserActivity(await fetchUserActivity(userId))
  }
  useEffect(() => {
    loadUserActivity()
  }, [])
  const loadUserAverageSessions = async () => {
    setUserAverageSessions(await fetchUserAverageSessions(userId))
  }
  useEffect(() => {
    loadUserAverageSessions()
  }, [])

  if (userMainDatas) {
    console.log(userAverageSessions)
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
          <Header userName={userMainDatas[0].userInfos.firstName} />

          <div className="graphsAndDailyContainer">
            <section className="graphsContainer">
              <div className="dailyActivity">
                {userActivity ? <BarGraph activity={userActivity[0]} /> : null}
              </div>
              <div className="otherGraph"></div>
            </section>
            <aside className="dailyIntake">
              <CardInfo
                icone={flammeRouge}
                number={userMainDatas[0].keyData.calorieCount}
                unit={'kCal'}
                type={'Calories'}
              />
              <CardInfo
                icone={chicken}
                number={userMainDatas[0].keyData.proteinCount}
                unit={'g'}
                type={'Protéines'}
              />
              <CardInfo
                icone={apple}
                number={userMainDatas[0].keyData.carbohydrateCount}
                unit={'g'}
                type={'Glucides'}
              />
              <CardInfo
                icone={burger}
                number={userMainDatas[0].keyData.lipidCount}
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
