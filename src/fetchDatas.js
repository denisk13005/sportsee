const fetchDatas = async (userId) => {
  const datas = await fetch(`http://localhost:5000/user/${userId}`)
    .then((res) => res.json())
    .then((data) => data)
  return datas
}
export default fetchDatas
