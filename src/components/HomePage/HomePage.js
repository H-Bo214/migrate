import Header from '../Header/Header'
import Input from '../Input/Input'
import RandomCities from '../RandomCities/RandomCities'
import { fetchUrbanAreas, fetchImages } from '../../apiCalls'
import { generateRandomCities, buildCityObject, cleanNames} from '../../helpers'
import { useState, useEffect } from 'react'

const HomePage = () => {
  const [randomCities, setRandomCities] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
   const getUrbanAreas = async () => {
     try {
       const urbanAreas = await fetchUrbanAreas()
      if (urbanAreas) {
        const urbanAreasList = urbanAreas._links['ua:items']
        const cityList = generateRandomCities(urbanAreasList)
        const names = cityList.map(city => city.name)
        const formattedNames = cleanNames(names)
        const cityUrls = cityList.map(city => city.href + 'images')
        const cityImages = await fetchImages(cityUrls)
        const images = cityImages.flatMap(el => el.photos)
        const results = buildCityObject(formattedNames, images)
        console.log('results: ', results)
        setRandomCities(results)
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
      <RandomCities  cityList={randomCities}/>
    </section>
  )
}

export default HomePage