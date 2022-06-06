export async function fetchData(endPoint) {
  return fetch(endPoint)
  .then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw res
    }
  })
}

export async function fetchBatchData(urlsArray) {
  const calls = urlsArray.map(url => fetch(url).then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw res
    }
  }))
  return await Promise.all([...calls])
}
