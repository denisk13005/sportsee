import { fetchMainDatas } from '../fetchDatas'

const getMainDatas = async (userId) => {
  const datas = await fetchMainDatas(userId)

  //fetch API
  if (datas.data) {
    const id = datas.data.id
    const score = datas.data.score || datas.data.todayScore
    const userInfos = datas.data.userInfos
    const keyData = datas.data.keyData
    return { id, score, userInfos, keyData }
  }
  //MOCK DATAS
  else {
    const id = datas[0].id
    const score = datas[0].todayScore || datas[0].score
    const userInfos = datas[0].userInfos
    const keyData = datas[0].keyData
    return { id, score, userInfos, keyData }
  }
}
export default getMainDatas
