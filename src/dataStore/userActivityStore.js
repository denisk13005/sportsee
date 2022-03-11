import { fetchUserActivity } from '../fetchDatas'
import PropTypes from 'prop-types'

/**
 * getUserActivity
 * @param {number} userId
 * @returns {object} user activity datas processing for display in the component
 */
const getUserActivity = async (userId) => {
  const datas = await fetchUserActivity(userId)

  if (datas.data) {
    //api
    //data processing for display in the component

    datas.data.sessions.forEach(
      (el) => (el.day = parseInt(el.day.split('-').reverse().slice(0, 1)))
    )
    return datas.data.sessions
  } else {
    //mock
    //data processing for display in the component

    datas[0].sessions.forEach(
      (el) => (el.day = parseInt(el.day.split('-').reverse().slice(0, 1)))
    )
    return datas[0].sessions
  }
}
getUserActivity.propTypes = {
  userId: PropTypes.number.isRequired,
}
export default getUserActivity
