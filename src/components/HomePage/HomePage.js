import Header from '../Header/Header'
import Input from '../Input/Input'
import RandomCities from '../RandomCities/RandomCities'
import { fetchUrbanAreas } from '../../apiCalls'
import { generateRandomCities } from '../../helpers'
import { useState, useEffect } from 'react'

const HomePage = () => {
  const [cityNames, setCityNames] = useState([])
  const [citiesUrl, setCitiesUrl] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
   const getUrbanAreas = async () => {
     try {
       const urbanAreas = await fetchUrbanAreas()
      if (urbanAreas) {
        const urbanAreasList = urbanAreas._links['ua:items']
        const cityList = generateRandomCities(urbanAreasList)
        const names = cityList.map(city => city.name)
        const cityUrls = cityList.map(city => city.href)
        setCityNames(names)
        setCitiesUrl(cityUrls)
      }
     } catch (error) {
      setError('An error occurred. Please refresh the browser.')
     }
   }
   getUrbanAreas()
  }, [])

  return (
    <section>
      <Header />
      <Input />
      <RandomCities cityNames={cityNames} />
    </section>
  )
}

export default HomePage