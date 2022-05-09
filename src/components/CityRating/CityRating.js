import './CityRating.css'
import star from '../../assets/images/star.svg'

const CityRating = ( { cityName, rating } ) => {
  return (
    <section className='city-rating-container'>
      <div className='city-name-container'>
        <h1>{cityName}</h1>
      </div>
      <div className='rating-container'>
        <img 
          src={star}
          alt='Blue star icon'
          className='star-icon'
        />
        <p>{Math.round(rating)} / 100</p>
      </div>
    </section>
  )
}

export default CityRating