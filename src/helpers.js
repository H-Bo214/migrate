// Generates a array of random cities
export const generateRandomCities = (count, arr) => {
  let answer = []
  let counter = 0
  while (counter < count) {
    let rand = arr[Math.floor(Math.random() * arr.length)]
    if (answer.some((an) => an === rand) === false) {
      answer.push(rand)
      counter++
    }
  }
  return answer
}

// Creates an object containing the necessary demographic data to display in the UI
export const buildCityObject = (cities, cityImages) => {
  const result = cities.reduce((citiesData, city) => {
    const obj = {}
    cityImages.forEach((img) => {
      if (img.image.mobile.includes(city.slug)) {
        obj.name = city.full_name
        obj.image = img.image.mobile
        obj.ua_id = city.ua_id
        obj.slug = `https://api.teleport.org/api/urban_areas/slug:${city.slug}/`
        obj.scores = `https://api.teleport.org/api/urban_areas/slug:${city.slug}/scores`
        obj.geoNameId = city._links["ua:identifying-city"].href
      }
    })
    citiesData.push(obj)
    return citiesData
  }, [])
  return result
}

// Creates an array of endpoints
export const makeCityEndPointsArr = (cityObj) => {
  const result = []
  for (let key in cityObj) {
    if (cityObj[key].includes("api.teleport.org")) {
      result.push(cityObj[key])
    }
  }
  return result
}

// Creates dropdown options for the Select menu
export const createDropDownOptions = (cityList) =>  {
  const regex = /[\W_]+/g
  return cityList.map((city) => {
    let formattedCityName = city.name.toLowerCase().replace(regex, "-")
    if (city.name === "Washington, D.C.") {
      formattedCityName = "washington-dc"
    }
    return {
      value: formattedCityName,
      label: city.name,
    }
  })
}

// Creates an object with city statistics
export const createCityStatistics = (cityStats) => {
  const test = createCityStatistics2(cityStats)
  console.log('test', test)
  const statistics = cityStats.reduce((stat, category) => {
    stat[category.name] = category.score_out_of_10
    return stat
  }, {})
  return statistics
}

/// Possibly add an img key with a img file value to pass down all icons to be used when rendering the category name and score with an image icon
export const createCityStatistics2 = (cityStats) => {
  const statistics2 = cityStats.reduce((stat, category) => {
    const obj ={}
    obj[[category.name]]= category.score_out_of_10
    // stat[category.name] = category.score_out_of_10
    stat.push(obj)
    return stat
  }, [])
  return statistics2
}

// Formats the city data into a single object
export const cleanData = (cityData, cityImg = null) => {
  const result = Object.assign({}, ...cityData)
  const latitude = result.location.latlon.latitude
  const longitude = result.location.latlon.longitude
  const name = result.name
  const population = result.population
  const summary = result.summary
  const rating = result.teleport_city_score

  const cityInfo = {
    img: cityImg || result.photos[0].image.mobile,
    name,
    scores: createCityStatistics2(result.categories),
    latitude,
    longitude,
    population: population.toLocaleString("en-US"),
    summary,
    rating,
  }
  return cityInfo
}
