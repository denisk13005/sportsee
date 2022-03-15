import { fetchMainDatas } from '../fetchDatas'
import PropTypes from 'prop-types'

/**
 *
 * @param {number} userId
 * @returns {object} user main datas processing for display in the component
 */
const getMainDatas = async (userId) => {
  const datas = await fetchMainDatas(userId)
  console.log(datas)
  //fetch API
  const id = datas.id
  const scores = [
    {
      score: 100,
      fill: 'white',
    },
    {
      score: (datas.todayScore || datas.score) * 100,
      fill: 'red',
    },
  ]
  const userInfos = datas.userInfos
  const keyData = datas.keyData
  return { id, scores, userInfos, keyData }

  // //MOCK DATAS
  // else {
  //   const id = datas[0].id
  //   const scores = [
  //     {
  //       score: 100,
  //       fill: 'white',
  //     },
  //     {
  //       score: (datas[0].todayScore || datas[0].score) * 100,
  //       fill: 'red',
  //     },
  //   ]

  //   const userInfos = datas[0].userInfos
  //   const keyData = datas[0].keyData
  //   return { id, scores, userInfos, keyData }
  // }
}
getMainDatas.propTypes = {
  userId: PropTypes.number.isRequired,
}
export default getMainDatas
