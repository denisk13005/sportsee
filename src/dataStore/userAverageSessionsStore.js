import { fetchUserAverageSessions } from '../fetchDatas'
import PropTypes from 'prop-types'

/**
 *
 * @param {number} userId
 * @returns {Object} user average sessions datas processing for display in the component
 */
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

getUserAverageSessions.propTypes = {
  userId: PropTypes.number.isRequired,
}

export default getUserAverageSessions
