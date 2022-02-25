import React from 'react'
import Header from '../components/Header'
import LeftNavBar from '../components/LeftNavBar'
import TopNav from '../components/TopNav'
import '../styles/pages/dashboard.scss'

const Dashboard = () => {
  return (
    <div>
      <TopNav />
      <div className="mainContent">
        <LeftNavBar />
        <Header userName={'Thomas'} />
      </div>
    </div>
  )
}

export default Dashboard
