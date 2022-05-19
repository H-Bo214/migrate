import { useParams, useLocation } from "react-router-dom"
import './UrbanAreaDetails.css'
import '../CityRating/CityRating'
import CityRating from "../CityRating/CityRating"
import LocationPopulation from "../LocationPopulation/LocationPopulation"
import Categories from "../Categories/Categories"
import Summary from "../Summary/Summary"

const UrbanAreaDetails = () => {
  let {cityName} = useParams()
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
    summary 
  } = state

  return (
    <main className="main-content-urban-areas">
      <section className='urban-area-img-container'>
        <img 
          src={img} 
          className='urban-area-img'
          alt={`${cityName} skyline`}
        />
      </section>
      <CityRating cityName={name} rating={rating}/>
      <LocationPopulation 
        latitude={latitude}
        longitude={longitude}
        population={population}
      />
      <Categories 
      scores={scores}
      // isCompleted={isCompleted}
      />
      <Summary summary={summary}/>
    </main>
  )
}

export default UrbanAreaDetails