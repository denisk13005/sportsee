import { fetchUserActivity } from '../fetchDatas'
import PropTypes from 'prop-types'

/**
 * getUserActivity
 * @param {number} userId
 * @returns {object} user activity datas processing for display in the component
 */
const getUserActivity = async (userId) => {
  const datas = await fetchUserActivity(userId)

  //api
  //data processing for display in the component
  datas.sessions.forEach(
    (el) => (el.day = parseInt(el.day.split('-').reverse().slice(0, 1))) // day of the month
  )
  return datas.sessions
}
getUserActivity.propTypes = {
  userId: PropTypes.number.isRequired,
}
export default getUserActivity
