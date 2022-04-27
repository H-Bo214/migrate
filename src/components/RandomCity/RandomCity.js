import './RandomCity.css'


const RandomCity = ( { city, imgSrc } ) => {
  return (
    <div className='city-img-container'>
      <img 
        className='city-img' 
        alt="city skyline" 
        src={imgSrc}
      />
      <h3 className='city-name'>{city}</h3>
    </div>
  )
}

export default RandomCity