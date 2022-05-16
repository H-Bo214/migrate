import Header from '../Header/Header'
import RandomCities from '../RandomCities/RandomCities'
import HashLoader from 'react-spinners/HashLoader'
import Select from 'react-select'
import { css } from '@emotion/react'
import { fetchUrbanAreas, fetchBatchData, getGeoNameId } from '../../apiCalls'
import { generateRandomCities, buildCityObject, createOptions } from '../../helpers'
import { useState, useEffect } from 'react'
import magnifyingGlass from '../../assets/images/magnifying-glass.svg'
import './HomePage.css'

const HomePage = () => {
  const [randomCities, setRandomCities] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState(null)
  const [urbanAreaList, setUrbanAreaList] = useState([])
  
  const spinnerStyle = css`
    margin-left: 12rem;
    padding-bottom: 20rem;
  `

  useEffect(() => {
   const getUrbanAreas = async () => {
     try {
      const urbanAreas = await fetchUrbanAreas()
      if (urbanAreas) {
        const urbanAreasList = urbanAreas._links['ua:items']
        const citiesList = createOptions(urbanAreasList)
        const randomCitiesList = generateRandomCities(urbanAreasList)
        const citySlugUrls = randomCitiesList.map(city => city.href)
        const cityNames = await fetchBatchData(citySlugUrls)
        const cityImageUrls = randomCitiesList.map(city => city.href + 'images')
        const cityImages = await fetchBatchData(cityImageUrls)
        const images = cityImages.flatMap(el => el.photos)
        const results = buildCityObject(cityNames, images)
        setUrbanAreaList(citiesList)
        setIsLoading(false)
        setRandomCities(results)
      }
     } catch (error) {
      setError('An error occurred. Please refresh the browser.')
     }
   }
   getUrbanAreas()
  }, [])

const handleSelectedOption = (e) => {
  const { value } = e
  setSelectedOption(value)
}

const handleSearch = async (e) => {
  e.preventDefault()
  const slugEndPoint = `https://api.teleport.org/api/urban_areas/slug:${selectedOption}/`
  const slugData = await getGeoNameId(slugEndPoint)
  const geoNameIdEndPoint = slugData._links['ua:identifying-city'].href
  const scoresEndPoint = `https://api.teleport.org/api/urban_areas/slug:${selectedOption}/scores`
  const imagesEndPoint = `https://api.teleport.org/api/urban_areas/slug:${selectedOption}/images`
  const dataEndPoints = [slugEndPoint, scoresEndPoint, geoNameIdEndPoint, imagesEndPoint]
  const cityData = await fetchBatchData(dataEndPoints)
  console.log('cityData in handleSearch', cityData)
}

  return (
    <section className='main-content'>
      {error && <h1>{error}</h1>}
      <Header />
      <form className='select-search-container'>
        <button className='search-button'>
          <img 
          alt='blue magnifying glass icon' 
          src={magnifyingGlass} 
          onClick={handleSearch}
          className='search-icon'
          />
        </button>
        <Select 
          defaultValue={selectedOption}
          onChange={handleSelectedOption}
          options={urbanAreaList}
          className='select-menu'
          placeholder='Search or select a city'
        />
      </form>
      {isLoading ? 
      <HashLoader 
        color='#2E84FF' 
        loading={isLoading} 
        size={100} 
        css={spinnerStyle}/>  :
      <RandomCities  
        cityList={randomCities}  
      />
    }
    </section>
  )
}

export default HomePage