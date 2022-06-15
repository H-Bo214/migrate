import "./CityRating.css"
import star from "../../assets/images/star.svg"
import PropTypes from "prop-types"

const CityRating = ({ cityName, rating }) => {
  const overallRating = Math.round(rating)
  return (
    <section className="city-rating-container">
      <div>
        <h1 className="city">{cityName}</h1>
      </div>
      <div className="rating-container">
        <img 
          src={star} 
          alt="Blue star icon." 
          className="star-icon" 
          width="16" 
          height="16"
        />
        <p className="overall-score">
          <span className="overall-rating">{overallRating}</span> / 100
        </p>
      </div>
    </section>
  )
}

CityRating.propTypes = {
  cityName: PropTypes.string,
  rating: PropTypes.number
}

export default CityRating
