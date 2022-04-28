import RandomCity from "../RandomCity/RandomCity"
import { useState } from 'react'
import './RandomCities.css'
import { getCityDetails } from '../../apiCalls'
import { cleanData } from '../../helpers'

const RandomCities = ( { cityList } ) => {
  const [cityDetails, setCityDetails] = useState({})

  // console.log('cityList', cityList)

  const makeCityUrlsArr = (cityObj) => {
    const result = []
    for (let key in cityObj) {
      if (cityObj[key].includes('api.teleport.org')) {
        result.push(cityObj[key])
      }
    }
    return result
  }
  
  const handleFetchCityDetails = async (cityName) => {
    const cityToGet = cityList.find(city => city.name === cityName)
    const urlArray = makeCityUrlsArr(cityToGet)
    const fetchedCityDetails = await getCityDetails(urlArray)
    const data = cleanData(fetchedCityDetails, cityToGet.image)
    console.log('data', data)
  }

  const allCityNames = cityList.map(city => {
    return <RandomCity 
      key={city.ua_id}
      city={city.name}
      imgSrc={city.image}
      cityDetails={handleFetchCityDetails}
    />
  })

  return (
    <section className="main-container">
      <main>
        <h2 className="greeting">Check out these cities</h2>
        {allCityNames}
      </main>
    </section>
  )
}

export default RandomCities