const fetchDatas = async () => {
  const datas = await fetch(`http://localhost:5000/user/12`)
    .then((res) => res.json())
    .then((data) => data)
  return datas
}
export default fetchDatas
