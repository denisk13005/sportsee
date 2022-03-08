import { fetchUserActivity } from '../fetchDatas'
/**
 * getUserActivity
 * @param {number} userId
 * @returns {Object} datas processing for display in the component
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

export default getUserActivity
