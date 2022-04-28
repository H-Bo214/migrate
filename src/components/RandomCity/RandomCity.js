import './RandomCity.css'
import { useNavigate } from 'react-router-dom'
const RandomCity = ( { city, imgSrc, cityDetails } ) => {
  // const navigate = useNavigate()
  return (
    <div className='city-img-container'>
      <img 
        className='city-img' 
        alt="city skyline" 
        src={imgSrc}
        // onClick={() => {
        //   navigate(`/urbanAreaDetails/${city}`)
        // }}
        onClick={() => cityDetails(city)}
      />
      <h3 className='city-name'>{city}</h3>
    </div>
  )
}

export default RandomCity