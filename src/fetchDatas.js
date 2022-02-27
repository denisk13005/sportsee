const fetchDatas = async (userId) => {
  const userMainDatas = await fetch(`http://localhost:5000/user/${userId}`)
    .then((res) => res.json())
    .then((data) => data)

  const userActivity = await fetch(
    `http://localhost:5000/user/${userId}/activity`
  )
    .then((res) => res.json())
    .then((data) => data)

  const userAverageSessions = await fetch(
    `http://localhost:5000/user/${userId}/average-sessions`
  )
    .then((res) => res.json())
    .then((data) => data)
  const userPerformance = await fetch(
    `http://localhost:5000/user/${userId}/performance`
  )
    .then((res) => res.json())
    .then((data) => data)
  return { userMainDatas, userActivity, userAverageSessions, userPerformance }
}
export default fetchDatas
