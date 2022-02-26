import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import LeftNavBar from '../components/LeftNavBar'
import TopNav from '../components/TopNav'
import '../styles/pages/dashboard.scss'
import fetchDatas from '../fetchDatas'
import flammeRouge from '../assets/flammeRouge.svg'

const Dashboard = () => {
  const [datas, setDatas] = useState()

  const getDatas = async () => {
    setDatas(await fetchDatas())
  }
  useEffect(() => {
    getDatas()
  }, [])
  if (datas) {
    console.log(datas)
  }
  return (
    <div>
      <TopNav />
      <LeftNavBar />
      <div className="mainContent">
        <Header userName={'thomas'} />
        <div className="graphsAndDailyContainer">
          <section className="graphsContainer">
            <div className="dailyActivity"></div>
            <div className="otherGraph"></div>
          </section>
          <aside className="dailyIntake">
            <div className="cal">
              <img src={flammeRouge} alt="flamme" />
              <div>
                <h4>1900</h4>
                <p>Calories</p>
              </div>
            </div>
            <div className="prot"></div>
            <div className="gluc"></div>
            <div className="lip"></div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
