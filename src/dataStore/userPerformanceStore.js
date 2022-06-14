import { fetchUserPerformance } from '../fetchDatas'
import PropTypes from 'prop-types'

/**
 *
 * @param {number} userId
 * @returns {object} user performances datas processing for display in the component
 */
const getUserPerformance = async (userId) => {
  try {
    const datas = await fetchUserPerformance(userId)
    const frenchTranslation = [
      'cardio',
      'Energie',
      'Endurance',
      'Force',
      'Vitesse',
      'Intensité',
    ]

    //api
    //data processing for display in the component

    for (let i = 0; i < frenchTranslation.length; i++) {
      datas.kind[i + 1] = frenchTranslation[i]
    }
    datas.data.forEach((el, index) => (el.kind = datas.kind[index + 1]))
    datas.data.reverse()
    return datas.data
  } catch {
    return { data: [] }
  }
}
getUserPerformance.propTypes = {
  userId: PropTypes.number.isRequired,
}
export default getUserPerformance
