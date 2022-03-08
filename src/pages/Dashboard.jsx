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
import LineGraph from '../components/LineGraph'
import RadarGraph from '../components/RadarGraph'
import SimpleRadialBarChart from '../components/SimpleRadialBarChart'

/**
 *
 * @returns {ReactElements}
 */
const Dashboard = () => {
  /**
   * @param {object} datas users datas get from api
   */
  let { userId } = useParams()

  const [userMainDatas, setUserMainDatas] = useState()
  const [userActivity, setUserActivity] = useState()
  const [userAverageSessions, setUserAverageSessions] = useState()
  const [userPerformance, setUserPerformance] = useState()

  // DATAS PROCESSING
  const loadUserMainDatas = async () => {
    const datas = await fetchMainDatas(userId)
    //fetch API
    if (datas.data) {
      const id = datas.data.id
      const score = datas.data.score
      const userInfos = datas.data.userInfos
      const keyData = datas.data.keyData
      setUserMainDatas({ id, score, userInfos, keyData })
    }
    //MOCK DATAS
    else {
      const id = datas[0].id
      const score = datas[0].todayScore || datas[0].score
      const userInfos = datas[0].userInfos
      const keyData = datas[0].keyData
      setUserMainDatas({ id, score, keyData, userInfos })
    }
  }

  const loadUserActivity = async () => {
    const datas = await fetchUserActivity(userId)
    if (datas.data) {
      const sessions = datas.data.sessions
      setUserActivity(sessions)
    } else {
      const sessions = datas[0].sessions
      setUserActivity(sessions)
    }
  }
  const loadUserAverageSessions = async () => {
    const datas = await fetchUserAverageSessions(userId)
    if (datas.data) {
      const sessions = datas.data.sessions
      setUserAverageSessions(sessions)
    } else {
      const sessions = datas[0].sessions
      setUserAverageSessions(sessions)
    }
  }
  const loadUserPerformance = async () => {
    const datas = await fetchUserPerformance(userId)
    if (datas.data) {
      const performances = datas.data.data
      const kind = datas.data.kind
      setUserPerformance({ performances, kind })
    } else {
      const performances = datas[0].data
      const kind = datas[0].kind

      setUserPerformance({ performances, kind })
    }
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

  return (
    <div>
      <TopNav />
      <LeftNavBar />
      {userMainDatas ? (
        <div className="mainContent">
          <Header userName={userMainDatas.userInfos.firstName} />

          <div className="graphsAndDailyContainer">
            <section className="graphsContainer">
              <div className="dailyActivity">
                {userActivity ? <BarGraph activity={userActivity} /> : null}
              </div>
              <div className="otherGraph">
                <div className="averageSessions">
                  <p className="pDescription">
                    Durée moyenne des <br />
                    sessions
                  </p>
                  {userAverageSessions ? (
                    <LineGraph average={userAverageSessions} />
                  ) : null}
                </div>
                <div className="performances">
                  {userPerformance ? (
                    <RadarGraph performances={userPerformance} />
                  ) : null}
                </div>
                <div className="score">
                  <p>Score</p>
                  <div className="radarBarChart">
                    <SimpleRadialBarChart
                      userMainDatas={userMainDatas}
                      className="radar"
                    />
                    <div className="userObjectif">
                      <p className="percent"> {userMainDatas.score * 100}%</p>
                      <p>
                        de votre <br />
                        objectif
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Dashboard
