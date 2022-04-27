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

export function cleanNames(arr) {
  const regex = /[,|.|\s]/g
  return arr.map(str => str.replaceAll(regex, '-'))
}

export function formatName(str) {
  const regex = /[-]/g
  return str.replace(regex, ' ')
}

export function buildCityObject(cityNames, cityImages) {
  const result = cityNames.reduce((cityData, name) => {
    const obj = {}
    cityImages.forEach(img => {
      if (img.image.mobile.includes(name.toLowerCase())) {
        obj.name = name
        obj.image = img.image.mobile
      }
    })
    cityData.push(obj)
    return cityData
  }, [])
  return result
}