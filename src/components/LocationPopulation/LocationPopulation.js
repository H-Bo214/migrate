import './LocationPopulation.css'
import pinDrop from '../../assets/images/pin.svg'
import people from '../../assets/images/people.svg'

const LocationPopulation = ( { latitude, longitude, population } ) => {
  return (
    <section className='location-population-container'>
      <div className='location-container'>
        <img 
          alt ='blue pin-drop icon'
          src={pinDrop}
        />
        <h2 className='demographic-heading'>Location</h2>
        <p className='latitude'>{latitude},</p>
        <p className='longitude'>{longitude}</p>
      </div>
      <div className='population-container'>
        <img 
          alt='blue crowd of people icon'
          src={people}
        />
        <h2 className='demographic-heading'>Population</h2>
        <p className='population'>{population}</p>
      </div>
    </section>
  )
}

export default LocationPopulation