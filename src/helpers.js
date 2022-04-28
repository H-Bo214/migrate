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
  console.log('cityList', cityNames)
  console.log('cityImages', cityImages)
  const result = cityNames.reduce((cityData, city) => {
    console.log('city', city)
    const obj = {}
      cityImages.forEach(img => {
      if (img.image.mobile.includes(city.slug)) {
        obj.name = city.full_name
        obj.image = img.image.mobile
        obj.ua_id = city.ua_id
      }
    })
    cityData.push(obj)
    return cityData
  }, [])
  return result
}