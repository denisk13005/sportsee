let mock = true

/**
 *Fetch user main datas
 * @param {string} userId
 * @returns {object} user  main datas
 */
export const fetchMainDatas = async (userId) => {
  console.log('userIdine fetchMainDatas', userId, typeof userId)
  if (mock) {
    console.log('mock')
    try {
      const userMainDatas = await fetch(`data/data.json`)
        .then((res) => res.json())
        .then((data) => data.USER_MAIN_DATA)
      return userMainDatas.filter((el) => el.id + '' === userId)[0]
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
 *fetch user activity
 * @param {string} userId
 * @returns {object} user activity
 */
export const fetchUserActivity = async (userId) => {
  if (mock) {
    try {
      const userActivity = await fetch(`data/data.json`)
        .then((res) => res.json())
        .then((data) => data.USER_ACTIVITY)
      return userActivity.filter((el) => el.userId === parseInt(userId))[0]
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
 *fetch user average sessions
 * @param {string} userId
 * @returns {object} user average sessions
 */
export const fetchUserAverageSessions = async (userId) => {
  if (mock) {
    try {
      const userAverageSessions = await fetch(`data/data.json`)
        .then((res) => res.json())
        .then((data) => data.USER_AVERAGE_SESSIONS)
      return userAverageSessions.filter(
        (el) => el.userId === parseInt(userId)
      )[0]
    } catch (err) {
      console.log(err)
    }
  } else {
    try {
      const UserAverageSession = await fetch(
        `http://localhost:5000/user/${userId}/average-sessions`
      )
        .then((res) => res.json())
        .then((data) => data)

      return UserAverageSession.data
    } catch (err) {
      console.log(err)
    }
  }
}
/**
 *fetch user performance
 * @param {string} userId
 * @returns {object} user performance
 */
export const fetchUserPerformance = async (userId) => {
  if (mock) {
    try {
      const userPerformance = await fetch(`data/data.json`)
        .then((res) => res.json())
        .then((data) => data.USER_PERFORMANCE)
      return userPerformance.filter((el) => el.userId === parseInt(userId))[0]
    } catch (err) {
      return console.log(err)
    }
  } else {
    try {
      const userPerformance = await fetch(
        `http://localhost:5000/user/${userId}/performance`
      )
        .then((res) => res.json())
        .then((data) => data)

      return userPerformance.data
    } catch (err) {
      console.log(err)
    }
  }
}
