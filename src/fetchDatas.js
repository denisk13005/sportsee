// export const fetchUserMainDatas = async (userId) => {
//   const userMainDatas = await fetch(`http://localhost:5000/user/${userId}`)
//     .then((res) => res.json())
//     .then((data) => data)
//   return userMainDatas
// }
// // export default fetchUserMainDatas
// export const fetchUserActivity = async (userId) => {
//   const userActivity = await fetch(
//     `http://localhost:5000/user/${userId}/activity`
//   )
//     .then((res) => res.json())
//     .then((data) => data)

//   return userActivity
// }
// export const fetchUserAverageSession = async (userId) => {
//   const UserAverageSession = await fetch(
//     `http://localhost:5000/user/${userId}/activity`
//   )
//     .then((res) => res.json())
//     .then((data) => data)

//   return UserAverageSession
// }
// export const fetchUserPerformance = async (userId) => {
//   const userPerformance = await fetch(
//     `http://localhost:5000/user/${userId}/performance`
//   )
//     .then((res) => res.json())
//     .then((data) => data)

//   return userPerformance
// }

/////////////FETCH MOCK DATAS
/**
 *
 * @param {string} userId
 * @returns {Object} user  main datas
 */
export const fetchMainDatas = async (userId) => {
  const userMainDatas = await fetch(`data/data.json`)
    .then((res) => res.json())
    .then((data) => data.USER_MAIN_DATA)
  return userMainDatas.filter((el) => el.id === parseInt(parseInt(userId)))
}
/**
 *
 * @param {string} userId
 * @returns {object} user activity
 */
export const fetchUserActivity = async (userId) => {
  const userActivity = await fetch(`data/data.json`)
    .then((res) => res.json())
    .then((data) => data.USER_ACTIVITY)
  return userActivity.filter((el) => el.userId === parseInt(parseInt(userId)))
}
/**
 *
 * @param {string} userId
 * @returns user average sessions
 */
export const fetchUserAverageSessions = async (userId) => {
  const userAverageSessions = await fetch(`data/data.json`)
    .then((res) => res.json())
    .then((data) => data.USER_AVERAGE_SESSIONS)
  return userAverageSessions.filter((el) => el.userId === parseInt(userId))
}
