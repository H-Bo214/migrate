export function fetchUrbanAreas() {
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
