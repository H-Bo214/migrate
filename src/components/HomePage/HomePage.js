import Header from "../Header/Header"
import RandomCities from "../RandomCities/RandomCities"
import CitySelectionForm from "../CitySelectionForm/CitySelectionForm"
import Error from "../Error/Error"
import PulseLoader from "react-spinners/PulseLoader"
import { fetchData, fetchBatchData } from "../../apiCalls"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./HomePage.css"
import { spinnerStyle } from "../../styles.js"
import {
  generateRandomCities,
  buildCityObject,
  createDropDownOptions,
  cleanData,
} from "../../helpers"

const HomePage = () => {
  const navigate = useNavigate()
  const urbanAreasAPI =
    "https://api.teleport.org/api/continents/geonames%3ANA/urban_areas/"
  const [urbanAreaList, setUrbanAreaList] = useState([])
  const [randomCities, setRandomCities] = useState([])
  const [selectedCity, setSelectedCity] = useState(null)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [searchError, setSearchError] = useState(false)

  useEffect(() => {
    const getUrbanAreas = async () => {
      try {
        const urbanAreas = await fetchData(urbanAreasAPI)
        if (urbanAreas) {
          const urbanAreasList = urbanAreas._links["ua:items"]
          const citiesList = createDropDownOptions(urbanAreasList)
          setUrbanAreaList(citiesList)
          const randomCitiesList = generateRandomCities(4, urbanAreasList)
          const citySlugUrls = randomCitiesList.map((city) => city.href)
          const cityNames = await fetchBatchData(citySlugUrls)
          const cityImageUrls = randomCitiesList.map(
            (city) => city.href + "images"
          )
          const cityImages = await fetchBatchData(cityImageUrls)
          const images = cityImages.flatMap((el) => el.photos)
          const results = buildCityObject(cityNames, images)
          setRandomCities(results)
          setIsLoading(false)
        }
      } catch (error) {
        setError("An error occurred. Please refresh the browser.")
      }
    }
    getUrbanAreas()
  }, [])

  const handleSelectedCity = (e) => {
    const { value } = e
    setSelectedCity(value)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e)
    }
  }

  const handleSearch = async (e) => {
    const teleportRootEndpoint = "https://api.teleport.org/api/urban_areas/slug:"
    e.preventDefault()
    if (selectedCity === null) {
      setSearchError(true)
      return
    }
    setIsLoading(true)
    const slugEndPoint = `${teleportRootEndpoint}${selectedCity}/`
    const scoresEndPoint = `${teleportRootEndpoint}${selectedCity}/scores`
    const imagesEndPoint = `${teleportRootEndpoint}${selectedCity}/images`
    const slugData = await fetchData(slugEndPoint)
    const geoNameIdEndPoint = slugData._links["ua:identifying-city"].href
    const dataEndPoints = [
      slugEndPoint,
      scoresEndPoint,
      geoNameIdEndPoint,
      imagesEndPoint,
    ]
    const cityData = await fetchBatchData(dataEndPoints)
    const formattedData = cleanData(cityData)
    navigate(`/urbanAreaDetails/${formattedData.name}`, {
      state: formattedData,
    })
  }

  return (
    <section className="main-content">
      <Header />
      <CitySelectionForm
        handleSearch={handleSearch}
        selectedCity={selectedCity}
        handleSelectedCity={handleSelectedCity}
        urbanAreaList={urbanAreaList}
        setSearchError={setSearchError}
        searchError={searchError}
        handleKeyDown={handleKeyDown}
      />
      {error && <Error errorMsg={error} />}
      {isLoading ? (
        <PulseLoader
          color="#3EDCEB"
          loading={isLoading}
          size={30}
          css={spinnerStyle}
        />
      ) : (
        <RandomCities cityList={randomCities} setIsLoading={setIsLoading} />
      )}
    </section>
  )
}

export default HomePage
