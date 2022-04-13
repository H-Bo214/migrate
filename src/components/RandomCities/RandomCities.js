import RandomCity from "../RandomCity/RandomCity"

const RandomCities = ( { cityNames } ) => {
  const allCityNames = cityNames.map(cityName => {
    return <RandomCity 
      key={cityNames.indexOf(cityName)}
      city={cityName}
    />
  })
  return (
    <section className="main-container">
      <main>
        <h2>Check out these cities</h2>
        {allCityNames}
      </main>
    </section>
  )
}

export default RandomCities