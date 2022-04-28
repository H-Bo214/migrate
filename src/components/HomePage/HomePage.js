import Header from '../Header/Header'
import Input from '../Input/Input'
import RandomCities from '../RandomCities/RandomCities'
import { fetchUrbanAreas, fetchImages, fetchFullCityNames } from '../../apiCalls'
import { generateRandomCities, buildCityObject } from '../../helpers'
import { useState, useEffect } from 'react'
import './HomePage.css'

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
        const citySlugUrls = cityList.map(city => city.href)
        const cityNames = await fetchFullCityNames(citySlugUrls)
        const cityImageUrls = cityList.map(city => city.href + 'images')
        const cityImages = await fetchImages(cityImageUrls)
        const images = cityImages.flatMap(el => el.photos)
        const results = buildCityObject(cityNames, images)
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
    <section className='main-content'>
      <Header />
      <Input />
      <RandomCities  cityList={randomCities}/>
    </section>
  )
}

export default HomePage