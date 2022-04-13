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