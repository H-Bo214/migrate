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

export async function fetchImages(urlsArray) {
  let city1 = fetch(urlsArray[0]).then(res => res.json())
  let city2 = fetch(urlsArray[1]).then(res => res.json())
  let city3 = fetch(urlsArray[2]).then(res => res.json())
  let city4 = fetch(urlsArray[3]).then(res => res.json())
  let results = await Promise.all([city1, city2, city3, city4])
  return results
}