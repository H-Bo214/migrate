import './RandomCity.css'

const RandomCity = ( { city, imgSrc, handleFetchCityDetails } ) => {
  return (
    <figure className='city-img-container'>
      <img 
        className='city-img' 
        alt={`${city} skyline`}
        src={imgSrc}
        onClick={() => handleFetchCityDetails(city)}
      />
      <figcaption className='city-name'>{city}</figcaption>
    </figure>
  )
}

export default RandomCity