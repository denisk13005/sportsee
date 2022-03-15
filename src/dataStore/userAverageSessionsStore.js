import { fetchUserAverageSessions } from '../fetchDatas'
import PropTypes from 'prop-types'

/**
 *
 * @param {number} userId
 * @returns {object} user average sessions datas processing for display in the component
 */
const getUserAverageSessions = async (userId) => {
  const datas = await fetchUserAverageSessions(userId)

  const days = ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D', '']

  //api
  //data processing for display in the component
  datas.sessions = [
    { day: '', sessionLength: 30 },
    ...datas.sessions,
    { day: '', sessionLength: 30 },
  ]
  datas.sessions.forEach((el, index) => (el.day = days[index]))

  return datas.sessions
}

getUserAverageSessions.propTypes = {
  userId: PropTypes.number.isRequired,
}

export default getUserAverageSessions
