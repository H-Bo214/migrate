import { useLocation } from "react-router-dom"
import UrbanAreaImage from "../UrbanAreaImage/UrbanAreaImage"
import CityRating from "../CityRating/CityRating"
import LocationPopulation from "../LocationPopulation/LocationPopulation"
import Categories from "../Categories/Categories"
import Summary from "../Summary/Summary"

const UrbanAreaDetails = () => {
  let location = useLocation()
  let { state } = location
  const {
    img,
    name,
    rating,
    latitude,
    longitude,
    population,
    scores,
    summary,
  } = state

  return (
    <main className="main-content-urban-areas">
      <UrbanAreaImage cityName={name} img={img} />
      <CityRating cityName={name} rating={rating} />
      <LocationPopulation
        latitude={latitude}
        longitude={longitude}
        population={population}
      />
      <Categories scores={scores} />
      <Summary summary={summary} />
    </main>
  )
}

export default UrbanAreaDetails
