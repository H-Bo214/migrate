import Header from '../Header/Header'
import RandomCities from '../RandomCities/RandomCities'
import HashLoader from 'react-spinners/HashLoader'
import Select from 'react-select'
import { fetchUrbanAreas, fetchBatchData, getGeoNameId } from '../../apiCalls'
import { generateRandomCities, buildCityObject, createDropDownOptions, cleanData } from '../../helpers'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import magnifyingGlass from '../../assets/images/magnifying-glass.svg'
import './HomePage.css'
import { customStyles, customStyles2, spinnerStyle, customTheme } from '../../styles.js'

const HomePage = () => {
  const navigate = useNavigate()
  const [urbanAreaList, setUrbanAreaList] = useState([])
  const [randomCities, setRandomCities] = useState([])
  const [selectedCity, setSelectedCity] = useState(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [searchError, setSearchError] = useState(false)

  useEffect(() => {
   const getUrbanAreas = async () => {
     try {
      const urbanAreas = await fetchUrbanAreas()
      if (urbanAreas) {
        const urbanAreasList = urbanAreas._links['ua:items']
        const citiesList = createDropDownOptions(urbanAreasList)
        const randomCitiesList = generateRandomCities(4, urbanAreasList)
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

  const handleSelectedCity = (e) => {
    const { value } = e
    setSelectedCity(value)
  }

  const handleSearch = async (e) => {
    const teleportRootEndpoint = 'https://api.teleport.org/api/urban_areas/slug:'
    e.preventDefault()
    if (selectedCity === null) {
      setSearchError(true)
      return
    }
    setIsLoading(true)
    const slugEndPoint = `${teleportRootEndpoint}${selectedCity}/`
    const scoresEndPoint = `${teleportRootEndpoint}${selectedCity}/scores`
    const imagesEndPoint = `${teleportRootEndpoint}${selectedCity}/images`
    const slugData = await getGeoNameId(slugEndPoint)
    const geoNameIdEndPoint = slugData._links['ua:identifying-city'].href
    const dataEndPoints = [
      slugEndPoint, 
      scoresEndPoint, 
      geoNameIdEndPoint, 
      imagesEndPoint
    ]
    const cityData = await fetchBatchData(dataEndPoints)
    const formattedData = cleanData(cityData)

    navigate(`/urbanAreaDetails/${formattedData.name}`, {state: formattedData})
  }

  return (
    <section className='main-content'>
      <Header />
      <form className='select-search-container'>
        <button className='search-button' type='submit'>
          <img 
          alt='blue magnifying glass icon' 
          src={magnifyingGlass} 
          onClick={handleSearch}
          className='search-icon'
          />
        </button>
        <Select 
          defaultValue={selectedCity}
          onChange={handleSelectedCity}
          onFocus={() => setSearchError(false)}
          options={urbanAreaList}
          className='select-menu'
          placeholder='Search or select a city'
          autoFocus
          blurInputOnSelect
          styles={searchError ? customStyles2 : customStyles}
          theme={customTheme}
          />
      </form>
      {error && <h1 className='error-msg'>{error}</h1>}
      {isLoading ? 
      <HashLoader 
      color='#2E84FF' 
      loading={isLoading} 
      size={100} 
      css={spinnerStyle}/>  :
      <RandomCities  
      cityList={randomCities}
      setIsLoading={setIsLoading}  
      />
    }
    </section>
  )
}
console.log('customStyles', customStyles)

export default HomePage