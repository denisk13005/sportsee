import { fetchUserPerformance } from '../fetchDatas'
import PropTypes from 'prop-types'

/**
 *
 * @param {number} userId
 * @returns {object} user performances datas processing for display in the component
 */
const getUserPerformance = async (userId) => {
  const datas = await fetchUserPerformance(userId)
  const frenchTranslation = [
    'cardio',
    'Energie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité',
  ]

  if (datas.data) {
    //api
    //data processing for display in the component

    for (let i = 0; i < frenchTranslation.length; i++) {
      datas.data.kind[i + 1] = frenchTranslation[i]
    }
    datas.data.data.forEach(
      (el, index) => (el.kind = datas.data.kind[index + 1])
    )
    datas.data.data.reverse()
    return datas.data.data
  } else {
    //mock
    //data processing for display in the component

    for (let i = 0; i < frenchTranslation.length; i++) {
      datas[0].kind[i + 1] = frenchTranslation[i]
    }
    datas[0].data.forEach((el, index) => (el.kind = datas[0].kind[index + 1]))
    datas[0].data.reverse()
    return datas[0].data
  }
}
getUserPerformance.propTypes = {
  userId: PropTypes.number.isRequired,
}
export default getUserPerformance
