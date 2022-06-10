import "./RandomCity.css"
import PropTypes from "prop-types"

const RandomCity = ({ city, imgSrc, handleFetchCityDetails }) => {
  return (
    <figure className="city-img-container">
      <img
        className="city-img"
        alt={`${city} skyline`}
        src={imgSrc}
        onClick={() => handleFetchCityDetails(city)}
      />
      <figcaption className="city-name">{city}</figcaption>
    </figure>
  )
}

RandomCity.propTypes = {
  city: PropTypes.string,
  imgSrc: PropTypes.string,
  handleFetchCityDetails: PropTypes.func
}

export default RandomCity
