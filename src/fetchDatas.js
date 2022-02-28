export const fetchUserMainDatas = async (userId) => {
  const userMainDatas = await fetch(`http://localhost:5000/user/${userId}`)
    .then((res) => res.json())
    .then((data) => data)
  return userMainDatas
}
// export default fetchUserMainDatas
export const fetchUserActivity = async (userId) => {
  const userActivity = await fetch(
    `http://localhost:5000/user/${userId}/activity`
  )
    .then((res) => res.json())
    .then((data) => data)

  return userActivity
}
export const fetchUserAverageSession = async (userId) => {
  const UserAverageSession = await fetch(
    `http://localhost:5000/user/${userId}/activity`
  )
    .then((res) => res.json())
    .then((data) => data)

  return UserAverageSession
}
export const fetchUserPerformance = async (userId) => {
  const userPerformance = await fetch(
    `http://localhost:5000/user/${userId}/performance`
  )
    .then((res) => res.json())
    .then((data) => data)

  return userPerformance
}
// export default fetchUserActivity
// const userActivity = await fetch(
//   `http://localhost:5000/user/${userId}/activity`
// )
//   .then((res) => res.json())
//   .then((data) => data)

// const userAverageSessions = await fetch(
//   `http://localhost:5000/user/${userId}/average-sessions`
// )
//   .then((res) => res.json())
//   .then((data) => data)
// const userPerformance = await fetch(
//   `http://localhost:5000/user/${userId}/performance`
// )
//   .then((res) => res.json())
//   .then((data) => data)
// return { userMainDatas, userActivity, userAverageSessions, userPerformance }
