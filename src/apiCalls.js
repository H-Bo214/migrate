export async function fetchUrbanAreas() {
  const urbanAreasAPI = 'https://api.teleport.org/api/continents/geonames%3ANA/urban_areas/'
  return fetch(urbanAreasAPI)
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

export async function getGeoNameId(slug) {
  return fetch(slug)
  .then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw res
    }
  })

}