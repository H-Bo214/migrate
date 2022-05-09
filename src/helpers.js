function generateRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length)
}

export function generateRandomCities(cityList) {
      const results = []
      while (results.length < 4) {
        results.push(cityList[generateRandomIndex(cityList)])
      }
      return results
    }

export function buildCityObject(cityNames, cityImages) {
  const result = cityNames.reduce((cityData, city) => {
    const obj = {}
      cityImages.forEach(img => {
      if (img.image.mobile.includes(city.slug)) {
        obj.name = city.full_name
        obj.image = img.image.mobile
        obj.ua_id = city.ua_id
        obj.slug = `https://api.teleport.org/api/urban_areas/slug:${city.slug}/`
        obj.scores = `https://api.teleport.org/api/urban_areas/slug:${city.slug}/scores`
        obj.geoNameId = city._links['ua:identifying-city'].href
      }
    })
    cityData.push(obj)
    return cityData
  }, [])
  return result
}

export function createObj(arr) {
  console.log('obj in createObj', arr)
  return arr.reduce((scoresObj, category) => {
    scoresObj[category.name] = category.score_out_of_10
    // console.log('category', category)
    // console.log('scoresObj', scoresObj)
    return scoresObj
  }, {})
}

export function cleanData(cityData, cityImg) {
  const result = Object.assign({}, ...cityData)
  const finalCityObj = {
    img: cityImg,
    name: result.name,
    scores: createObj(result.categories),
    latitude: result.location.latlon.latitude,
    longitude: result.location.latlon.longitude,
    population: result.population,
    summary: result.summary,
    rating: result.teleport_city_score
  }
  return finalCityObj
}

export function makeCityUrlsArr(cityObj) {
  const result = []
  for (let key in cityObj) {
    if (cityObj[key].includes('api.teleport.org')) {
      result.push(cityObj[key])
    }
  }
  return result
}