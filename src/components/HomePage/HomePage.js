import Header from '../Header/Header'
import Input from '../Input/Input'
import RandomCities from '../RandomCities/RandomCities'
import HashLoader from 'react-spinners/HashLoader'
import { css } from '@emotion/react'
import { fetchUrbanAreas, fetchImages, fetchFullCityNames } from '../../apiCalls'
import { generateRandomCities, buildCityObject } from '../../helpers'
import { useState, useEffect } from 'react'
import './HomePage.css'

const HomePage = () => {
  const [randomCities, setRandomCities] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
   const getUrbanAreas = async () => {
     try {
      const urbanAreas = await fetchUrbanAreas()
      if (urbanAreas) {
        const urbanAreasList = urbanAreas._links['ua:items']
        console.log('urbanAreasList', urbanAreasList)
        const cityList = generateRandomCities(urbanAreasList)
        const citySlugUrls = cityList.map(city => city.href)
        const cityNames = await fetchFullCityNames(citySlugUrls)
        const cityImageUrls = cityList.map(city => city.href + 'images')
        const cityImages = await fetchImages(cityImageUrls)
        const images = cityImages.flatMap(el => el.photos)
        const results = buildCityObject(cityNames, images)
        setIsLoading(false)
        setRandomCities(results)
      }
     } catch (error) {
      setError('An error occurred. Please refresh the browser.')
     }
   }
   getUrbanAreas()
  }, [])

  const spinnerStyle = css`
  margin-left: 12rem;
  padding-bottom: 20rem;
`;

  return (
    <section className='main-content'>
      {error && <h1>{error}</h1>}
      <Header />
      <Input />
      {isLoading ? 
      <HashLoader color='#2E84FF' loading={isLoading} size={100} css={spinnerStyle}/>  :
      <RandomCities  
        cityList={randomCities}  
      />
    }

    </section>
  )
}

export default HomePage