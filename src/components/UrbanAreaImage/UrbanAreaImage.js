import { Link } from "react-router-dom"
import backBlue from "../../assets/images/back-blue.svg"
import "./UrbanAreaImage.css"
import PropTypes from "prop-types"

const UrbanAreaImage = ({ cityName, img }) => {
  return (
    <section className="urban-area-img-container">
      <figure className="urban-area-figure">
        <img src={img} className="urban-area-img" alt={`${cityName} skyline`} />
      </figure>
      <Link to="/">
        <button className="back-button-parent">
          <img
            src={backBlue}
            alt="back button icon"
            className="back-button-image"
            width="22"
            height="39"
          />
        </button>
      </Link>
    </section>
  )
}

UrbanAreaImage.propTypes = {
  cityName: PropTypes.string,
  img: PropTypes.string
}

export default UrbanAreaImage
