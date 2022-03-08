import { fetchUserAverageSessions } from '../fetchDatas'

const getUserAverageSessions = async (userId) => {
  const datas = await fetchUserAverageSessions(userId)

  const days = ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D', '']

  if (datas.data) {
    //api
    //data processing for display in the component
    datas.data.sessions = [
      { day: '', sessionLength: 30 },
      ...datas.data.sessions,
      { day: '', sessionLength: 30 },
    ]
    datas.data.sessions.forEach((el, index) => (el.day = days[index]))

    return datas.data.sessions
  } else {
    //mock
    //data processing for display in the component
    datas[0].sessions = [
      { day: '', sessionLength: 30 },
      ...datas[0].sessions,
      { day: '', sessionLength: 30 },
    ]
    datas[0].sessions.forEach((el, index) => (el.day = days[index]))
    return datas[0].sessions
  }
}

export default getUserAverageSessions
