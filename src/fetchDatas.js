// /////FETCH API
// /**
//  *FETCH MAIN DATAS
//  * @param {Number} userId id of user selected
//  * @returns {object} userMainDatas
//  */
// export const fetchMainDatas = async (userId) => {
// const userMainDatas = await fetch(`http://localhost:5000/user/${userId}`)
//   .then((res) => res.json())
//   .then((data) => data)
// return userMainDatas
// }
// /**
//  *FETCH USER ACTIVITY
//  * @param {number} userId is of user selected
//  * @returns {object} userActivity
//  */
// export const fetchUserActivity = async (userId) => {
// const userActivity = await fetch(
//   `http://localhost:5000/user/${userId}/activity`
// )
//   .then((res) => res.json())
//   .then((data) => data)

// return userActivity
// }
// /**
//  *FETCH USER AVERAGE SESSIONS
//  * @param {number} userId id of user selected
//  * @returns {object} userAverageSession
//  */
// export const fetchUserAverageSessions = async (userId) => {
//   const UserAverageSession = await fetch(
//     `http://localhost:5000/user/${userId}/average-sessions`
//   )
//     .then((res) => res.json())
//     .then((data) => data)

//   return UserAverageSession
// }
// /**
//  *FETCH USER PERFORMANCE
//  * @param {number} userId id of user selected
//  * @returns {object} userPerformance
//  */
// export const fetchUserPerformance = async (userId) => {
//   const userPerformance = await fetch(
//     `http://localhost:5000/user/${userId}/performance`
//   )
//     .then((res) => res.json())
//     .then((data) => data)

//   return userPerformance
// }
let mock = false
/////////////FETCH MOCK DATAS
/**
 *
 * @param {string} userId
 * @returns {object} user  main datas
 */
export const fetchMainDatas = async (userId) => {
  if (mock) {
    console.log('mock')
    try {
      const userMainDatas = await fetch(`data/data.json`)
        .then((res) => res.json())
        .then((data) => data.USER_MAIN_DATA)
      return userMainDatas.filter(
        (el) => el.id === parseInt(parseInt(userId))
      )[0]
    } catch (err) {
      return console.log(err)
    }
  } else {
    console.log('api')
    try {
      const userMainDatas = await fetch(`http://localhost:5000/user/${userId}`)
        .then((res) => res.json())
        .then((data) => data)
      return userMainDatas.data
    } catch (err) {
      console.log(err)
    }
  }
}
/**
 *
 * @param {string} userId
 * @returns {object} user activity
 */
export const fetchUserActivity = async (userId) => {
  if (mock) {
    try {
      const userActivity = await fetch(`data/data.json`)
        .then((res) => res.json())
        .then((data) => data.USER_ACTIVITY)
      return userActivity.filter(
        (el) => el.userId === parseInt(parseInt(userId))
      )[0]
    } catch (err) {
      console.log(err)
    }
  } else {
    try {
      const userActivity = await fetch(
        `http://localhost:5000/user/${userId}/activity`
      )
        .then((res) => res.json())
        .then((data) => data)

      return userActivity.data
    } catch (err) {
      console.log(err)
    }
  }
}
/**
 *
 * @param {string} userId
 * @returns {object} user average sessions
 */
export const fetchUserAverageSessions = async (userId) => {
  try {
    const userAverageSessions = await fetch(`data/data.json`)
      .then((res) => res.json())
      .then((data) => data.USER_AVERAGE_SESSIONS)
    return userAverageSessions.filter((el) => el.userId === parseInt(userId))
  } catch (err) {
    console.log(err)
  }
}
/**
 *
 * @param {string} userId
 * @returns {object} user performance
 */
export const fetchUserPerformance = async (userId) => {
  try {
    const userPerformance = await fetch(`data/data.json`)
      .then((res) => res.json())
      .then((data) => data.USER_PERFORMANCE)
    return userPerformance.filter((el) => el.userId === parseInt(userId))
  } catch (err) {
    return console.log(err)
  }
}
