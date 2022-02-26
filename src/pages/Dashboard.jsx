import React from 'react'
import Header from '../components/Header'
import LeftNavBar from '../components/LeftNavBar'
import TopNav from '../components/TopNav'
import '../styles/pages/dashboard.scss'

const Dashboard = () => {
  return (
    <div>
      <TopNav />
      <LeftNavBar />
      <div className="mainContent">
        <Header userName={'Thomas'} />
        <div className="graphsAndDailyContainer">
          <section className="graphsContainer">
            <div className="dailyActivity"></div>
            <div className="otherGraph"></div>
          </section>
          <aside className="dailyIntake">
            <div className="cal"></div>
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
