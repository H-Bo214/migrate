import RandomCity from "../RandomCity/RandomCity"
import { formatName} from '../../helpers'
import './RandomCities.css'


const RandomCities = ( { cityList } ) => {
  const allCityNames = cityList.map(city => {
    return <RandomCity 
      key={cityList.indexOf(city)}
      city={formatName(city.name)}
      imgSrc={city.image}
    />
  })

  return (
    <section className="main-container">
      <main>
        <h2 className="greeting">Check out these cities</h2>
        {allCityNames}
      </main>
    </section>
  )
}

export default RandomCities