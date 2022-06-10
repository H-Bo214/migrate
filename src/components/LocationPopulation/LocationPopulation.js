import pinDrop from "../../assets/images/pin.svg"
import people from "../../assets/images/people.svg"
import "./LocationPopulation.css"
import PropTypes from "prop-types"

const LocationPopulation = ({ latitude, longitude, population }) => {
  return (
    <section className="location-population-container">
      <a
        href={`https://www.google.com/maps?q=${latitude},${longitude}`}
        className="location-container"
        target="-blank"
      >
        <img
          alt="Blue pin-drop icon. Opens google maps to the city coordinates specified."
          src={pinDrop}
        />
        <h2 className="demographic-heading">Location</h2>
        <p className="latitude">{latitude},</p>
        <p className="longitude">{longitude}</p>
      </a>
      <div className="population-container">
        <img alt="Blue crowd of people icon." src={people} />
        <h2 className="demographic-heading">Population</h2>
        <p className="population">{population}</p>
      </div>
    </section>
  )
}

LocationPopulation.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  population: PropTypes.string,
}

export default LocationPopulation
