import './CityRating.css'
import star from '../../assets/images/star.svg'

const CityRating = ( { cityName, rating } ) => {
  const overallRating = Math.round(rating)
  return (
    <section className='city-rating-container'>
      <div>
        <h1 className='city'>{cityName}</h1>
      </div>
      <div className='rating-container'>
        <img 
          src={star}
          alt='Blue star icon.'
          className='star-icon'
        />
        <p className='overall-score'><span className ='overall-rating'>{overallRating}</span> / 100</p>
      </div>
    </section>
  )
}

export default CityRating