import './RandomCity.css'
const RandomCity = ( { city, imgSrc, handleFetchCityDetails } ) => {
  return (
    <div className='city-img-container'>
      <img 
        className='city-img' 
        alt={`${city} skyline`}
        src={imgSrc}
        onClick={() => handleFetchCityDetails(city)}
      />
      <h3 className='city-name'>{city}</h3>
    </div>
  )
}

export default RandomCity