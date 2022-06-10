import RandomCity from "../RandomCity/RandomCity"
import { cleanData, makeCityEndPointsArr } from "../../helpers"
import { useNavigate } from "react-router-dom"
import { fetchBatchData } from "../../apiCalls"
import "./RandomCities.css"
import PropTypes from "prop-types"

const RandomCities = ({ cityList, setIsLoading }) => {
  const navigate = useNavigate()

  const handleFetchCityDetails = async (cityName) => {
    setIsLoading(true)
    const cityToGet = cityList.find((city) => city.name === cityName)
    const endPoints = makeCityEndPointsArr(cityToGet)
    const cityDetails = await fetchBatchData(endPoints)
    const cityData = cleanData(cityDetails, cityToGet.image)
    navigate(`/urbanAreaDetails/${cityToGet.name}`, { state: cityData })
  }

  const allCityNames = cityList.map((city) => {
    return (
      <RandomCity
        key={city.ua_id}
        city={city.name}
        imgSrc={city.image}
        handleFetchCityDetails={handleFetchCityDetails}
      />
    )
  })

  return (
    <section className="main-container">
      <main className="main-content-random-cities">
        <h2 className="greeting">Check out these cities</h2>
        {allCityNames}
      </main>
    </section>
  )
}

RandomCities.propTypes = {
  cityList: PropTypes.array,
  setIsLoading: PropTypes.func
}

export default RandomCities
