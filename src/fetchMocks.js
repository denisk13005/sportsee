export const fetchMainDatas = async (userId) => {
  const userMainDatas = await fetch(`data/data.json`)
    .then((res) => res.json())
    .then((data) => data.USER_MAIN_DATA)
  return userMainDatas.filter((el) => el.id === parseInt(parseInt(userId)))
}
export const fetchUserActivity = async (userId) => {
  const userActivity = await fetch(`data/data.json`)
    .then((res) => res.json())
    .then((data) => data.USER_ACTIVITY)
  return userActivity.filter((el) => el.userId === parseInt(parseInt(userId)))
}
// export const fetchMainDatas = async (userId) => {
//   const userMainDatas = await fetch(`data/data.json`)
//     .then((res) => res.json())
//     .then((data) => data.USER_MAIN_DATA)
//   return userMainDatas.filter((el) => el.id === parseInt(parseInt(userId)))
// }
