export const fetchMockDatas = async () => {
  const userMainDatas = await fetch(`data/data.json`)
    .then((res) => res.json())
    .then((data) => data)
  return userMainDatas
}
