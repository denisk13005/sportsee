import { fetchMainDatas } from '../fetchDatas'
import PropTypes from 'prop-types'

/**
 *
 * @param {number} userId
 * @returns {object} user main datas processing for display in the component
 */
const getMainDatas = async (userId) => {
  const datas = await fetchMainDatas(userId)

  const id = datas.id
  const scores = [
    {
      score: 100,
      fill: 'transparent',
    },
    {
      score: (datas.todayScore || datas.score) * 100,
      fill: 'red',
    },
  ]
  const userInfos = datas.userInfos
  const keyData = datas.keyData
  return { id, scores, userInfos, keyData }
}
getMainDatas.propTypes = {
  userId: PropTypes.number.isRequired,
}
export default getMainDatas
