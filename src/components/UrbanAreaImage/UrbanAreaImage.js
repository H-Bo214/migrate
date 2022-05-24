import { Link } from 'react-router-dom'
import backBlue from '../../assets/images/back-blue.svg'
import './UrbanAreaImage.css'

const UrbanAreaImage = ( { cityName, img } ) => {
  return (
    <section className='urban-area-img-container'>
      <figure className="urban-area-figure">
        <img 
          src={img} 
          className='urban-area-img'
          alt={`${cityName} skyline`}
        />
      </figure>
      <Link to='/'>
        <button className="back-button-parent">
          <img src={backBlue} 
            alt='back button icon' 
            className="back-button-image" 
          />
        </button>
      </Link>
    </section>
  )
}

export default UrbanAreaImage